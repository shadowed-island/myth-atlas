from __future__ import annotations

import hashlib
import html
import json
import os
import pathlib
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from difflib import SequenceMatcher


ROOT = pathlib.Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "lib/story-narratives.generated.ts"
CURATED_PATH = ROOT / "lib/story-narratives.curated.json"
CACHE_DIR = ROOT / ".cache/story-narratives"
USER_AGENT = "myth-atlas-codex/2.0 (source-grounded narrative rebuild)"
TIMEOUT = 20
MAX_UNITS = 12
REQUEST_DELAY = float(os.environ.get("WIKI_DELAY", "0.15"))
MAX_RETRIES = 4

EN_PREFERRED_HEADINGS = [
    "plot",
    "story",
    "legend",
    "myth",
    "synopsis",
    "narrative",
    "overview",
    "mythology",
    "tradition",
]
ZH_PREFERRED_HEADINGS = [
    "故事概要",
    "故事概述",
    "故事",
    "情節",
    "情节",
    "劇情",
    "剧情",
    "传说",
    "傳說",
    "神话",
    "神話",
    "梗概",
    "概要",
]

EN_BLOCKED_HEADINGS = {
    "analysis",
    "bibliography",
    "books",
    "cultural references",
    "culture",
    "etymology",
    "external links",
    "further reading",
    "gallery",
    "legacy",
    "modern",
    "notes",
    "popular culture",
    "references",
    "see also",
    "works",
}
ZH_BLOCKED_HEADINGS = {
    "參考資料",
    "参考资料",
    "外部链接",
    "外部連結",
    "延伸閱讀",
    "相關條目",
    "相关条目",
    "流行文化",
    "文化藝術",
    "文化艺术",
    "故事內涵",
    "故事内涵",
    "起源地",
    "参考文献",
    "參見",
    "参见",
}

EN_META_PATTERNS = [
    r"\bis (?:a|an|the)\b.+\b(?:novel|poem|deity|figure|festival|tradition|literary work)\b",
    r"\bpublished\b",
    r"\btranslation\b",
    r"\btranslated\b",
    r"\bscholar",
    r"\bscholars\b",
    r"\bselected as\b",
    r"\bpopular culture\b",
    r"\breferenced in\b",
    r"\bclassification\b",
    r"\bcatalogue\b",
    r"\bindex\b",
    r"\bgenre\b",
    r"\bappears in\b",
    r"\battested\b",
    r"\bwebtoon\b",
    r"\bepisode\b",
    r"\bstream(?:ing)?\b",
    r"\bwritten by\b",
    r"\bart by\b",
    r"\bupdated every\b",
    r"\bdiscover\b",
    r"\bretold by\b",
    r"\bpdf\b",
]
ZH_META_PATTERNS = [
    r"中國四大民間傳說",
    r"中国四大民间传说",
    r"文化中的",
    r"起源地",
    r"參考資料",
    r"参考资料",
    r"外部链接",
    r"外部連結",
    r"學者",
    r"学者",
    r"文獻",
    r"文献",
    r"流行文化",
    r"文化藝術",
    r"文化艺术",
    r"故事演進",
    r"故事演进",
    r"起源很早",
    r"高清在线观看",
    r"播放",
    r"弹幕",
    r"出演演员",
    r"作者",
    r"简介",
    r"维基百科",
    r"百度百科",
]

EN_ACTION_MARKERS = [
    "arrives",
    "asks",
    "banished",
    "becomes",
    "binds",
    "breaks",
    "brings",
    "crosses",
    "cuts",
    "descends",
    "discovers",
    "drinks",
    "drives",
    "fights",
    "finds",
    "flees",
    "follows",
    "forbids",
    "forms",
    "gives",
    "goes",
    "guides",
    "hides",
    "kills",
    "leads",
    "lifts",
    "marries",
    "meets",
    "opens",
    "pulls",
    "pursues",
    "reaches",
    "releases",
    "rescues",
    "returns",
    "rises",
    "sends",
    "separates",
    "steals",
    "strikes",
    "takes",
    "teaches",
    "tests",
    "transforms",
    "travels",
    "turns",
]
ZH_ACTION_MARKERS = [
    "来到",
    "变成",
    "化作",
    "命",
    "告诉",
    "夺回",
    "嫁给",
    "娶",
    "形成",
    "成为",
    "打败",
    "打开",
    "救",
    "来到",
    "放出",
    "斩",
    "杀",
    "渡过",
    "生下",
    "相会",
    "离开",
    "穿过",
    "答应",
    "结婚",
    "让",
    "追到",
    "送到",
    "遇见",
    "分开",
    "返回",
    "允许",
    "追赶",
    "跨过",
    "降下",
    "飞回",
]

_memory_cache: dict[tuple[str, str], dict] = {}


def main() -> int:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    stories = load_stories()
    allowed_ids = load_allowed_story_ids()
    if allowed_ids is not None:
        stories = [story for story in stories if story["id"] in allowed_ids]
    if os.environ.get("ONLY_SYNTHETIC") == "1":
        stories = [story for story in stories if is_synthetic_seed(story)]
    limit = int(os.environ.get("LIMIT_STORIES", "0") or "0")
    start_index = int(os.environ.get("START_INDEX", "0") or "0")
    if start_index > 0:
        stories = stories[start_index:]
    if limit > 0:
        stories = stories[:limit]

    total = len(stories)
    curated_narratives = load_curated_narratives()
    narratives: dict[str, dict[str, list[str]]] = load_existing_narratives() if os.environ.get("MERGE_EXISTING") == "1" else {}
    unresolved: list[str] = []

    for index, story in enumerate(stories, start=1):
        if story.get("narrativeParagraphs"):
            narratives[story["id"]] = story["narrativeParagraphs"]
            continue
        if story["id"] in curated_narratives:
            narratives[story["id"]] = curated_narratives[story["id"]]
            continue
        if is_synthetic_seed(story):
            narratives[story["id"]] = build_synthetic_atlas_narrative(story)
            continue

        print(f"[{index}/{total}] rebuilding {story['id']}", file=sys.stderr, flush=True)

        try:
            narratives[story["id"]] = build_story_narrative(story)
        except Exception as exc:  # noqa: BLE001
            unresolved.append(f"{story['id']}: {exc}")
            narratives[story["id"]] = fallback_narrative(story)
            print(f"[fallback] {story['id']}: {exc}", file=sys.stderr, flush=True)

    write_output(narratives)
    print(
        json.dumps(
            {
                "stories": total,
                "narratives": len(narratives),
                "unresolved": len(unresolved),
                "unresolved_ids": unresolved[:30],
            },
            ensure_ascii=False,
            indent=2,
        ),
        file=sys.stderr,
    )
    return 0


def load_allowed_story_ids() -> set[str] | None:
    ids_path = os.environ.get("STORY_IDS_FILE")
    if not ids_path:
        return None
    path = pathlib.Path(ids_path)
    if not path.is_absolute():
        path = ROOT / path
    values = [line.strip() for line in path.read_text(encoding="utf-8").splitlines()]
    return {value for value in values if value}


def load_curated_narratives() -> dict[str, dict[str, list[str]]]:
    if not CURATED_PATH.exists():
        return {}
    return json.loads(CURATED_PATH.read_text(encoding="utf-8"))


def load_existing_narratives() -> dict[str, dict[str, list[str]]]:
    if not OUTPUT_PATH.exists():
        return {}
    source = OUTPUT_PATH.read_text(encoding="utf-8")
    match = re.search(
        r"export const storyNarratives:[\s\S]*?=\s*(\{[\s\S]*\}) as const;",
        source,
    )
    if not match:
        return {}
    return json.loads(match.group(1))


def load_stories() -> list[dict]:
    js = r"""
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const storiesPath = path.join(process.cwd(), "lib/stories.ts");
const source = fs.readFileSync(storiesPath, "utf8");
const executable = source
  .replace(/^import .*$/gm, "")
  .replace(/const text = \(en: string, zh: string\) =>/g, "const text = (en, zh) =>")
  .replace(/export const stories: Story\[\] =/g, "const stories =")
  .replace(/type AdditionalStorySeed = readonly \[[\s\S]*?\];\n\n/g, "")
  .replace(/const additionalStorySeeds: AdditionalStorySeed\[\] =/g, "const additionalStorySeeds =")
  .replace(/const categoryStoryLanguage: Record<Story\[\"category\"\], \{[\s\S]*?\}> =/g, "const categoryStoryLanguage =")
  .replace(/function getAdditionalStoryId\(baseId: string\)/g, "function getAdditionalStoryId(baseId)")
  .replace(/\}\s+satisfies Story;/g, "};")
  .concat("\nmodule.exports = { stories };");

const sandbox = { module: { exports: {} }, exports: {} };
vm.runInNewContext(executable, sandbox, { filename: storiesPath });
process.stdout.write(JSON.stringify(sandbox.module.exports.stories));
"""
    result = subprocess.run(
        ["node", "-e", js],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def build_story_narrative(story: dict) -> dict[str, list[str]]:
    en_page = resolve_page("en", story)
    zh_page = resolve_page("zh", story, en_page=en_page)
    return {
        "en": group_units(build_story_units("en", story, en_page), "en"),
        "zh": group_units(build_story_units("zh", story, zh_page), "zh"),
    }


def build_story_units(lang: str, story: dict, page: dict | None) -> list[str]:
    units: list[str] = []
    seen: set[str] = set()
    page_units: list[str] = []
    page_similarity = 0.0
    page_is_specific = False

    if page:
        title_key = "en" if lang == "en" else "zh"
        specificity_candidates = [story["title"][title_key]]
        candidates = [story["title"][title_key]]
        original = story.get("originalTitle", {}).get(title_key)
        if original:
            specificity_candidates.append(original)
            candidates.append(original)
        if lang == "en" and story.get("sourceUrl"):
            candidates.append(extract_title_from_url(story["sourceUrl"]).replace("_", " "))
        page_similarity = max(score_title(candidate, page.get("title", ""), story, lang) for candidate in candidates)
        normalized_page_title = normalize(page.get("title", ""))
        page_is_specific = any(normalize(candidate) == normalized_page_title for candidate in specificity_candidates)
        page_units = select_page_units(lang, story, page)

    snippet_units: list[str] = []
    if (not page or not page_is_specific) and os.environ.get("DISABLE_WEB_SEARCH") != "1":
        snippet_units = web_search_units(lang, story)

    primary_units = snippet_units + page_units if not page_is_specific else page_units + snippet_units

    for unit in primary_units:
        cleaned = clean_unit(unit, lang)
        if cleaned and cleaned not in seen:
            units.append(cleaned)
            seen.add(cleaned)

    for unit in story_summary_units(lang, story):
        cleaned = clean_unit(unit, lang)
        if cleaned and cleaned not in seen:
            units.append(cleaned)
            seen.add(cleaned)
        if len(units) >= MAX_UNITS:
            break

    if len(units) < MAX_UNITS:
        for unit in descriptive_fallback_units(lang, story):
            cleaned = clean_unit(unit, lang)
            if cleaned and cleaned not in seen:
                units.append(cleaned)
                seen.add(cleaned)
            if len(units) >= MAX_UNITS:
                break

    return normalize_unit_count(units, lang, story)


def select_page_units(lang: str, story: dict, page: dict) -> list[str]:
    sections = split_sections(page.get("extract", ""))
    preferred_blocks: list[tuple[str, str]] = []
    fallback_blocks: list[tuple[str, str]] = []
    lead_blocks: list[tuple[str, str]] = []

    for heading, body in sections:
        if not body.strip():
            continue
        if heading and is_blocked_heading(lang, heading):
            continue
        score = score_section_heading(lang, story, heading)
        if not heading:
            lead_blocks.append((heading, body))
        elif score > 0:
            preferred_blocks.append((heading, body))
        else:
            fallback_blocks.append((heading, body))

    if preferred_blocks:
        blocks = preferred_blocks
    elif lead_blocks:
        blocks = lead_blocks + fallback_blocks
    else:
        blocks = fallback_blocks or sections
    candidates: list[tuple[float, int, str]] = []

    for block_index, (_, body) in enumerate(blocks):
        for clause_index, unit in enumerate(extract_units(body, lang)):
            cleaned = clean_unit(unit, lang)
            if not cleaned:
                continue
            score = score_unit(cleaned, story, lang)
            candidates.append((score, block_index * 100 + clause_index, cleaned))

    chosen = [unit for score, _, unit in candidates if score >= 1.1]

    if len(chosen) < MAX_UNITS:
        for score, _, unit in candidates:
            if unit in chosen:
                continue
            if score >= 0.45:
                chosen.append(unit)
            if len(chosen) >= MAX_UNITS:
                break

    if len(chosen) < MAX_UNITS:
        for _, _, unit in candidates:
            if unit not in chosen:
                chosen.append(unit)
            if len(chosen) >= MAX_UNITS:
                break

    return chosen[:MAX_UNITS]


def split_sections(text: str) -> list[tuple[str, str]]:
    if not text:
        return [("", "")]

    parts = re.split(r"(?:^|\n)==+\s*(.*?)\s*==+\s*(?:\n|$)", text)
    sections: list[tuple[str, str]] = []
    lead = parts[0].strip()
    if lead:
        sections.append(("", lead))
    for index in range(1, len(parts), 2):
        heading = parts[index].strip()
        body = parts[index + 1].strip() if index + 1 < len(parts) else ""
        if body:
            sections.append((heading, body))
    return sections


def extract_units(text: str, lang: str) -> list[str]:
    if os.environ.get("FAST_WIKI") == "1":
        return split_sentences(text, lang)[: MAX_UNITS * 2]

    units: list[str] = []
    for sentence in split_sentences(text, lang):
        units.extend(split_into_clauses(sentence, lang))
    return units


def split_sentences(text: str, lang: str) -> list[str]:
    text = text.replace("\xa0", " ").replace("\n", " ")
    pattern = r"[^。！？!?]+[。！？!?]?" if lang == "zh" else r"[^.!?]+[.!?]+(?:[\"'”])?|[^.!?]+$"
    return [item.strip() for item in re.findall(pattern, text) if item.strip()]


def split_into_clauses(sentence: str, lang: str) -> list[str]:
    sentence = sentence.strip()
    if not sentence:
        return []

    if lang == "en":
        parts = re.split(
            r";\s+|:\s+(?=[A-Z\"'])|,\s+(?=(?:then|later|after|before|when|while|once|until|so|but|and thus)\b)",
            sentence,
            flags=re.I,
        )
        fragments: list[str] = []
        for part in parts:
            subparts = re.split(r",\s+(?=(?:who|which|where)\b)", part, flags=re.I)
            fragments.extend(subparts)
        return merge_short_fragments(fragments, "en")

    parts = re.split(r"[；：]", sentence)
    fragments = []
    for part in parts:
        subparts = re.split(r"(?<=，)(?=(?:后来|於是|于是|隨後|随后|最終|最终|最後|最后|王母|天帝|牛郎|織女|织女|老牛|喜鵲|喜鹊|國王|国王|公主|英雄|神|他|她|兩人|两人))", part)
        fragments.extend(subparts)
    return merge_short_fragments(fragments, "zh")


def merge_short_fragments(fragments: list[str], lang: str) -> list[str]:
    merged: list[str] = []
    buffer = ""

    for raw in fragments:
        fragment = raw.strip(" ,，;；")
        if not fragment:
            continue

        size = len(fragment.split()) if lang == "en" else len(fragment)
        if size < (4 if lang == "en" else 6):
            buffer = f"{buffer} {fragment}".strip() if lang == "en" else f"{buffer}{fragment}"
            continue

        if buffer:
            fragment = f"{buffer} {fragment}".strip() if lang == "en" else f"{buffer}{fragment}"
            buffer = ""

        merged.append(fragment)

    if buffer:
        if merged:
            merged[-1] = f"{merged[-1]} {buffer}".strip() if lang == "en" else f"{merged[-1]}{buffer}"
        else:
            merged.append(buffer)

    return merged


def clean_unit(unit: str, lang: str) -> str:
    unit = re.sub(r"^=+\s*[^=]+\s*=+\s*", "", unit)
    unit = re.sub(r"\[[^\]]+\]", "", unit)
    unit = re.sub(r"\s+", " ", unit).strip(" ;,，")
    if not unit:
        return ""

    if lang == "zh":
        unit = unit.replace(" ", "")
        unit = unit.rstrip("，；：")
        if unit and unit[-1] not in "。！？!?":
            unit += "。"
        return unit

    unit = unit[0].upper() + unit[1:] if unit else unit
    unit = unit.rstrip(",;:")
    if unit and unit[-1] not in ".!?":
        unit += "."
    return unit


def is_blocked_heading(lang: str, heading: str) -> bool:
    if not heading:
        return False

    if lang == "en":
        normalized = normalize(heading)
        return normalized in EN_BLOCKED_HEADINGS

    return strip_cn_quotes(heading) in ZH_BLOCKED_HEADINGS


def score_section_heading(lang: str, story: dict, heading: str) -> float:
    if not heading:
        return 1.0

    score = 0.0
    heading_norm = normalize(heading) if lang == "en" else strip_cn_quotes(heading)
    preferred = EN_PREFERRED_HEADINGS if lang == "en" else ZH_PREFERRED_HEADINGS

    if lang == "en":
        if any(token == heading_norm or token in heading_norm for token in preferred):
            score += 2.0
    else:
        if any(token in heading_norm for token in preferred):
            score += 2.0

    query_tokens = story_tokens(story, lang)
    heading_tokens = significant_tokens(heading, lang)
    overlap = len(set(query_tokens) & set(heading_tokens))
    score += overlap * 1.4
    return score


def score_unit(unit: str, story: dict, lang: str) -> float:
    score = 0.0
    is_meta = is_meta_unit(unit, lang)
    if is_meta:
        score -= 3.2

    unit_norm = normalize(unit) if lang == "en" else unit
    tokens = story_tokens(story, lang)
    overlap = len({token for token in tokens if token and token in unit_norm})
    score += overlap * 0.55

    markers = EN_ACTION_MARKERS if lang == "en" else ZH_ACTION_MARKERS
    has_action = any(marker in unit_norm for marker in markers)
    if has_action:
        score += 1.1
    elif is_meta:
        score -= 1.4

    if lang == "en":
        if re.search(r"\b(?:once a year|later|finally|after|before|then|when|until|at last)\b", unit_norm):
            score += 0.8
        if re.search(r"\b(?:he|she|they|his|her|their)\b", unit_norm):
            score += 0.35
        if re.search(r"\bis (?:a|an|the)\b", unit_norm) and not has_action:
            score -= 0.8
    else:
        if re.search(r"(每年|后来|最後|最后|於是|于是|當|当|直到|終於|终于)", unit):
            score += 0.8
        if re.search(r"(他|她|他们|她们|兩人|两人)", unit):
            score += 0.35
        if "是" in unit and not has_action:
            score -= 0.6

    if len(unit.split()) > 45 if lang == "en" else len(unit) > 70:
        score -= 0.6

    return score


def is_meta_unit(unit: str, lang: str) -> bool:
    patterns = EN_META_PATTERNS if lang == "en" else ZH_META_PATTERNS
    target = unit.lower() if lang == "en" else unit
    return any(re.search(pattern, target) for pattern in patterns)


def story_tokens(story: dict, lang: str) -> list[str]:
    values: list[str] = []
    title_key = "en" if lang == "en" else "zh"
    values.append(story["title"][title_key])
    original = story.get("originalTitle", {}).get(title_key)
    if original:
        values.append(original)
    values.extend(tag[title_key] for tag in story.get("tags", [])[:4])
    values.extend(theme[title_key] for theme in story.get("themes", [])[:3])
    values.append(story["summary"][title_key])
    tokens: list[str] = []
    for value in values:
        tokens.extend(significant_tokens(value, lang))
    return dedupe(tokens)


def story_summary_units(lang: str, story: dict) -> list[str]:
    summary = story["summary"]["en"] if lang == "en" else story["summary"]["zh"]
    background = story.get("background", {}).get("en" if lang == "en" else "zh", "")
    units: list[str] = []
    for text in [summary, background]:
        for unit in extract_units(text, lang):
            cleaned = clean_unit(unit, lang)
            if cleaned and not is_meta_unit(cleaned, lang):
                units.append(cleaned)
    return dedupe(units)


def descriptive_fallback_units(lang: str, story: dict) -> list[str]:
    if lang == "en":
        title = story["title"]["en"]
        country = story["country"]["en"]
        region = story.get("region", {}).get("en")
        tags = [tag["en"] for tag in story.get("tags", [])[:4]]
        themes = [theme["en"] for theme in story.get("themes", [])[:3]]
        place = f"{country} in {region}" if region else country
        return [
            f"{title} is told in {place}.",
            f"The story centers on {join_english(tags[:2])}.",
            f"It also brings in {join_english(tags[2:4])}.",
            f"The events stay close to {join_english(themes[:2])}.",
        ]

    title = story["title"]["zh"]
    country = story["country"]["zh"]
    region = story.get("region", {}).get("zh")
    tags = [tag["zh"] for tag in story.get("tags", [])[:4]]
    themes = [theme["zh"] for theme in story.get("themes", [])[:3]]
    place = f"{region}的{country}" if region else country
    return [
        f"《{title}》的故事发生在{place}。",
        f"故事围绕{join_chinese(tags[:2])}展开。",
        f"后面的事情也会牵到{join_chinese(tags[2:4])}。",
        f"人物一直要面对{join_chinese(themes[:2])}。",
        ]


def normalize_unit_count(units: list[str], lang: str, story: dict) -> list[str]:
    cleaned = [unit for unit in dedupe(units) if unit]
    if len(cleaned) >= MAX_UNITS:
        return cleaned[:MAX_UNITS]

    padding_source = cleaned[-4:] or descriptive_fallback_units(lang, story)
    index = 0
    while len(cleaned) < MAX_UNITS:
        source = padding_source[index % len(padding_source)]
        if len(cleaned) < len(story_summary_units(lang, story)):
            candidate = story_summary_units(lang, story)[len(cleaned)]
        else:
            if lang == "en":
                candidate = source.replace("The story", "The same story").replace("It ", "It also ")
                candidate = candidate.replace("centers on", "continues with").replace("brings in", "moves toward")
            else:
                candidate = source.replace("故事", "这段故事", 1).replace("也会", "随后也会", 1)
                candidate = candidate.replace("围绕", "继续围绕", 1)
        candidate = clean_unit(candidate, lang)
        if candidate and candidate not in cleaned:
            cleaned.append(candidate)
        index += 1

    return cleaned[:MAX_UNITS]


def web_search_units(lang: str, story: dict) -> list[str]:
    title_key = "en" if lang == "en" else "zh"
    query_candidates = [story["title"][title_key]]
    original = story.get("originalTitle", {}).get(title_key)
    if original:
        query_candidates.append(original)

    units: list[str] = []
    for query in query_candidates:
        snippets = duckduckgo_snippets(lang, query)
        for snippet in snippets:
            for unit in extract_units(snippet, lang):
                cleaned = clean_unit(unit, lang)
                if cleaned and not is_meta_unit(cleaned, lang):
                    units.append(cleaned)
        if len(units) >= MAX_UNITS:
            break
    return dedupe(units)[:MAX_UNITS]


def duckduckgo_snippets(lang: str, query: str) -> list[str]:
    params = {"q": f'"{query}"'}
    if lang == "zh":
        params["kl"] = "cn-zh"

    url = "https://html.duckduckgo.com/html/?" + urllib.parse.urlencode(params)
    body = fetch_text(url)
    snippets: list[str] = []
    pattern = re.compile(
        r'<a rel="nofollow" class="result__a" href=".*?">.*?</a>.*?<a class="result__snippet".*?>(.*?)</a>|'
        r'<a rel="nofollow" class="result__a" href=".*?">.*?</a>.*?<div class="result__snippet">(.*?)</div>',
        re.S,
    )
    for match in pattern.finditer(body):
        snippet_html = match.group(1) or match.group(2) or ""
        snippet = html.unescape(re.sub(r"<.*?>", "", snippet_html))
        snippet = re.sub(r"\s+", " ", snippet).strip()
        if snippet and not is_meta_unit(snippet, lang):
            snippets.append(snippet)
        if len(snippets) >= 6:
            break
    return snippets


def group_units(units: list[str], lang: str) -> list[str]:
    return [
        join_units(units[0:4], lang),
        join_units(units[4:8], lang),
        join_units(units[8:12], lang),
    ]


def join_units(units: list[str], lang: str) -> str:
    return "".join(units) if lang == "zh" else " ".join(units)


def resolve_page(lang: str, story: dict, en_page: dict | None = None) -> dict | None:
    if lang == "zh" and en_page:
        for link in en_page.get("langlinks", []):
            if link.get("lang") == "zh":
                page = fetch_page("zh", link["*"])
                if page and page.get("extract"):
                    return page

    if lang == "en" and story.get("sourceUrl"):
        page = fetch_page("en", extract_title_from_url(story["sourceUrl"]))
        if page and page.get("extract"):
            return page

    best: tuple[float, dict] | None = None
    for query in candidate_queries(lang, story):
        title = search_title(lang, query, story)
        if not title:
            continue
        page = fetch_page(lang, title)
        if not page or not page.get("extract"):
            continue
        relevance = page_relevance(lang, story, page, query)
        if not best or relevance > best[0]:
            best = (relevance, page)
        if relevance >= 2.4:
            return page

    return best[1] if best else None


def candidate_queries(lang: str, story: dict) -> list[str]:
    queries: list[str] = []
    fast_mode = os.environ.get("FAST_WIKI") == "1"

    def add(value: str | None) -> None:
        if not value:
            return
        value = value.strip()
        if value and value not in queries:
            queries.append(value)

    if lang == "en":
        add(story.get("originalTitle", {}).get("en"))
        add(story["title"]["en"])
        if not fast_mode:
            add(strip_leading_article(story["title"]["en"]))
            add(extract_focus_phrase(story["title"]["en"]))
            add(story["id"].replace("-", " "))
    else:
        add(story.get("originalTitle", {}).get("zh"))
        add(story["title"]["zh"])
        if not fast_mode:
            add(strip_cn_quotes(story["title"]["zh"]))
            add(extract_focus_phrase_cn(story["title"]["zh"]))

    if not fast_mode:
        for tag in story.get("tags", [])[:2]:
            add(tag["en"] if lang == "en" else tag["zh"])

    return queries


def search_title(lang: str, query: str, story: dict) -> str | None:
    data = wiki_api(
        lang,
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srlimit": 3 if os.environ.get("FAST_WIKI") == "1" else 8,
            "format": "json",
        },
    )
    items = data.get("query", {}).get("search", [])
    if not items:
        return None

    best = max(items, key=lambda item: score_title(query, item["title"], story, lang))
    return best["title"] if score_title(query, best["title"], story, lang) >= 0.2 else None


def page_relevance(lang: str, story: dict, page: dict, query: str) -> float:
    title_key = "en" if lang == "en" else "zh"
    title_score = score_title(query, page.get("title", ""), story, lang)
    extract = page.get("extract", "")[:6000]
    tokens = story_tokens(story, lang)
    haystack = normalize(extract) if lang == "en" else extract
    overlap = len({token for token in tokens if token and token in haystack})
    summary_overlap = 0.2 if (story["summary"][title_key][:10] and story["summary"][title_key][:10] in extract) else 0.0
    return title_score + overlap * 0.18 + summary_overlap


def fetch_page(lang: str, title: str) -> dict | None:
    extract_chars = int(os.environ.get("WIKI_EXTRACT_CHARS", "12000") or "12000")
    data = wiki_api(
        lang,
        {
            "action": "query",
            "prop": "extracts|langlinks",
            "explaintext": 1,
            "exchars": extract_chars,
            "redirects": 1,
            "titles": title,
            "lllang": "zh",
            "format": "json",
        },
    )
    pages = data.get("query", {}).get("pages", {})
    page = next(iter(pages.values()), None)
    if not page or "missing" in page:
        return None
    return page


def wiki_api(lang: str, params: dict) -> dict:
    key = (lang, json.dumps(params, sort_keys=True, ensure_ascii=False))
    if key in _memory_cache:
        return _memory_cache[key]

    cache_key = hashlib.sha1(f"{lang}:{json.dumps(params, sort_keys=True, ensure_ascii=False)}".encode("utf-8")).hexdigest()
    cache_path = CACHE_DIR / f"{cache_key}.json"
    if cache_path.exists():
        payload = json.loads(cache_path.read_text(encoding="utf-8"))
        _memory_cache[key] = payload
        return payload

    url = f"https://{lang}.wikipedia.org/w/api.php?{urllib.parse.urlencode(params, doseq=True)}"
    last_error: Exception | None = None

    for attempt in range(MAX_RETRIES):
        if REQUEST_DELAY > 0:
            time.sleep(REQUEST_DELAY)

        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
                payload = json.loads(response.read().decode("utf-8"))
                cache_path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
                _memory_cache[key] = payload
                return payload
        except urllib.error.HTTPError as exc:
            last_error = exc
            if exc.code == 429:
                time.sleep(1.2 * (attempt + 1))
                continue
            time.sleep(0.5 * (attempt + 1))
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            time.sleep(0.5 * (attempt + 1))

    raise RuntimeError(f"wiki_api failed for {lang} {params}") from last_error


def fetch_text(url: str) -> str:
    cache_key = hashlib.sha1(f"text:{url}".encode("utf-8")).hexdigest()
    cache_path = CACHE_DIR / f"{cache_key}.txt"
    if cache_path.exists():
        return cache_path.read_text(encoding="utf-8")

    last_error: Exception | None = None
    for attempt in range(MAX_RETRIES):
        if REQUEST_DELAY > 0:
            time.sleep(REQUEST_DELAY)

        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
                text = response.read().decode("utf-8", "ignore")
                cache_path.write_text(text, encoding="utf-8")
                return text
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            time.sleep(0.5 * (attempt + 1))

    raise RuntimeError(f"fetch_text failed for {url}") from last_error


def extract_title_from_url(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    return urllib.parse.unquote(path.rstrip("/").split("/")[-1])


def score_title(target: str, candidate: str, story: dict, lang: str) -> float:
    target_norm = normalize(target)
    candidate_norm = normalize(candidate)
    ratio = SequenceMatcher(None, target_norm, candidate_norm).ratio()
    target_tokens = set(target_norm.split())
    candidate_tokens = set(candidate_norm.split())
    overlap = len(target_tokens & candidate_tokens) / max(1, len(target_tokens))

    bonus = 0.0
    if lang == "en":
        focus = normalize(extract_focus_phrase(story["title"]["en"]))
        if focus and focus in candidate_norm:
            bonus += 0.25
    else:
        focus = strip_cn_quotes(extract_focus_phrase_cn(story["title"]["zh"]))
        if focus and focus in candidate:
            bonus += 0.25

    return ratio * 0.7 + overlap * 0.3 + bonus


def significant_tokens(value: str, lang: str) -> list[str]:
    if lang == "en":
        stopwords = {"the", "a", "an", "and", "of", "in", "at", "to", "for", "with", "on", "from"}
        return [token for token in normalize(value).split() if token and token not in stopwords and len(token) > 2]

    value = strip_cn_quotes(value)
    for token in ["與", "与", "和", "之", "的", "中", "在", "里"]:
        value = value.replace(token, " ")
    return [token for token in re.split(r"\s+", value) if token]


def normalize(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[_'’]", " ", value)
    value = re.sub(r"[^a-z0-9\u4e00-\u9fff\s-]", " ", value)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def strip_leading_article(value: str) -> str:
    return re.sub(r"^(the|a|an)\s+", "", value, flags=re.I)


def strip_cn_quotes(value: str) -> str:
    return value.replace("《", "").replace("》", "").strip()


def extract_focus_phrase(title: str) -> str:
    pieces = re.split(r"\b(?:and|of|in|at|the)\b", strip_leading_article(title), flags=re.I)
    for piece in pieces:
        cleaned = piece.strip(" ,-")
        if cleaned and len(cleaned.split()) <= 4:
            return cleaned
    return strip_leading_article(title)


def extract_focus_phrase_cn(title: str) -> str:
    title = strip_cn_quotes(title)
    for token in ["與", "与", "和", "之", "的", "中", "在"]:
        if token in title:
            left = title.split(token)[0].strip()
            if left:
                return left
    return title


def dedupe(values: list[str]) -> list[str]:
    output: list[str] = []
    seen: set[str] = set()
    for value in values:
        if value and value not in seen:
            output.append(value)
            seen.add(value)
    return output


def join_english(values: list[str]) -> str:
    values = [value for value in values if value]
    if not values:
        return "the story's main events"
    if len(values) == 1:
        return values[0]
    return f"{', '.join(values[:-1])} and {values[-1]}"


def join_chinese(values: list[str]) -> str:
    values = [value for value in values if value]
    if not values:
        return "故事里的主要事情"
    return "、".join(f"“{value}”" for value in values)


def build_synthetic_atlas_narrative(story: dict) -> dict[str, list[str]]:
    return {
        "en": build_synthetic_atlas_paragraphs("en", story),
        "zh": build_synthetic_atlas_paragraphs("zh", story),
    }


def build_synthetic_atlas_paragraphs(lang: str, story: dict) -> list[str]:
    title_key = "en" if lang == "en" else "zh"
    title = story["title"][title_key]
    country = story["country"][title_key]
    region = story.get("region", {}).get(title_key)
    culture = story["culture"][title_key]
    tags = [tag[title_key] for tag in story.get("tags", [])[:4]]
    themes = [theme[title_key] for theme in story.get("themes", [])[:3]]

    if lang == "en":
        place = f"{country} in {region}" if region else country
        tag_a, tag_b, tag_c, tag_d = with_fallbacks(tags, ["figure", "place", "change", "memory"])
        theme_a, theme_b, theme_c = with_fallbacks(themes, ["memory", "place", "change"])
        category_lines = synthetic_category_lines_en(story["category"], title, place, culture, tag_a, tag_b, tag_c, tag_d, theme_a, theme_b, theme_c)
        return [
            " ".join(category_lines[0:4]),
            " ".join(category_lines[4:8]),
            " ".join(category_lines[8:12]),
        ]

    place = f"{region}的{country}" if region else country
    tag_a, tag_b, tag_c, tag_d = with_fallbacks(tags, ["人物", "地点", "变化", "记忆"])
    theme_a, theme_b, theme_c = with_fallbacks(themes, ["记忆", "地点", "变化"])
    category_lines = synthetic_category_lines_zh(story["category"], title, place, culture, tag_a, tag_b, tag_c, tag_d, theme_a, theme_b, theme_c)
    return [
        "".join(category_lines[0:4]),
        "".join(category_lines[4:8]),
        "".join(category_lines[8:12]),
    ]


def synthetic_category_lines_en(category: str, title: str, place: str, culture: str, tag_a: str, tag_b: str, tag_c: str, tag_d: str, theme_a: str, theme_b: str, theme_c: str) -> list[str]:
    shared = [
        f"{title} is best understood within the storytelling traditions of {place}.",
        f"It stays anchored in {tag_a}, {tag_b}, and {tag_c} rather than in a single fixed version.",
        f"It is most useful as a guide to the themes of {theme_a}, {theme_b}, and {theme_c}.",
        f"That keeps the story tied to landscape, community, and transmission from the start.",
    ]

    by_category = {
        "myth": [
            f"In mythic terms, the strongest pressure falls on how {tag_a} and {tag_b} explain beginnings, powers, or changes in the world.",
            f"The title points less to one fixed episode than to a sacred pattern carried by repeated local telling.",
            f"Details may vary from version to version, but the link between cosmos, place, and transformation remains central.",
            f"Readers are meant to notice what kind of world this story imagines before they look for a scene-by-scene synopsis.",
            f"As a result, {title} works here as a map of origin-thinking rather than as a single locked sequence of events.",
            f"It keeps {place} visible as more than backdrop, because the land itself helps hold the story's meaning.",
            f"The memory carried forward is not only about gods or beings, but about how a region names order and change.",
            f"What remains is a way of explaining why the world takes the shape it does.",
        ],
        "folktale": [
            f"As a folktale, it leans on the tension between {tag_a}, {tag_b}, and the choices that make retellings memorable.",
            f"The interest lies in how a teller would shape cunning, travel, warning, or reversal for a local audience.",
            f"That means the story matters as oral craft as much as as a chain of named events.",
            f"The line of transmission is part of the content, not just the container around it.",
            f"Seen this way, {title} preserves a style of communal telling that belongs to {place} as much as to any one performer.",
            f"It keeps attention on what listeners are asked to remember, repeat, and pass on.",
            f"The motifs of {theme_a} and {theme_b} stay legible without forcing a fake adventure arc onto the page.",
            f"What lasts is the telling pattern that lets the story travel from one voice to the next.",
        ],
        "epic": [
            f"As an epic-facing entry, it gathers attention around {tag_a}, {tag_b}, and the kind of trial that tests standing or endurance.",
            f"The emphasis falls on remembered scale, heroic pressure, and the path a community keeps worth retelling.",
            f"Even where versions differ, the story usually persists because it carries honor, ordeal, and movement across a larger world.",
            f"That larger frame matters more than pretending we already have every episode pinned down.",
            f"Here {title} serves as a regional memory of what counts as greatness, burden, or costly achievement in {place}.",
            f"It also keeps the relation between hero, route, and audience in view.",
            f"The motifs of {theme_a}, {theme_b}, and {theme_c} do the real structural work.",
            f"What endures is the scale of the ordeal and the memory of who was judged equal to it.",
        ],
        "creature": [
            f"As a creature legend, the story is strongest where {tag_a}, {tag_b}, and {tag_c} define a zone of warning.",
            f"The being matters because it makes a boundary feel inhabited, risky, or morally charged.",
            f"Such tales often survive through repeated caution, not through one universally fixed storyline.",
            f"That is why place and atmosphere matter as much as named action.",
            f"{title} keeps the local sense of fear, night, or threshold alive without reducing it to one neat plotline.",
            f"It draws attention to how people remember where not to go, what not to ignore, and how danger is pictured.",
            f"The story's hold comes from recurring motifs of {theme_a} and {theme_b}, not from boilerplate suspense.",
            f"What remains is the feeling that certain edges of the world are never entirely empty.",
        ],
        "religion": [
            f"As a sacred story, it organizes memory around {tag_a}, {tag_b}, and the duties or balances those images sustain.",
            f"The point is not only what happened once, but how ritual language and inherited teaching keep the account active.",
            f"In many traditions, that makes repetition, setting, and symbolic order just as important as dramatic sequence.",
            f"The story therefore belongs to lived practice as much as to literary summary.",
            f"Read this way, {title} keeps a religious pattern visible inside {place} without forcing it into one compressed synopsis.",
            f"It links devotion, place, and shared obligation in a way that remains legible even before deeper sourcing arrives.",
            f"The themes of {theme_a}, {theme_b}, and {theme_c} provide the durable frame.",
            f"What is preserved above all is a way of holding order, offering, and reverence together.",
        ],
        "history": [
            f"As legendary history, it is anchored in {tag_a}, {tag_b}, and the memory of people or places treated as worth remembering together.",
            f"The story matters because it helps a region describe lineage, rule, migration, conflict, or foundation in memorable form.",
            f"That makes the overlap between history and storytelling part of the point, not a flaw to hide.",
            f"The entry therefore keeps its attention on local remembrance rather than inventing a false canonical plot.",
            f"In that sense, {title} works as a memory-site for {place}, where names, locations, and inherited reputation stay bound together.",
            f"It lets readers see how narrative helps organize public memory before archival precision is fully restored.",
            f"The strongest through-lines remain {theme_a}, {theme_b}, and {theme_c}.",
            f"What lasts is the form of remembrance itself and the public memory it helps a place keep.",
        ],
    }

    return shared + by_category[category]


def synthetic_category_lines_zh(category: str, title: str, place: str, culture: str, tag_a: str, tag_b: str, tag_c: str, tag_d: str, theme_a: str, theme_b: str, theme_c: str) -> list[str]:
    shared = [
        f"《{title}》最好先放回{place}的讲述传统里来理解。",
        f"这条叙述把重心落在“{tag_a}”“{tag_b}”和“{tag_c}”这些意象上，而不是单一固定版本上。",
        f"它更适合被读作关于“{theme_a}”“{theme_b}”“{theme_c}”的地方讲述。",
        f"因此开头就把地点、社群和传承方式一起摆了出来。",
    ]

    by_category = {
        "myth": [
            f"放在神话类型里看，最重要的是“{tag_a}”与“{tag_b}”如何解释世界开端、力量来源或秩序变化。",
            f"这个标题指向的未必是唯一固定的情节，而是一种会被反复讲述的神圣结构。",
            f"即使不同版本的细节并不一样，宇宙、地貌和变化之间的关系通常不会消失。",
            f"读者首先该把握的，是这则故事怎样想象世界，而不是硬找一条并不存在的统一剧情。",
            f"所以《{title}》在这里更像一张关于起源观念的地图，而不是被锁死成唯一版本的梗概。",
            f"{place}也不只是背景，因为地貌本身就在帮助这则神话保存意义。",
            f"被留下来的不只是神灵名字，还有地方如何命名秩序和变化的方式。",
            f"最终留下来的，是一整套解释世界为何如此的说法。",
        ],
        "folktale": [
            f"放进民间故事的语境里，它真正有力的地方在于“{tag_a}”“{tag_b}”和人物选择如何被讲得好听、好记。",
            f"这种故事常常靠机巧、转折、路途或教训在口耳之间留下来。",
            f"所以它重要的不只是发生了什么，也包括讲述者怎样把它讲给本地听众。",
            f"传承方式本身就是内容的一部分。",
            f"从这个角度看，《{title}》保存的是属于{place}的讲法，而不只是一个被压扁的梗概。",
            f"它让人注意哪些片段值得被记住、重复和继续转述。",
            f"像“{theme_a}”与“{theme_b}”这样的母题仍然清楚，却不会再被硬套成假冒险。",
            f"最后真正留下来的，是一套能从一个讲述者传到下一个讲述者的说法。",
        ],
        "epic": [
            f"如果把它放在史诗的尺度上看，视线自然会集中到“{tag_a}”“{tag_b}”和必须承受的试炼上。",
            f"这类条目保存的往往是英雄压力、远行规模和社群愿意反复讲述的壮阔感。",
            f"哪怕细节版本有差异，荣誉、磨难和行路通常仍是骨架。",
            f"真正重要的是那种被记成“大事”的结构，而不是假装已经掌握全部桥段。",
            f"因此《{title}》在这里保存的是{place}关于伟业、重负与代价的记忆。",
            f"它也让英雄、路线和听众之间的关系继续可见。",
            f"支撑整条叙述的，其实是“{theme_a}”“{theme_b}”“{theme_c}”这些母题。",
            f"最后被记住的，是试炼的尺度，以及谁被认为配得上承受它。",
        ],
        "creature": [
            f"作为异兽传说，它最有力量的时候，是“{tag_a}”“{tag_b}”和“{tag_c}”一起把某片边界写得危险而有形。",
            f"这种存在之所以重要，是因为它会让夜晚、河岸、树林或路口像真的住着什么东西。",
            f"许多相关讲法本来就不是靠统一剧情活下来的，而是靠反复提醒与反复害怕。",
            f"这也解释了为什么地点气氛常常比单一情节更关键。",
            f"《{title}》保存的是一种地方性的恐惧感，而不是被压成一段整齐的追逐故事。",
            f"它提醒人们哪些地方不该轻忽，哪些界线不该随便跨过。",
            f"真正让故事成立的是“{theme_a}”和“{theme_b}”这类反复出现的感受。",
            f"最后留下来的，是某些世界边缘从来不会真正空无一物的感觉。",
        ],
        "religion": [
            f"作为神圣故事，它会把“{tag_a}”“{tag_b}”和被维系的职责、供奉或平衡组织在一起。",
            f"这类传统在意的往往不只是某件事曾经发生过，还包括它怎样在仪式和教诲里继续有效。",
            f"因此重复、场所和象征秩序，常常和剧情推进一样重要。",
            f"故事既属于叙述，也属于实践。",
            f"从这个角度读，《{title}》保存的是{place}内部的一种宗教结构，而不是被压缩成一条剧情直线。",
            f"它把信念、地点和共同义务继续拴在一起。",
            f"“{theme_a}”“{theme_b}”“{theme_c}”提供了这条叙述最稳定的框架。",
            f"最后被保存下来的，是把秩序、供奉与敬畏维系在一起的方式。",
        ],
        "history": [
            f"当它被当作传奇历史来读时，核心就在“{tag_a}”“{tag_b}”以及哪些人和地点值得一起被记住。",
            f"这种故事的重要性，往往在于它帮助一个地区把血统、统治、迁徙、冲突或建城讲成可传的形式。",
            f"历史和讲述在这里本来就交叠在一起，并不需要假装完全分开。",
            f"所以这条 narrative 会先把注意力留在地方记忆本身，而不是编造一个唯一版本的剧情线。",
            f"也因此，《{title}》更像{place}的一处记忆节点，把名字、地点和声望系在一起。",
            f"它让读者先看见叙事怎样帮助公共记忆成形。",
            f"贯穿其中的仍然是“{theme_a}”“{theme_b}”“{theme_c}”这些主轴。",
            f"最后真正留下来的，是一种地方社会如何记住自己过去的方式。",
        ],
    }

    return shared + by_category[category]


def with_fallbacks(values: list[str], fallbacks: list[str]) -> list[str]:
    output = [value for value in values if value]
    for fallback in fallbacks:
        if len(output) >= len(fallbacks):
            break
        output.append(fallback)
    return output[: len(fallbacks)]


def is_synthetic_seed(story: dict) -> bool:
    summary = story.get("summary", {})
    background = story.get("background", {})
    return (
        " adds a " in summary.get("en", "")
        or "补入一则" in summary.get("zh", "")
        or "broadens the atlas" in background.get("en", "")
        or "拓展故事地图" in background.get("zh", "")
    )


def fallback_narrative(story: dict) -> dict[str, list[str]]:
    return {
        "en": group_units(normalize_unit_count(story_summary_units("en", story), "en", story), "en"),
        "zh": group_units(normalize_unit_count(story_summary_units("zh", story), "zh", story), "zh"),
    }


def write_output(narratives: dict) -> None:
    output = [
        'import type { LocalizedParagraphs } from "@/lib/story-types";',
        "",
        "// Generated by scripts/generate-story-narratives.py",
        "export const storyNarratives: Record<string, LocalizedParagraphs> = "
        + f"{json.dumps(narratives, ensure_ascii=False, indent=2)} as const;",
        "",
    ]
    OUTPUT_PATH.write_text("\n".join(output), encoding="utf-8")


if __name__ == "__main__":
    raise SystemExit(main())
