import { afterEach, describe, expect, it, vi } from "vitest";
import { speakNarrationLine, stopNarration } from "@/lib/sound";
import type { Locale } from "@/lib/story-types";

class MockSpeechSynthesisUtterance {
  text: string;
  lang = "";
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  pitch = 1;
  rate = 1;
  voice: { lang: string; name: string } | null = null;
  volume = 1;

  constructor(text: string) {
    this.text = text;
  }
}

function installSpeechMocks(
  voices: Array<{ lang: string; name: string }>,
  options: { finishImmediately?: boolean; platform?: string } = {}
) {
  const { finishImmediately = true, platform } = options;
  const addEventListener = vi.fn();
  const cancel = vi.fn();
  const speak = vi.fn((utterance: MockSpeechSynthesisUtterance) => {
    if (finishImmediately) {
      utterance.onend?.();
    }
  });
  const getVoices = vi.fn(() => voices);
  const removeEventListener = vi.fn();

  Object.assign(globalThis, {
    SpeechSynthesisUtterance: MockSpeechSynthesisUtterance,
    window: {
      navigator: platform ? { platform } : undefined,
      speechSynthesis: {
        addEventListener,
        cancel,
        getVoices,
        removeEventListener,
        speak
      }
    }
  });

  return { addEventListener, cancel, getVoices, removeEventListener, speak };
}

async function expectNarrationLocale(
  locale: Locale,
  expectedLang: string,
  expectedVoice: string
) {
  const { cancel, speak } = installSpeechMocks([
    { lang: "en-US", name: "Samantha" },
    { lang: "zh-CN", name: "Eddy (Chinese (China mainland))" }
  ]);

  await speakNarrationLine("demo line", locale);

  expect(cancel).toHaveBeenCalledTimes(1);
  expect(speak).toHaveBeenCalledTimes(1);

  const utterance = speak.mock.calls[0][0] as MockSpeechSynthesisUtterance;
  expect(utterance.lang).toBe(expectedLang);
  expect(utterance.voice?.name).toBe(expectedVoice);
}

describe("narration speech", () => {
  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window;
    // @ts-expect-error test cleanup
    delete globalThis.SpeechSynthesisUtterance;
    vi.restoreAllMocks();
  });

  it("uses an English voice for English narration", async () => {
    await expectNarrationLocale("en", "en-US", "Samantha");
  });

  it("prefers Daniel for English narration on macOS", async () => {
    const { speak } = installSpeechMocks(
      [
        { lang: "en-US", name: "Samantha" },
        { lang: "en-GB", name: "Daniel" }
      ],
      { platform: "MacIntel" }
    );

    await speakNarrationLine("demo line", "en");

    const utterance = speak.mock.calls[0][0] as MockSpeechSynthesisUtterance;
    expect(utterance.lang).toBe("en-GB");
    expect(utterance.voice?.name).toBe("Daniel");
  });

  it("uses a Chinese voice for Chinese narration", async () => {
    await expectNarrationLocale("zh", "zh-CN", "Eddy (Chinese (China mainland))");
  });

  it("formats Chinese narration with Chinese punctuation", async () => {
    const { speak } = installSpeechMocks([
      { lang: "zh-CN", name: "Eddy (Chinese (China mainland))" }
    ]);

    await speakNarrationLine("希腊. 潘多拉打开魔罐. 这是一个测试。", "zh");

    const utterance = speak.mock.calls[0][0] as MockSpeechSynthesisUtterance;
    expect(utterance.text).toBe("希腊。潘多拉打开魔罐。这是一个测试。");
  });

  it("stops the current narration when asked", () => {
    const { cancel } = installSpeechMocks([]);

    stopNarration();

    expect(cancel).toHaveBeenCalledTimes(1);
  });

  it("resolves active narration when stopped", async () => {
    const { cancel, speak } = installSpeechMocks(
      [{ lang: "en-US", name: "Samantha" }],
      { finishImmediately: false }
    );

    const narration = speakNarrationLine("slow line", "en");
    await vi.waitFor(() => expect(speak).toHaveBeenCalledTimes(1));

    stopNarration();

    await expect(narration).resolves.toBeUndefined();
    expect(cancel).toHaveBeenCalledTimes(2);
  });
});
