import type { Story } from "@/lib/story-types";
import { generatedArtworkIds } from "@/lib/story-artwork-manifest.generated";

const text = (en: string, zh: string) => ({ en, zh });

export const stories: Story[] = [
  {
    id: "journey-to-the-west",
    title: text("The Monkey King's Journey", "孙悟空的西游之路"),
    originalTitle: text("Journey to the West", "西游记"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 34.3416,
    longitude: 108.9398,
    category: "epic",
    summary: text(
      "Sun Wukong joins a monk's pilgrimage westward, turning rebellion, wit, and supernatural power into a story about discipline and transformation.",
      "孙悟空跟随高僧西行取经，把反叛、机智与神通，化成一段关于修行与蜕变的故事。"
    ),
    background: text(
      "This Ming-era classic gathers older pilgrimage legends, Buddhist ideas, and trickster energy into one of the most influential story cycles in East Asia.",
      "这部明代经典汇聚了更早的取经传说、佛教思想与机巧顽皮的精神，成为东亚最有影响力的故事体系之一。"
    ),
    narrativeParagraphs: {
      en: [
        "After causing havoc in Heaven, Sun Wukong is subdued by the Buddha and pinned beneath a mountain. Centuries later, the monk Tang Sanzang receives an order to travel west and fetch Buddhist scriptures. Guanyin arranges for Sun Wukong to protect him on the road. The monkey is released and becomes the monk's first disciple.",
        "On the journey they add Zhu Bajie, Sha Wujing, and the White Dragon Horse to their company. The travelers pass kingdoms, mountains, rivers, and demon lairs on the way to India. Again and again monsters try to seize Tang Sanzang because they believe his flesh will bring them power. Sun Wukong fights them with his staff, his transformations, and help from immortals and bodhisattvas.",
        "The road also brings quarrels, punishment, and repeated tests of patience between master and disciples. After eighty-one trials, the pilgrims reach the Thunder Monastery and receive the scriptures. They carry the texts back to Tang China and present them at court. When the journey is complete, each traveler receives a final religious title."
      ],
      zh: [
        "孙悟空大闹天宫后，被如来压在五行山下。许多年后，唐三藏奉命前往西天取经。观音安排孙悟空护送他上路。孙悟空因此脱困，成了唐三藏的第一个徒弟。",
        "一路上，他们又收下猪八戒、沙悟净和白龙马。师徒几人穿过国度、山岭、河流和妖洞，朝天竺前进。许多妖怪都想抓住唐三藏，因为他们相信吃了他的肉就能得到好处。孙悟空便用金箍棒、七十二变和诸神佛的援手一次次把师父救回来。",
        "这段路上也不断出现争执、惩戒和对师徒耐心的考验。经历八十一难后，他们终于到达雷音寺，取回真经。随后师徒带着经卷返回大唐，将经书呈交朝廷。等这场远行结束后，每个人都得到了自己的果位。"
      ]
    },
    themes: [text("discipline", "修行"), text("rebellion", "反叛"), text("pilgrimage", "取经")],
    imageUrl: "/story-artwork/journey-to-the-west.webp",
    tags: [text("pilgrimage", "取经"), text("monkey king", "孙悟空"), text("transformation", "变化"), text("buddhism", "佛教")],
    sourceUrl: "https://en.wikipedia.org/wiki/Journey_to_the_West"
  },
  {
    id: "pandora",
    title: text("Pandora Opens the Jar", "潘多拉打开魔罐"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "myth",
    summary: text(
      "Pandora's forbidden act releases human suffering into the world, leaving hope behind as the last and strangest gift.",
      "潘多拉的禁忌之举将人间苦难释放到世界中，只留下希望作为最后也最奇异的礼物。"
    ),
    background: text(
      "In Greek myth, Pandora stands at the edge of debates about curiosity, divine punishment, and why hardship belongs to human life.",
      "在希腊神话中，潘多拉处在关于好奇心、神罚以及人类为何必须承受苦难的讨论中心。"
    ),
    narrativeParagraphs: {
      en: [
        "After Prometheus stole fire for humankind, Zeus decided to send a new trouble to earth. Hephaestus shaped a woman from clay, and the gods gave her many gifts. Aphrodite gave beauty, Athena taught her crafts, and Hermes gave her a cunning mind and persuasive speech. She was named Pandora, and Zeus sent her to Epimetheus with a sealed jar.",
        "Prometheus had warned his brother not to accept anything from Zeus, but Epimetheus welcomed Pandora anyway. Pandora lived among humans while the jar remained closed. At last her curiosity overcame her, and she lifted the lid. Out flew sickness, toil, grief, envy, and many other sorrows that spread through the world.",
        "Startled by what she had done, Pandora closed the jar as quickly as she could. But it was too late to call the evils back. Only Hope remained inside, still kept under the rim of the jar. The jar stayed shut, and the sorrows remained loose in the world."
      ],
      zh: [
        "普罗米修斯为人类盗取火种后，宙斯决定把新的灾祸送到人间。赫淮斯托斯用泥土塑成一个女子，诸神又把各种天赋赐给她。阿佛洛狄忒给她美貌，雅典娜教她纺织手艺，赫尔墨斯给她机巧的心思和善辩的口才。她被命名为潘多拉，宙斯随后把她送到厄庇墨透斯那里，并带去一个封好的罐子。",
        "普罗米修斯曾告诫弟弟不要接受宙斯的礼物，但厄庇墨透斯还是收留了潘多拉。潘多拉住在人间，那个罐子一直没有打开。后来她终于按捺不住好奇心，掀开了盖子。疾病、劳苦、悲伤、嫉妒和各种灾祸一起飞出，散布到世界各处。",
        "潘多拉被眼前的景象吓住，急忙把盖子重新合上。可是那些灾祸已经来不及收回。只有“希望”还留在罐中，没有飞出去。罐子重新合上以后，那些灾祸已经留在了人间。"
      ]
    },
    themes: [text("curiosity", "好奇"), text("punishment", "惩罚"), text("hope", "希望")],
    imageUrl: "/story-artwork/pandora.webp",
    tags: [text("origin", "起源"), text("hope", "希望"), text("gods", "诸神"), text("forbidden knowledge", "禁忌知识")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pandora"
  },
  {
    id: "anansi-wisdom",
    title: text("Anansi and the Pot of Wisdom", "阿南西与智慧罐"),
    country: text("Ghana", "加纳"),
    region: text("West Africa", "西非"),
    culture: text("Akan", "阿坎文化"),
    latitude: 6.6666,
    longitude: -1.6163,
    category: "folktale",
    summary: text(
      "Anansi tries to hoard all wisdom in a pot, only to learn that cleverness means very little when it cannot be shared.",
      "阿南西想把所有智慧都藏进一个罐子里，最后却明白：不能分享的聪明，其实没有多大意义。"
    ),
    background: text(
      "Anansi stories travel across West Africa and the African diaspora, often using humor and reversal to question pride and authority.",
      "阿南西故事流传于西非及非洲离散社群，常用幽默与反转来质疑骄傲和权威。"
    ),
    narrativeParagraphs: {
      en: [
        "Nyame keeps all the wisdom in the world inside a single pot and gives it to Anansi. He tells the spider to carry that wisdom out and share it with everyone. Anansi decides that he would rather keep the pot for himself. He takes it home and hides it from the rest of the world.",
        "Still afraid that someone may reach it, he plans to hang the pot high in a tree. He ties it against the front of his body and begins to climb. The pot keeps knocking against the trunk and makes the climb awkward. Anansi's young son looks up and tells him the pot would be easier to carry on his back.",
        "At once Anansi realizes that another person has found the wiser answer before he did. Angry that he does not possess all wisdom after all, he throws the pot down. The pot breaks open on the ground. Wisdom spills out everywhere, and no single person can keep it alone again."
      ],
      zh: [
        "恩雅梅把世上的全部智慧装进一个罐子里，然后交给阿南西。天神原本要他把这份智慧带出去，分给世上的人。阿南西却起了私心，想把罐子永远留给自己。于是他把罐子带回家，藏了起来。",
        "可他还是担心别人会找到这个罐子，于是决定把它挂到高树顶上。阿南西把罐子绑在胸前，开始往树上爬。罐子一下一下撞在树干上，让他怎么爬都不顺。阿南西的儿子在下面看着，说把罐子背在身后会更容易一些。",
        "阿南西这才明白，原来别人已经先想到了更聪明的办法。他又气又恼，觉得自己并没有独占全部智慧。于是他把罐子从树上摔了下去。罐子碎开以后，里面的智慧散落四方，再也没有谁能把它一个人占尽。"
      ]
    },
    themes: [text("sharing", "分享"), text("pride", "骄傲"), text("wit", "机智")],
    imageUrl: "/story-artwork/anansi-wisdom.webp",
    tags: [text("wisdom", "智慧"), text("trickster", "骗子英雄"), text("sharing", "分享"), text("spider", "蜘蛛")],
    sourceUrl: "https://en.wikipedia.org/wiki/Anansi"
  },
  {
    id: "beowulf-grendel",
    title: text("Beowulf Faces Grendel", "贝奥武夫迎战格伦德尔"),
    country: text("Denmark", "丹麦"),
    region: text("Northern Europe", "北欧"),
    culture: text("Anglo-Saxon", "盎格鲁-撒克逊"),
    latitude: 55.6761,
    longitude: 12.5683,
    category: "epic",
    summary: text(
      "The hero Beowulf arrives at Heorot to fight Grendel, a night-stalking monster whose terror has hollowed out the king's hall.",
      "英雄贝奥武夫来到赫奥洛特，对抗夜袭王厅的怪物格伦德尔，那份恐惧早已掏空了整座王宫。"
    ),
    background: text(
      "Beowulf survives in a single Old English manuscript, where heroic fame, mortality, and monster-fighting sit beside Christian reflection.",
      "《贝奥武夫》仅存于一部古英语手稿中，将英雄名望、凡人死亡与屠怪壮举，与基督教式反思并置。"
    ),
    narrativeParagraphs: {
      en: [
        "King Hrothgar builds the great hall Heorot, where his warriors feast and listen to songs. The noise and joy anger Grendel, a monster who lives outside the settlement. Night after night Grendel enters the hall and carries off Hrothgar's men. The attacks empty Heorot and leave the king unable to protect his people.",
        "News of the trouble reaches Beowulf, a Geatish warrior, and he sails to Denmark with chosen companions. Hrothgar welcomes him, remembering past loyalty between their families. Beowulf says he will fight Grendel without sword or shield because the monster attacks with his bare hands. That night he waits in the hall after the others have gone to sleep.",
        "When Grendel bursts in, Beowulf seizes him in a grip the monster cannot break. The two struggle through the hall until Beowulf tears Grendel's arm from its socket. Mortally wounded, Grendel flees back to his lair and dies there. Hrothgar hangs the arm in Heorot, and the Danes celebrate their deliverance."
      ],
      zh: [
        "赫罗斯加王建起宏伟的赫奥洛特王厅，让武士们在里面饮宴听歌。厅中的喧闹与欢乐激怒了住在外面的怪物格伦德尔。它一到夜里就闯进王厅，接连掳走赫罗斯加的部下。久而久之，赫奥洛特几乎空了下来，国王也无法再保护众人。",
        "贝奥武夫听到这场灾祸后，带着挑选出的伙伴从盖特人之地航海来到丹麦。赫罗斯加记得两家往日的情分，因此欢迎他的到来。贝奥武夫说自己不用刀剑和盾牌，只凭双手去迎战格伦德尔。到了夜里，他留在厅中，等其他人都睡下以后守候怪物出现。",
        "格伦德尔冲进王厅时，贝奥武夫一把抓住了它，让它怎么也挣脱不开。两者在厅中激烈扭打，直到贝奥武夫把怪物的手臂硬生生扯了下来。格伦德尔身受致命重伤，逃回巢穴后死去。赫罗斯加把那条手臂挂在赫奥洛特，丹麦人也为这场解救举行庆贺。"
      ]
    },
    themes: [text("fame", "名望"), text("mortality", "死亡"), text("heroism", "英雄气概")],
    imageUrl: "/story-artwork/beowulf-grendel.webp",
    tags: [text("hero", "英雄"), text("monster", "怪物"), text("hall", "王厅"), text("fate", "命运")],
    sourceUrl: "https://en.wikipedia.org/wiki/Beowulf"
  },
  {
    id: "quetzalcoatl",
    title: text("Quetzalcoatl, Feathered Serpent", "羽蛇神魁札尔科亚特尔"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Aztec", "阿兹特克"),
    latitude: 19.4326,
    longitude: -99.1332,
    category: "religion",
    summary: text(
      "Quetzalcoatl links wind, learning, creation, and priestly authority as one of Mesoamerica's most enduring sacred figures.",
      "羽蛇神将风、学识、创造与祭司权威联系在一起，是中部美洲最持久的神圣形象之一。"
    ),
    background: text(
      "The feathered serpent appears across multiple Mesoamerican traditions, so this figure carries layers of ritual, political, and cosmological meaning.",
      "羽蛇意象出现于多种中部美洲传统，因此这一形象承载着仪式、政治与宇宙观的多重含义。"
    ),
    themes: [text("creation", "创造"), text("learning", "学识"), text("sacred authority", "神圣权威")],
    imageUrl: "/story-artwork/quetzalcoatl.webp",
    tags: [text("creation", "创造"), text("serpent", "蛇"), text("wind", "风"), text("knowledge", "知识")],
    sourceUrl: "https://en.wikipedia.org/wiki/Quetzalcoatl"
  },
  {
    id: "baba-yaga",
    title: text("Baba Yaga's Hut", "芭芭雅嘎的小屋"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 55.7558,
    longitude: 37.6173,
    category: "creature",
    summary: text(
      "Baba Yaga lives at the forest edge in a hut on chicken legs, testing travelers who may find either death or unexpected aid.",
      "芭芭雅嘎住在森林边缘那座长着鸡脚的小屋里，考验每个闯入者，他们可能迎来死亡，也可能得到意外帮助。"
    ),
    background: text(
      "Baba Yaga is less a single villain than a dangerous threshold figure, where wisdom, appetite, wilderness, and initiation all mix together.",
      "芭芭雅嘎并非单纯的恶人，而是危险的门槛性存在，智慧、欲望、荒野与成长考验都在她身上交织。"
    ),
    themes: [text("thresholds", "门槛"), text("testing", "试炼"), text("wildness", "荒野")],
    imageUrl: "/story-artwork/baba-yaga.webp",
    tags: [text("witch", "女巫"), text("forest", "森林"), text("threshold", "边界"), text("trial", "试炼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Baba_Yaga"
  },
  {
    id: "gilgamesh",
    title: text("Gilgamesh Seeks Immortality", "吉尔伽美什寻求永生"),
    country: text("Iraq", "伊拉克"),
    region: text("Mesopotamia", "美索不达米亚"),
    culture: text("Sumerian", "苏美尔"),
    latitude: 31.3222,
    longitude: 45.6367,
    category: "epic",
    summary: text(
      "After losing Enkidu, Gilgamesh crosses the edge of the world to ask whether any human can escape death.",
      "失去恩奇都之后，吉尔伽美什走到世界尽头，追问人类是否能逃离死亡。"
    ),
    background: text(
      "The Epic of Gilgamesh is one of the oldest surviving long narratives, preserving Mesopotamian ideas about kingship, grief, and human limits.",
      "《吉尔伽美什史诗》是现存最古老的长篇叙事之一，保存了美索不达米亚关于王权、悲伤与人类极限的观念。"
    ),
    narrativeParagraphs: {
      en: [
        "Gilgamesh rules Uruk with great strength, and the people ask the gods to check him. The gods create Enkidu, a wild man who grows up among animals. After Enkidu comes to the city, he wrestles Gilgamesh and the two become close friends. Together they decide to seek fame by traveling to the Cedar Forest.",
        "There they fight Humbaba, the forest guardian, and kill him despite his pleas. When Gilgamesh later rejects Ishtar, she sends the Bull of Heaven against Uruk. Gilgamesh and Enkidu kill the bull as well. The gods then decree that Enkidu must die, and his death leaves Gilgamesh shattered.",
        "Unable to accept that any human must die, Gilgamesh sets out to find Utnapishtim, who survived the great flood. He crosses dangerous lands and waters until he reaches the old man and hears how the flood survivor gained endless life. Gilgamesh fails the test of staying awake and then loses a plant that could restore youth when a serpent steals it. He returns to Uruk with empty hands and looks upon the city walls he built."
      ],
      zh: [
        "吉尔伽美什以强大的力量统治乌鲁克，城中百姓于是向诸神求助。诸神造出了在野外与兽群同住的恩奇都来制衡他。恩奇都来到城里后，先与吉尔伽美什摔跤，随后两人成了亲密的朋友。他们决定一起前往雪松林，以壮举赢得名声。",
        "到了雪松林，他们与守林者洪巴巴交战，并在对方求饶后仍将其杀死。后来吉尔伽美什拒绝了伊什塔尔，她便把天之公牛放到乌鲁克城中。吉尔伽美什和恩奇都又合力杀死了公牛。诸神因此判定恩奇都必须死去，他的死亡也让吉尔伽美什彻底崩溃。",
        "吉尔伽美什无法接受人终有一死，于是动身去寻找曾在大洪水中幸存的乌特纳比什廷。他越过危险的土地与水域，终于见到老人，并听他说起自己如何得到长生。吉尔伽美什没能通过保持清醒的考验，后来又让能恢复青春的植物被一条蛇偷走。最终他两手空空回到乌鲁克，只能望着自己建起的城墙。"
      ]
    },
    themes: [text("grief", "悲痛"), text("mortality", "死亡"), text("kingship", "王权")],
    imageUrl: "/story-artwork/gilgamesh.webp",
    tags: [text("friendship", "友情"), text("mortality", "死亡"), text("king", "国王"), text("quest", "追寻")],
    sourceUrl: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh"
  },
  {
    id: "amaterasu-cave",
    title: text("Amaterasu Leaves the Cave", "天照走出岩洞"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Shinto", "神道"),
    latitude: 34.9671,
    longitude: 135.7727,
    category: "religion",
    summary: text(
      "When the sun goddess hides in a cave, the world falls dark until laughter, ritual, and a mirror lure light back outside.",
      "当太阳女神躲进岩洞，世界陷入黑暗，直到笑声、仪式与镜子把光重新引回人间。"
    ),
    background: text(
      "This Shinto story connects divine light with performance, ceremony, and the restoration of balance after cosmic withdrawal.",
      "这个神道故事把神圣光明与表演、仪式，以及宇宙失衡后的重新恢复联系在一起。"
    ),
    narrativeParagraphs: {
      en: [
        "Amaterasu rules the heavens with light, but her brother Susanoo behaves with growing violence and disorder. He wrecks the rice fields, breaks sacred boundaries, and throws the court into fear. At last he flings a flayed horse into the weaving hall where Amaterasu's attendants are working. Shocked and enraged, Amaterasu hides herself inside a cave and seals the entrance.",
        "As soon as she disappears, the world falls into darkness and the gods gather to find a way to draw her out. They hang jewels and a mirror before the cave and prepare a noisy celebration. The goddess Ame-no-Uzume climbs onto a tub and begins a wild dance. The other gods laugh so loudly that the cave echoes with their voices.",
        "Hearing the uproar, Amaterasu opens the rock door a little and asks why everyone is rejoicing. The gods tell her that a greater goddess has appeared and show her the mirror. When she leans forward to look, the strong god Tajikarao pulls her into the open. The gods block the cave behind her, and light returns to heaven and earth."
      ],
      zh: [
        "天照以光明统御高天原，但她的弟弟素戋呜尊越来越狂暴无序。他毁坏田地，冲破神圣的界限，也让神庭上下人人不安。最后他把一匹剥了皮的马扔进织殿，那时天照的侍女们正在里面劳作。天照又惊又怒，便躲进岩洞，并把洞口封了起来。",
        "她一消失，世界立刻陷入黑暗，众神也聚在一起商量如何把她引出来。他们在洞前挂起珠玉和镜子，又安排了一场热闹的庆典。天宇受卖命站到木桶上，跳起夸张而欢闹的舞。周围诸神放声大笑，笑声在岩洞前不断回荡。",
        "天照听见外面的喧闹，便微微推开石门，询问众神为何这样高兴。众神告诉她，外面出现了一位比她更辉煌的女神，并把镜子给她看。她探身向前看自己的倒影时，天手力男神立刻把她拉了出来。众神随后封住洞口，光明也重新回到了天地之间。"
      ]
    },
    themes: [text("ritual", "仪式"), text("renewal", "复归"), text("light", "光明")],
    imageUrl: "/story-artwork/amaterasu-cave.webp",
    tags: [text("sun", "太阳"), text("ritual", "仪式"), text("mirror", "镜子"), text("shinto", "神道")],
    sourceUrl: "https://en.wikipedia.org/wiki/Amaterasu"
  },
  {
    id: "rainbow-serpent",
    title: text("The Rainbow Serpent", "彩虹蛇"),
    country: text("Australia", "澳大利亚"),
    region: text("Oceania", "大洋洲"),
    culture: text("Aboriginal Australian", "澳洲原住民"),
    latitude: -12.4634,
    longitude: 130.8456,
    category: "myth",
    summary: text(
      "The Rainbow Serpent moves through land and water as a creator power, shaping rivers, fertility, weather, and law.",
      "彩虹蛇作为创造之力穿行于陆地与水域，塑造河流、生育、天气与法则。"
    ),
    background: text(
      "Rainbow Serpent traditions vary widely across Aboriginal cultures, but often tie landscape, ancestral power, and law to living place.",
      "彩虹蛇传统在不同原住民文化中各不相同，但常把地貌、祖灵力量与法则紧密系于真实生活之地。"
    ),
    themes: [text("landscape", "地景"), text("ancestry", "祖灵"), text("law", "法则")],
    imageUrl: "/story-artwork/rainbow-serpent.webp",
    tags: [text("creation", "创造"), text("water", "水"), text("law", "法则"), text("serpent", "蛇")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rainbow_Serpent"
  },
  {
    id: "maui-snares-sun",
    title: text("Maui Slows the Sun", "毛伊驯住太阳"),
    country: text("New Zealand", "新西兰"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Maori", "毛利"),
    latitude: -38.1368,
    longitude: 176.2497,
    category: "folktale",
    summary: text(
      "Maui and his brothers snare the sun so days become long enough for people to work, cook, and live.",
      "毛伊与兄弟们套住太阳，让白昼变得足够长，好让人们劳作、做饭与生活。"
    ),
    background: text(
      "Across Polynesian traditions, Maui is a culture hero whose tricks reshape the practical conditions of everyday life.",
      "在波利尼西亚诸传统中，毛伊是一位文化英雄，他的机巧改变了日常生活的基本条件。"
    ),
    themes: [text("ingenuity", "巧思"), text("time", "时间"), text("survival", "生存")],
    imageUrl: "/story-artwork/maui-snares-sun.webp",
    tags: [text("sun", "太阳"), text("trickster", "骗子英雄"), text("time", "时间"), text("polynesia", "波利尼西亚")],
    sourceUrl: "https://en.wikipedia.org/wiki/M%C4%81ui_(M%C4%81ori_mythology)"
  },
  {
    id: "king-arthur",
    title: text("Arthur Draws the Sword", "亚瑟拔出神剑"),
    country: text("United Kingdom", "英国"),
    region: text("Western Europe", "西欧"),
    culture: text("Brittonic", "不列颠凯尔特"),
    latitude: 51.5072,
    longitude: -0.1276,
    category: "history",
    summary: text(
      "Arthur's claim begins with a sword no one else can free, turning kingship into a test of destiny and recognition.",
      "亚瑟的王权起点，是那把无人能拔出的剑，让统治资格变成对命运与认同的试炼。"
    ),
    background: text(
      "Arthurian legend blends possible post-Roman memory with later medieval romance, creating a ruler who is always partly historical and partly imagined.",
      "亚瑟传说把后罗马时代的可能历史记忆与中世纪骑士传奇融合，塑造出一位既像历史人物又像想象造物的君王。"
    ),
    narrativeParagraphs: {
      en: [
        "Arthur is born to Uther Pendragon and is secretly placed in the household of Sir Ector while he is still a child. He grows up there beside Ector's son Kay and does not know his royal birth. After Uther dies, no clear heir can unite the realm. The land remains unsettled while great lords compete for power.",
        "At Christmas, a sword appears fixed in a stone beneath an anvil, bearing words that say the true king can draw it out. Many noblemen try to pull it free, but none can move it. When Kay needs a sword before a tournament, Arthur goes to fetch one for him. Not knowing what it is, he draws the sword from the stone with ease.",
        "Sir Ector and Kay realize what has happened and bring Arthur before the lords and clergy. To remove doubt, Arthur pulls the sword free again and again while others continue to fail. The people slowly accept that he is the rightful king, and he is crowned. Once Arthur takes the throne, his reign begins the line of stories later centered on Camelot and his knights."
      ],
      zh: [
        "亚瑟是乌瑟王的儿子，但他年幼时就被秘密送到艾克特爵士家中抚养。他和艾克特的儿子凯一起长大，却一直不知道自己的王族身世。等乌瑟去世以后，王国里没有明确的继承人能够统一众人。于是这片土地长久动荡，各地贵族也开始争夺权力。",
        "圣诞节时，一把剑出现在石头与铁砧之间，上面的字说明真正的国王才能把它拔出。许多贵族都上前尝试，却没有一个人能让它动一下。后来凯要参加比武，一时找不到佩剑，亚瑟便替他出去取剑。亚瑟并不知道那把剑的重要性，却轻而易举地把它从石中拔了出来。",
        "艾克特和凯看见这一幕，便把亚瑟带到贵族和教士面前。为了消除怀疑，亚瑟当众一次又一次把剑拔出，而其他人仍旧失败。人们这才逐渐承认他就是合法的君王，并为他加冕。亚瑟登上王位之后，后来围绕卡美洛与圆桌骑士展开的故事也由此开始。"
      ]
    },
    themes: [text("legitimacy", "正统性"), text("destiny", "命运"), text("recognition", "认同")],
    imageUrl: "/story-artwork/king-arthur.webp",
    tags: [text("king", "国王"), text("sword", "剑"), text("destiny", "命运"), text("camelot", "卡美洛")],
    sourceUrl: "https://en.wikipedia.org/wiki/King_Arthur"
  },
  {
    id: "osiris",
    title: text("Isis Restores Osiris", "伊西斯复原奥西里斯"),
    country: text("Egypt", "埃及"),
    region: text("North Africa", "北非"),
    culture: text("Ancient Egyptian", "古埃及"),
    latitude: 30.0444,
    longitude: 31.2357,
    category: "myth",
    summary: text(
      "Isis gathers the scattered body of Osiris, making grief, magic, kingship, and the afterlife part of one enduring myth.",
      "伊西斯收集被肢解的奥西里斯遗体，使悲伤、魔法、王权与来世共同构成一则长久流传的神话。"
    ),
    background: text(
      "The Osiris cycle shaped Egyptian ideas about death, rightful rule, and ritual restoration over many centuries.",
      "奥西里斯神话循环在漫长岁月里塑造了埃及人对死亡、正统统治与仪式性复原的理解。"
    ),
    narrativeParagraphs: {
      en: [
        "Osiris rules Egypt as king, and his brother Set grows jealous of him. Set prepares a beautiful chest made to fit Osiris exactly and brings it to a feast. He promises to give the chest to whoever fits inside it. When Osiris lies down in it, Set slams the lid shut and throws the chest into the river.",
        "Isis searches for her husband and finally finds the chest with Osiris's body inside. She hides it for a time, but Set discovers it and cuts the body into pieces. He scatters those pieces across the land to keep Osiris from returning. Isis and her sister Nephthys travel through Egypt and gather the pieces one by one.",
        "With magic and mourning rites, Isis puts Osiris together again and briefly restores him to life. In that meeting she conceives Horus, who will later grow up to challenge Set. Osiris does not remain among the living but goes to the realm of the dead. There he becomes the ruler who judges the souls of the dead in the underworld."
      ],
      zh: [
        "奥西里斯统治着埃及，他的兄弟塞特却因此越来越嫉妒他。塞特做了一只尺寸正好贴合奥西里斯身体的华美箱子，并把它带到宴会上。他声称谁能躺进去，就把箱子送给谁。等奥西里斯躺下以后，塞特立刻盖紧箱盖，把箱子投入河中。",
        "伊西斯四处寻找丈夫，最终找到了装着奥西里斯遗体的箱子。她一度把遗体藏了起来，但塞特后来发现此事，又把尸身切成许多块。他把这些碎块撒向各地，不让奥西里斯再回来。伊西斯和奈芙蒂斯于是走遍埃及，把散落的遗体一块块找回。",
        "伊西斯借助法术和哀悼仪式，把奥西里斯重新拼合起来，并让他短暂复生。也正是在那次相会中，她怀上了后来长大后会挑战塞特的荷鲁斯。奥西里斯没有继续留在人间，而是前往死者的国度。此后他在那里成为统治冥界、审判亡魂的王。"
      ]
    },
    themes: [text("restoration", "复原"), text("mourning", "哀悼"), text("afterlife", "来世")],
    imageUrl: "/story-artwork/osiris.webp",
    tags: [text("afterlife", "来世"), text("isis", "伊西斯"), text("kingship", "王权"), text("resurrection", "复生")],
    sourceUrl: "https://en.wikipedia.org/wiki/Osiris_myth"
  },
  {
    id: "atrahasis-flood",
    title: text("Atrahasis Survives the Flood", "阿特拉哈西斯逃过洪水"),
    country: text("Iraq", "伊拉克"),
    region: text("Mesopotamia", "美索不达米亚"),
    culture: text("Akkadian", "阿卡德"),
    latitude: 33.2232,
    longitude: 43.6793,
    category: "myth",
    summary: text(
      "Atrahasis hears a divine warning, builds a boat, and carries life through a flood sent to quiet a noisy human world.",
      "阿特拉哈西斯听到神的警告，造船渡劫，把生命带过一场为了压制喧嚣人世而降下的洪水。"
    ),
    background: text(
      "This Mesopotamian flood story preserves an older version of a disaster narrative later echoed in several neighboring traditions.",
      "这则美索不达米亚洪水故事保存了更古老的灾变叙事版本，后来在多个相邻传统中都能看到回响。"
    ),
    themes: [text("survival", "生存"), text("warning", "警示"), text("renewal", "新生")],
    imageUrl: "/story-artwork/atrahasis-flood.webp",
    tags: [text("flood", "洪水"), text("boat", "方舟"), text("survival", "生存"), text("gods", "诸神")],
    sourceUrl: "https://en.wikipedia.org/wiki/Atra-Hasis"
  },
  {
    id: "dido-carthage",
    title: text("Dido Founds Carthage", "狄多建立迦太基"),
    country: text("Tunisia", "突尼斯"),
    region: text("North Africa", "北非"),
    culture: text("Phoenician", "腓尼基"),
    latitude: 36.8528,
    longitude: 10.3233,
    category: "history",
    summary: text(
      "Dido carves out a new city by wit and treaty, turning exile into one of the Mediterranean's most famous founding legends.",
      "狄多凭借机智与盟约开辟新城，把流亡转化为地中海最著名的建城传奇之一。"
    ),
    background: text(
      "Dido's story sits between remembered colonial history and literary retelling, especially through Roman accounts of Carthage's beginnings.",
      "狄多的故事介于被记忆的殖民历史与文学重述之间，尤其通过罗马人对迦太基起源的叙写而流传。"
    ),
    themes: [text("founding", "建城"), text("strategy", "谋略"), text("exile", "流亡")],
    imageUrl: "/story-artwork/dido-carthage.webp",
    tags: [text("founding", "建城"), text("queen", "女王"), text("exile", "流亡"), text("carthage", "迦太基")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dido"
  },
  {
    id: "sigurd-fafnir",
    title: text("Sigurd Slays Fafnir", "西古尔德屠龙法夫纳"),
    country: text("Norway", "挪威"),
    region: text("Northern Europe", "北欧"),
    culture: text("Norse", "北欧"),
    latitude: 60.472,
    longitude: 8.4689,
    category: "epic",
    summary: text(
      "Sigurd kills the dragon Fafnir, tastes its blood, and gains a terrible wisdom about treasure, betrayal, and fate.",
      "西古尔德杀死巨龙法夫纳，尝到龙血后获得可怕的洞察，明白财富、背叛与命运的代价。"
    ),
    background: text(
      "The Volsung material ties dragon-slaying glory to curses, doomed kinship, and the cost of heroic reputation.",
      "沃尔松格故事把屠龙荣耀与诅咒、注定破裂的亲缘，以及英雄名声的代价紧密相连。"
    ),
    themes: [text("greed", "贪欲"), text("fate", "命运"), text("heroic cost", "英雄代价")],
    imageUrl: "/story-artwork/sigurd-fafnir.webp",
    tags: [text("dragon", "龙"), text("treasure", "财宝"), text("hero", "英雄"), text("fate", "命运")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sigurd"
  },
  {
    id: "cu-chulainn",
    title: text("Cu Chulainn Holds the Ford", "库胡林独守浅滩"),
    country: text("Ireland", "爱尔兰"),
    region: text("Western Europe", "西欧"),
    culture: text("Irish", "爱尔兰"),
    latitude: 53.4129,
    longitude: -8.2439,
    category: "epic",
    summary: text(
      "Cu Chulainn defends Ulster alone at the ford, where youthful speed and battle fury become both gift and curse.",
      "库胡林独自在浅滩前守卫阿尔斯特，年轻的速度与狂暴的战斗力既是天赋，也是诅咒。"
    ),
    background: text(
      "The Ulster Cycle presents a hero whose spectacular prowess is inseparable from vulnerability, isolation, and tragedy.",
      "阿尔斯特故事群展现出一位英雄：他惊人的武勇与脆弱、孤绝和悲剧命运密不可分。"
    ),
    themes: [text("duty", "责任"), text("fury", "狂怒"), text("tragedy", "悲剧")],
    imageUrl: "/story-artwork/cu-chulainn.webp",
    tags: [text("hero", "英雄"), text("warrior", "战士"), text("ulster", "阿尔斯特"), text("fury", "狂怒")],
    sourceUrl: "https://en.wikipedia.org/wiki/C%C3%BA_Chulainn"
  },
  {
    id: "popol-vuh-twins",
    title: text("The Hero Twins Descend", "英雄双子下到冥界"),
    country: text("Guatemala", "危地马拉"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Kiche Maya", "基切玛雅"),
    latitude: 14.6349,
    longitude: -90.5069,
    category: "myth",
    summary: text(
      "The Hero Twins enter the underworld, outwit deathly lords, and turn ordeal into a cosmic pattern of play and renewal.",
      "英雄双子进入冥界，以机智战胜死亡之主，把磨难转化为一场关于游戏与复生的宇宙循环。"
    ),
    background: text(
      "Preserved in the Popol Vuh, the Twins connect ritual game play, death, and cyclical rebirth within Maya cosmology.",
      "在《波波尔·乌》中保存下来的双子故事，把仪式性球赛、死亡与循环性重生连接进玛雅宇宙观。"
    ),
    themes: [text("rebirth", "重生"), text("play", "游戏"), text("underworld", "冥界")],
    imageUrl: "/story-artwork/popol-vuh-twins.webp",
    tags: [text("underworld", "冥界"), text("twins", "双子"), text("ballgame", "球赛"), text("renewal", "新生")],
    sourceUrl: "https://en.wikipedia.org/wiki/Maya_Hero_Twins"
  },
  {
    id: "bochica-waterfall",
    title: text("Bochica Opens the Falls", "博奇卡劈开瀑布"),
    country: text("Colombia", "哥伦比亚"),
    region: text("South America", "南美洲"),
    culture: text("Muisca", "穆伊斯卡"),
    latitude: 4.711,
    longitude: -74.0721,
    category: "religion",
    summary: text(
      "Bochica strikes the rocks and releases floodwaters, teaching law, craft, and balance after the plain has drowned.",
      "博奇卡击开岩石、放走洪水，在平原被淹没后教会人们法则、技艺与平衡。"
    ),
    background: text(
      "Bochica appears as a civilizing figure in Muisca tradition, connecting landscape drama with ethical and practical instruction.",
      "在穆伊斯卡传统中，博奇卡是一位教化者，把壮阔地景与伦理、生活实践的教导联系起来。"
    ),
    themes: [text("balance", "平衡"), text("teaching", "教化"), text("landscape", "地景")],
    imageUrl: "/story-artwork/bochica-waterfall.webp",
    tags: [text("flood", "洪水"), text("teacher", "导师"), text("waterfall", "瀑布"), text("law", "法则")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bochica"
  },
  {
    id: "kintu-nambi",
    title: text("Kintu and Nambi", "金图与楠比"),
    country: text("Uganda", "乌干达"),
    region: text("East Africa", "东非"),
    culture: text("Ganda", "干达"),
    latitude: 0.3476,
    longitude: 32.5825,
    category: "myth",
    summary: text(
      "Kintu wins Nambi after impossible tests, but a broken instruction lets death follow the first family to earth.",
      "金图通过几乎不可能的考验赢得楠比，却因违背叮嘱，让死亡跟随第一户人家来到人间。"
    ),
    background: text(
      "This Buganda origin story ties marriage, obedience, and mortality to the fragile beginnings of human society.",
      "这则布干达起源故事把婚姻、服从与死亡连接到人类社会脆弱的开端。"
    ),
    themes: [text("origins", "起源"), text("obedience", "服从"), text("mortality", "死亡")],
    imageUrl: "/story-artwork/kintu-nambi.webp",
    tags: [text("origin", "起源"), text("family", "家庭"), text("death", "死亡"), text("sky", "天空")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kintu"
  },
  {
    id: "sundiata",
    title: text("Sundiata Rises", "松迪亚塔崛起"),
    country: text("Mali", "马里"),
    region: text("West Africa", "西非"),
    culture: text("Mande", "曼丁"),
    latitude: 12.6392,
    longitude: -8.0029,
    category: "history",
    summary: text(
      "Sundiata overcomes exile and frailty to gather allies, defeat a sorcerer-king, and found the Mali Empire.",
      "松迪亚塔克服流亡与体弱，集结盟友、击败巫王，建立起马里帝国。"
    ),
    background: text(
      "Remembered through griot performance, Sundiata's life blends political memory with legendary shaping of imperial origins.",
      "通过格里奥特吟诵传承下来的松迪亚塔人生，把政治记忆与帝国起源的传奇塑形融合在一起。"
    ),
    themes: [text("founding", "建国"), text("memory", "记忆"), text("perseverance", "坚韧")],
    imageUrl: "/story-artwork/sundiata.webp",
    tags: [text("empire", "帝国"), text("exile", "流亡"), text("king", "国王"), text("griot", "吟游史官")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sundiata_Keita"
  },
  {
    id: "mwindo-epic",
    title: text("Mwindo's Lightning Path", "姆温多的雷电之路"),
    originalTitle: text("Mwindo Epic", "姆温多史诗"),
    country: text("Democratic Republic of the Congo", "刚果民主共和国"),
    region: text("Central Africa", "中非"),
    culture: text("Nyanga", "尼扬加"),
    latitude: -1.6792,
    longitude: 29.2228,
    category: "epic",
    summary: text(
      "Mwindo is born with supernatural power, survives his father's violence, and travels through earthly and underworld trials before learning how to rule.",
      "姆温多带着超自然力量出生，逃过父亲的暴力追杀，穿越人间与冥界试炼，最终学会如何成为统治者。"
    ),
    background: text(
      "The Nyanga oral epic turns heroic wonder into a political education, asking how strength must be tempered before it can serve a community.",
      "这部尼扬加口头史诗把英雄奇迹写成一场政治教育，追问力量必须如何被节制，才能真正服务共同体。"
    ),
    themes: [text("leadership", "领导"), text("initiation", "成年试炼"), text("restraint", "节制")],
    tags: [text("lightning", "雷电"), text("underworld", "冥界"), text("chiefship", "酋长权"), text("oral epic", "口头史诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mwindo_epic"
  },
  {
    id: "shango-thunder",
    title: text("Shango Calls the Thunder", "尚戈召来雷霆"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("Yoruba", "约鲁巴"),
    latitude: 7.85,
    longitude: 3.9333,
    category: "religion",
    summary: text(
      "Shango joins royal memory with thunder, fire, drumming, and justice, making storm power sound like divine authority.",
      "尚戈把王者记忆与雷霆、火焰、鼓声和公正连在一起，让风暴之力听起来像神圣权威的发声。"
    ),
    background: text(
      "In Yoruba religion and diaspora traditions, Shango remains a force of charisma and danger, both an orisha and a legendary king.",
      "在约鲁巴宗教及其离散传统中，尚戈既是奥里沙神灵，也是传奇君王，持续体现魅力、危险与裁断之力。"
    ),
    themes: [text("justice", "公正"), text("thunder", "雷霆"), text("sacred kingship", "神圣王权")],
    tags: [text("orisha", "奥里沙"), text("fire", "火焰"), text("drumming", "鼓声"), text("lightning", "闪电")],
    sourceUrl: "https://en.wikipedia.org/wiki/Shango"
  },
  {
    id: "moremi-ajasoro",
    title: text("Moremi Enters the Enemy Camp", "莫雷米潜入敌营"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("Yoruba", "约鲁巴"),
    latitude: 7.4905,
    longitude: 4.5521,
    category: "history",
    summary: text(
      "Moremi risks capture to discover the secret behind Ife's enemies, turning courage and sacrifice into a legend of civic rescue.",
      "莫雷米冒着被俘的危险探明伊费敌人的秘密，把勇气与牺牲化为一则拯救城邦的传奇。"
    ),
    background: text(
      "Remembered as a Yoruba heroine, Moremi's story gives political survival a deeply personal cost and keeps public courage tied to ritual memory.",
      "作为约鲁巴女英雄被铭记的莫雷米，使政治存亡带上深刻的个人代价，也让公共勇气与仪式记忆相连。"
    ),
    themes: [text("sacrifice", "牺牲"), text("courage", "勇气"), text("liberation", "解放")],
    tags: [text("ife", "伊费"), text("queen", "王后"), text("spy", "潜入"), text("rescue", "拯救")],
    sourceUrl: "https://en.wikipedia.org/wiki/Moremi_Ajasoro"
  },
  {
    id: "amina-zazzau",
    title: text("Amina Rides from Zazzau", "阿米娜自扎扎乌出征"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("Hausa", "豪萨"),
    latitude: 11.0855,
    longitude: 7.7199,
    category: "history",
    summary: text(
      "Queen Amina becomes a warrior ruler of Zazzau, expanding the reach of her city and turning military brilliance into lasting legend.",
      "阿米娜女王成为扎扎乌的战士统治者，拓展城邦势力，让军事才略凝成持久传奇。"
    ),
    background: text(
      "Amina's reputation sits where Hausa political memory meets heroic storytelling, especially through accounts of campaigns, walls, and command.",
      "阿米娜的名声位于豪萨政治记忆与英雄叙事交界处，尤其通过征战、城墙与统帅能力的故事流传。"
    ),
    themes: [text("command", "统帅"), text("expansion", "拓展"), text("reputation", "声名")],
    tags: [text("warrior queen", "战士女王"), text("zazzau", "扎扎乌"), text("walls", "城墙"), text("campaigns", "远征")],
    sourceUrl: "https://en.wikipedia.org/wiki/Amina_of_Zazzau"
  },
  {
    id: "eloko-forest",
    title: text("Eloko Rings the Forest Bell", "埃洛科摇响森林铃"),
    country: text("Democratic Republic of the Congo", "刚果民主共和国"),
    region: text("Central Africa", "中非"),
    culture: text("Mongo-Nkundo", "芒戈-恩昆多"),
    latitude: -0.7893,
    longitude: 20.5237,
    category: "creature",
    summary: text(
      "Eloko haunts the deep forest with bells, claws, and guarded treasure, making the rainforest feel enchanted, hungry, and hard to read.",
      "埃洛科带着铃声、利爪与被守护的宝物出没于密林深处，让雨林显得被施了法、充满饥饿且难以读懂。"
    ),
    background: text(
      "Mongo-Nkundo tales of the Biloko turn the forest into a charged moral landscape, where rare fruit and hidden game are never simply free.",
      "芒戈-恩昆多关于比洛科的故事把森林变成充满道德张力的地景，其中稀有果实与隐秘猎物从来不是轻易可取之物。"
    ),
    themes: [text("forest danger", "森林危险"), text("treasure", "宝物"), text("enchantment", "魔法")],
    tags: [text("bells", "铃声"), text("rainforest", "雨林"), text("ancestor spirits", "祖灵"), text("hidden fruit", "隐秘果实")],
    sourceUrl: "https://en.wikipedia.org/wiki/Eloko"
  },
  {
    id: "tokoloshe",
    title: text("The Tokoloshe at Night", "夜里的托科洛希"),
    country: text("South Africa", "南非"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Nguni", "恩古尼"),
    latitude: -29.8587,
    longitude: 31.0218,
    category: "creature",
    summary: text(
      "The tokoloshe creeps through night fears as a small and dangerous spirit, making household safety feel uncertain after dark.",
      "托科洛希作为矮小而危险的灵物潜行于夜间恐惧中，让夜幕后的家宅安全变得不再确定。"
    ),
    background: text(
      "In southern African folklore, the tokoloshe condenses anxieties about witchcraft, vulnerability, and unseen harm into a memorable household terror.",
      "在南部非洲民间传说中，托科洛希把关于巫术、脆弱与无形伤害的焦虑凝成一种令人难忘的家宅恐惧。"
    ),
    themes: [text("fear", "恐惧"), text("witchcraft", "巫术"), text("hidden danger", "隐形危险")],
    tags: [text("night", "夜晚"), text("spirit", "灵物"), text("household", "家宅"), text("invisibility", "隐身")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tokoloshe"
  },
  {
    id: "grootslang",
    title: text("Grootslang Guards the Cave", "格鲁特斯朗守护洞穴"),
    country: text("South Africa", "南非"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("South African", "南非文化"),
    latitude: -28.1133,
    longitude: 16.9301,
    category: "creature",
    summary: text(
      "The Grootslang coils in diamond caves as a primeval hybrid, making greed, treasure, and ancient fear share the same dark tunnel.",
      "格鲁特斯朗盘踞在钻石洞穴中，作为原初混合巨兽，让贪欲、宝藏与古老恐惧共处同一条幽暗隧道。"
    ),
    background: text(
      "The Richtersveld legend gives mineral wealth a monstrous guardian, warning that the earth's hidden riches may answer desire with terror.",
      "里赫特斯费尔德传说为矿藏财富安排了怪物守卫，警示地下隐秘珍宝也可能用恐惧回应人的欲望。"
    ),
    themes: [text("greed", "贪欲"), text("treasure", "宝藏"), text("ancient power", "古老力量")],
    tags: [text("cave", "洞穴"), text("diamonds", "钻石"), text("serpent", "巨蛇"), text("guardian", "守卫")],
    sourceUrl: "https://en.wikipedia.org/wiki/Grootslang"
  },
  {
    id: "unkulunkulu",
    title: text("Unkulunkulu Brings People from the Reeds", "乌恩库伦库鲁从芦苇中带出人类"),
    country: text("South Africa", "南非"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Zulu", "祖鲁"),
    latitude: -28.5306,
    longitude: 30.8958,
    category: "myth",
    summary: text(
      "Unkulunkulu stands at the beginning of human life, linking first ancestry, creation, cattle, and the living landscape of the reeds.",
      "乌恩库伦库鲁立在人类生命的开端，把最初祖先、创造、牛群与芦苇地景联系起来。"
    ),
    background: text(
      "Zulu traditions around Unkulunkulu preserve creation as a story of emergence, where people and social order arrive from a sacred beginning.",
      "围绕乌恩库伦库鲁的祖鲁传统把创造保存为一则显现故事：人群与社会秩序都从神圣开端来到世上。"
    ),
    themes: [text("creation", "创造"), text("ancestry", "祖先"), text("emergence", "显现")],
    tags: [text("reeds", "芦苇"), text("first ancestor", "始祖"), text("cattle", "牛群"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Unkulunkulu"
  },
  {
    id: "makeda-solomon",
    title: text("Makeda Visits Solomon", "玛凯达拜访所罗门"),
    originalTitle: text("Kebra Nagast", "列王荣耀"),
    country: text("Ethiopia", "埃塞俄比亚"),
    region: text("Horn of Africa", "非洲之角"),
    culture: text("Ethiopian", "埃塞俄比亚"),
    latitude: 14.1317,
    longitude: 38.7167,
    category: "history",
    summary: text(
      "Makeda, the Queen of Sheba, meets Solomon in a story that binds wisdom, royal descent, and Ethiopia's Solomonic memory.",
      "示巴女王玛凯达与所罗门相见，这段故事把智慧、王统血脉与埃塞俄比亚的所罗门王朝记忆绑定在一起。"
    ),
    background: text(
      "In the Kebra Nagast tradition, the meeting explains Menelik's birth and the sacred prestige claimed by Ethiopia's imperial history.",
      "在《列王荣耀》传统中，这场相会解释了孟尼利克的出生，也为埃塞俄比亚帝国史所声称的神圣威望奠基。"
    ),
    themes: [text("wisdom", "智慧"), text("lineage", "血统"), text("sacred kingship", "神圣王权")],
    tags: [text("queen of sheba", "示巴女王"), text("solomon", "所罗门"), text("menelik", "孟尼利克"), text("ark", "约柜")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kebra_Nagast"
  },
  {
    id: "nommo-dogon",
    title: text("Nommo Orders the Waters", "诺莫整理水与世界"),
    country: text("Mali", "马里"),
    region: text("West Africa", "西非"),
    culture: text("Dogon", "多贡"),
    latitude: 14.3501,
    longitude: -3.6104,
    category: "religion",
    summary: text(
      "The Nommo appear as primordial ancestral spirits, bringing speech, water, order, and sacred pattern into Dogon cosmology.",
      "诺莫作为原初祖灵出现，把语言、水、秩序与神圣结构带入多贡宇宙观。"
    ),
    background: text(
      "Dogon accounts of the Nommo connect creation with instruction, showing cosmic beginnings as something taught, organized, and ritually remembered.",
      "多贡关于诺莫的讲述把创造与教导相连，显示宇宙开端也是一种被传授、被整理并被仪式记忆的秩序。"
    ),
    themes: [text("cosmology", "宇宙观"), text("speech", "语言"), text("water", "水")],
    tags: [text("ancestor spirits", "祖灵"), text("creation", "创造"), text("dogon", "多贡"), text("order", "秩序")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nommo"
  },
  {
    id: "rostam-sohrab",
    title: text("Rostam Meets Sohrab", "罗斯塔姆遇见苏赫拉布"),
    country: text("Iran", "伊朗"),
    region: text("Western Asia", "西亚"),
    culture: text("Persian", "波斯"),
    latitude: 35.6892,
    longitude: 51.389,
    category: "epic",
    summary: text(
      "Rostam and Sohrab meet as enemies before they know they are father and son, making victory feel like disaster.",
      "罗斯塔姆与苏赫拉布在不知父子身份前以敌人相遇，使胜利本身也像一场灾难。"
    ),
    background: text(
      "In the Shahnameh, heroic combat becomes tragic recognition, showing how fame and family can destroy one another.",
      "在《列王纪》中，英雄决斗化为悲剧性的相认，展现名望与亲情如何彼此摧毁。"
    ),
    themes: [text("recognition", "相认"), text("kinship", "亲缘"), text("tragedy", "悲剧")],
    imageUrl: "/story-artwork/rostam-sohrab.webp",
    tags: [text("father", "父亲"), text("son", "儿子"), text("tragedy", "悲剧"), text("shahnameh", "列王纪")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rostam_and_Sohrab"
  },
  {
    id: "manas",
    title: text("Manas Gathers the Clans", "玛纳斯集结诸部"),
    country: text("Kyrgyzstan", "吉尔吉斯斯坦"),
    region: text("Central Asia", "中亚"),
    culture: text("Kyrgyz", "吉尔吉斯"),
    latitude: 42.8746,
    longitude: 74.5698,
    category: "epic",
    summary: text(
      "Manas unites scattered clans across the steppe, turning memory, migration, and battle into a vast oral epic.",
      "玛纳斯在草原上联合分散的部族，把记忆、迁徙与战争编织成一部宏大的口头史诗。"
    ),
    background: text(
      "The Manas tradition is one of the world's great oral epics, valued as both literary performance and cultural memory.",
      "《玛纳斯》传统是世界伟大的口头史诗之一，既是文学表演，也是文化记忆的载体。"
    ),
    themes: [text("unity", "团结"), text("memory", "记忆"), text("migration", "迁徙")],
    imageUrl: "/story-artwork/manas.webp",
    tags: [text("steppe", "草原"), text("clans", "部族"), text("oral epic", "口头史诗"), text("unity", "团结")],
    sourceUrl: "https://en.wikipedia.org/wiki/Epic_of_Manas"
  },
  {
    id: "garuda-amrita",
    title: text("Garuda Steals the Amrita", "迦楼罗夺取甘露"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教"),
    latitude: 28.6139,
    longitude: 77.209,
    category: "religion",
    summary: text(
      "Garuda flies against gods and serpents to seize the nectar of immortality and free his mother from bondage.",
      "迦楼罗对抗诸神与群蛇，夺取不死甘露，只为解救母亲脱离束缚。"
    ),
    background: text(
      "Garuda's story links cosmic conflict with devotion, liberation, and the symbolic tension between sky powers and serpents.",
      "迦楼罗的故事把宇宙冲突与虔诚、解放，以及天空力量与蛇族之间的象征张力联系起来。"
    ),
    themes: [text("freedom", "自由"), text("devotion", "虔诚"), text("power", "力量")],
    imageUrl: "/story-artwork/garuda-amrita.webp",
    tags: [text("bird", "神鸟"), text("amrita", "甘露"), text("freedom", "自由"), text("serpents", "群蛇")],
    sourceUrl: "https://en.wikipedia.org/wiki/Garuda"
  },
  {
    id: "hawaiian-pele",
    title: text("Pele Shapes the Islands", "佩蕾塑造群岛"),
    country: text("United States", "美国"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Hawaiian", "夏威夷"),
    latitude: 19.8968,
    longitude: -155.5828,
    category: "religion",
    summary: text(
      "Pele's fire travels through the islands, making volcanoes feel alive with rivalry, migration, destruction, and new land.",
      "佩蕾之火穿行群岛，让火山仿佛活着，承载竞争、迁徙、毁灭与新生土地。"
    ),
    background: text(
      "Pele traditions make volcanic change legible as kinship drama, showing land itself as active, sacred, and still forming.",
      "佩蕾传统把火山变化讲述成亲族戏剧，显示土地本身也是活跃、神圣且仍在形成中的存在。"
    ),
    themes: [text("creation", "创造"), text("migration", "迁徙"), text("sacred land", "神圣土地")],
    imageUrl: "/story-artwork/hawaiian-pele.webp",
    tags: [text("volcano", "火山"), text("fire", "火"), text("islands", "群岛"), text("migration", "迁徙")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pele_(deity)"
  },
  {
    id: "odysseus-cyclops",
    title: text("Odysseus and the Cyclops", "奥德修斯智斗独眼巨人"),
    originalTitle: text("Odyssey", "奥德赛"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "epic",
    summary: text(
      "Odysseus blinds the Cyclops Polyphemus and escapes by cunning, making wit as decisive as strength in the long road home.",
      "奥德修斯刺瞎独眼巨人波吕斐摩斯并靠机智脱身，让智慧与力量一样，成为漫长归途中的决定性武器。"
    ),
    background: text(
      "This episode from the Odyssey turns hospitality, identity, and survival into a tense contest between human cleverness and monstrous force.",
      "这一《奥德赛》片段把待客之道、身份暴露与生存困境，凝成一场人类机智对抗怪物蛮力的紧张较量。"
    ),
    themes: [text("cunning", "机智"), text("survival", "求生"), text("homecoming", "归乡")],
    tags: [text("cyclops", "独眼巨人"), text("voyage", "航程"), text("trick", "计谋"), text("hero", "英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Polyphemus"
  },
  {
    id: "heracles-labors",
    title: text("Heracles and the Twelve Labors", "赫拉克勒斯的十二试炼"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "epic",
    summary: text(
      "Heracles undertakes twelve impossible labors, turning punishment into a legendary measure of endurance, strength, and divine struggle.",
      "赫拉克勒斯承担十二项几乎不可能完成的试炼，把惩罚化为衡量忍耐、力量与神人冲突的传奇尺度。"
    ),
    background: text(
      "The labors gather many Greek monsters and sacred places into one hero cycle about guilt, redemption, and superhuman achievement.",
      "这些试炼把众多希腊怪物与圣地编织进同一英雄循环，讲述罪责、救赎与超人壮举。"
    ),
    themes: [text("atonement", "赎罪"), text("strength", "力量"), text("endurance", "坚忍")],
    tags: [text("labors", "试炼"), text("hero", "英雄"), text("monster", "怪物"), text("olympus", "奥林匹斯")],
    sourceUrl: "https://en.wikipedia.org/wiki/Labours_of_Hercules"
  },
  {
    id: "persephone-underworld",
    title: text("Persephone and the Underworld", "珀耳塞福涅与冥界"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "myth",
    summary: text(
      "Persephone's descent and return make the turning of the seasons feel like a story of loss, negotiation, and renewal.",
      "珀耳塞福涅的下冥与归来，让四季轮转成为一则关于失去、协商与复归的故事。"
    ),
    background: text(
      "Greek tradition ties Demeter's grief and Persephone's divided life to agricultural cycles and the fragile balance between worlds.",
      "希腊传统把得墨忒耳的悲伤与珀耳塞福涅在两界之间的生活，联系到农时循环与世界间脆弱的平衡。"
    ),
    themes: [text("renewal", "复归"), text("separation", "分离"), text("seasonality", "季节循环")],
    tags: [text("underworld", "冥界"), text("spring", "春天"), text("demeter", "得墨忒耳"), text("pomegranate", "石榴")],
    sourceUrl: "https://en.wikipedia.org/wiki/Persephone"
  },
  {
    id: "romulus-remus",
    title: text("Romulus and Remus", "罗穆路斯与雷穆斯"),
    country: text("Italy", "意大利"),
    region: text("Southern Europe", "南欧"),
    culture: text("Roman", "古罗马"),
    latitude: 41.9028,
    longitude: 12.4964,
    category: "history",
    summary: text(
      "Twin brothers raised by a she-wolf become the founders of Rome, with kinship and violence built into the city's origin story.",
      "由母狼哺育长大的双胞胎兄弟成为罗马的建立者，也让亲缘与暴力一同写进这座城市的起源。"
    ),
    background: text(
      "Roman legend uses the twins to explain sovereignty, sacred boundaries, and why state-making begins with rivalry as much as destiny.",
      "罗马传说借这对兄弟解释主权、神圣边界，以及为何国家的建立既源于命运，也源于竞争。"
    ),
    themes: [text("founding", "建城"), text("rivalry", "竞争"), text("destiny", "命运")],
    tags: [text("rome", "罗马"), text("twins", "双胞胎"), text("wolf", "母狼"), text("founding myth", "建国神话")],
    sourceUrl: "https://en.wikipedia.org/wiki/Romulus_and_Remus"
  },
  {
    id: "robin-hood",
    title: text("Robin Hood in Sherwood", "舍伍德森林的罗宾汉"),
    country: text("United Kingdom", "英国"),
    region: text("Western Europe", "西欧"),
    culture: text("English", "英格兰"),
    latitude: 52.9548,
    longitude: -1.1581,
    category: "history",
    summary: text(
      "Robin Hood defies corrupt authority from the greenwood, turning outlaw life into a legend of justice, disguise, and generosity.",
      "罗宾汉在森林中对抗腐败权力，把亡命生活变成一则关于公义、伪装与慷慨的传奇。"
    ),
    background: text(
      "Ballads and later retellings keep reshaping Robin Hood between folk rebel, noble archer, and dream of redistributive justice.",
      "民谣和后世改写不断重塑罗宾汉，使他在民间反抗者、神箭贵族与再分配正义的梦想之间游移。"
    ),
    themes: [text("justice", "公义"), text("rebellion", "反抗"), text("generosity", "慷慨")],
    tags: [text("outlaw", "绿林好汉"), text("archer", "弓箭手"), text("forest", "森林"), text("sherwood", "舍伍德")],
    sourceUrl: "https://en.wikipedia.org/wiki/Robin_Hood"
  },
  {
    id: "cinderella",
    title: text("Cinderella and the Glass Slipper", "灰姑娘与水晶鞋"),
    country: text("France", "法国"),
    region: text("Western Europe", "西欧"),
    culture: text("French", "法兰西"),
    latitude: 48.8566,
    longitude: 2.3522,
    category: "folktale",
    summary: text(
      "Cinderella rises from household hardship to royal recognition, making transformation, kindness, and timing feel quietly magical.",
      "灰姑娘从家务与欺压中走向王室认同，让蜕变、善良与命运时机显得温柔而神奇。"
    ),
    background: text(
      "Though the tale has many global relatives, the slipper-and-ball version became especially influential through Charles Perrault's retelling.",
      "这个故事在全球有许多近亲版本，但“舞会与水晶鞋”的形态经由佩罗改写后尤其深远。"
    ),
    narrativeParagraphs: {
      en: [
        "After her father dies, Cinderella is left in the care of a stepmother and two stepsisters who make her work as a servant in her own home. She sleeps by the hearth, wears rough clothes, and endures their constant scorn. Even so, she continues to do the household tasks they give her. Her life changes when the king announces a ball so the prince may choose a bride.",
        "Cinderella wants to go, but her stepmother refuses and leaves her behind while the others ride to the palace. Then her fairy godmother appears and gives her a gown, glass slippers, and a carriage made by magic. She warns Cinderella that everything will return to its old form at midnight. At the ball the prince dances only with Cinderella and cannot learn who she is before she runs away.",
        "On the second night she stays too long and flees as the clock strikes twelve. One glass slipper falls from her foot on the palace steps, and the prince keeps it. He sends men across the land to find the woman whose foot will fit the slipper. After the stepsisters fail, Cinderella tries it on, the slipper fits, and she is taken to the palace to marry the prince."
      ],
      zh: [
        "父亲去世以后，灰姑娘落到继母和两个继姐手里，在自己家中也被当成佣人使唤。她睡在炉边，穿着粗旧衣裳，还要忍受她们不断的轻视。即便如此，她还是日日做完那些繁重的家务。直到国王宣布举办舞会，为王子挑选新娘，她的生活才出现转机。",
        "灰姑娘也想去参加舞会，可继母拒绝了她，把她独自留在家里。就在这时，仙女教母出现了，用魔法为她变出礼服、水晶鞋和马车。仙女提醒她，一到午夜，一切都会恢复原样。到了舞会上，王子只与灰姑娘共舞，却还没来得及问出她的身份，她就匆忙离开了。",
        "第二天晚上，灰姑娘停留得太久，等钟声敲响十二下时才急忙逃走。她的一只水晶鞋落在宫殿台阶上，被王子留了下来。王子随后派人走遍全国，要找出那位能穿上这只鞋的女子。两个继姐都失败以后，灰姑娘穿上了鞋，正合适，于是被带进宫中嫁给了王子。"
      ]
    },
    themes: [text("transformation", "蜕变"), text("kindness", "善良"), text("recognition", "认同")],
    tags: [text("slipper", "水晶鞋"), text("ball", "舞会"), text("fairy godmother", "仙女教母"), text("rags to royalty", "逆转命运")],
    sourceUrl: "https://en.wikipedia.org/wiki/Cinderella"
  },
  {
    id: "snow-white",
    title: text("Snow White and the Mirror", "白雪公主与魔镜"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 51.3127,
    longitude: 9.4797,
    category: "folktale",
    summary: text(
      "Snow White survives envy and enchantment, turning innocence, danger, and return into one of Europe's most enduring fairy tales.",
      "白雪公主在嫉妒与魔法中幸存下来，把纯真、危险与归返编进欧洲最持久的童话之一。"
    ),
    background: text(
      "Collected by the Brothers Grimm, the tale persists through its charged images of the mirror, the forest, the apple, and suspended sleep.",
      "经由格林兄弟整理后，这个故事因魔镜、森林、苹果与沉睡等强烈意象而持续流传。"
    ),
    narrativeParagraphs: {
      en: [
        "A queen once wishes for a daughter with skin as white as snow, lips as red as blood, and hair as black as ebony. After the child is born, the queen dies, and a new queen becomes Snow White's stepmother. This queen owns a magic mirror that always tells her who is fairest in the land. When the mirror names Snow White instead of her, the queen orders a huntsman to kill the girl.",
        "The huntsman cannot do it and tells Snow White to flee into the forest. She wanders until she finds a small house belonging to seven dwarfs and begins living with them. The queen learns from the mirror that Snow White is still alive and goes after her in disguise. At last she tricks Snow White into biting a poisoned apple, and the girl falls into a deathlike sleep.",
        "The dwarfs place Snow White in a glass coffin because she still looks alive. A prince later comes to the forest, sees her, and asks that the coffin be carried away. As his servants move it, the piece of apple is dislodged from Snow White's throat. She wakes, the prince takes her with him, and the queen's pursuit comes to an end."
      ],
      zh: [
        "一位王后曾希望自己生下的女儿皮肤白如雪，嘴唇红如血，头发黑如乌木。孩子出生后不久，王后去世，新的王后成了白雪公主的继母。这位王后拥有一面总会说出谁最美的魔镜。当魔镜说白雪公主比她更美时，她便命令猎人把女孩带出去杀掉。",
        "猎人下不了手，于是放走了白雪公主，并叫她逃进森林。白雪公主一路走到七个小矮人的小屋里，从此与他们住在一起。王后从魔镜那里得知她还活着，便乔装改扮去追杀她。最后她骗白雪公主咬下一口毒苹果，让女孩陷入了像死去一样的沉睡。",
        "小矮人见白雪公主仍像活着一样，便把她安放在玻璃棺中。后来一位王子来到森林，看见她后，请人把棺木抬走。仆人搬动棺木时，卡在白雪公主喉中的苹果碎块被震了出来。白雪公主随即醒来，王子带她离开，王后的追逼也到此结束。"
      ]
    },
    themes: [text("envy", "嫉妒"), text("innocence", "纯真"), text("return", "归返")],
    tags: [text("mirror", "魔镜"), text("apple", "苹果"), text("forest", "森林"), text("dwarfs", "小矮人")],
    sourceUrl: "https://en.wikipedia.org/wiki/Snow_White"
  },
  {
    id: "little-red-riding-hood",
    title: text("Little Red Riding Hood", "小红帽"),
    country: text("France", "法国"),
    region: text("Western Europe", "西欧"),
    culture: text("French", "法兰西"),
    latitude: 48.8566,
    longitude: 2.3522,
    category: "folktale",
    summary: text(
      "A girl carrying food through the woods meets a wolf, making the path between home and danger feel thin, deceptive, and memorable.",
      "一个提着食物穿过树林的女孩遇见了狼，让家与危险之间的路显得纤薄、诡诈又难忘。"
    ),
    background: text(
      "Versions by Perrault and the Grimms frame the tale differently, but both keep its warning about appetite, trust, and vulnerable travel.",
      "佩罗和格林的版本气质不同，但都保留了它对欲望、信任与脆弱旅程的警示。"
    ),
    narrativeParagraphs: {
      en: [
        "Little Red Riding Hood is sent through the woods to bring food to her sick grandmother. Before she leaves, her mother tells her to stay on the path and go straight to the cottage. On the way she meets a wolf, who speaks to her gently and asks where she is going. After she tells him, the wolf runs ahead by a shorter road.",
        "The wolf reaches the grandmother's house first and gets inside. He swallows the old woman and puts on her clothes, then waits in her bed. When Little Red Riding Hood arrives, she notices that her grandmother looks and sounds strange. As she asks about the big ears, big eyes, and big teeth, the wolf leaps up and swallows her too.",
        "A passing woodcutter hears the noise and enters the cottage to see what has happened. He cuts open the sleeping wolf and pulls out the grandmother and Little Red Riding Hood alive. They fill the wolf's body with heavy stones before he wakes. When the wolf tries to run away, he falls dead, and the girl returns home with her grandmother."
      ],
      zh: [
        "小红帽受母亲之托，要穿过树林给生病的外婆送食物。出门前，母亲叮嘱她走直路，不要偏离小径。路上她遇见一只狼，狼装得很温和，问她要去哪里。小红帽把目的地告诉它以后，狼便沿着更短的路先跑走了。",
        "狼先到了外婆家，骗开房门后闯了进去。它吞下外婆，穿上外婆的衣服，躺到床上等小红帽过来。小红帽进门后，发现外婆的样子和声音都很奇怪。她一边问外婆为什么耳朵这么大、眼睛这么大、牙齿这么大，一边慢慢靠近，结果被狼扑上来吞了下去。",
        "一名路过的樵夫听见屋里的动静，便进门查看发生了什么。他剖开熟睡的狼，把外婆和小红帽都活着救了出来。随后他们往狼的肚子里装满沉重的石头，等它醒来。狼想逃走时立刻倒地死去，小红帽也和外婆一起平安回了家。"
      ]
    },
    themes: [text("danger", "危险"), text("trust", "信任"), text("warning", "警示")],
    tags: [text("wolf", "狼"), text("forest", "森林"), text("grandmother", "外婆"), text("disguise", "伪装")],
    sourceUrl: "https://en.wikipedia.org/wiki/Little_Red_Riding_Hood"
  },
  {
    id: "momotaro",
    title: text("Momotaro, the Peach Boy", "桃太郎"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Japanese", "日本文化"),
    latitude: 34.6551,
    longitude: 133.9195,
    category: "folktale",
    summary: text(
      "Born from a peach, Momotaro gathers animal companions and sails to defeat island ogres, turning courage into cheerful cooperation.",
      "桃子中诞生的桃太郎召集动物伙伴出海讨伐恶鬼，把勇气写成一段轻快的协作传奇。"
    ),
    background: text(
      "Momotaro became one of Japan's best-known children's tales, blending miraculous birth, household virtue, and expeditionary heroism.",
      "桃太郎成为日本最著名的儿童故事之一，把神奇出生、家庭美德与远征英雄气概揉合在一起。"
    ),
    themes: [text("companionship", "伙伴情谊"), text("courage", "勇气"), text("cooperation", "协作")],
    tags: [text("peach", "桃子"), text("oni", "鬼"), text("companions", "伙伴"), text("journey", "远行")],
    sourceUrl: "https://en.wikipedia.org/wiki/Momotar%C5%8D"
  },
  {
    id: "mulan",
    title: text("Mulan Takes Her Father's Place", "木兰代父从军"),
    originalTitle: text("Ballad of Mulan", "木兰辞"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 39.9042,
    longitude: 116.4074,
    category: "history",
    summary: text(
      "Mulan joins the army in disguise to spare her father, making filial devotion and martial resolve part of the same legend.",
      "木兰女扮男装从军替父出征，让孝道与战场决心在同一则传奇中并肩成立。"
    ),
    background: text(
      "The Ballad of Mulan survives as a compact and powerful poem, later expanded into one of the most famous stories of loyalty in East Asia.",
      "《木兰辞》以简练有力的诗歌流传，后来逐步扩展为东亚最著名的忠义故事之一。"
    ),
    themes: [text("filial duty", "孝道"), text("disguise", "伪装"), text("courage", "勇气")],
    tags: [text("army", "军旅"), text("daughter", "女儿"), text("loyalty", "忠义"), text("ballad", "叙事长歌")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hua_Mulan"
  },
  {
    id: "change-moon",
    title: text("Chang'e Flies to the Moon", "嫦娥奔月"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 31.2304,
    longitude: 121.4737,
    category: "myth",
    summary: text(
      "Chang'e rises to the moon after taking the elixir, making longing, immortality, and distance glow through the night sky.",
      "嫦娥服下仙药飞向月宫，让思念、长生与遥远之美一起悬在夜空中。"
    ),
    background: text(
      "The tale lives close to Mid-Autumn imagery, where the moon becomes a place of beauty, separation, and recurring reunion.",
      "这个故事与中秋意象紧密相连，使月亮成为美、别离与周期性团圆的所在。"
    ),
    themes: [text("longing", "思念"), text("immortality", "长生"), text("separation", "别离")],
    tags: [text("moon", "月亮"), text("elixir", "仙药"), text("mid-autumn", "中秋"), text("jade rabbit", "玉兔")],
    sourceUrl: "https://en.wikipedia.org/wiki/Chang%27e"
  },
  {
    id: "aladdin",
    title: text("Aladdin and the Lamp", "阿拉丁与神灯"),
    country: text("Syria", "叙利亚"),
    region: text("West Asia", "西亚"),
    culture: text("Arabic", "阿拉伯文化"),
    latitude: 33.5138,
    longitude: 36.2765,
    category: "folktale",
    summary: text(
      "Aladdin's rise through a magic lamp turns luck, desire, and danger into a tale about power that can be granted or stolen.",
      "阿拉丁借神灯而起，让运气、欲望与危险汇成一则关于力量如何被赐予又被夺走的故事。"
    ),
    background: text(
      "Though its textual history is complex, Aladdin became one of the best-known tales linked with the Thousand and One Nights tradition.",
      "尽管文本来源相当复杂，阿拉丁仍成为与《一千零一夜》传统联系最紧密、也最广为人知的故事之一。"
    ),
    themes: [text("fortune", "际遇"), text("desire", "欲望"), text("power", "力量")],
    tags: [text("lamp", "神灯"), text("genie", "精灵"), text("palace", "宫殿"), text("wish", "愿望")],
    sourceUrl: "https://en.wikipedia.org/wiki/Aladdin"
  },
  {
    id: "sinbad-sailor",
    title: text("Sinbad the Sailor", "水手辛巴达"),
    country: text("Iraq", "伊拉克"),
    region: text("West Asia", "西亚"),
    culture: text("Arabic", "阿拉伯文化"),
    latitude: 33.3152,
    longitude: 44.3661,
    category: "folktale",
    summary: text(
      "Sinbad survives extraordinary voyages full of islands, giants, storms, and treasure, making travel itself a theater of wonder and risk.",
      "辛巴达穿越岛屿、巨人、风暴与宝藏构成的奇异航程，让旅行本身成为惊奇与风险的剧场。"
    ),
    background: text(
      "The Sinbad cycle brings mercantile imagination into adventure storytelling, linking maritime trade routes with fabulous encounters.",
      "辛巴达故事把商业航海想象带入冒险叙事，将海上贸易路线与奇遇传说连在一起。"
    ),
    themes: [text("adventure", "冒险"), text("wonder", "奇观"), text("resilience", "韧性")],
    tags: [text("voyage", "航海"), text("treasure", "宝藏"), text("giants", "巨人"), text("sea", "大海")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sinbad_the_Sailor"
  },
  {
    id: "rama-exile",
    title: text("Rama's Exile", "罗摩流放记"),
    originalTitle: text("Ramayana", "罗摩衍那"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 26.7991,
    longitude: 82.2048,
    category: "epic",
    summary: text(
      "Rama's exile leads into a vast tale of duty, loyalty, and struggle, where righteous conduct is tested far from the throne.",
      "罗摩的流放展开为一部宏大的责任、忠诚与抗争史诗，让正道在远离王座之地接受考验。"
    ),
    background: text(
      "The Ramayana is one of South Asia's defining epics, shaping literary, theatrical, and devotional traditions across many regions.",
      "《罗摩衍那》是南亚最具定义性的史诗之一，深刻影响了多地的文学、表演与信仰传统。"
    ),
    themes: [text("duty", "责任"), text("loyalty", "忠诚"), text("righteousness", "正道")],
    tags: [text("exile", "流放"), text("sita", "悉多"), text("forest", "森林"), text("epic", "史诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ramayana"
  },
  {
    id: "krishna-kaliya",
    title: text("Krishna Dances on Kaliya", "黑天驯服卡利亚"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 27.5754,
    longitude: 77.6938,
    category: "religion",
    summary: text(
      "Krishna subdues the poisonous serpent Kaliya by dancing upon its heads, turning playfulness into divine protection.",
      "黑天踩着毒蛇卡利亚的蛇首起舞，将嬉戏之姿化为神性的护佑力量。"
    ),
    background: text(
      "In Krishna devotion, this episode shows a child-god whose beauty and delight are inseparable from cosmic authority and rescue.",
      "在黑天信仰中，这一段展现出孩童神明的美与喜悦，如何与宇宙性的权威和拯救不可分割。"
    ),
    themes: [text("divine play", "神圣嬉戏"), text("protection", "护佑"), text("purification", "净化")],
    tags: [text("serpent", "蛇"), text("river", "河流"), text("dance", "舞蹈"), text("devotion", "虔敬")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kaliya"
  },
  {
    id: "thor-mjolnir",
    title: text("Thor and the Hammer", "托尔与雷神之锤"),
    country: text("Norway", "挪威"),
    region: text("Northern Europe", "北欧"),
    culture: text("Norse", "北欧文化"),
    latitude: 59.9139,
    longitude: 10.7522,
    category: "myth",
    summary: text(
      "Thor's hammer makes thunder tangible, joining protection, raw force, and divine conflict in one of the best-known Norse images.",
      "托尔之锤让雷霆变得可感，把守护、蛮力与神界冲突凝成北欧神话中最知名的形象之一。"
    ),
    background: text(
      "Mjolnir appears across Norse myth as weapon, sacred sign, and emblem of a god who defends cosmic order through violence.",
      "妙尔尼尔在北欧神话中既是武器，也是神圣标志，象征托尔以暴烈之力维护宇宙秩序。"
    ),
    themes: [text("protection", "守护"), text("thunder", "雷霆"), text("strength", "力量")],
    tags: [text("hammer", "神锤"), text("storm", "风暴"), text("giants", "巨人"), text("asgard", "阿斯加德")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mj%C3%B6lnir"
  },
  {
    id: "medusa-gaze",
    title: text("Medusa's Gaze", "美杜莎的凝视"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "creature",
    summary: text(
      "Medusa's face turns onlookers to stone, making beauty, terror, and forbidden sight converge in one unforgettable monster.",
      "美杜莎的面容能把凝视者化为石头，让美、恐惧与禁忌之视交汇成一个难忘的怪物形象。"
    ),
    background: text(
      "Greek tradition remembers Medusa through shifting meanings, from mortal danger to apotropaic power that wards off evil.",
      "希腊传统中的美杜莎含义多变，既是致命危险，也是能驱邪避恶的护符性力量。"
    ),
    themes: [text("terror", "恐惧"), text("forbidden sight", "禁忌凝视"), text("transformation", "变形")],
    tags: [text("gorgon", "戈耳工"), text("stone", "石化"), text("snakes", "蛇发"), text("monster", "怪物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Medusa"
  },
  {
    id: "la-llorona",
    title: text("La Llorona by the Water", "河边哭泣的女人"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Mexican", "墨西哥文化"),
    latitude: 19.4326,
    longitude: -99.1332,
    category: "creature",
    summary: text(
      "La Llorona wanders near rivers in grief and warning, becoming one of Latin America's most haunting figures of loss.",
      "拉洛罗娜在河边徘徊、哭泣并发出警示，成为拉丁美洲最令人不安的失落形象之一。"
    ),
    background: text(
      "Versions differ widely, but the legend consistently binds motherhood, mourning, and dangerous night travel into a cautionary presence.",
      "不同版本差异很大，但这则传说始终把母性、哀悼与夜行危险绑定成一种警惕性的存在。"
    ),
    themes: [text("mourning", "哀悼"), text("warning", "警示"), text("loss", "失落")],
    tags: [text("river", "河流"), text("ghost", "幽灵"), text("lament", "哭诉"), text("night", "夜晚")],
    sourceUrl: "https://en.wikipedia.org/wiki/La_Llorona"
  },
  {
    id: "el-dorado",
    title: text("The Search for El Dorado", "寻找黄金国"),
    country: text("Colombia", "哥伦比亚"),
    region: text("South America", "南美洲"),
    culture: text("Muisca", "穆伊斯卡文化"),
    latitude: 4.711,
    longitude: -74.0721,
    category: "history",
    summary: text(
      "El Dorado lures explorers with visions of gold, turning rumor, ritual, and conquest into a legendary geography of desire.",
      "黄金国以财富幻景诱惑探险者，让传闻、仪式与征服共同塑成一片被欲望驱动的传奇地理。"
    ),
    background: text(
      "The legend grew from Indigenous ritual reports and colonial fantasy, showing how mythic wealth can redirect maps, violence, and empire.",
      "这则传说源于原住民仪式记述与殖民幻想，显示神话般的财富如何改写地图、暴力与帝国行动。"
    ),
    themes: [text("desire", "欲望"), text("quest", "追寻"), text("illusion", "幻象")],
    tags: [text("gold", "黄金"), text("expedition", "探险"), text("lagoon", "泻湖"), text("legend", "传说")],
    sourceUrl: "https://en.wikipedia.org/wiki/El_Dorado"
  },
  {
    id: "viracocha-creation",
    title: text("Viracocha Shapes the World", "维拉科查塑造世界"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美洲"),
    culture: text("Inca", "印加文化"),
    latitude: -15.765,
    longitude: -69.46,
    category: "religion",
    summary: text(
      "Viracocha rises from the waters to create the sun, moon, stars, and peoples, making cosmic order begin at the edge of Lake Titicaca.",
      "维拉科查从水中现身，创造太阳、月亮、星辰与众人，让宇宙秩序从的的喀喀湖畔展开。"
    ),
    background: text(
      "In Andean tradition, Viracocha gathers creation, travel, teaching, and sacred authority into one far-reaching creator figure.",
      "在安第斯传统中，维拉科查把创造、远行、教导与神圣权威汇聚成一位影响深远的创世者。"
    ),
    themes: [text("creation", "创造"), text("sacred order", "神圣秩序"), text("teaching", "教导")],
    tags: [text("creator", "创世者"), text("lake", "湖泊"), text("sun", "太阳"), text("andes", "安第斯")],
    sourceUrl: "https://en.wikipedia.org/wiki/Viracocha"
  },
  {
    id: "manco-capac-cusco",
    title: text("Manco Capac Founds Cusco", "曼科·卡帕克建立库斯科"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美洲"),
    culture: text("Inca", "印加文化"),
    latitude: -13.532,
    longitude: -71.9675,
    category: "history",
    summary: text(
      "Manco Capac and Mama Ocllo follow a golden staff until it sinks into the earth, marking the place where Cusco will rise.",
      "曼科·卡帕克与玛玛·奥克略追随金杖前行，直到它没入大地，标出库斯科将要兴起的地方。"
    ),
    background: text(
      "The founding legend turns migration, divine descent, and city-making into a charter for Inca identity and rule.",
      "这则建城传说把迁徙、神圣血统与城市建立结合起来，成为印加身份与统治的起源说明。"
    ),
    themes: [text("founding", "奠基"), text("migration", "迁徙"), text("divine descent", "神圣血统")],
    tags: [text("cusco", "库斯科"), text("golden staff", "金杖"), text("founder", "奠基者"), text("inca", "印加")],
    sourceUrl: "https://en.wikipedia.org/wiki/Manco_C%C3%A1pac"
  },
  {
    id: "pachamama-earth",
    title: text("Pachamama Receives the Offering", "帕查玛玛接受供奉"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美洲"),
    culture: text("Andean", "安第斯文化"),
    latitude: -13.1631,
    longitude: -72.545,
    category: "religion",
    summary: text(
      "Pachamama is honored as the living earth, where harvest, mountain, and household survival depend on careful reciprocity.",
      "帕查玛玛被敬奉为有生命的大地，收成、山岳与家宅生计都依赖谨慎的互惠关系。"
    ),
    background: text(
      "Across Quechua and Aymara communities, offerings to Pachamama express a relationship with land that is practical, moral, and sacred.",
      "在克丘亚与艾马拉社群中，献给帕查玛玛的供奉表达了人与土地之间兼具实践、伦理与神圣性的关系。"
    ),
    themes: [text("reciprocity", "互惠"), text("fertility", "丰饶"), text("sacred ecology", "神圣生态")],
    tags: [text("earth", "大地"), text("offering", "供奉"), text("harvest", "收成"), text("mountains", "山岳")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pachamama"
  },
  {
    id: "ekeko-abundance",
    title: text("Ekeko Brings Abundance", "埃克科带来丰足"),
    country: text("Bolivia", "玻利维亚"),
    region: text("South America", "南美洲"),
    culture: text("Aymara", "艾马拉文化"),
    latitude: -16.4897,
    longitude: -68.1193,
    category: "religion",
    summary: text(
      "Ekeko carries miniature goods and household wishes, turning abundance into something people can bless, trade, and imagine together.",
      "埃克科背负微缩物件与家宅愿望，把丰足变成人们可以祝福、交换并共同想象的事物。"
    ),
    background: text(
      "The figure is especially visible in Andean festivals, where small objects stand in for hopes of work, food, travel, and prosperity.",
      "这一形象在安第斯节庆中格外醒目，微小物件象征人们对工作、食物、旅行与兴旺的期待。"
    ),
    themes: [text("abundance", "丰足"), text("wish-making", "许愿"), text("household", "家宅")],
    tags: [text("miniatures", "微缩物"), text("prosperity", "繁荣"), text("festival", "节庆"), text("luck", "好运")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ekeko"
  },
  {
    id: "trentren-caicai",
    title: text("Trentren and Caicai Raise the Land", "特伦特伦与凯凯托起大地"),
    country: text("Chile", "智利"),
    region: text("South America", "南美洲"),
    culture: text("Mapuche", "马普切文化"),
    latitude: -38.7359,
    longitude: -72.5904,
    category: "myth",
    summary: text(
      "Two great serpents struggle as sea and land rise against each other, explaining floods, mountains, and the fragile shape of the coast.",
      "两条巨蛇相互争斗，海水与陆地彼此抬升，解释洪水、山岳以及海岸脆弱的形状。"
    ),
    background: text(
      "Mapuche tellings use the conflict between Caicai Vilu and Trentren Vilu to bind catastrophe, refuge, and landscape memory together.",
      "马普切叙事借凯凯维卢与特伦特伦维卢的冲突，把灾变、避难与地貌记忆联结在一起。"
    ),
    themes: [text("catastrophe", "灾变"), text("landscape", "地景"), text("survival", "生存")],
    tags: [text("serpents", "巨蛇"), text("flood", "洪水"), text("mountains", "山脉"), text("coast", "海岸")],
    sourceUrl: "https://en.wikipedia.org/wiki/Trentren_Vilu_and_Caicai_Vilu"
  },
  {
    id: "yacumama-amazon",
    title: text("Yacumama in the Deep Water", "深水中的雅库玛玛"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美洲"),
    culture: text("Amazonian", "亚马孙文化"),
    latitude: -3.7491,
    longitude: -73.2538,
    category: "creature",
    summary: text(
      "Yacumama waits in Amazonian waters as an immense serpent-mother, making rivers feel alive, dangerous, and worthy of respect.",
      "雅库玛玛作为巨大的蛇母潜伏在亚马孙水域，让河流显得有生命、危险且值得敬畏。"
    ),
    background: text(
      "Stories of enormous water beings often mark places where travel, fishing, and survival require humility before the river world.",
      "关于巨型水中存在的故事，常标记那些行船、捕鱼与生存都必须向河流世界保持谦卑的地方。"
    ),
    themes: [text("respect", "敬畏"), text("river power", "河流之力"), text("danger", "危险")],
    tags: [text("serpent", "蛇"), text("amazon", "亚马孙"), text("water", "水域"), text("mother", "母亲")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yacumama"
  },
  {
    id: "iara-river",
    title: text("Iara Sings from the River", "伊阿拉在河中歌唱"),
    country: text("Brazil", "巴西"),
    region: text("South America", "南美洲"),
    culture: text("Brazilian", "巴西文化"),
    latitude: -3.119,
    longitude: -60.0217,
    category: "creature",
    summary: text(
      "Iara's beauty and song draw listeners toward the river, turning enchantment into a warning about desire and dangerous waters.",
      "伊阿拉的美貌与歌声把听者引向河中，让迷魅成为关于欲望与危险水域的警示。"
    ),
    background: text(
      "Brazilian folklore remembers Iara through layered Indigenous, European, and local river traditions, where attraction and peril meet.",
      "巴西民间传说中的伊阿拉融合了原住民、欧洲与本地河流传统，让吸引与危险彼此相遇。"
    ),
    themes: [text("enchantment", "迷魅"), text("warning", "警示"), text("desire", "欲望")],
    tags: [text("river", "河流"), text("song", "歌声"), text("water spirit", "水灵"), text("beauty", "美貌")],
    sourceUrl: "https://en.wikipedia.org/wiki/Iara_(mythology)"
  },
  {
    id: "curupira-forest",
    title: text("Curupira Guards the Forest", "库鲁皮拉守护森林"),
    country: text("Brazil", "巴西"),
    region: text("South America", "南美洲"),
    culture: text("Tupi-Guarani", "图皮-瓜拉尼文化"),
    latitude: -3.4653,
    longitude: -62.2159,
    category: "creature",
    summary: text(
      "Curupira runs through the forest with backward feet, confusing hunters who take too much or enter without respect.",
      "库鲁皮拉长着反向的脚，在森林中奔走，迷惑那些过度猎取或缺乏敬意的猎人。"
    ),
    background: text(
      "The figure works as both a mischievous forest being and a moral boundary around hunting, extraction, and care for living places.",
      "这一形象既是顽皮的森林存在，也是围绕狩猎、索取与照料生境而设下的伦理边界。"
    ),
    themes: [text("protection", "守护"), text("restraint", "克制"), text("wildness", "荒野")],
    tags: [text("forest", "森林"), text("backward feet", "反足"), text("hunter", "猎人"), text("guardian", "守护者")],
    sourceUrl: "https://en.wikipedia.org/wiki/Curupira"
  },
  {
    id: "saci-trickster",
    title: text("Saci Spins Through the Road", "萨西在路上旋转"),
    country: text("Brazil", "巴西"),
    region: text("South America", "南美洲"),
    culture: text("Brazilian", "巴西文化"),
    latitude: -23.5505,
    longitude: -46.6333,
    category: "folktale",
    summary: text(
      "Saci appears in a whirl of mischief, hiding tools, startling travelers, and making everyday disorder feel slyly alive.",
      "萨西伴着旋风般的恶作剧出现，藏起工具、惊吓旅人，让日常混乱显得机灵而有生命。"
    ),
    background: text(
      "Brazilian tellings of Saci draw from Indigenous, African, and European strands, producing a trickster who is playful, disruptive, and hard to catch.",
      "巴西关于萨西的叙事吸收了原住民、非洲与欧洲元素，塑造出一个顽皮、扰乱秩序又难以捉住的骗子形象。"
    ),
    themes: [text("mischief", "恶作剧"), text("trickery", "机巧"), text("everyday magic", "日常魔力")],
    tags: [text("trickster", "骗子英雄"), text("whirlwind", "旋风"), text("cap", "红帽"), text("pranks", "捣乱")],
    sourceUrl: "https://en.wikipedia.org/wiki/Saci_(Brazilian_folklore)"
  },
  {
    id: "pombero-night",
    title: text("Pombero Walks at Night", "波姆贝罗夜行"),
    country: text("Paraguay", "巴拉圭"),
    region: text("South America", "南美洲"),
    culture: text("Guarani", "瓜拉尼文化"),
    latitude: -25.2637,
    longitude: -57.5759,
    category: "creature",
    summary: text(
      "Pombero moves through night fields as a secretive presence, rewarding respect and punishing careless noise, trespass, or neglect.",
      "波姆贝罗在夜晚田野中隐秘行走，奖赏敬意，也惩罚粗心的喧闹、闯入与怠慢。"
    ),
    background: text(
      "In Guarani and Paraguayan folklore, Pombero keeps rural space charged with etiquette, fear, humor, and uneasy negotiation.",
      "在瓜拉尼与巴拉圭民间传说中，波姆贝罗让乡野空间充满礼数、恐惧、幽默与不安的协商。"
    ),
    themes: [text("respect", "敬意"), text("night", "夜晚"), text("boundaries", "边界")],
    tags: [text("fields", "田野"), text("spirit", "灵体"), text("silence", "寂静"), text("rural life", "乡村生活")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pombero"
  },
  {
    id: "raven-steals-light",
    title: text("Raven Steals the Light", "乌鸦盗来光明"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("Tlingit", "特林吉特文化"),
    latitude: 57.0531,
    longitude: -135.33,
    category: "myth",
    summary: text(
      "Raven steals the hidden light and releases it into the world, making trickery part of creation itself.",
      "乌鸦偷走被藏起的光明并将其释放到世界上，让欺巧本身成为创世的一部分。"
    ),
    background: text(
      "Across Northwest Coast traditions, Raven can be foolish, hungry, sacred, and world-making all at once.",
      "在西北海岸诸传统中，乌鸦可以同时是滑稽的、贪食的、神圣的，也是塑造世界的存在。"
    ),
    themes: [text("creation", "创造"), text("trickery", "机巧"), text("illumination", "光明")],
    tags: [text("raven", "乌鸦"), text("light", "光明"), text("trickster", "骗子英雄"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Raven_Tales"
  },
  {
    id: "sedna-sea",
    title: text("Sedna Beneath the Sea", "海底的塞德娜"),
    country: text("Canada", "加拿大"),
    region: text("Arctic", "北极地区"),
    culture: text("Inuit", "因纽特文化"),
    latitude: 63.7467,
    longitude: -68.517,
    category: "religion",
    summary: text(
      "Sedna dwells beneath the sea as a powerful being tied to marine animals, hunger, and the fragile reciprocity between people and waters.",
      "塞德娜居于海底，掌管海兽、饥荒与人与海洋之间脆弱而必要的互惠关系。"
    ),
    background: text(
      "Inuit traditions treat Sedna as a figure of cosmic consequence, whose anger or calm shapes whether communities can live from the sea.",
      "在因纽特传统里，塞德娜具有宇宙层面的后果，她的愤怒或平静会影响群体能否从海中生存。"
    ),
    themes: [text("reciprocity", "互惠"), text("survival", "生存"), text("sacred ecology", "神圣生态")],
    tags: [text("sea", "海洋"), text("marine animals", "海兽"), text("spirit", "灵体"), text("arctic", "北极")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sedna_(mythology)"
  },
  {
    id: "paul-bunyan",
    title: text("Paul Bunyan and the Frontier", "保罗·班扬与边疆"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("American", "美国文化"),
    latitude: 47.4736,
    longitude: -94.8803,
    category: "folktale",
    summary: text(
      "Paul Bunyan's giant feats turn logging, landscape, and exaggeration into a comic mythology of frontier scale.",
      "保罗·班扬的巨人壮举把伐木、地貌与夸张想象变成一套关于边疆尺度的喜剧神话。"
    ),
    background: text(
      "Tall tales about Paul Bunyan grew with American lumber culture, where impossible size and swagger expressed laboring fantasy.",
      "关于保罗·班扬的夸张故事伴随美国伐木文化成长，以不可能的体量和豪气表达劳动者的想象。"
    ),
    themes: [text("exaggeration", "夸张"), text("labor", "劳动"), text("frontier", "边疆")],
    tags: [text("giant", "巨人"), text("logging", "伐木"), text("frontier", "边疆"), text("tall tale", "夸张故事")],
    sourceUrl: "https://en.wikipedia.org/wiki/Paul_Bunyan"
  },
  {
    id: "john-henry",
    title: text("John Henry Races the Drill", "约翰·亨利大战蒸汽钻"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("African American", "非裔美国文化"),
    latitude: 37.9365,
    longitude: -81.1681,
    category: "history",
    summary: text(
      "John Henry competes against a steam drill with his hammer in hand, turning labor, pride, and mortality into modern legend.",
      "约翰·亨利手持铁锤与蒸汽钻竞速，把劳动、尊严与死亡写成现代传奇。"
    ),
    background: text(
      "The story lives in ballad tradition as a powerful meditation on industrial change, Black labor history, and heroic overexertion.",
      "这个故事通过歌谣传统流传，成为对工业变迁、黑人劳动史与英雄式透支的有力沉思。"
    ),
    themes: [text("labor", "劳动"), text("resistance", "抗争"), text("mortality", "死亡")],
    tags: [text("hammer", "铁锤"), text("railroad", "铁路"), text("machine", "机器"), text("ballad", "歌谣")],
    sourceUrl: "https://en.wikipedia.org/wiki/John_Henry_(folklore)"
  },
  {
    id: "tristan-isolde",
    title: text("Tristan and Isolde", "特里斯坦与伊索德"),
    country: text("Ireland", "爱尔兰"),
    region: text("Western Europe", "西欧"),
    culture: text("Celtic", "凯尔特文化"),
    latitude: 51.8985,
    longitude: -8.4756,
    category: "epic",
    summary: text(
      "A love potion binds Tristan and Isolde into desire and tragedy, making loyalty to love and loyalty to duty impossible to reconcile.",
      "爱情魔药将特里斯坦与伊索德系在一起，使忠于爱情与忠于责任变得无法调和。"
    ),
    background: text(
      "The legend travels through Celtic and medieval courtly traditions, where romance becomes inseparable from fatal consequence.",
      "这则传说穿行于凯尔特与中世纪宫廷传统，让爱情叙事与宿命性后果密不可分。"
    ),
    themes: [text("tragic love", "悲剧爱情"), text("loyalty", "忠诚"), text("fate", "命运")],
    tags: [text("potion", "魔药"), text("romance", "爱情"), text("court", "宫廷"), text("tragedy", "悲剧")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tristan_and_Iseult"
  },
  {
    id: "orpheus-eurydice",
    title: text("Orpheus Looks Back", "俄耳甫斯回头一望"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "myth",
    summary: text(
      "Orpheus nearly leads Eurydice out of the underworld, but one backward glance turns love, music, and loss into permanent memory.",
      "俄耳甫斯几乎把欧律狄刻带出冥界，却因一次回头让爱情、音乐与失落永远定格。"
    ),
    background: text(
      "The myth remains a touchstone for artists because it asks whether beauty can rescue the dead or only intensify grief.",
      "这则神话长久吸引艺术家，因为它追问美能否拯救死者，还是只会让悲伤更深。"
    ),
    themes: [text("loss", "失落"), text("music", "音乐"), text("memory", "记忆")],
    tags: [text("underworld", "冥界"), text("lyre", "里拉琴"), text("love", "爱情"), text("glance", "回望")],
    sourceUrl: "https://en.wikipedia.org/wiki/Orpheus_and_Eurydice"
  },
  {
    id: "theseus-minotaur",
    title: text("Theseus and the Minotaur", "忒修斯与牛头怪"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 35.3387,
    longitude: 25.1442,
    category: "creature",
    summary: text(
      "Theseus enters the labyrinth to kill the Minotaur, turning courage and guidance into the only path through engineered terror.",
      "忒修斯走入迷宫斩杀牛头怪，让勇气与引路之线成为穿越人造恐惧的唯一道路。"
    ),
    background: text(
      "The labyrinth story joins kingship, sacrifice, monstrosity, and problem-solving in one of the most durable Greek heroic episodes.",
      "迷宫故事把王权、祭献、怪物性与解题智慧联到一起，成为最持久的希腊英雄篇章之一。"
    ),
    themes: [text("courage", "勇气"), text("guidance", "引导"), text("sacrifice", "祭献")],
    tags: [text("labyrinth", "迷宫"), text("minotaur", "牛头怪"), text("thread", "线团"), text("hero", "英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Minotaur"
  },
  {
    id: "king-midas",
    title: text("King Midas and the Golden Touch", "迈达斯的点金术"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Phrygian", "弗里吉亚文化"),
    latitude: 39.9334,
    longitude: 32.8597,
    category: "myth",
    summary: text(
      "King Midas turns everything he touches to gold, discovering too late that abundance without measure becomes a curse.",
      "迈达斯让触碰到的一切化为黄金，却太晚才发现没有节制的丰饶本身就是诅咒。"
    ),
    background: text(
      "The story survives as one of the clearest classical warnings about greed, appetite, and the cost of misjudged wishes.",
      "这个故事留存为古典传统中最清晰的警世寓言之一，直指贪欲、欲求与错误愿望的代价。"
    ),
    themes: [text("greed", "贪婪"), text("wish", "愿望"), text("consequence", "后果")],
    tags: [text("gold", "黄金"), text("curse", "诅咒"), text("king", "国王"), text("touch", "触碰")],
    sourceUrl: "https://en.wikipedia.org/wiki/Midas"
  },
  {
    id: "sisyphus-stone",
    title: text("Sisyphus and the Stone", "西西弗斯与巨石"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9386,
    longitude: 22.9322,
    category: "myth",
    summary: text(
      "Sisyphus is condemned to push a stone uphill forever, making clever defiance and endless repetition equally unforgettable.",
      "西西弗斯被罚永远把巨石推上山，让机智的抗命与无尽重复一样令人难忘。"
    ),
    background: text(
      "The myth has endured far beyond antiquity because it gives memorable form to futility, punishment, and stubborn human persistence.",
      "这则神话超越古典时代持续流传，因为它为徒劳、惩罚与顽强的人类坚持提供了鲜明形象。"
    ),
    themes: [text("futility", "徒劳"), text("punishment", "惩罚"), text("persistence", "坚持")],
    tags: [text("stone", "巨石"), text("hill", "山坡"), text("labor", "劳作"), text("defiance", "抗命")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sisyphus"
  },
  {
    id: "sun-wukong-peach-banquet",
    title: text("Sun Wukong Wreaks Havoc in Heaven", "孙悟空大闹天宫"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 34.3416,
    longitude: 108.9398,
    category: "myth",
    summary: text(
      "Before the pilgrimage begins, Sun Wukong rebels against heavenly order, turning audacity and magical power into cosmic disorder.",
      "在取经开始之前，孙悟空反叛天庭，把胆气与神通化成席卷天界的巨大骚动。"
    ),
    background: text(
      "This episode from the Monkey King's story cycle became iconic in its own right, celebrating irreverence even as it points toward later discipline.",
      "这一段猴王故事早已独立成名，既歌颂桀骜不驯，也为后来的修行伏笔。"
    ),
    themes: [text("rebellion", "反叛"), text("power", "神通"), text("discipline", "修行")],
    tags: [text("heaven", "天宫"), text("monkey king", "孙悟空"), text("immortality", "长生"), text("peaches", "蟠桃")],
    sourceUrl: "https://en.wikipedia.org/wiki/Monkey_King"
  },
  {
    id: "nasreddin-donkey",
    title: text("Nasreddin and the Donkey", "纳斯尔丁和他的毛驴"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Turkish", "土耳其文化"),
    latitude: 39.7667,
    longitude: 30.5256,
    category: "folktale",
    summary: text(
      "Nasreddin's absurd wisdom turns everyday mishaps with his donkey into jokes that expose pride, habit, and common sense.",
      "纳斯尔丁用荒诞而机敏的智慧，把与毛驴有关的日常糗事变成揭示虚荣、成见与常识的笑谈。"
    ),
    background: text(
      "Nasreddin stories travel widely across Turkic, Persian, Arabic, and Balkan worlds, thriving on the thin line between fool and sage.",
      "纳斯尔丁故事广泛流传于突厥、波斯、阿拉伯和巴尔干世界，最迷人的地方正是愚人与智者之间的细线。"
    ),
    themes: [text("humor", "幽默"), text("wisdom", "智慧"), text("reversal", "反转")],
    tags: [text("donkey", "毛驴"), text("joke", "笑话"), text("sage", "智者"), text("everyday life", "日常生活")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nasreddin"
  },
  {
    id: "tam-lin",
    title: text("Tam Lin at Carterhaugh", "卡特豪的塔姆林"),
    country: text("Scotland", "苏格兰"),
    region: text("Western Europe", "西欧"),
    culture: text("Scottish", "苏格兰文化"),
    latitude: 55.6033,
    longitude: -2.7185,
    category: "folktale",
    summary: text(
      "Janet holds fast to Tam Lin through a night of transformations, turning love into an act of courage and endurance.",
      "珍妮特在一夜变形试炼中紧紧抱住塔姆林，让爱情本身成为勇气与坚忍的行动。"
    ),
    background: text(
      "Preserved in ballad tradition, Tam Lin blends fairy danger, rescue, and female resolve into one of Scotland's most admired tales.",
      "《塔姆林》经由民谣传统保存，把妖精危险、拯救行动与女性决心交织成苏格兰最受喜爱的故事之一。"
    ),
    themes: [text("devotion", "守护"), text("transformation", "变形"), text("endurance", "坚忍")],
    tags: [text("ballad", "民谣"), text("fairy", "妖精"), text("rescue", "营救"), text("shape-shifting", "变形")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tam_Lin"
  },
  {
    id: "sleeping-beauty",
    title: text("Sleeping Beauty Awakens", "睡美人苏醒"),
    country: text("France", "法国"),
    region: text("Western Europe", "西欧"),
    culture: text("French", "法兰西"),
    latitude: 48.8566,
    longitude: 2.3522,
    category: "folktale",
    summary: text(
      "A princess falls into enchanted sleep, making time itself feel suspended until fate, patience, and awakening finally meet.",
      "公主陷入魔法沉睡，让时间本身仿佛停滞，直到命运、等待与苏醒重新相逢。"
    ),
    background: text(
      "Perrault and later Grimm versions helped fix the thorn hedge, spindle, and hundred-year sleep as lasting fairy-tale images.",
      "佩罗及后来的格林版本，让荆棘围墙、纺锤与百年沉睡成为持久的童话意象。"
    ),
    themes: [text("enchantment", "魔法"), text("patience", "等待"), text("awakening", "苏醒")],
    tags: [text("sleep", "沉睡"), text("spindle", "纺锤"), text("castle", "城堡"), text("curse", "诅咒")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sleeping_Beauty"
  },
  {
    id: "rapunzel",
    title: text("Rapunzel in the Tower", "高塔中的长发姑娘"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 51.1657,
    longitude: 10.4515,
    category: "folktale",
    summary: text(
      "Rapunzel's hidden life in a tower turns hair, captivity, and longing into one of the most recognizable images in fairy tale.",
      "拉蓬泽尔被囚于高塔的生活，让长发、禁闭与思念成为童话中最醒目的意象之一。"
    ),
    background: text(
      "Known widely through the Grimms, the tale balances confinement and escape, innocence and danger, against a stark vertical world.",
      "经由格林兄弟广泛流传后，这个故事在高耸封闭的世界里平衡了囚禁与逃离、纯真与危险。"
    ),
    themes: [text("captivity", "禁闭"), text("longing", "向往"), text("escape", "逃离")],
    tags: [text("tower", "高塔"), text("hair", "长发"), text("witch", "女巫"), text("rescue", "营救")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rapunzel"
  },
  {
    id: "beauty-and-the-beast",
    title: text("Beauty and the Beast", "美女与野兽"),
    country: text("France", "法国"),
    region: text("Western Europe", "西欧"),
    culture: text("French", "法兰西"),
    latitude: 48.8566,
    longitude: 2.3522,
    category: "folktale",
    summary: text(
      "Beauty learns to see past a monstrous exterior, turning fear, gentleness, and transformation into a classic romance of recognition.",
      "美女学会越过可怖外表去看见真实之心，让恐惧、温柔与蜕变成为经典的爱情寓言。"
    ),
    background: text(
      "French literary fairy-tale tradition shaped the version most people know, where civility and desire slowly revise first impressions.",
      "法兰西文学童话传统塑造了最广为人知的版本，让礼仪与情感缓慢改变最初的判断。"
    ),
    themes: [text("transformation", "蜕变"), text("compassion", "怜悯"), text("recognition", "认知")],
    tags: [text("beast", "野兽"), text("rose", "玫瑰"), text("castle", "城堡"), text("curse", "诅咒")],
    sourceUrl: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast"
  },
  {
    id: "hansel-and-gretel",
    title: text("Hansel and Gretel", "糖果屋里的汉塞尔与格蕾特"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 51.1657,
    longitude: 10.4515,
    category: "folktale",
    summary: text(
      "Hansel and Gretel wander into a witch's candy house, making hunger, danger, and sibling resourcefulness central to the tale.",
      "汉塞尔和格蕾特误入女巫的糖果屋，让饥饿、危险与手足机敏成为这个故事的核心。"
    ),
    background: text(
      "The Grimm version endures because its edible fantasy sits against famine, abandonment, and children learning to survive on their own.",
      "格林版本之所以长久流传，在于它把可食用的幻想与饥荒、遗弃和儿童求生并置。"
    ),
    themes: [text("survival", "求生"), text("sibling bond", "手足情谊"), text("danger", "危险")],
    tags: [text("witch", "女巫"), text("forest", "森林"), text("breadcrumbs", "面包屑"), text("candy house", "糖果屋")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hansel_and_Gretel"
  },
  {
    id: "rumpelstiltskin",
    title: text("Rumpelstiltskin's Name", "侏儒怪的名字"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 51.1657,
    longitude: 10.4515,
    category: "folktale",
    summary: text(
      "A hidden name becomes the key to escaping a dangerous bargain, making language itself a form of power.",
      "一个被隐藏的名字成为逃离危险契约的关键，让语言本身化为力量。"
    ),
    background: text(
      "The tale survives through its stark exchange between impossible labor, supernatural help, and the perilous logic of promises.",
      "这个故事因其鲜明结构而流传不衰：不可能完成的任务、超自然援手，以及承诺背后的危险逻辑。"
    ),
    themes: [text("naming", "命名"), text("bargain", "交易"), text("power", "力量")],
    tags: [text("name", "名字"), text("straw to gold", "点草成金"), text("promise", "承诺"), text("trick", "诡计")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rumpelstiltskin"
  },
  {
    id: "pied-piper",
    title: text("The Pied Piper of Hamelin", "哈默林的吹笛人"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 52.1031,
    longitude: 9.3562,
    category: "folktale",
    summary: text(
      "The Piper lures away the town's rats and later its children, making broken promises echo with eerie permanence.",
      "吹笛人先引走城里的老鼠，后来又带走孩子们，让失信的代价留下阴森而持久的回声。"
    ),
    background: text(
      "The Hamelin legend sits between folktale and civic memory, where music becomes both remedy and revenge.",
      "哈默林传说介于民间故事与城市记忆之间，让音乐既成为解药，也成为报复。"
    ),
    themes: [text("promise", "承诺"), text("retribution", "报应"), text("music", "音乐")],
    tags: [text("piper", "吹笛人"), text("rats", "老鼠"), text("children", "孩子"), text("town", "小镇")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pied_Piper_of_Hamelin"
  },
  {
    id: "jack-beanstalk",
    title: text("Jack and the Beanstalk", "杰克与魔豆"),
    country: text("United Kingdom", "英国"),
    region: text("Western Europe", "西欧"),
    culture: text("English", "英格兰"),
    latitude: 51.5072,
    longitude: -0.1276,
    category: "folktale",
    summary: text(
      "Jack climbs a giant beanstalk into a world above the clouds, where risk, theft, and luck combine in a sky-high adventure.",
      "杰克顺着魔豆长出的巨藤爬上云端，在天空之上的世界里，把冒险、偷取与好运编成一场高悬的奇遇。"
    ),
    background: text(
      "The tale thrives on fairy-tale scale, where a poor household and a giant's castle are linked by one impossible vertical path.",
      "这个故事迷人之处在于童话般的尺度感：贫寒人家与巨人的城堡，被一条不可能的垂直道路连接起来。"
    ),
    themes: [text("risk", "冒险"), text("fortune", "运气"), text("audacity", "大胆")],
    tags: [text("beanstalk", "魔豆藤"), text("giant", "巨人"), text("harp", "竖琴"), text("golden hen", "金鸡")],
    sourceUrl: "https://en.wikipedia.org/wiki/Jack_and_the_Beanstalk"
  },
  {
    id: "faust-bargain",
    title: text("Faust's Bargain", "浮士德的契约"),
    country: text("Germany", "德国"),
    region: text("Western Europe", "西欧"),
    culture: text("German", "德意志"),
    latitude: 50.1109,
    longitude: 8.6821,
    category: "history",
    summary: text(
      "Faust trades with the devil in pursuit of knowledge and experience, turning ambition into one of Europe's defining cautionary legends.",
      "浮士德为了知识与经验同魔鬼交易，让野心成为欧洲最具代表性的警世传奇之一。"
    ),
    background: text(
      "From chapbook legend to Goethe's masterpiece, Faust became a durable figure for modern desire, intellect, and moral cost.",
      "从通俗传说到歌德巨作，浮士德逐渐成为现代欲望、理智与道德代价的持久象征。"
    ),
    themes: [text("ambition", "野心"), text("knowledge", "知识"), text("cost", "代价")],
    tags: [text("devil", "魔鬼"), text("contract", "契约"), text("scholar", "学者"), text("temptation", "诱惑")],
    sourceUrl: "https://en.wikipedia.org/wiki/Faust"
  },
  {
    id: "william-tell",
    title: text("William Tell and the Apple", "威廉·退尔射苹果"),
    country: text("Switzerland", "瑞士"),
    region: text("Western Europe", "西欧"),
    culture: text("Swiss", "瑞士文化"),
    latitude: 46.8182,
    longitude: 8.2275,
    category: "history",
    summary: text(
      "William Tell shoots an apple from his son's head, turning marksmanship into a legend of resistance against tyranny.",
      "威廉·退尔从儿子头上射落苹果，把神射技艺变成反抗暴政的传奇。"
    ),
    background: text(
      "Tell's story survives in the borderland between patriotic memory and legend, where precision becomes a sign of freedom.",
      "退尔的故事活在爱国记忆与传说的边界上，让精准本身成为自由的象征。"
    ),
    themes: [text("resistance", "反抗"), text("precision", "精准"), text("freedom", "自由")],
    tags: [text("apple", "苹果"), text("crossbow", "十字弓"), text("son", "儿子"), text("tyranny", "暴政")],
    sourceUrl: "https://en.wikipedia.org/wiki/William_Tell"
  },
  {
    id: "don-quixote-windmills",
    title: text("Don Quixote Charges the Windmills", "堂吉诃德冲向风车"),
    country: text("Spain", "西班牙"),
    region: text("Western Europe", "西欧"),
    culture: text("Spanish", "西班牙文化"),
    latitude: 39.8628,
    longitude: -3.9236,
    category: "folktale",
    summary: text(
      "Don Quixote mistakes windmills for giants, making idealism, delusion, and comic bravery inseparable in world literature.",
      "堂吉诃德把风车错认成巨人，让理想主义、错觉与可笑而可敬的勇气紧紧绑在一起。"
    ),
    background: text(
      "Though born in a novel, the windmill episode escaped into popular memory as a shorthand for heroic misrecognition.",
      "尽管它出自小说，但“大战风车”早已进入大众记忆，成为英雄式误认的代名词。"
    ),
    themes: [text("idealism", "理想主义"), text("delusion", "幻觉"), text("bravery", "勇敢")],
    tags: [text("windmills", "风车"), text("knight", "骑士"), text("quest", "冒险"), text("satire", "讽刺")],
    sourceUrl: "https://en.wikipedia.org/wiki/Don_Quixote"
  },
  {
    id: "scheherazade-nights",
    title: text("Scheherazade's Thousand Nights", "山鲁佐德的一千零一夜"),
    country: text("Iraq", "伊拉克"),
    region: text("West Asia", "西亚"),
    culture: text("Arabic", "阿拉伯文化"),
    latitude: 33.3152,
    longitude: 44.3661,
    category: "folktale",
    summary: text(
      "Scheherazade tells story after story to postpone death, making narration itself an art of survival.",
      "山鲁佐德一夜接一夜地讲故事来推迟死亡，让讲述本身成为求生的艺术。"
    ),
    background: text(
      "The frame tale of the Thousand and One Nights gives storytelling unusual stakes: wit and suspense become literal life support.",
      "《一千零一夜》的框架故事赋予叙事罕见的利害关系：机智与悬念都成了字面意义上的续命之术。"
    ),
    themes: [text("storytelling", "讲述"), text("survival", "求生"), text("wit", "机智")],
    tags: [text("nights", "长夜"), text("queen", "王后"), text("sultan", "苏丹"), text("frame tale", "框架故事")],
    sourceUrl: "https://en.wikipedia.org/wiki/Scheherazade"
  },
  {
    id: "ali-baba",
    title: text("Ali Baba and the Forty Thieves", "阿里巴巴与四十大盗"),
    country: text("Iraq", "伊拉克"),
    region: text("West Asia", "西亚"),
    culture: text("Arabic", "阿拉伯文化"),
    latitude: 33.3152,
    longitude: 44.3661,
    category: "folktale",
    summary: text(
      "Ali Baba finds a treasure cave opened by secret words, turning luck, greed, and cunning into a famous tale of hidden wealth.",
      "阿里巴巴发现了一座靠密语开启的藏宝洞，让运气、贪欲与机智汇成著名的财富故事。"
    ),
    background: text(
      "Like Aladdin, the tale became inseparable from the Thousand and One Nights orbit, where spoken formula and deception shape fate.",
      "和阿拉丁一样，这个故事也与《一千零一夜》传统紧密相连，让口令与欺骗共同改写命运。"
    ),
    themes: [text("greed", "贪欲"), text("cunning", "机智"), text("fortune", "机运")],
    tags: [text("treasure", "宝藏"), text("cave", "山洞"), text("open sesame", "芝麻开门"), text("thieves", "盗贼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ali_Baba_and_the_Forty_Thieves"
  },
  {
    id: "layla-majnun",
    title: text("Layla and Majnun", "莱拉与玛吉侬"),
    country: text("Iran", "伊朗"),
    region: text("West Asia", "西亚"),
    culture: text("Persian", "波斯文化"),
    latitude: 35.6892,
    longitude: 51.389,
    category: "epic",
    summary: text(
      "Layla and Majnun are driven apart until love itself becomes a kind of holy madness.",
      "莱拉与玛吉侬被命运分开，直到爱情本身化为一种近乎神圣的疯狂。"
    ),
    background: text(
      "Retold across Persianate and Arabic literary worlds, the story became a durable model of impossible, consuming love.",
      "这个故事在波斯语与阿拉伯语文学世界中不断被改写，成为无法实现却吞没一切的爱情典范。"
    ),
    themes: [text("devotion", "痴情"), text("separation", "分离"), text("madness", "疯狂")],
    tags: [text("lovers", "恋人"), text("poetry", "诗歌"), text("desert", "荒野"), text("tragedy", "悲剧")],
    sourceUrl: "https://en.wikipedia.org/wiki/Layla_and_Majnun"
  },
  {
    id: "urashima-taro",
    title: text("Urashima Taro and the Sea Palace", "浦岛太郎与龙宫"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Japanese", "日本文化"),
    latitude: 35.6764,
    longitude: 139.65,
    category: "folktale",
    summary: text(
      "Urashima Taro visits a palace beneath the sea and returns to find time irretrievably altered.",
      "浦岛太郎进入海底龙宫，归来时才发现人间岁月早已不可挽回地改变。"
    ),
    background: text(
      "The tale remains one of Japan's most memorable meditations on wonder, reward, and the pain of time passing elsewhere.",
      "这个故事是日本最令人难忘的时间寓言之一，把奇遇、奖赏与时间流逝的痛感连在一起。"
    ),
    themes: [text("time", "时间"), text("wonder", "奇遇"), text("loss", "失落")],
    tags: [text("sea", "大海"), text("turtle", "海龟"), text("palace", "龙宫"), text("box", "玉匣")],
    sourceUrl: "https://en.wikipedia.org/wiki/Urashima_Tar%C5%8D"
  },
  {
    id: "kaguya-hime",
    title: text("Princess Kaguya from the Bamboo", "竹中辉夜姬"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Japanese", "日本文化"),
    latitude: 35.0116,
    longitude: 135.7681,
    category: "folktale",
    summary: text(
      "A radiant girl found in a bamboo stalk rises beyond earthly suitors, making beauty inseparable from loss and distance.",
      "一位从竹中现身的光辉少女超越了凡间求婚者，让美与距离、失去紧紧相连。"
    ),
    background: text(
      "The Tale of the Bamboo Cutter is often called Japan's oldest narrative, and its moonward ending still feels startlingly modern.",
      "《竹取物语》常被视作日本最古老的叙事作品，而它面向月宫的结尾至今仍显得惊人地现代。"
    ),
    themes: [text("beauty", "美"), text("distance", "距离"), text("impermanence", "无常")],
    tags: [text("bamboo", "竹子"), text("moon", "月亮"), text("princess", "公主"), text("suitors", "求婚者")],
    sourceUrl: "https://en.wikipedia.org/wiki/The_Tale_of_the_Bamboo_Cutter"
  },
  {
    id: "susanoo-orochi",
    title: text("Susanoo Slays Orochi", "素戋呜尊斩八岐大蛇"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Shinto", "神道"),
    latitude: 35.4313,
    longitude: 133.3309,
    category: "creature",
    summary: text(
      "Susanoo defeats the eight-headed serpent Orochi, making storm, sword, and monster-slaying part of sacred myth.",
      "素戋呜尊斩杀八岐大蛇，把风暴、神剑与屠怪壮举纳入神圣神话之中。"
    ),
    background: text(
      "The Orochi episode anchors imperial regalia symbolism as well as a powerful Japanese image of chaotic force being subdued.",
      "八岐大蛇故事既连接皇室神器象征，也塑造出日本文化中压制混沌力量的强烈图景。"
    ),
    themes: [text("storm", "风暴"), text("heroism", "英雄"), text("order", "秩序")],
    tags: [text("serpent", "大蛇"), text("sword", "神剑"), text("shinto", "神道"), text("monster", "怪物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yamata_no_Orochi"
  },
  {
    id: "white-snake-legend",
    title: text("The Legend of the White Snake", "白蛇传"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 30.2741,
    longitude: 120.1551,
    category: "folktale",
    summary: text(
      "A serpent spirit takes human form for love, making devotion and taboo collide beside West Lake.",
      "蛇精为爱化作人形，让痴情与禁忌在西湖边正面相撞。"
    ),
    background: text(
      "One of China's most beloved love legends, the story lives through opera, storytelling, and the charged setting of West Lake.",
      "《白蛇传》是中国最受喜爱的爱情传说之一，经由戏曲、说书与西湖场景不断焕发生命力。"
    ),
    narrativeParagraphs: {
      en: [
        "After years of practice, the White Snake spirit takes human form and becomes Bai Suzhen. By West Lake she meets Xu Xian, and the two fall in love. Bai Suzhen marries him and lives as his wife among humans. Xiaoqing remains beside her as her close companion.",
        "The monk Fahai suspects that Bai Suzhen is not human and tries to separate the couple. During the Dragon Boat Festival, Xu Xian sees her true form and dies of shock. Bai Suzhen risks her life to steal a healing herb and brings him back. Later Fahai imprisons Xu Xian at Jinshan Temple, and Bai Suzhen goes there to rescue him.",
        "She summons wind and water against the monastery, but the fight fails and many people are harmed by the flood. After a short reunion with Xu Xian, Bai Suzhen becomes pregnant. Fahai then traps her beneath Leifeng Pagoda. In later tellings, her son grows up and finally helps bring the family together again."
      ],
      zh: [
        "白蛇修炼多年后化为人形，自称白素贞。她在西湖边遇见许仙，两人由此相爱。白素贞嫁给许仙，在人间做了他的妻子。小青也一直陪在她身边。",
        "法海怀疑白素贞并非凡人，一心想拆散这对夫妻。端午那天，许仙看见白素贞现出原形，当场惊死。白素贞冒险去盗仙草，把他救了回来。后来法海又把许仙困在金山寺，白素贞便赶去救他。",
        "她在寺前兴风起浪，与法海相斗，可这场水战最终没有成功，还连累了许多百姓。白素贞与许仙短暂重聚后怀了身孕。随后法海把她镇在雷峰塔下。到了后来的讲述里，她的儿子长大成人，才让这个家庭重新团聚。"
      ]
    },
    themes: [text("love", "爱情"), text("taboo", "禁忌"), text("devotion", "痴情")],
    tags: [text("snake spirit", "蛇妖"), text("west lake", "西湖"), text("pagoda", "雷峰塔"), text("monk", "法海")],
    sourceUrl: "https://en.wikipedia.org/wiki/Legend_of_the_White_Snake"
  },
  {
    id: "nuwa-creates-humans",
    title: text("Nuwa Creates Humanity", "女娲造人"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 34.7466,
    longitude: 113.6254,
    category: "myth",
    summary: text(
      "Nuwa fashions humans from earth, making creation feel intimate, handmade, and deeply relational.",
      "女娲以泥土造人，让创生显得亲近、手作而充满关系感。"
    ),
    background: text(
      "Chinese myth remembers Nuwa as both creator and cosmic repairer, linking human origins to a world that can fracture and be mended.",
      "中国神话中的女娲既是造物者也是补天者，把人类起源与可破裂、可修补的宇宙联系起来。"
    ),
    narrativeParagraphs: {
      en: [
        "After heaven and earth take shape, Nuwa walks through an empty world. She feels lonely among mountains, rivers, and animals. She kneads yellow earth with her hands and shapes the first human figures. When she sets them down, the figures come alive.",
        "Nuwa keeps making people one by one, but the labor is slow. She dips a cord into mud and swings it across the land. The droplets that fall from the cord also turn into human beings. In this way people spread across the earth in great numbers.",
        "In another part of her myth, Gonggong smashes the mountain that supports the sky and throws the world into disorder. Fire, flood, and wild beasts then trouble the land below. Nuwa melts five-colored stones to mend the sky and uses a giant turtle's legs to support the four corners of heaven. After that repair, the world becomes fit for human life again."
      ],
      zh: [
        "天地初分以后，女娲走在空荡荡的世界里。她看见山川草木和飞禽走兽，却仍觉得寂寞。于是她捏起黄土，用手做出一个个人形。等这些泥人落到地上时，他们便活了起来。",
        "女娲一个一个地造人，可这样做得太慢。她后来把绳子浸进泥里，再甩向大地。飞散出去的泥点也都变成了人。就这样，人一点点布满了世间。",
        "在她的另一段神话里，共工撞断了支撑天空的山，天地因此失序。火灾、洪水和猛兽一起侵扰人间。女娲熔炼五色石去补天，又斩下巨龟的四足支住四极。等她把这一切修补好以后，人世才重新安定下来。"
      ]
    },
    themes: [text("creation", "创造"), text("repair", "修补"), text("origins", "起源")],
    tags: [text("clay", "泥土"), text("creation", "造人"), text("goddess", "女神"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/N%C3%BCwa"
  },
  {
    id: "nezha-sea",
    title: text("Nezha Conquers the Sea Dragon", "哪吒闹海"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 39.3434,
    longitude: 117.3616,
    category: "myth",
    summary: text(
      "Nezha defies the Dragon King's power, turning youthful fury into a myth of sacrifice and rebirth.",
      "哪吒反抗龙王权势，把少年怒气化为一则关于牺牲与重生的神话。"
    ),
    background: text(
      "Drawing from popular religion and later novels, Nezha's story remains one of the most energetic Chinese legends of rebellion.",
      "哪吒故事吸纳了民间信仰与后世小说资源，成为中国最富动势的反叛传奇之一。"
    ),
    narrativeParagraphs: {
      en: [
        "Nezha is born after a long pregnancy and emerges from a flesh ball already touched by divine power. He grows up in Li Jing's household and learns magical arts from his immortal teacher. Before long he carries the red armillary sash and the cosmic ring. One day he goes to the seashore to bathe and play.",
        "The disturbance reaches the palace of the Dragon King of the Eastern Sea. Nezha kills Ao Bing, the dragon prince, and clashes with the Dragon King's forces. The Dragon King goes to heaven to accuse Nezha's family and brings disaster toward them. To spare his parents, Nezha cuts off his flesh and returns his life to those who gave it.",
        "His spirit later seeks help from Taiyi Zhenren. The immortal makes him a new body from lotus roots and lotus leaves. Nezha rises again with his fire-tipped spear and wind-fire wheels. He returns to battle the Dragon King's side and continues as a young divine warrior."
      ],
      zh: [
        "哪吒在母亲漫长怀胎之后出世，一生下来就带着神异的力量。他在李靖家中长大，又跟随太乙真人学得法术。后来他有了混天绫和乾坤圈这些法宝。一天，他来到海边洗澡玩耍。",
        "这场动静惊到了东海龙王的水府。哪吒打死龙王之子敖丙，又和龙宫的兵将冲突起来。龙王上天告状，把灾祸引向李靖一家。为了不连累父母，哪吒剔骨还父、削肉还母，当场自尽。",
        "后来他的魂魄向太乙真人求助。太乙真人用莲藕和荷叶为他重塑身体。哪吒重新站起，拿回火尖枪和风火轮。此后他再去迎战龙王一方，继续以少年神将的身份出现。"
      ]
    },
    themes: [text("rebellion", "反抗"), text("sacrifice", "牺牲"), text("rebirth", "重生")],
    tags: [text("dragon king", "龙王"), text("sea", "东海"), text("lotus body", "莲花化身"), text("hero", "英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nezha"
  },
  {
    id: "cowherd-weaver-girl",
    title: text("The Cowherd and the Weaver Girl", "牛郎织女"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 32.0603,
    longitude: 118.7969,
    category: "folktale",
    summary: text(
      "Separated lovers meet only once a year across the Milky Way, making distance feel cosmically tender.",
      "被分开的恋人只能每年隔着银河相会一次，让距离拥有了宇宙般温柔的重量。"
    ),
    background: text(
      "This Qixi story connects starlore with romance, turning the night sky into a calendar of longing and reunion.",
      "这个七夕故事把星宿传说与爱情连在一起，让夜空成为思念与相会的历法。"
    ),
    narrativeParagraphs: {
      en: [
        "Niulang is a poor cowherd who lives under the harsh rule of his brother's household. An old ox tells him that heavenly maidens will come down to bathe. Niulang hides Zhinu's robe and meets her by the water. Zhinu agrees to stay with him, and the two marry.",
        "They live together on earth and have a son and a daughter. In heaven, the Queen Mother learns that a weaving goddess has married a mortal. She descends, takes Zhinu away, and brings her back to the sky. The old ox tells Niulang to use its hide so he can follow after her.",
        "Niulang carries the children and chases his wife into the heavens. The Queen Mother draws the Milky Way across the sky and separates the couple on opposite banks. Their grief moves a flock of magpies to form a bridge once each year. On the seventh night of the seventh month, the family is allowed to meet before they part again."
      ],
      zh: [
        "牛郎是个贫苦的放牛人，长期受哥哥和嫂子的苛待。后来家里的老牛告诉他，天上的仙女会下凡到河边洗澡。牛郎藏起了织女的衣裳，就这样在水边见到了她。织女答应留下来，两人也因此成了夫妻。",
        "他们在人间生活，还生下了一儿一女。天上的王母得知织女嫁给了凡人，立刻下界把她带回天庭。老牛在临死前告诉牛郎，只要披上自己的皮，就能追上去。牛郎便挑着两个孩子，沿着天路去追妻子。",
        "等他快要追到时，王母拔下发簪，在天空划出一道银河。夫妻二人从此被分在河的两边，只能隔水相望。他们的悲苦感动了成群的喜鹊，喜鹊每年都会飞来搭成一座桥。到了七月初七这一天，一家人才得以在鹊桥上相会一次。"
      ]
    },
    themes: [text("longing", "思念"), text("reunion", "重逢"), text("cosmic love", "天上之爱")],
    tags: [text("milky way", "银河"), text("magpies", "喜鹊"), text("lovers", "恋人"), text("qixi", "七夕")],
    sourceUrl: "https://en.wikipedia.org/wiki/The_Cowherd_and_the_Weaver_Girl"
  },
  {
    id: "pangu-separates-sky",
    title: text("Pangu Separates Heaven and Earth", "盘古开天辟地"),
    country: text("China", "中国"),
    region: text("East Asia", "东亚"),
    culture: text("Chinese", "中华文化"),
    latitude: 23.1291,
    longitude: 113.2644,
    category: "myth",
    summary: text(
      "Pangu splits heaven and earth apart, making the world's basic structure the outcome of primal effort.",
      "盘古劈开天地，让世界最基本的结构来自原初而巨大的用力。"
    ),
    background: text(
      "As a creation myth, Pangu gives monumental bodily scale to the emergence of order, space, and the material world.",
      "作为创世神话，盘古以巨大的身体尺度赋予秩序、空间与物质世界的诞生一种震撼感。"
    ),
    narrativeParagraphs: {
      en: [
        "At the beginning, heaven and earth are mixed together inside a dark cosmic egg. Pangu sleeps within it while the chaos slowly changes. When he wakes, he takes an axe and splits the mass apart. The light parts rise to become heaven, and the heavy parts sink to become earth.",
        "Fearing that the two halves will close again, Pangu stands between them. Each day heaven rises higher, earth grows thicker, and Pangu grows with them. He keeps pushing the world apart for thousands of years. At last the distance is firm and the structure of the world holds.",
        "Then Pangu falls, and his body changes into parts of the cosmos. His breath becomes wind and cloud, his voice becomes thunder, and his eyes become sun and moon. His blood turns into rivers, his flesh becomes soil, and his bones become mountains. The living world remains after the giant's body is transformed."
      ],
      zh: [
        "天地还没有分开的时候，世界像一个黑暗的大蛋，盘古就在里面沉睡。混沌慢慢变化，直到盘古醒来。醒来之后，他举起斧头，把这团混沌猛地劈开。轻清的东西上升成天，沉重的东西下沉成地。",
        "盘古担心天和地重新合拢，便站在它们中间支撑着。天一天比一天高，地一天比一天厚，盘古自己也随之长大。他就这样把天地顶开了许多年。直到天地彻底稳固，世界的格局才定下来。",
        "等这一切完成以后，盘古倒下了，他的身体开始化作万物。他的气息成了风和云，声音成了雷霆，双眼成了日月。他的血液变成江河，肌肉变成土地，骨骼变成山岳。这个世界最后就留在了巨人化身而成的万物之间。"
      ]
    },
    themes: [text("creation", "创世"), text("order", "秩序"), text("cosmos", "宇宙")],
    tags: [text("heaven and earth", "天地"), text("giant", "巨人"), text("origin", "起源"), text("cosmos", "宇宙")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pangu"
  },
  {
    id: "savitri-satyavan",
    title: text("Savitri Wins Back Satyavan", "萨维特丽夺回萨提梵"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 28.6139,
    longitude: 77.209,
    category: "epic",
    summary: text(
      "Savitri follows Death itself to reclaim her husband, turning devotion and eloquence into victorious strength.",
      "萨维特丽一路追随死神、夺回丈夫，让忠贞与口才化为取胜的力量。"
    ),
    background: text(
      "Preserved in the Mahabharata, the story is widely loved as a powerful image of fidelity facing cosmic inevitability.",
      "这一故事保存于《摩诃婆罗多》中，因其以坚贞直面宇宙必然性而深受喜爱。"
    ),
    themes: [text("devotion", "忠贞"), text("eloquence", "雄辩"), text("death", "死亡")],
    tags: [text("death god", "死神"), text("husband", "丈夫"), text("vow", "誓言"), text("epic", "史诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Savitri_and_Satyavan"
  },
  {
    id: "bhagiratha-ganga",
    title: text("Bhagiratha Brings Down the Ganges", "跋吉罗陀引天河下凡"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 25.3176,
    longitude: 82.9739,
    category: "religion",
    summary: text(
      "Bhagiratha's austerities bring the Ganges from heaven to earth, making perseverance flow into sacred geography.",
      "跋吉罗陀以苦修把恒河从天上引到人间，让坚持本身化成神圣地理。"
    ),
    background: text(
      "The descent of the Ganges ties penance, divine mediation, and river holiness into one of India's foundational sacred stories.",
      "恒河下降的故事把苦修、神圣调解与河流圣性联系起来，成为印度最基础的圣传之一。"
    ),
    themes: [text("perseverance", "坚持"), text("purification", "净化"), text("sacred river", "圣河")],
    tags: [text("ganges", "恒河"), text("shiva", "湿婆"), text("descent", "下降"), text("austerity", "苦修")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bhagiratha"
  },
  {
    id: "hanuman-leaps-lanka",
    title: text("Hanuman Leaps to Lanka", "哈奴曼飞渡兰卡"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 13.0827,
    longitude: 80.2707,
    category: "epic",
    summary: text(
      "Hanuman's leap across the sea turns devotion into strength so immense it can cross kingdoms.",
      "哈奴曼飞跃大海，把虔诚化为足以跨越国度的巨大力量。"
    ),
    background: text(
      "In the Ramayana tradition, Hanuman embodies service, courage, and the miraculous reach of focused loyalty.",
      "在《罗摩衍那》传统中，哈奴曼体现了服务、勇气，以及专注忠诚所能带来的奇迹力量。"
    ),
    themes: [text("devotion", "虔诚"), text("strength", "力量"), text("mission", "使命")],
    tags: [text("monkey hero", "猴神"), text("sea leap", "飞渡大海"), text("lanka", "兰卡"), text("rama", "罗摩")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hanuman"
  },
  {
    id: "samudra-manthan",
    title: text("The Churning of the Ocean", "搅动乳海"),
    country: text("India", "印度"),
    region: text("South Asia", "南亚"),
    culture: text("Hindu", "印度教文化"),
    latitude: 19.076,
    longitude: 72.8777,
    category: "religion",
    summary: text(
      "Gods and anti-gods churn the cosmic ocean for immortality, turning cooperation and rivalry into one vast sacred spectacle.",
      "众神与阿修罗搅动宇宙乳海以求长生，让合作与对抗合成一场宏大的神圣奇观。"
    ),
    background: text(
      "This myth gathers poison, nectar, divine strategy, and cosmic balance into one of Hindu tradition's most vivid scenes.",
      "这个神话把剧毒、甘露、神明谋略与宇宙平衡汇进印度教传统最鲜明的场景之一。"
    ),
    themes: [text("immortality", "长生"), text("cooperation", "合作"), text("cosmic struggle", "宇宙斗争")],
    tags: [text("ocean", "乳海"), text("amrita", "甘露"), text("mountain", "神山"), text("serpent", "巨蛇")],
    sourceUrl: "https://en.wikipedia.org/wiki/Samudra_Manthana"
  },
  {
    id: "moses-red-sea",
    title: text("Moses Parts the Sea", "摩西分开红海"),
    country: text("Egypt", "埃及"),
    region: text("North Africa", "北非"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 30.0444,
    longitude: 31.2357,
    category: "religion",
    summary: text(
      "Moses leads a people through parted waters, making liberation feel like an event written into nature itself.",
      "摩西带领族人穿越分开的海水，让解放仿佛被直接写进自然本身。"
    ),
    background: text(
      "The Exodus crossing is one of the most enduring stories of deliverance in Jewish and Christian memory.",
      "出埃及过海的故事，是犹太与基督教记忆中最持久的拯救叙事之一。"
    ),
    themes: [text("liberation", "解放"), text("faith", "信仰"), text("deliverance", "拯救")],
    tags: [text("sea", "海"), text("exodus", "出埃及"), text("pharaoh", "法老"), text("prophet", "先知")],
    sourceUrl: "https://en.wikipedia.org/wiki/Crossing_the_Red_Sea"
  },
  {
    id: "david-goliath",
    title: text("David and Goliath", "大卫与歌利亚"),
    country: text("Israel", "以色列"),
    region: text("West Asia", "西亚"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 31.7683,
    longitude: 35.2137,
    category: "religion",
    summary: text(
      "A young shepherd defeats a giant with a sling, making faith and precision overcome terrifying scale.",
      "年轻牧羊人大卫用投石索击败巨人，让信念与精准战胜令人畏惧的体量。"
    ),
    background: text(
      "The story became a near-universal shorthand for unlikely victory, far beyond its biblical setting.",
      "这个故事早已超出圣经语境，成为“以弱胜强”的普遍代名词。"
    ),
    themes: [text("courage", "勇气"), text("faith", "信念"), text("underdog victory", "以弱胜强")],
    tags: [text("giant", "巨人"), text("sling", "投石索"), text("shepherd", "牧羊人"), text("battle", "战斗")],
    sourceUrl: "https://en.wikipedia.org/wiki/David_and_Goliath"
  },
  {
    id: "jonah-whale",
    title: text("Jonah and the Great Fish", "约拿与大鱼"),
    country: text("Israel", "以色列"),
    region: text("West Asia", "西亚"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 31.7683,
    longitude: 35.2137,
    category: "religion",
    summary: text(
      "Jonah flees his calling and is swallowed by a great fish, making refusal and return part of one prophetic arc.",
      "约拿逃避使命而被大鱼吞下，让拒绝与回转共同构成一段先知故事。"
    ),
    background: text(
      "This compact biblical narrative persists because it binds obedience, mercy, and the sea into unforgettable imagery.",
      "这则简短的圣经故事之所以长久流传，在于它把顺服、怜悯与海上奇景绑定进难忘画面。"
    ),
    themes: [text("calling", "召命"), text("mercy", "怜悯"), text("return", "回转")],
    tags: [text("fish", "大鱼"), text("prophet", "先知"), text("storm", "风暴"), text("repentance", "悔改")],
    sourceUrl: "https://en.wikipedia.org/wiki/Jonah"
  },
  {
    id: "solomon-judgment",
    title: text("The Judgment of Solomon", "所罗门断案"),
    country: text("Israel", "以色列"),
    region: text("West Asia", "西亚"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 31.7683,
    longitude: 35.2137,
    category: "religion",
    summary: text(
      "Solomon reveals the true mother through a shocking test, making wisdom visible through judgment.",
      "所罗门以惊人的试验辨出真正的母亲，让智慧通过裁断变得可见。"
    ),
    background: text(
      "The episode has endured as perhaps the most famous story of judicial wisdom in biblical tradition.",
      "这段故事也许是圣经传统中最著名的智慧审判故事。"
    ),
    themes: [text("wisdom", "智慧"), text("judgment", "审断"), text("truth", "真相")],
    tags: [text("king", "国王"), text("mother", "母亲"), text("judgment", "判决"), text("wisdom", "智慧")],
    sourceUrl: "https://en.wikipedia.org/wiki/Judgement_of_Solomon"
  },
  {
    id: "adam-and-eve",
    title: text("Adam and Eve in the Garden", "伊甸园中的亚当与夏娃"),
    country: text("Iraq", "伊拉克"),
    region: text("West Asia", "西亚"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 33.3152,
    longitude: 44.3661,
    category: "religion",
    summary: text(
      "Adam and Eve leave Eden after eating forbidden fruit, making innocence, knowledge, and exile foundational to human story.",
      "亚当与夏娃因食用禁果而离开伊甸园，让纯真、知识与流放成为人类故事的基础。"
    ),
    background: text(
      "The Garden story remains one of the most influential narratives for thinking about origins, temptation, and human self-awareness.",
      "伊甸园故事是理解起源、诱惑与人类自我意识时最有影响力的叙事之一。"
    ),
    themes: [text("temptation", "诱惑"), text("knowledge", "知识"), text("exile", "放逐")],
    tags: [text("garden", "伊甸园"), text("serpent", "蛇"), text("fruit", "禁果"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Adam_and_Eve"
  },
  {
    id: "samson-delilah",
    title: text("Samson and Delilah", "参孙与大利拉"),
    country: text("Israel", "以色列"),
    region: text("West Asia", "西亚"),
    culture: text("Hebrew", "希伯来传统"),
    latitude: 31.7683,
    longitude: 35.2137,
    category: "religion",
    summary: text(
      "Samson's immense strength is undone through betrayal, making power and vulnerability impossible to separate.",
      "参孙惊人的力量因背叛而瓦解，让强大与脆弱变得不可分割。"
    ),
    background: text(
      "The tale survives through the charged image of hair-bound strength and a downfall shaped by desire and treachery.",
      "这个故事因“力量系于头发”的强烈意象而流传，欲望与背叛共同塑造了它的坠落感。"
    ),
    themes: [text("strength", "力量"), text("betrayal", "背叛"), text("downfall", "陨落")],
    tags: [text("hair", "头发"), text("betrayal", "背叛"), text("temple", "神庙"), text("judge", "士师")],
    sourceUrl: "https://en.wikipedia.org/wiki/Samson"
  },
  {
    id: "sleepy-hollow",
    title: text("The Headless Horseman of Sleepy Hollow", "沉睡谷的无头骑士"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("American", "美国文化"),
    latitude: 41.0857,
    longitude: -73.8585,
    category: "creature",
    summary: text(
      "A headless rider haunts a valley of superstition, making fear ride the thin line between folklore and prank.",
      "无头骑士出没于迷信氛围浓厚的山谷，让恐惧奔驰在民间传说与恶作剧之间。"
    ),
    background: text(
      "Washington Irving's tale entered folklore so completely that its ghost now feels older than the printed story itself.",
      "华盛顿·欧文的故事已经如此深入民间想象，以至于那个幽灵仿佛比文本本身更古老。"
    ),
    themes: [text("fear", "恐惧"), text("superstition", "迷信"), text("ambiguity", "暧昧不明")],
    tags: [text("horseman", "骑士"), text("ghost", "幽灵"), text("valley", "山谷"), text("halloween", "万圣氛围")],
    sourceUrl: "https://en.wikipedia.org/wiki/The_Legend_of_Sleepy_Hollow"
  },
  {
    id: "rip-van-winkle",
    title: text("Rip Van Winkle Sleeps Through Time", "李伯大梦二十年"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("American", "美国文化"),
    latitude: 42.2146,
    longitude: -73.9595,
    category: "folktale",
    summary: text(
      "Rip Van Winkle falls asleep in the mountains and wakes to a changed world, making time travel feel rustic and uncanny.",
      "李伯在山中沉睡多年后醒来，发现世界早已改变，让时间穿越显得乡野而诡异。"
    ),
    background: text(
      "The story became one of early America's defining legends, binding landscape to historical rupture through magical sleep.",
      "这个故事成为早期美国最具代表性的传奇之一，用神奇沉睡把地景与历史断裂连接起来。"
    ),
    themes: [text("time", "时间"), text("change", "变迁"), text("displacement", "错位")],
    tags: [text("sleep", "沉睡"), text("mountains", "群山"), text("time slip", "时间错位"), text("return", "归来")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rip_Van_Winkle"
  },
  {
    id: "pecos-bill",
    title: text("Pecos Bill Rides the West", "佩科斯·比尔驰骋西部"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("American", "美国文化"),
    latitude: 31.4229,
    longitude: -103.4932,
    category: "folktale",
    summary: text(
      "Pecos Bill's impossible cowboy feats turn the American West into a theater of swaggering exaggeration.",
      "佩科斯·比尔那些不可能完成的牛仔壮举，把美国西部变成一座夸张豪迈的舞台。"
    ),
    background: text(
      "Tall-tale tradition makes Pecos Bill larger than the land itself, fitting frontier myth to comic impossibility.",
      "夸张故事传统让佩科斯·比尔比土地本身还大，把边疆神话推向喜剧式的不可能。"
    ),
    themes: [text("exaggeration", "夸张"), text("frontier", "边疆"), text("swagger", "豪气")],
    tags: [text("cowboy", "牛仔"), text("west", "西部"), text("tall tale", "夸张故事"), text("lasso", "套索")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pecos_Bill"
  },
  {
    id: "hiawatha",
    title: text("Hiawatha Unites the Nations", "海华沙联合众部族"),
    country: text("Canada", "加拿大"),
    region: text("North America", "北美洲"),
    culture: text("Haudenosaunee", "豪德诺索尼文化"),
    latitude: 43.6532,
    longitude: -79.3832,
    category: "history",
    summary: text(
      "Hiawatha helps build peace among nations, turning eloquence and mourning into political vision.",
      "海华沙帮助各部族建立和平，让雄辩与哀痛化为政治远见。"
    ),
    background: text(
      "In Haudenosaunee tradition, Hiawatha belongs to a founding story about diplomacy, law, and collective unity.",
      "在豪德诺索尼传统中，海华沙属于一则关于外交、法度与共同体统一的奠基故事。"
    ),
    themes: [text("peace", "和平"), text("unity", "联合"), text("eloquence", "雄辩")],
    tags: [text("confederacy", "联盟"), text("peace", "和平"), text("founding", "建立"), text("oratory", "演说")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hiawatha"
  },
  {
    id: "white-buffalo-woman",
    title: text("White Buffalo Calf Woman", "白野牛圣女"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("Lakota", "拉科塔文化"),
    latitude: 44.0805,
    longitude: -103.231,
    category: "religion",
    summary: text(
      "A sacred woman brings ritual knowledge and the pipe, turning ceremony into a covenant between people and world.",
      "一位神圣女子带来圣烟斗与仪式知识，让礼仪成为人与世界之间的盟约。"
    ),
    background: text(
      "Lakota tradition remembers White Buffalo Calf Woman as a civilizing and sacred presence whose gifts organize communal life.",
      "拉科塔传统记得白野牛圣女是一位带来文明与神圣秩序的存在，她的赠予塑造了共同体生活。"
    ),
    themes: [text("sacred teaching", "圣训"), text("ceremony", "仪式"), text("covenant", "盟约")],
    tags: [text("pipe", "圣烟斗"), text("buffalo", "野牛"), text("sacred woman", "圣女"), text("ritual", "仪式")],
    sourceUrl: "https://en.wikipedia.org/wiki/White_Buffalo_Calf_Woman"
  },
  {
    id: "popocatepetl-iztaccihuatl",
    title: text("Popocatepetl and Iztaccihuatl", "波波卡特佩特与伊斯塔西瓦特"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Mexican", "墨西哥文化"),
    latitude: 19.023,
    longitude: -98.6226,
    category: "myth",
    summary: text(
      "Two volcanoes are remembered as lovers, turning the landscape into a monument of grief and steadfast love.",
      "两座火山被记作一对恋人，让地貌本身成为悲伤与坚贞爱情的纪念碑。"
    ),
    background: text(
      "The legend is told around the valley of Mexico, where mountain silhouettes become emotional geography.",
      "这则传说流传于墨西哥谷地，让山体轮廓本身成为带着情感重量的地理。"
    ),
    themes: [text("tragic love", "悲恋"), text("memory", "纪念"), text("landscape", "地景")],
    tags: [text("volcanoes", "火山"), text("lovers", "恋人"), text("mountains", "山峰"), text("legend", "传说")],
    sourceUrl: "https://en.wikipedia.org/wiki/Popocat%C3%A9petl_and_Iztacc%C3%ADhuatl"
  },
  {
    id: "maui-fishes-islands",
    title: text("Maui Fishes Up the Islands", "毛伊钓起群岛"),
    country: text("New Zealand", "新西兰"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Maori", "毛利"),
    latitude: -38.1368,
    longitude: 176.2497,
    category: "myth",
    summary: text(
      "Maui hauls land from the sea with a great hook, making island geography part of trickster creation.",
      "毛伊用巨钩从海中钓起陆地，让群岛地理成为骗子英雄的创世篇章。"
    ),
    background: text(
      "Across Polynesian traditions, Maui's feats often explain how everyday worlds were physically shaped into being.",
      "在波利尼西亚诸传统里，毛伊的壮举常被用来解释日常世界如何被真正塑造成形。"
    ),
    themes: [text("creation", "创造"), text("ingenuity", "机智"), text("land", "土地")],
    tags: [text("hook", "鱼钩"), text("islands", "群岛"), text("sea", "海"), text("trickster", "骗子英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/M%C4%81ui_(M%C4%81ori_mythology)"
  },
  {
    id: "trojan-horse",
    title: text("The Trojan Horse", "特洛伊木马"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Greek", "古希腊"),
    latitude: 39.9578,
    longitude: 26.2389,
    category: "epic",
    summary: text(
      "A hollow horse ends the war by deception, making cunning more decisive than open battle.",
      "一匹中空木马以欺骗终结战争，让智谋比正面战斗更具决定性。"
    ),
    background: text(
      "The Trojan Horse became one of the world's strongest symbols for hidden danger entering under the guise of a gift.",
      "特洛伊木马成了世界上最强烈的象征之一，指向以礼物伪装进入的隐蔽危险。"
    ),
    themes: [text("deception", "欺骗"), text("war", "战争"), text("strategy", "谋略")],
    tags: [text("horse", "木马"), text("troy", "特洛伊"), text("siege", "围城"), text("gift", "礼物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Trojan_Horse"
  },
  {
    id: "achilles-heel",
    title: text("Achilles and the Vulnerable Heel", "阿喀琉斯的脚踵"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 39.0742,
    longitude: 21.8243,
    category: "epic",
    summary: text(
      "Achilles seems nearly invincible, yet one small weakness defines how heroic glory can still end in death.",
      "阿喀琉斯近乎无敌，却因一个微小弱点而走向死亡，让英雄荣光始终带着致命裂缝。"
    ),
    background: text(
      "Later tradition turned Achilles' heel into a lasting metaphor for fatal vulnerability hidden inside great strength.",
      "后世传统把“阿喀琉斯之踵”变成一个持久隐喻，指向伟大力量内部潜伏的致命脆弱。"
    ),
    themes: [text("vulnerability", "弱点"), text("glory", "荣光"), text("mortality", "死亡")],
    tags: [text("heel", "脚踵"), text("warrior", "战士"), text("troy", "特洛伊"), text("fate", "命运")],
    sourceUrl: "https://en.wikipedia.org/wiki/Achilles"
  },
  {
    id: "jason-golden-fleece",
    title: text("Jason and the Golden Fleece", "伊阿宋与金羊毛"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 37.9838,
    longitude: 23.7275,
    category: "epic",
    summary: text(
      "Jason sails with the Argonauts to seize the Golden Fleece, making teamwork, ambition, and divine peril part of one quest.",
      "伊阿宋与阿尔戈英雄们远航夺取金羊毛，让协作、野心与神意风险共同构成一场征途。"
    ),
    background: text(
      "The voyage gathers heroes and marvels into a prototype adventure cycle for later quests across world literature.",
      "这趟航行把众多英雄与奇观聚成一个原型式冒险循环，深刻影响后来的文学征途叙事。"
    ),
    themes: [text("quest", "征途"), text("teamwork", "协作"), text("ambition", "野心")],
    tags: [text("argonauts", "阿尔戈英雄"), text("fleece", "金羊毛"), text("voyage", "远航"), text("medea", "美狄亚")],
    sourceUrl: "https://en.wikipedia.org/wiki/Golden_Fleece"
  },
  {
    id: "icarus-flight",
    title: text("Icarus Flies Too Near the Sun", "伊卡洛斯飞近太阳"),
    country: text("Greece", "希腊"),
    region: text("Southern Europe", "南欧"),
    culture: text("Greek", "古希腊"),
    latitude: 35.2401,
    longitude: 24.8093,
    category: "myth",
    summary: text(
      "Icarus escapes with waxen wings but flies too high, turning freedom and overreach into one unforgettable fall.",
      "伊卡洛斯借蜡翼逃离迷宫，却飞得太高，让自由与逾越共同化作一次难忘坠落。"
    ),
    background: text(
      "The tale of Daedalus and Icarus became a lasting meditation on invention, youth, warning, and the danger inside exhilaration.",
      "代达罗斯与伊卡洛斯的故事，成为关于发明、青春、警告，以及狂喜中潜伏危险的持久寓言。"
    ),
    themes: [text("ambition", "野心"), text("freedom", "自由"), text("warning", "告诫")],
    tags: [text("wings", "翅膀"), text("sun", "太阳"), text("labyrinth", "迷宫"), text("fall", "坠落")],
    sourceUrl: "https://en.wikipedia.org/wiki/Icarus"
  },
  {
    id: "arachne-weaver",
    title: text("Arachne Challenges Athena", "阿拉克涅挑战雅典娜"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Greek", "古希腊"),
    latitude: 38.5,
    longitude: 28.0,
    category: "myth",
    summary: text(
      "Arachne's weaving rivals a goddess, making artistic brilliance, pride, and punishment tighten into a single thread.",
      "阿拉克涅的织艺敢与女神争锋，让艺术才华、骄傲与惩罚共同绞成一根命运之线。"
    ),
    background: text(
      "The myth explains the spider while asking how much truth an artist may show when power dislikes being exposed.",
      "这则神话解释蜘蛛的来历，也追问当权力不愿被揭露时，艺术家究竟能展示多少真相。"
    ),
    themes: [text("art", "艺术"), text("pride", "骄傲"), text("transformation", "变化")],
    tags: [text("weaving", "纺织"), text("athena", "雅典娜"), text("spider", "蜘蛛"), text("contest", "竞赛")],
    sourceUrl: "https://en.wikipedia.org/wiki/Arachne"
  },
  {
    id: "baucis-philemon",
    title: text("Baucis and Philemon Welcome the Gods", "鲍喀斯与费勒蒙款待诸神"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Greek and Roman", "希腊罗马"),
    latitude: 39.0,
    longitude: 31.0,
    category: "folktale",
    summary: text(
      "An old couple offers humble hospitality to disguised gods, turning a poor cottage into a lesson about kindness.",
      "一对老人款待乔装的诸神，让贫寒小屋变成关于善意与款待的故事。"
    ),
    background: text(
      "The episode from Ovid's Metamorphoses binds divine testing to household virtue and the wish to remain together in death.",
      "奥维德《变形记》中的这一段，把神圣试探、家庭美德与生死相守的愿望联系起来。"
    ),
    themes: [text("hospitality", "款待"), text("humility", "谦卑"), text("devotion", "相守")],
    tags: [text("disguise", "乔装"), text("cottage", "小屋"), text("gods", "诸神"), text("trees", "树木")],
    sourceUrl: "https://en.wikipedia.org/wiki/Baucis_and_Philemon"
  },
  {
    id: "inanna-underworld",
    title: text("Inanna Descends to the Underworld", "伊南娜下入冥界"),
    country: text("Iraq", "伊拉克"),
    region: text("Mesopotamia", "美索不达米亚"),
    culture: text("Sumerian", "苏美尔"),
    latitude: 31.3222,
    longitude: 45.6367,
    category: "religion",
    summary: text(
      "Inanna passes through seven gates into the underworld, losing power piece by piece before death and return reshape her story.",
      "伊南娜穿过七重门进入冥界，一件件失去权力，直到死亡与回返重塑她的故事。"
    ),
    background: text(
      "One of Mesopotamia's most striking sacred narratives, the descent links sovereignty, vulnerability, mourning, and seasonal renewal.",
      "这是美索不达米亚最醒目的神圣叙事之一，把王权、脆弱、哀悼与季节复归联系起来。"
    ),
    themes: [text("descent", "下降"), text("power", "权力"), text("return", "回返")],
    tags: [text("underworld", "冥界"), text("seven gates", "七重门"), text("goddess", "女神"), text("renewal", "复归")],
    sourceUrl: "https://en.wikipedia.org/wiki/Inanna"
  },
  {
    id: "enuma-elish",
    title: text("Marduk Orders the World", "马尔杜克安排世界"),
    country: text("Iraq", "伊拉克"),
    region: text("Mesopotamia", "美索不达米亚"),
    culture: text("Babylonian", "巴比伦"),
    latitude: 32.5364,
    longitude: 44.4208,
    category: "myth",
    summary: text(
      "Marduk defeats Tiamat and shapes the cosmos, turning divine conflict into sky, earth, kingship, and order.",
      "马尔杜克击败提亚马特并塑造宇宙，让神圣冲突化为天地、王权与秩序。"
    ),
    background: text(
      "The Enuma Elish gave Babylon a creation drama in which political authority and cosmic architecture support one another.",
      "《埃努玛·埃利什》为巴比伦提供了一出创世戏剧，使政治权威与宇宙结构彼此支撑。"
    ),
    themes: [text("creation", "创造"), text("order", "秩序"), text("kingship", "王权")],
    tags: [text("tiamat", "提亚马特"), text("marduk", "马尔杜克"), text("cosmos", "宇宙"), text("battle", "战斗")],
    sourceUrl: "https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1"
  },
  {
    id: "ra-solar-journey",
    title: text("Ra Sails Through the Night", "拉神夜航冥界"),
    country: text("Egypt", "埃及"),
    region: text("North Africa", "北非"),
    culture: text("Ancient Egyptian", "古埃及"),
    latitude: 25.6872,
    longitude: 32.6396,
    category: "religion",
    summary: text(
      "Ra travels the underworld each night and rises again, making sunrise a daily victory over darkness and chaos.",
      "拉神每夜航行冥界并再度升起，让日出成为每日战胜黑暗与混沌的胜利。"
    ),
    background: text(
      "Egyptian solar theology imagined renewal as a repeated cosmic passage guarded by gods, spells, and dangerous thresholds.",
      "古埃及太阳神学把复生想象成不断重复的宇宙航程，由诸神、咒语与危险门槛守护。"
    ),
    themes: [text("renewal", "复生"), text("sun", "太阳"), text("order", "秩序")],
    tags: [text("solar boat", "太阳船"), text("underworld", "冥界"), text("apophis", "阿波菲斯"), text("dawn", "黎明")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ra"
  },
  {
    id: "sekhmet-destruction",
    title: text("Sekhmet's Rage Is Cooled", "塞赫麦特的怒火被平息"),
    country: text("Egypt", "埃及"),
    region: text("North Africa", "北非"),
    culture: text("Ancient Egyptian", "古埃及"),
    latitude: 30.0444,
    longitude: 31.2357,
    category: "myth",
    summary: text(
      "Sekhmet nearly destroys humankind until red beer tricks her rage into sleep, turning wrath into restored balance.",
      "塞赫麦特几乎毁灭人类，直到红色啤酒让她的怒火沉入睡眠，使狂怒重新转向平衡。"
    ),
    background: text(
      "The myth explores the terrifying side of divine protection and the ritual imagination needed to cool cosmic violence.",
      "这则神话探索神圣守护中可怖的一面，也呈现仪式想象如何平息宇宙暴力。"
    ),
    themes: [text("wrath", "怒火"), text("mercy", "怜悯"), text("balance", "平衡")],
    tags: [text("lioness", "母狮"), text("beer", "啤酒"), text("blood", "血色"), text("goddess", "女神")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sekhmet"
  },
  {
    id: "baldr-death",
    title: text("The Death of Baldr", "巴德尔之死"),
    country: text("Iceland", "冰岛"),
    region: text("Northern Europe", "北欧"),
    culture: text("Norse", "北欧"),
    latitude: 64.1466,
    longitude: -21.9426,
    category: "myth",
    summary: text(
      "Baldr's death begins with a harmless game and a sprig of mistletoe, making innocence vulnerable to hidden fate.",
      "巴德尔之死始于一场看似无害的游戏和一枝槲寄生，让纯洁显出命运暗藏的裂口。"
    ),
    background: text(
      "In Norse myth, the loss of Baldr darkens the divine world and foreshadows the larger collapse of Ragnarok.",
      "在北欧神话中，巴德尔的失去让神界黯淡，并预示诸神黄昏中的更大崩塌。"
    ),
    themes: [text("loss", "丧失"), text("fate", "命运"), text("innocence", "纯洁")],
    tags: [text("mistletoe", "槲寄生"), text("loki", "洛基"), text("blindness", "失明"), text("mourning", "哀悼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Baldr"
  },
  {
    id: "loki-binding",
    title: text("The Binding of Loki", "洛基被缚"),
    country: text("Iceland", "冰岛"),
    region: text("Northern Europe", "北欧"),
    culture: text("Norse", "北欧"),
    latitude: 65.0,
    longitude: -18.0,
    category: "myth",
    summary: text(
      "Loki is bound beneath dripping venom, turning trickster freedom into punishment that shakes the earth.",
      "洛基被缚于毒液滴落之处，让骗子英雄的自由化作震动大地的惩罚。"
    ),
    background: text(
      "The punishment of Loki gathers betrayal, family grief, and cosmic tension into one of Norse myth's darkest images.",
      "洛基受罚的故事，把背叛、亲族悲痛与宇宙张力聚成北欧神话中最阴暗的画面之一。"
    ),
    themes: [text("betrayal", "背叛"), text("punishment", "惩罚"), text("chaos", "混乱")],
    tags: [text("venom", "毒液"), text("chains", "锁链"), text("earthquake", "地震"), text("trickster", "骗子英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Loki"
  },
  {
    id: "children-of-lir",
    title: text("The Children of Lir", "里尔的孩子们"),
    country: text("Ireland", "爱尔兰"),
    region: text("Western Europe", "西欧"),
    culture: text("Irish", "爱尔兰"),
    latitude: 53.4129,
    longitude: -8.2439,
    category: "folktale",
    summary: text(
      "Four children are changed into swans for centuries, making exile, song, and sibling love carry a long sorrow.",
      "四个孩子被变成天鹅漂泊数百年，让流放、歌声与手足之爱承载漫长哀愁。"
    ),
    background: text(
      "This Irish tale blends enchantment with historical change, carrying memory from the mythic past toward Christian time.",
      "这则爱尔兰故事把魔法与历史变迁融合，让记忆从神话往昔漂向基督教时代。"
    ),
    themes: [text("exile", "流放"), text("family", "亲情"), text("endurance", "忍耐")],
    tags: [text("swans", "天鹅"), text("curse", "诅咒"), text("song", "歌声"), text("siblings", "手足")],
    sourceUrl: "https://en.wikipedia.org/wiki/Children_of_Lir"
  },
  {
    id: "fionn-salmon-wisdom",
    title: text("Fionn and the Salmon of Wisdom", "芬恩与智慧鲑鱼"),
    country: text("Ireland", "爱尔兰"),
    region: text("Western Europe", "西欧"),
    culture: text("Irish", "爱尔兰"),
    latitude: 53.3498,
    longitude: -6.2603,
    category: "folktale",
    summary: text(
      "Young Fionn tastes the Salmon of Wisdom by accident, turning a burned thumb into prophetic insight.",
      "年少的芬恩意外尝到智慧鲑鱼，让被烫到的拇指变成预知与洞察的来源。"
    ),
    background: text(
      "The story gives Ireland's great hero a humble origin for knowledge, mixing apprenticeship with sudden revelation.",
      "这个故事为爱尔兰大英雄赋予朴素的智慧起源，把学徒经历与突然启示混合在一起。"
    ),
    themes: [text("wisdom", "智慧"), text("chance", "偶然"), text("initiation", "启蒙")],
    tags: [text("salmon", "鲑鱼"), text("thumb", "拇指"), text("prophecy", "预言"), text("hero", "英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Fionn_mac_Cumhaill"
  },
  {
    id: "mami-wata-deep",
    title: text("Mami Wata of the Deep", "深水中的玛米瓦塔"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("West African", "西非文化"),
    latitude: 6.5244,
    longitude: 3.3792,
    category: "religion",
    summary: text(
      "Mami Wata rises from water with beauty and danger, offering wealth, healing, desire, and demanding devotion.",
      "玛米瓦塔从水中升起，兼具美丽与危险，带来财富、疗愈和欲望，也要求虔敬。"
    ),
    background: text(
      "Across West and Central Africa and the diaspora, Mami Wata traditions carry layered memories of trade, spirit power, and modernity.",
      "在西非、中非及离散社群中，玛米瓦塔传统承载贸易、灵力与现代性的多层记忆。"
    ),
    themes: [text("water", "水域"), text("desire", "欲望"), text("devotion", "虔敬")],
    tags: [text("spirit", "水灵"), text("serpent", "蛇"), text("wealth", "财富"), text("healing", "疗愈")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mami_Wata"
  },
  {
    id: "nyame-sky-god",
    title: text("Nyame and the Sky Stories", "尼亚美与天空故事"),
    country: text("Ghana", "加纳"),
    region: text("West Africa", "西非"),
    culture: text("Akan", "阿坎文化"),
    latitude: 5.6037,
    longitude: -0.187,
    category: "folktale",
    summary: text(
      "Anansi bargains with Nyame for the sky god's stories, proving that wit can win what strength cannot seize.",
      "阿南西向天空神尼亚美换取故事，证明机智能赢得蛮力夺不到的东西。"
    ),
    background: text(
      "The tale explains why Anansi owns many stories and why storytelling itself can be imagined as a hard-won treasure.",
      "这个故事解释阿南西为何拥有许多故事，也说明讲述本身可以被想象成艰难赢来的宝物。"
    ),
    themes: [text("storytelling", "讲述"), text("wit", "机智"), text("bargain", "交易")],
    tags: [text("sky god", "天空神"), text("anansi", "阿南西"), text("tasks", "任务"), text("treasure", "宝物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nyame"
  },
  {
    id: "coyote-steals-fire",
    title: text("Coyote Steals Fire", "郊狼盗火"),
    country: text("United States", "美国"),
    region: text("North America", "北美洲"),
    culture: text("Indigenous North American", "北美原住民"),
    latitude: 44.0,
    longitude: -120.5,
    category: "folktale",
    summary: text(
      "Coyote steals fire for people, turning trickery into a gift that changes cold nights and human life.",
      "郊狼为人类盗来火种，让诡计化作改变寒夜与生活的礼物。"
    ),
    background: text(
      "Coyote stories vary widely across Native traditions, often using comic disorder to explain necessary cultural gifts.",
      "郊狼故事在许多原住民传统中差异很大，常用滑稽混乱解释重要文化赠礼。"
    ),
    themes: [text("trickery", "诡计"), text("gift", "赠礼"), text("survival", "生存")],
    tags: [text("fire", "火"), text("coyote", "郊狼"), text("cold", "寒夜"), text("culture hero", "文化英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Coyote_(mythology)"
  },
  {
    id: "gluskap-whale",
    title: text("Gluskap and the Whale", "格卢斯卡普与鲸"),
    country: text("Canada", "加拿大"),
    region: text("North America", "北美洲"),
    culture: text("Mi'kmaq", "米克马克文化"),
    latitude: 45.0,
    longitude: -63.0,
    category: "folktale",
    summary: text(
      "Gluskap's deeds along the coast make sea, creature, and human need part of one teaching landscape.",
      "格卢斯卡普在海岸上的事迹，把大海、生灵与人的需要放进同一片教诲之地。"
    ),
    background: text(
      "In Wabanaki traditions, Gluskap is a transformer whose adventures explain landforms, social lessons, and relations with animals.",
      "在瓦巴纳基传统中，格卢斯卡普是改造世界者，他的冒险解释地貌、社会训诫与人与动物的关系。"
    ),
    themes: [text("transformation", "变化"), text("coast", "海岸"), text("teaching", "教诲")],
    tags: [text("whale", "鲸"), text("sea", "海"), text("transformer", "改造者"), text("animals", "动物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Glooscap"
  },
  {
    id: "quetzalcoatl-bones",
    title: text("Quetzalcoatl Recovers the Bones", "羽蛇神取回人骨"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Aztec", "阿兹特克"),
    latitude: 19.4326,
    longitude: -99.1332,
    category: "myth",
    summary: text(
      "Quetzalcoatl descends to Mictlan for ancestral bones, making humanity from risk, sacrifice, and recovered memory.",
      "羽蛇神下入米克特兰取回祖先之骨，用冒险、牺牲与找回的记忆造成人类。"
    ),
    background: text(
      "The myth links creation to the underworld, showing that new human life depends on descent into what came before.",
      "这则神话把创造与冥界相连，说明新的生命必须从过去和死亡之地取回根源。"
    ),
    themes: [text("creation", "创造"), text("ancestry", "祖先"), text("sacrifice", "牺牲")],
    tags: [text("bones", "骨头"), text("mictlan", "米克特兰"), text("descent", "下降"), text("humanity", "人类")],
    sourceUrl: "https://en.wikipedia.org/wiki/Quetzalcoatl"
  },
  {
    id: "ollantay",
    title: text("Ollantay and Cusi Coyllur", "奥扬泰与库西科尤尔"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美洲"),
    culture: text("Quechua", "克丘亚文化"),
    latitude: -13.1631,
    longitude: -72.545,
    category: "history",
    summary: text(
      "Ollantay loves an Inca princess against imperial order, turning romance into a drama of loyalty and power.",
      "奥扬泰违背帝国秩序爱上一位印加公主，让爱情成为忠诚与权力的戏剧。"
    ),
    background: text(
      "The Quechua drama preserves Andean courtly memory while asking whether rank, rebellion, and mercy can be reconciled.",
      "这部克丘亚戏剧保存安第斯宫廷记忆，也追问等级、反叛与宽恕能否和解。"
    ),
    themes: [text("love", "爱情"), text("rebellion", "反叛"), text("mercy", "宽恕")],
    tags: [text("inca", "印加"), text("princess", "公主"), text("fortress", "要塞"), text("drama", "戏剧")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ollantay"
  },
  {
    id: "princess-bari",
    title: text("Princess Bari Guides the Dead", "巴里公主引导亡者"),
    country: text("South Korea", "韩国"),
    region: text("East Asia", "东亚"),
    culture: text("Korean", "朝鲜半岛文化"),
    latitude: 37.5665,
    longitude: 126.978,
    category: "religion",
    summary: text(
      "Abandoned Princess Bari journeys for life-giving water and becomes a guide for souls, turning rejection into sacred duty.",
      "被遗弃的巴里公主远行寻找生命之水，最终成为亡魂引导者，让弃绝化为神圣职责。"
    ),
    background: text(
      "In Korean shamanic tradition, Bari's story explains compassion, filial devotion, and the healer's passage through suffering.",
      "在朝鲜半岛巫俗传统中，巴里的故事解释慈悲、孝道，以及疗愈者穿过苦难的道路。"
    ),
    themes: [text("devotion", "孝道"), text("healing", "疗愈"), text("afterlife", "来世")],
    tags: [text("princess", "公主"), text("water of life", "生命之水"), text("shaman", "巫者"), text("souls", "亡魂")],
    sourceUrl: "https://en.wikipedia.org/wiki/Princess_Bari"
  },
  {
    id: "hong-gildong",
    title: text("Hong Gildong the Outlaw Hero", "义贼洪吉童"),
    country: text("South Korea", "韩国"),
    region: text("East Asia", "东亚"),
    culture: text("Korean", "朝鲜半岛文化"),
    latitude: 35.1595,
    longitude: 126.8526,
    category: "history",
    summary: text(
      "Hong Gildong fights unjust rank and corrupt officials, turning outlaw adventure into a dream of fairer order.",
      "洪吉童对抗不公身份与贪腐官吏，让义贼冒险化为对更公平秩序的想象。"
    ),
    background: text(
      "The early Korean novel blends social criticism, magical skill, and heroic escape into a popular justice fantasy.",
      "这部早期朝鲜小说把社会批判、神奇本领与英雄逃逸结合成广受欢迎的正义幻想。"
    ),
    themes: [text("justice", "正义"), text("identity", "身份"), text("rebellion", "反叛")],
    tags: [text("outlaw", "义贼"), text("officials", "官吏"), text("magic", "法术"), text("equality", "平等")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hong_Gildong_jeon"
  },
  {
    id: "malin-kundang",
    title: text("Malin Kundang Turns to Stone", "马林昆当化石"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Minangkabau", "米南加保文化"),
    latitude: -0.9471,
    longitude: 100.4172,
    category: "folktale",
    summary: text(
      "Malin Kundang rejects his mother after gaining wealth, and a curse turns pride into stone on the shore.",
      "马林昆当富贵后拒认母亲，诅咒把他的骄傲变成海岸上的石头。"
    ),
    background: text(
      "The Indonesian legend uses coastal landscape to teach filial duty, social ambition, and the cost of forgetting origin.",
      "这则印度尼西亚传说借海岸地貌教导孝道、社会野心，以及忘记来处的代价。"
    ),
    themes: [text("filial duty", "孝道"), text("pride", "骄傲"), text("origin", "来处")],
    tags: [text("mother", "母亲"), text("stone", "石头"), text("ship", "船"), text("curse", "诅咒")],
    sourceUrl: "https://en.wikipedia.org/wiki/Malin_Kundang"
  },
  {
    id: "nang-sib-song",
    title: text("The Twelve Sisters", "十二姐妹"),
    country: text("Thailand", "泰国"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Thai", "泰国文化"),
    latitude: 13.7563,
    longitude: 100.5018,
    category: "folktale",
    summary: text(
      "Twelve sisters face abandonment, danger, and a giantess, making endurance and kinship central to a royal wonder tale.",
      "十二姐妹经历遗弃、危险与女巨人，让忍耐和亲族关系成为王室奇谈的核心。"
    ),
    background: text(
      "Known across mainland Southeast Asia, the tale joins courtly romance, ordeal, and Buddhist-inflected moral imagination.",
      "这个故事流传于东南亚大陆，把宫廷爱情、试炼与带有佛教色彩的道德想象结合起来。"
    ),
    themes: [text("kinship", "亲族"), text("endurance", "忍耐"), text("ordeal", "试炼")],
    tags: [text("sisters", "姐妹"), text("giantess", "女巨人"), text("kingdom", "王国"), text("exile", "流放")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nang_Sip_Song"
  },
  {
    id: "tane-separates-parents",
    title: text("Tane Separates Earth and Sky", "塔内分开天地父母"),
    country: text("New Zealand", "新西兰"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Maori", "毛利"),
    latitude: -41.2865,
    longitude: 174.7762,
    category: "myth",
    summary: text(
      "Tane pushes apart earth mother and sky father, making room for light, breath, forests, and living beings.",
      "塔内推开地母与天父，为光、呼吸、森林和众生创造空间。"
    ),
    background: text(
      "The Maori creation story treats separation as both cosmic pain and the necessary opening of the living world.",
      "毛利创世故事把分离视为宇宙创痛，也视为生命世界得以展开的必要开端。"
    ),
    themes: [text("creation", "创造"), text("separation", "分离"), text("light", "光明")],
    tags: [text("earth", "大地"), text("sky", "天空"), text("forest", "森林"), text("parents", "父母")],
    sourceUrl: "https://en.wikipedia.org/wiki/T%C4%81ne"
  },
  {
    id: "pele-hiiaka",
    title: text("Pele Sends Hiiaka Across the Islands", "佩蕾派希伊阿卡穿越群岛"),
    country: text("United States", "美国"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Hawaiian", "夏威夷"),
    latitude: 19.8968,
    longitude: -155.5828,
    category: "myth",
    summary: text(
      "Pele sends her sister Hiiaka on a dangerous journey, making lava, love, loyalty, and jealousy shape the islands.",
      "佩蕾派妹妹希伊阿卡踏上危险旅程，让熔岩、爱情、忠诚与嫉妒共同塑造群岛。"
    ),
    background: text(
      "The Hawaiian cycle of Pele and Hiiaka turns volcanic landscape into family drama, sacred geography, and poetic memory.",
      "夏威夷佩蕾与希伊阿卡故事群，把火山地貌化作家族戏剧、神圣地理与诗性记忆。"
    ),
    themes: [text("sisterhood", "姐妹情"), text("jealousy", "嫉妒"), text("landscape", "地景")],
    tags: [text("volcano", "火山"), text("journey", "旅程"), text("hula", "呼拉舞"), text("lava", "熔岩")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hi%CA%BBiaka"
  },
  {
    id: "degei",
    title: text("Degei, Serpent Creator of Fiji", "斐济创世蛇神德盖"),
    country: text("Fiji", "斐济"),
    region: text("Melanesia", "美拉尼西亚"),
    culture: text("Fijian", "斐济文化"),
    latitude: -17.7134,
    longitude: 178.065,
    category: "religion",
    summary: text(
      "Degei appears in Fijian tradition as a serpent creator and judge of the dead, linking fertile land, seasons, and sacred authority.",
      "在斐济传统中，德盖是一位蛇形创世神，也是亡魂的裁判者，把丰饶土地、时序变化与神圣权威联系在一起。"
    ),
    background: text(
      "Accounts of Degei connect creation, agricultural fertility, storms, and posthumous judgment, making him one of Fiji's central divine figures.",
      "关于德盖的讲述把创造、农耕丰饶、风暴与死后审判联系起来，使他成为斐济最核心的神灵形象之一。"
    ),
    themes: [text("creation", "创造"), text("fertility", "丰饶"), text("judgment", "审判")],
    tags: [text("serpent", "蛇神"), text("creator", "创世者"), text("afterlife", "来世"), text("storms", "风暴")],
    sourceUrl: "https://en.wikipedia.org/wiki/Degei"
  },
  {
    id: "golem-prague",
    title: text("The Golem of Prague", "布拉格魔像"),
    country: text("Czechia", "捷克"),
    region: text("Central Europe", "中欧"),
    culture: text("Jewish", "犹太文化"),
    latitude: 50.0875,
    longitude: 14.4213,
    category: "creature",
    summary: text(
      "A clay guardian is raised to protect Prague's Jewish community, making protection and danger live inside the same created body.",
      "泥土守卫被唤起保护布拉格犹太社群，让保护与危险同居在同一个被创造的身体里。"
    ),
    background: text(
      "The Prague golem legend joins mystical learning, communal fear, and the uneasy ethics of making a servant from sacred words.",
      "布拉格魔像传说把神秘学知识、社群恐惧，以及用神圣文字造出仆从的伦理不安连在一起。"
    ),
    themes: [text("protection", "保护"), text("creation", "创造"), text("control", "控制")],
    tags: [text("clay", "泥土"), text("guardian", "守卫"), text("prague", "布拉格"), text("rabbi", "拉比")],
    sourceUrl: "https://en.wikipedia.org/wiki/Golem"
  },
  {
    id: "libuse-prague",
    title: text("Libuse Foresees Prague", "利布谢预见布拉格"),
    country: text("Czechia", "捷克"),
    region: text("Central Europe", "中欧"),
    culture: text("Czech", "捷克文化"),
    latitude: 50.0755,
    longitude: 14.4378,
    category: "history",
    summary: text(
      "Princess Libuse sees a future city rising beside the Vltava, turning prophecy into the foundation memory of Prague.",
      "利布谢公主看见伏尔塔瓦河畔将兴起一座未来之城，让预言成为布拉格的奠基记忆。"
    ),
    background: text(
      "Czech legend remembers Libuse as a judge, seer, and dynastic ancestor whose words give civic origin a visionary form.",
      "捷克传说把利布谢记作审判者、预言者与王朝祖先，她的话语让城市起源获得了异象般的形态。"
    ),
    themes: [text("prophecy", "预言"), text("founding", "建城"), text("wisdom", "智慧")],
    tags: [text("prague", "布拉格"), text("princess", "公主"), text("vltava", "伏尔塔瓦"), text("city", "城市")],
    sourceUrl: "https://en.wikipedia.org/wiki/Libu%C5%A1e"
  },
  {
    id: "wawel-dragon",
    title: text("Krak and the Wawel Dragon", "克拉克与瓦维尔龙"),
    country: text("Poland", "波兰"),
    region: text("Central Europe", "中欧"),
    culture: text("Polish", "波兰文化"),
    latitude: 50.0546,
    longitude: 19.9352,
    category: "creature",
    summary: text(
      "A dragon terrorizes Krakow until cleverness, not brute force, turns the monster's appetite against itself.",
      "巨龙威胁克拉科夫，直到机智而非蛮力把怪物的胃口反过来变成它自己的败因。"
    ),
    background: text(
      "The Wawel Dragon legend binds a royal hill, a city's origin, and comic problem-solving into one of Poland's signature tales.",
      "瓦维尔龙传说把王家山丘、城市起源与喜剧式解题结合成波兰最具代表性的故事之一。"
    ),
    themes: [text("cunning", "机智"), text("founding", "建城"), text("monster-slaying", "屠怪")],
    tags: [text("dragon", "龙"), text("krakow", "克拉科夫"), text("wawel", "瓦维尔"), text("trick", "计谋")],
    sourceUrl: "https://en.wikipedia.org/wiki/Wawel_Dragon"
  },
  {
    id: "warsaw-mermaid",
    title: text("The Mermaid of Warsaw", "华沙美人鱼"),
    country: text("Poland", "波兰"),
    region: text("Central Europe", "中欧"),
    culture: text("Polish", "波兰文化"),
    latitude: 52.2297,
    longitude: 21.0122,
    category: "creature",
    summary: text(
      "A river mermaid becomes Warsaw's armed protector, making beauty and civic defense part of the same emblem.",
      "一位河中美人鱼成为华沙持盾执剑的守护者，让美丽与城市防卫凝成同一个象征。"
    ),
    background: text(
      "Warsaw's mermaid stories connect the Vistula with city identity, where a captive water spirit becomes a promise of protection.",
      "华沙美人鱼故事把维斯瓦河与城市身份连在一起，被囚的水灵最终化为保护的承诺。"
    ),
    themes: [text("protection", "守护"), text("freedom", "自由"), text("city identity", "城市身份")],
    tags: [text("mermaid", "美人鱼"), text("warsaw", "华沙"), text("river", "河流"), text("shield", "盾牌")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mermaid_of_Warsaw"
  },
  {
    id: "pan-twardowski",
    title: text("Pan Twardowski and the Moon", "特瓦尔多夫斯基先生与月亮"),
    country: text("Poland", "波兰"),
    region: text("Central Europe", "中欧"),
    culture: text("Polish", "波兰文化"),
    latitude: 50.0647,
    longitude: 19.945,
    category: "folktale",
    summary: text(
      "A sorcerer bargains with the devil and slips through the terms, turning clever wording into a lunar exile.",
      "一位术士与魔鬼订约又钻过条款缝隙，让巧妙措辞最终变成月亮上的流放。"
    ),
    background: text(
      "Pan Twardowski belongs to a Central European family of devil-bargain legends, but keeps a distinctly Polish comic sharpness.",
      "特瓦尔多夫斯基属于中欧与魔鬼订约的传说谱系，却保留了鲜明的波兰式机锋。"
    ),
    themes: [text("bargain", "契约"), text("wit", "机智"), text("escape", "逃脱")],
    tags: [text("devil", "魔鬼"), text("moon", "月亮"), text("sorcerer", "术士"), text("contract", "契约")],
    sourceUrl: "https://en.wikipedia.org/wiki/Pan_Twardowski"
  },
  {
    id: "rubezahl",
    title: text("Rubezahl of the Giant Mountains", "巨人山的吕贝察尔"),
    country: text("Czechia", "捷克"),
    region: text("Central Europe", "中欧"),
    culture: text("Silesian", "西里西亚文化"),
    latitude: 50.736,
    longitude: 15.74,
    category: "creature",
    summary: text(
      "Rubezahl rules the mountain weather with shifting moods, rewarding respect and punishing arrogance among travelers.",
      "吕贝察尔以多变心情支配山中天气，奖赏敬畏山林的人，也惩罚傲慢的旅者。"
    ),
    background: text(
      "Stories of Rubezahl move across Czech, Polish, and German traditions, making the mountains feel inhabited by moral force.",
      "吕贝察尔故事穿行于捷克、波兰与德语传统之间，让群山仿佛住着会判断善恶的力量。"
    ),
    themes: [text("mountains", "群山"), text("respect", "敬畏"), text("shape-shifting", "变形")],
    tags: [text("mountain spirit", "山灵"), text("weather", "天气"), text("traveler", "旅者"), text("silesia", "西里西亚")],
    sourceUrl: "https://en.wikipedia.org/wiki/R%C3%BCbezahl"
  },
  {
    id: "krabat-black-mill",
    title: text("Krabat at the Black Mill", "黑磨坊里的克拉巴特"),
    country: text("Germany", "德国"),
    region: text("Central Europe", "中欧"),
    culture: text("Sorbian", "索布文化"),
    latitude: 51.263,
    longitude: 14.3329,
    category: "folktale",
    summary: text(
      "Krabat learns dark magic in a mill where apprenticeship, power, and freedom come at a terrible price.",
      "克拉巴特在黑磨坊学习黑魔法，学徒身份、力量与自由都要付出可怕代价。"
    ),
    background: text(
      "The Sorbian Krabat cycle turns a local magician into a story about coercive schooling and the courage to break enchantment.",
      "索布人的克拉巴特故事群把地方魔法师塑造成关于强迫性学徒制与打破魔咒勇气的故事。"
    ),
    themes: [text("apprenticeship", "学徒"), text("freedom", "自由"), text("magic", "魔法")],
    tags: [text("mill", "磨坊"), text("sorbian", "索布"), text("sorcery", "巫术"), text("escape", "逃离")],
    sourceUrl: "https://en.wikipedia.org/wiki/Krabat"
  },
  {
    id: "lorelei-rhine",
    title: text("The Lorelei on the Rhine", "莱茵河上的罗蕾莱"),
    country: text("Germany", "德国"),
    region: text("Central Europe", "中欧"),
    culture: text("German", "德意志"),
    latitude: 50.1394,
    longitude: 7.7297,
    category: "creature",
    summary: text(
      "The Lorelei's song draws sailors toward the rocks, making beauty, river danger, and longing converge on the Rhine.",
      "罗蕾莱的歌声把水手引向礁石，让美、河流危险与迷恋在莱茵河上交汇。"
    ),
    background: text(
      "Romantic poetry helped turn a dangerous bend in the Rhine into a legendary figure of fatal song and memory.",
      "浪漫主义诗歌把莱茵河一处险弯塑造成致命歌声与记忆交织的传说形象。"
    ),
    themes: [text("song", "歌声"), text("danger", "危险"), text("longing", "迷恋")],
    tags: [text("rhine", "莱茵河"), text("siren", "水妖"), text("rocks", "礁石"), text("sailors", "水手")],
    sourceUrl: "https://en.wikipedia.org/wiki/Lorelei"
  },
  {
    id: "nibelungen-hoard",
    title: text("The Nibelungen Hoard", "尼伯龙根的宝藏"),
    country: text("Germany", "德国"),
    region: text("Central Europe", "中欧"),
    culture: text("Germanic", "日耳曼文化"),
    latitude: 49.6341,
    longitude: 8.3507,
    category: "epic",
    summary: text(
      "A cursed treasure pulls heroes and kingdoms toward betrayal, making wealth feel inseparable from doom.",
      "受诅咒的宝藏把英雄与王国拖向背叛，让财富与毁灭变得不可分割。"
    ),
    background: text(
      "The Nibelungenlied reshapes older heroic material into a Central European epic of loyalty, vengeance, and catastrophic honor.",
      "《尼伯龙根之歌》把更古老的英雄材料重塑为中欧关于忠诚、复仇与灾难性荣誉的史诗。"
    ),
    themes: [text("treasure", "宝藏"), text("betrayal", "背叛"), text("vengeance", "复仇")],
    tags: [text("hoard", "宝藏"), text("curse", "诅咒"), text("heroes", "英雄"), text("epic", "史诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nibelungenlied"
  },
  {
    id: "devils-bridge-schollenen",
    title: text("The Devil's Bridge of Schollenen", "舍伦嫩的魔鬼桥"),
    country: text("Switzerland", "瑞士"),
    region: text("Central Europe", "中欧"),
    culture: text("Swiss", "瑞士文化"),
    latitude: 46.6372,
    longitude: 8.5907,
    category: "folktale",
    summary: text(
      "Villagers bargain for a bridge through a deadly gorge, then answer the devil's terms with rural cunning.",
      "村民为穿越险峡而与魔鬼谈判，随后又用乡野机智回应魔鬼的条件。"
    ),
    background: text(
      "Devil's bridge legends across the Alps explain feats of engineering by making impossible crossings into moral contests.",
      "阿尔卑斯各地的魔鬼桥传说用道德较量解释工程奇迹，把不可能的通行讲成一次斗智。"
    ),
    themes: [text("bargain", "交易"), text("engineering", "造桥"), text("cunning", "机智")],
    tags: [text("bridge", "桥"), text("devil", "魔鬼"), text("gorge", "峡谷"), text("alps", "阿尔卑斯")],
    sourceUrl: "https://en.wikipedia.org/wiki/Devil%27s_Bridge"
  },
  {
    id: "koschei-deathless",
    title: text("Koschei the Deathless", "不死的科谢伊"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 55.7558,
    longitude: 37.6173,
    category: "creature",
    summary: text(
      "Koschei hides his death outside his body, making immortality feel like a puzzle of nested secrets.",
      "科谢伊把自己的死亡藏在身体之外，让不死之身变成一套层层套叠的秘密谜题。"
    ),
    background: text(
      "In East Slavic tales, Koschei often stands as the thin, hoarding villain whose power depends on concealment and abduction.",
      "在东斯拉夫故事中，科谢伊常是瘦削、贪占的反派，他的力量依赖隐藏、囚禁与劫掠。"
    ),
    themes: [text("immortality", "不死"), text("secrets", "秘密"), text("rescue", "营救")],
    tags: [text("death", "死亡"), text("needle", "针"), text("abduction", "劫持"), text("villain", "反派")],
    sourceUrl: "https://en.wikipedia.org/wiki/Koschei"
  },
  {
    id: "firebird",
    title: text("The Firebird", "火鸟"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 59.9343,
    longitude: 30.3351,
    category: "creature",
    summary: text(
      "A glowing bird sets princes on impossible quests, making beauty itself a spark that can summon danger and destiny.",
      "发光的火鸟让王子踏上不可能的任务，让美本身成为召来危险与命运的火花。"
    ),
    background: text(
      "The Firebird appears across Russian wonder tales as a coveted marvel whose capture begins larger tests of courage.",
      "火鸟出现在许多俄罗斯神奇故事中，是人人渴望的奇物，一旦被追寻就会开启更大的勇气试炼。"
    ),
    themes: [text("quest", "征途"), text("beauty", "美"), text("transformation", "转变")],
    tags: [text("bird", "神鸟"), text("fire", "火"), text("prince", "王子"), text("feather", "羽毛")],
    sourceUrl: "https://en.wikipedia.org/wiki/Firebird_(Slavic_folklore)"
  },
  {
    id: "vasilisa-baba-yaga",
    title: text("Vasilisa the Beautiful", "美丽的瓦西丽莎"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Russian", "俄罗斯文化"),
    latitude: 55.7558,
    longitude: 37.6173,
    category: "folktale",
    summary: text(
      "Vasilisa survives Baba Yaga's trials with a doll's hidden help, turning obedience and intuition into survival.",
      "瓦西丽莎凭借小人偶的暗中帮助通过芭芭雅嘎的试炼，让顺从、直觉与求生连在一起。"
    ),
    background: text(
      "The tale gives domestic hardship a mythic forest edge, where an inherited blessing matters as much as courage.",
      "这个故事把家庭苦难推向神话森林边缘，继承而来的祝福与勇气同样重要。"
    ),
    themes: [text("testing", "试炼"), text("inheritance", "遗赠"), text("intuition", "直觉")],
    tags: [text("baba yaga", "芭芭雅嘎"), text("doll", "人偶"), text("forest", "森林"), text("fire", "火")],
    sourceUrl: "https://en.wikipedia.org/wiki/Vasilisa_the_Beautiful"
  },
  {
    id: "rusalka",
    title: text("The Rusalka by the Water", "水边的鲁萨尔卡"),
    country: text("Ukraine", "乌克兰"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 50.4501,
    longitude: 30.5234,
    category: "creature",
    summary: text(
      "A rusalka haunts riverbanks and fields, making water, desire, and untimely death feel dangerously close.",
      "鲁萨尔卡徘徊在河岸与田野，让水、欲望与非命之死显得危险地接近。"
    ),
    background: text(
      "Rusalka traditions vary across Slavic lands, but often turn seasonal waters into a threshold between fertility and peril.",
      "鲁萨尔卡传统在斯拉夫地区各有差异，却常把季节性水域变成丰饶与危险之间的门槛。"
    ),
    themes: [text("water", "水"), text("longing", "渴望"), text("danger", "危险")],
    tags: [text("river", "河流"), text("spirit", "精灵"), text("song", "歌声"), text("drowning", "溺亡")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rusalka"
  },
  {
    id: "leshy-forest",
    title: text("The Leshy of the Forest", "森林里的列希"),
    country: text("Belarus", "白俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 53.9006,
    longitude: 27.559,
    category: "creature",
    summary: text(
      "The leshy guards the forest and misleads careless travelers, making wilderness feel alert, personal, and watchful.",
      "列希守护森林并迷惑粗心的旅人，让荒野显得有感知、有性格，也一直在注视。"
    ),
    background: text(
      "As a Slavic forest spirit, the leshy marks the moral boundary between using woodland resources and insulting them.",
      "作为斯拉夫森林精灵，列希标出使用林中资源与冒犯森林之间的道德边界。"
    ),
    themes: [text("wilderness", "荒野"), text("respect", "敬畏"), text("misdirection", "迷路")],
    tags: [text("forest", "森林"), text("spirit", "精灵"), text("traveler", "旅人"), text("guardian", "守护者")],
    sourceUrl: "https://en.wikipedia.org/wiki/Leshy"
  },
  {
    id: "vodyanoy",
    title: text("Vodyanoy Under the Millpond", "磨坊池下的水怪"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Slavic", "斯拉夫"),
    latitude: 56.8389,
    longitude: 60.6057,
    category: "creature",
    summary: text(
      "The vodyanoy dwells in rivers and millponds, turning ordinary water work into a bargain with hidden power.",
      "水怪伏居河流与磨坊池塘，让日常用水与磨坊劳作都像是在同隐秘力量打交道。"
    ),
    background: text(
      "Vodyanoy stories helped explain drownings, broken mills, and the need to treat local waters with caution.",
      "水怪故事用来解释溺亡、磨坊损坏，也提醒人们必须谨慎对待身边的水域。"
    ),
    themes: [text("water", "水"), text("caution", "谨慎"), text("bargain", "交易")],
    tags: [text("river", "河流"), text("mill", "磨坊"), text("drowning", "溺亡"), text("spirit", "精怪")],
    sourceUrl: "https://en.wikipedia.org/wiki/Vodyanoy"
  },
  {
    id: "morozko",
    title: text("Morozko, Father Frost", "霜老人莫罗兹科"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Russian", "俄罗斯文化"),
    latitude: 57.6261,
    longitude: 39.8845,
    category: "folktale",
    summary: text(
      "A girl meets Frost in the winter woods, where kindness and patience decide whether cold becomes death or gift.",
      "女孩在冬林中遇见霜老人，善良与耐心决定寒冷究竟带来死亡还是馈赠。"
    ),
    background: text(
      "Morozko tales turn winter into a moral examiner, contrasting cruelty at home with strange justice in the forest.",
      "莫罗兹科故事把冬天变成道德考官，用家中的残酷映照森林里奇异的公正。"
    ),
    themes: [text("kindness", "善良"), text("winter", "冬天"), text("justice", "公正")],
    tags: [text("frost", "霜冻"), text("forest", "森林"), text("stepmother", "继母"), text("gift", "礼物")],
    sourceUrl: "https://en.wikipedia.org/wiki/Morozko"
  },
  {
    id: "ilya-muromets",
    title: text("Ilya Muromets Rises", "伊利亚·穆罗梅茨起身"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("East Slavic", "东斯拉夫"),
    latitude: 55.5792,
    longitude: 42.0524,
    category: "epic",
    summary: text(
      "Ilya rises from long immobility to become a bogatyr, making delayed strength central to heroic destiny.",
      "伊利亚从漫长不能行走中起身成为勇士，让迟来的力量成为英雄命运的核心。"
    ),
    background: text(
      "The byliny remember Ilya Muromets as a defender whose bodily transformation mirrors the making of communal courage.",
      "俄罗斯英雄歌把伊利亚·穆罗梅茨记作保卫者，他身体的蜕变映照出共同体勇气的生成。"
    ),
    themes: [text("strength", "力量"), text("calling", "召命"), text("defense", "守卫")],
    tags: [text("bogatyr", "勇士"), text("epic song", "英雄歌"), text("healing", "痊愈"), text("hero", "英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ilya_Muromets"
  },
  {
    id: "dobrynya-zmey",
    title: text("Dobrynya and Zmey Gorynych", "多勃雷尼亚与戈雷尼奇蛇龙"),
    country: text("Russia", "俄罗斯"),
    region: text("Eastern Europe", "东欧"),
    culture: text("East Slavic", "东斯拉夫"),
    latitude: 50.4501,
    longitude: 30.5234,
    category: "epic",
    summary: text(
      "Dobrynya battles the dragon Zmey Gorynych, turning heroic courtesy and ferocity into one rescue tale.",
      "多勃雷尼亚大战蛇龙戈雷尼奇，让英雄的礼节与凶猛共同构成一则营救故事。"
    ),
    background: text(
      "In byliny tradition, Dobrynya combines warrior force with diplomacy, showing that heroic order needs more than strength.",
      "在英雄歌传统中，多勃雷尼亚兼具武力与外交能力，显示英雄秩序不只依靠强力。"
    ),
    themes: [text("heroism", "英雄气概"), text("rescue", "营救"), text("diplomacy", "交涉")],
    tags: [text("dragon", "龙"), text("bogatyr", "勇士"), text("battle", "战斗"), text("princess", "公主")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dobrynya_Nikitich"
  },
  {
    id: "strigoi",
    title: text("The Strigoi at Night", "夜里的斯特里戈伊"),
    country: text("Romania", "罗马尼亚"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Romanian", "罗马尼亚文化"),
    latitude: 45.9432,
    longitude: 24.9668,
    category: "creature",
    summary: text(
      "The strigoi returns from death to trouble the living, making family memory and grave fear hard to separate.",
      "斯特里戈伊从死亡中归来扰乱生者，让亲族记忆与坟墓恐惧难以分开。"
    ),
    background: text(
      "Romanian strigoi lore belongs to a wider vampire complex, where restless death threatens household and village order.",
      "罗马尼亚斯特里戈伊传说属于更广泛的吸血鬼传统，不安的亡者会威胁家庭与村落秩序。"
    ),
    themes: [text("restless dead", "不安亡者"), text("fear", "恐惧"), text("household", "家族")],
    tags: [text("vampire", "吸血鬼"), text("night", "夜晚"), text("grave", "坟墓"), text("village", "村庄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Strigoi"
  },
  {
    id: "king-gesar",
    title: text("King Gesar Rides Out", "格萨尔王出征"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Tibetan", "藏族文化"),
    latitude: 31.4762,
    longitude: 92.0512,
    category: "epic",
    summary: text(
      "King Gesar rides through battles, trials, and spirit worlds, making kingship a vast oral epic of protection and order.",
      "格萨尔王驰骋于战斗、试炼与灵界之间，让王权成为关于守护与秩序的宏大口头史诗。"
    ),
    background: text(
      "The Gesar epic is performed across Tibetan and Inner Asian traditions, where storytelling preserves history, ritual, and heroic imagination.",
      "《格萨尔》史诗在藏族与内亚传统中被不断演述，让讲述保存历史、仪式与英雄想象。"
    ),
    themes: [text("kingship", "王权"), text("protection", "守护"), text("oral epic", "口头史诗")],
    tags: [text("king", "国王"), text("horse", "战马"), text("tibet", "西藏"), text("epic", "史诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Epic_of_King_Gesar"
  },
  {
    id: "dangun",
    title: text("Dangun Founds Gojoseon", "檀君建立古朝鲜"),
    country: text("South Korea", "韩国"),
    region: text("Asia", "亚洲"),
    culture: text("Korean", "韩国文化"),
    latitude: 37.5665,
    longitude: 126.978,
    category: "myth",
    summary: text(
      "Dangun is born from heavenly descent and a bear's transformation, making a nation begin in both sky and cave.",
      "檀君诞生于天神下降与熊的蜕变之间，让国家起源同时来自天空与洞穴。"
    ),
    background: text(
      "Korean tradition uses the Dangun myth to join ancestry, sacred geography, and political beginnings into one origin story.",
      "韩国传统用檀君神话把祖源、神圣地理与政治开端汇成同一个起源故事。"
    ),
    themes: [text("origins", "起源"), text("transformation", "蜕变"), text("ancestry", "祖源")],
    tags: [text("bear", "熊"), text("founding", "建国"), text("heaven", "天界"), text("gojoseon", "古朝鲜")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dangun"
  },
  {
    id: "butterfly-lovers",
    title: text("The Butterfly Lovers", "梁山伯与祝英台"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 30.5728,
    longitude: 104.0668,
    category: "folktale",
    summary: text(
      "Two students fall in love across disguise and social pressure, making death transform into a pair of butterflies.",
      "两位同窗在伪装与世俗压力中相爱，最终让死亡化成一双蝴蝶。"
    ),
    background: text(
      "Often called China's Romeo and Juliet, the story survives through opera, music, and local commemorative landscapes.",
      "这个故事常被称作中国的罗密欧与朱丽叶，并通过戏曲、音乐与地方纪念地持续流传。"
    ),
    narrativeParagraphs: {
      en: [
        "Zhu Yingtai wants to study and leaves home disguised as a young man. On the road she meets Liang Shanbo, and the two become classmates. They study together for years without Liang discovering her identity. During that time Zhu comes to love him.",
        "When Zhu returns home, her family arranges her marriage to Ma Wencai. Liang later visits and learns that his old school companion is a woman. The two confess their feelings, but the marriage arrangement cannot be changed. Liang falls ill from grief and dies.",
        "On the day Zhu is taken to her wedding, the procession passes Liang's grave. She stops to mourn before the tomb. The grave suddenly opens, and Zhu throws herself into it to join Liang. Two butterflies rise from the tomb and fly away together."
      ],
      zh: [
        "祝英台想外出求学，便女扮男装离开家门。路上她遇见梁山伯，两人从此成为同窗。三年间，他们一起读书行路，梁山伯始终不知道她是女子。祝英台也在这段相处里爱上了梁山伯。",
        "等祝英台回到家中，父母却已经替她定下了与马文才的婚事。后来梁山伯前来拜访，才知道昔日同学原来就是女子。两人互诉心意，可婚约已经无法改变。梁山伯因此郁结成病，不久便死去。",
        "祝英台出嫁那天，迎亲队伍经过梁山伯的坟前。她停下来祭奠，不肯离去。忽然坟墓裂开，祝英台纵身跳了进去。片刻之后，两只蝴蝶从坟中飞出，一起向远处飞去。"
      ]
    },
    themes: [text("tragic love", "悲恋"), text("disguise", "伪装"), text("transformation", "化蝶")],
    tags: [text("butterflies", "蝴蝶"), text("students", "同窗"), text("lovers", "恋人"), text("opera", "戏曲")],
    sourceUrl: "https://en.wikipedia.org/wiki/Butterfly_Lovers"
  },
  {
    id: "tale-of-kieu",
    title: text("The Tale of Kieu", "金云翘传"),
    country: text("Vietnam", "越南"),
    region: text("Asia", "亚洲"),
    culture: text("Vietnamese", "越南文化"),
    latitude: 21.0278,
    longitude: 105.8342,
    category: "epic",
    summary: text(
      "Kieu sacrifices herself for family and endures exile, making talent, fate, and moral resilience central to a national poem.",
      "翘为家人牺牲自己并承受流离，让才情、命运与道德韧性成为民族诗篇的核心。"
    ),
    background: text(
      "Nguyen Du's verse narrative became a defining work of Vietnamese literature and a deep reservoir of proverbial memory.",
      "阮攸的叙事长诗成为越南文学的代表作品，也成为谚语与集体记忆的重要源泉。"
    ),
    themes: [text("sacrifice", "牺牲"), text("fate", "命运"), text("resilience", "韧性")],
    tags: [text("poem", "长诗"), text("family", "家庭"), text("exile", "流离"), text("virtue", "德行")],
    sourceUrl: "https://en.wikipedia.org/wiki/The_Tale_of_Kieu"
  },
  {
    id: "son-tinh-thuy-tinh",
    title: text("Son Tinh and Thuy Tinh", "山精与水精"),
    originalTitle: text("Sơn Tinh - Thủy Tinh", "Sơn Tinh - Thủy Tinh"),
    country: text("Vietnam", "越南"),
    region: text("Asia", "亚洲"),
    culture: text("Vietnamese", "越南文化"),
    latitude: 21.3227,
    longitude: 105.402,
    category: "myth",
    summary: text(
      "Two rival spirits court Princess Mi Nuong, turning mountain-building and floodwater into Vietnam's memory of monsoon struggle.",
      "两位神灵争娶媚娘公主，让筑山与洪水化成越南关于季风抗争的集体记忆。"
    ),
    background: text(
      "The legend is often linked with the Red River Delta, where annual floods become a recurring contest between water and human protection.",
      "这则传说常与红河三角洲相连，把年年泛滥的洪水讲成水势与人间守护之间反复上演的较量。"
    ),
    themes: [text("flood", "洪水"), text("rivalry", "争夺"), text("protection", "守护")],
    tags: [text("mountain", "山岳"), text("water", "水"), text("princess", "公主"), text("monsoon", "季风")],
    sourceUrl: "https://en.wikipedia.org/wiki/S%C6%A1n_Tinh_%E2%80%93_Th%E1%BB%A7y_Tinh"
  },
  {
    id: "tam-cam",
    title: text("The Story of Tam and Cam", "塔姆与卡姆"),
    originalTitle: text("Tấm Cám", "Tấm Cám"),
    country: text("Vietnam", "越南"),
    region: text("Asia", "亚洲"),
    culture: text("Vietnamese", "越南文化"),
    latitude: 16.4637,
    longitude: 107.5909,
    category: "folktale",
    summary: text(
      "Tam survives cruelty, loss, and repeated transformation, making justice feel less like luck than stubborn return.",
      "塔姆在虐待、失去与一次次变形中存活下来，让公义不只是幸运，而像顽强的归来。"
    ),
    background: text(
      "This Vietnamese fairy tale shares the Cinderella pattern but gives its heroine a sharper cycle of death, rebirth, and reckoning.",
      "这则越南童话与灰姑娘母题相通，却让女主人公经历更鲜明的死亡、重生与清算循环。"
    ),
    themes: [text("resilience", "韧性"), text("justice", "公义"), text("transformation", "变形")],
    tags: [text("cinderella", "灰姑娘"), text("stepfamily", "继亲"), text("rebirth", "重生"), text("fairy tale", "童话")],
    sourceUrl: "https://en.wikipedia.org/wiki/The_Story_of_T%E1%BA%A5m_and_C%C3%A1m"
  },
  {
    id: "barong-rangda",
    title: text("Barong and Rangda", "巴龙与兰达"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Asia", "亚洲"),
    culture: text("Balinese", "巴厘文化"),
    latitude: -8.3405,
    longitude: 115.092,
    category: "religion",
    summary: text(
      "Barong and Rangda face one another in ritual drama, making cosmic balance visible through masks, dance, and trance.",
      "巴龙与兰达在仪式戏剧中相对而立，让宇宙平衡通过面具、舞蹈与出神状态显现。"
    ),
    background: text(
      "Balinese performance treats the struggle between protective and destructive powers as a recurring balance rather than a final victory.",
      "巴厘表演把守护与毁灭力量的斗争看作反复维系的平衡，而不是一次性的胜利。"
    ),
    themes: [text("balance", "平衡"), text("ritual", "仪式"), text("protection", "守护")],
    tags: [text("mask", "面具"), text("dance", "舞蹈"), text("trance", "出神"), text("bali", "巴厘")],
    sourceUrl: "https://en.wikipedia.org/wiki/Barong_(mythology)"
  },
  {
    id: "sang-kancil",
    title: text("Sang Kancil Tricks the River", "桑坎契尔智过河"),
    country: text("Malaysia", "马来西亚"),
    region: text("Asia", "亚洲"),
    culture: text("Malay", "马来文化"),
    latitude: 3.139,
    longitude: 101.6869,
    category: "folktale",
    summary: text(
      "The tiny mouse-deer outwits larger animals, making weakness into a theater for timing, language, and nerve.",
      "小小的鼷鹿智胜体型更大的动物，让弱小成为展现时机、语言与胆量的舞台。"
    ),
    background: text(
      "Sang Kancil tales travel widely through Malay and Indonesian storytelling as compact lessons in trickster intelligence.",
      "桑坎契尔故事广泛流传于马来与印度尼西亚叙事中，是关于骗子英雄智慧的简洁寓言。"
    ),
    themes: [text("wit", "机智"), text("survival", "求生"), text("reversal", "反转")],
    tags: [text("mouse-deer", "鼷鹿"), text("trickster", "骗子英雄"), text("river", "河流"), text("crocodiles", "鳄鱼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sang_Kancil"
  },
  {
    id: "jaka-tarub",
    title: text("Jaka Tarub and the Heavenly Maiden", "查卡塔鲁布与天女"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Asia", "亚洲"),
    culture: text("Javanese", "爪哇文化"),
    latitude: -7.2575,
    longitude: 112.7521,
    category: "folktale",
    summary: text(
      "Jaka Tarub hides a celestial maiden's garment, turning marriage, secrecy, and return to heaven into one bittersweet tale.",
      "查卡塔鲁布藏起天女的羽衣，让婚姻、秘密与重返天界汇成一则苦甜交织的故事。"
    ),
    background: text(
      "The Javanese tale belongs to a wider Asian swan-maiden pattern, where love begins with wonder and fractures around trust.",
      "这则爪哇故事属于亚洲更广泛的天鹅处女母题：爱情始于惊奇，却常因信任破裂。"
    ),
    themes: [text("trust", "信任"), text("secrecy", "秘密"), text("separation", "分离")],
    tags: [text("heavenly maiden", "天女"), text("garment", "羽衣"), text("marriage", "婚姻"), text("sky", "天空")],
    sourceUrl: "https://en.wikipedia.org/wiki/Jaka_Tarub"
  },
  {
    id: "manimekhala-ramasura",
    title: text("Manimekhala and Ramasura", "摩尼梅卡拉与罗摩苏罗"),
    country: text("Cambodia", "柬埔寨"),
    region: text("Asia", "亚洲"),
    culture: text("Khmer", "高棉文化"),
    latitude: 11.5564,
    longitude: 104.9282,
    category: "myth",
    summary: text(
      "A goddess's crystal and a demon's axe explain lightning and thunder as pursuit across the storm sky.",
      "女神的水晶与恶魔的斧头解释了闪电与雷声，仿佛暴风天空中一场追逐。"
    ),
    background: text(
      "The Manimekhala cycle appears across mainland Southeast Asia, turning monsoon weather into a dramatic divine encounter.",
      "摩尼梅卡拉故事群见于东南亚大陆多地，把季风天气讲成戏剧化的神灵相遇。"
    ),
    themes: [text("storm", "风暴"), text("pursuit", "追逐"), text("radiance", "光芒")],
    tags: [text("lightning", "闪电"), text("thunder", "雷声"), text("goddess", "女神"), text("crystal", "水晶")],
    sourceUrl: "https://en.wikipedia.org/wiki/Manimekhala"
  },
  {
    id: "mae-nak",
    title: text("Mae Nak of Phra Khanong", "帕卡农的湄娜"),
    country: text("Thailand", "泰国"),
    region: text("Asia", "亚洲"),
    culture: text("Thai", "泰国文化"),
    latitude: 13.705,
    longitude: 100.601,
    category: "creature",
    summary: text(
      "Mae Nak's love survives death as a haunting, making domestic devotion both tender and terrifying.",
      "湄娜的爱情越过死亡化为缠绕人间的鬼魂，让家庭痴情既温柔又可怕。"
    ),
    background: text(
      "One of Thailand's most famous ghost stories, Mae Nak keeps returning through film, shrine practice, and urban memory.",
      "湄娜是泰国最著名的鬼故事之一，不断通过电影、祠庙实践与城市记忆回到当下。"
    ),
    themes: [text("love", "爱情"), text("haunting", "萦绕"), text("death", "死亡")],
    tags: [text("ghost", "鬼魂"), text("wife", "妻子"), text("shrine", "祠庙"), text("bangkok", "曼谷")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mae_Nak_Phra_Khanong"
  },
  {
    id: "hang-tuah",
    title: text("Hang Tuah's Loyalty", "汉都亚的忠义"),
    country: text("Malaysia", "马来西亚"),
    region: text("Asia", "亚洲"),
    culture: text("Malay", "马来文化"),
    latitude: 2.1896,
    longitude: 102.2501,
    category: "history",
    summary: text(
      "Hang Tuah serves the Malacca court with unmatched skill, turning loyalty into both heroic virtue and painful dilemma.",
      "汉都亚以无双本领效忠马六甲宫廷，让忠义同时成为英雄美德与痛苦困境。"
    ),
    background: text(
      "Malay tradition remembers Hang Tuah through martial prowess, courtly service, and arguments over loyalty and justice.",
      "马来传统通过武艺、宫廷服务，以及关于忠诚与公义的争论记住汉都亚。"
    ),
    themes: [text("loyalty", "忠诚"), text("justice", "公义"), text("martial skill", "武艺")],
    tags: [text("malacca", "马六甲"), text("warrior", "战士"), text("court", "宫廷"), text("friendship", "友情")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hang_Tuah"
  },
  {
    id: "lac-long-quan-au-co",
    title: text("Lac Long Quan and Au Co", "雒龙君与妪姬"),
    originalTitle: text("Lac Long Quan and Au Co", "Lạc Long Quân và Âu Cơ"),
    country: text("Vietnam", "越南"),
    region: text("Asia", "亚洲"),
    culture: text("Vietnamese", "越南文化"),
    latitude: 21.3996,
    longitude: 105.2249,
    category: "myth",
    summary: text(
      "A dragon lord and a mountain fairy become ancestral parents, dividing their hundred children between sea and highland.",
      "龙君与山中仙女成为祖先父母，把一百个孩子分往海滨与山地。"
    ),
    background: text(
      "The origin legend gives Vietnamese identity a double geography of water and mountain, kinship and separation.",
      "这则起源传说让越南身份同时拥有水与山、亲缘与分离的双重地理。"
    ),
    themes: [text("ancestry", "祖源"), text("separation", "分离"), text("landscape", "地景")],
    tags: [text("dragon", "龙"), text("fairy", "仙女"), text("children", "子孙"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/L%E1%BA%A1c_Long_Qu%C3%A2n"
  },
  {
    id: "thanh-giong",
    title: text("Saint Giong Rides to War", "圣琼骑马出征"),
    originalTitle: text("Thanh Giong", "Thánh Gióng"),
    country: text("Vietnam", "越南"),
    region: text("Asia", "亚洲"),
    culture: text("Vietnamese", "越南文化"),
    latitude: 21.2578,
    longitude: 105.849,
    category: "history",
    summary: text(
      "A silent child suddenly grows into a giant warrior, defeats invaders, and rides into the sky after saving the land.",
      "一个沉默的孩子忽然长成巨大战士，击退入侵者，拯救土地后骑马升天。"
    ),
    background: text(
      "Saint Giong is one of Vietnam's Four Immortals, joining village devotion, national defense, and miraculous childhood in one legend.",
      "圣琼是越南四不死之一，把村社信仰、保卫家国与神奇童年汇入同一传说。"
    ),
    themes: [text("defense", "守土"), text("miracle", "奇迹"), text("heroism", "英雄气概")],
    tags: [text("iron horse", "铁马"), text("warrior", "战士"), text("village", "村庄"), text("ascension", "升天")],
    sourceUrl: "https://en.wikipedia.org/wiki/Th%C3%A1nh_Gi%C3%B3ng"
  },
  {
    id: "hou-yi-shoots-suns",
    title: text("Hou Yi Shoots the Suns", "后羿射日"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 34.7466,
    longitude: 113.6254,
    category: "myth",
    summary: text(
      "Hou Yi saves the scorched world by shooting down nine runaway suns, turning archery into cosmic rescue.",
      "后羿射落九个失控的太阳，拯救被炙烤的世界，让弓箭成为宇宙救援。"
    ),
    background: text(
      "The myth links heroic skill with solar order, drought anxiety, and the dangerous excess of heavenly power.",
      "这则神话把英雄技艺与太阳秩序、旱灾焦虑和天界力量的过剩危险联系起来。"
    ),
    narrativeParagraphs: {
      en: [
        "In ancient times, ten suns rise together into the sky. Their heat burns crops, dries rivers, and scorches the earth. The archer Hou Yi takes up his bow to save the world. He shoots down nine of the suns and leaves one remaining in heaven.",
        "After the disaster ends, Hou Yi becomes known for his skill. In many versions he later receives an elixir of immortality. The medicine is kept in his household, where others begin to covet it. The order of the home is broken when the elixir is taken or used.",
        "In one common telling, Chang'e drinks the elixir and rises to the moon. Hou Yi remains on earth and can only look up at her from below. The world keeps its single sun, but the couple no longer lives together. The story stays joined to the sun in the sky and the moon above the night."
      ],
      zh: [
        "上古时候，天上同时升起了十个太阳。它们把庄稼晒焦，把江河蒸干，也把大地烤得几乎无法生存。于是神射手后羿举起弓箭，要为天下除去这场灾祸。他一连射下九个太阳，只留下一个继续照耀人间。",
        "等这场灾难过去后，后羿因箭术闻名。许多版本里，他后来得到了长生不死的仙药。仙药被留在家中，也引来了别人的觊觎。等这瓶药被取走或服下以后，家中的安稳便被打破了。",
        "在最常见的讲法里，嫦娥吞下仙药，飞到了月宫。后羿留在人间，只能抬头望向夜空中的她。世上从此只剩一个太阳，可夫妻二人也不能再同住。这个故事后来便一直连着白日的太阳和夜里的月亮。"
      ]
    },
    themes: [text("order", "秩序"), text("skill", "技艺"), text("rescue", "拯救")],
    tags: [text("sun", "太阳"), text("archer", "射手"), text("drought", "旱灾"), text("heaven", "天界")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hou_Yi"
  },
  {
    id: "jingwei-fills-sea",
    title: text("Jingwei Fills the Sea", "精卫填海"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 38.0428,
    longitude: 112.5624,
    category: "myth",
    summary: text(
      "After drowning, a young girl becomes Jingwei, a bird that carries twigs and stones to fill the sea forever.",
      "少女溺亡后化为精卫，日日衔枝石投向大海，誓要把海填平。"
    ),
    background: text(
      "Jingwei's impossible labor became a Chinese emblem of grief transformed into persistence against overwhelming force.",
      "精卫不可能完成的劳作，成为中国文化中把悲伤化成不屈坚持的象征。"
    ),
    narrativeParagraphs: {
      en: [
        "The young daughter of Emperor Yan goes out to the Eastern Sea in many tellings. A sudden wave overturns her boat, and she drowns in the water. After death her spirit becomes a small bird named Jingwei. The bird keeps crying over the sea that took her life.",
        "Jingwei picks up twigs, pebbles, and bits of wood in her beak. She flies over the water and drops them into the waves. Day after day she repeats the same labor. The sea remains vast, but the bird does not stop.",
        "Mountains and shorelines stay filled with her flights. She keeps returning with branches and stones no matter how little changes. In later tellings, the task never reaches an end. The story closes with Jingwei still carrying her next piece toward the sea."
      ],
      zh: [
        "许多讲法里，精卫原本是炎帝的小女儿。她去东海游玩时，忽然被海浪卷走，溺死在水中。死后，她的魂魄化成了一只小鸟，名字就叫精卫。它从此一直对夺走自己性命的大海怀着怨恨。",
        "精卫每天衔着树枝、石子和草木飞到海上。它把嘴里的东西一件件丢进海里。这样单调的劳作日复一日，没有停过。大海依旧辽阔，可这只鸟也始终没有退却。",
        "山间和海边不断留下它来回飞行的身影。无论大海有没有变化，精卫都会再衔起新的树枝和石子。到了后来的讲述里，这项工作一直都没有结束。故事停下来的时候，精卫仍在飞向大海。"
      ]
    },
    themes: [text("persistence", "坚持"), text("grief", "悲伤"), text("defiance", "抗争")],
    tags: [text("bird", "鸟"), text("sea", "大海"), text("stones", "石子"), text("transformation", "化身")],
    sourceUrl: "https://en.wikipedia.org/wiki/Jingwei"
  },
  {
    id: "yu-controls-flood",
    title: text("Yu the Great Controls the Flood", "大禹治水"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 34.6197,
    longitude: 112.454,
    category: "history",
    summary: text(
      "Yu channels floodwaters through labor and planning, making rulership begin with service to a wounded landscape.",
      "大禹以劳作与规划疏导洪水，让王权从对受创山河的服务中开始。"
    ),
    background: text(
      "The flood-control legend stands at the edge of myth and dynastic memory, explaining political legitimacy through public work.",
      "治水传说站在神话与王朝记忆的交界，用公共劳作解释政治正统。"
    ),
    narrativeParagraphs: {
      en: [
        "Great floods spread across the land and overwhelm fields, villages, and river valleys. Gun first tries to hold back the waters, but his method fails. The task then passes to his son Yu. Yu travels across the realm to inspect the mountains, channels, and plains.",
        "Instead of sealing everything behind walls, Yu chooses to open new courses for the water. He dredges rivers, cuts channels, and leads the flood toward the sea. In later tradition he passes his own home three times without going inside. He keeps working until the land begins to recover.",
        "When the waters are finally controlled, Yu's labor wins him authority over the realm. Shun yields rule to him, and later accounts treat him as the founder of the Xia dynasty. The story ties rulership to work done for all under heaven. It ends with order restored through rivers that have found their course."
      ],
      zh: [
        "滔天洪水漫过大地，淹没了田地、村落和河谷。最先治水的是鲧，可他的办法没有成功。后来，这项任务落到了儿子禹的身上。大禹走遍天下，去看各处山势、河道和平原。",
        "他没有一味筑堤堵水，而是选择给洪水开出新的去路。于是他疏浚河流，开凿水道，把泛滥的水一点点引向大海。后来的讲述里，他三过家门而不入，只顾继续治水。就这样，他一直干到山河开始恢复秩序。",
        "等洪患终于平定以后，大禹因这番劳作获得了统治天下的资格。舜把帝位让给了他，后来的人也把他看作夏朝的开创者。这个故事把王权和为天下出力的劳作连在一起。它最后停在河流各归其道、土地重新安定的结果上。"
      ]
    },
    themes: [text("labor", "劳作"), text("legitimacy", "正统性"), text("flood", "洪水")],
    tags: [text("river", "河流"), text("king", "君王"), text("engineering", "治水"), text("dynasty", "王朝")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yu_the_Great"
  },
  {
    id: "meng-jiangnu",
    title: text("Meng Jiangnu Weeps at the Great Wall", "孟姜女哭长城"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 40.0025,
    longitude: 119.7485,
    category: "folktale",
    summary: text(
      "Meng Jiangnu searches for her conscripted husband and weeps until the Great Wall reveals the cost of empire.",
      "孟姜女寻找被征发的丈夫，哭倒长城一角，让帝国工程的代价显露出来。"
    ),
    background: text(
      "One of China's Four Great Folktales, the legend makes private mourning challenge state power and forced labor.",
      "作为中国四大民间传说之一，它让私人哀痛直面国家权力与徭役之苦。"
    ),
    narrativeParagraphs: {
      en: [
        "Meng Jiangnu has barely married Fan Xiliang when officials seize him for labor on the Great Wall. He is taken away to the northern works and never returns. When the weather turns cold, she makes winter clothes for him and sets out to find him. She travels a long distance until she reaches the wall itself.",
        "At the work site she learns that her husband has already died from exhaustion. His body has been buried beneath the wall with the remains of other laborers. Meng Jiangnu stands before the stones and weeps without stopping. Her grief shakes the structure above the buried dead.",
        "A section of the Great Wall collapses under her lament. Bones are exposed, and she is finally able to search for her husband's remains. In many versions the emperor hears of her and tries to force her into his power. The story ends with Meng Jiangnu refusing that power and remaining with the loss that the wall cannot hide."
      ],
      zh: [
        "孟姜女刚刚嫁给范喜良，官府就把丈夫抓去修长城。范喜良被押往北方工地，此后再也没有回来。等天气转冷，孟姜女做好寒衣，决定亲自去找他。她走了很远的路，最后终于来到长城脚下。",
        "到了工地，她才知道丈夫早已死在徭役之中。范喜良的尸骨也和其他劳工一样，被埋在长城下面。孟姜女站在城边痛哭不止。她的哀哭把埋在石墙底下的死亡一起震动出来。",
        "后来，长城的一段在她的哭声中坍塌。白骨露出地面，她这才得以寻找丈夫的遗骨。许多版本里，皇帝听说她的事后，又想把她据为己有。故事最后停在孟姜女拒绝这种权力，也拒绝让长城掩埋掉丈夫的下落。"
      ]
    },
    themes: [text("mourning", "哀悼"), text("loyalty", "忠贞"), text("injustice", "不公")],
    tags: [text("great wall", "长城"), text("tears", "眼泪"), text("husband", "丈夫"), text("empire", "帝国")],
    sourceUrl: "https://en.wikipedia.org/wiki/Meng_Jiangn%C3%BC"
  },
  {
    id: "shennong-tastes-herbs",
    title: text("Shennong Tastes the Herbs", "神农尝百草"),
    country: text("China", "中国"),
    region: text("Asia", "亚洲"),
    culture: text("Chinese", "中华文化"),
    latitude: 31.7444,
    longitude: 110.6804,
    category: "religion",
    summary: text(
      "Shennong tests plants with his own body, making agriculture, medicine, and sacrifice part of one civilizing memory.",
      "神农以自己的身体试验草木，让农耕、医药与牺牲汇成一段文明记忆。"
    ),
    background: text(
      "As a culture hero and divine farmer, Shennong explains how knowledge of crops and healing entered human life.",
      "作为文化英雄与神圣农者，神农解释了作物和疗愈知识如何进入人类生活。"
    ),
    narrativeParagraphs: {
      en: [
        "Shennong teaches people how to clear fields, sow seed, and raise crops. He also wants to know which plants can heal and which ones can kill. To learn this, he tastes herbs with his own body. Each plant shows its effect on him before he judges it.",
        "Day after day he tests leaves, roots, stems, and flowers. Some herbs heal him, while others poison him at once. In later tellings he can watch the effects inside a transparent belly. Through repeated trials he separates useful medicines from dangerous plants.",
        "He keeps tasting until he meets a deadly herb that cannot be countered in time. Even after his death, the knowledge gained through his body remains among the people. Farming and medicine stay joined in the memory of his labor. The story ends with the plants named and the cost borne by Shennong himself."
      ],
      zh: [
        "神农教人开垦土地、播种五谷，也想知道哪些草木能救人，哪些草木会害人。为了弄清这些事，他决定亲自去尝遍百草。每吃下一种植物，他都先用自己的身体承受它的作用。然后他再判断这种草木到底有什么用。",
        "他一天天去试叶子、根茎、花实。某些草药能替他止痛疗伤，另一些却会立刻让他中毒。后来的讲述里，他甚至能透过自己的肚腹看见药性如何运行。就这样，他在一次次试验中把可用的药和危险的草分了出来。",
        "可是神农最终还是遇到了一种来不及解救的剧毒。即便如此，他用身体换来的知识还是留在了世间。农耕和医药也因此一直连在他的记忆里。故事停在草木的名字被认出，而代价由神农自己承担下来。"
      ]
    },
    themes: [text("healing", "疗愈"), text("sacrifice", "牺牲"), text("knowledge", "知识")],
    tags: [text("herbs", "草药"), text("farmer", "农者"), text("medicine", "医药"), text("testing", "试验")],
    sourceUrl: "https://en.wikipedia.org/wiki/Shennong"
  },
  {
    id: "issun-boshi",
    title: text("Issun-boshi, the One-Inch Boy", "一寸法师"),
    originalTitle: text("Issun-boshi", "一寸法師"),
    country: text("Japan", "日本"),
    region: text("Asia", "亚洲"),
    culture: text("Japanese", "日本文化"),
    latitude: 35.0116,
    longitude: 135.7681,
    category: "folktale",
    summary: text(
      "A tiny boy travels with a bowl boat and needle sword, proving that courage can make smallness into advantage.",
      "小小少年乘碗为舟、执针为剑，证明勇气能把微小变成优势。"
    ),
    background: text(
      "Issun-boshi belongs to Japan's otogi-zoshi tale world, where miniature scale turns household objects into adventure equipment.",
      "一寸法师属于日本御伽草子故事世界，微小尺度让日用品变成冒险装备。"
    ),
    themes: [text("courage", "勇气"), text("ingenuity", "巧思"), text("growth", "成长")],
    tags: [text("needle", "针"), text("bowl", "碗"), text("ogre", "鬼"), text("miniature", "微小")],
    sourceUrl: "https://en.wikipedia.org/wiki/Issun-b%C5%8Dshi"
  },
  {
    id: "kintaro",
    title: text("Kintaro of Mount Ashigara", "足柄山的金太郎"),
    originalTitle: text("Kintaro", "金太郎"),
    country: text("Japan", "日本"),
    region: text("Asia", "亚洲"),
    culture: text("Japanese", "日本文化"),
    latitude: 35.309,
    longitude: 139.0062,
    category: "folktale",
    summary: text(
      "Kintaro grows up with mountain strength and wild companions before becoming a warrior in heroic tradition.",
      "金太郎带着山野之力和野性伙伴长大，后来进入英雄传统成为武士。"
    ),
    background: text(
      "The child hero is tied to Boys' Day imagery, mountain vitality, and later legends around the warrior Sakata no Kintoki.",
      "这位童子英雄连接男孩节意象、山中生命力，以及坂田金时相关的后世武勇传说。"
    ),
    themes: [text("strength", "力量"), text("childhood", "童年"), text("nature", "自然")],
    tags: [text("mountain", "山"), text("axe", "斧"), text("warrior", "武士"), text("child hero", "童子英雄")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kintar%C5%8D"
  },
  {
    id: "tongue-cut-sparrow",
    title: text("The Tongue-Cut Sparrow", "舌切雀"),
    originalTitle: text("Shita-kiri Suzume", "舌切り雀"),
    country: text("Japan", "日本"),
    region: text("Asia", "亚洲"),
    culture: text("Japanese", "日本文化"),
    latitude: 35.6762,
    longitude: 139.6503,
    category: "folktale",
    summary: text(
      "A kind old man seeks the injured sparrow he once cared for, while greed turns a reward into punishment.",
      "善良老人寻找曾被自己照顾的受伤麻雀，而贪婪则把奖赏变成惩罚。"
    ),
    background: text(
      "The tale uses paired choices and boxes of different weight to make generosity and greed immediately visible.",
      "这个故事用成对选择和轻重不同的盒子，让慷慨与贪婪变得一眼可见。"
    ),
    themes: [text("kindness", "善意"), text("greed", "贪婪"), text("reward", "报偿")],
    tags: [text("sparrow", "麻雀"), text("box", "盒子"), text("old couple", "老夫妻"), text("choice", "选择")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tongue-Cut_Sparrow"
  },
  {
    id: "bunbuku-chagama",
    title: text("Bunbuku Chagama", "文福茶釜"),
    originalTitle: text("Bunbuku Chagama", "分福茶釜"),
    country: text("Japan", "日本"),
    region: text("Asia", "亚洲"),
    culture: text("Japanese", "日本文化"),
    latitude: 36.245,
    longitude: 139.5345,
    category: "creature",
    summary: text(
      "A shape-shifting tanuki becomes a tea kettle, turning gratitude, performance, and comic magic into a temple tale.",
      "会变化的狸化作茶釜，把感恩、表演与滑稽魔法揉进一则寺院故事。"
    ),
    background: text(
      "The legend is associated with Morin-ji and Japan's lively tanuki lore, where transformation can be mischievous and generous at once.",
      "这则传说与茂林寺及日本狸传说相连，变化既可能顽皮，也可能慷慨。"
    ),
    themes: [text("gratitude", "感恩"), text("transformation", "变化"), text("performance", "表演")],
    tags: [text("tanuki", "狸"), text("tea kettle", "茶釜"), text("temple", "寺院"), text("magic", "魔法")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bunbuku_Chagama"
  },
  {
    id: "tamamo-no-mae",
    title: text("Tamamo-no-Mae", "玉藻前"),
    originalTitle: text("Tamamo-no-Mae", "玉藻前"),
    country: text("Japan", "日本"),
    region: text("Asia", "亚洲"),
    culture: text("Japanese", "日本文化"),
    latitude: 36.957,
    longitude: 140.036,
    category: "creature",
    summary: text(
      "A beautiful court woman is revealed as a fox spirit, making elegance, danger, and political illness part of one haunting legend.",
      "美丽宫廷女子被揭出狐妖真身，让优雅、危险与政治病象汇成一则萦绕不散的传说。"
    ),
    background: text(
      "Tamamo-no-Mae belongs to Japan's kitsune tradition and later became linked with the killing stone at Nasu.",
      "玉藻前属于日本狐灵传统，后来又与那须的杀生石传说相连。"
    ),
    themes: [text("deception", "伪装"), text("beauty", "美"), text("danger", "危险")],
    tags: [text("fox spirit", "狐灵"), text("court", "宫廷"), text("stone", "石"), text("revelation", "揭示")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tamamo-no-Mae"
  },
  {
    id: "ananse-sky-stories",
    title: text("Anansi Buys the Sky-God's Stories", "阿南西买下天神的故事"),
    originalTitle: text("Anansesem", "阿南西故事"),
    country: text("Ghana", "加纳"),
    region: text("West Africa", "西非"),
    culture: text("Ashanti", "阿散蒂"),
    latitude: 6.696,
    longitude: -1.6244,
    category: "folktale",
    summary: text(
      "Anansi the spider trades clever captures for the sky god's box of stories, and the tales finally belong to the people of earth.",
      "蜘蛛阿南西凭一连串机巧的捕获，换来天神尼亚梅手中的故事盒，从此故事归属人间。"
    ),
    background: text(
      "Anansesem are the Ashanti spider tales of Ghana; this origin story explains why every clever folktale is now called 'a spider story'.",
      "阿散蒂的“阿南西故事”流传于加纳，这则起源故事解释了为何所有机巧的民间故事都被称为“蜘蛛故事”。"
    ),
    narrativeParagraphs: {
      en: [
        "All the stories in the world once belonged to Nyame, the sky god, who kept them locked in a wooden box beside his throne. Anansi the spider climbed a long thread of cobweb to Nyame and asked to buy them. Nyame laughed and set a price no one had ever met: bring me Onini the python, Osebo the leopard, the Mmoboro hornets, and Mmoatia the dwarf, and the box is yours.",
        "Anansi went home and thought. He tricked Onini into stretching himself along a stick to be measured, then bound him fast. He dug a pit for Osebo and lifted him out only after the leopard had promised to be still. He held a gourd over the hornets in a fake rainstorm and they flew inside for shelter. He carved a sticky doll smeared with yams that caught the curious dwarf at her first slap.",
        "When Anansi brought all four to the sky, Nyame opened the box and let the stories spill into the world. From that day the tales travelled from mouth to mouth, and people began every clever story with Anansi's name. Even the sky god, watching from above, smiled at the small spider who had outwitted the impossible price.",
      ],
      zh: [
        "世上所有故事原本都属于天神尼亚梅，他把它们锁在宝座旁的木盒里。蜘蛛阿南西顺着细丝爬上天空，向尼亚梅请求买下故事。尼亚梅笑着开了一个没人能凑齐的价：把巨蟒奥尼尼、豹奥塞博、一群胡蜂和小矮人姆摩阿提亚都带上来，故事盒就归你。",
        "阿南西回家苦思。他骗奥尼尼自己沿着一根直棍量身长，趁机捆住它。他挖了陷阱困住奥塞博，又趁豹答应安静才拉它出来。他撑着葫芦向胡蜂浇上一场假雨，群蜂飞进去躲雨被他封住。他又雕一个小木偶涂满甜薯，小矮人好奇拍打就被粘在偶上动弹不得。",
        "阿南西把四样捕获带回天上，尼亚梅打开木盒，故事散落人间。从那天起，故事在人与人的口中传开，凡是机巧的故事开头都要先念阿南西的名字。连天神俯瞰人间，也对这只用智慧凑齐天价的小蜘蛛露出微笑。",
      ]
    },
    themes: [text("trickster", "机巧"), text("storytelling", "讲故事"), text("bargain", "交易")],
    tags: [text("ashanti", "阿散蒂"), text("spider", "蜘蛛"), text("sky god", "天神"), text("origin", "起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Anansi"
  },
  {
    id: "wagadu-bida",
    title: text("Bida the Serpent of Wagadu", "瓦加杜的圣蛇比达"),
    country: text("Mali", "马里"),
    region: text("West Africa", "西非"),
    culture: text("Soninke", "苏宁克"),
    latitude: 15.4181,
    longitude: -7.29,
    category: "myth",
    summary: text(
      "Wagadu prospers under the seven-headed serpent Bida, until a lover refuses to give up his bride and the empire's rain dries with the snake's blood.",
      "瓦加杜在七头巨蛇比达的庇佑下昌盛繁荣，直到一位青年不肯让出新娘，巨蛇的血与王国的雨一同干涸。"
    ),
    background: text(
      "The Soninke remember the legendary kingdom of Wagadu (often linked to historical Ghana Empire) as a city that lost its luck the moment a sacred pact was broken.",
      "苏宁克人将传说中的瓦加杜与历史上的迦纳帝国相连，认为这座城市的好运在一个神圣盟约破裂的瞬间彻底消逝。"
    ),
    narrativeParagraphs: {
      en: [
        "Long before the Mali Empire rose, the Soninke prospered in the city of Wagadu under a pact with the great serpent Bida, who curled inside a sacred well. Each year the people chose the most beautiful young woman of the kingdom and offered her to Bida; in return the serpent caused gold to fall like rain and the harvests to never fail.",
        "One year the chosen bride was Sia Yatabaré, beloved of a warrior named Mamadi Sefe Dekote. Mamadi could not bear to lose her. On the morning of the offering he hid by the well with a long blade. When Bida lifted his first head out of the water, Mamadi cut it off; then the second, then the third, until seven heads lay severed in the sand.",
        "With the last head Bida cursed Wagadu: for seven years, seven months, and seven days, no rain would fall, and the gold would never return. The wells dried, the herds wandered, and the people scattered across the Sahel. The Soninke remembered the broken bargain in song, and they say the gold of West Africa has been hiding from them ever since.",
      ],
      zh: [
        "在马里帝国兴起之前，苏宁克人在瓦加杜城繁荣兴旺。他们与盘踞圣井中的七头巨蛇比达立下盟约——每年献上一位最美的少女，比达便让黄金如雨落下，让庄稼从不歉收。",
        "那一年被选中的新娘是西亚·亚塔巴雷，她是勇士马马迪·塞菲·德科特心爱的人。马马迪不肯失去她，在献祭那天清晨，他握着长刃藏在井边。比达从水中伸出第一个头，他一刀砍下；又一刀，又一刀，直到七颗头颅倒在沙地上。",
        "倒下的最后一个头颅诅咒瓦加杜：在七年七月零七天里，这片土地不再下雨，黄金也不再流回。井干涸了，畜群四散，人们流落萨赫勒各地。苏宁克人用歌谣记下这次毁约，他们说，从那时起西非的黄金便藏起了自己，再没回来。",
      ]
    },
    themes: [text("sacred pact", "圣约"), text("sacrifice", "献祭"), text("downfall", "败落")],
    tags: [text("soninke", "苏宁克"), text("serpent", "蛇"), text("wagadu", "瓦加杜"), text("drought", "旱灾")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bida_(legend)"
  },
  {
    id: "samba-gueladio",
    title: text("Samba Guéladio of the Fula", "富拉勇士桑巴·盖拉迪奥"),
    country: text("Senegal", "塞内加尔"),
    region: text("West Africa", "西非"),
    culture: text("Fula", "富拉"),
    latitude: 16.5167,
    longitude: -15.0,
    category: "epic",
    summary: text(
      "Stripped of his throne in Fuuta Tooro, Samba Guéladio wins back his crown with a cursed sword, a bottomless thirst, and a horse that does not tire.",
      "在富塔托罗失去王位后，富拉勇士桑巴·盖拉迪奥靠一柄诅咒之剑、一份永不止息的渴和一匹不会疲倦的马，赢回了王冠。"
    ),
    background: text(
      "Samba Guéladio Diégui is the great epic figure of the Fuuta Tooro Fula along the Senegal River, sung by traditional griots called gawlo.",
      "桑巴·盖拉迪奥·迪埃吉是塞内加尔河沿岸富塔托罗富拉人最重要的史诗英雄，由名为“高罗”的传统说唱艺人代代传唱。"
    ),
    narrativeParagraphs: {
      en: [
        "When Samba's uncle seized the throne of Fuuta Tooro, the young prince was forced into exile across the Senegal River. The griots followed him, singing his name into the desert. He found service with a foreign lord and waited for a sign that the time of his return had come.",
        "His sign came as a gift: a sword that drank blood instead of staying in its sheath, and a stallion that crossed three days in one. Wherever Samba rode, the horse refused to drink, and Samba himself was always thirsty. He returned to Fuuta with a small band, defeated his uncle's army at the river crossing, and was carried back into his father's palace.",
        "The griots warned him that the gifts were not free. The sword would one day turn in his hand, and his thirst would not end. Samba ruled with the boldness of a man who knew his death was already promised. When at last he fell, the gawlo sang his life along the river so that no Fula child would forget the prince whose courage outlived his throne.",
      ],
      zh: [
        "舅父篡夺富塔托罗王位时，年轻王子桑巴被迫渡过塞内加尔河流亡。游吟的“高罗”艺人一路跟随，把他的名字唱进沙漠。他暂时投奔一位外乡领主，等待回家时机。",
        "时机以礼物的形式到来：一把不愿留在鞘中、嗜血的剑，一匹三天能跨越的骏马。无论桑巴如何驰骋，那匹马从不饮水，他自己却始终口渴。他带着小股人马回到富塔，在渡口击溃舅父的军队，被人簇拥着抬回父亲的王宫。",
        "高罗们提醒他，礼物从不白送。剑总有一天会反噬他的手，他的渴也永远不会止。桑巴像一个早已与死亡定约的人那样大胆统治。最终他倒下时，高罗艺人沿着塞内加尔河把他的生平一路唱开，让每一个富拉孩子都记得这位勇气长过王位的王子。",
      ]
    },
    themes: [text("exile", "流亡"), text("cursed gift", "诅咒之礼"), text("kingship", "王权")],
    tags: [text("fula", "富拉"), text("griot", "游吟艺人"), text("epic", "史诗"), text("senegal river", "塞内加尔河")],
    sourceUrl: "https://en.wikipedia.org/wiki/Samba_Gueladiegui"
  },
  {
    id: "queen-pokou",
    title: text("Queen Pokou Crosses the Comoé", "波库女王渡科莫埃河"),
    country: text("Côte d'Ivoire", "科特迪瓦"),
    region: text("West Africa", "西非"),
    culture: text("Baoulé", "巴乌雷"),
    latitude: 7.69,
    longitude: -5.03,
    category: "history",
    summary: text(
      "Fleeing war from the Ashanti, Queen Pokou hurls her only son into the Comoé River so her people may cross; their name 'Baoulé' means 'the child is dead'.",
      "为躲避阿散蒂的追击，波库女王将独子投入科莫埃河以换得众人渡河，他们的族名“巴乌雷”意为“孩子死了”。"
    ),
    background: text(
      "In the early eighteenth century a queen named Abla Pokou led a faction out of the Ashanti homeland and founded the Baoulé people of Côte d'Ivoire.",
      "十八世纪初，一位名叫阿布拉·波库的女王率领一支势力离开阿散蒂故土，建立了科特迪瓦的巴乌雷民族。"
    ),
    narrativeParagraphs: {
      en: [
        "After a bitter succession dispute among the Ashanti, Queen Abla Pokou refused to bend the knee and led her people west toward unfamiliar forest. The Ashanti army pressed close behind. When the column reached the broad Comoé River, the water was running too high to ford and there were no canoes.",
        "The queen called for the elders. The priests asked the river spirit what it required. The river answered that only the most precious thing in the column could open a way. The men offered cattle, the women offered gold. The river did not move.",
        "Then Pokou stepped to the bank and lifted her only son, an infant boy, and let the river take him. The water parted and a line of hippos rose under the people's feet to make a bridge. When the last person reached the far side, Pokou turned and whispered, 'Ba-ouli'—the child is dead. From that grief the Baoulé people took their name.",
      ],
      zh: [
        "阿散蒂王位之争结束后，阿布拉·波库女王不愿低头，率领族人向西进入陌生的森林。阿散蒂军队紧追而来。队伍来到宽阔的科莫埃河前，河水上涨无法涉过，又没有独木舟。",
        "女王召来长老，祭司询问河神需要什么。河神回答，只有队伍中最珍贵之物，才能换来一条路。男人献出牛群，女人献出黄金，河水都未让步。",
        "波库于是走到岸边，把自己唯一的婴孩高高举起，让河水带走了他。河水让开一道路，一排河马在族人脚下浮起搭成桥。当最后一人渡过对岸，波库回头低语：“Ba-ouli”——孩子死了。这份悲恸便成了巴乌雷民族的名字。",
      ]
    },
    themes: [text("sacrifice", "献祭"), text("migration", "迁徙"), text("motherhood", "母性")],
    tags: [text("baoule", "巴乌雷"), text("river crossing", "渡河"), text("queen", "女王"), text("ashanti", "阿散蒂")],
    sourceUrl: "https://en.wikipedia.org/wiki/Abla_Pokou"
  },
  {
    id: "mawu-lisa",
    title: text("Mawu and Lisa, Twin Skies", "玛乌与利萨：双生天空"),
    country: text("Benin", "贝宁"),
    region: text("West Africa", "西非"),
    culture: text("Fon", "丰族"),
    latitude: 6.4969,
    longitude: 2.6289,
    category: "myth",
    summary: text(
      "Mawu the cool moon and Lisa the burning sun share one body, parting at twilight to share the work of holding up the world.",
      "玛乌是凉月，利萨是烈日，他们共有一具身躯，每到黄昏便分开，轮流支撑这个世界。"
    ),
    background: text(
      "In Fon religion of Benin, Mawu-Lisa is the great androgynous creator, expressed as a feminine moon and a masculine sun joined in one being.",
      "在贝宁丰族的宗教中，玛乌-利萨是雌雄合一的至高造物者，化作阴性的月亮与阳性的太阳，本是同一存在。"
    ),
    narrativeParagraphs: {
      en: [
        "In the beginning Mawu-Lisa was one body with two faces, the cool dark and the bright fire pressed together. The world was hot and tangled, and creatures cried out for relief. So Mawu-Lisa agreed to be parted, the moon Mawu walking on one side of the sky and the sun Lisa on the other.",
        "Lisa carried the heat of work, the iron of the forge, and the strength to break stones. Mawu carried the coolness of night, the fertility of fields, and the wisdom that ripens in the dark. Each handed the world over to the other at dawn and dusk so neither would grow tired.",
        "Their seven children became the great vodun of the Fon: the spirits of storm, smallpox, smith, sea, earth, and hunting, each one shaped by the moon's depth and the sun's force. When a Fon priest pours water on the ground at dusk, they greet Mawu-Lisa together, reminding the twins that they share the world even when they walk apart.",
      ],
      zh: [
        "起初玛乌-利萨是一具有两副面孔的身躯，凉黑与亮火紧紧相拥。世界因此又热又乱，万物哀求歇息。于是玛乌-利萨同意一分为二，月亮玛乌走天空的一侧，太阳利萨走另一侧。",
        "利萨承担了劳作的热、铁匠铺的火、以及劈开石头的力量。玛乌承担夜的清凉、田野的丰饶，以及在黑暗里成熟的智慧。二者在黎明与黄昏将世界交托给对方，谁也不至于疲倦。",
        "他们的七个孩子成了丰族的大“伏都”神：风暴、天花、铁匠、海、地、狩猎之神，每一位都带着月亮的深沉和太阳的力量。傍晚时，丰族祭司向地上洒水，会同时呼唤玛乌-利萨——提醒这对孪生神，他们即使分开行走，仍共有同一个世界。",
      ]
    },
    themes: [text("duality", "二元"), text("cosmic balance", "宇宙平衡"), text("creation", "创世")],
    tags: [text("fon", "丰族"), text("vodun", "伏都"), text("sun and moon", "日月"), text("twin deity", "双生神")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mawu"
  },
  {
    id: "tortoise-feast",
    title: text("How Tortoise Cracked His Shell", "乌龟的壳为何裂开"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("Igbo", "伊博"),
    latitude: 6.4541,
    longitude: 7.5048,
    category: "folktale",
    summary: text(
      "Greedy Tortoise borrows feathers to join the birds at the sky-feast, takes the name 'All-of-You', and is flung back to earth where his shell breaks into the pattern it wears today.",
      "贪心的乌龟向鸟群借羽毛，跟着上天赴宴，自称“你们大家”，把所有饭菜都揽下，结果被鸟群抛下天空，壳碎裂成今日的花纹。"
    ),
    background: text(
      "Mbe the Tortoise is the great trickster of Igbo folktales of southeastern Nigeria; his cracked shell is the visible record of his pride.",
      "乌龟“姆贝”是尼日利亚东南部伊博民间故事中最著名的机巧角色，他壳上的裂纹正是他过往骄傲的明证。"
    ),
    narrativeParagraphs: {
      en: [
        "The sky people invited the birds to a great feast, but Tortoise had no wings. He begged each bird for one feather and stitched himself a coat of many colours. When the flock rose, Tortoise rose with them, chattering louder than any of them and convincing the birds to call him by a new name: All-of-You.",
        "In the sky the host greeted every guest and asked for whom the feast was prepared. Tortoise stepped forward smiling and said, 'For All-of-You,' and the host nodded that the food should be set before him alone. Tortoise ate the soup, the yams, the fish, and the palm wine while the birds watched in silent fury.",
        "When the meal was done, each bird pulled back its feather. Tortoise stood naked on the edge of the sky and asked the birds to tell his wife to spread soft mats below. The birds, who had heard the message, told her instead to spread iron pots and broken pestles. Tortoise fell, and his shell cracked into the hundred-piece pattern it still wears.",
      ],
      zh: [
        "天上的人请鸟群赴大宴，乌龟却没有翅膀。他向每只鸟讨一根羽毛，缝成一件五彩外衣。鸟群起飞时，他也跟着升空，比谁都嗓门大，还说服鸟群替他取一个新名字：“你们大家”。",
        "到了天上，主人迎接每位客人，问这场宴会是为谁准备的。乌龟笑着上前说：“为‘你们大家’准备的。”主人点头，命人把菜全摆在他一人面前。乌龟独自吃光了汤、薯、鱼和棕榈酒，鸟群在一旁怒火无声地烧着。",
        "宴罢，每只鸟都抽走自己的羽毛。乌龟光秃秃地站在天边，请鸟群替他传话给妻子，让她铺好软席接他下来。鸟群把话故意改了，让她铺上铁锅和断杵。乌龟摔了下来，壳便裂成一百块图案，从那以后再没合起来。",
      ]
    },
    themes: [text("greed", "贪心"), text("trickster", "机巧"), text("origin", "起源")],
    tags: [text("igbo", "伊博"), text("tortoise", "乌龟"), text("birds", "群鸟"), text("cracked shell", "裂壳")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mbeku"
  },
  {
    id: "tingoi-sherbro",
    title: text("Tingoi of the Sherbro Waters", "谢尔布罗水中的婷瓦伊"),
    country: text("Sierra Leone", "塞拉利昂"),
    region: text("West Africa", "西非"),
    culture: text("Mende", "门德"),
    latitude: 7.54,
    longitude: -12.73,
    category: "creature",
    summary: text(
      "Tingoi the river spirit appears as a beautiful woman combing her hair on a rock, granting wealth to those who keep her secret and ruin to those who boast.",
      "河灵婷瓦伊化作美丽女子坐在岩石上梳发，谁能守住她的秘密便得到财富，谁夸口张扬便迎来败落。"
    ),
    background: text(
      "On the Sherbro coast and inland rivers of Sierra Leone, Tingoi is a beloved water spirit linked to Mami Wata traditions across West Africa.",
      "在塞拉利昂的谢尔布罗海岸与内陆河流地区，婷瓦伊是受人喜爱的水灵，与西非各地的“水妈妈”传统密切相关。"
    ),
    narrativeParagraphs: {
      en: [
        "Fishermen who paddled out before dawn sometimes saw Tingoi sitting on a black stone, combing her long hair with a comb of bone. Any man who looked too long forgot how to row. The wise ones lowered their eyes, finished their nets, and brought home twice the usual catch.",
        "Once a young fisherman named Konga caught Tingoi watching him from the reeds. She smiled and gave him a small mirror and said, 'Take this, but never speak of me, or both of us lose.' Konga's nets filled every morning. He bought new boats, then new houses, and his family grew rich beyond the village.",
        "On a feast night, friends pressed him about his luck, and the palm wine loosened his tongue. He laughed and described the woman in the river. The next dawn his boats were empty, his houses dark, his mirror cracked. Tingoi was not seen on her stone for many seasons, and the elders still warn young men not to brag about gifts from the water.",
      ],
      zh: [
        "天未亮就出海的渔夫，有时会看见婷瓦伊坐在一块黑石上，用骨梳梳着长发。谁看得太久，便忘了如何划桨。有经验的人低下眼，把网收完，归途网舱里满载平日两倍的鱼。",
        "有一回，年轻渔夫孔加在芦苇丛里看见婷瓦伊回望自己。她微笑着递给他一面小镜子，说：“收着，但永远别提我，否则我们都会失去。”孔加从此每天清晨满网而归，他买下新船、新屋，家境远超村中众人。",
        "一个节庆夜，朋友们不停追问他为何这么走运，几杯棕榈酒下肚，他的舌头便松了。他大笑着描述了那位水中的女子。第二天清晨，他的渔船空空，他的屋子昏暗，镜子裂成两半。婷瓦伊好几个季节没再坐到那块石头上。直到今天，长老们仍告诫年轻人，别夸耀水中送来的礼物。",
      ]
    },
    themes: [text("secrecy", "守密"), text("water spirit", "水灵"), text("boasting", "张扬")],
    tags: [text("mende", "门德"), text("tingoi", "婷瓦伊"), text("mami wata", "水妈妈"), text("river", "河流")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mami_Wata"
  },
  {
    id: "agemo-chameleon",
    title: text("Agemo the Slow Messenger", "慢使者阿格莫"),
    country: text("Nigeria", "尼日利亚"),
    region: text("West Africa", "西非"),
    culture: text("Yoruba", "约鲁巴"),
    latitude: 7.55,
    longitude: 4.55,
    category: "myth",
    summary: text(
      "Olódùmarè sends two messengers to humanity, a chameleon with the gift of eternal life and a lizard with death; the chameleon's slow steps cost the world its immortality.",
      "至高神奥洛杜马雷派两位使者下到人间，变色龙带来永生，蜥蜴带来死亡；变色龙慢吞吞的步伐，让人类永远错过了不死的赐予。"
    ),
    background: text(
      "Among the Yoruba of southwestern Nigeria, Olódùmarè is the unknowable sky-source, and this story explains why human life ends.",
      "在尼日利亚西南部的约鲁巴文化中，奥洛杜马雷是不可知的天源，这则故事解释了人为何会死。"
    ),
    narrativeParagraphs: {
      en: [
        "Olódùmarè the sky-source watched the first humans build their towns and worried that they would grow tired without a clear future. He carved two small messages out of a piece of sky and gave them to two messengers: to Agemo the chameleon a leaf that said 'You will live without end', and to Alagba the lizard a leaf that said 'You will die'.",
        "Agemo set out across the sky path first, turning his colours to match every leaf, stopping to taste every insect. Alagba ran straight, looking neither left nor right. By the time Agemo reached the first town with his slow careful tread, Alagba was already inside, reading the leaf aloud before the gathered people.",
        "The humans heard the lizard's word first and so it became true. When the chameleon finally arrived and unrolled his bright leaf, the people listened politely, but the world had already accepted death. Yoruba elders still say that life would have been endless, if only the chameleon had hurried.",
      ],
      zh: [
        "天源奥洛杜马雷俯看人类建起最早的城镇，担心他们没有明确的归宿会渐生倦意。他从天上裁下两片小叶子作为消息：交给变色龙阿格莫的一片写着“你们将永生不死”，交给蜥蜴阿拉巴的一片写着“你们将必死”。",
        "阿格莫先出发，他变换颜色与每一片叶子相称，逢虫便停下来品尝。阿拉巴一路直奔，从不左顾右盼。等阿格莫小心翼翼地走到第一座城镇，阿拉巴已先一步进城，把那片关于死亡的叶子大声念给众人听。",
        "人们先听到的是蜥蜴的话，那句话便成了真。变色龙终于抵达，铺开他鲜亮的叶子。人们礼貌地听完，但世界已经接受了死亡。约鲁巴的长老至今仍说，要是变色龙肯走快一点，人世本可以无尽。",
      ]
    },
    themes: [text("mortality", "必死"), text("messenger", "使者"), text("delay", "迟到")],
    tags: [text("yoruba", "约鲁巴"), text("chameleon", "变色龙"), text("olodumare", "奥洛杜马雷"), text("origin of death", "死亡起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yoruba_religion"
  },
  {
    id: "nzambi-distant-sky",
    title: text("Nzambi a Mpungu, the Distant Sky-Maker", "遥远的天造者恩赞比·阿·姆蓬古"),
    country: text("Democratic Republic of the Congo", "刚果民主共和国"),
    region: text("Central Africa", "中非"),
    culture: text("Kongo", "刚果"),
    latitude: -4.4419,
    longitude: 15.2663,
    category: "religion",
    summary: text(
      "Nzambi shapes the world from the great river and then withdraws into the sky, leaving spirits and ancestors to speak in his place.",
      "恩赞比从大河中塑造了世界，然后退入天上，把人间的事务交给灵与祖先代为发言。"
    ),
    background: text(
      "Among the Kongo peoples Nzambi a Mpungu is the high creator, present but distant, addressed only through ancestors and basimbi spirits.",
      "在刚果各民族中，恩赞比·阿·姆蓬古是至高的造物者，他存在却遥远，凡人只能借由祖先与“巴辛比”灵祇向他祷告。"
    ),
    narrativeParagraphs: {
      en: [
        "Before the forests grew tall and the rivers carved their beds, Nzambi a Mpungu stood at the edge of the great water and called the land out of the mud. He named each tree, each river, each animal, and gave the first people a place between the salt sea and the falls.",
        "When the work was done, Nzambi rose into the sky and did not come back down. He gave the small gods, the basimbi, the care of springs and forests, and he made the dead the link between living people and his quiet presence. From then on no one prayed to Nzambi directly: it would be like shouting up at a star.",
        "Yet his shape stayed in the world. The Kongo say that every cooking fire is a sign of his first fire, every river a remembered word, every child a small piece of the breath he poured into the mud. To speak to Nzambi, you tend the family altar and you greet the ancestors, and through them the sky-maker hears.",
      ],
      zh: [
        "在森林尚未挺拔、河流尚未深刻成形之前，恩赞比·阿·姆蓬古站在大水的岸边，把陆地从淤泥中召唤出来。他为每一棵树、每一条河、每一只动物命名，将最早的人安置在咸海与瀑布之间。",
        "造完世界，恩赞比升上天空，再没下来。他把泉源和森林托付给“巴辛比”小神，让逝者成为生者与他静默存在的桥梁。从此再没有人直接向他祷告，那就像对着一颗星星大喊。",
        "可他的形迹仍留在世上。刚果人说，每堆炊火都是他最初之火的一缕，每条河流都是他说过的一句话的回声，每个新生儿都是他注入泥土那口气的一点延续。要跟恩赞比说话，就在家中祖坛上添柴，向先人问候，天上的造者便会借他们听见。",
      ]
    },
    themes: [text("withdrawn god", "隐退之神"), text("ancestors", "祖先"), text("creation", "创世")],
    tags: [text("kongo", "刚果"), text("nzambi", "恩赞比"), text("basimbi", "巴辛比"), text("ancestor altar", "祖坛")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nzambi_a_Mpungu"
  },
  {
    id: "luba-mbidi-kiluwe",
    title: text("Mbidi Kiluwe and the Luba Kingship", "姆比迪·基鲁韦与卢巴王权"),
    country: text("Democratic Republic of the Congo", "刚果民主共和国"),
    region: text("Central Africa", "中非"),
    culture: text("Luba", "卢巴"),
    latitude: -8.8333,
    longitude: 25.3833,
    category: "history",
    summary: text(
      "A stranger hunter from the east marries into a Luba village and teaches the chief's children how to sit, eat, and rule like kings, founding the line of the Luba sacred kingship.",
      "一位来自东方的猎人入赘卢巴村落，教酋长的儿子们如何像王者一样起坐、进食、治理，开创了卢巴神圣王统。"
    ),
    background: text(
      "Luba oral tradition (the genesis of the Luba Empire on the upper Lualaba River) gives Mbidi Kiluwe as the foreign hunter who transforms a chiefdom into a sacred kingship.",
      "卢巴口传史诗（卢巴帝国发源于上鲁阿拉巴河流域）讲述外乡猎人姆比迪·基鲁韦如何把酋长部落变成神圣王权。"
    ),
    narrativeParagraphs: {
      en: [
        "Old chief Nkongolo ruled the upper Lualaba like a storm. He laughed with his mouth open, drank in the open, and spoke with hot anger. One day a tall hunter arrived from the east, his teeth filed, his eyes lowered, his words slow. His name was Mbidi Kiluwe.",
        "Mbidi married Nkongolo's sister and lived among the people. He hid his face when he drank, ate alone, and never let the sun fall on his teeth. The villagers thought him strange but watched him closely. He taught Nkongolo's nephews the manners of a sacred king: silence at meals, separation of body and crowd, distance even in joy.",
        "When Mbidi returned east, his sons stayed and quarrelled with Nkongolo. After a long war the storm-chief was overthrown, and Mbidi's sons took the kingship, joining the manners of the east to the land of the Luba. From them descended every later king of the Luba, who eats in private to remember the lesson of the quiet hunter.",
      ],
      zh: [
        "上鲁阿拉巴河流域的老酋长恩孔戈洛像一场雷暴。他张口大笑，当众饮酒，言语火辣。一天，一位高大的猎人从东方走来，门牙磨成尖形，目光下垂，说话缓慢，名字叫姆比迪·基鲁韦。",
        "姆比迪娶了恩孔戈洛的妹妹，住在族人之中。他喝水时遮住脸，独自进食，从不让阳光照到他的牙齿。村民觉得他古怪，却也细细观察。他把神圣王者的礼仪教给恩孔戈洛的外甥们：用餐时静默，身位与众人保持距离，连欢喜时也不失分寸。",
        "姆比迪东归后，他的儿子们留下来，与恩孔戈洛发生争斗。漫长战乱之后，雷暴一样的旧酋长被推翻，姆比迪的儿子接过王权，把东方的礼仪与卢巴的土地结合在一起。后来的每一代卢巴王都是他们的后裔，至今仍在私下进食，以纪念那位寡言猎人留下的训诫。",
      ]
    },
    themes: [text("foreign founder", "外来奠基"), text("sacred kingship", "神圣王权"), text("etiquette", "礼仪")],
    tags: [text("luba", "卢巴"), text("mbidi", "姆比迪"), text("nkongolo", "恩孔戈洛"), text("lualaba", "鲁阿拉巴")],
    sourceUrl: "https://en.wikipedia.org/wiki/Luba_Empire"
  },
  {
    id: "nyabingi-mountain-spirit",
    title: text("Nyabingi, Spirit of the Volcanoes", "火山之灵尼亚宾吉"),
    country: text("Uganda", "乌干达"),
    region: text("East Africa", "东非"),
    culture: text("Bakiga", "巴基加"),
    latitude: -1.2461,
    longitude: 29.8964,
    category: "religion",
    summary: text(
      "A queen wronged by a king's broken promise becomes the spirit Nyabingi, whose voice rises through generations of women priests against unjust rulers.",
      "一位被国王毁约伤害的王后化作灵祇尼亚宾吉，她的声音借着一代代女祭司，向不义的统治者发出怒吼。"
    ),
    background: text(
      "Nyabingi is a powerful spirit of the Bakiga and neighbouring peoples around the Virunga volcanoes, whose female mediums led resistance against colonial rule in the early twentieth century.",
      "尼亚宾吉是维龙加火山附近巴基加人与邻近民族共同信奉的强大灵祇，二十世纪初她的女祭司曾领导反对殖民统治的起义。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago a queen named Kitami ruled a small kingdom in the green hills below the Virunga volcanoes. She was promised marriage by a powerful neighbouring king, but he took another woman and sent Kitami a basket of poison instead. She died in grief and her spirit rose into the cones of smoke above the mountains.",
        "From there she answered women who climbed up alone to speak to her. She listened to widows, to mothers of warriors, to women whose fields had been seized. She gave them words to carry back down, and the words made unjust chiefs uneasy. Whenever a ruler grew cruel, a Nyabingi medium would appear in the village square and speak in the queen's voice.",
        "When colonial officers tried to silence her in the early twentieth century, the mediums called the people up the volcano slopes and led the Nyabingi rebellions. Even after the uprisings ended, the spirit did not. She is said to whisper still at every spring high in the lava rock, telling women whose grievances are heavy that they may carry her name down to the market.",
      ],
      zh: [
        "很久以前，名叫基塔米的王后统治着维龙加火山下青翠丘陵中的小国。她原本与邻国强大的国王订下婚约，国王却另娶他人，还送来一筐毒物代替彩礼。她在悲愤中死去，灵魂升入火山口缭绕的烟柱里。",
        "自那以后，她回应那些独自登山向她诉说的女人。她倾听寡妇、战士母亲、被夺去田地的女人的话，给她们带回话语，让不义的酋长心神不宁。每当某位统治者变得残暴，一位尼亚宾吉的女祭司便会出现在村中广场，用王后的声音说话。",
        "二十世纪初殖民官员想压制她，女祭司们便把人引上火山坡，领导了多次“尼亚宾吉起义”。起义平息后，灵祇并未沉寂。据说在熔岩高处的每一处泉眼边，她仍轻语，告诉冤屈深重的女人——她们可以借她的名，把怨声带到山下的集市。",
      ]
    },
    themes: [text("female priesthood", "女祭司"), text("justice", "正义"), text("resistance", "反抗")],
    tags: [text("bakiga", "巴基加"), text("nyabingi", "尼亚宾吉"), text("virunga", "维龙加"), text("priestess", "女祭司")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nyabinghi"
  },
  {
    id: "mokele-mbembe",
    title: text("Mokele-Mbembe of the Likouala", "利夸拉沼泽的莫凯莱-姆邦贝"),
    country: text("Republic of the Congo", "刚果共和国"),
    region: text("Central Africa", "中非"),
    culture: text("Bantu", "班图"),
    latitude: 1.6,
    longitude: 17.5,
    category: "creature",
    summary: text(
      "In the flooded forests around Lake Télé, a long-necked beast called Mokele-Mbembe is said to overturn canoes and forbid any hunter to speak its name aloud.",
      "在泰莱湖周围被洪水淹没的森林里，传说有一头长颈巨兽“莫凯莱-姆邦贝”会掀翻独木舟，没人敢在它的地盘上说出它的名字。"
    ),
    background: text(
      "Mokele-Mbembe is a celebrated creature of Bantu folklore in the Likouala wetlands of the Republic of the Congo, often described as river-dwelling and forbidden to name.",
      "莫凯莱-姆邦贝是刚果共和国利夸拉湿地班图民间最有名的神秘动物，传说栖于水中，名字不得轻易出口。"
    ),
    narrativeParagraphs: {
      en: [
        "The Likouala wetlands swallow rivers without giving them back. Travellers say the swamp will let a canoe drift for hours through mossed trees before opening into a still water as wide as a sky. In that water lives Mokele-Mbembe, the one who stops the rivers.",
        "Old fishermen describe a long curving neck breaking the surface and a back that ripples like a hill of mud. The beast does not eat the people; it eats the elephants that come to drink. But it tolerates no canoe on its still lake, and any hunter who shouts its name into the trees loses his way back to the village.",
        "When a child asks where Mokele-Mbembe sleeps, the elders point only toward the still water and shake their heads. Outsiders have searched for it with cameras and recorders, but the forest has its own opinions. To the people of the swamp, the rule is older than any search: speak softly near deep water, and do not measure what does not want to be measured.",
      ],
      zh: [
        "利夸拉湿地能把河流整段吞下去再不还回来。旅行者说，独木舟会在长满苔藓的树丛间漂上几个钟头，才豁然进入一片天空那么宽的静水。莫凯莱-姆邦贝就住在那片静水里——它是阻塞河流的那一个。",
        "老渔夫描述它伸出水面那道长长弯曲的颈，背脊像一座起伏的泥丘。它不吃人，只吃来饮水的大象。可它的静水之上容不下独木舟，任何在林中喊出它名字的猎人，都会在归途中迷路。",
        "孩子问莫凯莱-姆邦贝在哪里睡觉，长老只朝静水方向努嘴，摇摇头。外人带着相机和录音机来找过它，可森林自有主张。湿地居民的规矩比任何探险都古老：在深水边放轻声音，别去丈量那些不愿被丈量的东西。",
      ]
    },
    themes: [text("forbidden name", "禁名"), text("hidden waters", "隐匿之水"), text("monster", "巨兽")],
    tags: [text("likouala", "利夸拉"), text("congo", "刚果"), text("lake tele", "泰莱湖"), text("river beast", "水兽")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mokele-mbembe"
  },
  {
    id: "obassi-fire-theft",
    title: text("Obassi and the Theft of Fire", "奥巴西与盗火"),
    country: text("Cameroon", "喀麦隆"),
    region: text("Central Africa", "中非"),
    culture: text("Ekoi", "埃科伊"),
    latitude: 5.75,
    longitude: 8.4833,
    category: "myth",
    summary: text(
      "When Obassi the sky god refuses fire to humanity, a small boy with a wisp of grass climbs into his kitchen and brings the first ember down to earth.",
      "天神奥巴西不肯把火赐给人类，一个小男孩用一束草潜入他的厨房，把第一颗火星偷带回人间。"
    ),
    background: text(
      "The Ekoi of the Cameroon–Nigeria border tell of two great gods: Obassi Osaw the sky, generous yet distant, and Obassi Nsi the earth, who teaches the harder lessons.",
      "喀麦隆—尼日利亚边境的埃科伊人讲述两位大神：天上的奥巴西·奥绍慷慨却疏远，地上的奥巴西·恩西教导人最严苛的功课。"
    ),
    narrativeParagraphs: {
      en: [
        "In the first days Obassi Osaw the sky god kept fire in a small clay hearth beside his sleeping mat. People on the earth ate raw roots and went to bed cold. Obassi Nsi, the earth god, complained on their behalf, but Obassi Osaw said the fire was his and would burn through any village that mishandled it.",
        "A boy named Akpan climbed the cobweb ladder one night with a hollow stem of dry grass. He crept behind the hearth, pretended to be the spirit of a stillborn child, and asked Obassi Osaw to fan the embers to keep him warm. When the sky god turned to fan the fire, Akpan dipped his grass into the hottest coal and slid away while the sparks burned a small line into his palm.",
        "By the time Akpan reached the earth, the grass had become a torch. Obassi Osaw came down the next morning and saw smoke rising from every cooking pot. He laughed sadly and gave the people a rule: fire is yours now, but it will eat you if you stop watching it. To this day the Ekoi say a burnt hand is a small bill paid to Akpan's brave climb.",
      ],
      zh: [
        "万物初生时，天神奥巴西·奥绍把火放在自己睡席旁的小泥炉里。地上的人吃生根，夜里冷得发抖。土地神奥巴西·恩西替人类抱怨，可天神说，那是他的火，谁村子里有人玩火，整村都要烧光。",
        "一个名叫阿克潘的男孩，深夜顺着蛛丝梯往天上爬，手里握着一根干草空管。他绕到泥炉后面，假装自己是早夭婴儿的魂，请奥巴西·奥绍替他扇火取暖。天神弯腰扇炭时，阿克潘把草管伸进最红的那块炭，趁火星烫出一道小线烙在自己掌心，悄悄抽身退下。",
        "他下到人间时，那束草已变成火炬。第二天清晨，奥巴西·奥绍俯瞰人间，看见每口锅上都冒着烟。他苦笑着给人间立下规矩：火现在归你们，可一旦放任它，它就会把你们吞掉。直到今天，埃科伊人都说，烧伤一只手不过是替阿克潘那次勇敢的攀爬付了一点小账。",
      ]
    },
    themes: [text("fire theft", "盗火"), text("courage", "勇气"), text("origin", "起源")],
    tags: [text("ekoi", "埃科伊"), text("obassi", "奥巴西"), text("fire", "火"), text("sky climb", "攀天")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ekoi_people"
  },
  {
    id: "nyikang-shilluk",
    title: text("Nyikang, Founder of the Shilluk", "希卢克人的先祖尼卡昂"),
    country: text("South Sudan", "南苏丹"),
    region: text("East Africa", "东非"),
    culture: text("Shilluk", "希卢克"),
    latitude: 9.5333,
    longitude: 31.65,
    category: "history",
    summary: text(
      "Nyikang fights the river itself, makes a kingdom along the Nile, and never quite dies—every Shilluk king is said to share his single ongoing spirit.",
      "尼卡昂与尼罗河本身搏斗，沿河建立王国，自己却从未真正死去——每一位希卢克王都被视为他同一灵魂的延续。"
    ),
    background: text(
      "The Shilluk along the White Nile believe their kings are reincarnations of Nyikang, who founded the kingdom around the fifteenth century.",
      "白尼罗河沿岸的希卢克人相信，他们的国王都是约十五世纪建国的先祖尼卡昂的转世。"
    ),
    narrativeParagraphs: {
      en: [
        "Nyikang came from a country in the south whose own king had killed his father. He carried his brother on his shoulder and a long spear in his hand, and he walked north along the White Nile until he met the river itself standing as a man with the head of a crocodile. Nyikang fought it, refused to be eaten, and crossed.",
        "On the far bank he gathered the cattle herders of the plain and named them his people. He taught them to mould rain from clay, to stake their cattle by colour, and to build their reed villages along the high ridges so the floods could not take them. He built a small wooden shrine for his old spear and said his strength would always wait there.",
        "When Nyikang's body weakened, he did not die in the open. He walked into the wind and disappeared. Since that day every Shilluk king at his crowning sits in Nyikang's shrine and lets the old spirit step into him. The Shilluk say there has only ever been one king on the Nile; the names change, but Nyikang has never put down his spear.",
      ],
      zh: [
        "尼卡昂来自南方一个国度，那里的国王曾杀死他的父亲。他把弟弟扛在肩上，握着一柄长矛，沿白尼罗河北行，直到河本身化作鳄首人身挡在前面。尼卡昂与之搏斗，不肯被吞，强行涉过。",
        "到对岸后，他召集平原上的牧牛人，立他们为自己的子民。他教他们用泥塑雨、按毛色拴牛、把芦苇村寨建在高脊上避开洪水。他还为自己那柄旧矛盖了一座小小的木祠，说自己的力量会永远在那里等候。",
        "尼卡昂的身躯衰老时，他没有死在众人面前。他迎风走入空旷，消失了。自那以后，每一位希卢克国王在加冕时，都坐进尼卡昂的祠堂，让那古老的灵魂走入自己。希卢克人说，尼罗河沿岸只有过一位王——名字会换，但尼卡昂从未放下他的矛。",
      ]
    },
    themes: [text("reincarnated king", "王者轮回"), text("founder", "先祖"), text("river", " 河流")],
    tags: [text("shilluk", "希卢克"), text("nyikang", "尼卡昂"), text("white nile", "白尼罗河"), text("sacred kingship", "神圣王权")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nyikang"
  },
  {
    id: "enkai-maasai-cattle",
    title: text("Enkai Gives the Maasai Their Cattle", "恩凯赐给马赛人牛群"),
    country: text("Kenya", "肯尼亚"),
    region: text("East Africa", "东非"),
    culture: text("Maasai", "马赛"),
    latitude: -1.4,
    longitude: 35.1,
    category: "myth",
    summary: text(
      "Enkai the sky god lowers a rope of cattle down to the first Maasai, declaring them the only true keepers of cows for as long as the earth turns.",
      "天神恩凯放下一根挂满牛的天绳给最早的马赛人，宣布他们将是世上唯一的牛之主人，只要大地还在转动。"
    ),
    background: text(
      "The Maasai of the Rift Valley trace their pastoral identity to a covenant with Enkai (also called Engai), the rain-bringing sky god.",
      "肯尼亚大裂谷的马赛人将自己的游牧身份追溯到与降雨天神恩凯（也作“恩盖”）所立的圣约。"
    ),
    narrativeParagraphs: {
      en: [
        "When the world was young Enkai held all the cattle in the sky and the earth was empty of large beasts. A man named Maasinta sat under a fig tree at dawn and called up to Enkai, asking why his people had no wealth. Enkai answered by lowering a long umbilical-rope of bark down through the clouds, and along it walked cow after cow, all colours, all gentle.",
        "Enkai told Maasinta: 'These are now yours and your children's. No other people on the earth shall keep cattle by right. Watch them, count them, sing to them, and they will follow you to every pasture I open.' Maasinta knelt, the cattle came down, and the rope was drawn back up.",
        "Long after, when the Maasai see a Dorobo hunter or a Kikuyu farmer with a cow, they remember the covenant. They are taught not to mock but to feel responsible—each cow not in Maasai hands is, they say, a piece of the rope that needs to be guided home. That belief shaped their whole pastoral life, and Enkai is still greeted at every dawn before the herd goes out.",
      ],
      zh: [
        "世界尚轻时，恩凯把所有牛都留在天上，地上没有大兽。一个名叫马阿辛塔的人在清晨坐在无花果树下，向天上的恩凯发问：为什么我的族人没有财富？恩凯放下一根用树皮编成的长长“脐绳”，牛群顺着绳子从云间一头接一头地走下来，毛色各异，性情温顺。",
        "恩凯对马阿辛塔说：“它们从此属于你和你的子孙。世上其他民族都没有名分牧牛。看顾它们、清点它们、对它们唱歌，它们就会跟你走遍我所开放的每一片草场。”马阿辛塔跪下，牛群落地，绳子收回天上。",
        "很多代以后，马赛人若看见多罗博猎人或基库尤农人手里牵着牛，便会想起这份圣约。他们被教导不去嘲笑，而要感到责任——每一头不在马赛人手里的牛，都是那根绳子上需要被引回家的一段。这一信念塑造了他们整套的游牧生活，恩凯至今仍在每天清晨牛群出栏之前被人问候。",
      ]
    },
    themes: [text("covenant", "盟约"), text("cattle", "牛群"), text("pastoral identity", "游牧身份")],
    tags: [text("maasai", "马赛"), text("enkai", "恩凯"), text("rift valley", "大裂谷"), text("cattle rope", "天绳")],
    sourceUrl: "https://en.wikipedia.org/wiki/Maasai_people#Religion"
  },
  {
    id: "gikuyu-mumbi",
    title: text("Gĩkũyũ and Mũmbi at Mount Kenya", "吉库尤与穆姆比在肯尼亚山下"),
    country: text("Kenya", "肯尼亚"),
    region: text("East Africa", "东非"),
    culture: text("Kikuyu", "基库尤"),
    latitude: -0.1521,
    longitude: 37.3084,
    category: "myth",
    summary: text(
      "From the slopes of Mount Kenya, Gĩkũyũ and his wife Mũmbi receive nine daughters who become the founding clans of the Kikuyu people.",
      "在肯尼亚山的山坡上，吉库尤与妻子穆姆比生下九个女儿，她们成为基库尤人九个氏族的始祖。"
    ),
    background: text(
      "Mount Kenya, called Kĩrĩnyaga, 'the resting place of brightness', is the sacred origin of the Kikuyu nation in central Kenya.",
      "肯尼亚山在基库尤语里叫“基里尼亚加”，意为“光明的栖所”，是肯尼亚中部基库尤民族的发源地。"
    ),
    narrativeParagraphs: {
      en: [
        "Ngai the sky-creator took Gĩkũyũ to the peak of Kĩrĩnyaga and pointed to a green ridge below the snow. 'That place,' Ngai said, 'is yours.' Gĩkũyũ went down and found his wife Mũmbi waiting at a grove of mũkũrwe trees. They built their first homestead in that grove, and from then on every prayer of the Kikuyu turned back toward the mountain.",
        "Mũmbi bore nine daughters and one more whose name is never spoken—'and-a-fraction', the cautious tenth. Each daughter was beautiful and could not find a husband. Gĩkũyũ climbed back to Kĩrĩnyaga and Ngai told him to slaughter a goat and pour the blood on the mũkũrwe roots. By morning ten young men stood beside the daughters.",
        "The daughters and their husbands founded the nine clans of the Kikuyu, each carrying the mother's name. Even today a Kikuyu child belongs to one of those clans, and when they speak of home, they speak of Mũmbi, and when they look for blessing, they look toward Kĩrĩnyaga and remember that nothing about the people began without the mountain.",
      ],
      zh: [
        "天神恩盖把吉库尤带到基里尼亚加的山巅，指向雪线下那道翠绿的山脊：“那块地，是你的。”吉库尤下山，在一片穆库尔韦树林里遇见等候着他的妻子穆姆比。他们在树林中建起第一个家园，自此基库尤人的每一句祷词都要回望这座山。",
        "穆姆比生下九个女儿，再加上一个名字不能轻易说出口的小女儿——“九又分之一”，谨慎的第十位。每个女儿都美丽出众，却找不到夫婿。吉库尤再登基里尼亚加，恩盖让他宰一只山羊，把血洒在穆库尔韦的根上。第二天清晨，十个青年男子已站在女儿们身边。",
        "女儿们和她们的丈夫开创了基库尤的九个氏族，每个氏族都沿用母亲的名字。直到今日，每个基库尤孩子都属于其中一族。他们说“家”，便是穆姆比；他们求祝福，便望向基里尼亚加——记得这个民族的一切，没有山，便无从开始。",
      ]
    },
    themes: [text("origin clans", "氏族起源"), text("sacred mountain", "圣山"), text("matrilineal name", "母系命名")],
    tags: [text("kikuyu", "基库尤"), text("mount kenya", "肯尼亚山"), text("ngai", "恩盖"), text("nine daughters", "九女")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kikuyu_people"
  },
  {
    id: "fumo-liyongo",
    title: text("Fumo Liyongo Sings His Death", "富莫·利永戈唱出自己之死"),
    country: text("Kenya", "肯尼亚"),
    region: text("East Africa", "东非"),
    culture: text("Swahili", "斯瓦希里"),
    latitude: -2.2698,
    longitude: 40.9009,
    category: "epic",
    summary: text(
      "The Swahili hero Liyongo, betrayed by his nephew, breaks his prison with a song and falls only when his own son drives a copper needle into his secret weak spot.",
      "斯瓦希里英雄利永戈被外甥出卖，用一曲歌震破囚牢；最终他被亲生儿子用一根铜针扎中身上唯一的弱点，才倒下。"
    ),
    background: text(
      "Fumo Liyongo is the most famous figure of Swahili coastal epic, sung in tendi poems from Pate, Lamu, and the Kenyan coast.",
      "富莫·利永戈是斯瓦希里海岸史诗中最负盛名的人物，肯尼亚海岸帕特、拉穆等地仍以“滕迪”长诗传唱他的故事。"
    ),
    narrativeParagraphs: {
      en: [
        "Liyongo of Pate was so tall that the soldiers of his nephew the sultan could not stand level with his shoulder. The sultan feared him and called him to a feast as a guest, then ordered him bound and thrown into a stone cell. Liyongo asked for one favour: an instrument and a song.",
        "He sang a long tendi while strumming the gabbus, weaving into it the time he would escape and how it could be done. His mother in the audience listened, and on the next visit she carried a fish whose belly held a file. When the song reached its last line, Liyongo had already cut his irons and walked out past the sleeping guards.",
        "Years later the sultan asked Liyongo's young son to learn his father's secret. The boy crept close, learned that his father could be killed only by a copper needle pressed into his navel, and did the deed for a bag of gold. Liyongo straightened against a baobab tree, drew his great bow, and stood like that, upright in death, until the wood of the bow gave way. The people sang the song he had taught them, and the sultan never slept well again.",
      ],
      zh: [
        "帕特的利永戈身材如此高大，他外甥即苏丹的卫队连肩头都够不到。苏丹忌惮他，把他作客人邀来宴席，转手把他绑了，丢进一间石牢。利永戈只求一件事：给他一把乐器和一支歌。",
        "他抱着加布斯琴唱起长长的“滕迪”，把脱身的时辰和方式都织进唱词。他母亲在听众中听出门道，下一次探监时藏一柄锉刀在鱼腹里送进去。等歌唱到最后一句，利永戈已经锉断脚镣，从酣睡的看守身边走了出去。",
        "多年后，苏丹找来利永戈年幼的儿子，让他探听父亲的弱点。男孩贴近父亲，得知他全身只有肚脐能用铜针扎透，便以一袋金子换得这件事。利永戈靠着一棵猴面包树挺直身躯，挽弓不放，至死仍站着，直到弓木自己崩断。族人传唱他亲手教过的那支歌，从此苏丹再没睡过好觉。",
      ]
    },
    themes: [text("betrayal", "背叛"), text("singing prison", "以歌破狱"), text("hidden weakness", "隐藏弱点")],
    tags: [text("swahili", "斯瓦希里"), text("liyongo", "利永戈"), text("pate", "帕特"), text("tendi", "滕迪诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Liyongo"
  },
  {
    id: "zafy-rakelimalaza",
    title: text("Rakelimalaza and the Talking Stones", "拉凯利马拉萨与会说话的石头"),
    country: text("Madagascar", "马达加斯加"),
    region: text("East Africa", "东非"),
    culture: text("Merina", "梅里纳"),
    latitude: -18.8792,
    longitude: 47.5079,
    category: "folktale",
    summary: text(
      "A clever Merina herder named Rakelimalaza wins a kingdom by making the king's stones speak with hidden tunnels, and learns that cleverness without honesty travels only as far as the trick.",
      "聪明的梅里纳牧人拉凯利马拉萨借着暗道让国王的石头说话，从而赢得一个王国，却也学到——没有诚意的机巧，只能走到把戏被识破为止。"
    ),
    background: text(
      "Malagasy oral tradition is rich in trickster tales; Rakelimalaza, 'Little Famous One', appears across the central highlands.",
      "马达加斯加口传文学中机巧的故事极多，“小有名气”拉凯利马拉萨在中部高地各处都有传说。"
    ),
    narrativeParagraphs: {
      en: [
        "Rakelimalaza was a herder so small that the other boys laughed at him for carrying his stick on his shoulder like a sword. He listened to all the talk of the village and remembered each saying. When the king of Ambohimanga announced he would marry his daughter to anyone who could make the great stones around the palace speak, Rakelimalaza put down his stick and walked toward the palace.",
        "On the way he dug small tunnels under three of the stones and hid friends inside them with hollow reeds. When the day came, the king and the court watched as Rakelimalaza called each stone by name. From under each stone a voice answered, complimenting the king's coat and his rice. The court gasped and the king blessed the marriage.",
        "Rakelimalaza lived in the palace as a son-in-law, but a year later a heavy rain washed the soil from one of his tunnels. The friend inside was found laughing. The king did not punish Rakelimalaza, only shook his head: 'A trick may carry you up the hill, but it cannot keep you from sliding back down.' Rakelimalaza went home humbler, and the saying entered Merina speech.",
      ],
      zh: [
        "拉凯利马拉萨是个矮小的牧人，村里别的男孩取笑他把放牛棍像剑一样扛在肩上。他默默把全村的闲言碎语都记在心里。安博希芒加的国王宣布，谁能让王宫四周那些大石头开口说话，就把女儿许配给他。拉凯利马拉萨放下牧棍，朝王宫走去。",
        "他在路上选了三块大石头，悄悄在底下挖了狭窄的暗道，让几位朋友带着空心芦苇藏进去。仪式那天，他在王公贵族面前一块一块呼喊石头的名字，每块石头底下都有声音应答，称赞国王的长袍和稻米。满堂哗然，国王当场祝福婚约。",
        "拉凯利马拉萨在王宫住下，做了一年驸马。一场暴雨冲塌了一条暗道，发现里头那位朋友正笑得喘不过气。国王没有惩罚他，只摇头说：“机巧能把人抬上山头，却没法挡你滑下来。”拉凯利马拉萨更谦逊地回了家乡，这句话也从此进入梅里纳人的日常用语。",
      ]
    },
    themes: [text("cleverness", "机巧"), text("honesty", "诚信"), text("court trial", "王廷考验")],
    tags: [text("merina", "梅里纳"), text("madagascar", "马达加斯加"), text("trickster", "机巧者"), text("talking stones", "说话的石头")],
    sourceUrl: "https://en.wikipedia.org/wiki/Folklore_of_Madagascar"
  },
  {
    id: "kaggen-mantis-moon",
    title: text("|Kaggen the Mantis Throws the Moon", "|卡根螳螂将月亮抛上天"),
    country: text("Botswana", "博茨瓦纳"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("San", "桑人"),
    latitude: -22.3285,
    longitude: 24.6849,
    category: "myth",
    summary: text(
      "|Kaggen the praying mantis dreams the world's first eland, then in mourning hurls his sandal into the sky, where it becomes the moon.",
      "|卡根螳螂梦出了世上最早的羚羊，他在悲恸中把自己的草鞋抛上天空，化成月亮。"
    ),
    background: text(
      "Among the San of the Kalahari, |Kaggen the Mantis is the dreamer who shapes the eland, the moon, and the order of life in the dunes.",
      "在卡拉哈里沙漠的桑人传统中，螳螂|卡根是梦的造作者，他创造了大羚羊、月亮，并安置了沙漠中的生命秩序。"
    ),
    narrativeParagraphs: {
      en: [
        "|Kaggen the praying mantis sat at the edge of a waterhole and dreamed of a creature with long sloping shoulders and gentle eyes. When he opened his eyes the first eland stood in front of him, drinking. |Kaggen loved the eland more than any other being he had ever shaped, and he hid it from the hunters by leading it deeper into the dune-sea.",
        "His sons did not understand. They tracked the eland and killed it for meat. |Kaggen wept by the dry waterhole, and tried to bring his beloved back with breath and song. The eland's blood would not return, but he gathered fat from its belly, put it on his sandal, and threw the sandal into the sky.",
        "The sandal turned over and became the moon. From that night, the moon went through phases like the slow climb back from sorrow: thin, then full, then thin, then full again. The San say grief is not endless because the mantis showed them how to make a moon out of it, and they still speak softly when an eland walks past their fire.",
      ],
      zh: [
        "螳螂|卡根坐在水坑边，梦见一只肩斜眼柔的兽。他睁开眼时，最早的一头大羚羊已站在他面前喝水。|卡根爱这只羚羊胜过他塑造过的一切，他把它引向沙海深处，避开猎人。",
        "他的儿子们不明白这份珍视，循迹找到了那只羚羊，把它杀来吃肉。|卡根在干涸的水坑边痛哭，用气息和歌声想唤回挚爱。羚羊的血回不来了，他便从它的腹部取出脂肪，抹在自己的草鞋上，把鞋抛向天空。",
        "草鞋翻了一个身，化作月亮。从那一夜起，月亮如悲伤缓缓爬出又落下，时盈时缺。桑人说，悲伤不会无尽，因为螳螂教会了他们如何把悲伤捏成一轮月亮；至今他们看见羚羊从火堆旁走过时，仍会压低声音。",
      ]
    },
    themes: [text("creation", "创造"), text("grief", "哀悼"), text("moon origin", "月之起源")],
    tags: [text("san", "桑人"), text("kalahari", "卡拉哈里"), text("eland", "大羚羊"), text("mantis", "螳螂")],
    sourceUrl: "https://en.wikipedia.org/wiki/Cagn"
  },
  {
    id: "mwari-shona-voice",
    title: text("Mwari Speaks Through the Cave", "姆瓦里在山洞中说话"),
    country: text("Zimbabwe", "津巴布韦"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Shona", "绍纳"),
    latitude: -20.4833,
    longitude: 28.5167,
    category: "religion",
    summary: text(
      "From the Matonjeni caves of the Matobo hills, the high god Mwari speaks to Shona elders in a deep voice that no one ever sees, deciding rain, plague, and politics.",
      "在马托博丘陵的马通杰尼洞中，至高神姆瓦里以无人见过的低沉嗓音向绍纳长老开口，决定雨水、瘟疫与政事。"
    ),
    background: text(
      "The Matonjeni shrines in Zimbabwe's Matobo hills have served as the principal oracle of Mwari, the Shona high god, for many centuries.",
      "津巴布韦马托博丘陵中的马通杰尼神庙，几个世纪以来一直是绍纳至高神姆瓦里的主要神谕场所。"
    ),
    narrativeParagraphs: {
      en: [
        "When the rains stop and the children grow thin in the Shona country, elders take the long walk to Matonjeni in the Matobo hills. The caves there look like deep wounds in the granite. The keepers wash and greet the rock, then sit in the cool and wait. Mwari speaks from inside the rock, with a voice low enough to feel in the chest.",
        "Mwari does not waste words. He tells the elders which family has been quarrelling, which field has not been blessed, which young king has forgotten the ancestors. He tells them when the rain will return, and on what day they must perform the bira drum-dance to call it. The elders memorise his answers without writing.",
        "When they walk back down the hills, they carry the words like a careful basket of eggs. Whatever they say in the villages becomes policy. For the Shona, no king is real without the words of Matonjeni, and no drought ends until Mwari sends his next sentence out of the granite.",
      ],
      zh: [
        "绍纳地区雨水断绝、孩子日益消瘦时，长老们便走漫长的山路前往马托博丘陵中的马通杰尼。那里的山洞像是花岗岩上深邃的伤口。守护者先洗手向岩石问候，再坐进清凉之处等待。姆瓦里从岩石内部说话，声音低得可以在胸口感到。",
        "姆瓦里从不浪费话。他会告诉长老哪一家在争吵、哪一片田没有得到祝福、哪一位年轻王者忘了祖先；他会告诉他们雨水何时回来，又该在哪一天跳起“比拉”鼓舞将其召唤回来。长老们不立文字，把每一句话默记心里。",
        "他们下山时把这些话像一篮鸡蛋般小心捧着。回到村子说出来，便成了政事。对绍纳人而言，没有马通杰尼的话语，国王便不算真王；旱灾也不会结束，除非姆瓦里从花岗岩里送出下一句回答。",
      ]
    },
    themes: [text("oracle", "神谕"), text("high god", "至高神"), text("rain", " 雨水")],
    tags: [text("shona", "绍纳"), text("mwari", "姆瓦里"), text("matobo", "马托博"), text("oracle cave", "神谕洞")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mwari"
  },
  {
    id: "nyaminyami-zambezi",
    title: text("Nyaminyami the River God", "赞比西河神尼亚米尼亚米"),
    country: text("Zimbabwe", "津巴布韦"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Tonga", "通加"),
    latitude: -16.5083,
    longitude: 28.7611,
    category: "creature",
    summary: text(
      "The Tonga river god Nyaminyami, a serpent with the head of a fish, is parted from his wife by the Kariba Dam and shakes the gorge with every flood, trying to break through.",
      "通加人的河神尼亚米尼亚米是一条鱼首蟒身的水神。卡里巴大坝把他与妻子隔开，每逢洪水他都摇撼峡谷，想冲穿水坝。"
    ),
    background: text(
      "The BaTonga of the Zambezi valley were displaced in the 1950s when the Kariba Dam flooded their ancestral lands; their river god Nyaminyami became an emblem of the lost river.",
      "赞比西河谷的通加人在二十世纪五十年代因卡里巴大坝建成、祖地被淹而被迫迁徙，河神尼亚米尼亚米成为那条失去河流的象征。"
    ),
    narrativeParagraphs: {
      en: [
        "Nyaminyami had a long serpent body and the slow patient head of a fish. He lived under the rocks of Kariwa Gorge with his wife, and the BaTonga villages along the river fed him with porridge and beer in the bend below the falls. When floods came, the elders said it was Nyaminyami stretching his back, and the water always settled again.",
        "In the 1950s outsiders began to build a great wall across the gorge. Twice the river flooded so hard the half-built dam was torn down, and one engineer who watched the second flood swore he had seen the river-god rising in the spray. The work continued and a lake the size of a small country closed behind the wall.",
        "The BaTonga were moved up onto dry plateaus, far from the river. They say Nyaminyami's wife is trapped on one side and the river-god on the other, and that every earthquake along the lake is him pushing his shoulder against the concrete. Children still carve his shape into small wooden walking sticks, in case one day the wall finally cracks.",
      ],
      zh: [
        "尼亚米尼亚米有一具长长的蟒身和一个慢条斯理、耐性十足的鱼头。他与妻子住在卡里瓦峡谷的乱石下面。河边的巴通加村落世代在瀑布下方的回水弯里给他献粥献啤。每当洪水袭来，长老说那是尼亚米尼亚米伸了伸背，水位最终都会归位。",
        "二十世纪五十年代，外来人开始横跨峡谷修一道大坝。两次洪水把建到一半的水坝冲毁，一名工程师亲眼看见洪水中升起的河神身影。工程最终还是完成了，一座国土般大的湖在坝后合拢。",
        "巴通加人被迁上干燥的高原，远离河流。他们说，尼亚米尼亚米的妻子被困在水坝的一边，他自己被困在另一边；湖区每一次轻微的地动，都是他用肩膀去撞那道混凝土。孩子们仍把他的形状刻进木手杖，期盼有朝一日水坝裂开。",
      ]
    },
    themes: [text("displacement", "迁离"), text("river spirit", "河灵"), text("dam", "水坝")],
    tags: [text("tonga", "通加"), text("zambezi", "赞比西"), text("kariba", "卡里巴"), text("river god", "河神")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nyaminyami"
  },
  {
    id: "queen-modjadji",
    title: text("The Rain Queen Modjadji", "雨后莫贾贾"),
    country: text("South Africa", "南非"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Balobedu", "巴洛贝度"),
    latitude: -23.65,
    longitude: 30.55,
    category: "history",
    summary: text(
      "The Balobedu Rain Queen Modjadji shelters the rain in a sacred grove; from her court even kings ask for water, and Shaka Zulu once turned aside out of respect.",
      "巴洛贝度的雨后莫贾贾在圣林中庇佑着雨水；连诸王都向她的宫廷讨水，传说沙卡·祖鲁也曾因敬畏而绕道而行。"
    ),
    background: text(
      "Since the early nineteenth century, a line of female monarchs called Modjadji has ruled the Balobedu in present-day Limpopo, South Africa, holding power over the seasonal rains.",
      "自十九世纪初起，南非林波波省的巴洛贝度族由名为“莫贾贾”的女王世代统治，她们被认为掌握季雨之力。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago a Karanga chief from Zimbabwe took his daughter Dzugudini and her ancestors' rain medicines south across the river. She founded a small kingdom in the cool wet mountains and a few generations later the throne passed to a woman who refused to marry anyone. She was crowned Modjadji, the first Rain Queen, and from then on the royal line was always female.",
        "Modjadji kept a sacred grove of cycads that drew the clouds toward the kingdom. Embassies came from far away with cattle to ask her for rain. Shaka Zulu, the great king of the Zulu, is said to have sent gifts and turned his army aside, for he did not want to risk the curse of a dry sky. Lesser chiefs paid yearly to be sure the water would come.",
        "Each Rain Queen kept the office only by passing the medicines to a daughter before dying. Several modern queens have ruled into the era of telephones and tarmac. When a drought comes today, the messengers still climb the road to the village. The grove of cycads stands, the protocol stands, and many farmers say the rain comes when the queen says it will come.",
      ],
      zh: [
        "很久以前，津巴布韦一位卡兰加酋长带着女儿祖古迪尼和祖先的“雨药”南渡而下。她在凉湿的山中建立了小国。几代之后，王位传到一位拒绝出嫁的女子手中——她被加冕为“莫贾贾”，第一代雨后，自此王统全部由女性继承。",
        "莫贾贾守护着一片神圣的苏铁林，把云朵引向自己的国土。远方使节带着牛群来向她求雨。据说祖鲁大王沙卡曾派人送礼，并让大军绕道而行，他不愿冒得罪干旱之天的风险。各地小酋长每年献上贡物，确保雨水按时到来。",
        "每一代雨后在去世前都要把雨药传给下一位女儿，王位才能延续。现代以来已有数位雨后跨入电话与柏油路时代。每当旱情袭来，使者仍会沿着山路登上王村。苏铁林仍在，礼仪仍在，许多农民说，雨水什么时候到，要看雨后什么时候开口。",
      ]
    },
    themes: [text("rain-making", "祈雨"), text("female monarchy", "女王制"), text("sacred grove", "圣林")],
    tags: [text("balobedu", "巴洛贝度"), text("modjadji", "莫贾贾"), text("rain queen", "雨后"), text("cycads", "苏铁")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rain_Queen"
  },
  {
    id: "mukuru-himba",
    title: text("Mukuru and the First Cattle", "姆库鲁与最早的牛"),
    country: text("Namibia", "纳米比亚"),
    region: text("Southern Africa", "南部非洲"),
    culture: text("Himba", "辛巴"),
    latitude: -18.0,
    longitude: 13.5,
    category: "myth",
    summary: text(
      "The ancestor god Mukuru raises the first man and woman out of the omumborombonga tree, gives them cattle, and warns that the fire of the ancestors must never be allowed to die.",
      "祖神姆库鲁从奥姆博龙邦加树中唤出最早的一男一女，赐下牛群，并嘱咐祖先之火永不能熄。"
    ),
    background: text(
      "The Himba of north-western Namibia and southern Angola trace their origin and their daily ritual life to the holy fire (okuruwo) tended for the ancestor god Mukuru.",
      "纳米比亚西北部与安哥拉南部的辛巴人将自己的起源与日常仪式生活，归于为祖神姆库鲁守护的圣火“奥库鲁沃”。"
    ),
    narrativeParagraphs: {
      en: [
        "Mukuru stood by the great omumborombonga tree at the edge of the Kunene plain and called the first man and woman out of its trunk. He led them to a clean fire he had lit himself and told them, 'This fire will not go out as long as you remember me.' He brought white cattle from a hidden valley and gave them as the bride-wealth of the world.",
        "He taught the people that the ancestors live just on the other side of the smoke. To speak with them, the family must keep a small fire burning between the chief's hut and the cattle kraal. Every morning the chief lights a stick there and sweeps the air toward his face, breathing in what the ancestors send back.",
        "When the people forget, the cattle thin and the wells dry. When they remember, the cattle thicken and the river flows. Mukuru does not visit again, but he sends rain, illness, and small dreams. To this day a Himba homestead is laid out around the okuruwo, and a Himba child learns to walk in a line that never crosses between the holy fire and the cattle gate.",
      ],
      zh: [
        "姆库鲁站在库内内平原边那棵巨大的奥姆博龙邦加树下，把最早的一男一女从树干里唤出来。他带他们走到自己亲手点燃的一堆清净之火旁，说：“只要你们记得我，这火就不会熄。”随后他从隐秘山谷牵来白色的牛群，作为人世的最初聘礼。",
        "他告诉人类，祖先就在烟雾的另一侧。要和他们说话，家族必须在酋长茅屋与牛栏之间维系一小堆不灭的火。每天清晨，酋长在火上点一根木条，把空气朝自己面前一扫，吸入祖先回送的气息。",
        "人若忘了这事，牛群消瘦，井水干涸；人若记得，牛群肥壮，河水流淌。姆库鲁从此不再现身，但他借雨水、疾病和小小的梦发声。直到今天，辛巴家屋仍以圣火“奥库鲁沃”为中心布置，辛巴孩子学会走路时被教导：行走的路线永远不可穿过圣火与牛栏之间。",
      ]
    },
    themes: [text("ancestor fire", "祖火"), text("origin tree", "起源之树"), text("cattle gift", "牛之赐予")],
    tags: [text("himba", "辛巴"), text("mukuru", "姆库鲁"), text("okuruwo", "奥库鲁沃"), text("ancestors", "祖先")],
    sourceUrl: "https://en.wikipedia.org/wiki/Himba_people"
  },
  {
    id: "dhegdheer-witch",
    title: text("Dhegdheer the Long-Eared Witch", "长耳女巫德赫赫迪尔"),
    country: text("Somalia", "索马里"),
    region: text("Horn of Africa", "非洲之角"),
    culture: text("Somali", "索马里"),
    latitude: 2.0469,
    longitude: 45.3182,
    category: "creature",
    summary: text(
      "A woman with one ear so long it touches the ground hunts lost children in the bush, until a brave daughter learns her secret and sings her into stone.",
      "一位耳朵长到拖地的女子在灌木丛里搜寻迷路的孩子，直到一个勇敢的女儿探出她的秘密，用一支歌把她唱成石头。"
    ),
    background: text(
      "Dhegdheer ('Long-Ear') is the most famous bogey-figure of Somali folk warnings, used to keep children near the homestead.",
      "“德赫赫迪尔”（意为“长耳”）是索马里民间最著名的吓孩怪物，长辈用她的故事让孩子不要远离家园。"
    ),
    narrativeParagraphs: {
      en: [
        "On the edge of every Somali village there is a story for children who wander too far at dusk. Dhegdheer, the woman with one ear long enough to drag in the dust, walks the bush behind the goat-paths. She hears every footstep and every whispered name. When a child gets lost, the long ear bends down to listen for breath, and Dhegdheer follows the sound until she finds them.",
        "A girl named Hodan was sent into the bush to look for her younger brother. She found his footprints and Dhegdheer's drag-line beside them. Instead of running, she remembered the song her grandmother had taught her, the one that named every ancestor of her line all the way back to the well that did not run dry. She sang it as she walked.",
        "Dhegdheer heard the song and could not lift her ear from the ground. Each name pressed her into the earth a little more, until her body became a long rock with one strange curving fold at the side. The Somali say the rock is still out there in the dryland, and that a child who knows her grandmothers' names cannot be taken by Dhegdheer.",
      ],
      zh: [
        "每个索马里村子的边缘，都流传着一则提醒孩子黄昏别乱跑的故事。德赫赫迪尔，一只耳朵长得能在沙土里拖行的女子，沿羊径背后的灌木丛行走。每一步脚响、每一句轻唤的名字她都听得见。孩子一旦走失，那长长的耳朵便低俯到地，凭呼吸辨方向，循声追到他们面前。",
        "一个名叫霍丹的女孩被派进灌木丛找她的小弟弟。她找到弟弟的脚印，旁边还有德赫赫迪尔耳朵在沙上拖出的长线。她没有逃跑，而是想起祖母教过她的一支歌——把母系一脉所有祖先的名字一直唱回最早不曾干涸的那口井。她一边走一边唱。",
        "德赫赫迪尔听见这支歌，再也没法把耳朵从地上提起来。每念一个名字，她就被压进土里一分，最后整个身躯化作一块长石，侧旁仍有一道古怪的弯折。索马里人说，那块石头至今还卧在干燥的旷野里；只要孩子能数出自己祖母们的名字，就不会被德赫赫迪尔带走。",
      ]
    },
    themes: [text("child warning", "孩童警戒"), text("name as power", "名字之力"), text("witch", "女巫")],
    tags: [text("somali", "索马里"), text("dhegdheer", "德赫赫迪尔"), text("bush", "灌木丛"), text("ancestor song", "祖名歌")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dhegdheer"
  },
  {
    id: "arwe-aksum",
    title: text("Arwe the Serpent King of Aksum", "阿克苏姆的蛇王阿尔韦"),
    country: text("Ethiopia", "埃塞俄比亚"),
    region: text("Horn of Africa", "非洲之角"),
    culture: text("Tigrayan", "提格雷"),
    latitude: 14.1306,
    longitude: 38.7244,
    category: "history",
    summary: text(
      "Before the first kings of Aksum, the giant serpent Arwe demands a daughter every year; a stranger named Angabo poisons the serpent's milk and founds the dynasty that becomes the Solomonids.",
      "阿克苏姆首批王者之前，巨蛇阿尔韦每年索要一名少女作贡，外乡人安加博在它的奶里下毒，开创日后所罗门王朝的祖系。"
    ),
    background: text(
      "Ethiopian chronicles place the legend of Arwe and Angabo as the prelude to the queen of Sheba and the Solomonic line of Aksumite kings.",
      "埃塞俄比亚编年史把阿尔韦与安加博的传说置于示巴女王及阿克苏姆所罗门王统之前。"
    ),
    narrativeParagraphs: {
      en: [
        "In the highlands above the Red Sea, a serpent the size of a long ridge curled around the city of Aksum. Arwe asked for a yearly tribute of cattle, then sheep, and finally a single daughter chosen by lot. The kings of the city paid, because the serpent's eyes could pull a soldier off his feet from any distance.",
        "A wandering man named Angabo arrived from the north and saw the chosen daughter waiting in the square. He bargained with the priests: if he killed Arwe, the people would take him as their king. He milked seven goats into a bowl, poured in a bitter sap that grew on the cliffs, and left the bowl in front of Arwe's hole. The serpent drank, swelled, and burst across the hillside.",
        "Angabo was carried to the palace and crowned. His daughter became Makeda, the queen who would later travel to Solomon's court in Jerusalem. The Ethiopian kings of the next millennia traced their crown to that single bowl of poisoned milk, and to the courage of a man who refused to give up another father's daughter.",
      ],
      zh: [
        "红海之上的高原上，一条巨蛇盘绕在阿克苏姆城周围，身长如同一道山脊。阿尔韦先索要牛群作贡，又要羊群，最后开口要每年抽签选出的一位少女。城里的诸王只得照办，因为巨蛇的眼神能让远处的士兵脚软。",
        "一位来自北方的流浪者安加博来到城里，看见被选中的少女在广场上等候。他向祭司开价：如果他杀死阿尔韦，人民要奉他为王。他挤了七只山羊的奶，又掺入崖上生长的一种苦汁，把奶碗放在阿尔韦藏身的洞口前。巨蛇喝下，胀大，最终在山坡上裂开。",
        "安加博被簇拥进王宫加冕。他的女儿就是后来远赴耶路撒冷拜见所罗门的示巴女王玛凯达。此后一千多年的埃塞俄比亚诸王，都把自己的王统追溯到那一碗下了毒的羊奶——以及一位拒绝再让别人的女儿被夺去的男子的勇气。",
      ]
    },
    themes: [text("tyrant slain", "屠戮暴君"), text("founding king", "开国之王"), text("serpent", "蛇")],
    tags: [text("aksum", "阿克苏姆"), text("arwe", "阿尔韦"), text("angabo", "安加博"), text("ethiopia", "埃塞俄比亚")],
    sourceUrl: "https://en.wikipedia.org/wiki/Arwe"
  },
  {
    id: "lalibela-rock-churches",
    title: text("King Lalibela Carves the Rock Churches", "拉利贝拉国王凿出岩石教堂"),
    country: text("Ethiopia", "埃塞俄比亚"),
    region: text("Horn of Africa", "非洲之角"),
    culture: text("Amhara", "阿姆哈拉"),
    latitude: 12.0319,
    longitude: 39.0479,
    category: "religion",
    summary: text(
      "Carried into heaven by angels and instructed to build a new Jerusalem, King Lalibela returns and hews eleven churches downward into the red rock of the Lasta highlands.",
      "国王拉利贝拉被天使带上天，得到建造“新耶路撒冷”的旨意；回到人间后，他在拉斯塔高地的红岩中向下凿出十一座教堂。"
    ),
    background: text(
      "King Gebre Mesqel Lalibela (late twelfth–early thirteenth century) of the Zagwe dynasty in Ethiopia is remembered for the eleven monolithic rock-hewn churches of Lalibela.",
      "扎格维王朝的格布雷·梅斯凯尔·拉利贝拉国王（十二世纪末至十三世纪初）以拉利贝拉镇的十一座整体岩凿教堂闻名于世。"
    ),
    narrativeParagraphs: {
      en: [
        "When Lalibela was a baby, bees swarmed around him and his mother heard them singing in human voices, 'He will be king.' He grew up in the Lasta highlands, far from the old capital. As a young man he was poisoned by a jealous brother. While he lay in deep sleep, angels carried him up through the clouds, showed him a city of churches cut from a single rock, and said, 'Build this for us.'",
        "He awoke, returned to his court, and took the crown. From every corner of his kingdom he gathered stonecutters and rope-pullers. They began at the top of red bedrock and worked downward, hollowing the inside of mountains. By day human hands did the work; the chronicles say that by night the angels themselves continued, doubling each day's progress.",
        "When the eleven churches stood finished—each below ground level, joined by passages and water-channels named for the Jordan—Lalibela laid down his crown and lived as a pilgrim among them. Even today, Orthodox Christian pilgrims walk barefoot through those passages on Christmas Eve, certain that the angels still come to inspect their share of the work.",
      ],
      zh: [
        "拉利贝拉还是婴儿时，蜂群在他周围嗡鸣，母亲听见嗡声里有人声唱：“他将为王。”他在拉斯塔高地长大，远离旧都。年轻时他被嫉妒的兄长下毒，沉沉昏睡间，天使把他从云间引上天，让他看见一座由一整块岩石凿出的教堂城，对他说：“替我们建起这座城。”",
        "他醒来，回到王宫继承王位。他从国土各地召来石匠与拉绳工，从红色岩床的顶面动手，向下凿空整座山体。编年史说，白天是人手在做工，夜里则有天使继续，每一天的进度都被悄悄翻倍。",
        "十一座教堂全部凿成时——每一座都低于地面，又以一条名为“约旦”的水渠和廊道相连——拉利贝拉脱下王冠，作为朝圣者住在它们之间。直到今天，正教徒朝圣者仍会在圣诞前夜赤足穿过那些廊道，他们坚信天使至今仍来检阅那一半属于自己的工程。",
      ]
    },
    themes: [text("rock churches", "岩石教堂"), text("vision", "异象"), text("pilgrimage", "朝圣")],
    tags: [text("lalibela", "拉利贝拉"), text("zagwe", "扎格维"), text("ethiopian orthodoxy", "埃塞俄比亚正教"), text("new jerusalem", "新耶路撒冷")],
    sourceUrl: "https://en.wikipedia.org/wiki/Gebre_Mesqel_Lalibela"
  },
  {
    id: "tin-hinan",
    title: text("Tin Hinan, Mother of the Tuareg", "图阿雷格之母蒂恩·希南"),
    country: text("Algeria", "阿尔及利亚"),
    region: text("North Africa", "北非"),
    culture: text("Tuareg", "图阿雷格"),
    latitude: 22.7853,
    longitude: 5.5228,
    category: "history",
    summary: text(
      "A noblewoman flees Tafilalt with one servant, crosses the desert on a camel, and founds the matrilineal Tuareg confederations of the Hoggar.",
      "一位贵族妇人带着一名婢女自塔菲拉勒特出走，骑骆驼穿越沙漠，开创图阿雷格人在霍加尔的母系联盟。"
    ),
    background: text(
      "Tin Hinan's tomb at Abalessa in the Algerian Hoggar mountains is celebrated by the Tuareg as the resting place of their common ancestress.",
      "在阿尔及利亚霍加尔山区阿巴莱萨的图阿雷格圣墓被尊为他们共同的母系祖先蒂恩·希南的安息之所。"
    ),
    narrativeParagraphs: {
      en: [
        "Tin Hinan, a noblewoman of the Berber Tafilalt oasis, refused a marriage that would have bound her to a court she did not respect. She left at night on a single white camel, with her servant Takamat beside her, and rode south into the Sahara. She carried water in goatskins and a thin gold band on her wrist that had belonged to her mother.",
        "After many weeks they reached the dark volcanic peaks of the Hoggar. The Tuareg clans of the mountain heard of the stranger's nobility, gathered around her at the well of Abalessa, and asked her to teach them. She organised them by mother's line: a child belonged not to the father's tent but to the mother's, and the senior daughter inherited the household.",
        "When Tin Hinan died she was buried in a stone chamber under the slope. Centuries later her tomb was opened and her body still lay with the thin gold bracelet on her wrist. Every Tuareg confederation traces its noble women back to her, and a woman's say in a Tuareg meeting still carries the weight of an inheritance that began on the back of a white camel.",
      ],
      zh: [
        "柏柏尔塔菲拉勒特绿洲的贵族妇人蒂恩·希南，拒绝一桩会把她绑在她看不起的宫廷里的婚事。夜里，她骑上一头白骆驼，带着婢女塔卡马特同行，向南策马进入撒哈拉。她用山羊皮囊带水，腕上一道细细的金环是她母亲留下的。",
        "数周之后，她们抵达霍加尔山区那座黑色的火山高地。山间的图阿雷格诸氏族听闻她的高贵，聚到阿巴莱萨的水井边请她教导。她按母系把人们重新组织起来：孩子不属父亲的帐篷，而属于母亲的帐篷，长女继承家业。",
        "蒂恩·希南去世后被葬在山坡下的石室。几百年后她的墓被开启，遗骸的腕上仍戴着那道细细的金环。每一个图阿雷格联盟都把自己的贵妇血脉追溯到她身上；在图阿雷格的议事场上，妇女说话的分量直到今天，仍承自一头白骆驼载来的传统。",
      ]
    },
    themes: [text("matrilineal society", "母系社会"), text("desert journey", "沙漠之行"), text("founding mother", "开族之母")],
    tags: [text("tuareg", "图阿雷格"), text("tin hinan", "蒂恩·希南"), text("hoggar", "霍加尔"), text("abalessa", "阿巴莱萨")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tin_Hinan"
  },
  {
    id: "anzar-rain-marriage",
    title: text("Anzar Marries the Rain", "安扎尔迎娶雨水"),
    country: text("Morocco", "摩洛哥"),
    region: text("North Africa", "北非"),
    culture: text("Berber", "柏柏尔"),
    latitude: 31.7917,
    longitude: -7.0926,
    category: "religion",
    summary: text(
      "When the fields crack in the Atlas mountains, Berber women dress a wooden bride and walk her through the village, marrying her to Anzar the rain so the sky will open.",
      "阿特拉斯山区田地龟裂时，柏柏尔妇女把一具木偶新娘扮起，挨家挨户走过村庄，将她许配给雨神安扎尔，好让天空开口。"
    ),
    background: text(
      "Among the Berber peoples of the Atlas mountains, Anzar is the lord of rain; rituals such as 'Tislit n Anzar' ('Anzar's bride') are still performed in dry years.",
      "在阿特拉斯山区的柏柏尔人中，安扎尔是雨之主，干旱年份至今仍举行“Tislit n Anzar”（“安扎尔之妻”）求雨仪式。"
    ),
    narrativeParagraphs: {
      en: [
        "When the rivers in the Atlas valleys thin and the rye begins to curl, the women of the village come out at dusk with a wooden spoon. They wrap the spoon in a child's red shawl and a string of beads. This is Tislit n Anzar—Anzar's bride. Anzar is the rain lord, who once tried to marry a mortal woman so beautiful she was the river's reflection.",
        "She refused him out of pride and Anzar withdrew into the clouds. The valley dried. The elders made the first wooden bride to send up to the sky in her place, and women carry her now from door to door. At each door they sing for rain and the household sprinkles water on the doll.",
        "By the time the procession returns to the spring, the bride is soaked. The women stand her by the water and ask Anzar to accept her. The Berber say that nine times out of ten the rain comes within three days. Whether the rain answers a god or merely the cool air of summer storms, the ritual binds the village together, and the doll waits in a niche for the next dry year.",
      ],
      zh: [
        "阿特拉斯山谷的河流变细、黑麦尖儿卷起时，村里的妇女们便在黄昏取出一只木勺。她们用孩子的红披肩和一串珠子把木勺缠裹起来——这就是“Tislit n Anzar”，安扎尔的新娘。安扎尔是雨之主，传说他曾追求过一位美得像河中倒影的凡间女子。",
        "那女子出于骄傲拒绝了他，安扎尔便退入云中，山谷因此干涸。长老们最初造出这只木娘，替那位拒绝的女子上送天庭。今天，妇女们抱着她挨家挨户走，每到一户便唱起求雨之歌，主人家用水往娃娃身上洒。",
        "当队伍回到泉边，木偶已经湿透。妇女们把她立在水边，恳请安扎尔接受。柏柏尔人说，十之八九，雨水会在三天内到来。无论那是回应一位神还是仅仅迎合夏季雷阵雨的凉风，这场仪式都把村子捆在一起，木偶等候在壁龛里，预备下一个旱年。",
      ]
    },
    themes: [text("rain ritual", "祈雨仪式"), text("ritual bride", "仪式新娘"), text("drought", "旱情")],
    tags: [text("berber", "柏柏尔"), text("anzar", "安扎尔"), text("atlas", "阿特拉斯"), text("rain song", "求雨歌")],
    sourceUrl: "https://en.wikipedia.org/wiki/Anzar_(Berber_god)"
  },
  {
    id: "aisha-qandisha",
    title: text("Aisha Qandisha at the Spring", "泉边的艾莎·堪迪夏"),
    country: text("Morocco", "摩洛哥"),
    region: text("North Africa", "北非"),
    culture: text("Maghrebi", "马格里布"),
    latitude: 35.696,
    longitude: -5.3729,
    category: "creature",
    summary: text(
      "A jinniya with the legs of a camel waits by springs and rivers; men who flirt with her become hers, and only the Hamadsha brotherhood can sing them back to themselves.",
      "一位长着骆驼蹄子的精灵女王在泉与河边等候，与她调情的男人从此归她所有，唯有“哈玛德沙”教团的歌能把他们唤回神志。"
    ),
    background: text(
      "Aisha Qandisha is one of the most feared and famous jnoun (spirits) of Maghrebi tradition, particularly in northern Morocco.",
      "艾莎·堪迪夏是马格里布传统中最令人敬畏也最知名的“精灵”（jnoun）之一，尤其盛传于摩洛哥北部。"
    ),
    narrativeParagraphs: {
      en: [
        "Travellers who stop at a spring after dusk in the Rif mountains sometimes meet a beautiful woman washing her hair in the water. Her clothes hide her feet—if a foot shows, it is a camel's hoof. She speaks gently, asks why he is alone, and offers to walk part of the way home with him. Older men in the village know never to answer.",
        "Aisha Qandisha is a queen of the jnoun, said to have first appeared during the Portuguese wars. Folk memory turned the cruelties of those years into the figure of a vengeful woman who waits by water. A man who walks home with her may seem fine for a week, but soon he forgets his children's names, refuses food, and sits at the edge of the spring for hours staring at nothing.",
        "Only the Hamadsha brotherhood, who drum and sing through the night, can call him back. Their songs name Aisha, praise her, and gently ask her to release the man. By dawn, if the songs are sincere, he wakes shivering but himself. The Hamadsha say Aisha is not evil, just lonely, and she answers respect more readily than fear.",
      ],
      zh: [
        "黄昏后在里夫山的泉边歇脚的旅人，有时会遇见一位美丽的女子在水里洗发。她的长袍遮住脚——一旦脚露出来，那是骆驼蹄。她语气温柔，问他为何独行，主动陪他走一段路回家。村里上了年纪的人都知道，这种问话千万别接。",
        "艾莎·堪迪夏是精灵之王后，据说最早出现于葡萄牙战争时期。民间记忆把那段年月的残酷化作一位守候在水边的复仇之女。和她一同归家的男人也许一周内还显得正常，可不久便忘了孩子的名字，拒绝进食，整日坐在泉边茫然出神。",
        "只有“哈玛德沙”教团能把他唤回来。他们彻夜击鼓诵唱，歌中称呼艾莎之名，赞她又温柔地恳求她放人。若歌声诚恳，男子在天亮时颤抖着醒来，重新成为自己。哈玛德沙说，艾莎并非恶灵，只是孤单——比起恐惧，她更愿意回应敬意。",
      ]
    },
    themes: [text("jinniya", "女精灵"), text("possession", "附身"), text("ritual healing", "仪式疗愈")],
    tags: [text("aisha qandisha", "艾莎·堪迪夏"), text("hamadsha", "哈玛德沙"), text("morocco", "摩洛哥"), text("water spirit", "水灵")],
    sourceUrl: "https://en.wikipedia.org/wiki/Aisha_Qandisha"
  },
  {
    id: "malakas-maganda",
    title: text("Malakas and Maganda from the Bamboo", "竹中走出的马拉卡斯与玛甘达"),
    country: text("Philippines", "菲律宾"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Tagalog", "他加禄"),
    latitude: 14.5995,
    longitude: 120.9842,
    category: "myth",
    summary: text(
      "A great bird splits a single stalk of bamboo on the shore and out step the first man Malakas and the first woman Maganda, names that mean Strong and Beautiful.",
      "一只大鸟在海边劈开一根竹子，最早的男子“马拉卡斯”（强者）与最早的女子“玛甘达”（美者）从中走出。"
    ),
    background: text(
      "The Tagalog people of Luzon tell several versions of this creation tale; the bird is often Manaul or simply 'the great bird' depending on region.",
      "吕宋岛的他加禄人讲述这则创世故事的多种版本，那只大鸟有时被称作“马诺尔”，有时仅以“大鸟”出现。"
    ),
    narrativeParagraphs: {
      en: [
        "The sky was the sea's lover but they had become tired of one another. The sea grew angry one afternoon and threw stones up at the sky. The sky threw islands down at the sea, and one of those islands grew a forest of bamboo. A great bird, weary of flying, landed there and listened to a tapping inside one of the stalks.",
        "The bird struck the stalk with its beak. The first knot cracked open and Malakas stepped out, brown-shouldered and tall. The second knot cracked open and Maganda stepped out, dark-haired and laughing. They looked at one another and the bird, and the bird flew up to tell the sky and the sea to make peace.",
        "Malakas and Maganda became the first parents of the Filipino people. Their sons and daughters scattered across the islands, some inland to the mountains, some out across the water to the small islands beyond. When a Tagalog child today learns to write 'Pilipinas', the teacher often begins with the legend of the bird and the bamboo, so the country starts in a single sound.",
      ],
      zh: [
        "天空原是大海的爱人，可它们已彼此厌倦。一日午后大海发怒，把石头抛向天空；天空把岛屿掷向大海，其中一座岛上长出一片竹林。一只飞累的大鸟落在那里，听见一根竹节里有敲响声。",
        "大鸟用喙啄竹。第一节裂开，肩膀棕亮、身躯高大的马拉卡斯走出来；第二节裂开，黑发飞扬、笑意盈盈的玛甘达走出来。他们望着彼此，又望着大鸟；大鸟飞上天空，把消息告诉天与海，让它们和好。",
        "马拉卡斯与玛甘达成了菲律宾人的最初父母。他们的儿女散布在群岛之间，有的入山，有的渡海到外围的小岛。今天的他加禄孩子初学写下“Pilipinas”一词时，老师常先讲那只大鸟与那根竹子的故事——好让国家从一声敲响开始。",
      ]
    },
    themes: [text("creation", "创世"), text("origin of peoples", "族源"), text("sky and sea", "天与海")],
    tags: [text("tagalog", "他加禄"), text("bamboo origin", "竹中起源"), text("manaul", "马诺尔"), text("philippines", "菲律宾")],
    sourceUrl: "https://en.wikipedia.org/wiki/Malakas_and_Maganda"
  },
  {
    id: "bernardo-carpio",
    title: text("Bernardo Carpio Holds the Mountains", "贝尔纳多·卡尔皮奥撑住山岭"),
    country: text("Philippines", "菲律宾"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Tagalog", "他加禄"),
    latitude: 14.7167,
    longitude: 121.1167,
    category: "epic",
    summary: text(
      "A boy of impossible strength is tricked into the San Mateo mountains where two cliffs close on him forever; whenever they shift, Filipinos feel an earthquake.",
      "一个力大无穷的男孩被诱入圣马特奥山中，两座峭壁永远夹住他；峭壁每动一次，菲律宾人就感到一次地震。"
    ),
    background: text(
      "Bernardo Carpio is a hero of Tagalog metrical romance, often invoked as a hidden saviour who will one day break free.",
      "贝尔纳多·卡尔皮奥是他加禄民间英雄诗中的角色，常被视作一位等候解脱、终将出山的隐藏救主。"
    ),
    narrativeParagraphs: {
      en: [
        "Bernardo Carpio was born so strong that his cradle splintered when he turned over. He grew up wrestling carabaos to the ground for fun and uprooting acacia trees to make hedges. The Spanish governor in Manila heard of him and sent soldiers; the soldiers came back without their weapons. He sent a friar to befriend him; the friar came back without his cassock.",
        "At last the governor hired a diwata of the mountains, a beautiful spirit-woman, to invite Bernardo for a feast in the San Mateo highlands. He went smiling. As he stepped through a narrow pass between two cliffs, the cliffs slammed shut on him at the diwata's word. He braced one hand on each cliff and they held.",
        "From that day Bernardo has stood in the pass, holding the mountains apart with his shoulders. When the country becomes weary, he shifts his weight, and the islands feel an earthquake. Filipinos say that on the day the country is ready, the cliffs will fall away from his hands, and Bernardo will walk out at last to set everyone free.",
      ],
      zh: [
        "贝尔纳多·卡尔皮奥生下来力大无比，连摇篮翻身都会被他压裂。他长大后以与水牛较力为乐，连根拔起金合欢树当篱笆。马尼拉的西班牙总督听闻其名，派士兵围捕，士兵们空手而归，连武器都被他没收。后来总督派一位修士前去结识，修士回来时连袈裟都不见了。",
        "无可奈何之下，总督收买了山中的一位“迪瓦塔”——一位美丽的灵精，邀他去圣马特奥高地赴宴。贝尔纳多笑着前往。他刚走进两座峭壁之间狭窄的山道，迪瓦塔一声轻语，峭壁砰然合拢。他用两只手分别撑住两面峭壁，硬是顶住了。",
        "自那天起，贝尔纳多就站在山道里，用双肩撑开两山。每当这国家疲惫，他重心一挪，群岛便感到一次地震。菲律宾人说，有朝一日时机到了，峭壁会从他手中坠落，贝尔纳多终将走出山口，让所有人获得解脱。",
      ]
    },
    themes: [text("hidden saviour", "隐藏救主"), text("strength", "神力"), text("earthquake", "地震")],
    tags: [text("tagalog", "他加禄"), text("bernardo carpio", "贝尔纳多·卡尔皮奥"), text("san mateo", "圣马特奥"), text("liberation legend", "解脱传说")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bernardo_Carpio"
  },
  {
    id: "maria-makiling",
    title: text("Maria Makiling, Lady of the Mountain", "山中之女玛丽亚·玛基灵"),
    country: text("Philippines", "菲律宾"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Tagalog", "他加禄"),
    latitude: 14.1369,
    longitude: 121.1958,
    category: "creature",
    summary: text(
      "A diwata in a thin green dress walks the slopes of Mount Makiling, filling farmers' baskets with ginger that turns to gold—until the lowland soldiers betray the boy she loved.",
      "一位身穿薄绿衣的迪瓦塔在玛基灵山的山坡上行走，把农人的篮子塞满会变成黄金的姜——直到平原的士兵出卖了她爱过的年轻人。"
    ),
    background: text(
      "Maria Makiling is the most famous diwata of Luzon, the guardian spirit of Mount Makiling above Laguna Lake.",
      "玛丽亚·玛基灵是吕宋岛最有名的迪瓦塔，是拉古纳湖上方玛基灵山的守护之灵。"
    ),
    narrativeParagraphs: {
      en: [
        "Mount Makiling, seen from Laguna Lake, has the shape of a sleeping woman lying with her hair flowing over the slope. The Tagalog say that is Maria Makiling. She walks the mountain unseen and helps farmers in trouble: a stray cow finds its way home, a lost child turns up on the porch, a basket of ginger comes home full of gold.",
        "Once a young man named Joselito hunted on the mountain and Maria appeared to him in a green dress with butterflies in her hair. They were happy for a year. When the Spanish came looking for rebel sympathisers, they accused Joselito to draw him out. Maria slipped him a sash of gold to bribe his way to freedom. He was caught, and used the sash to bribe his way to a comfortable cell instead of telling Maria.",
        "When Maria saw what he had done she did not weep. She climbed back into the cloud at the summit. From that year on the mountain has been less generous: travellers lose their way more easily, gingers stay gingers, and lowland armies do not find the bandits who hide in the slopes. The mountain still has her shape, and the farmers still leave a portion of every harvest at the spring.",
      ],
      zh: [
        "从拉古纳湖望去，玛基灵山像一位长发披肩、安详沉睡的女子。他加禄人说，那便是玛丽亚·玛基灵。她无形地走在山间，帮陷入困境的农人——走失的牛回到棚里，迷路的孩子出现在门廊，一篮姜回家时变成了黄金。",
        "曾有个名叫何塞利托的年轻人在山中打猎，玛丽亚穿绿衣、发间停着蝴蝶向他显现。他们幸福了一年。西班牙人来搜查反抗者，借机诬告何塞利托想引他出山。玛丽亚悄悄给了他一条金腰带，让他能买通看守逃出来。他被抓后，没把这话告诉玛丽亚，反用金子换得舒适的牢房。",
        "玛丽亚得知后没有哭。她回到山顶的云里。从那一年起，山不再那么慷慨：旅人更易迷路，姜子终究只是姜子，山坡里的反抗者也不会被平原军队找到。山仍保持着她的轮廓，山下的农人至今仍在泉边留下每一次收成的一份。",
      ]
    },
    themes: [text("guardian spirit", "守护之灵"), text("betrayal", "背叛"), text("mountain", "山岳")],
    tags: [text("tagalog", "他加禄"), text("maria makiling", "玛丽亚·玛基灵"), text("diwata", "迪瓦塔"), text("laguna", "拉古纳")],
    sourceUrl: "https://en.wikipedia.org/wiki/Maria_Makiling"
  },
  {
    id: "lam-ang",
    title: text("Biag ni Lam-ang, the Northern Hero", "北方英雄拉姆昂"),
    originalTitle: text("Biag ni Lam-ang", "拉姆昂之生平"),
    country: text("Philippines", "菲律宾"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Ilocano", "伊洛卡诺"),
    latitude: 18.1971,
    longitude: 120.5926,
    category: "epic",
    summary: text(
      "Born speaking and grown in nine months, the Ilocano hero Lam-ang searches for his father in the highlands, courts a maiden with a rooster and a dog as companions, and is eaten by a fish before being whistled back to life.",
      "甫一出生就会说话、九个月内成年的伊洛卡诺英雄拉姆昂上山寻父，带着一只公鸡和一只狗向心上人求婚，被大鱼吞食，又被一声口哨唤回人间。"
    ),
    background: text(
      "Biag ni Lam-ang is the great oral epic of the Ilocano of northern Luzon, sung in metrical verse at weddings and wakes.",
      "“Biag ni Lam-ang”是吕宋岛北部伊洛卡诺人的伟大口头史诗，在婚礼与守灵场合以韵文吟唱。"
    ),
    narrativeParagraphs: {
      en: [
        "Lam-ang was born already speaking and chose his own name. By the time he was a man his father Don Juan had gone into the mountains to fight headhunters and not come back. Lam-ang took his fighting spear and his magical rooster and dog and walked into the high country. He found his father's bones on a peak, broke the headhunter band single-handed, and carried the bones home in a basket.",
        "Then he set out to court Inés Cannoyan, the most beautiful maiden of Kalanutian. Suitors crowded her balcony. Lam-ang arrived in a procession with his rooster, who crowed and made the neighbour's house fall down, and his dog, who barked the house up again, so Inés's father agreed to the match. The wedding lasted nine days.",
        "Later, by custom, Lam-ang had to dive in the river to catch a rare giant fish called the berkakan. The fish swallowed him. Inés gathered his bones and laid them on a mat. The rooster crowed, the dog barked, Inés whistled the way he had taught her, and Lam-ang stood up alive. The Ilocano say a true marriage is one in which the wife knows the song that calls her husband back from any death.",
      ],
      zh: [
        "拉姆昂出生时就会说话，自己取了名字。他长成大人时，父亲堂·胡安已上山讨伐猎头族，迟迟未归。拉姆昂带上长矛、一只通灵的公鸡和一条狗，走进高山。他在峰顶找到父亲的遗骨，独力击溃了猎头部落，把遗骨装进竹篮带回村里。",
        "随后他出发去向卡兰努提安最美丽的少女伊内丝·坎诺扬求婚。求婚者挤满她家阳台。拉姆昂带着公鸡和狗组成的迎亲队伍到来：公鸡一啼让邻家的屋子塌下来，狗一吠又把屋子叫回原状，伊内丝的父亲于是答应婚事。婚礼一连办了九天。",
        "按惯例，婚后拉姆昂要下河捕一种名为“贝尔卡坎”的稀有大鱼。大鱼把他吞了。伊内丝把他的骨头收拢，铺在席上。公鸡一啼，狗一吠，伊内丝用拉姆昂教过她的口哨吹响，拉姆昂便立起身来重又活过。伊洛卡诺人说，真正的婚姻，是妻子知道哪支歌能把丈夫从任何一种死亡里唤回来。",
      ]
    },
    themes: [text("filial duty", "孝义"), text("wedding epic", "婚礼史诗"), text("resurrection", "复活")],
    tags: [text("ilocano", "伊洛卡诺"), text("lam-ang", "拉姆昂"), text("rooster", "公鸡"), text("ines cannoyan", "伊内丝")],
    sourceUrl: "https://en.wikipedia.org/wiki/Biag_ni_Lam-ang"
  },
  {
    id: "hudhud-aliguyon",
    title: text("The Hudhud of Aliguyon", "阿利古永的胡德胡德"),
    originalTitle: text("Hudhud hi Aliguyon", "阿利古永颂歌"),
    country: text("Philippines", "菲律宾"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Ifugao", "伊富高"),
    latitude: 16.8333,
    longitude: 121.1167,
    category: "epic",
    summary: text(
      "In the Ifugao rice terraces, Aliguyon and his rival Pumbakhayon fight a duel of three years' length that ends in marriage between their families, sung in the long hudhud chant.",
      "在伊富高梯田中，少年阿利古永与对手蓬巴卡永持续了三年的较量，最终以两家联姻收场。整段故事在悠长的“胡德胡德”长歌中代代吟咏。"
    ),
    background: text(
      "The Hudhud chants of the Ifugao in the Cordillera mountains are inscribed in UNESCO's Representative List of Intangible Cultural Heritage.",
      "伊富高人位于科迪勒拉山区，其“胡德胡德”长歌已列入联合国教科文组织非物质文化遗产代表名录。"
    ),
    narrativeParagraphs: {
      en: [
        "Aliguyon, son of Amtalao of Hannanga, was a boy of stories. He learned every chant by listening once. As a young man he led a war band over the rice terraces to challenge the proud village of Daligdigan, ruled by his father's old rival. There he met Pumbakhayon, equal in beauty, equal in strength, who was his own opposite number in every way.",
        "Their duel began at noon and did not finish that day, or the next. They threw spears that the other caught one-handed; they wrestled along the edges of the terraces without falling; they sang taunts in metre that the listeners memorised. After three years the village leaders called a stop. Neither could defeat the other.",
        "They sat down and ate the same rice. Aliguyon married Pumbakhayon's sister Bugan, and Pumbakhayon married Aliguyon's sister Aginaya. The villages joined as kin. The chanters of the Hudhud say the lesson is not that one defeats another, but that the long duel is the way two equals learn to share rice. Each generation chants it again across the terraces.",
      ],
      zh: [
        "汉南加部落阿姆塔劳之子阿利古永，是一个生在故事里的男孩，每段长歌只听一遍就能复述。成年后，他率一支战团越过梯田去挑战骄傲的达利格迪甘村，那是他父亲昔日宿敌的领地。他在那里遇见蓬巴卡永——容貌与他相当、力量与他相当、各方面都是他的对应。",
        "二人决斗从正午开始，那一天没有分出胜负，第二天也没有。他们投出的长矛被对方单手接住；他们在梯田边沿上摔角而不坠落；他们用韵脚相互讥诮，听众照例把唱词记下来。三年过后，村中长老示意停手——谁都没法击败谁。",
        "他们坐下来同吃一碗米饭。阿利古永娶了蓬巴卡永的妹妹布甘，蓬巴卡永娶了阿利古永的妹妹阿吉纳雅，两村结成亲家。胡德胡德的歌者们说，长歌的教训不是谁胜过谁，而是这场漫长的较量教会了两个相当之人如何分享同一碗米。每一代人都会在梯田之上再唱一次。",
      ]
    },
    themes: [text("equal rivals", "对等之敌"), text("marriage alliance", "联姻"), text("rice terraces", "梯田")],
    tags: [text("ifugao", "伊富高"), text("hudhud", "胡德胡德"), text("cordillera", "科迪勒拉"), text("aliguyon", "阿利古永")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hudhud"
  },
  {
    id: "min-mahagiri",
    title: text("Min Mahagiri, the Hill Spirit", "山岭之神敏·玛哈吉利"),
    country: text("Myanmar", "缅甸"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Bamar", "缅族"),
    latitude: 21.1717,
    longitude: 95.2778,
    category: "religion",
    summary: text(
      "A blacksmith of exceptional strength is burned to death by a jealous king, becomes the chief of the thirty-seven nats, and is honoured on every Bamar housepost.",
      "一位力大无穷的铁匠被忌恨他的国王活活烧死，化为缅甸三十七位“纳神”之首，至今家家户户的门柱上都立着他的位。"
    ),
    background: text(
      "Min Mahagiri ('Lord of the Great Mountain') heads the official thirty-seven nats of Myanmar, propitiated since the eleventh century at the foot of Mount Popa.",
      "敏·玛哈吉利（“大山之主”）是缅甸官方三十七位“纳神”之首，自十一世纪起在波巴山下接受供奉。"
    ),
    narrativeParagraphs: {
      en: [
        "There once lived a blacksmith of such strength that his hammer rang for miles. The king of Tagaung feared a rumour that this man would one day take his crown. He pretended friendship and invited the blacksmith's sister into the palace as queen, then ordered the brother to come to celebrate. When the blacksmith arrived, the king had him tied to a champak tree and set it on fire.",
        "His sister, seeing the smoke, ran to the tree and threw herself into the flames. The two siblings died burning. Their spirits did not leave; they stayed in the tree, angry and powerful. The king cut down the tree and threw it into the Irrawaddy. It floated downstream to Bagan, where a later king pulled it out and carved two faces in the wood and placed them on Mount Popa.",
        "From that day Min Mahagiri, Lord of the Great Mountain, and his sister Hnamadawgyi accept offerings of coconut and bananas. They are the first of the thirty-seven nats: spirits of those who died wrongly and so will not leave the people alone. In a Bamar house, a coconut hangs by a red ribbon from a houseposts, and through it the lord of the great mountain knows he is remembered.",
      ],
      zh: [
        "从前有个铁匠，力气大到锤声能传出数里。塔贡的国王听闻有人预言此人将夺去王位，便假意相好，把铁匠的妹妹迎入王宫为后，又请铁匠入宫共贺。铁匠到时，国王命人把他绑在一棵占巴克树上，纵火点燃。",
        "妹妹看见浓烟便奔向那棵树，纵身扑入火中。兄妹双双在火中殒命。两人的魂魄未离去，留在树里，愤怒而强大。国王命人砍倒大树，抛入伊洛瓦底江。它顺流漂到蒲甘，被后来的一位国王打捞起来，命人在木中刻出两副面孔，安放在波巴山上。",
        "自那天起，“大山之主”敏·玛哈吉利与妹妹娜玛多基接受椰子、香蕉的供奉。他们是三十七纳神之首：那些蒙冤而死、灵魂不愿离开众人的存在。缅甸人家家户户都用红绳挂一只椰子在屋柱上，借此让大山之主知道——他仍被人记得。",
      ]
    },
    themes: [text("wronged spirit", "蒙冤之灵"), text("ancestor cult", "祖灵崇拜"), text("kingship fear", "王权之惧")],
    tags: [text("bamar", "缅族"), text("min mahagiri", "敏·玛哈吉利"), text("nat", "纳神"), text("mount popa", "波巴山")],
    sourceUrl: "https://en.wikipedia.org/wiki/Min_Mahagiri"
  },
  {
    id: "phadaeng-nang-ai",
    title: text("Phadaeng and Nang Aï", "帕登王子与娜艾公主"),
    originalTitle: text("ผาแดง นางไอ่", "帕登娜艾"),
    country: text("Laos", "老挝"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Lao", "老族"),
    latitude: 17.9757,
    longitude: 102.6331,
    category: "epic",
    summary: text(
      "When the naga prince Phangkhi is killed at a great water festival, his father drowns the entire city of Khom under a new lake, and the Lao explain the origin of Nong Han with a love triangle.",
      "那伽王子潘奇在大型水节中被杀，那伽之父让一整座空城沉入湖底；老挝人借这段三角恋讲述了诺甘湖的成因。"
    ),
    background: text(
      "Phadaeng Nang Ai is the great Lao verse epic of the Mekong region, performed by mor lam singers and explaining the geography of the Nong Han basin.",
      "“帕登娜艾”是湄公河流域的重要老挝韵文史诗，由“莫蓝”艺人吟唱，并解释了诺甘湖盆地的地理由来。"
    ),
    narrativeParagraphs: {
      en: [
        "Princess Nang Aï of the Khom kingdom was so beautiful her court held a water festival to choose her husband. Prince Phadaeng of a nearby kingdom and Prince Phangkhi, son of the naga king of the Mekong, both came in their best clothes. Nang Aï preferred Phadaeng but was kind to Phangkhi, who returned home crushed.",
        "Phangkhi could not stay away. He transformed into a small white squirrel and crept onto the palace tower to glimpse her again. Her father's hunter saw the squirrel and killed it. When the cooks roasted its meat for the princess's feast, all of Khom ate of it, not knowing they were eating a naga prince.",
        "Down in the river the naga king learned the truth and rose with his army. The earth opened, the city sank, and the rivers ran in to fill the bowl. Phadaeng tried to ride away with Nang Aï on his red horse, but the naga caught her below and pulled her down into the new lake. Today the wide waters of Nong Han mark where Khom was, and Lao singers still ask the old question of who is to blame.",
      ],
      zh: [
        "孔国公主娜艾美艳无双，王室举办盛大的水节为她择婿。邻国王子帕登和湄公河那伽王之子潘奇都盛装赴会。娜艾心仪帕登，却也对潘奇礼遇，潘奇怏怏归去。",
        "潘奇放不下她。他化作一只白色小松鼠潜入王宫塔顶，只为再看她一眼。她父王的猎人看见松鼠便射杀。御厨把那肉烤好作公主宴席菜，全孔国百姓共享其味，浑然不知吃下的是一位那伽王子。",
        "湄公河底的那伽王得知真相，率水族浮起。大地裂开，城市沉陷，河水涌入填满那道盆地。帕登想骑着他的红马带娜艾远遁，那伽王在水中追上来把她拖入新生成的湖底。如今诺甘湖宽阔的水面便覆盖在孔国之上，老挝歌者至今仍在唱这桩旧事，问究竟谁该为此负责。",
      ]
    },
    themes: [text("naga curse", "那伽之怒"), text("love triangle", "三角恋"), text("lake origin", "湖之起源")],
    tags: [text("lao", "老族"), text("phadaeng", "帕登"), text("nang ai", "娜艾"), text("nong han", "诺甘湖")],
    sourceUrl: "https://en.wikipedia.org/wiki/Phadaeng_Nang_Ai"
  },
  {
    id: "dewi-sri",
    title: text("Dewi Sri Becomes the Rice", "稻神德威·斯里"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Javanese", "爪哇"),
    latitude: -7.5755,
    longitude: 110.8242,
    category: "myth",
    summary: text(
      "A heavenly princess punished by her father becomes rice from her body, and her brother who tried to protect her becomes the snake that guards the field.",
      "天界公主因父怒而死，她身上的每一处化作稻米的不同部分；她那位为保护她而死的兄弟，化作守护稻田的蛇。"
    ),
    background: text(
      "Dewi Sri is the most venerated rice goddess of Java, Bali and Sundanese regions, honoured at planting and harvest with offerings called sesaji.",
      "德威·斯里是爪哇、巴厘与巽他地区最受崇敬的稻神，每逢播种与收成均有名为“sesaji”的祭品供奉。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago the heavenly princess Dewi Sri grew so beautiful that her own father, the sky-king Batara Guru, wanted to marry her. She refused. Her father, in anger, locked her away and let her die of grief. Her body, however, was not allowed to rot. From the place where she was buried different plants grew: rice from her belly, coconut from her head, fruit-bearing trees from her feet.",
        "Her younger brother had tried to defend her. The sky-king turned him into a great snake, Antaboga, who would always live near her grave. He coils around the bunds of every paddy field, hidden in the wet earth, and his quiet body keeps the rats and pests away from the rice.",
        "Each year at planting, Javanese farmers place small dolls of straw in the centre of the field. The dolls are Dewi Sri, watching over her own body as it grows again. At harvest the first sheaves are tied with red and white string and carried back to the house, and Antaboga, unseen, follows along the edge of the path.",
      ],
      zh: [
        "很久以前，天界公主德威·斯里美得连她的父亲——天王巴塔拉·古鲁也起了娶她的念头。她严词拒绝。父亲恼怒之下，把她软禁起来，听任她哀伤而死。可她的尸身并未腐坏，从下葬之处长出各种植物：稻米来自她的腹部，椰子来自她的头颅，结果之树来自她的脚。",
        "她的弟弟曾为她出头。天王把弟弟变成大蛇安塔博伽，让他永远栖息在她坟墓附近。蛇盘绕在每一片稻田的田埂里，藏在湿土中，安静的身躯把鼠类与害虫挡在稻外。",
        "每年播种时，爪哇农人会在田中央放置稻草扎成的小偶人，那就是德威·斯里，她在守望自己的身体重新长出。收成时，第一捆稻穗被红白线缠住带回家，安塔博伽在田径边沿无声相随。",
      ]
    },
    themes: [text("rice origin", "稻米起源"), text("father's wrath", "父之怒"), text("guardian snake", "守护之蛇")],
    tags: [text("javanese", "爪哇"), text("dewi sri", "德威·斯里"), text("antaboga", "安塔博伽"), text("rice ritual", "稻祭")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dewi_Sri"
  },
  {
    id: "timun-mas",
    title: text("Timun Mas Flees the Ogre", "金瓜女蒂蒙·玛斯"),
    originalTitle: text("Timun Mas", "金黄瓜"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Javanese", "爪哇"),
    latitude: -7.7956,
    longitude: 110.3695,
    category: "folktale",
    summary: text(
      "A childless widow accepts a golden cucumber from a giant in return for the daughter inside it; when the time of the bargain comes, the girl outwits the giant with four small charms.",
      "无子的寡妇接受巨人赠予的一颗金黄瓜，瓜内生出一个女儿；履约之日来临，女孩凭借四件小护身物把巨人一一击退。"
    ),
    background: text(
      "Timun Mas is a beloved Javanese folktale taught to children across Central Java; it has been retold in many regional variants.",
      "“金瓜女”是爪哇中部广受儿童喜爱的民间故事，在各地仍流传多种版本。"
    ),
    narrativeParagraphs: {
      en: [
        "An old widow lived in a hut at the edge of the forest. She prayed for a child until at last an ogre, Buto Ijo, appeared and gave her a yellow seed and a deal: plant the seed, and when the child grown from it is twelve years old, give her back to me. The widow planted the seed; from a single cucumber a girl was born, golden of skin, and she named her Timun Mas.",
        "Twelve years passed quickly. When Buto Ijo came down from the volcano to claim Timun Mas, the widow handed the girl a small sack with four gifts: cucumber seeds, needles, salt, and shrimp paste. Timun Mas ran. The ogre roared after her. She threw the cucumber seeds and a field of cucumbers grew, but he ate his way through. She threw the needles and a forest of bamboo sprang up, but he hacked through.",
        "She threw the salt and a wide sea poured between them, but he swam across. At the last hop she threw the shrimp paste, and a hot stinking lake of mud rose and pulled the ogre down. She walked home with empty pockets and full hands, and her mother counted the bargain finished. To this day Javanese parents tell their children that what looks like a small bag may hold four whole landscapes.",
      ],
      zh: [
        "森林边一间小屋里住着一位老寡妇。她日夜祈求一个孩子，最后一个巨人布托·伊乔出现，递给她一粒黄种子，并提出条件：种下它，瓜里长出的孩子满十二岁时还给我。寡妇照办，一颗黄瓜里长出一个皮色金黄的女孩，她为她取名“蒂蒙·玛斯”，意为金瓜。",
        "十二年转眼即过。布托·伊乔从火山下来索要女儿，寡妇把一只小布袋塞进蒂蒙·玛斯手里，里头是四样东西：黄瓜种子、绣花针、盐、虾酱。蒂蒙·玛斯撒腿就跑，巨人在后嘶吼。她撒下瓜种，眨眼成片瓜田挡住他，他啃食着穿过；她撒下绣花针，竹林窜起，他劈砍着穿过。",
        "她撒下盐，一片汪洋出现在他们之间，他游过来。最后一跃，她抛出虾酱，一片滚烫腥臭的泥湖隆起，把巨人吞了下去。她空着袋子、满着双手走回家，母亲与她一起合上账册。直到今天，爪哇父母会告诉孩子：一个看上去小小的袋子，里头可能装着整整四个地貌。",
      ]
    },
    themes: [text("ogre bargain", "与巨人之约"), text("clever girl", "机巧女孩"), text("magic gifts", "四件神物")],
    tags: [text("javanese", "爪哇"), text("timun mas", "蒂蒙·玛斯"), text("buto ijo", "布托·伊乔"), text("flight", "逃亡")],
    sourceUrl: "https://en.wikipedia.org/wiki/Timun_Mas"
  },
  {
    id: "crocodile-timor",
    title: text("The Crocodile Who Became Timor", "化作帝汶岛的鳄鱼"),
    country: text("Timor-Leste", "东帝汶"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Tetun", "泰顿"),
    latitude: -8.5536,
    longitude: 125.5786,
    category: "myth",
    summary: text(
      "A boy saves a small crocodile and is later carried on its back across the sea; when the crocodile grows old, its body lies down and becomes the long island of Timor.",
      "一个男孩救下小鳄鱼，多年后被它驮过大海；当鳄鱼老去，它的身躯卧下，化作狭长的帝汶岛。"
    ),
    background: text(
      "Timorese consider the crocodile their ancestor and call themselves 'grandchildren of the crocodile'; the island's shape is said to resemble a crocodile.",
      "帝汶人把鳄鱼视作祖先，自称“鳄鱼的孙辈”；帝汶岛的形状常被比作一条卧着的鳄鱼。"
    ),
    narrativeParagraphs: {
      en: [
        "A long time ago, a small crocodile lay drying in the sun in a shallow pond. He could not move and was about to die. A boy passed by, looked at him, and carried him in a wet sack back to the sea. The crocodile said, 'You have saved my life. When you need a long journey, call me.'",
        "Years later the boy had grown into a young man and wanted to know what lay beyond the horizon. He called the crocodile from the shore. The crocodile came and carried him on his back across many waters. They saw whales, ate flying fish, slept on coral. The young man's hair turned grey on the crocodile's back, and at last he asked to be put down on a quiet stretch of water to die.",
        "The crocodile gently lowered him onto the sea. The water itself rose into the shape of an island under their bodies. The crocodile lay still and was the island; the young man slept and became the first ancestor. The Timorese, looking at their long island shaped like a sleeping reptile, say crocodiles are family and never kill them lightly.",
      ],
      zh: [
        "很久以前，一条小鳄鱼在浅塘里被太阳晒得动弹不得，眼看就要死去。一个男孩路过，俯身看了它一眼，把它装进湿麻袋背回海里。小鳄鱼说：“你救了我的命。日后若有远行，呼我即来。”",
        "多年过去，男孩已长成青年，他想知道海平线那头有什么。他在岸边喊起鳄鱼。鳄鱼来了，把他驮在背上，渡过一片又一片海。他们看见鲸群，吞下飞鱼，在珊瑚上歇息。青年的头发在鳄鱼背上变白，最终他请求被放下，在静水里安然死去。",
        "鳄鱼把他轻轻放进海里。海水在他们身下竟隆起，化作一座岛。鳄鱼俯卧不动，成了岛屿本身；青年闭目长眠，成了第一个先祖。帝汶人望着自己这条像睡着的鳄鱼一样狭长的岛屿，说鳄鱼是亲人，从不轻易杀害它。",
      ]
    },
    themes: [text("ancestor animal", "祖先之兽"), text("origin of island", "岛屿起源"), text("gratitude", "报恩")],
    tags: [text("tetun", "泰顿"), text("timor", "帝汶"), text("crocodile", "鳄鱼"), text("island origin", "岛屿起源")],
    sourceUrl: "https://en.wikipedia.org/wiki/Folklore_of_Timor"
  },
  {
    id: "badang-strongman",
    title: text("Badang the Strong of Singapura", "新加坡力士巴当"),
    country: text("Singapore", "新加坡"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Malay", "马来"),
    latitude: 1.2864,
    longitude: 103.854,
    category: "folktale",
    summary: text(
      "A poor fisherman feeds a hungry water spirit and is given strength enough to lift a rock no man can move, becoming the bodyguard of the king of old Singapura.",
      "贫穷的渔夫巴当喂饱饥饿的水灵，因此获得无人能搬的巨石都能举起的力量，成为古新加坡王的卫士。"
    ),
    background: text(
      "Badang is a celebrated strongman of the Malay Annals (Sejarah Melayu) at the court of fourteenth-century Singapura.",
      "巴当是《马来纪年》（Sejarah Melayu）中十四世纪“新加坡国”王廷的著名力士。"
    ),
    narrativeParagraphs: {
      en: [
        "Badang fished a tributary near Singapura but never caught enough to eat. One day he found a small fish-eating spirit caught in his trap, starving. He shared his rice with it. The spirit, in return, offered him any wish; Badang asked only for the strength to do his work. The spirit handed him a piece of fruit and told him to swallow the seeds.",
        "From that morning Badang could uproot trees and lift logs the size of canoes. Word reached the king of Singapura, who took him into his service. Foreign rajas sent their own strong men to challenge him: he threw them, lifted their stones, and once hurled a great rock from the palace to the river mouth, where it stood for centuries as the Singapore Stone.",
        "Badang grew old and asked permission to die in his own village. The king sent him with a boat and many gifts. When he died, the king ordered his grave dug at a high place by the sea so passing ships could pay their respects. The Singapore Stone, though broken, became a marker of the kingdom; pieces of it survive today, and Singaporean children are still taught that strength given by a kind heart returns to the giver.",
      ],
      zh: [
        "巴当在新加坡附近的支流捕鱼为生，可总打不到足够的鱼吃。某日他发现一只食鱼的小水灵被困在自己渔篓里，奄奄一息。他把饭分给它一半。小水灵许他一个愿，巴当只求能有力气把自己的活做好。水灵递给他一颗果子，让他把果核吞下。",
        "从第二天清晨起，巴当能连根拔起大树、举起独木舟般粗的圆木。新加坡国王闻名收他入宫。外邦诸王不服，派出本族力士前来比试，他一一摔倒、举起对方运来的巨石，曾把一块大岩从王宫掷到河口，立在那里数百年，即“新加坡石”。",
        "巴当年老时请准回乡而死。国王赐他船只与厚礼。他去世后，国王命人将他葬在临海的高地，让过往船只致敬。新加坡石虽已破碎，残块至今仍存；新加坡的孩子仍被告知：好心换来的力量，最终会回到那位给予者身上。",
      ]
    },
    themes: [text("strength gift", "赐力"), text("loyal warrior", "忠勇之士"), text("monument", "纪念石")],
    tags: [text("malay", "马来"), text("badang", "巴当"), text("singapore stone", "新加坡石"), text("sejarah melayu", "马来纪年")],
    sourceUrl: "https://en.wikipedia.org/wiki/Badang"
  },
  {
    id: "roro-jonggrang",
    title: text("Roro Jonggrang and the Thousand Temples", "罗罗·琼格朗与千座庙宇"),
    country: text("Indonesia", "印度尼西亚"),
    region: text("Southeast Asia", "东南亚"),
    culture: text("Javanese", "爪哇"),
    latitude: -7.752,
    longitude: 110.4915,
    category: "folktale",
    summary: text(
      "A reluctant princess asks her supernatural suitor to build a thousand temples in one night, then tricks him at the last temple; cursed, she becomes the final statue at Prambanan.",
      "不愿出嫁的公主要求超自然的求婚者在一夜之间建起千座庙宇，最后一刻她耍诈使其落败，反被诅咒成普兰巴南最后一尊石像。"
    ),
    background: text(
      "Roro Jonggrang ('Slender Princess') is the folktale explanation for the great Hindu temple complex of Prambanan, near Yogyakarta.",
      "“罗罗·琼格朗”意为“纤瘦公主”，是民间对日惹附近大型印度教神庙群普兰巴南成因的解释。"
    ),
    narrativeParagraphs: {
      en: [
        "Prince Bandung Bondowoso of Pengging conquered the kingdom of Boko and asked the late king's daughter, the slender princess Roro Jonggrang, to be his queen. She did not want him. To refuse without being killed, she set a single condition: build one thousand temples between sunset and the first crow of the rooster.",
        "Bandung Bondowoso called the spirits of the earth. They lifted stones from rivers and forests, walked them up the plain, and stacked them as fast as men can lay bricks. Roro Jonggrang counted the temples and grew afraid. She woke the village women, told them to pound rice and burn straw east of the temple grounds. The roosters thought morning had come and crowed.",
        "The spirits, panicked, fled into the ground. Nine hundred and ninety-nine temples stood; the last had only its base laid and a single statue half-finished. Bandung Bondowoso, realising the trick, cursed Roro Jonggrang to become that last statue. She still stands today, slender and unfinished, at the heart of Prambanan, looking out over the temples she made happen but never married.",
      ],
      zh: [
        "彭金王子班东·邦多沃索征服了博科王国，向已故国王的女儿——纤瘦的公主罗罗·琼格朗求婚为后。她不愿嫁他。为了不被处死又能拒绝，她只提一条：在日落与第一声鸡鸣之间，造起一千座庙宇。",
        "班东·邦多沃索召出地灵，他们从河谷和林间搬来石头，沿平原一路抬上来，速度比工匠砌砖还快。罗罗·琼格朗一座一座数着，心里发慌。她叫醒村里妇女，命她们在庙宇东侧捣米焚草。鸡群以为天明，齐齐报晓。",
        "地灵以为夜尽，惊慌四散，钻入土中。九百九十九座庙宇耸立，最后一座只打好了基座，唯有一尊半成的石像。班东·邦多沃索识破她的诡计，把她诅咒为那尊未完成的石像。今天她仍纤瘦地站在普兰巴南庙群的中心，俯瞰着她促成、却终未嫁的千座庙。",
      ]
    },
    themes: [text("unwilling bride", "拒婚"), text("cursed statue", "化石之诅"), text("temple origin", "庙宇起源")],
    tags: [text("javanese", "爪哇"), text("roro jonggrang", "罗罗·琼格朗"), text("prambanan", "普兰巴南"), text("bandung bondowoso", "班东·邦多沃索")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rara_Jonggrang"
  },
  {
    id: "hina-moon-rise",
    title: text("Hina Rises to the Moon", "希娜升上月亮"),
    country: text("Hawaii (United States)", "夏威夷（美国）"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Hawaiian", "夏威夷"),
    latitude: 19.8968,
    longitude: -155.5828,
    category: "myth",
    summary: text(
      "Tired of beating bark cloth for her family, the goddess Hina climbs the rainbow with her calabash and gourd and settles on the moon, where her tapa-beating shapes the lunar nights.",
      "厌倦了为家人槌打树皮布的女神希娜，提着葫芦攀上彩虹，搬到月亮上去住——她在月上敲打“塔帕布”的声响仍塑造着月亮的盈缺。"
    ),
    background: text(
      "Hina is one of the great mother goddesses across Polynesia; the Hawaiian version centres on the moon and her decision to leave the noisy world below.",
      "希娜是整个波利尼西亚的伟大母神之一，夏威夷版本聚焦于她与月亮，以及她离开纷扰人间的决定。"
    ),
    narrativeParagraphs: {
      en: [
        "Hina lived with her sons and grandsons in a thatched house above the Wailuku River. Every day she beat tapa cloth on a long board, every evening she cooked, every night she cleaned. Her family loved her and did not notice how tired she had grown. The river roared past the house, indifferent.",
        "One morning, after another quarrel about food, Hina set down her tapa beater and looked up. A rainbow stood across the valley, one foot in the river and one foot at the doorstep. She picked up her calabash gourd and walked up the rainbow as if it were a path. The sun was hot; she nearly fell and decided the sun was not her place. She turned to the night sky and kept climbing.",
        "By dusk she had reached the moon. There she set her gourd down, smoothed a flat place, and resumed her tapa-beating. Her family looked up and saw her shadow against the moon's face. The Hawaiians say the woman in the moon is Hina, the dark patches are the tapa she has spread, and the soft sound that comes down at high tide is the mallet still striking.",
      ],
      zh: [
        "希娜与儿孙住在怀卢库河上方的茅屋里。她每天槌打“塔帕布”，每天傍晚做饭，每天夜里收拾。家人爱她，却注意不到她有多累。河水在屋外咆哮，毫不在意。",
        "一个清晨，又一场关于吃食的小争吵后，希娜放下槌子抬眼一看：一道彩虹横跨山谷，一脚在河里，一脚正落在自家门口。她提起她的大葫芦，沿着彩虹拾级而上。烈日炙人，她差点掉下来——便明白太阳不是她的去处，于是转向夜空，继续往上爬。",
        "黄昏时她抵达月亮。她把葫芦放下，铺平一块地方，又重拾槌打“塔帕布”的活儿。家人抬头望去，能看见她在月亮表面的影子。夏威夷人说，月中的那位女子就是希娜，那些暗斑是她铺开的“塔帕布”；涨潮时空中传下的轻响，是她的木槌仍在轻敲。",
      ]
    },
    themes: [text("women's work", "女性劳动"), text("escape", "逃离"), text("moon origin", "月之起源")],
    tags: [text("hawaiian", "夏威夷"), text("hina", "希娜"), text("tapa cloth", "塔帕布"), text("rainbow", "彩虹")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hina_(goddess)"
  },
  {
    id: "samoa-tagaloa",
    title: text("Tagaloa Lays the Lands", "塔加洛阿铺设大地"),
    country: text("Samoa", "萨摩亚"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Samoan", "萨摩亚"),
    latitude: -13.759,
    longitude: -172.1046,
    category: "myth",
    summary: text(
      "Tagaloa stands alone in the void, throws down a stone that becomes Manuʻa, and then plants the rest of the Samoan islands and the people who walk on them.",
      "塔加洛阿独自立于虚空，掷下一块石头化作马努阿岛，又依次铺设萨摩亚群岛与岛上的居民。"
    ),
    background: text(
      "Tagaloa-a-lagi (Tagaloa of the Heavens) is the senior creator god of the Samoan, Tongan, Tuvaluan, and Tokelauan peoples.",
      "“天上的塔加洛阿”是萨摩亚、汤加、图瓦卢与托克劳人共同的至高造物者。"
    ),
    narrativeParagraphs: {
      en: [
        "Before sea or sky, Tagaloa stood alone in the empty space. He thought into being a rock, and the rock listened. He told the rock to split into Papa, the under-rock, and Lagi, the upper sky. Between them he placed an egg that became the islands of Manuʻa, the first land east of the rising sun.",
        "From Manuʻa he stretched his arm and let small stones drop, and Upolu, Savaiʻi, and the other islands of Samoa appeared. He sent down a long vine that grew across the islands and became the first people. Each cluster of leaves was a different family, each root a different chief.",
        "When his work was done, Tagaloa did not stay. He returned to Lagi above the sky, but he left messengers and pulse-points scattered through the islands so the chiefs could send word back to him at need. The Samoan say the first land of all is Manuʻa and that every Samoan family can be traced, leaf by leaf, back to the long vine Tagaloa sent down.",
      ],
      zh: [
        "海与天尚未出现之前，塔加洛阿独自立于空旷。他默想出一块岩石，岩石便听话生成。他命这块岩石分开为下层的“帕帕”与上层的“拉吉”。他在两者之间放下一颗蛋，蛋孕育出最早的陆地——马努阿群岛，位于日出之处的更东方。",
        "他从马努阿伸出手臂，撒下小石块，乌波卢、萨瓦伊以及萨摩亚其他岛屿一一浮起。他又自天垂下一条长蔓，长蔓爬过群岛，化作最早的人。每一丛叶子是一个家庭，每一根根须是一位酋长。",
        "工作完成后，塔加洛阿没有留下。他回到天上的“拉吉”，却在群岛各处留下使者与脉点，让酋长们必要时可以把话送上去。萨摩亚人说，最早的陆地是马努阿，每一户萨摩亚人家都能沿着那条长蔓的叶与根，一片一片追回到塔加洛阿身上。",
      ]
    },
    themes: [text("creator god", "造物者"), text("primal egg", "原初之蛋"), text("origin of peoples", "族源")],
    tags: [text("samoan", "萨摩亚"), text("tagaloa", "塔加洛阿"), text("manua", "马努阿"), text("creation", "创世")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tagaloa"
  },
  {
    id: "tonga-aho-eitu",
    title: text("'Aho'eitu Climbs to the Sky", "阿霍埃伊图攀天"),
    country: text("Tonga", "汤加"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Tongan", "汤加"),
    latitude: -21.1789,
    longitude: -175.1982,
    category: "history",
    summary: text(
      "The first Tuʻi Tonga, 'Aho'eitu, climbs a banyan tree into the sky to meet his divine father, survives his jealous brothers' cooking pot, and is sent back down to rule the islands.",
      "首位“图依汤加”阿霍埃伊图爬上巨大的榕树进入天界寻找神父，在嫉妒的兄弟们的烹锅中存活，被遣送回岛屿成为人间之王。"
    ),
    background: text(
      "'Aho'eitu founded the Tuʻi Tonga dynasty around the tenth century; his story explains the sacred kingship of Tonga.",
      "阿霍埃伊图约在十世纪开创“图依汤加”王朝，他的故事解释了汤加神圣王权的来源。"
    ),
    narrativeParagraphs: {
      en: [
        "On the island of Tongatapu lived a woman named ʻIlaheva, and she bore a boy whose father was the sky-god Tangaloa. The boy grew up not knowing his father. When his mother finally told him, ʻAhoʻeitu climbed a huge banyan tree whose top broke the clouds. He walked over the sky-fields and met Tangaloa, who embraced him and called him son.",
        "Tangaloa had other sons in the sky. They envied the brown boy from below. When ʻAhoʻeitu went swimming, they took him to a cooking pit, killed him, and ate him. Tangaloa, calling for his son, learned what had happened. He made the brothers vomit ʻAhoʻeitu back into a cooking bowl, reassembled his bones, and breathed him alive.",
        "Then Tangaloa pronounced his judgment: ʻAhoʻeitu would return to earth as the first Tuʻi Tonga, the sacred king. His jealous brothers would also descend, but only as his servants and chiefs. ʻAhoʻeitu climbed down the banyan and took his crown. Every Tuʻi Tonga after him traced his right to rule to the boy who survived his brothers' cooking pot.",
      ],
      zh: [
        "汤加塔布岛上住着一位名叫伊拉赫娃的女子，她为天神塔加洛阿生下一子，孩子从小不知父亲是谁。母亲终于把真相告诉他后，阿霍埃伊图爬上一棵高大到顶破云层的榕树，走过天上的田野，与塔加洛阿相认，神父拥抱他、唤他为儿。",
        "塔加洛阿在天上还有别的儿子。他们嫉妒这个从下界来的褐色少年。一次阿霍埃伊图去游泳，兄弟们把他抓到烹坑，杀掉，吃掉。塔加洛阿呼唤儿子未果，得知真相，便令众兄长把阿霍埃伊图吐回一只木碗里，重新把骨头拼齐，对他吹气复活。",
        "随后塔加洛阿宣布裁决：阿霍埃伊图将回到人间，作为最早的“图依汤加”——神圣的国王；嫉妒的兄长们也将下到人间，但只能作为他的近臣与酋长。阿霍埃伊图沿榕树爬下，戴上王冠。此后每一位“图依汤加”都把自己的合法王统追溯到这位从兄弟烹锅中活过来的少年。",
      ]
    },
    themes: [text("divine kingship", "神圣王权"), text("brotherly murder", "骨肉相残"), text("resurrection", "复活")],
    tags: [text("tongan", "汤加"), text("tui tonga", "图依汤加"), text("tangaloa", "塔加洛阿"), text("banyan tree", "榕树")],
    sourceUrl: "https://en.wikipedia.org/wiki/%CA%BBAho%CA%BBeitu"
  },
  {
    id: "tahiti-hiro-navigator",
    title: text("Hiro the Master Navigator", "航海大师希罗"),
    country: text("French Polynesia", "法属波利尼西亚"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Tahitian", "塔希提"),
    latitude: -17.5516,
    longitude: -149.5585,
    category: "epic",
    summary: text(
      "Born from the loins of an undersea ancestor, Hiro builds a great canoe out of star-aligned woods, names every wave on the way to far islands, and becomes the patron of all Polynesian voyagers.",
      "出生于深海祖先腰间的希罗，以星象选木造起大独木舟，给驶往远岛途中每一道浪命名，从此成为整个波利尼西亚航海者的守护神。"
    ),
    background: text(
      "Hiro is a great culture hero of Tahiti, the Cook Islands and other Society and Austral archipelagos, especially associated with the building of voyaging canoes.",
      "希罗是塔希提、库克群岛及社会群岛、奥斯特拉尔群岛广泛传颂的文化英雄，尤其与远洋独木舟的建造关系密切。"
    ),
    narrativeParagraphs: {
      en: [
        "When Hiro was born, his grandfather told him a canoe is not just wood; it is wood remembered. The boy went into every forest of the island and asked every kind of tree which star it loved. From the trees that named a steady star he took planks; from those that named a wandering star he took braces. He bound them with sennit and stretched a sail that took the wind without complaint.",
        "Then he travelled. The Cook Islands, Tubuai, Rapa, Mangareva and the farthest Marquesas all remember him visiting their ancestors. He gave each wave on the open sea a name, so that his crew could call it by name and not be afraid. He carried fire on a small reef of clay so that landfall after long darkness would not be cold.",
        "When Hiro grew old he hauled his great canoe up the beach at Borabora and laid it on a hill. He turned its hull into a rock so storms could not rot it. The stone is still there. Sailors at sea who lose their bearings still mutter Hiro's name and ask him to recall the right wave to them. The Tahitians say no one who calls him is ever truly lost.",
      ],
      zh: [
        "希罗刚出生时，祖父对他说：独木舟不只是木头，而是被记住的木头。少年走遍岛上每一片森林，向每一种树询问它最爱哪颗星。他用对准恒星的树做船板，用对应游星的树做支撑，用椰丝缠紧，再撑起一面不抱怨风的帆。",
        "随后他出航。库克群岛、图布艾、拉帕、芒加雷瓦乃至最远的马克萨斯群岛，都记得他曾拜会过他们的祖先。他给开阔海上的每一道浪命名，让他的船员能呼名应之，不再惧怕。他在一块小小的泥礁上随身带火，让漫长黑夜后的登陆不再寒冷。",
        "希罗老去时，他把那艘大独木舟拉上波拉波拉岛的沙滩，置于山岗之上。他将船身化作石头，让风暴无法腐蚀它。那块石头至今犹在。海上失去方向的水手仍会低声呼唤希罗的名字，求他唤回正确的那道浪。塔希提人说，凡呼他名字的人，从不会真正迷航。",
      ]
    },
    themes: [text("voyaging", "远航"), text("star navigation", "星象导航"), text("named waves", "命浪")],
    tags: [text("tahitian", "塔希提"), text("hiro", "希罗"), text("polynesian voyaging", "波利尼西亚航海"), text("canoe", "独木舟")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hiro_(Polynesian_mythology)"
  },
  {
    id: "cook-ina-shark",
    title: text("Ina Rides the Shark to Tinirau", "伊娜骑鲨寻提尼劳"),
    country: text("Cook Islands", "库克群岛"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Rarotongan", "拉罗汤加"),
    latitude: -21.2367,
    longitude: -159.7777,
    category: "folktale",
    summary: text(
      "When Ina is promised to the chief of fish Tinirau on a distant island, she rides four sharks in turn, hitting each one when it dives, and leaves dark stripes on the heads of sharks ever after.",
      "伊娜被许配给远岛上的鱼王提尼劳，她依次骑过四条鲨鱼，每条潜水时便敲其头；从此鲨鱼头上都留下深色条纹。"
    ),
    background: text(
      "Ina and Tinirau are the great lovers of Cook Islands folklore; their crossing of the sea explains both shark markings and the proper marriage of high-born women.",
      "伊娜与提尼劳是库克群岛民间故事中最有名的爱侣，他们之间的渡海情节同时解释了鲨头上的斑纹与高贵女子的婚配规矩。"
    ),
    narrativeParagraphs: {
      en: [
        "Ina, the most beautiful young woman of her island, was promised by her father to the fish-chief Tinirau, who lived on a distant island ruled from inside a pond. The journey by canoe was long and the seas were rough. Ina stood at the reef and called the fishes for a ride.",
        "A small mackerel came, but it was too narrow. A flying fish came, but it was too quick to sit on. A shark came, broad and strong. Ina sat on its head and rode out to sea. The shark grew thirsty in the heat and dived. Ina, dropped into the salt, slapped it on the forehead with her coconut. From that day every shark of that kind has a dark mark above its eyes.",
        "Three more sharks carried her in turn, each marked in its own way: stripes on the back, spots on the side, a dark patch under the chin. By the fourth shark she reached the island of Tinirau, who saw her sitting on his beach and called her his queen. The lovers ruled the pond and the open sea, and the markings of the sharks are still the receipts of Ina's voyage.",
      ],
      zh: [
        "伊娜是岛上最美的少女，父亲把她许配给居住在一座远岛池塘里的鱼王提尼劳。乘独木舟去要走很久，海况恶劣。伊娜站在礁石上呼唤海中的鱼，请它们载她渡海。",
        "一条小马鲛鱼游来，太窄了坐不稳；一条飞鱼游来，太快了根本骑不上；接着一条鲨鱼游来，宽厚而有力。伊娜坐在它的头上向外海驶去。鲨鱼在烈日下口渴，潜入水中。伊娜被甩进咸水，拿椰子在鲨头上一拍。从那一天起，这种鲨鱼的眼上方便永远留着一道黑痕。",
        "另外三条鲨鱼依次驮她过海，各自留下不同的标记：背上的条纹、侧面的斑点、下颌处一片深色。到第四条鲨鱼时，她终于抵达提尼劳的岛屿。鱼王见她坐在自己的海滩上，便迎她为后。情侣共治池塘与外海，鲨鱼头上的斑纹至今仍是这次远行的收据。",
      ]
    },
    themes: [text("crossing the sea", "渡海"), text("shark markings", "鲨斑由来"), text("marriage", "婚姻")],
    tags: [text("rarotongan", "拉罗汤加"), text("ina", "伊娜"), text("tinirau", "提尼劳"), text("sharks", "鲨鱼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ina_(mythology)"
  },
  {
    id: "makemake-birdman",
    title: text("Makemake and the Birdman", "马克马克与鸟人"),
    country: text("Chile", "智利"),
    region: text("Polynesia", "波利尼西亚"),
    culture: text("Rapa Nui", "拉帕努伊"),
    latitude: -27.1127,
    longitude: -109.3497,
    category: "religion",
    summary: text(
      "On Rapa Nui the sky-god Makemake choses the year's leader through a swim race to fetch the first sooty tern egg of the season from the islet of Motu Nui.",
      "在拉帕努伊（复活节岛），天神马克马克通过一项每年的渡海赛——到莫图努伊小岛取回当年第一枚乌燕鸥蛋——选出岛上的“鸟人”首领。"
    ),
    background: text(
      "After the era of moai-raising, the Rapa Nui developed the birdman cult of Tangata Manu centred at Orongo and dedicated to Makemake.",
      "在摩艾石像时代之后，拉帕努伊人发展出以奥龙戈为中心、献给马克马克神的“鸟人”崇拜——Tangata Manu。"
    ),
    narrativeParagraphs: {
      en: [
        "When the moai had grown silent at their bases and the great chiefs had spent themselves quarrelling, the Rapa Nui asked the sky-god Makemake for a new way to choose leaders. Makemake answered that every spring, when the sooty terns came back to the small islets, he would name a winner.",
        "Each clan sent its best swimmer-runner to the cliff of Orongo. From there the contestants ran down, swam through sharks to the islet of Motu Nui, hid in the rocks for days, and waited for the first sooty tern to lay its first egg. The man who returned across the strait with that egg unbroken in a basket on his head became the new birdman, and his clan ruled for a year.",
        "The new birdman lived in seclusion, painted, fed, kept apart from all conflict; he was the sign of Makemake's choice. The cult lasted until missionaries forbade it. Even today the cliff at Orongo is engraved with hundreds of birdman figures, and Rapa Nui children learn how their grandfathers chose leadership not by inheritance but by the breath one held under the longest wave.",
      ],
      zh: [
        "摩艾在基座旁日益沉默，大酋长们因争斗自耗，拉帕努伊人转而向天神马克马克请求一种新的领袖选拔方式。马克马克回应说，每当春日乌燕鸥归来小岛时，他便宣告一位胜者。",
        "每个氏族派出最强的泳跑健儿，齐集奥龙戈悬崖。选手沿崖飞奔下到海面，穿越鲨鱼出没的海域，游到莫图努伊小岛，在岩缝里潜伏数日，等待第一只乌燕鸥下出第一枚蛋。把那枚蛋装在头顶篮中、毫发无损地游回的人，就是新的“鸟人”，他的氏族将统治一年。",
        "新鸟人随即闭关，被涂彩、被供奉、被隔绝于一切纷争之外——他是马克马克选择的见证。直到传教士禁止才告中止。今天奥龙戈的崖石上仍刻着数百只鸟人形象，拉帕努伊孩子们学到——他们的祖父曾不靠血脉传承，而靠能在最长一道浪下憋住的那口气来选出领袖。",
      ]
    },
    themes: [text("ritual contest", "仪式竞赛"), text("birdman", "鸟人"), text("annual kingship", "岁次王位")],
    tags: [text("rapa nui", "拉帕努伊"), text("easter island", "复活节岛"), text("makemake", "马克马克"), text("tangata manu", "鸟人")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tangata_manu"
  },
  {
    id: "sido-papua-ancestor",
    title: text("Sido Travels Beyond Death", "希多走向死后的世界"),
    country: text("Papua New Guinea", "巴布亚新几内亚"),
    region: text("Melanesia", "美拉尼西亚"),
    culture: text("Kiwai", "基瓦伊"),
    latitude: -8.65,
    longitude: 143.7833,
    category: "myth",
    summary: text(
      "Sido, the first man to die among the Kiwai, walks west along the Fly River and opens the country of the dead, where every later Kiwai must follow him.",
      "基瓦伊人中第一位死亡的男子希多，沿弗莱河向西行走，打开了亡者之国——以后的每位基瓦伊人都要循他的路前去。"
    ),
    background: text(
      "Among the Kiwai of the Fly River delta in southern Papua New Guinea, Sido is the path-opener for the spirits of the dead.",
      "在巴布亚新几内亚南部弗莱河三角洲的基瓦伊人中，希多是为亡灵开路的先行者。"
    ),
    narrativeParagraphs: {
      en: [
        "Sido was the first man among the Kiwai to grow old enough to die. He went to sleep one evening and did not wake. His body lay still, but his spirit stood up beside it and looked toward the west. He saw a path he had never noticed before, running through the mangroves and out over the saltwater.",
        "He walked along the path. The crocodiles ignored him. The mosquitoes turned away from his skin. He passed villages of small lights that had no people, and a long beach where canoes lay upside-down. At the western end of the beach he came to a wide pool with a hut on the far side and a low fire burning.",
        "Sido entered the hut and found space for many people. He laid down on a mat and waited. From that day every spirit of the Kiwai dead walks Sido's path west, and the elders teach a child where to step in case the ground is slippery, because Sido has set the trail but each one of us has to walk it.",
      ],
      zh: [
        "希多是基瓦伊人中第一位年老至于死亡的男子。一个夜里他睡下，再未醒来。身体安静地躺着，灵魂从一旁站起来，望向西方。他看见一条以前没注意过的小径，穿过红树林，越过咸水。",
        "他沿小径走去。鳄鱼不理他，蚊子也避开他的皮肤。他经过有小灯却无人居住的村落，经过一片倒扣着独木舟的长长沙滩。沙滩的最西端有一汪宽池，池对岸是一座屋子，屋前烧着一团小火。",
        "希多走进屋子，发现里头有给许多人的位置。他在席上躺下等候。从那一天起，基瓦伊每一个亡者的魂都沿着希多向西的小径走去；长辈会教孩子哪里下脚——地是滑的，希多虽已踩出路来，可这条路每个人都要自己走。",
      ]
    },
    themes: [text("first death", "初死"), text("path of the dead", "亡者之路"), text("ancestor pioneer", "先行祖")],
    tags: [text("kiwai", "基瓦伊"), text("sido", "希多"), text("fly river", "弗莱河"), text("afterlife", "来世")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kiwai_people"
  },
  {
    id: "kakamora-forest",
    title: text("The Kakamora of the Forest", "森林中的卡卡莫拉"),
    country: text("Solomon Islands", "所罗门群岛"),
    region: text("Melanesia", "美拉尼西亚"),
    culture: text("Makira", "马基拉"),
    latitude: -10.5833,
    longitude: 161.9167,
    category: "creature",
    summary: text(
      "Small hairy people of Makira Island, the Kakamora live in caves and trees, steal yams from gardens, and dance in numbers no taller than the gardener's hip.",
      "在马基拉岛的森林里，卡卡莫拉是一群多毛的小人。他们住在洞穴和树上，偷取园中的薯，举行舞会时身高不及园丁的腰。"
    ),
    background: text(
      "Kakamora are widely told of on Makira (San Cristóbal) in the Solomon Islands as small forest beings, sometimes friendly, sometimes thieving.",
      "卡卡莫拉广泛流传于所罗门群岛的马基拉岛（圣克里斯托瓦尔），他们是林中小人，时而友善、时而偷盗。"
    ),
    narrativeParagraphs: {
      en: [
        "On Makira Island the men plant yams in clearings cut from the dark forest. They build fences and check the gardens at dawn. Sometimes the fence is intact and yet a row of yams is gone. The old people say, 'It was the Kakamora.'",
        "The Kakamora are small folk, less than half a person's height, covered in dark hair, with sharp nails. They live in caves on the cliffs and in the high branches of the great trees. They are not always thieves. A traveller who sleeps lost in the bush may wake to find a wild fruit laid beside him and a song fading away through the canopy.",
        "When the missionaries came and laughed at the stories, the Kakamora were not offended. They went on with their work. Children on Makira still know what to do if they hear small footsteps behind them in the garden at night: stop, set down one yam, and walk on without looking back. The yam will be gone the next morning, and the rest of the garden untouched.",
      ],
      zh: [
        "马基拉岛上的男人们在幽暗森林里辟出小块清地种薯。他们筑起篱笆，每天清晨去查看园地。有时篱笆完好，可一整排薯却凭空消失。老人们便说：“是卡卡莫拉。”",
        "卡卡莫拉是身高不及大人一半的小族，浑身覆有黑毛，指甲尖利。他们住在崖间洞穴与大树高枝上。他们也并非总是偷盗。林中迷路的旅人睡下后，醒来时身边可能多了一只野果，远处树冠间还有一缕渐渐淡去的小调。",
        "传教士来到、嘲笑这些故事时，卡卡莫拉并未在意，照旧做自己的事。今日马基拉的孩子若夜里在园中听见身后传来小步声，也都知道该怎么做：停下，把一只薯放在地上，不回头继续走。第二天那只薯不见了，园里其余完好如初。",
      ]
    },
    themes: [text("forest folk", "林中小族"), text("garden theft", "园中失薯"), text("respect", "互敬")],
    tags: [text("makira", "马基拉"), text("kakamora", "卡卡莫拉"), text("solomon islands", "所罗门"), text("forest folk", "林中小族")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kakamora"
  },
  {
    id: "roy-mata-burial",
    title: text("The Burial of Roy Mata", "罗伊·马塔的葬礼"),
    country: text("Vanuatu", "瓦努阿图"),
    region: text("Melanesia", "美拉尼西亚"),
    culture: text("Ni-Vanuatu", "瓦努阿图"),
    latitude: -17.65,
    longitude: 168.1833,
    category: "history",
    summary: text(
      "When the great peace-maker Roy Mata dies on Eretoka Island, his rivals are buried with him alive, bound to a peace they can no longer break.",
      "伟大的和平缔造者罗伊·马塔在埃雷托卡岛去世后，他的对手活生生地与他一同入葬，被绑在他们再也无法毁掉的和平之中。"
    ),
    background: text(
      "Roy Mata, a chief active around 1265 CE in central Vanuatu, was rediscovered through archaeology and his burial site is a UNESCO World Heritage site.",
      "罗伊·马塔是约 1265 年前后活跃于瓦努阿图中部的大酋长，他的墓葬通过考古重见天日，已列入联合国教科文组织世界遗产名录。"
    ),
    narrativeParagraphs: {
      en: [
        "Before Roy Mata, the islands of central Vanuatu were a chain of quarrels. Clans raided one another and the chiefs of each island feared their neighbours. Then Roy Mata arrived from the west, gathered the chiefs, and arranged the totems and marriages so that no chief could fight without injuring his own relatives.",
        "Peace held while Roy Mata lived. He grew old and felt his strength fading. He asked to be carried to the small island of Eretoka so that his death would not unsettle any one island's politics. Many of the old rivals went with him, drinking kava, telling stories, sometimes still glaring across the fire.",
        "When Roy Mata died, his followers dug a great grave on the beach. They laid him in the centre and around him they buried, alive, several of the old rivals, paired man and woman, hand bound to hand. Whatever feuds those rivals had brought to Eretoka now lay with them under the sand. For generations after the peace stood, and when archaeologists opened the grave in modern times, they found the bones in exactly the formation the songs described.",
      ],
      zh: [
        "罗伊·马塔出现之前，瓦努阿图中部各岛屿争斗不休。各岛酋长互相猜忌，村寨之间常有袭击。罗伊·马塔从西方而来，召集众酋长，重新安排图腾与婚姻——任何一位酋长再要开战，势必伤及自己的姻亲。",
        "在他活着的时候和平得以维持。他渐渐衰老，感到力量褪去，便请求被抬到小岛埃雷托卡——好让自己之死不至于动摇任何一岛的政事。许多旧日的对手随行，喝卡瓦酒、讲故事，火堆两旁仍偶有不善的对望。",
        "罗伊·马塔过世后，随行者在海滩上挖出一座大墓。他们把他葬于墓中央，又把几对旧日对手活生生埋在他四周——成双成对，男女相挽，手与手相绑。他们带到埃雷托卡岛上的所有积怨，从此与他们一同沉入沙下。此后数代和平稳固；现代考古学家重新打开这座墓时，骨骸正以歌谣中描述的姿势排列。",
      ]
    },
    themes: [text("peace-making", "缔结和平"), text("burial", "葬礼"), text("paired rivals", "对手共葬")],
    tags: [text("vanuatu", "瓦努阿图"), text("roy mata", "罗伊·马塔"), text("eretoka", "埃雷托卡"), text("kava", "卡瓦")],
    sourceUrl: "https://en.wikipedia.org/wiki/Chief_Roi_Mata%27s_Domain"
  },
  {
    id: "yap-stone-money",
    title: text("The Stone Money of Rai", "拉伊石币"),
    country: text("Federated States of Micronesia", "密克罗尼西亚联邦"),
    region: text("Micronesia", "密克罗尼西亚"),
    culture: text("Yapese", "雅浦"),
    latitude: 9.5167,
    longitude: 138.1167,
    category: "history",
    summary: text(
      "The Yapese sail to Palau, quarry great limestone discs, and bring them home through open ocean; the larger the stone, the longer its story of risk—and the more it can buy.",
      "雅浦人远航至帕劳采下巨大的石灰岩圆盘，再渡远海运回岛上；石头越大，其上承担的远航故事越长——它能换来的东西也越多。"
    ),
    background: text(
      "The Yapese rai stones are an iconic non-portable currency in Micronesia; the value of a stone depends on its history as much as on its size.",
      "雅浦人的“rai”石币是密克罗尼西亚著名的非便携式货币，一块石头的价值，除了大小，更取决于它背后的历史故事。"
    ),
    narrativeParagraphs: {
      en: [
        "On Yap the heavy money does not travel hand to hand. It stands by the village paths, sometimes a stone wheel taller than a man, sometimes a thin disc carried on a pole between two strong men. The chief tells you which rai belongs to which family. When something is bought or owed, the rai stays where it is and only the ownership changes.",
        "Each rai began as a slab of clear limestone in caves on the Palauan island of Babeldaob. Crews of Yapese rowed there in long canoes, cut the discs, and floated them home on rafts. Sometimes a storm dropped a stone into the sea on the way back. The stone stayed on the seabed, but its owners kept saying, 'It is ours, and now everyone knows where it is.' That stone might still be used in trade.",
        "When Americans first asked how this could be money, the elders shrugged: a coin is what people agree it is. A rai that has crossed open ocean and survived storms and theft is heavier in memory than in stone. To this day, even with the dollar in their pockets, families on Yap measure the largest gifts—a marriage payment, a peace settlement—in rai. The longer the story behind the stone, the bigger the gift.",
      ],
      zh: [
        "在雅浦岛，重重的钱币并不靠手手相传。它就立在村路边——有时是一块比人还高的石轮，有时是一片用两根抬杠由两个壮汉抬起的薄盘。酋长会告诉你哪块拉伊属于哪一家。买卖或赔偿发生时，石头不动，所有权易主即可。",
        "每一块拉伊都源自帕劳巴贝尔图阿普岛山洞里的清亮石灰岩。雅浦的桨手乘长舟前往，凿出圆盘，借木筏漂回家。途中有时风暴把石头打入海中。石头沉在海底，主人们却继续说：“它是我们的，现在大家都知道它在哪里。”这块沉海的石头照样可以参与交易。",
        "美国人最初追问这怎么能算钱时，长老们耸耸肩：钱币是大家约定它是什么，它就是什么。一块横渡远海、躲过风暴与偷盗的拉伊，在记忆中比在石头里更沉。今日雅浦人口袋里有美元，但最大的礼数——聘礼、和解金——仍以拉伊计量。石后故事越长，礼数越大。",
      ]
    },
    themes: [text("currency as memory", "记忆即货币"), text("voyaging", "远航"), text("trust", "信用")],
    tags: [text("yapese", "雅浦"), text("rai", "拉伊"), text("micronesia", "密克罗尼西亚"), text("stone money", "石币")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rai_stones"
  },
  {
    id: "nan-madol-twins",
    title: text("Nan Madol, Built by the Twin Sorcerers", "双巫师所建的南马都尔"),
    country: text("Federated States of Micronesia", "密克罗尼西亚联邦"),
    region: text("Micronesia", "密克罗尼西亚"),
    culture: text("Pohnpeian", "波纳佩"),
    latitude: 6.84,
    longitude: 158.33,
    category: "history",
    summary: text(
      "The twin sorcerers Olisihpa and Olosohpa fly basalt columns across Pohnpei and stack them into Nan Madol, a city of canals dedicated to a calm new dynasty.",
      "孪生巫师奥利西帕与奥洛索帕用法术让玄武岩柱飞越波纳佩，叠成水道之城南马都尔，献给一个崭新而温和的王朝。"
    ),
    background: text(
      "Nan Madol is the megalithic city of the Saudeleur dynasty on Pohnpei, built of basalt columns transported from quarries elsewhere on the island.",
      "南马都尔是波纳佩岛上萨乌德勒王朝建造的巨石都城，用从岛上别处采石场运来的玄武岩柱筑成。"
    ),
    narrativeParagraphs: {
      en: [
        "Olisihpa and Olosohpa, twins born of the wind, sailed to Pohnpei from the western seas looking for a place to build an altar. The reef on the eastern side of the island was almost level, the lagoon clear and shallow. They told the gods they would build a city for the long peace, and the gods agreed.",
        "On a slope inland they found tall hexagonal basalt columns lying like logs. The twins sang and the stones rose into the air and flew, one by one, to the reef. They laid them in alternating courses, the way one lays cooled cooking sticks. By the time they finished, ninety-two artificial islets stood in a grid of canals, and the city of Nan Madol was complete.",
        "Olosohpa became the first Saudeleur, the first king. His descendants ruled with the order of the canals for many generations. When at last they grew harsh, the warrior god Isokelekel landed with an army of canoes and ended the dynasty. The basalt city remained, slowly grown over by mangroves. The twin sorcerers do not seem to have minded—they had built it for the long peace, and the long peace had had its turn.",
      ],
      zh: [
        "风所生的孪生兄弟奥利西帕与奥洛索帕从西海驶来波纳佩，寻找一个建造祭坛的地方。岛屿东侧的礁台几近水平，潟湖清澈而浅。他们告诉众神，要在此建一座为长久和平准备的城，众神允诺。",
        "他们在内陆山坡上发现一排排横倒着的六棱玄武岩柱，仿佛巨大的木材。孪生兄弟唱起咒语，石柱腾空而起，一根接一根飞向礁台。他们按照交错的纹路把石柱铺叠起来，宛如人摆放冷却的烧菜柴。九十二座人工小岛在水道网格中浮起，南马都尔之城就此建成。",
        "奥洛索帕成为最早的“萨乌德勒”——第一任国王。他的后裔以水道之秩序治理多代。后来他们渐渐变得苛刻，战士神伊索凯莱克尔率独木舟军队登岛，结束了这个王朝。玄武岩之城留存下来，被红树林缓慢覆盖。这一切似乎并未让孪生巫师介意——他们当初是为长久和平所建，而长久和平也已轮到自己的句号。",
      ]
    },
    themes: [text("megalithic city", "巨石之城"), text("sorcery", "法术"), text("dynasty", "王朝")],
    tags: [text("pohnpeian", "波纳佩"), text("nan madol", "南马都尔"), text("saudeleur", "萨乌德勒"), text("basalt", "玄武岩")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nan_Madol"
  },
  {
    id: "sky-woman-iroquois",
    title: text("Sky Woman Falls to Turtle Island", "天女降落龟岛"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Haudenosaunee", "豪德诺索尼"),
    latitude: 43.0481,
    longitude: -76.1474,
    category: "myth",
    summary: text(
      "A woman falls through a hole in the upper sky, the diving animals bring mud up from the ocean floor, and Turtle volunteers her back as the land on which she will live.",
      "天空裂开一道口，一位女子坠下；潜水的动物把海底淤泥捞到水面，海龟自愿用背承住她——这块背便成了她将居住的大地。"
    ),
    background: text(
      "The Haudenosaunee (Iroquois Confederacy) of the northeastern woodlands begin their world history with the fall of Sky Woman onto Turtle's back.",
      "美国东北林地的豪德诺索尼联盟（易洛魁联盟）从“天女坠落龟背”开始讲述这个世界的故事。"
    ),
    narrativeParagraphs: {
      en: [
        "In the sky-world a great tree stood. Sky Woman, pregnant, leaned to look at a flower growing under its roots, and the tree tipped. She fell through the hole in the sky and the wind held her gently as she dropped. Below was only water and water-birds.",
        "The geese flew up and caught her between their wings. The ducks called for someone to bring up earth from the deep floor. Beaver tried and failed. Otter tried and failed. Muskrat, smallest of them, dove until her lungs burst, and surfaced with a single paw of mud. Turtle lifted her shell and said, 'Put it on me.'",
        "The animals patted the mud across Turtle's back. As Sky Woman walked, the land grew under her feet. She gave birth to a daughter. The daughter in turn gave birth to twins, one good and one rough, who shaped the rivers and the rocks of the world. The Haudenosaunee say that whatever happens, Turtle is still holding the land, and the muskrat's small palmful of mud is the proof that the smallest can carry the largest.",
      ],
      zh: [
        "天上的世界里耸立着一棵大树。怀着身孕的天女俯身去看树根下一朵小花，树倾斜了，她从天空那道裂口坠下，风轻轻托着她下落。下方只有水和水鸟。",
        "雁群飞起，用翅膀把她接住。鸭子高声呼唤：谁能从深处带泥上来？河狸下潜，失败了；水獭下潜，失败了；最小的麝鼠潜得最深，肺几乎涨破，浮上来时爪心捏着一小块泥。海龟伸出她的壳：“把它放到我背上。”",
        "动物们把那一小撮泥抹遍龟背。天女在龟背上走动，土地便在她脚下生长。她生下一个女儿，女儿又生下一对双胞胎，一个温和一个粗野，他们塑造了世界的河流与岩石。豪德诺索尼人说，无论世事如何变迁，海龟仍在背负大地——而麝鼠掌心的一小撮泥，证明最小者可以承担最大。",
      ]
    },
    themes: [text("creation", "创世"), text("turtle island", "龟岛"), text("co-creation", "共同造物")],
    tags: [text("haudenosaunee", "豪德诺索尼"), text("sky woman", "天女"), text("muskrat", "麝鼠"), text("creation", "创世")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sky_Woman"
  },
  {
    id: "spider-grandmother",
    title: text("Spider Grandmother Weaves the World", "蜘蛛祖母织出世界"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Hopi", "霍皮"),
    latitude: 35.7833,
    longitude: -110.6167,
    category: "myth",
    summary: text(
      "From the underworld kivas Spider Grandmother spins a long ladder for the People to climb up into the present world, and she teaches them to mind both ends of every thread.",
      "蜘蛛祖母从地下的“基瓦”起，吐丝织出长梯，让人民攀登到当今这个世界——并教他们留意每一根丝的两端。"
    ),
    background: text(
      "In Hopi tradition the People emerged through several underworlds before reaching this Fourth World, guided by Spider Grandmother (Kookyangwwuuti) and the war twins.",
      "霍皮传统中，人民曾穿越几层地下世界才到达当今的“第四世界”，由蜘蛛祖母（Kookyangwwuuti）与战神双子引领。"
    ),
    narrativeParagraphs: {
      en: [
        "In the dark world below, the People had grown selfish. They quarrelled and forgot to feed the seeds. From the upper opening came a thin smell of new corn. They asked Spider Grandmother who lived in the corner of every kiva: how do we go up? She said, 'I will spin you a ladder, but only those who behave themselves may climb.'",
        "She spun a long thread of grey light. Hummingbird tested it; it held. Eagle tested it; it held. The People began to climb, but as they climbed some forgot their manners and chattered as if they were already free. At each rung Spider Grandmother whispered the agreement: bring nothing rotten with you, leave no quarrel unmended below.",
        "When the People stepped into the Fourth World, Spider Grandmother walked beside them as a small old woman with a deer-bone cane. She told them which mesa to settle, which song to sing for rain, and how to braid corn-husks so the seeds remember the underworld journey. To this day in Hopi homes a thread of cobweb in the corner is greeted as her, not swept away in anger.",
      ],
      zh: [
        "地下昏暗的旧世界里，人民越来越自私，彼此争吵，连种子也忘了喂养。从上方的小口飘下一缕新玉米的香气。他们去问每一个“基瓦”角落里都住着的蜘蛛祖母：怎么才能上去？她说：“我替你们织一架梯子，可只有举止端正的人，才许攀登。”",
        "她吐出一根灰色长丝。蜂鸟试过，梯子结实；鹰试过，也结实。人民开始攀登，过程中有些人忘了规矩，仿佛已经获得自由般大声喧哗。蜘蛛祖母在每一格上轻声重复约定：不要把腐烂的东西带上来，地下未化解的争吵不要留在那里。",
        "人民踏入第四世界时，蜘蛛祖母化作一位拄鹿骨杖的小老太走在他们身旁。她告诉他们应在哪座台地定居、哪一支求雨歌应当唱起，又教他们如何编玉米皮，让种子记得地下的那段攀爬。今日霍皮人家中角落的一缕蛛丝，会被当作她来问候，不会愤怒地扫去。",
      ]
    },
    themes: [text("emergence", "出现"), text("guidance", "指引"), text("manners", "行止")],
    tags: [text("hopi", "霍皮"), text("spider grandmother", "蜘蛛祖母"), text("emergence", "出现"), text("kiva", "基瓦")],
    sourceUrl: "https://en.wikipedia.org/wiki/Spider_Grandmother"
  },
  {
    id: "changing-woman-navajo",
    title: text("Changing Woman of the Navajo", "纳瓦霍的变化之女"),
    originalTitle: text("Asdzą́ą́ Nádleehé", "阿斯当娜德利赫"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Diné (Navajo)", "纳瓦霍"),
    latitude: 36.0903,
    longitude: -109.5333,
    category: "religion",
    summary: text(
      "Changing Woman is born on a mountaintop in a dawn shower, raised by First Man and First Woman, and gives birth to the twin heroes who clear the world of monsters.",
      "变化之女在山顶的清晨小雨中降生，由第一男与第一女抚养长大，又生下扫净人间怪物的英雄双子。"
    ),
    background: text(
      "Changing Woman (Asdzą́ą́ Nádleehé) is the most important holy being of the Diné/Navajo, associated with seasons, womanhood, and the Blessingway ceremony.",
      "“变化之女”（Asdzą́ą́ Nádleehé）是纳瓦霍人最重要的圣存，关联四季、女性与“祝福之路”仪式。"
    ),
    narrativeParagraphs: {
      en: [
        "After many monsters had spread across the early world, First Man and First Woman climbed a mountain at dawn and found a baby girl wrapped in a rainbow. They took her home and fed her white shell pollen. She grew so quickly that in twelve days she was a young woman; in another she was old; in another young again. They named her Changing Woman.",
        "She was loved by the sun, and gave birth to twin sons, Monster Slayer and Born for Water. Her sons traveled to the sun's house, received turquoise weapons, and returned to the earth to clear the great monsters from the canyons. Changing Woman waited and sang each son back into the camp at dusk.",
        "When the world was safe Changing Woman walked west to the ocean and built a house of white shell, abalone, turquoise, and jet. The Diné say that everything we do well is something she taught us first: how to grind corn, how to weave, how to sing a long story without leaving anything important behind. Her Blessingway is sung when a girl becomes a woman, and at every important crossing of life.",
      ],
      zh: [
        "怪物在最早的世界里横行之后，第一男与第一女在清晨登上一座山，发现一个用彩虹包裹的女婴。他们把她抱回家，用白色贝粉喂养。她生长极快，十二天间便从婴孩长成少女；又十二天，转为老妪；再十二天，又转回少女。他们替她取名“变化之女”。",
        "太阳爱上了她，她生下双子——“屠怪者”与“生于水者”。两个儿子远行至太阳之家，接受绿松石武器，回到人间将各峡谷中的大怪一一清除。变化之女在家中等候，每晚以歌把两个儿子唱回营火旁。",
        "世界归于平安后，变化之女向西行至海边，造起一座白贝、鲍贝、绿松石与煤玉的屋子。纳瓦霍人说，凡是他们做得好的事，都是她最早教过他们的：磨玉米、织毯、把漫长的故事唱完而不漏要点。她的“祝福之路”仪式在女孩成年之时与人生每一个重要节点都被唱起。",
      ]
    },
    themes: [text("life cycle", "生命周期"), text("twin heroes", "英雄双子"), text("blessing", "祝福")],
    tags: [text("navajo", "纳瓦霍"), text("changing woman", "变化之女"), text("blessingway", "祝福之路"), text("twin heroes", "英雄双子")],
    sourceUrl: "https://en.wikipedia.org/wiki/Changing_Woman"
  },
  {
    id: "salish-thunderbird",
    title: text("Thunderbird Battles the Whale", "雷鸟与鲸的搏斗"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Quileute", "奎卢特"),
    latitude: 47.9028,
    longitude: -124.6363,
    category: "myth",
    summary: text(
      "When a great whale eats all the salmon along the Pacific coast, Thunderbird descends from the mountain and lifts him into the sky, splitting the cedars and shaking the sea.",
      "一头巨鲸把太平洋沿岸的鲑鱼吃尽，雷鸟从山头降下，将鲸抓上天空——雪松裂开、海水翻涌。"
    ),
    background: text(
      "Among Coast Salish and neighbouring Quileute and Makah peoples of the Pacific Northwest, Thunderbird is the lord of storms; his fight with Whale explains earthquakes and tsunamis.",
      "在太平洋西北沿岸的萨利什、奎卢特与马卡等族中，雷鸟是风暴之主；他与鲸的搏斗解释了地震与海啸。"
    ),
    narrativeParagraphs: {
      en: [
        "There was a season when the salmon stopped coming up the rivers. The fish racks stood empty. The elders asked the rivers and the rivers said, 'A great whale at the mouth of the sea is eating all our salmon before they can reach you.' The People were going hungry.",
        "Thunderbird heard them from the high peak where he keeps his nest. He spread his wings, which are wide enough to hold a canoe under each, and dove from the mountain to the sea. He sank his claws into the whale and lifted him out of the water. The whale was so heavy that even Thunderbird could not fly straight; the two crashed back into the foam, then into the trees, then out to sea again, three times.",
        "Where they crashed, the ground broke and waves rose taller than houses. Cedars split, the shoreline moved, fish were left flapping on dry mountain meadows. At last Thunderbird carried the whale to his mountain nest and there made an end of him. The salmon came back to the rivers. The People remembered the lesson: when the rivers go silent, ask the whale, and call Thunderbird if needed.",
      ],
      zh: [
        "曾经有一年鲑鱼不再溯河而上。晒鱼架上空空如也。长老们问河流，河流答：“一头巨鲸在海口处把所有鲑鱼都吃掉了，它们没能上来。”人们渐渐挨饿。",
        "雷鸟从他高峰上的巢中听见了。他展开翅膀——每只翅膀下都能藏一条独木舟——从山头俯冲入海，把利爪扎进鲸身，把它从水中拎起。鲸身极沉，雷鸟也飞不直，他们一同跌回浪沫，又撞进林间，再被甩入海中，反复三次。",
        "他们坠落之处，地面裂开，海浪高过屋顶。雪松断裂，海岸移动，连山中的草甸上都遗下扑腾的鱼。雷鸟最终把鲸带回山巅之巢，结束了他。鲑鱼重新回到各河流。族人记下教训：河流安静时去问鲸，必要时就呼唤雷鸟。",
      ]
    },
    themes: [text("famine", "饥荒"), text("earthquake", "地震"), text("storm gods", "风暴之神")],
    tags: [text("quileute", "奎卢特"), text("thunderbird", "雷鸟"), text("whale", "鲸"), text("pacific northwest", "太平洋西北")],
    sourceUrl: "https://en.wikipedia.org/wiki/Thunderbird_(mythology)"
  },
  {
    id: "great-peacemaker",
    title: text("The Great Peacemaker Plants the Tree", "和平缔造者种下大白松"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Haudenosaunee", "豪德诺索尼"),
    latitude: 43.0481,
    longitude: -76.1474,
    category: "history",
    summary: text(
      "Deganawida, the Great Peacemaker, travels from nation to nation by canoe and persuades five warring peoples to bury their weapons under a great white pine.",
      "“伟大的和平缔造者”德甘纳维达乘独木舟挨族走访，最终说服五个互相征战的民族把武器埋在一棵巨大白松之下。"
    ),
    background: text(
      "The Haudenosaunee Confederacy (Mohawk, Oneida, Onondaga, Cayuga, Seneca, and later Tuscarora) was founded between the twelfth and fifteenth centuries by the Great Peacemaker, Hiawatha, and Jigonhsasee.",
      "豪德诺索尼联盟（莫霍克、奥奈达、奥农达加、卡尤加、塞内卡，后加入图斯卡罗拉）成立于十二至十五世纪，由伟大的和平缔造者、海华沙与吉贡萨西共同奠基。"
    ),
    narrativeParagraphs: {
      en: [
        "A child was born to a Wendat (Huron) family with strange powers and a quiet way of speaking. The elders saw a sign in him and sent him out, calling him Deganawida, the Great Peacemaker. He carved a canoe of white stone and paddled across the lake to the Mohawk country. There he met Hiawatha, an Onondaga whose family had been killed in feuds, and the two began to walk together.",
        "Nation by nation they spoke. They told the Mohawks, Oneidas, Onondagas, Cayugas, and Senecas that war was eating them all from the inside. The matriarch Jigonhsasee opened her longhouse to them and helped persuade the leaders. The last to agree was the Onondaga sorcerer Tadodaho, whose hair was full of snakes; Hiawatha combed his hair clean while singing peace songs.",
        "At Onondaga the chiefs uprooted a great white pine. They threw their weapons into the hole beneath its roots and the river underground carried the weapons away. The tree was replanted and the eagle was set on top to watch. From that day five nations governed themselves through the Great Law of Peace, and the longhouse stretched, in their imagination, from the lake to the sea.",
      ],
      zh: [
        "一位温达特（休伦）家庭生下的孩子拥有奇异的能力与极轻的嗓音。长老们在他身上看到征兆，遣他出去做事，称他为德甘纳维达，“伟大的和平缔造者”。他用白石凿出一艘独木舟，划过湖面到莫霍克的国土。他在那里遇见家人尽被仇杀的奥农达加人海华沙，两人结伴而行。",
        "他们一族一族地说话。他们告诉莫霍克、奥奈达、奥农达加、卡尤加与塞内卡：战争正在把他们从内部吞噬。母系长老吉贡萨西打开自己的长屋接待他们，帮着说服族中首领。最难说动的是头发里盘满蛇的奥农达加巫师塔多达霍——海华沙一边唱起和平之歌，一边为他梳理纷乱的发丝。",
        "在奥农达加，各族酋长拔起一棵巨大的白松，把武器抛入根下的洞里，地下河把武器冲走。白松被重新栽好，鹰栖于树顶守望。从那一天起，五族借“伟大的和平法”自治；他们想象中的“长屋”从五大湖伸向大西洋。",
      ]
    },
    themes: [text("confederation", "结盟"), text("peace law", "和平法"), text("burying weapons", "埋武器")],
    tags: [text("haudenosaunee", "豪德诺索尼"), text("deganawida", "德甘纳维达"), text("hiawatha", "海华沙"), text("white pine", "白松")],
    sourceUrl: "https://en.wikipedia.org/wiki/Dekanawida"
  },
  {
    id: "cherokee-water-spider",
    title: text("Water Spider Brings the Fire", "水蜘蛛盗火"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Cherokee", "切罗基"),
    latitude: 35.4675,
    longitude: -83.9956,
    category: "folktale",
    summary: text(
      "Bigger animals fail to carry fire from the burning sycamore on the island; the small Water Spider weaves a clay bowl on her back and brings a single coal to the cold world.",
      "诸多大动物未能从孤岛上烧着的悬铃木中取火，小小的水蜘蛛背上用泥编出一只小钵，带回一颗火炭，把火送给冰冷的世界。"
    ),
    background: text(
      "This Cherokee tale of how fire was first brought to the people is told widely across the Eastern Woodlands and is a favourite for teaching small children.",
      "这则关于火如何最初被带回人间的切罗基故事，在美国东部林地广为流传，是教幼童时最受喜爱的故事之一。"
    ),
    narrativeParagraphs: {
      en: [
        "In the first cold time the animals had no fire. They saw a thunderstorm strike a sycamore tree on a small island in the river, and the tree caught fire. The animals held a council. Raven offered first, flew across, but the heat scorched his feathers black, and he came back empty.",
        "Then Screech Owl tried; the smoke turned her eyes red forever. Hooting Owl tried; the ash circled her eyes white. Snake tried, slipped into a hollow, and came out scorched but with no fire. Each in turn brought back only their own scar.",
        "At last little Water Spider stepped forward. She spun a small bowl of grass and clay, fixed it onto her back like a basket, and walked across the water. She picked up a single hot coal, set it inside the bowl, and walked back. From that coal the animals lit their fires. To this day Cherokee storytellers point at the spotted pattern on the water spider's back and say, 'See, she still wears the basket she made.'",
      ],
      zh: [
        "万物初寒之际，动物们尚无火。它们看见一道雷劈中河中小岛上的一棵悬铃木，那树烧着了。动物们召开议事会。乌鸦先去，飞过河面，热气把它的羽毛烧黑，空着回来。",
        "随后角鸮去试，烟把它的眼睛永远熏红；猫头鹰去试，灰把它的眼周熏白；蛇去试，钻进树洞被烫卷，依旧未能取火。每一位回来时只带回自己的伤痕。",
        "最后小小的水蜘蛛上前。她用草和泥编了一个小钵，像背篓那样固定在背上，沿着水面走过去。她拣起一颗滚烫的炭，把它放进钵中，再走回来。动物们便用那颗炭点起各自的火。至今切罗基讲故事的人指着水蜘蛛背上的斑点说：“看，她背上还戴着自己编的那只小钵。”",
      ]
    },
    themes: [text("fire bringing", "送火"), text("small hero", "小者得胜"), text("origin", "起源")],
    tags: [text("cherokee", "切罗基"), text("water spider", "水蜘蛛"), text("fire", "火"), text("woodland tale", "林地故事")],
    sourceUrl: "https://en.wikipedia.org/wiki/Cherokee_mythology"
  },
  {
    id: "igaluk-moon",
    title: text("Igaluk Chases His Sister", "伊加鲁克追赶妹妹"),
    country: text("Canada", "加拿大"),
    region: text("Arctic", "北极"),
    culture: text("Inuit", "因纽特"),
    latitude: 73.0333,
    longitude: -85.15,
    category: "myth",
    summary: text(
      "A brother sneaks into his sister's bed in the dark; when she marks his face with soot and sees him, she flees with a torch into the sky, and he follows her forever as the dimmer moon.",
      "兄长黑夜里潜入妹妹床上；妹妹在他脸上抹了煤灰，认出他后举火奔上天空，他从此追随她不息——成为较暗的月亮。"
    ),
    background: text(
      "Across the Inuit of Arctic Canada and Greenland, the story of Sun-sister and Moon-brother is told to explain why the moon never quite catches the sun.",
      "在加拿大北极与格陵兰的因纽特族中，太阳姐姐与月亮哥哥的故事被用来解释为何月亮始终追不上太阳。"
    ),
    narrativeParagraphs: {
      en: [
        "In a long house dark with winter, a young woman was visited again and again at night by a man she could not see. She suspected someone close. One evening she smeared her hands with soot from the lamp and rubbed the visitor's cheek when he came. In the morning she saw the soot on her brother's face.",
        "Without a word she rolled a fish-oil torch and ran out into the snow. Her brother grabbed his own torch and chased her, but in his haste his torch had little oil. She ran faster, her flame steady; he fell behind, his flame weak.",
        "They ran so fast and so far that they rose into the sky. She became the bright sun, he the pale moon. He pursues her around the sky-circle, sometimes coming close at eclipse, sometimes far away when his thin torch nearly goes out. The Inuit say that when the moon is dim, you can see the soot her sister put on him still on his face.",
      ],
      zh: [
        "漫长冬夜的长屋里，一位年轻女子接连几夜被一个看不清面目的人摸来过床。她疑心是身边亲近之人。一个晚上她在指尖蹭了油灯下的煤灰，等那人来到便趁机抹在他脸上。第二天清晨，她看见她哥哥脸上正有一片煤灰。",
        "她一言不发，卷起一支鱼油火把，奔出风雪。哥哥也抓起自己的火把追出来；他来不及加油，火把里油少。她跑得更快，焰头稳；他渐渐落后，焰头微弱。",
        "他们跑得太远太快，竟一同升上天空。她化作明亮的太阳，他化作苍白的月亮。他在天圈里追着她，日食时偶尔贴近，他的细弱火把几近熄灭时则远远落后。因纽特人说，月亮昏暗时，仍能看见妹妹当年抹在他脸上的那片煤灰。",
      ]
    },
    themes: [text("incest taboo", "乱伦禁忌"), text("pursuit", "追逐"), text("sun and moon", "日月")],
    tags: [text("inuit", "因纽特"), text("igaluk", "伊加鲁克"), text("malina", "玛丽娜"), text("eclipse", "食")],
    sourceUrl: "https://en.wikipedia.org/wiki/Anningan"
  },
  {
    id: "white-painted-woman",
    title: text("White Painted Woman and the Sunrise", "白彩之女与日升"),
    country: text("United States", "美国"),
    region: text("North America", "北美"),
    culture: text("Apache", "阿帕奇"),
    latitude: 33.7167,
    longitude: -105.6333,
    category: "religion",
    summary: text(
      "Hidden in a cave during a flood, White Painted Woman conceives Child of the Water by sun and water, and her son later kills the monsters that haunted Apache country.",
      "洪水来时藏身于山洞的白彩之女，得日光与水之孕生下“水之子”，他长大后杀去骚扰阿帕奇人之地的怪物。"
    ),
    background: text(
      "White Painted Woman (Esdzanadehe) is honoured in the Apache Sunrise Ceremony, which marks a girl's coming of age over four days of song and dance.",
      "白彩之女（Esdzanadehe）在阿帕奇人“日升仪式”中受到尊敬——这是为少女成年举办的、为期四日的歌舞仪式。"
    ),
    narrativeParagraphs: {
      en: [
        "When the world was being scoured by flood, a young woman hid herself in a high cave. The sun came in through a crack and warmed her belly; the water dripped in through a hole and touched her skin. From that warmth and that water she conceived Child of the Water, who would grow up to kill the great monsters that troubled the people.",
        "After the flood her son went out into the country and one by one killed Giant, Buffalo Monster, Antelope Monster, and the Bear of the Cliff. Each time he came home tired, and his mother sang a song that made him whole. The land became safe enough for children to walk between fires after dark.",
        "When White Painted Woman grew old she walked east to meet a younger version of herself coming over a hill. The two embraced and merged. To this day, Apache girls at puberty dance the Sunrise Ceremony for four days; on the fourth dawn the medicine man marks them with white clay, and they step forward as White Painted Woman herself, walking east to meet her younger self.",
      ],
      zh: [
        "大水冲刷世界之时，一位年轻女子藏身高处的山洞。阳光从一道缝隙照入，暖她的腹；雨水从一处漏洞滴下，触她的肌肤。借这暖意与水气，她孕下“水之子”——他长大后将杀去骚扰族人的几头大怪。",
        "洪水退后，她的儿子走入旷野，一一斩杀巨人、野牛怪、羚羊怪与崖上之熊。他每回归来都筋疲力尽，母亲便唱一支让他重新完整的歌。土地慢慢变得安全，孩子也敢在夜里穿过营火走动。",
        "白彩之女年老时向东走去，迎面而来的是她自己的年轻一身。两人相拥融为一体。直到今日，阿帕奇少女初潮之际要跳四天“日升仪式”；第四天清晨，巫医用白泥在她身上点画——她便化身白彩之女，向东行去会见自己年轻的那一身。",
      ]
    },
    themes: [text("coming of age", "成年"), text("monster slaying", "屠怪"), text("ritual renewal", "仪式更生")],
    tags: [text("apache", "阿帕奇"), text("white painted woman", "白彩之女"), text("sunrise ceremony", "日升仪式"), text("child of the water", "水之子")],
    sourceUrl: "https://en.wikipedia.org/wiki/White_Painted_Woman"
  },
  {
    id: "itzamna-mayan",
    title: text("Itzamná Writes the World", "伊扎姆纳书写世界"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Maya", "玛雅"),
    latitude: 20.6843,
    longitude: -88.5678,
    category: "myth",
    summary: text(
      "Itzamná, the old lord of the sky, invents glyphs, the calendar, and medicine; he is the eye of Itzam Cab Ain, the great earth crocodile on which the Maya world rests.",
      "玛雅至高之主伊扎姆纳发明象形字、历法与医药；他也是承载玛雅世界的大地鳄鱼“伊扎姆·卡布·艾因”之眼。"
    ),
    background: text(
      "Itzamná is the supreme Maya creator-god, the keeper of writing and the calendar, especially venerated in the Yucatán.",
      "伊扎姆纳是玛雅至高的造物者，是文字与历法的守护者，尤其在尤卡坦半岛受到尊崇。"
    ),
    narrativeParagraphs: {
      en: [
        "Before the first Maya cities, the world rested on the back of a great crocodile floating in a vast pond. The crocodile was Itzam Cab Ain, and her single eye, lifted just above the surface, was Itzamná, the lord of the sky. He saw everything by daylight and turned it over by night.",
        "Itzamná pulled glyphs out of the air with his fingers and laid them on bark paper to make the first books. He taught the priests how to track Venus and how to count days in cycles of twenty and thirteen. He named each plant and which sickness it cured, and showed mothers how to bathe a newborn in cool herbs.",
        "When the first city kings began to forget their duties, Itzamná appeared in the priests' dreams holding a serpent staff and a calendar wheel. He reminded them that knowledge is not a private treasure: a glyph not taught is a glyph half-erased. The Maya carved his face on temple lintels with two crossed bands on his forehead, the sign that he kept the four corners of the world in mind.",
      ],
      zh: [
        "玛雅最早的城市建起之前，世界卧在一头浮于大水之上的巨鳄背上。这头鳄鱼名叫“伊扎姆·卡布·艾因”，她那一只浮在水面上的眼睛，便是天空之主伊扎姆纳。他在白日里看遍万物，又在夜里将它们一一翻转。",
        "伊扎姆纳用手指从空气中抽出象形字，把它们排列在树皮纸上，造就最早的书。他教祭司如何观测金星，如何以二十与十三为一周来计算日子。他给每一种植物命名，指明每种病它能治哪一种，并教母亲如何用凉草药为新生儿沐浴。",
        "最早一批城邦的王者开始疏忽职责时，伊扎姆纳便出现在祭司的梦里，手执蛇杖与历法之轮，提醒他们：知识并非私藏的宝物，未传授出去的象形字，就是被擦去了一半的字。玛雅人把他的脸刻在神庙门楣上，额上两道交叉的横纹，是他时时心系四方的标记。",
      ]
    },
    themes: [text("writing origin", "文字起源"), text("calendar", "历法"), text("creator", "造物者")],
    tags: [text("maya", "玛雅"), text("itzamna", "伊扎姆纳"), text("glyphs", "象形字"), text("yucatan", "尤卡坦")],
    sourceUrl: "https://en.wikipedia.org/wiki/Itzamna"
  },
  {
    id: "chaac-rain",
    title: text("Chaac Strikes the Sky", "恰克击穹"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Maya", "玛雅"),
    latitude: 20.4843,
    longitude: -89.6678,
    category: "religion",
    summary: text(
      "Chaac the lightning-axe god is split into four directions; from each cenote one of him answers, and Maya rainmakers still tie their offerings with the four colours of his work.",
      "雷斧之神恰克分四方而立，每一处天然水井（“塞诺特”）都有一位恰克回应；玛雅雨师至今以他四方之色绑扎祭品。"
    ),
    background: text(
      "Chaac is the Maya rain god; rituals at cenotes and small altars on hilltops are still performed in Yucatecan villages to call him.",
      "恰克是玛雅雨神，在尤卡坦的村庄中至今仍在天然水井与山顶小坛举行求雨仪式。"
    ),
    narrativeParagraphs: {
      en: [
        "Chaac was the storm. When the world was first watered he stood alone on the eastern horizon with a long stone axe. He struck the clouds and rain fell, but the rain came only on one side of the country. Itzamná told him to divide himself.",
        "Chaac broke into four: Chaac of the east, red as the sunrise; Chaac of the north, white as bone; Chaac of the west, black as wet earth; Chaac of the south, yellow as ripe maize. Each lived inside a cenote, the round wells that pierce the Yucatán's limestone.",
        "When the Maya need rain, the village hmen builds a small altar with four corners. He places four gourds of balché on it and ties them with red, white, black, and yellow string. Boys imitate frogs from under the altar to draw down the clouds. The four Chaacs rise from their cenotes, raise their stone axes, and the dry land hears thunder again.",
      ],
      zh: [
        "恰克便是风暴。世界初被浇灌时，他独自立于东方地平线上，握着一柄长长的石斧。他击向云层，雨水落下，可雨水只下在国土的一边。伊扎姆纳便让他把自己一分为四。",
        "恰克裂为四位：东方红恰克，赤如日升；北方白恰克，白如骨；西方黑恰克，黑如湿土；南方黄恰克，黄如熟玉米。每一位都住在一处“塞诺特”——石灰岩中圆形的天然水井——之内。",
        "玛雅人需要雨水时，村中“赫门”祭师便筑一座四角的小坛，摆上四只盛着“巴尔切酒”的葫芦，并以红、白、黑、黄四色线缚之。男童藏在祭坛下学青蛙叫，引云下来。四位恰克自塞诺特中浮起，举起石斧，干涸的土地便又听见雷声。",
      ]
    },
    themes: [text("rain god", "雨神"), text("four directions", "四方"), text("cenote", "塞诺特")],
    tags: [text("maya", "玛雅"), text("chaac", "恰克"), text("rain ritual", "求雨"), text("cenote", "天然水井")],
    sourceUrl: "https://en.wikipedia.org/wiki/Chaac"
  },
  {
    id: "eight-deer-mixtec",
    title: text("Eight Deer Jaguar Claw", "八鹿·虎爪"),
    originalTitle: text("Iya Nacuaa Teyusi Ñaña", "伊亚·纳夸·特尤西·尼亚尼亚"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Mixtec", "米斯特克"),
    latitude: 17.0833,
    longitude: -97.75,
    category: "history",
    summary: text(
      "Lord Eight Deer rises from a minor noble to unite the Mixtec kingdoms; his life is the longest unbroken biography in pre-Columbian American writing.",
      "“八鹿大人”从一名小贵族崛起，统一米斯特克各邦；他的生平是哥伦布前美洲最长、最完整的一段成文传记。"
    ),
    background: text(
      "Eight Deer Jaguar Claw (1063–1115) is the great ruler whose biography fills several Mixtec codices, especially the Codex Zouche-Nuttall.",
      "“八鹿·虎爪”（1063–1115）是米斯特克伟大的统治者，其生平占据数部米斯特克古抄本，尤其是《祖什-纳塔尔抄本》。"
    ),
    narrativeParagraphs: {
      en: [
        "He was born on a day named Eight Deer in the small lordship of Tilantongo. As a young man he travelled to the oracle of the Vehe Kihin, the dark cave-shrine in the southern mountains, to ask for a marriage and a kingdom. The oracle priestess told him: 'You will take both. But the road is long and crowded.'",
        "Eight Deer fought, married, traded gold, paid tribute, and slowly bound the small Mixtec kingdoms together. He had his nose pierced in the city of Tula far to the north, the mark of a Toltec lord, and returned home with a power no Mixtec had carried before. Codices show him commanding armies dressed as a jaguar.",
        "His brother and his nephews quarrelled with him. In the end he was killed in a sacrifice arranged by his own half-brother. But his life had been written down day by day on deer-skin pages with red and black ink. Five hundred years later, when scholars opened the codex, they could read his birthday, his weddings, his battles, and his death in the order he himself had lived them.",
      ],
      zh: [
        "他出生在一个名叫“八鹿”的日子，家族是蒂兰通戈的小诸侯。少年时他前往南山深处岩洞神庙“维赫·基欣”求问神谕，希望得到婚姻与王国。女祭司说：“两样你都会得到，但这条路漫长而拥挤。”",
        "八鹿四处征战，缔结婚约，交换黄金，奉献贡品，慢慢把米斯特克各小邦联结到一起。他北上至托尔特克古城图拉，按托尔特克贵族的规矩在那里穿鼻，得到米斯特克前所未有的权力。抄本上他身披美洲豹皮甲，号令兵阵。",
        "他的兄弟与外甥与他不和。最终他在异母兄弟主持的祭祀中被杀。但他的一生已逐日记在鹿皮页上，由红黑两色墨写就。五百年后，学者打开抄本，仍能按他亲身经历的顺序读出他的出生日、婚事、战役与死亡。",
      ]
    },
    themes: [text("ruler biography", "王者生平"), text("codex history", "抄本史"), text("ambition", "抱负")],
    tags: [text("mixtec", "米斯特克"), text("eight deer", "八鹿"), text("codex", "抄本"), text("tilantongo", "蒂兰通戈")],
    sourceUrl: "https://en.wikipedia.org/wiki/Eight_Deer_Jaguar_Claw"
  },
  {
    id: "tezcatlipoca-smoking-mirror",
    title: text("Tezcatlipoca and the Smoking Mirror", "特斯卡特利波卡的烟之镜"),
    country: text("Mexico", "墨西哥"),
    region: text("Mesoamerica", "中部美洲"),
    culture: text("Aztec", "阿兹特克"),
    latitude: 19.4326,
    longitude: -99.1332,
    category: "religion",
    summary: text(
      "Tezcatlipoca, the night sky who lost a foot creating the world, watches every human heart in his obsidian mirror and offers either kingship or ruin to the one he chooses each year.",
      "特斯卡特利波卡是创造世界时失去一只脚的夜空之神。他在黑曜石镜中观察每一颗人心，每年挑选一位青年，赋予王者之尊或彻底毁灭。"
    ),
    background: text(
      "Tezcatlipoca ('Smoking Mirror') is one of the four creator-gods of Aztec religion; the Toxcatl festival each year impersonated him through a chosen young man.",
      "特斯卡特利波卡（“烟之镜”）是阿兹特克宗教四大造物神之一；一年一度的“托斯卡特尔”节中，会挑选一名青年扮成他本人。"
    ),
    narrativeParagraphs: {
      en: [
        "When the four creator brothers fought the great earth-crocodile to make the world, Tezcatlipoca held out his foot as bait. The crocodile bit it off, and the brothers cut her body into earth and sky. Tezcatlipoca walked thereafter with an obsidian mirror in place of his foot. In that mirror he watched every man and woman alive.",
        "Each spring at the festival of Toxcatl, the priests of Tenochtitlan chose a young man of perfect body, taught him to play flutes and walk like a lord, and dressed him as Tezcatlipoca himself. For a year he lived as the god—nobles bowed, women loved him, he ate the best food and wore turquoise. He was the mirror walking through the city.",
        "At the end of the year he climbed a small pyramid alone, broke his flutes one by one on the steps, and gave his heart to the next year's sun. The next morning a new young man took up the mirror. The Aztecs said the lesson was clear: every life, however bright, is a year on loan from the smoking mirror, and the lender always takes back the loan.",
      ],
      zh: [
        "四位创世兄弟与巨大的地鳄搏斗，要把她拆为天地时，特斯卡特利波卡伸出脚作饵。地鳄咬下了他的脚，兄弟们才能把她的身体劈成天与地。从此特斯卡特利波卡走路时，脚位是一面黑曜石镜。他在那面镜里观察世上每一个活人。",
        "每年春日的“托斯卡特尔”节，特诺奇蒂特兰的祭司便挑选一位身姿俊美的青年，教他吹笛、像贵族一样行走，把他装扮为特斯卡特利波卡本身。他将以神之身度过一整年——贵族对他鞠躬，女子为他倾心，他享最上等的饮食，戴绿松石饰物。他就是行走在城中的那面镜子。",
        "一年期满，他独自登上一座小金字塔，把笛子一支一支折断在台阶上，把心献给来年的太阳。次日清晨，新的青年接过镜子。阿兹特克人说，这其中的教训很清楚：每一段生命，无论多么明亮，都不过是从烟之镜借来的一年；而出借者，从不忘回收。",
      ]
    },
    themes: [text("year-god", "年神"), text("mirror", "镜"), text("kingship and death", "王权与死亡")],
    tags: [text("aztec", "阿兹特克"), text("tezcatlipoca", "特斯卡特利波卡"), text("toxcatl", "托斯卡特尔"), text("smoking mirror", "烟之镜")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tezcatlipoca"
  },
  {
    id: "taino-yucahu",
    title: text("Yúcahu Brings the Cassava", "尤卡乌带来木薯"),
    country: text("Dominican Republic", "多米尼加共和国"),
    region: text("Caribbean", "加勒比海"),
    culture: text("Taíno", "泰诺"),
    latitude: 19.0,
    longitude: -70.6667,
    category: "religion",
    summary: text(
      "Yúcahu, child of Atabey the mother sea, raises a single root out of his dead brother's belly that becomes cassava, the food of the Taíno.",
      "海之母阿塔贝伊之子尤卡乌在亡兄腹中抽出一根独根，化作木薯——成为泰诺人的主食。"
    ),
    background: text(
      "The Taíno of the Caribbean honoured Yúcahu Bagua Maórocoti as the spirit of cassava and the sea, his mother Atabey as the primal woman.",
      "加勒比海的泰诺人尊奉“尤卡乌·巴瓜·马奥罗科蒂”为木薯与海洋之灵，其母阿塔贝伊为最初的女神。"
    ),
    narrativeParagraphs: {
      en: [
        "Atabey, mother of the waters, gave birth to two sons by no man: Yúcahu, the spirit of fresh sea, and Guacar, his rough older brother. The brothers quarrelled and Guacar struck Yúcahu down. The mother grieved, but Yúcahu rose again, and from his older brother's body he drew a single long root.",
        "He planted the root in a clearing near the sea. From it grew a tall, slender plant with seven-fingered leaves. Yúcahu taught the Taíno to dig the root, peel the bitter juice from it, and bake the flour into a round flat bread called casabe that did not spoil on long voyages.",
        "He also taught them that the same plant, untreated, would poison; learning is part of every food. The Taíno carved small stone figures of Yúcahu—a thin man with a triangle of fertile land on his head and a long jaw—and kept them on their hearths. From their cassava trade reached across the Caribbean, and when sailors from the east first met Taíno bakers, they ate casabe before they understood the figure on the hearth.",
      ],
      zh: [
        "水之母阿塔贝伊无夫而生下两个儿子：尤卡乌，海之清灵；瓜卡尔，他粗野的兄长。兄弟争执之中，瓜卡尔击倒了尤卡乌。母亲悲恸，可尤卡乌再次站起，从兄长的身体里抽出一根长长的独根。",
        "他把这根植入海边的一片空地。根上长出高瘦的植物，叶子如七指。尤卡乌教泰诺人挖出此根，剥去其苦汁，把粉烤成一种叫“卡萨贝”的扁圆面饼——它在长途航行中也不会变质。",
        "他同时告诫他们，这种植物未经处理便有毒——学问也是每一种食物的一部分。泰诺人雕出尤卡乌的小石像——瘦削身形、头顶一块三角丰土、长长的下颌——置于火塘旁。他们的木薯由此沿着加勒比海被广泛贸易。后来的东方水手最初见到泰诺面饼师时，先吃了卡萨贝，才明白火塘旁那个小像是什么。",
      ]
    },
    themes: [text("cassava origin", "木薯起源"), text("brotherly killing", "骨肉相残"), text("mother sea", "海之母")],
    tags: [text("taino", "泰诺"), text("yucahu", "尤卡乌"), text("cassava", "木薯"), text("atabey", "阿塔贝伊")],
    sourceUrl: "https://en.wikipedia.org/wiki/Y%C3%BAcahu"
  },
  {
    id: "anansi-jamaica",
    title: text("Anansi and Brother Tiger", "阿南西与虎兄弟"),
    country: text("Jamaica", "牙买加"),
    region: text("Caribbean", "加勒比海"),
    culture: text("Afro-Caribbean", "非裔加勒比"),
    latitude: 18.1096,
    longitude: -77.2975,
    category: "folktale",
    summary: text(
      "Carried to the Caribbean on slave ships, the spider Anansi gets the strongest beast in the forest renamed after him by tricking him into a ride and a rope.",
      "阿南西随奴隶船渡海而来。他用一段套绳和一段被人骑的把戏，把森林中最强者的名号也夺了过来——森林的故事从此都归他名下。"
    ),
    background: text(
      "Anansi tales travelled with the enslaved Akan from Ghana to Jamaica and the wider Caribbean; in Jamaica the strongman is Brother Tiger.",
      "阿南西故事随被贩为奴的阿坎人从加纳传到牙买加及更广的加勒比，在牙买加版本中力大的角色是“虎兄弟”。"
    ),
    narrativeParagraphs: {
      en: [
        "In Jamaica's deep bush the strongest animal was Brother Tiger. He carried his head high, took the best fruit, and was sure no other animal could outwit him. The cleverest animal in the bush was the small Anansi, who had come across the water on a ship and was still finding his way.",
        "One day Anansi told the other animals that he could ride Brother Tiger like a horse. They laughed. He limped over to Tiger and complained of weak legs; Tiger, proud of his strength, said he would carry Anansi to a meeting just to see him quiet. Anansi accepted, and asked only for a small saddle, a bridle, and a short whip 'so I do not slip off'.",
        "When they entered the clearing where the other animals waited, Anansi sat upright with saddle, bridle, and whip in plain view. The whole bush burst out laughing. Tiger, ashamed, ran back into the trees and refused to be called brother of anyone. From that day every clever bush-tale in Jamaica is called an Anansi story, even those Brother Tiger started.",
      ],
      zh: [
        "在牙买加深林里，森林里最强的是“虎兄弟”，他昂着头、占着最好的果子，自信任何动物都骗不了他。森林里最机巧的，是从一条船上漂洋过海来的小蜘蛛阿南西，他还在熟悉这片陌生土地。",
        "一天，阿南西对其他动物说，他能像骑马一样骑虎兄弟。众人哄笑。他一瘸一拐走到虎兄弟面前，抱怨自己腿弱；虎兄弟引以自豪，便答应驮他去一场聚会，好让他闭嘴。阿南西只提出三样小要求：一个小马鞍、一副笼头、一根短鞭，“免得我滑下来”。",
        "他们走进众动物等待的林间空地时，阿南西高坐在虎兄弟背上，鞍、辔、鞭一应俱全。满林哄笑。虎兄弟羞愧地跑回树丛，不再让谁叫他兄弟。从那天起，牙买加林间每一则机巧的故事都被称作“阿南西故事”——哪怕那是从虎兄弟那里开头的。",
      ]
    },
    themes: [text("trickster", "机巧"), text("displaced spider", "离散之蛛"), text("naming the tales", "命名传说")],
    tags: [text("jamaica", "牙买加"), text("anansi", "阿南西"), text("brother tiger", "虎兄弟"), text("afro-caribbean", "非裔加勒比")],
    sourceUrl: "https://en.wikipedia.org/wiki/Anansi#Caribbean"
  },
  {
    id: "licarayen-volcano",
    title: text("Licarayen Calms the Volcano", "莉卡拉延平息火山"),
    country: text("Chile", "智利"),
    region: text("South America", "南美"),
    culture: text("Mapuche", "马普切"),
    latitude: -39.4167,
    longitude: -71.9333,
    category: "myth",
    summary: text(
      "A young Mapuche woman offers herself to the angry Pillán of Volcán Villarrica, and her heart, thrown into the crater, cools the fire into a snow-bright cap.",
      "一位年轻的马普切女子把自己献给比利亚里卡火山愤怒的“皮兰”，她的心被掷入火口，火势冷却下来，化作雪白山冠。"
    ),
    background: text(
      "Mapuche tradition gives the eruption and quieting of Villarrica volcano in southern Chile as a story of a chief's daughter named Licarayen.",
      "马普切传统把智利南部比利亚里卡火山的喷发与平息归于一位酋长之女莉卡拉延的故事。"
    ),
    narrativeParagraphs: {
      en: [
        "The volcano above the lake of Villarrica had begun to roar. Fires opened along its sides; smoke turned the snow black for many leagues. The chief of the lakeside Mapuche called the elders and asked the river-spirit what could be done. The river answered: 'Only a willing heart will close the mouth of Pillán.'",
        "Licarayen, the chief's young daughter, stepped forward. She bathed in the lake one last time, dressed in white feathers, and climbed the smoking slope. At the crater's edge she did not weep. She thanked the mountain for the maize her people had eaten and asked Pillán to take her heart as a kindness for her village.",
        "She placed her hand on her chest and offered her heart to the fire. The crater roared once more, swallowed the offering, and went still. The smoke turned white and laid itself down as snow on the cone. Today the lake reflects the bright cap of Villarrica, and Mapuche guides who lead climbers up the mountain still leave a coin or a feather at the rim, in memory of the heart Pillán accepted.",
      ],
      zh: [
        "比利亚里卡湖上方的火山开始咆哮。山体两侧裂出火口，烟雾把许多里之外的雪也染成黑色。湖边马普切人的酋长召集长老，并向河灵请教。河灵回答：“只有一颗自愿的心，才能合上皮兰的口。”",
        "酋长年轻的女儿莉卡拉延上前。她最后一次在湖水中沐浴，穿上白羽长袍，登上还在冒烟的山坡。火山口边沿，她没有哭，反而感谢这座山多年来让村人种出玉米的恩泽，请求皮兰把她的心当作对她的村庄的善意收下。",
        "她把手按在胸前，把心献给火。山口又轰鸣一次，吞下了献礼，归于沉寂。烟雾化白，落在锥形山顶之上化成雪。今日湖面映着比利亚里卡明亮的雪冠，马普切向导带攀登者上山时，仍会在火口边沿留下一枚硬币或一根羽毛，纪念皮兰当年所收下的那颗心。",
      ]
    },
    themes: [text("volcano sacrifice", "火山献祭"), text("daughter's heart", "女儿之心"), text("intercession", "代祷")],
    tags: [text("mapuche", "马普切"), text("villarrica", "比利亚里卡"), text("pillan", "皮兰"), text("licarayen", "莉卡拉延")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mapuche_religion"
  },
  {
    id: "jaci-cassava",
    title: text("Jací the Moon and the Cassava Daughter", "月神雅西与木薯之女"),
    country: text("Brazil", "巴西"),
    region: text("South America", "南美"),
    culture: text("Tupi-Guarani", "图皮-瓜拉尼"),
    latitude: -3.4653,
    longitude: -62.2159,
    category: "myth",
    summary: text(
      "A virgin pregnant by the touch of the moon gives birth to a girl named Mani, who dies young; from her grave grows the first cassava plant, white and gentle inside the earth.",
      "为月光所孕的少女生下女孩“玛尼”，玛尼早早夭折。她坟上长出最早的木薯——根藏在土里，洁白温润。"
    ),
    background: text(
      "Among Tupi-Guarani peoples of Amazonia, the origin of cassava (manioc) is told as a tender story of a girl named Mani.",
      "亚马孙地区的图皮-瓜拉尼民族用一段关于女孩“玛尼”的温柔故事，解释木薯（manioc）的由来。"
    ),
    narrativeParagraphs: {
      en: [
        "A young woman of the Tupi-Guarani went out at the full moon and did not come back until dawn. When her father asked who had visited her in the night, she could only say, 'Jací, the moon.' She grew round with child, and in time gave birth to a girl with skin so pale she seemed to glow.",
        "They called her Mani. She was a quiet child, never asking for food. Within a year she sickened and died. The mother could not bear to bury her in the forest, so she opened a little grave in the floor of the house and laid her there. Every day she watered the dust above her daughter.",
        "After many weeks a green shoot pushed up through the floor. The shoot became a tall plant; its root, when dug, was white and gentle inside the earth. They named it manioca, the daughter of Mani. The Tupi-Guarani learned how to grate, press, and toast it into farinha, and every house began to plant her in a corner of the garden. Where there is manioc, the mothers say, Mani has come back to feed her family.",
      ],
      zh: [
        "一位图皮-瓜拉尼少女在满月之夜外出，黎明才归。父亲问她夜里来访者是谁，她只能回答：“是月神雅西。”她渐渐隆起腹部，生下一个皮肤苍白、仿佛会发光的女孩。",
        "他们为她取名玛尼。她是个安静的孩子，从不开口要食物。一年之内她染病去世。母亲不忍把她葬在森林里，便在家中泥地上掘出一座小小的坟，把她埋下，每天为坟上的泥土洒水。",
        "几周之后，一根绿芽从地板钻出。绿芽长成一株高高的植物；掘开土，根是白色的、藏在地下又温润。他们称它为“manioca”——玛尼的女儿。图皮-瓜拉尼人学会把它擦成丝、压去毒汁、烤成“farinha”，并把它种在每家园子的一角。母亲们说，凡有木薯生长之处，玛尼便归来喂养自己的家人。",
      ]
    },
    themes: [text("plant origin", "植物起源"), text("moon child", "月之子"), text("grief and gift", "悲恸与赠予")],
    tags: [text("tupi-guarani", "图皮-瓜拉尼"), text("manioc", "木薯"), text("jaci", "雅西"), text("mani", "玛尼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tupi%E2%80%93Guarani_mythology"
  },
  {
    id: "inkarri-quechua",
    title: text("Inkarrí Will Return", "印加王终将归来"),
    country: text("Peru", "秘鲁"),
    region: text("South America", "南美"),
    culture: text("Quechua", "克丘亚"),
    latitude: -13.532,
    longitude: -71.9675,
    category: "history",
    summary: text(
      "After the Spanish behead the last Inca, his head is buried in the mountains and his body in the lowlands; the Quechua say the two are slowly growing back together, and when they meet, Inkarrí will rise.",
      "西班牙人砍下末代印加王之后，他的头被葬在高山，身体葬在低地。克丘亚人说，二者在土下缓缓生长靠近——头与身相会之日，印加王将重归人间。"
    ),
    background: text(
      "Inkarrí is the central messianic figure of Andean colonial-era resistance, told in many regional Quechua versions.",
      "印加王（Inkarrí）是安第斯殖民时期反抗叙事中的核心“弥赛亚”形象，克丘亚各地流传多种版本。"
    ),
    narrativeParagraphs: {
      en: [
        "When the Spanish came down the mountain trails, they captured the Inca and offered him gold for his life. The Inca paid and was still killed. In some versions his head was taken to Cuzco, in others to Lima, and his body was buried in the high pastures of the south.",
        "Wherever the head and body lay, the Quechua say they have been growing back toward each other in the earth ever since. The hair of the head reaches downward like roots; the trunk pushes upward through the rock. When the two meet, the Inca will stand up again, his ear cocked for Quechua, his hand looking for the same heavy gold mace it carried before.",
        "Every generation hears the story differently. Some say the body is already at the heart's reach; some say it has further to go. The Quechua say what matters is not the exact date, but that work continues underground: a long, patient, hidden growth of which the people are part. To plant maize, to teach a Quechua word, to walk a mountain trail in silence is to add a little to that growth.",
      ],
      zh: [
        "西班牙人沿山路下来，俘获了印加王，向他索取黄金以换性命。印加王交付了黄金，却依旧被处死。一些版本里他的头被送往库斯科，另一些版本则说被送往利马，身体葬在南方高山牧场。",
        "无论头与身相隔多远，克丘亚人说，自那以后它们就在土下朝彼此生长。头颅的发丝向下伸如根须，躯体则沿岩层向上推。两者一旦相会，印加王便会重新立起——耳朵朝向克丘亚语，伸手寻找他从前那柄沉重的黄金权杖。",
        "每一代人听到的版本略有不同。有人说躯体已接近心脏，有人说还要走很远。克丘亚人说，重要的不是确切日期，而是这场地下、漫长、隐秘的生长从未停止——这片土地上的人是其中的一部分。种下一株玉米、教一个孩子说一句克丘亚语、在山路上安静地走一程，都是替这场生长添上一份。",
      ]
    },
    themes: [text("messianic return", "复归"), text("conquest grief", "征服之痛"), text("subterranean growth", "地下生长")],
    tags: [text("quechua", "克丘亚"), text("inkarri", "印加王"), text("andes", "安第斯"), text("colonial resistance", "殖民反抗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Inkarr%C3%AD"
  },
  {
    id: "wari-wilka",
    title: text("Wari Wilka, the Stone Ancestor", "石之祖瓦里·维尔卡"),
    country: text("Bolivia", "玻利维亚"),
    region: text("South America", "南美"),
    culture: text("Aymara", "艾马拉"),
    latitude: -16.5,
    longitude: -68.75,
    category: "myth",
    summary: text(
      "Before the present people, an older race of giants called the Wari turned to stone at the first sunrise; the Aymara still consider certain boulders their oldest grandfathers.",
      "在如今的人之前，曾有一族巨人“瓦里”，他们在第一次日出时被晒成石头；艾马拉人至今视某些巨石为他们最古老的祖父。"
    ),
    background: text(
      "Andean traditions across the Aymara and Quechua speak of a 'first humanity' that became stone when the sun rose for the first time.",
      "艾马拉与克丘亚地区的安第斯传统普遍讲述一族“初民”：他们在第一缕日光照下时被化为石头。"
    ),
    narrativeParagraphs: {
      en: [
        "Before the present sun there was a softer light, a long blue dawn that lasted for ages. Under it lived the Wari, giants who built terraces of stone and herded llamas the size of horses. They knew no death and so did not hurry. They left big tombs and bigger arguments.",
        "Viracocha the creator decided the world needed sharper edges. He raised the present sun above the lake at Titicaca. The first sunrise was so strong it stopped the Wari mid-step. They stood frozen on hillsides and roads. Their bodies became boulders the colour of red earth.",
        "The new humans who came after the Wari learned to leave coca and chicha on the largest boulders, especially those shaped like men leaning on a staff. To the Aymara, those rocks are not dead. They are the grandfathers, holding the ridges in place. When wind shifts a tile on a roof, the elders sometimes nod and say, 'Our grandfather sighed.'",
      ],
      zh: [
        "当今之太阳出现之前，世上有过一种更柔和的光——一段持续了无数代的漫长蓝色黎明。其下住着一族巨人“瓦里”，他们以石筑梯田，牧养着马那么高的驼羊。他们不知死亡，因此从不匆忙；身后留下许多大坟墓与更大的争吵。",
        "造物者维拉科查觉得世界需要更分明的边界。他在的的喀喀湖之上升起今天这颗太阳。第一缕日光太过强烈，瓦里们正走着便定住了。他们停在山坡上、道路上，身躯化作土红色的巨石。",
        "在瓦里之后到来的新人类学着在最大的石头上敬献古柯叶与“奇恰酒”，尤其是那些形似拄杖之人的石。对艾马拉人而言，那些石头并未死去——他们就是“祖父”，把山脊稳稳地撑在那里。屋顶上一片瓦被风吹动时，老人有时会点头说一句：“祖父叹气了。”",
      ]
    },
    themes: [text("first humanity", "初民"), text("stones as ancestors", "石作祖先"), text("sunrise", "日出")],
    tags: [text("aymara", "艾马拉"), text("wari", "瓦里"), text("titicaca", "的的喀喀"), text("petrification", "化石")],
    sourceUrl: "https://en.wikipedia.org/wiki/Inca_mythology"
  },
  {
    id: "selknam-hain",
    title: text("Sóorte and the Hain Initiation", "索尔特与“海因”入会礼"),
    country: text("Argentina", "阿根廷"),
    region: text("South America", "南美"),
    culture: text("Selk'nam", "塞尔克南"),
    latitude: -54.5,
    longitude: -67.5,
    category: "religion",
    summary: text(
      "Long ago women ruled the Selk'nam with painted spirits, until the men discovered the trick and took over the Hain ceremony, where painted figures still come out of the long lodge.",
      "很久以前塞尔克南由女人借假扮灵祇统治，男人识破后取而代之，由此发展出“海因”入会礼——彩绘的灵祇仍从长屋中走出。"
    ),
    background: text(
      "The Selk'nam of Tierra del Fuego performed the Hain initiation, documented by ethnographers in the early twentieth century before the people were largely wiped out.",
      "火地岛的塞尔克南人曾举行“海因”入会礼，由人类学家在二十世纪初记载，此后该民族遭近乎灭绝。"
    ),
    narrativeParagraphs: {
      en: [
        "In old time the women of Tierra del Fuego painted themselves with white clay, charcoal and red ochre and pretended to be the spirits. They emerged from a long lodge in stripes and circles and terrified the men into doing the heavy work. Sóorte, the moon-woman, was their head priestess.",
        "Krren, the sun-man and husband of Sóorte, watched closely and one day saw his wife washing the paint off behind a tree. He gathered the men and told them the truth. The men killed the women who had ruled, except those they thought might forget. From then on the men took the lodge and the paint, and Sóorte fled to the sky bearing the marks of the fight on her face.",
        "The Selk'nam Hain became a long initiation for young men: painted figures—K'menk, Halpen, Hosh—stepped out of the lodge to test boys for many weeks. The boys learned to recognise that the spirits were really their fathers and uncles, but to keep the secret from the women and the children. When the Hain ended, the boys had become men, and the moon's bruises were a reminder of how easily the order can change.",
      ],
      zh: [
        "在很久以前的火地岛上，女人用白泥、木炭与红赭石给自己彩绘，扮成神灵。她们从长屋中走出，身上是斑斓的条纹与圆圈，把男人们吓得只敢干重活。月之女索尔特是她们的首席女祭司。",
        "太阳之男克伦——索尔特的丈夫——细心观察，终于看见妻子在树后洗去颜料。他把男人们召到一起，告诉他们真相。男人们杀掉了那些一直统治他们的女人，只留下他们以为可能保密的人。男人们从此接过了长屋与颜料，索尔特带着脸上那场争斗留下的痕迹逃上天空。",
        "塞尔克南人的“海因”由此演化为为年轻男子准备的长期入会礼：彩绘的灵祇——“克门克”“哈尔彭”“霍什”——从长屋中走出，对小伙子进行长达数周的考验。少年要学会辨认那些“神灵”其实是父辈与叔伯，并把这一秘密对女人与孩童守住。海因结束时，少年已成为男人；月亮脸上的瘀痕则提醒人们：秩序的更替，原本就轻易得很。",
      ]
    },
    themes: [text("initiation", "入会"), text("gender reversal", "性别翻转"), text("ritual secret", "仪式之秘")],
    tags: [text("selknam", "塞尔克南"), text("hain", "海因"), text("tierra del fuego", "火地岛"), text("moon", "月")],
    sourceUrl: "https://en.wikipedia.org/wiki/Selk%27nam_people"
  },
  {
    id: "wayuu-pulowi-juya",
    title: text("Pulowi and Juyá the Rain", "普洛维与雨神胡亚"),
    country: text("Colombia", "哥伦比亚"),
    region: text("South America", "南美"),
    culture: text("Wayuu", "瓦尤"),
    latitude: 11.55,
    longitude: -72.35,
    category: "myth",
    summary: text(
      "Pulowi the dry-land woman lives by lonely pools and pulls hunters into them; her husband Juyá rides across the sky with thunder, watering the goats she does not catch.",
      "干地之女普洛维住在僻静的水洼边，会把猎人拉入水中；她的丈夫雨神胡亚乘雷声驰过天空，浇灌她未捕到的羊群。"
    ),
    background: text(
      "The Wayuu of La Guajira on the Caribbean coast of Colombia and Venezuela tell of Pulowi and her wandering husband Juyá in many regional songs.",
      "居住在哥伦比亚与委内瑞拉加勒比海岸拉瓜希拉地区的瓦尤人，在各地歌谣中讲述普洛维和她游走的丈夫雨神胡亚。"
    ),
    narrativeParagraphs: {
      en: [
        "On the dry plain of La Guajira, where the rain comes only twice a year, there are small round pools of water that should not be there. Pulowi lives in them. She is a beautiful woman with a heavy belly, and animals from goats to deer go down to drink. Hunters who follow the deer sometimes never come back; Pulowi pulls them under, and her belly grows.",
        "Her husband Juyá is the rain. He travels across the sky on a black horse, hunting with a fire-bow that becomes lightning. Where he gallops there are clouds, where he shoots there is thunder, where he stops to rest he soaks one valley at a time. He brings home meat for Pulowi at the start of the wet season.",
        "The Wayuu say that to live well in La Guajira you must respect both. You do not stand too long by a lonely pool, and you do not boast about luck on the day Juyá's clouds come up. When a Wayuu mother teaches her child to weave a chinchorro hammock, she traces a wave for Juyá and a circle for Pulowi into the cotton, so that the child sleeps held by both husband and wife.",
      ],
      zh: [
        "在一年只下两次雨的拉瓜希拉干燥平原上，时常会出现不该有的圆形小水洼。普洛维就住在其中。她是一位腹部沉重的美丽女子，从山羊到鹿都到这些水洼边饮水。追鹿而来的猎人有时一去不返：普洛维把他们拉入水底，她的腹部愈发膨大。",
        "她的丈夫胡亚是雨。他骑着黑马驰过天空，挽着一把化作闪电的火弓打猎。他奔行处便有云，发箭处便有雷，他歇息之处便逐一谷地地淋下雨水。雨季来临时，他给普洛维带回肉。",
        "瓦尤人说，要在拉瓜希拉好好生活，就要同时敬重这二位：不要在孤独的水洼边久站，也不要在胡亚的云朵升起的那一天夸耀好运。瓦尤母亲教孩子编“辛朝罗”吊床时，会在棉布上为胡亚织出一道波，又为普洛维织出一个圆环，让孩子在丈夫与妻子之间安睡。",
      ]
    },
    themes: [text("dual deities", "双神"), text("dry land", "干地"), text("hunter danger", "猎人之危")],
    tags: [text("wayuu", "瓦尤"), text("la guajira", "拉瓜希拉"), text("pulowi", "普洛维"), text("juya", "胡亚")],
    sourceUrl: "https://en.wikipedia.org/wiki/Wayuu_people"
  },
  {
    id: "arawak-daylight",
    title: text("Okoyumo Steals Daylight", "奥科约莫盗来白昼"),
    country: text("Guyana", "圭亚那"),
    region: text("South America", "南美"),
    culture: text("Arawak", "阿拉瓦克"),
    latitude: 4.8604,
    longitude: -58.9302,
    category: "folktale",
    summary: text(
      "When the people live forever in dim light, the small bird Okoyumo flies to the sun's house, hides a coal in his throat, and brings the daylight back across the forest.",
      "人们长久生活在昏暗之中时，小鸟奥科约莫飞到太阳之屋，把一颗火炭藏进喉咙，把白昼带回林中。"
    ),
    background: text(
      "Arawak peoples of the Guianas have many variants of the daylight-bird story, told to explain dawn and the redness of certain bird throats.",
      "圭亚那地区的阿拉瓦克人讲述多种“盗光鸟”故事，用以解释天明与某些鸟类喉部的红色。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago the daylight was kept in a clay jar in the house of the sun, who did not share. The people in the forest had only a dim grey glow to live by. They asked the larger birds to fetch the daylight, but the eagle was too proud and lost his way; the harpy was too heavy and could not lift the jar; the toucan tried to bargain and was caught.",
        "Then Okoyumo the small dark bird flew up. He landed quietly on the roof of the sun's house, dropped down through a hole, and swallowed a single hot coal from the daylight-jar. The coal burned his throat as he flew home; the longer he flew, the redder his throat became. He landed at the edge of the forest and coughed the coal into the river.",
        "From that coal the daylight spread across the canopy. The dim grey time ended, and the sun, when he came after, was less stingy with his light. Okoyumo's throat stayed red ever since. The Arawak point to any small bird with a red throat and say, 'Look, the daylight-thief is still showing his receipt.'",
      ],
      zh: [
        "很久以前，白昼被装在太阳家中的一只陶罐里，太阳从不分给别人。森林里的人们只有一缕灰蒙蒙的微光过日子。他们请大鸟去取白昼：鹰因骄傲迷了路，鹰雕太沉举不动罐子，巨嘴鸟想讨价还价反被抓住。",
        "于是身形小而暗色的奥科约莫飞上去。他悄然落在太阳屋顶，从屋顶的孔洞钻入，把白昼罐里一颗滚烫的火炭吞进喉咙。回飞路上，火炭烫着他的喉，他飞得越远，喉部就越红。他在森林边沿降落，把那颗火炭咳进河里。",
        "白昼便从这颗炭沿着林冠扩散开来，灰蒙蒙的时代结束。后来太阳出来时，也不再像以前那样小气。奥科约莫的喉部从此通红。阿拉瓦克人指着任何一只红喉小鸟说：“看，盗光的家伙仍带着自己的收据。”",
      ]
    },
    themes: [text("daylight", "白昼"), text("small thief", "小盗"), text("red throat", "红喉")],
    tags: [text("arawak", "阿拉瓦克"), text("okoyumo", "奥科约莫"), text("daylight", "白昼"), text("guyana", "圭亚那")],
    sourceUrl: "https://en.wikipedia.org/wiki/Arawak"
  },
  {
    id: "yanomami-omama",
    title: text("Omama Pulls the People from the River", "奥玛玛从河中拉出族人"),
    country: text("Brazil", "巴西"),
    region: text("South America", "南美"),
    culture: text("Yanomami", "雅诺玛米"),
    latitude: 2.7833,
    longitude: -63.5167,
    category: "myth",
    summary: text(
      "Omama, who survived the destruction of the first sky, fishes the ancestors of the Yanomami out of the river one by one and teaches them how to live without falling back in.",
      "幸存于第一片天毁灭的奥玛玛，从河里把雅诺玛米人的祖先一个一个钓上岸，教他们如何生活而不再坠回水中。"
    ),
    background: text(
      "The Yanomami of the Brazil-Venezuela border tell that an earlier sky collapsed and only Omama and his wife escaped, becoming the parents of the present human world.",
      "巴西—委内瑞拉边境的雅诺玛米人讲述：早先有一片天塌陷，唯有奥玛玛与妻子幸存，他们成了今日人世的双亲。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago the first sky fell down and broke. Most of the people on the earth at that time turned into animals: jaguars, peccaries, herons, monkeys. Only Omama and his wife Thuëyoma stood on dry ground beside a great river. The river was wide and dark and the bodies of the drowned floated past.",
        "Omama did not weep. He took a long fishing line, the kind used for surubim catfish, and cast it into the river. He pulled out a man with shining skin, set him on the bank, and gave him a name. He cast again and pulled out a woman, and another man, and another woman. From these came the Yanomami villages along the rivers.",
        "Omama taught them which plants healed and which would kill, how to thatch a yano roof in a circle so the rain would not pool on it, and how to sing the shapori shaman songs to call the xapiri spirits. He told them, 'I have pulled you out once. Hold each other tightly, and do not fall back in.' To this day a Yanomami shaman, when he sings, names Omama in the first breath.",
      ],
      zh: [
        "很久以前，第一片天塌下来，碎了。当时地上的多数人化作动物：美洲豹、野猪、鹭鸟、猴。只有奥玛玛和他的妻子图埃约玛站在大河岸上。河面又宽又黑，溺亡者的身躯顺流漂过。",
        "奥玛玛没有哭。他拿出捕巨型鲶鱼用的长钓线，朝河里抛去，钓上岸一个皮肤发亮的男子，给他取了名字；又抛钓出一位女子，再钓出一男一女。从他们之中诞生了雅诺玛米沿河的各个村寨。",
        "奥玛玛教他们辨识哪种植物治病、哪种致命，如何用茅草搭起圆形的“雅诺”屋顶让雨水滑下，又如何唱起“沙波里”萨满之歌召唤“沙皮里”灵祇。他对他们说：“我把你们从水里拉上来一次。你们要彼此抓得紧，不要再掉回去。”至今雅诺玛米萨满歌唱之时，第一口气吐出的，便是奥玛玛之名。",
      ]
    },
    themes: [text("survival", "幸存"), text("fishing out", "钓出族人"), text("shaman teaching", "萨满教导")],
    tags: [text("yanomami", "雅诺玛米"), text("omama", "奥玛玛"), text("xapiri", "沙皮里"), text("amazonia", "亚马孙")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yanomami"
  },
  {
    id: "tiddalik-frog",
    title: text("Tiddalik the Thirsty Frog", "渴极了的蛙提达利克"),
    country: text("Australia", "澳大利亚"),
    region: text("Oceania", "大洋洲"),
    culture: text("Aboriginal Australian", "澳大利亚原住民"),
    latitude: -37.4713,
    longitude: 143.8503,
    category: "folktale",
    summary: text(
      "Giant Tiddalik wakes up thirsty and drinks every river dry; only when the eel makes him laugh does he spill the water back out across the land.",
      "巨大的青蛙提达利克醒来口渴，把所有河流喝干；直到鳗鱼把他逗笑，他才把水吐回大地。"
    ),
    background: text(
      "Tiddalik is the iconic drought-and-rain frog of the Gunai/Kurnai of Gippsland; the tale is told widely across Aboriginal Australia.",
      "提达利克是吉普斯兰地区古奈/库尔奈人著名的旱与雨之蛙，类似故事在澳大利亚多个原住民群体中流传。"
    ),
    narrativeParagraphs: {
      en: [
        "Tiddalik was a frog as big as a hill, asleep most of the time. He woke one morning with a thirst no rain could touch. He went to the river and drank it. He went to the next river and drank it. He drank the lakes and the billabongs and the small pools, and the land cracked open behind him.",
        "The other animals gathered. Kangaroos, wallabies, emus, snakes, even the tiny bandicoots came to the council. They asked, 'How do we get the water back?' One animal said, 'Make him laugh.' They tried. The kookaburra performed his loudest laugh; Tiddalik did not move. The wombat danced; Tiddalik did not move. The platypus told a long boring story; Tiddalik almost yawned.",
        "Finally Old Eel slid out into the dust and tied himself in shapes—a knot, a circle, a long letter—getting more and more confused. Tiddalik watched, and his big mouth turned up at the corners. He laughed. As he laughed the rivers poured out of him in waves. The dry land filled again with water. The animals drank and Tiddalik went back to sleep, smaller. Children learn his name with the dry season.",
      ],
      zh: [
        "提达利克是一只如山般大的青蛙，多数时间在睡觉。一天清晨他醒来口渴难当，连暴雨都解不了。他走到河边把整条河喝干；又走到下一条河，把它也喝干；他喝光湖、沼、所有小水洼，他身后的大地一段段裂开。",
        "其他动物聚集起来。袋鼠、小袋鼠、鸸鹋、蛇，甚至小小的袋狸都来到议事。它们问：“怎么把水弄回来？”有人说：“逗他笑。”众人轮番上阵——笑翠鸟使出最大声的笑，提达利克纹丝不动；袋熊跳舞，他纹丝不动；鸭嘴兽讲了一段冗长无趣的故事，他几乎要打哈欠。",
        "最后老鳗鱼滑进尘土里，把自己打成各种形状——一个结、一个圈、一长串字母——越打越乱。提达利克看着看着，大嘴角慢慢翘起，他笑了。一笑之间，河水成波从他口中泻出。大地重新被水填满。动物们大口喝水，提达利克缩小着继续睡。澳大利亚的孩子学到旱季时，会同时记住他的名字。",
      ]
    },
    themes: [text("drought", "旱情"), text("laughter", "欢笑"), text("water release", "释水")],
    tags: [text("aboriginal", "原住民"), text("tiddalik", "提达利克"), text("frog", "蛙"), text("eel", "鳗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Tiddalik"
  },
  {
    id: "bunyip-billabong",
    title: text("Bunyip at the Billabong", "水洼里的本耶普"),
    country: text("Australia", "澳大利亚"),
    region: text("Oceania", "大洋洲"),
    culture: text("Aboriginal Australian", "澳大利亚原住民"),
    latitude: -34.9285,
    longitude: 138.6007,
    category: "creature",
    summary: text(
      "In the billabongs and waterholes of the inland, the bellowing Bunyip drags down anyone who comes too close at night, and his name is enough to keep children inside.",
      "在内陆的水洼与“比拉邦”里，咆哮的本耶普会把夜里太近的人拖入水中；光是说出他的名字就够把孩子留在家中。"
    ),
    background: text(
      "Bunyip is a fearsome water-monster of Aboriginal Australian traditions across the southeast; settlers adopted the term in the nineteenth century.",
      "本耶普是澳大利亚东南部原住民传统中令人畏惧的水中怪兽；十九世纪殖民者也沿用此名。"
    ),
    narrativeParagraphs: {
      en: [
        "In the dry inland a billabong is a long quiet bend of an old river. The water can be still for months. Stockmen who pass through at dusk sometimes hear a deep bellow from the reeds, like a bull and a frog and a man crying. The Aboriginal people who lived along the rivers had a name for the maker of that sound: Bunyip.",
        "He is not the same beast in every place. Some say he has the head of a horse and the body of a seal; some say a long neck like a duck and the back of a dog; some say a great hairy ape that drinks from below. What he has in common everywhere is appetite. A child who wades too far at twilight, a dog who licks the water at dawn, a horse that pulls too hard at a leading rope—they go under without struggle.",
        "When a young person asks where the Bunyip comes from, the older women say: 'He was here before us. Some say a man who broke a law became him.' They lay a small stone at the edge of the water and tell the child, 'You give the stone, the Bunyip leaves you alone.' Even at midday, no Australian child stands too long at the bank of a still billabong without remembering this.",
      ],
      zh: [
        "干旱的内陆里，所谓“比拉邦”是一段旧河中静止的弯。这水可以数月平静无波。黄昏赶牲口路过的人有时会从芦苇丛中听见一种深沉的咆哮——像公牛、像青蛙、像一个男人在哭。沿河而居的原住民给这种声音命名：本耶普。",
        "他在各地形象不同：有人说他马首海豹身，有人说他长颈似鸭、背似犬，也有人说他是从水下饮水的多毛大猿。各地共有的特征只有一个——胃口。黄昏时往里趟得太深的孩子、清晨在水边舔水的狗、把缰绳挣得太紧的马，往往无声地被拉入水中。",
        "年轻人问本耶普从何而来时，老妇说：“他比我们更早就在了。也有人说，他是触犯了规矩的人变成的。”她们在水边放下一颗小石，叮嘱孩子：“你献出石头，他便不来动你。”即使在正午，澳大利亚的孩子站在静水的“比拉邦”岸边，也不敢久留——这条嘱咐他不会忘。",
      ]
    },
    themes: [text("water monster", "水怪"), text("warning", "告诫"), text("law-breaker", "触法者")],
    tags: [text("aboriginal", "原住民"), text("bunyip", "本耶普"), text("billabong", "比拉邦"), text("water danger", "水之险")],
    sourceUrl: "https://en.wikipedia.org/wiki/Bunyip"
  },
  {
    id: "wagyl-swan-river",
    title: text("Wagyl Carves the Swan River", "瓦吉尔切出天鹅河"),
    country: text("Australia", "澳大利亚"),
    region: text("Oceania", "大洋洲"),
    culture: text("Noongar", "努噶尔"),
    latitude: -31.9505,
    longitude: 115.8605,
    category: "myth",
    summary: text(
      "The Rainbow Serpent Wagyl winds through the dunes of south-west Australia, leaving behind the Swan River and the long line of springs the Noongar still drink from.",
      "彩虹蛇瓦吉尔穿过西南澳的沙丘，留下天鹅河及一长串至今努噶尔人仍取水饮用的泉脉。"
    ),
    background: text(
      "The Wagyl (also Waugal) is the Rainbow Serpent of the Noongar of south-western Australia and the dreaming-shaper of the rivers around modern Perth.",
      "瓦吉尔（亦作 Waugal）是西南澳努噶尔人的彩虹蛇，是塑造珀斯一带河流的“梦时代”造物者。"
    ),
    narrativeParagraphs: {
      en: [
        "In the Dreaming, the land here was flat sandhills with no rivers. The Rainbow Serpent Wagyl came up from a deep cave under the Darling scarp and moved across the country. Where his long body pushed forward, the sand parted; where he turned, the river bent. He drank from his own track and the springs filled.",
        "He left other gifts. Where his belly rubbed, the granite hills appeared, smooth on top, the Noongar say, like the swell on his body. Where his head rested overnight, a deep waterhole formed. Where he shed an old skin, a stretch of white sand bank was left for the boys to camp and learn the law.",
        "Today the river Wagyl made still runs past Perth, called the Swan. Noongar elders teach that the river is not just water, it is the resting Wagyl himself. To poison it or to dam it without speaking to him is to disturb a living body. When workers planned new bridges and ferries, Noongar voices reminded the city—loudly when needed—who lay underneath the muddy stream.",
      ],
      zh: [
        "“梦时代”里，这里的土地是平坦的沙丘，没有河流。彩虹蛇瓦吉尔从达令山崖下方的深洞里钻出来，开始横穿这片土地。他的长躯前移，沙丘便分开；他每一次转身，河道便弯曲。他舔饮自己经过的痕迹，泉脉随之充满。",
        "他也留下其他礼物。他的腹部蹭过之处，便起了花岗岩山——努噶尔人说，山顶光滑如他身上的隆起；他过夜歇头之处，便形成一汪深水潭；他蜕下旧皮之处，留下一段洁白沙岸，少年们日后在此宿营、学习律法。",
        "至今瓦吉尔留下的那条河仍流经珀斯，名叫天鹅河。努噶尔长老教诲：这河不仅是水，它是瓦吉尔本身在歇息。在未与他对话之前向河中投毒或筑坝，就是惊扰一具活着的身体。当政府规划新的桥梁与渡轮时，努噶尔的声音曾必要时大声提醒整座城市：泥水底下卧着的是谁。",
      ]
    },
    themes: [text("rainbow serpent", "彩虹蛇"), text("river origin", "河之起源"), text("living waters", "活水")],
    tags: [text("noongar", "努噶尔"), text("wagyl", "瓦吉尔"), text("swan river", "天鹅河"), text("dreaming", "梦时代")],
    sourceUrl: "https://en.wikipedia.org/wiki/Wagyl"
  },
  {
    id: "seven-sisters-pleiades",
    title: text("The Seven Sisters and the Hunter", "七姊妹与猎人"),
    country: text("Australia", "澳大利亚"),
    region: text("Oceania", "大洋洲"),
    culture: text("Aboriginal Australian", "澳大利亚原住民"),
    latitude: -25.3444,
    longitude: 131.0369,
    category: "myth",
    summary: text(
      "Seven sisters cross the desert pursued by an obsessive hunter; they leap into the sky to escape him, becoming the Pleiades, while he becomes the bright belt of Orion just behind.",
      "七位姐妹横穿沙漠，被痴迷的猎人紧追；她们跃入天空成为昴星团，他化作紧随其后的猎户星座之带。"
    ),
    background: text(
      "The Seven Sisters songline (Kungkarangkalpa) runs across central Australia among many Aboriginal nations and explains the night sky and the shape of the land.",
      "“七姊妹”歌之路（Kungkarangkalpa）横贯澳大利亚中部，由多个原住民民族共同传唱，用以解释星空与土地形貌。"
    ),
    narrativeParagraphs: {
      en: [
        "Seven sisters were once travelling together across the central desert, looking for water and visiting the country of their grandmothers. A hunter named Wati Nyiru saw them, fell in love, and would not let them go. He used songs to pull them back, and clever men's tricks to make them lost. The sisters kept walking and tried not to look back.",
        "Wherever the sisters stopped, they left a sign: a waterhole, a flat outcrop, a bright stone. Wherever Wati Nyiru caught up briefly, the cliff turned that colour, the sand shifted in that pattern. The whole desert was marked by their flight. At last, near a great red rock, the sisters saw he would catch them on the open ground.",
        "They flew into the sky together. They became the Pleiades, the small bright cluster. Wati Nyiru leapt after them and became the long line of bright stars now called Orion's Belt, still chasing them across the night. Aboriginal women along the songline still sing the sisters' caution to younger women: keep moving, leave good signs, and do not let any one man set the route.",
      ],
      zh: [
        "七位姐妹曾结伴横穿中部沙漠，寻找水源，途经她们外祖母们的故土。猎人瓦提·尼鲁见到她们，一见倾心，不肯放手。他用歌召唤她们回头，用熟人的把戏让她们迷路。姐妹们继续走，尽量不回头看。",
        "她们歇脚之处，便留下记号：一汪水潭、一片平整的岩面、一颗发亮的石。瓦提·尼鲁追近之处，岩壁就染上他的颜色，沙地排成他的纹路。整片沙漠都被她们的逃亡留下印记。最后，她们在一块巨大红岩附近意识到，旷野里他终将赶上。",
        "她们一同跃入天空，化为昴星团那一簇小而亮的群星。瓦提·尼鲁紧随其后纵身跃起，化为今天人们称为“猎户之带”的那一长串亮星，仍在夜空里追着她们。沿这条歌之路的原住民女性，至今仍把姐妹们的告诫唱给年轻女子：继续走，沿途留下好的记号，别让任何一个男人决定你的路。",
      ]
    },
    themes: [text("songline", "歌之路"), text("pursuit", "追逐"), text("stars origin", "星辰起源")],
    tags: [text("aboriginal", "原住民"), text("seven sisters", "七姊妹"), text("pleiades", "昴宿"), text("orion", "猎户座")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kungkarangkalpa"
  },
  {
    id: "korkyt-ata",
    title: text("Korkyt Ata and the Music of the Steppe", "科尔克特祖父与草原之乐"),
    country: text("Kazakhstan", "哈萨克斯坦"),
    region: text("Central Asia", "中亚"),
    culture: text("Kazakh", "哈萨克"),
    latitude: 45.0,
    longitude: 65.0,
    category: "folktale",
    summary: text(
      "Hearing the cry of death in every direction he rides, Korkyt Ata hollows a camel-skin instrument over the great river and plays a song so beautiful that death must wait outside.",
      "无论奔向哪一方都听见死亡的呼唤之后，科尔克特祖父在大河之上挖空驼皮做出乐器，奏响一支美得让死亡也只能在外等候的曲子。"
    ),
    background: text(
      "Korkyt Ata is the legendary first bard of the Turkic peoples of the Aral Sea and the Syr Darya; the Book of Dede Korkut belongs to the same figure.",
      "科尔克特祖父是咸海与锡尔河沿岸突厥民族的传说之祖，也是《先祖科尔库特之书》中同一人物。"
    ),
    narrativeParagraphs: {
      en: [
        "Korkyt was born at midnight in a yurt that fell silent the moment he opened his eyes. He could already hear, far across the steppe, the voice of his own death calling, soft but constant. He grew up, made a swift horse his friend, and rode off to escape it.",
        "He rode north, but the death-voice was waiting under the cedars; he rode east, but it was at the edge of the salt lake; he rode south, and met it on the trading roads; he rode west, and it was sitting on the dunes. So he came home to the wide river. Over the water he stretched a saddle and a camel skin and carved a bowl out of wood; he attached strings of horse hair and called the instrument kobyz.",
        "He played for the river, and the cranes paused in their flight, and death, listening politely, sat down on the bank. As long as Korkyt played, death could not enter. He played for a hundred years. When his arm finally gave way and his song stopped, death walked in and took him with a small smile, and the kobyz stayed by the river as a gift to every Kazakh bard since.",
      ],
      zh: [
        "科尔克特出生在午夜的毡房中，他一睁眼整座帐篷便陷入沉寂。他幼小时已能从遥远的草原上听见自己之死的呼唤——柔和而不断。长大后他驯了一匹快马，决意骑去躲避它。",
        "他往北走，死亡声在松柏林下等他；往东走，它在盐湖边沿；往南走，它候在商道上；往西走，它坐在沙丘上。他于是回到大河之滨。他在水面上铺开马鞍与驼皮，刻出一只木碗，扣上马尾毛弦——这件乐器就是“科布兹”。",
        "他对着河水弹奏，鹤群飞行中停下，死亡也客气地坐在岸边。只要他一直奏，死亡就进不来。他这样奏了一百年。当他的手臂终于不再举动、曲声停下时，死亡才走近，含着一丝微笑把他带走；那把科布兹却留在河边，成了赠予后来每一代哈萨克游吟者的礼物。",
      ]
    },
    themes: [text("first musician", "始作乐者"), text("delay of death", "延阻死亡"), text("river", " 河流")],
    tags: [text("kazakh", "哈萨克"), text("korkyt ata", "科尔克特"), text("kobyz", "科布兹"), text("syr darya", "锡尔河")],
    sourceUrl: "https://en.wikipedia.org/wiki/Korkut_Ata"
  },
  {
    id: "aldar-kose",
    title: text("Aldar Köse the Beardless Trickster", "无须机巧家阿勒达尔·科塞"),
    country: text("Kazakhstan", "哈萨克斯坦"),
    region: text("Central Asia", "中亚"),
    culture: text("Kazakh", "哈萨克"),
    latitude: 48.0196,
    longitude: 66.9237,
    category: "folktale",
    summary: text(
      "Beardless Aldar Köse tricks greedy bays out of horses, sheep, and full kettles, and gives most of his winnings to the poorest yurts on the steppe.",
      "无须的阿勒达尔·科塞专门把贪心的巴依骗得没了马、羊和满壶热奶，又把所得多半送给草原上最穷的毡房。"
    ),
    background: text(
      "Aldar Köse is the legendary trickster of Kazakh, Kyrgyz, and other Central Asian folklore, known for outwitting wealthy bays and stinging misers.",
      "阿勒达尔·科塞是哈萨克、吉尔吉斯等中亚民族民间故事中的著名机巧者，最擅长戏弄富有的“巴依”与吝啬之辈。"
    ),
    narrativeParagraphs: {
      en: [
        "Aldar Köse had no beard, no horse of his own, and very little coat. What he did have was a sharp tongue and a finger ready to point. In the coldest month he rode his thin mule across the steppe and met a rich bay on a fat-rumped horse, wrapped in a coat of seven layers. The bay laughed at Aldar's thin coat. Aldar said, 'Mine is the magic coat of warmth. Yours is heavy and slow.'",
        "The bay was sure no one would refuse a thick coat. Aldar shrugged. He told the bay that he had a wedding to attend and would meet him at the next yurt. The bay watched Aldar shiver, and asked to swap. Aldar took his time, talked the bay into adding a sack of dried curds for the difference, and rode off in seven layers of fur, leaving the bay in a thin coat of patched wool.",
        "Across the steppe Aldar gave away the curds at the poorest yurts, kept the thinnest of the bay's coats for himself, and traded the rest for a bag of millet for an old widow. The next morning he was again the beardless man on a thin mule. The bay, frozen and ashamed, hurried home; the widow ate millet. The Kazakh say a man who cannot grow a beard sometimes grows a longer plan.",
      ],
      zh: [
        "阿勒达尔·科塞没有胡子，没有自己的马，也没有像样的大衣。他只有一张利嘴和一根随时能伸出去的食指。最冷的那个月，他骑着一头瘦驴穿过草原，遇上一位骑着肥臀马、披着七层皮大衣的富有巴依。巴依嘲笑他的薄衣，他回答：“我的衣是‘暖之神衣’。你的那件又重又慢。”",
        "巴依笃信没人会拒绝厚衣。阿勒达尔耸耸肩，告诉巴依自己要去赴一场婚礼，下一座毡房见。巴依看他冻得发抖，便请求互换。阿勒达尔慢条斯理地答应，又劝巴依再添一袋干酪丁作差价，随后披着七层皮大衣骑马远去，巴依则只剩下一件打着补丁的薄毛衣。",
        "他穿过草原，把干酪丁送进最贫的几座毡房，自己只留巴依那件最薄的，将其余的换成一袋小米给一位老寡妇。第二天清晨，他又是那位骑瘦驴的无须男子。巴依冻得羞愧地回了家，寡妇吃上了小米。哈萨克人说，一个长不出胡子的人，有时长出一份更长的盘算。",
      ]
    },
    themes: [text("trickster", "机巧"), text("rich and poor", "贫富"), text("steppe wit", "草原智")],
    tags: [text("kazakh", "哈萨克"), text("aldar kose", "阿勒达尔·科塞"), text("bay", "巴依"), text("trickster", "机巧")],
    sourceUrl: "https://en.wikipedia.org/wiki/Aldar_K%C3%B6se"
  },
  {
    id: "alpamysh",
    title: text("Alpamysh Comes Home", "阿尔帕梅什归来"),
    originalTitle: text("Alpomish", "阿尔帕梅什"),
    country: text("Uzbekistan", "乌兹别克斯坦"),
    region: text("Central Asia", "中亚"),
    culture: text("Uzbek", "乌兹别克"),
    latitude: 38.8597,
    longitude: 65.7896,
    category: "epic",
    summary: text(
      "The Uzbek hero Alpamysh, betrayed and thrown in a Kalmyk pit, climbs out after seven years and rides home in time to stop his wife Barchin's forced wedding to a usurper.",
      "乌兹别克英雄阿尔帕梅什被人出卖，落入卡尔梅克人的深坑七年；他爬出来后及时归乡，阻止妻子巴尔钦被迫改嫁篡位者。"
    ),
    background: text(
      "The Alpamysh epic is shared by Uzbeks, Kazakhs and other Turkic peoples; the Uzbek version is sung at gatherings by bakhshi singers.",
      "《阿尔帕梅什》史诗是乌兹别克、哈萨克及其他突厥民族共同传唱的作品；乌兹别克版本由“巴克希”艺人在集会上演唱。"
    ),
    narrativeParagraphs: {
      en: [
        "Alpamysh was the strongest young man of the Kongrat tribe, a sworn brother-in-arms of Barchin, the strongest young woman of the Boysun. They were married by their own choice. The Kalmyks, who envied the Uzbek herds, invited Alpamysh and his men to a contest of horses, then poisoned the wells the night before.",
        "Alpamysh was the only one to survive; the Kalmyks threw him into a deep pit in their khan's courtyard. For seven years he lay there, his beard growing long, his horse Boychibor waiting in the hills. A Kalmyk princess who had loved him from afar finally lowered a rope and helped him climb out.",
        "He emerged to find that a man named Ultontoz had usurped his land and was about to marry Barchin against her will. Alpamysh rode home on Boychibor, joined the wedding feast in beggar's clothes, drew the great bow no one else could string, and shot down the false bridegroom with the same arrow that announced the return of his name. The Uzbek bakhshi end the song with the line: 'The wedding became his own.'",
      ],
      zh: [
        "阿尔帕梅什是孔格拉特部落最强的青年，与博伊孙部落最强的姑娘巴尔钦义结金兰，两人自定婚约。觊觎乌兹别克畜群的卡尔梅克人邀请阿尔帕梅什与众人赴一场赛马，前夜却在水井下毒。",
        "阿尔帕梅什是唯一的幸存者；卡尔梅克人把他丢进汗王庭院里一口深坑。他在坑底躺了七年，胡须长长，他的马“博伊奇博尔”在山间静等。一位心里早已爱慕他的卡尔梅克公主最终放下一根绳，把他拉出。",
        "他爬出后才知道，一位名叫乌尔通托兹的人占了他的家园，并要逼娶巴尔钦。阿尔帕梅什骑“博伊奇博尔”赶回家乡，乔装乞丐混入婚宴，挽起众人挽不开的大弓，一支箭射倒假新郎，箭声同时宣告了他的归来。乌兹别克“巴克希”艺人以这一句作为结句：“婚礼成了他自己的。”",
      ]
    },
    themes: [text("captivity and return", "囚禁与归来"), text("rightful bride", "名分之婚"), text("bow contest", "弯弓比试")],
    tags: [text("uzbek", "乌兹别克"), text("alpamysh", "阿尔帕梅什"), text("barchin", "巴尔钦"), text("bakhshi", "巴克希")],
    sourceUrl: "https://en.wikipedia.org/wiki/Alpamysh"
  },
  {
    id: "gorogly-akhal",
    title: text("Görogly the Horse-Lord", "马之主格罗格雷"),
    originalTitle: text("Görogly", "格罗格雷"),
    country: text("Turkmenistan", "土库曼斯坦"),
    region: text("Central Asia", "中亚"),
    culture: text("Turkmen", "土库曼"),
    latitude: 37.9601,
    longitude: 58.3261,
    category: "epic",
    summary: text(
      "Born in his mother's grave and raised by his blind grandfather, Görogly tames the wonder-horse Gyrat, founds the fortress Çandybil, and gathers forty companions against the eastern khans.",
      "出生于母亲坟中的格罗格雷，由瞎眼祖父抚养长大；他驯服奇骏“吉拉特”，建起“钱迪比尔”要塞，召集四十义士与东方诸汗为敌。"
    ),
    background: text(
      "The Turkmen Görogly cycle (related to the Azerbaijani Köroğlu) is on UNESCO's intangible heritage list, sung by bagshy bards.",
      "土库曼《格罗格雷》史诗系列（与阿塞拜疆《柯尔奥卢》同源）已列入联合国教科文非遗名录，由“巴格希”艺人传唱。"
    ),
    narrativeParagraphs: {
      en: [
        "Görogly was born when his mother was already in the grave. The earth above her body cracked; an old shepherd heard the cry, dug down, and lifted the boy into the air. He grew up in the tents of his blind grandfather, listening to long songs about the steppe. Once a foreign khan blinded his grandfather and stole his herds.",
        "Görogly tracked down a special foal in a lake, made from light and from speed, and named him Gyrat. With Gyrat he could ride further in a day than other men in a week. He built the fortress of Çandybil in the Kopet Dag mountains and gathered forty companions around him: blacksmiths, poets, archers, a giant cook, a beardless trickster.",
        "Together they raided the eastern khans for justice, returning lost daughters to their fathers and stolen herds to the right tents. Görogly never sat to eat without all forty present. The Turkmen bagshy sing his songs at weddings and funerals: when the saddle is empty, they say, the song is full.",
      ],
      zh: [
        "格罗格雷的母亲下葬时他还未出生。她的坟头土裂开，一位老牧人听见婴啼，掘下去把他抱出。男孩在瞎眼祖父的帐篷里长大，听老人讲长长的草原故事。后来一位外族汗王刺瞎祖父、夺走畜群。",
        "格罗格雷在一汪湖里找到一匹奇驹，光与速度交织而成，他给它起名“吉拉特”。骑着吉拉特，他一天能走过别人一周走的路。他在科佩特达山中筑起“钱迪比尔”要塞，召集起四十位伙伴——铁匠、诗人、神射手、巨人厨师、无须机巧者。",
        "他们一同向东方诸汗讨回公道，把被夺走的女儿送回父亲的帐前，把被劫掠的畜群送回正确的毡帐。格罗格雷从不在四十人未到齐之前坐下来吃饭。土库曼“巴格希”艺人在婚礼与葬礼上传唱他的歌：他们说，鞍上无人之时，歌反而更满。",
      ]
    },
    themes: [text("brotherhood", "义结金兰"), text("wonder horse", "奇骏"), text("just raid", "义夺")],
    tags: [text("turkmen", "土库曼"), text("gorogly", "格罗格雷"), text("gyrat", "吉拉特"), text("candybil", "钱迪比尔")],
    sourceUrl: "https://en.wikipedia.org/wiki/G%C3%B6rogly"
  },
  {
    id: "erlik-khan",
    title: text("Erlik Khan Judges the Dead", "额尔利克汗审判亡魂"),
    country: text("Mongolia", "蒙古"),
    region: text("Central Asia", "中亚"),
    culture: text("Mongolian", "蒙古"),
    latitude: 47.9184,
    longitude: 106.9177,
    category: "religion",
    summary: text(
      "Cast down from the upper sky for his pride, Erlik Khan rules the underworld below the great river, weighing every dead soul on iron scales beside his nine sons.",
      "因骄傲被自天上贬下的额尔利克汗，统治大河之下的冥府，在九个儿子陪伴下，用铁秤称量每一个亡魂。"
    ),
    background: text(
      "Erlik (Yerleg / Erlig Khan) is the great judge of the dead in Mongolian and Turkic shamanic tradition, originally a creator-brother to the sky-god Tengri.",
      "额尔利克（亦作 Yerleg / Erlig Khan）是蒙古与突厥萨满传统中的亡魂大判官，最初本是天神腾格里的兄弟造物者。"
    ),
    narrativeParagraphs: {
      en: [
        "In the beginning Tengri walked the upper sky and the dark sea below was empty. He needed mud to make the earth, and he made Erlik dive for it. Erlik brought up mud, but kept a small piece in his mouth, dreaming of his own world. Tengri made the earth grow; the piece in Erlik's mouth grew too and forced him to spit. From the spit came the marshes and the sicknesses of the world.",
        "Tengri, furious at his brother's pride, threw him down through the layers of earth into the underworld. There Erlik built his black palace on the far bank of the river of milk, with nine sons and nine daughters to assist him. He took for himself the dead and the diseases as his own herd.",
        "When a Mongolian dies, the soul travels down to Erlik's gate. The nine sons bring out iron scales. Good deeds are weighed against bad. Those who pass become guests in Erlik's hall before being released back into the upper sun-cycle; those who fail are bound as servants. The shamans who can travel down and back negotiate with the nine sons on behalf of the sick and the dying.",
      ],
      zh: [
        "起初，腾格里在上界的天空行走，下方一片黑色大海空无一物。他需要泥土造地，便派额尔利克下水取泥。额尔利克叼上来一块泥，却把另一小块含在口中，私想造自己的世界。腾格里让大地长大，额尔利克口中的泥也跟着膨胀，逼得他吐了出来——吐出之物化作世上的沼泽与疾病。",
        "腾格里怒兄弟之骄狂，把他穿过几层大地，直贬入冥府。额尔利克在乳之河彼岸建起黑色宫殿，九个儿子九个女儿为他效力。他以亡者与诸疾为自己的牲群。",
        "蒙古人去世时，魂魄沿路下到额尔利克的门前。九个儿子取出铁秤——以善行称量恶行。通过审判者，先做额尔利克殿中的客人，随后被放回上界的日轮循环；未通过者，则被绑作仆役。能够下到冥府再返回的萨满，便代病人与垂死者，向九子讨价还价。",
      ]
    },
    themes: [text("underworld", "冥府"), text("judgment", "审判"), text("pride punished", "骄傲遭贬")],
    tags: [text("mongolian", "蒙古"), text("erlik", "额尔利克"), text("tengri", "腾格里"), text("shaman", "萨满")],
    sourceUrl: "https://en.wikipedia.org/wiki/Erlik"
  },
  {
    id: "temujin-becomes-chinggis",
    title: text("Temüjin Becomes Chinggis Khan", "铁木真成为成吉思汗"),
    country: text("Mongolia", "蒙古"),
    region: text("Central Asia", "中亚"),
    culture: text("Mongolian", "蒙古"),
    latitude: 48.0667,
    longitude: 106.9333,
    category: "history",
    summary: text(
      "A boy born clutching a blood-clot rises from kidnapped slave to ruler of all the felt-walled tents; on the banks of the Onon, the tribes name him Chinggis Khan, oceanic ruler.",
      "出生时手握血凝块的少年，从被掳为奴一路成长为统御所有毡房的君主；在鄂嫩河畔，各部尊他为“成吉思汗”——四海之主。"
    ),
    background: text(
      "The Secret History of the Mongols records the life of Temüjin from his birth around 1162 to his proclamation as Chinggis Khan in 1206.",
      "《蒙古秘史》记录了铁木真自约 1162 年出生到 1206 年被尊为成吉思汗的生平。"
    ),
    narrativeParagraphs: {
      en: [
        "When Temüjin was born his small fist was closed tightly. The midwife unfolded his fingers and found a black blood-clot in his palm. The old women murmured that he would shed many lives; his father simply called him Temüjin, after a chief he had recently defeated.",
        "His father was poisoned and his family was abandoned by their clan. As a boy Temüjin caught marmots and fished the Onon River to feed his mother. He was captured, escaped, killed a half-brother over a fish, and built a small camp around himself. He married Börte, who was kidnapped by the Merkit and rescued by Temüjin and his sworn brother Jamukha. Slowly he gathered allies and outlasted enemies.",
        "On the banks of the Onon in 1206, all the great tribes—Naimans, Keraits, Tatars, Merkits, who had ridden against him for years—stood before him and named him Chinggis Khan, oceanic ruler. He set the first laws of the steppe, a yasa to bind every felt-walled tent, and within twenty years the silk and metal of half a continent moved at his order. The Secret History says the blood-clot in his fist was a sign; the steppe was already in his hand.",
      ],
      zh: [
        "铁木真出生时，小拳紧握。接生婆掰开他的手指，发现掌心有一块黑色血凝块。老妇们窃语说，此子日后必夺多人之命；父亲只把他唤作铁木真，那是他刚击败的一位酋长之名。",
        "他父亲被人下毒身亡，家族也被本氏族遗弃。少年铁木真在鄂嫩河边打旱獭、捕鱼供养母亲。他曾被掳为奴又逃出，因争一条鱼杀死过同父异母的兄弟，又一点点筑起自己的小营地。他娶了孛儿帖；后来妻被蔑儿乞掠去，他与义兄札木合一同将她救回。他逐步集结盟友，把宿敌一一耗尽。",
        "1206 年，鄂嫩河畔，多年与他厮杀的大部落——乃蛮、克烈、塔塔尔、蔑儿乞——齐立于他面前，奉他为成吉思汗，意为“四海之主”。他颁布草原首部成文之律“雅萨”，约束每一座毡房；二十年内，半个大陆的丝绸与铁器都按他的号令而动。《蒙古秘史》说，他掌中那块血凝块是一个征兆——草原早已握在他手里。",
      ]
    },
    themes: [text("rise from below", "底层崛起"), text("steppe law", "草原之律"), text("oceanic ruler", "四海之主")],
    tags: [text("mongolian", "蒙古"), text("temujin", "铁木真"), text("chinggis khan", "成吉思汗"), text("onon river", "鄂嫩河")],
    sourceUrl: "https://en.wikipedia.org/wiki/Genghis_Khan"
  },
  {
    id: "amirani-bound",
    title: text("Amirani Bound to the Caucasus", "阿米拉尼被缚于高加索"),
    country: text("Georgia", "格鲁吉亚"),
    region: text("Caucasus", "高加索"),
    culture: text("Georgian", "格鲁吉亚"),
    latitude: 42.7167,
    longitude: 44.7167,
    category: "myth",
    summary: text(
      "The Georgian hero Amirani steals fire and good craft for humanity; the high god chains him to a peak above the Khevi where his eagle gnaws at his liver until a small dog can break the chain.",
      "格鲁吉亚英雄阿米拉尼为人间盗来火与技艺；至高神把他锁在赫维高原上方的峰顶，让鹰啄食他的肝——直到一只小狗能咬断锁链。"
    ),
    background: text(
      "Amirani is the great Georgian Prometheus-figure, sung in epics across the Caucasus; the chain on Mount Kazbek is renewed every year.",
      "阿米拉尼是格鲁吉亚版的“盗火者”，遍及高加索的史诗传唱他；卡兹别克山上的锁链据说每年都被更换。"
    ),
    narrativeParagraphs: {
      en: [
        "Amirani was the son of the hunter-goddess Dali and a mortal man. He grew up so strong he could lift a buffalo, and when he saw the people in the valleys had no fire and ate raw meat, he climbed up to the upper hall of Ghmerti the high god and stole a coal from the hearth.",
        "He brought down the fire, and with it the secrets of forging iron, baking bread, and tying yokes. The Georgians flourished. But Ghmerti was angry, both for the theft and for Amirani's pride. He chained Amirani to the high peak above the Khevi with a chain forged by the divine blacksmith.",
        "An eagle came every day and tore at Amirani's liver, which grew back each night. A small white dog gnaws at the chain to free him. Every year on Saint George's Day, when the chain is almost worn through, the blacksmiths of the Caucasus strike their anvils, and the chain mends itself overnight. The villagers say if everyone forgot to strike their anvil that day, Amirani would walk down at last and the world would change.",
      ],
      zh: [
        "阿米拉尼是猎神达莉与凡间男子之子。他自幼力大无比，可单手举起水牛。看见山下平原的人没有火、吃生肉，他登上至高神格梅尔提的天上厅堂，从神炉里偷了一颗炭。",
        "他把火带下人间，连同冶铁、烤饼、套轭的秘诀一并教给众人。格鲁吉亚人因此兴旺。但格梅尔提震怒——既怒其盗，又怒其骄。他用天上铁匠所打的锁链，将阿米拉尼锁在赫维高原上方的高峰上。",
        "鹰每日来啄食他的肝，肝每夜重生。一只小白狗在岸边咬那条锁链，想让他获释。每年圣乔治节前后，锁链几近磨断之际，整个高加索的铁匠便敲响铁砧，一夜之间链子又自行修复。山下的村民说，要是哪一年所有铁匠都忘了敲砧，阿米拉尼就会终于走下山来，世界从此改变。",
      ]
    },
    themes: [text("fire theft", "盗火"), text("eternal punishment", "永罚"), text("anvil ritual", "敲砧之礼")],
    tags: [text("georgian", "格鲁吉亚"), text("amirani", "阿米拉尼"), text("kazbek", "卡兹别克"), text("blacksmith", "铁匠")],
    sourceUrl: "https://en.wikipedia.org/wiki/Amirani"
  },
  {
    id: "david-of-sassoun",
    title: text("David of Sassoun", "萨松的大卫"),
    originalTitle: text("Sasna Tsrer", "萨松勇士"),
    country: text("Armenia", "亚美尼亚"),
    region: text("Caucasus", "高加索"),
    culture: text("Armenian", "亚美尼亚"),
    latitude: 38.8167,
    longitude: 41.65,
    category: "epic",
    summary: text(
      "Four generations of the Sassoun line defend a small mountain people against the lowland tyrant Msra-Melik, ending with David, whose sword of lightning is too heavy for any cousin to lift after him.",
      "萨松一系四代守护这个山中小族抵抗低地暴君“米斯拉-梅利克”，最终由大卫执剑，雷电之剑沉得他之后无亲族再能举起。"
    ),
    background: text(
      "The Armenian epic Sasna Tsrer ('Daredevils of Sassoun') is on UNESCO's intangible heritage list and centres on the mountain town of Sassoun south of Lake Van.",
      "亚美尼亚史诗《萨松勇士》（Sasna Tsrer）已列入联合国教科文非遗名录，以凡湖以南山中小镇萨松为中心。"
    ),
    narrativeParagraphs: {
      en: [
        "Four generations of heroes guarded the small mountain town of Sassoun. First Sanasar and Baghdasar, twin brothers; then Mher the Elder, who killed lions with his fists; then his son Davit, born on a stormy night to a mother who had asked the rain for a child as bold as the rain.",
        "When Davit was a young man, the lowland tyrant Msra-Melik came demanding tribute. Davit refused. He took down his father's lightning-sword Tur Ketsaki, mounted his uncle's wild colt, and rode out alone. He drove Msra-Melik back across the plain in a single night, sparing the women and children. The lowland did not raid Sassoun again in his lifetime.",
        "Davit's son Mher the Younger came after him, but found no enemy worth the family blade. Frustrated by a world too small for the sword, he rode into a cave on Mount Agravakar, where, the song says, he sleeps still. When at last the world becomes wide enough to need him, the cave will open and Mher the Younger will ride out. The Armenian say the song is sung again every spring, in case that day is close.",
      ],
      zh: [
        "四代英雄守护着山中小镇萨松。最先是双胞胎兄弟萨纳萨尔与巴格达萨尔；接着是“老梅赫尔”，他可以徒手击杀狮子；然后是“老梅赫尔”的儿子——大卫，他出生于一个雷雨之夜，他的母亲曾向雨水祈求一个像雨水般大胆的孩子。",
        "大卫年轻时，低地暴君米斯拉-梅利克来索贡。大卫拒绝。他取下父亲的雷电之剑“图尔·克察基”，骑上叔父的烈驹，独自迎敌。一夜之间他把米斯拉-梅利克的军队赶过平原，未伤妇孺。他在世时，低地再没敢侵扰萨松。",
        "他的儿子“小梅赫尔”继其后，可他发现世上没有配得上家族之剑的敌人。他无所用其武，气闷之下骑入阿格拉瓦卡山的洞穴。歌中说，他至今仍睡在那里。等到世界宽大到需要他时，洞口便会开启，小梅赫尔将策马而出。亚美尼亚人说，每个春天他们都重唱一遍这支歌，以防那一天就在近旁。",
      ]
    },
    themes: [text("generational defender", "世代守护"), text("lightning sword", "雷电之剑"), text("sleeping hero", "沉睡之雄")],
    tags: [text("armenian", "亚美尼亚"), text("sassoun", "萨松"), text("davit", "大卫"), text("agravakar", "阿格拉瓦卡")],
    sourceUrl: "https://en.wikipedia.org/wiki/Daredevils_of_Sassoun"
  },
  {
    id: "hayk-bel",
    title: text("Hayk Slays Bel", "哈伊克击杀贝尔"),
    country: text("Armenia", "亚美尼亚"),
    region: text("Caucasus", "高加索"),
    culture: text("Armenian", "亚美尼亚"),
    latitude: 40.1872,
    longitude: 44.5152,
    category: "history",
    summary: text(
      "The patriarch Hayk leads his people out of Babylon, refuses the rule of the giant Bel, and kills him with a long arrow beside Lake Van, founding the line of the Hay.",
      "始祖哈伊克率族人出巴比伦，拒做巨人贝尔之属，在凡湖畔以长箭射杀贝尔，开创“哈伊”一族。"
    ),
    background: text(
      "Movses Khorenatsi's medieval History of Armenia names Hayk as the eponymous ancestor of the Armenians (who call themselves Hay).",
      "中世纪历史家莫夫塞斯·霍列纳齐在《亚美尼亚史》中将哈伊克立为亚美尼亚人（自称“哈伊”人）的始祖。"
    ),
    narrativeParagraphs: {
      en: [
        "Hayk was a great-grandson of Noah, born tall as a doorpost and steady as a forge. He served at the court of Bel, the giant king of Babylon, until Bel demanded that every man bend the knee. Hayk would not. He gathered his sons, his daughters, his cousins, his cattle, and walked north to the cool waters of Lake Van.",
        "Bel followed with his army to bring him back. The two hosts met on a plain beside the lake. Hayk drew a long bow taller than two men and waited until Bel, in his bronze helmet, stepped forward to taunt. The arrow flew through the breastplate and out the back. Bel fell. The army turned and ran.",
        "Hayk stood his banner on the field and built a town nearby called Haykashen, 'Hayk's place'. From his sons grew the line of the Hay, who still call their land Hayastan and their language Hayeren. Each August the Armenian month of Navasard begins on the day Bel fell, so that even the calendar remembers the bow.",
      ],
      zh: [
        "哈伊克是诺亚的曾孙，身材如门柱，体格如锻铁。他在巴比伦巨人王贝尔的宫中任职，直到贝尔下令所有人都要跪拜。哈伊克不肯。他召集儿女、表亲、畜群，向北行至凉爽的凡湖畔。",
        "贝尔率大军追来强迫他归降。两军在湖边平原相遇。哈伊克挽起两人高的大弓，等贝尔头戴铜盔上前叫阵之时，一箭穿胸而过，从背后透出。贝尔倒地，大军掉头逃走。",
        "哈伊克在战地竖起旗帜，在附近建起一座小镇“哈伊卡申”——“哈伊克之地”。从他诸子繁衍出“哈伊”一族，他们至今把自己的国土叫“哈伊斯坦”，把自己的语言叫“哈伊连”。每年八月亚美尼亚“纳瓦萨德”之月以贝尔倒下那天起算——连日历也记得那张弓。",
      ]
    },
    themes: [text("founding ancestor", "族祖"), text("freedom", "自由"), text("long bow", "长弓")],
    tags: [text("armenian", "亚美尼亚"), text("hayk", "哈伊克"), text("bel", "贝尔"), text("lake van", "凡湖")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hayk"
  },
  {
    id: "koroglu-bandit",
    title: text("Köroğlu, Son of the Blind", "盲者之子柯尔奥卢"),
    originalTitle: text("Koroğlu", "柯尔奥卢"),
    country: text("Azerbaijan", "阿塞拜疆"),
    region: text("Caucasus", "高加索"),
    culture: text("Azerbaijani", "阿塞拜疆"),
    latitude: 40.3776,
    longitude: 49.8923,
    category: "epic",
    summary: text(
      "When a cruel pasha blinds his father, Köroğlu builds the fortress of Çenlibel, raises a black foal called Kırat into a wonder-horse, and gathers a band that takes from the rich pashas and gives to the villages.",
      "暴虐帕沙刺瞎柯尔奥卢的父亲后，柯尔奥卢在“钱利贝尔”筑起山寨，把黑驹“克拉特”养成奇骏，召集义士劫富济贫。"
    ),
    background: text(
      "Köroğlu is the legendary outlaw of Azerbaijani, Turkmen, and Anatolian epic, sung by ashiq bards across the Caucasus and Iran.",
      "柯尔奥卢是阿塞拜疆、土库曼与安纳托利亚史诗中的著名义匪，在高加索与伊朗各地由“阿希克”艺人弹唱。"
    ),
    narrativeParagraphs: {
      en: [
        "Alı Kişi was the chief groom of a cruel pasha. He offered his master a thin-looking but heaven-bred colt. The pasha laughed at the colt and, in spite, had Alı's eyes put out. Alı walked home with his son Rövşan, the colt at their side. He told the boy: 'Their wisdom is short. Wait for this colt to grow.'",
        "Rövşan, now called Köroğlu, son of the blind, raised the colt by moonlight on grasses no other horse touched. The colt, Kırat, grew into a black thunderbolt. Köroğlu built a high fortress in the mountains called Çenlibel, and gathered seven thousand companions, each with his own story and his own weapon.",
        "From Çenlibel he came down on the pashas' tax-caravans, returned the gold to the village wells, and rode back uphill before any cavalry could form. The cruel pasha grew old and fearful; Köroğlu mocked him in songs that the ashiq still sing. When new weapons came—guns, real artillery—Köroğlu put down his sword and said, 'My age is over,' and rode away with Kırat into the steppe. The song says nothing else, except that a wind sometimes still moves the high grasses of Çenlibel.",
      ],
      zh: [
        "阿里·基希是一位暴虐帕沙的总马倌。他向主子献上一匹看似瘦弱却是天驹的小马驹。帕沙轻蔑地大笑，恶意之下命人挖去阿里的双眼。阿里牵着儿子勒夫尚和这匹小驹回家。他对儿子说：“他们的智慧浅。等这匹驹长大。”",
        "勒夫尚自此被叫做柯尔奥卢——“盲者之子”。他借月光，在别的马都不啃的草地上把那匹小驹喂大。小驹“克拉特”长成一道黑色雷电。柯尔奥卢在山中筑起“钱利贝尔”的高寨，召集起七千义士，每人都有一段自己的故事和一件趁手的兵器。",
        "他自钱利贝尔下山，劫帕沙的税队，把金子归还到村中井旁，再于骑兵集结之前驰回山上。那位暴虐帕沙渐渐老去，活在恐惧中；柯尔奥卢的“阿希克”艺人编出歌谣嘲笑他，至今仍在传唱。后来新武器——火枪、真正的火炮——出现，柯尔奥卢放下刀剑说：“我的时代过去了。”他骑着克拉特走进草原。歌至此再不多言，只说有时高高的钱利贝尔草丛仍会被一阵风吹动。",
      ]
    },
    themes: [text("outlaw justice", "义匪"), text("wonder horse", "奇骏"), text("end of an age", "时代之终")],
    tags: [text("azerbaijani", "阿塞拜疆"), text("koroglu", "柯尔奥卢"), text("kirat", "克拉特"), text("ashiq", "阿希克")],
    sourceUrl: "https://en.wikipedia.org/wiki/K%C3%B6ro%C4%9Flu"
  },
  {
    id: "nart-sosruko",
    title: text("Sosruko Steals the Sky-Fire", "索斯鲁科盗来天火"),
    country: text("Russia", "俄罗斯"),
    region: text("Caucasus", "高加索"),
    culture: text("Circassian", "切尔克斯"),
    latitude: 43.49,
    longitude: 43.6166,
    category: "myth",
    summary: text(
      "Born from a stone tempered in a smith's water-tub, the Nart hero Sosruko rides up to the sky-giant's fire, brings the heat back, and is later betrayed by his own heel.",
      "由铁匠淬火池中烧热的石头里诞生的纳尔特英雄索斯鲁科，骑马上天去取巨人之火，把热带回人间；最终他被自己的脚踝出卖。"
    ),
    background: text(
      "The Nart sagas are the heroic mythology of the peoples of the North Caucasus—Circassians, Ossetians, Abkhaz, Chechens—and Sosruko/Sosryqua is one of their central figures.",
      "“纳尔特”史诗是北高加索切尔克斯、奥塞梯、阿布哈兹与车臣等民族共有的英雄神话，索斯鲁科（亦作 Sosryqua）是其中重要人物之一。"
    ),
    narrativeParagraphs: {
      en: [
        "A shepherd's daughter washed her clothes by the river. A wandering smith saw her, fell in love, and his desire heated a stone she had been kneeling on. The smith Tlepsh took the stone home and quenched it in his water-tub. He tempered the boy who came out of the stone, but his ankles, which he did not pour the water over, stayed warm and soft.",
        "Sosruko grew up among the giant Narts and outwitted them at every contest. One terrible winter the world's fires all went out. Sosruko rode his small horse up the cliff to the sky-giant Inezh, who slept by a bonfire as wide as a lake. He stole a coal in a horn, slid down, and carried fire back across the steppes to every Nart hearth.",
        "The giants resented him. Years later, knowing his weakness, they invited him to a game where a great millstone was sent rolling down a slope at the players. Each Nart caught it on his ankle and threw it back. The millstone slid harmlessly off Sosruko's iron-hard body until it struck his unhardened ankle, and he fell. The Caucasian peoples say a song of his fall every winter, and they leave a coal in a horn by the fire to remember the night the giants almost won.",
      ],
      zh: [
        "牧人之女在河边洗衣。一位云游铁匠看见她，一见钟情，他的渴望把她跪着的那块石头烧热。铁匠特列普什把石头带回家，扔进自己的淬火池。他把从石头里走出的男孩反复淬火，但脚踝处他没浇到——脚踝便一直又暖又软。",
        "索斯鲁科在巨人“纳尔特”之中长大，所有比试都胜出他们。一个可怕的冬天，人间所有的火都灭了。索斯鲁科骑着小马沿崖而上，去往天上巨人伊涅日处——伊涅日睡在一堆大如湖面的篝火旁。他把一颗炭装进一只号角里，滑下悬崖，把火带回草原上每一座纳尔特的火塘。",
        "巨人们因此忌恨他。多年后，他们摸清了他的弱点，邀他参加一种游戏：一块大磨石从山坡上滚下来，每位纳尔特用脚踝接住再掷回去。磨石撞上索斯鲁科铁硬的身躯都无碍地弹开，最终撞中他未经淬火的脚踝，他便倒下。每年冬天高加索人会唱起他陨落的那支歌，并在火堆旁的一只号角里留一颗炭，纪念那个巨人差点赢了的夜晚。",
      ]
    },
    themes: [text("forged hero", "锻造之雄"), text("fire bringing", "盗火"), text("achilles weakness", "脚踝之弱")],
    tags: [text("circassian", "切尔克斯"), text("nart", "纳尔特"), text("sosruko", "索斯鲁科"), text("tlepsh", "特列普什")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nart_saga"
  },
  {
    id: "ravana-lanka",
    title: text("Ravana of Lanka", "楞伽之主罗波那"),
    country: text("Sri Lanka", "斯里兰卡"),
    region: text("South Asia", "南亚"),
    culture: text("Sinhalese", "僧伽罗"),
    latitude: 6.9271,
    longitude: 79.8612,
    category: "myth",
    summary: text(
      "On Sri Lanka the demon-king Ravana is remembered not only as the abductor of Sita, but as a scholar, a master of music, and a king whose flying machine still leaves marks on the island's stones.",
      "在斯里兰卡，罗摩故事中的罗刹王罗波那不仅是悉多的劫掠者，也是学问家、乐律大师、统治者，他的飞天器至今仍在岛上留下印痕。"
    ),
    background: text(
      "Where the Indian Ramayana paints Ravana as villain, Sri Lankan traditions often remember him as a learned king whose Lanka was an island of gold.",
      "印度《罗摩衍那》把罗波那刻画为恶徒，斯里兰卡传统则常把他视作博学之王，其王国“楞伽”被描绘为黄金之岛。"
    ),
    narrativeParagraphs: {
      en: [
        "On the island of Lanka, the king Ravana had ten heads—or, the elders say, ten kinds of knowledge always working at once. He wrote treatises on music, on medicine, and on the planets. He kept a flying chariot called Dandu Monara that could land on a flat stone the size of a courtyard.",
        "When Ravana saw Sita in the forest he carried her off in the chariot to his city of gold. Hanuman set fire to that city; Rama crossed the sea on a bridge of stones and killed Ravana in battle. The Indian story ends there. The Sri Lankan story keeps going: Ravana was burned, but his ten kinds of knowledge fell as ashes across the island and seeped into its plants and its musicians.",
        "Today guides on Sri Lanka point to flat boulders called Dandu Monara landing places, to caves where Ravana is said to have hidden Sita, to a kind of veena said to have been his. The country plays his role both ways. He is the villain of Rama, but he is also the king of Lanka, and a song or a verse traced to him is not necessarily refused.",
      ],
      zh: [
        "在楞伽岛上，国王罗波那有十个头——长老们说，那其实是十种知识同时在他脑中运转。他撰写音律、医药、星象方面的著作。他还有一具名叫“丹杜·摩纳罗”的飞天战车，能停在一块院落大小的平石之上。",
        "罗波那在林间见到悉多，便用飞天战车把她载回金城。哈努曼焚烧此城；罗摩跨海借石桥过岛，与罗波那决战，杀之。印度版本到此结束。斯里兰卡版本却继续：罗波那虽被火化，他那十种知识化作灰烬遍洒岛上，渗入草木与乐人之中。",
        "今天斯里兰卡的导游会指着平坦的巨石说那是“丹杜·摩纳罗”落脚处，指着山洞说那是当年罗波那藏匿悉多之地，指着一种维纳琴说那原是他所有。这个国家以两种方式扮演他的角色——他是罗摩故事中的恶徒，也是楞伽之王；溯源于他的一支曲、一段诗，斯里兰卡并不必然拒之。",
      ]
    },
    themes: [text("complex villain", "复杂之恶"), text("rival nation memory", "对立的民族记忆"), text("learning", "学问")],
    tags: [text("sinhalese", "僧伽罗"), text("ravana", "罗波那"), text("lanka", "楞伽"), text("dandu monara", "丹杜·摩纳罗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Ravana"
  },
  {
    id: "kuveni-vijaya",
    title: text("Kuveni and Prince Vijaya", "库维尼与维阇耶王子"),
    country: text("Sri Lanka", "斯里兰卡"),
    region: text("South Asia", "南亚"),
    culture: text("Sinhalese", "僧伽罗"),
    latitude: 7.75,
    longitude: 80.8333,
    category: "history",
    summary: text(
      "The Yakkha queen Kuveni spins on the beach as the exile-prince Vijaya lands; she helps him take her own kingdom, bears his children, and curses him when he sends her back to the forest for a foreign bride.",
      "夜叉女王库维尼在沙滩纺线时，流亡王子维阇耶登岛；她助他夺下自己的王国，为他生儿育女，却在他为娶外邦公主把她遣回山林时下了诅咒。"
    ),
    background: text(
      "The Mahavamsa chronicle places Vijaya's arrival in Sri Lanka around the fifth century BCE; Kuveni's tragedy frames the Sinhalese origin story.",
      "《大史》（Mahavamsa）将维阇耶登岛定于约公元前五世纪；库维尼的悲剧构成僧伽罗民族起源故事的另一面。"
    ),
    narrativeParagraphs: {
      en: [
        "Prince Vijaya, son of a king of northern India, was banished with seven hundred men for misdeeds and put on a ship. The ship drifted to the island of Lanka. As Vijaya stepped onto the beach he saw a woman spinning thread. She was Kuveni, queen of the Yakkha people of the forest. She offered him hospitality and then love.",
        "With her knowledge of paths and poisons, Vijaya overcame the Yakkha. He became king of Lanka. Kuveni bore him two children and, in some versions, took the title of queen. But the new kingdom needed a queen of royal Indian blood. Vijaya's ministers sent for a princess from the Pandya country, and when she arrived, Vijaya told Kuveni to take their children and leave.",
        "She climbed back into the forest and called down a curse: that no Sinhalese king would die in his own bed without paying for her tears. When she walked into the trees alone, the Yakkha killed her for having joined the stranger. The Mahavamsa says little, but the women of the village remember the spinner on the beach when the long history of the island grows heavy and ask whether a curse can still be answered.",
      ],
      zh: [
        "维阇耶是北印度某王之子，因品行不端被父王罚以七百名罪人流放出海。船漂到楞伽岛。维阇耶登岸时看见一位女子在纺纱——她便是林中夜叉族的女王库维尼。她款待他，继而与他相爱。",
        "凭她对林径与毒物的熟悉，维阇耶击败了夜叉族，成为楞伽之王。库维尼为他生下两个孩子，在某些版本里亦立为后。但新王国需要一位带印度王族血脉的王后。维阇耶的大臣派人前往潘地亚国迎回一位公主；公主一到，维阇耶便让库维尼带着孩子离开。",
        "她走回森林深处，向下一声诅咒：从此凡僧伽罗之王皆不得善终于卧榻，除非偿清她的泪。她独自走入林中之后，夜叉族因她投靠外乡人而将她杀死。《大史》着墨甚少，但每当岛屿的漫长历史显得沉重，村中女子便会想起那位海滩上纺纱的女王，问一问——一段诅咒，是否仍能被回应。",
      ]
    },
    themes: [text("indigenous queen", "原住女王"), text("political marriage", "政治婚姻"), text("curse", "诅咒")],
    tags: [text("sinhalese", "僧伽罗"), text("kuveni", "库维尼"), text("vijaya", "维阇耶"), text("mahavamsa", "大史")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kuveni"
  },
  {
    id: "heer-ranjha",
    title: text("Heer and Ranjha", "希尔与朗哈"),
    originalTitle: text("Heer Ranjha", "希尔朗哈"),
    country: text("Pakistan", "巴基斯坦"),
    region: text("South Asia", "南亚"),
    culture: text("Punjabi", "旁遮普"),
    latitude: 31.4504,
    longitude: 73.135,
    category: "epic",
    summary: text(
      "Ranjha the cowherd plays his flute by the Chenab; Heer the chief's daughter falls in love, defies her uncles' marriage plot, and the two lovers are poisoned the day they are finally given to each other.",
      "牧人朗哈在切那布河畔吹起牧笛；酋长之女希尔为之倾心，反抗叔伯安排的婚事；两人终于得以成婚的那天，他们被毒杀。"
    ),
    background: text(
      "Heer Ranjha, retold in Punjabi verse most famously by Waris Shah (1766), is one of the great tragic romances of the Indian subcontinent.",
      "《希尔与朗哈》以瓦里斯·沙（1766）的旁遮普文长诗最为著名，是南亚最伟大的悲情爱情诗之一。"
    ),
    narrativeParagraphs: {
      en: [
        "Ranjha was the youngest son of a chief on the Chenab and the favourite of his family. When his father died and his brothers took the land, he was sent away with only his flute. He walked across Punjab and came to the village of Jhang, where the chief Chuchak hired him to herd the family buffaloes. The chief's daughter Heer fell in love with him the first time she heard his flute by the river.",
        "Heer's uncle Kaido did not approve. He told her father, who married Heer off to another man, Saida Khera. Ranjha could not bear it. He became a jogi, smeared his face with ash, pierced his ears, and walked into the Khera house as a beggar. Heer recognised him at once. With the help of a fellow jogi they escaped together and tried to reach a city beyond the river.",
        "Both families pursued them. At last a panchayat agreed to the marriage. The day the wedding was finally set, Kaido poisoned Heer's sweet rice. She died, and Ranjha drank from the same plate. Waris Shah ends his long poem with a single line about the two graves. Across Punjab the lovers' names are still placed in songs, and Heer's voice is given to women who refuse a marriage their family has chosen for them.",
      ],
      zh: [
        "朗哈是切那布河畔一位酋长最小的儿子，自幼最得宠。父亲过世后兄长们瓜分土地，他只带着自己的笛子被赶出家门。他穿过整个旁遮普，来到江格村，村长楚查克雇他放家中的水牛。村长的女儿希尔第一次在河边听见他吹笛便倾心于他。",
        "希尔的叔父凯多反对。他告状给希尔的父亲，让她改嫁另一位男子塞达·凯赫拉。朗哈难以承受，他剃发成“瑜伽士”——抹脸以灰、刺耳为环——以乞讨者的身分走入凯赫拉家。希尔一眼认出他。借一位同道瑜伽士的帮助，二人一同出逃，想到河对岸的城里安身。",
        "两家联手追来。最终乡议会同意了二人的婚事。婚礼定下的那天，凯多在希尔的甜米饭中下了毒。她吃下后死去，朗哈从同一只盘子里也吃了下去。瓦里斯·沙的长诗最后只写一句两座坟的话。在整个旁遮普，这对情人的名字至今仍出现在歌中——希尔的嗓音被借给每一个不愿接受家中安排的婚事的女子。",
      ]
    },
    themes: [text("forbidden love", "禁恋"), text("family interference", "家族干预"), text("poison", "毒杀")],
    tags: [text("punjabi", "旁遮普"), text("heer", "希尔"), text("ranjha", "朗哈"), text("waris shah", "瓦里斯·沙")],
    sourceUrl: "https://en.wikipedia.org/wiki/Heer_Ranjha"
  },
  {
    id: "sassi-punnu",
    title: text("Sassi Crosses the Desert for Punnu", "萨西为蓬奴穿越大漠"),
    originalTitle: text("Sassui Punhun", "萨苏伊·蓬胡恩"),
    country: text("Pakistan", "巴基斯坦"),
    region: text("South Asia", "南亚"),
    culture: text("Sindhi", "信德"),
    latitude: 25.396,
    longitude: 68.3578,
    category: "folktale",
    summary: text(
      "When Punnu's family drugs him and carries him away on camel back, Sassi walks the Thar desert barefoot after him until the earth itself opens and shelters her.",
      "蓬奴被家族下药、绑上骆驼带走后，萨西赤足走入塔尔沙漠追他；最终大地为她开口将她收入怀中。"
    ),
    background: text(
      "Sassui Punhun is one of the seven heroines of Sindhi verse, immortalised by the Sufi poet Shah Abdul Latif Bhittai in the eighteenth century.",
      "《萨苏伊与蓬胡恩》是信德诗歌“七位女主”之一，被十八世纪苏非诗人沙阿·阿卜杜尔·拉提夫·布希塔伊永远铭刻。"
    ),
    narrativeParagraphs: {
      en: [
        "Sassi was the daughter of a Bhambore washerman but, in some songs, born from a king of Bhambore who had foretold her bad luck and floated her down the river. She grew up beautiful. The merchant prince Punnu of Kech in Balochistan visited Bhambore, fell in love with her, and married her in a small ceremony by the river.",
        "Punnu's father in Kech refused to accept a washerman's daughter. He sent Punnu's brothers, who came to Bhambore, drugged Punnu at the wedding feast, tied him to a camel, and rode home through the Thar. Sassi woke at dawn and found her husband gone. She did not wait. She ran into the desert barefoot in the clothes she was wearing.",
        "She walked for days. The sand burned, the wind drank her water, the shepherd from whom she begged shade tried to take her. Sassi asked the earth to hide her, and the earth opened a small hill and closed over her. When Punnu, having escaped his brothers' camels, ran back across the desert and reached the hill, he could see only her dupatta caught in a thornbush. He fell to his knees, called to the earth, and was taken in beside her. Two low mounds in the Thar are still pointed out by the women who sing Shah Latif's verses.",
      ],
      zh: [
        "萨西是邦博尔一位洗衣匠的女儿——某些歌中说，她其实是邦博尔国王之女，因被占卜出有恶运而被放入河中漂流。她长大后美貌出众。俾路支基奇的商人王子蓬奴来邦博尔，与她一见钟情，二人在河边以小礼成婚。",
        "蓬奴在基奇的父亲不肯接受洗衣匠之女。他让蓬奴的兄弟们到邦博尔赴宴，在席间给蓬奴下药，把他绑上骆驼，连夜穿过塔尔沙漠把他带回家。萨西黎明醒来，发现丈夫不见，没作犹豫，赤足穿着身上的衣服奔入沙漠。",
        "她走了好几天。沙烫脚，风夺水，向她讨阴凉的牧人企图非礼。萨西恳求大地把她藏起来，大地裂出一座小丘把她合拢起来。蓬奴挣脱兄弟的骆驼，奔回沙漠到达那座小丘时，只看见她的纱巾缠在荆棘上。他跪在沙上，呼唤大地，与她一同被收入沙中。塔尔沙漠里至今仍有两座低矮土丘——传唱沙阿·拉提夫诗句的妇女会向后人指出它们。",
      ]
    },
    themes: [text("desert journey", "沙漠之行"), text("forbidden marriage", "禁忌之婚"), text("earth shelter", "大地相收")],
    tags: [text("sindhi", "信德"), text("sassi", "萨西"), text("punnu", "蓬奴"), text("shah latif", "沙阿·拉提夫")],
    sourceUrl: "https://en.wikipedia.org/wiki/Sassui_Punhun"
  },
  {
    id: "behula-lakhindar",
    title: text("Behula Sails with Her Husband", "贝胡拉与亡夫共渡"),
    originalTitle: text("Manasamangal", "摩诃娑曼伽尔"),
    country: text("Bangladesh", "孟加拉国"),
    region: text("South Asia", "南亚"),
    culture: text("Bengali", "孟加拉"),
    latitude: 23.685,
    longitude: 90.3563,
    category: "epic",
    summary: text(
      "When the snake-goddess Manasa kills Lakhindar on his wedding night, his bride Behula sails downriver on a raft with the corpse for six months until she can dance him back to life in the courts of heaven.",
      "蛇神摩纳萨在新婚之夜杀死拉欣达尔后，新娘贝胡拉与尸首同坐一筏沿河漂流半年，最终在天庭中以舞将他唤回人间。"
    ),
    background: text(
      "The Manasamangal poems of Bengal celebrate Behula's fidelity and the negotiation between humans and Manasa, the goddess of snakes.",
      "孟加拉的《摩诃娑曼伽尔》诗篇歌颂贝胡拉的坚贞，以及凡人与蛇神摩纳萨之间的协商。"
    ),
    narrativeParagraphs: {
      en: [
        "Chand Sadagar the merchant prince refused to worship Manasa, goddess of snakes. She killed six of his sons. He still refused. His seventh son Lakhindar was to marry Behula, the most pious girl of the river country. Chand built an iron room sealed shut to keep snakes out on the wedding night, but Manasa found a hairline crack and sent a thin snake in. Lakhindar died as the candles burned.",
        "Custom said the body should be cremated. Behula refused. She put Lakhindar on a raft of plantain leaves, climbed on with him, and let the river take her. For six months she floated past villages and crocodiles. She did not eat or sleep deeply. When the raft drifted into the courts of the gods, Behula stood up and danced before them.",
        "Indra and Vayu and Varuna watched, and they agreed to revive Lakhindar—on condition that his father, Chand Sadagar, finally worshipped Manasa. Behula returned home with her husband alive. Chand offered Manasa half an offering, with his left hand. The goddess accepted. The Bengali say the half-offering shows how mercy still beats stubbornness, and the song of Behula is sung at weddings to ask that no daughter ever need to take that boat ride.",
      ],
      zh: [
        "商人王子昌德·萨达加尔不肯敬奉蛇神摩纳萨。她接连杀死他六个儿子，他依旧不肯。他第七子拉欣达尔将娶河乡最虔敬的女子贝胡拉。昌德为新婚之夜筑了一座密封铁屋以防蛇入。摩纳萨在墙缝间找出一道发丝粗的缝，让一条细蛇钻进去。烛火摇曳中拉欣达尔死去。",
        "习俗本应将尸首火化。贝胡拉不肯。她用芭蕉叶编出一筏，把拉欣达尔放上去，自己也坐上去，听任河水带她漂走。半年间她漂过村庄与鳄群，不进食、不深眠。最终竹筏漂到诸神的庭院，贝胡拉站起来，在诸神面前起舞。",
        "因陀罗、伐由、伐楼那观舞动容，约定复活拉欣达尔——前提是昌德·萨达加尔终于敬奉摩纳萨。贝胡拉带丈夫安然归家。昌德用左手献上半份祭品给摩纳萨，蛇神接受了。孟加拉人说，那半份祭品也证明慈悲仍可胜过执拗；贝胡拉的歌至今仍在婚礼上传唱，祈愿没有女儿再需要乘那条筏。",
      ]
    },
    themes: [text("widow's journey", "遗孀之行"), text("dance before gods", "在神前起舞"), text("reluctant worship", "半心之敬")],
    tags: [text("bengali", "孟加拉"), text("behula", "贝胡拉"), text("manasa", "摩纳萨"), text("manasamangal", "摩诃娑曼伽尔")],
    sourceUrl: "https://en.wikipedia.org/wiki/Behula"
  },
  {
    id: "manasa-temple",
    title: text("Manasa Demands a Temple", "摩纳萨索一座庙"),
    country: text("Bangladesh", "孟加拉国"),
    region: text("South Asia", "南亚"),
    culture: text("Bengali", "孟加拉"),
    latitude: 23.685,
    longitude: 90.3563,
    category: "religion",
    summary: text(
      "Born of Shiva's perspiration on a snake, Manasa rises into a difficult goddess; she insists her father acknowledge her, and her worshippers along the rivers keep her shrines wherever vipers may strike.",
      "由湿婆的汗水滴在蛇身上孕生的摩纳萨成长为难取悦的女神；她坚要父亲认下她，沿河的信众在毒蛇出没之处为她立祠。"
    ),
    background: text(
      "Manasa is the Bengali snake-goddess, worshipped wherever snakebite is a danger, especially during the monsoon.",
      "摩纳萨是孟加拉的蛇神，凡有蛇咬危险之处皆受人尊奉，尤其在雨季。"
    ),
    narrativeParagraphs: {
      en: [
        "Once Shiva sat under a tree to meditate and a snake coiled around his feet. He sweated in the heat. A drop of his sweat fell onto the snake. From that drop a girl was born, with a snake-hood spreading around her head. Shiva called her Manasa and gave her a basket of snake-eggs as her dowry.",
        "She grew up shaped by his power and her loneliness. Other gods married, took disciples, lived in great cities. Manasa walked alone through the marshes of Bengal, where the snakes she had hatched grew. She asked her father to acknowledge her among his children. He agreed, but his wife Parvati refused to look at her. Manasa, hurt, set out to demand worship on her own.",
        "She did not want gold. She wanted the people to remember her at the river's edge where their feet might find a viper. Wherever a household offered her a small clay shrine and milk during the monsoon, no snake would strike. Where households refused, snakes came. The Bengali say Manasa is not a soft goddess, but she does not break her word: build her a corner of your home, and the snakes of the marsh will go around you.",
      ],
      zh: [
        "湿婆在树下入定，有一条蛇盘住他的脚。他在炎热中出汗，一滴汗水落在蛇身上。从那滴汗中诞生了一个女孩，头顶张开蛇冠。湿婆替她取名摩纳萨，作为陪嫁送了她一篮蛇蛋。",
        "她在他的法力与她自己的孤独之中长大。其他神祇结亲、收徒、住在大城里。摩纳萨独自走过孟加拉沼泽——她孵化的蛇都在那里长大。她请求父亲在众子嗣中正式认下她。父亲答应，但其妻帕尔瓦蒂不肯正眼看她。摩纳萨受伤之下，决意自己去要敬奉。",
        "她不要黄金。她要人们在河边——脚下可能踩到毒蛇的地方——记得她。凡是有人在雨季为她设一小座泥祠并献奶，蛇便不咬人；不肯设祠之家，蛇便光顾。孟加拉人说，摩纳萨不是温柔的女神，但她信守诺言：在自家屋角为她留一处，沼泽里的蛇便绕着你走。",
      ]
    },
    themes: [text("unwanted daughter", "不被认下的女儿"), text("snake danger", "蛇之险"), text("household altar", "家祠")],
    tags: [text("bengali", "孟加拉"), text("manasa", "摩纳萨"), text("monsoon", "雨季"), text("snake goddess", "蛇神")],
    sourceUrl: "https://en.wikipedia.org/wiki/Manasa"
  },
  {
    id: "machhindranath",
    title: text("Machhindranath Brings the Rains", "马琴德拉纳特祈雨"),
    country: text("Nepal", "尼泊尔"),
    region: text("South Asia", "南亚"),
    culture: text("Newar", "内瓦尔"),
    latitude: 27.6588,
    longitude: 85.3247,
    category: "religion",
    summary: text(
      "When a twelve-year drought breaks the Kathmandu valley, the Newar bring the rain-bringing yogi Machhindranath up from Kamarupa; his chariot festival each spring is the valley's plea for rain again.",
      "加德满都谷地遭遇十二年大旱时，内瓦尔人把祈雨之圣“马琴德拉纳特”从迦摩缕波请来；春日的“拉车节”至今仍是谷地一年一度的祈雨。"
    ),
    background: text(
      "The Rato Machhindranath chariot festival, held annually in Patan, is the largest in Nepal; the rain-yogi is identified with both Avalokiteśvara and the natha sage Matsyendra.",
      "“红色马琴德拉纳特”拉车节每年在帕坦举行，是尼泊尔最大的节庆；这位祈雨圣者既被视为观自在菩萨，也被视作纳塔派圣者“摩剎延陀罗”。"
    ),
    narrativeParagraphs: {
      en: [
        "For twelve years no rain fell in the Kathmandu valley. The wells went dry; the rice would not start. King Narendradev called the priests, and the priests told him that Machhindranath, a yogi who held the clouds in his pot, had withdrawn far away into Kamarupa in Assam. They prepared a chariot and sent the king to bring him back.",
        "Machhindranath agreed to come on one condition: he would not be carried, he would ride in a tall wooden chariot pulled by the valley's children and farmers. The king built the chariot from a single sal tree, painted it red, set the yogi inside, and drew it up over the mountain passes. The first day the chariot moved, the first cloud appeared. By the time it reached Patan, the monsoon had returned to the valley.",
        "Each spring since, the same chariot is rebuilt and the same yogi is taken from his temple. Newar farmers and craftsmen pull the long ropes through the streets of Patan for weeks. The festival ends when the priest lifts the bhoto vest in front of the chariot, the queen confirms it is the right one, and Machhindranath is wheeled back to his shrine. The valley reads the clouds the rest of the summer and prays the yogi stays content.",
      ],
      zh: [
        "加德满都谷地连续十二年滴雨未下。井干涸，稻田无法起苗。国王纳伦德拉德夫召集祭司，祭司告诉他：把云装在钵中的祈雨圣者马琴德拉纳特已远遁阿萨姆的迦摩缕波。他们准备战车，让国王亲去把他请回。",
        "马琴德拉纳特答应回来，但只有一个条件：他不愿被人抬着，要坐在一辆高大的木车上，由谷地的孩子和农人拉车回家。国王用一棵婆罗双树造出整辆车，漆成红色，把圣者请上车内，越山而归。车一启动，第一片云便升起；车到帕坦时，雨季也回到谷地。",
        "自此每年春日，同一辆车被重新拼合，同一位圣者从他的庙中被请出。内瓦尔的农人与匠人在帕坦街上拉着长绳前行数周。节庆终结之日，祭司在车前举起“博托”短上衣，由女王确认那件衣是“对的”，马琴德拉纳特便被推回神龛。夏日之中，谷地继续看云，并祈愿圣者一直满意。",
      ]
    },
    themes: [text("drought relief", "祈雨"), text("chariot festival", "拉车节"), text("foreign saint", "外乡圣者")],
    tags: [text("newar", "内瓦尔"), text("machhindranath", "马琴德拉纳特"), text("patan", "帕坦"), text("rain", "雨")],
    sourceUrl: "https://en.wikipedia.org/wiki/Rato_Machindranath"
  },
  {
    id: "drukpa-kunley",
    title: text("Drukpa Kunley the Divine Madman", "神圣狂者楚帕·昆莱"),
    originalTitle: text("'Brug pa kun legs", "楚帕·昆莱"),
    country: text("Bhutan", "不丹"),
    region: text("South Asia", "南亚"),
    culture: text("Bhutanese", "不丹"),
    latitude: 27.5904,
    longitude: 89.873,
    category: "folktale",
    summary: text(
      "Wandering through fifteenth-century Bhutan with a small dog and an even less polite phallus, the saint Drukpa Kunley scandalises the pious and subdues demons that priests could not touch.",
      "十五世纪在不丹四处游历的圣者楚帕·昆莱，带着小狗和更不讲礼的“慧杵”，他冒犯虔敬者，却能降伏祭司奈何不得的妖魔。"
    ),
    background: text(
      "Drukpa Kunley (1455–1529) is the patron saint of Bhutan, especially associated with Chimi Lhakhang temple and the fertility blessings of the phallus.",
      "楚帕·昆莱（1455–1529）是不丹的守护圣者，与“奇米拉康”寺及阳具求子祝福仪式紧密相关。"
    ),
    narrativeParagraphs: {
      en: [
        "Drukpa Kunley left his monastery early, telling his teacher that he would teach the dharma to people who could not be reached by sutras. He wore mismatched robes, took only a small dog with him, and carried a wooden phallus he called his Thunderbolt of Flaming Wisdom. He drank when he was offered drink. He sang verses about everything that he saw.",
        "He arrived at the village of Chimi where a demoness had been killing travellers in the valley. Priests had chanted and burned incense for years. Drukpa Kunley dropped his trousers, swung his thunderbolt, and chased the demoness across the rice fields and into a rock, which he sealed with the print of his backside. He built a small stupa over the rock; the temple of Chimi Lhakhang grew up around it.",
        "He scandalised abbots and seduced housewives and blessed children. The Bhutanese decided that he understood a level of the dharma the polite teachers had skipped. Today couples who cannot conceive walk to Chimi Lhakhang and are tapped on the head with a wooden phallus, the saint's old joke still pulling families together. The painted phalluses on Bhutanese walls are a record of his passing.",
      ],
      zh: [
        "楚帕·昆莱很早便离开寺院，他对师父说，他要去把法教传给那些经卷触及不到的人。他穿不成套的僧袍，只带着一只小狗，腰间别一根木雕阳具，自称“燃慧之金刚杵”。有人请他饮酒他便饮，凡所见之事他都即兴成歌。",
        "他来到奇米一带，村中有女魔多年杀害旅人；祭司们诵经焚香也未能制止。楚帕·昆莱径直放下裤子，挥起金刚杵，一路追着女魔过稻田，把她追入一块岩石，又用自己屁股的印记把石头封住。他在岩上立起小塔——后来的奇米拉康寺就在那座塔周围长成。",
        "他冒犯了寺院住持，与农家妇人调笑，又给孩子们祝福。不丹人渐渐相信，他懂得礼貌的老师跳过的那一层法。今天不孕的夫妇前来奇米拉康，让寺中以木雕“慧杵”轻点头顶——这位圣者的老玩笑仍在把一个个家庭拉近。今日不丹墙上的彩绘阳具，则是他四处游历留下的踪迹。",
      ]
    },
    themes: [text("divine madman", "神圣狂者"), text("fertility", "生殖"), text("unconventional saint", "非常理之圣")],
    tags: [text("bhutanese", "不丹"), text("drukpa kunley", "楚帕·昆莱"), text("chimi lhakhang", "奇米拉康"), text("phallus", "阳具")],
    sourceUrl: "https://en.wikipedia.org/wiki/Drukpa_Kunley"
  },
  {
    id: "yeti-himalayas",
    title: text("The Yeti of the High Snows", "雪线之上的雪人"),
    country: text("Nepal", "尼泊尔"),
    region: text("South Asia", "南亚"),
    culture: text("Sherpa", "夏尔巴"),
    latitude: 27.9881,
    longitude: 86.925,
    category: "creature",
    summary: text(
      "On the highest passes of the Himalaya, Sherpas tell of a shaggy, upright creature whose tracks come down with the snow and whose presence is felt long before any climber sees it.",
      "在喜马拉雅最高的山口，夏尔巴人讲述一种多毛而直立的生灵，他的脚印随雪而下，他的存在远在登山者看见之前就能被感知。"
    ),
    background: text(
      "Yeti tales are part of Sherpa and Tibetan high-mountain tradition; they are deeply enmeshed with monastic teachings about respect for the mountain.",
      "雪人故事是夏尔巴与藏族高山传统的一部分，与寺院“敬山”之教密切相关。"
    ),
    narrativeParagraphs: {
      en: [
        "Sherpa elders distinguish three kinds of yeti: dzu-teh, the cattle-killer that lives lower down; meh-teh, the man-sized one of the high cliffs; and the smallest, the chu-teh, that walks at night through the campsites. The biggest is the rarest; the smallest is the one travellers actually meet.",
        "A yeti does not attack a respectful climber. The danger comes from disturbing a yeti, or worse, from a yeti hearing its own name shouted on the mountain. Old guides quietly say, 'There is no yeti here,' when the wind smells strange, and they refuse to use the word in camp. Bones and matted fur shown in monasteries are explained as relics of yetis that died of grief after a mountain was disrespected.",
        "Climbers of foreign nations have argued about whether the tracks are bears, langurs, or something else. The Sherpa do not need the debate. Their teaching is simpler: a mountain is a body, and the yeti is part of how it watches. If you climb softly, ask permission at the monastery below, and don't sleep where the avalanches roar, you will pass safely. If you do not, the mountain has options older than you.",
      ],
      zh: [
        "夏尔巴长老把雪人分为三类：低海拔的“竹-泰”，专杀牛群；高崖间的“米-泰”，与成年男子等身；以及夜里在营地间走过的最小一种“朱-泰”。最大的最稀有，最小的反而是旅人最常遇见的。",
        "雪人不会主动袭击恭敬的攀登者。险情来自惊扰雪人——更糟的是在山上大声喊出他的名字。老向导在风向带怪味时会轻声说一句“此处无雪人”，并禁止队员在营地里使用那个词。寺院里展示的骸骨与缠绕的毛发，被解释为某些雪人因山被冒犯而忧愤致死后留下的圣物。",
        "外国登山者反复争论那些脚印究竟是熊、长尾叶猴还是别的。夏尔巴人不需要这种争论。他们的教诲更朴素：山是一具身体，雪人是它注视世界的一部分。若你轻声攀登，先到山下寺院请允，且不在雪崩咆哮处过夜，你便能平安通过；若你不肯，山自有比你古老得多的办法。",
      ]
    },
    themes: [text("mountain spirit", "山灵"), text("respect", "敬山"), text("hidden creature", "隐生之兽")],
    tags: [text("sherpa", "夏尔巴"), text("yeti", "雪人"), text("himalaya", "喜马拉雅"), text("dzu-teh", "竹-泰")],
    sourceUrl: "https://en.wikipedia.org/wiki/Yeti"
  },
  {
    id: "antarah-abla",
    title: text("Antarah Wins Abla", "安塔拉赢得阿芭拉"),
    country: text("Saudi Arabia", "沙特阿拉伯"),
    region: text("West Asia", "西亚"),
    culture: text("Arab", "阿拉伯"),
    latitude: 25.2867,
    longitude: 49.1116,
    category: "epic",
    summary: text(
      "Born to an Arab father and an Ethiopian slave woman, Antarah ibn Shaddad wins his freedom on the battlefield, the love of his cousin Abla, and a place among the seven pre-Islamic Mu'allaqat poets.",
      "生于阿拉伯父亲与一位埃塞俄比亚女奴之间的安塔拉·伊本·沙达德，凭战场上的奋勇赢得自由、堂妹阿芭拉的爱情，以及前伊斯兰时期“七悬诗”诗人的一席之地。"
    ),
    background: text(
      "Antarah ibn Shaddad (sixth century CE) is one of the seven authors of the Mu'allaqat hung at the Kaaba, and the hero of the long Sirat Antar romance.",
      "安塔拉·伊本·沙达德（六世纪）是悬挂于天房的“七悬诗”作者之一，也是长篇骑士传奇《安塔尔传》的主人公。"
    ),
    narrativeParagraphs: {
      en: [
        "Antarah's mother was an Ethiopian slave; his father, Shaddad of the tribe of Banu Abs, would not acknowledge him as a son. He was set to herd camels and was given no share of the family's honour. He grew up tall, dark, and fierce, and loved his cousin Abla, who returned his love.",
        "When the Banu Abs were raided, Shaddad called every warrior to defend the camp. Antarah refused. 'A slave cannot fight,' he said, 'a free man can.' His father, watching the enemy near, shouted the word: 'Karr, ya Antarah!'—'Charge, Antarah!'—and named him son. Antarah charged. He turned the raid, killed many, and rode back covered in dust and his own blood.",
        "Even so, Abla's father would not give her hand without an impossible bride-price: a thousand wonder-camels of a particular breed, found only deep in a hostile country. Antarah rode out, fought several wars, returned with the camels, and married Abla. He went on writing the long poems that hang at the Kaaba even now. The Arabs say his life is the proof that a man's tongue and arm can outweigh his birth.",
      ],
      zh: [
        "安塔拉的母亲是一位埃塞俄比亚女奴；他的父亲——“阿布斯”部落的沙达德——拒不承认他为儿。他被派去放骆驼，家族的荣誉与他无关。他长得高大黝黑、勇悍，与堂妹阿芭拉两情相悦。",
        "阿布斯部落遭遇袭击之夜，沙达德召集所有战士守营。安塔拉拒绝出战：“奴隶不能战，自由人才能。”眼看敌军逼近，父亲终于喊出那个词：“Karr, ya Antarah！”——“安塔拉，冲锋！”——同时承认他是儿子。安塔拉策马冲入敌阵，扭转战局，斩敌甚众，归来时满身尘血。",
        "即便如此，阿芭拉的父亲仍开出不可能的彩礼：一千头某一稀有品种的奇骆驼，只能在敌国深处寻到。安塔拉再次出战数役，带回那些骆驼，娶得阿芭拉。他随后继续写作那些至今仍悬于天房的长诗。阿拉伯人说，他的一生证明，一个人的舌与臂，可以盖过他的出身。",
      ]
    },
    themes: [text("slave to noble", "自奴及贵"), text("forbidden bride", "禁婚"), text("poet warrior", "诗剑兼修")],
    tags: [text("arab", "阿拉伯"), text("antarah", "安塔拉"), text("abla", "阿芭拉"), text("muallaqat", "悬诗")],
    sourceUrl: "https://en.wikipedia.org/wiki/Antarah_ibn_Shaddad"
  },
  {
    id: "phoenician-adonis",
    title: text("Adonis and the Anemone", "阿多尼斯与银莲花"),
    country: text("Lebanon", "黎巴嫩"),
    region: text("West Asia", "西亚"),
    culture: text("Phoenician", "腓尼基"),
    latitude: 34.1083,
    longitude: 35.65,
    category: "myth",
    summary: text(
      "Born of a tree, loved by both Astarte and Persephone, the beautiful Phoenician youth Adonis is killed by a wild boar; where his blood touches the riverside, anemones bloom each spring.",
      "由一棵树中诞生、同时被阿斯塔特与波斯福涅所爱的腓尼基俊美少年阿多尼斯被野猪所杀；他血落之处，每年春日开出银莲花。"
    ),
    background: text(
      "Adonis (from Adon, 'Lord') was a Phoenician vegetation god whose cult, centred on Byblos, spread across the Greek world and is reflected in the red colour of the Nahr Ibrahim river each spring.",
      "阿多尼斯（自闪语 Adon，“主”）是腓尼基的植物神，崇拜中心在比布鲁斯，后传遍希腊世界；他的祭仪与每年春天纳赫尔·易卜拉欣河变红的现象密切相关。"
    ),
    narrativeParagraphs: {
      en: [
        "Adonis was born from the bark of a myrrh tree on Mount Lebanon. The goddess Astarte and the underworld queen Persephone both took him in. They argued about who would keep him, until Zeus decreed that he would live a third of the year with each goddess, and a third for himself.",
        "Astarte's third was the spring on the mountain. Every year Adonis came up to her with his hunting dogs. A wild boar—either Ares' jealousy or simply the way the world is—gored him in the thigh. He died in Astarte's arms by the river that runs down to the sea at Byblos. His blood reddened the water.",
        "Each spring, the Lebanese say, the river still runs red with the silt of his death, and the red anemones of the slopes bloom on top of his body. Women of Byblos planted small gardens of fast-growing wheat in pots to celebrate his return; the gardens died as quickly as he had. The lesson, the Phoenicians said, was not to mourn the death of beauty too long, because the river will be back next spring.",
      ],
      zh: [
        "阿多尼斯诞生于黎巴嫩山一棵没药树的树皮中。女神阿斯塔特与冥后波斯福涅都把他收下，二位女神为他究竟该归谁而争。最终宙斯裁定：他一年中三分之一与阿斯塔特同处，三分之一与波斯福涅同处，余下三分之一自度。",
        "阿斯塔特那一份在山间的春日。每年春日他都带着猎犬上山去见她。一头野猪——也许是战神阿瑞斯的嫉妒，也许只是世道如此——撕开了他的大腿。他在阿斯塔特怀中，于流向比布鲁斯入海的河边断气。他的血把河水染成红色。",
        "黎巴嫩人说，每年春日那条河仍因他死亡的泥沙而变红，山坡上的红色银莲花便在他身躯之上开放。比布鲁斯的妇女把发芽极快的麦种植入小盆，以庆祝他归来；麦苗速生速枯，正如他的命运。腓尼基人留下的训诫是：美之逝去不要哀悼太久，因为来年春天那条河会再回来。",
      ]
    },
    themes: [text("vegetation god", "植物神"), text("dying and rising", "死而复生"), text("spring ritual", "春祭")],
    tags: [text("phoenician", "腓尼基"), text("adonis", "阿多尼斯"), text("astarte", "阿斯塔特"), text("byblos", "比布鲁斯")],
    sourceUrl: "https://en.wikipedia.org/wiki/Adonis"
  },
  {
    id: "baal-yam",
    title: text("Baal Defeats Yam the Sea", "巴力击败海神亚姆"),
    originalTitle: text("Baal Cycle", "巴力诗系"),
    country: text("Syria", "叙利亚"),
    region: text("West Asia", "西亚"),
    culture: text("Ugaritic", "乌加里特"),
    latitude: 35.6028,
    longitude: 35.7822,
    category: "myth",
    summary: text(
      "On the Ugaritic coast, the storm-god Baal fights the chaotic sea Yam with two clubs forged by Kothar-wa-Khasis and earns his right to a cedar palace on Mount Saphon.",
      "在乌加里特海岸，风暴神巴力以神匠科塔尔-瓦-哈西斯打造的两根棍棒击败混沌之海亚姆，于是赢得在“萨丰山”上建香柏宫殿之权。"
    ),
    background: text(
      "The Ugaritic Baal Cycle (c. fourteenth century BCE) is preserved on tablets from Ras Shamra in modern Syria and shaped Levantine and biblical imagery.",
      "乌加里特《巴力诗系》（约公元前 14 世纪）保存在现今叙利亚拉斯沙姆拉出土的泥板上，对黎凡特与圣经意象产生深远影响。"
    ),
    narrativeParagraphs: {
      en: [
        "Yam, lord of the sea, demanded to rule the gods. He sent messengers to El the patriarch and said the storm-god Baal must be handed over as his servant. El bent in fear. Baal would not bend. He turned to the artisan-god Kothar-wa-Khasis and asked for weapons.",
        "Kothar-wa-Khasis forged two clubs from light. The first, Yagrush ('Driver'), Baal struck against Yam's shoulder—the sea raged and stood. The second, Ayyamur ('Chaser'), Baal struck against Yam's head—the sea collapsed back into its bed. Yam was broken. Baal hung his weapons in the palace and was acknowledged as king of the gods.",
        "He then asked his sister Anat and the master craftsman to build him a cedar-and-cypress palace on Mount Saphon. When the palace was complete he opened a window in it, and from that window the first thunderstorm rolled down to the coast. The Phoenicians who came after kept Baal's window in mind whenever the sea rose; the prophets of Israel borrowed his thunder for their own god.",
      ],
      zh: [
        "海主亚姆要求统治诸神。他派使者到家长神埃尔面前，索要将风暴神巴力交出为奴。埃尔吓得屈服。巴力却不肯屈服。他转向工匠之神科塔尔-瓦-哈西斯，要他造兵器。",
        "科塔尔-瓦-哈西斯用光打造了两根神棒：第一根名“雅格鲁什”（“驱者”），巴力一击打在亚姆肩上，海水怒涌却被定住；第二根名“阿亚姆尔”（“追者”），他一击打在亚姆头上，大海塌回它的河床。亚姆破败。巴力把武器挂在宫中，被众神公认为王。",
        "他接着请求妹妹阿娜特与那位工匠为他在萨丰山上建一座香柏与丝柏木的宫殿。宫殿落成后，他在墙上凿开一扇窗——第一场雷雨便从那扇窗中滚下海岸。后来的腓尼基人每逢海水暴涨都记得巴力之窗；以色列的先知们也把他的雷电借给了自己崇拜的那位神。",
      ]
    },
    themes: [text("chaos defeated", "制服混沌"), text("storm god", "风暴神"), text("palace of cedar", "香柏宫殿")],
    tags: [text("ugaritic", "乌加里特"), text("baal", "巴力"), text("yam", "亚姆"), text("saphon", "萨丰山")],
    sourceUrl: "https://en.wikipedia.org/wiki/Baal_Cycle"
  },
  {
    id: "kumarbi-ullikummi",
    title: text("Kumarbi and the Song of Ullikummi", "库马尔比与乌利库米之歌"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Hittite", "赫梯"),
    latitude: 40.0167,
    longitude: 34.6167,
    category: "myth",
    summary: text(
      "Robbed of his throne by the storm-god Teshub, the Hurrian-Hittite god Kumarbi impregnates a great rock; the diorite child Ullikummi rises out of the sea on the shoulder of Ubelluri, threatening to push the sky god down.",
      "被风暴神特舒卜夺去王位的胡里-赫梯神库马尔比，使一块巨岩怀孕；闪长岩之子乌利库米伫立于擎天巨人乌贝鲁里肩上自海中升起，威胁要把天神推下。"
    ),
    background: text(
      "The Hurrian Kumarbi cycle, preserved on Hittite tablets from Hattusa, is a key Anatolian succession myth that influenced Greek theogony.",
      "胡里语《库马尔比诗系》保存于哈图沙出土的赫梯泥板上，是安纳托利亚重要的“神位继承”神话，对希腊神谱有深远影响。"
    ),
    narrativeParagraphs: {
      en: [
        "In the beginning the sky-god Anu was king. Kumarbi bit off Anu's manhood and swallowed it; from that act several gods were born inside him, including Teshub the storm. Teshub fought his way out, defeated Kumarbi, and took the throne. Kumarbi did not accept defeat. He walked far down the river and lay with a great rock.",
        "From the rock was born a child of diorite, hard and unfeeling. Kumarbi gave him a name—Ullikummi—and placed him on the right shoulder of the giant Ubelluri who stands in the sea holding up the earth. Ullikummi grew at terrible speed, until his head touched the gates of the sky-city. Teshub looked down, panicked, and called for the artisan-god Ea.",
        "Ea remembered an old saw, used in the beginning to cut earth from heaven. He took it down to the sea and sawed Ullikummi off at the ankles. The diorite child collapsed back into the water. Kumarbi watched from the riverbank in silence. The Hittites kept all three episodes in the same song, because they thought the sky's authority always needed to be defended, and would always be challenged again.",
      ],
      zh: [
        "起初，天神阿努为王。库马尔比咬下阿努的下体并吞下；几位神祇——包括风暴神特舒卜——因此在他体内诞生。特舒卜冲出他的躯体，击败他，取得王位。库马尔比不肯认输。他独自走至大河深处，与一块巨岩交合。",
        "巨岩孕出一个闪长岩之子，硬而无情。库马尔比为他取名“乌利库米”，把他立在擎天巨人乌贝鲁里的右肩上——乌贝鲁里站在海中托住大地。乌利库米以可怕的速度长大，头颅最终触及天城之门。特舒卜俯瞰，惊慌万分，呼唤工匠神埃阿。",
        "埃阿想起远古曾有一把锯，是当年把大地从天上裁开时用过的旧器。他把那锯抬到海上，从脚踝处把乌利库米锯下。闪长岩之子轰然倒回水中。库马尔比在河岸默然旁观。赫梯人把这三段都唱进同一首歌里——他们认为，天界的权威总需要被守护，也总会再次被挑战。",
      ]
    },
    themes: [text("succession myth", "神位更迭"), text("stone giant", "石之巨子"), text("ancient saw", "古时之锯")],
    tags: [text("hittite", "赫梯"), text("kumarbi", "库马尔比"), text("teshub", "特舒卜"), text("ullikummi", "乌利库米")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kumarbi"
  },
  {
    id: "mem-u-zin",
    title: text("Mem and Zin", "梅姆与津"),
    originalTitle: text("Mem û Zîn", "梅姆与津"),
    country: text("Turkey", "土耳其"),
    region: text("West Asia", "西亚"),
    culture: text("Kurdish", "库尔德"),
    latitude: 37.45,
    longitude: 42.4833,
    category: "epic",
    summary: text(
      "On the borders of Botan, the Kurdish lovers Mem and Zin meet in a dream, are kept apart by the slanderer Bekir, and die holding hands in a prison cell; their grave grows a thorn-bush that no flower can cover.",
      "在博坦边境，库尔德情人梅姆与津梦中相会；他们被诽谤者贝基尔阻隔，最终在牢中相握而亡；坟上长出一丛荆棘，任何花都遮不住。"
    ),
    background: text(
      "Ahmedi Khani's seventeenth-century Kurdish epic Mem û Zîn is the canonical telling of a story long sung across Kurdistan.",
      "艾哈迈迪·哈尼于十七世纪写就的库尔德语史诗《梅姆与津》，是这则歌谣在库尔德斯坦地区的经典版本。"
    ),
    narrativeParagraphs: {
      en: [
        "On the night of Newroz the spring festival, Mem the young noble of Botan slept and dreamed of a girl whose face was the morning star. The same night the chief's daughter Zin dreamed of a boy with the eyes of the river. They woke and described their dreams; the next year they met at the Newroz fire and recognised each other in a moment.",
        "An envious courtier called Bekir whispered to Zin's brother that Mem was unsuitable. The brother imprisoned Mem in a cold cell of the citadel. Zin came to him each evening with food hidden under her cloak. They sang to each other through the bars without ever quite escaping. After many months Mem died of cold and grief, and Zin lay down on his chest and died with him.",
        "They were buried together. The next year a thorn-bush grew out of the grave, sharper than any in the country. Bekir, full of guilt, was buried near them, and from his grave grew a thorn-bush too—but it bent away from theirs and could not interfere. Across Kurdistan the story is sung at weddings to remind the young that love can survive even prison, and at gatherings of mourners to remind everyone of those who pulled the lovers apart.",
      ],
      zh: [
        "诺鲁兹春节之夜，博坦的年轻贵族梅姆在梦中见到一位脸如晨星的女子。同一晚，部落酋长的女儿津梦见一位眼如河水的少年。次年诺鲁兹篝火旁，他们一见之下立刻相认。",
        "嫉妒的廷臣贝基尔在津兄长耳边进谗，说梅姆不配。津兄长把梅姆囚于城堡冷牢。津每晚把食物藏在斗篷下来探他，二人隔栅而歌，却始终没能逃出。几个月后梅姆因寒冷与悲伤死去，津伏在他胸前也随之离世。",
        "他们被合葬在一起。次年坟上长出一丛荆棘，是这一带最尖利的。贝基尔后来心怀愧疚而死，被葬在附近，他坟上也长出荆棘，却向反方向弯去，再也无法干扰那对情人。库尔德斯坦各地的婚礼上仍传唱这首歌，提醒年轻人爱情能熬过牢狱；在哀悼时也会被唱起，让人记住那些把情人拆开的人。",
      ]
    },
    themes: [text("dream lovers", "梦中之爱"), text("slanderer", "谗言"), text("grave plant", "坟上之木")],
    tags: [text("kurdish", "库尔德"), text("mem", "梅姆"), text("zin", "津"), text("ahmedi khani", "哈尼")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mem_and_Zin"
  },
  {
    id: "sami-stallo",
    title: text("The Stállo of the Northern Forests", "北方密林中的史塔洛"),
    country: text("Norway", "挪威"),
    region: text("Arctic", "北极"),
    culture: text("Sami", "萨米"),
    latitude: 69.6492,
    longitude: 18.9553,
    category: "creature",
    summary: text(
      "A slow, greedy ogre of the Sápmi forests, the Stállo trades iron for souls; clever Sami children outwit him with their dog and their reindeer, but never with a straight answer.",
      "萨普米森林中的史塔洛是行动迟缓而贪婪的食人魔，以铁器换走灵魂；机巧的萨米孩子靠狗与驯鹿斗他，却从不正面回答他的话。"
    ),
    background: text(
      "The Stállo is the celebrated ogre of Sami folklore across northern Norway, Sweden, Finland, and the Russian Kola Peninsula.",
      "史塔洛是萨米民间故事中著名的食人魔，遍及挪威北部、瑞典、芬兰与俄罗斯科拉半岛。"
    ),
    narrativeParagraphs: {
      en: [
        "The Stállo is tall and slow. He walks with iron-shod boots through the pine forests of Sápmi, sniffing for children. He carries an iron belt, an iron pot, and a long knife. He is not very bright. His worst weakness is that he cannot say the same answer twice in a row.",
        "When a Stállo finds a Sami child alone, he asks the child to come with him to a hut where, he says, treasures are stored. The child must not refuse outright, or the Stállo will eat him. Instead the child must invite the Stállo to a game—name what is in the hut, sing a song, tie a knot. The Stállo always tries to keep up, and he always trips on his own pride.",
        "There are stories of children who escaped by getting a dog to bark in their place, by leading the Stállo onto thin ice, by making him swear that he himself was a reindeer, after which he could not eat reindeer-blood for fear of cannibalism. The teaching is clear: do not lie, do not run, do not fight. Lead the Stállo into the kind of game he loses, and walk home before he notices.",
      ],
      zh: [
        "史塔洛身材高大、动作迟缓。他穿着钉铁的靴子，走在萨普米的松林里，闻着孩子的味道。他随身带着铁腰带、铁锅与一柄长刀。他并不聪明。他最大的弱点是同一句话他不能连说两遍。",
        "史塔洛若发现一个落单的萨米孩子，便会邀请孩子跟他回小屋，说屋里藏着宝物。孩子绝不能直接拒绝——一拒绝就会被吃掉。孩子要反过来邀史塔洛玩游戏：猜屋内有什么、唱一支歌、打一个结。史塔洛总想跟上，又总绊倒在自己的傲气上。",
        "传说中有孩子借狗替自己学叫蒙混过去，有孩子把史塔洛引上薄冰，还有孩子让他发誓自己其实是驯鹿——他从此再不敢喝驯鹿血，唯恐变成同类相食。其中的教诲很清楚：别撒谎，别奔跑，也别正面交锋。把史塔洛引进他必输的游戏，自己悄悄回家。",
      ]
    },
    themes: [text("ogre", "食人魔"), text("riddle game", "谜局"), text("forest survival", "林中求生")],
    tags: [text("sami", "萨米"), text("stallo", "史塔洛"), text("sapmi", "萨普米"), text("iron belt", "铁腰带")],
    sourceUrl: "https://en.wikipedia.org/wiki/St%C3%A1llu"
  },
  {
    id: "nyurgun-bootur",
    title: text("Nyurgun Bootur the Swift", "捷者尼乌尔贡·勃图尔"),
    originalTitle: text("Дьулуруйар Ньургун Боотур", "闪光的尼乌尔贡·勃图尔"),
    country: text("Russia", "俄罗斯"),
    region: text("Arctic", "北极"),
    culture: text("Yakut", "雅库特"),
    latitude: 62.0356,
    longitude: 129.6755,
    category: "epic",
    summary: text(
      "In the Yakut Olonkho, the upper-world hero Nyurgun Bootur descends to free the people of the middle world from the abaasy underworld demons, riding a winged horse made of frost.",
      "在雅库特《奥隆霍》史诗中，上层世界的英雄尼乌尔贡·勃图尔降至中层人间，骑乘霜雪之翼马，把人民从下界“阿巴阿瑟”恶魔手中解救出来。"
    ),
    background: text(
      "The Yakut Olonkho is on UNESCO's intangible heritage list; its longest epic centres on Nyurgun Bootur the Swift, sung by olonkhosut bards.",
      "雅库特《奥隆霍》史诗已列入联合国教科文非遗名录；其最长的一部以“捷者尼乌尔贡·勃图尔”为中心，由“奥隆霍苏特”艺人歌唱。"
    ),
    narrativeParagraphs: {
      en: [
        "The world of the Yakut has three layers: the upper, where the bright Aiyy gods live; the middle, where humans plow the short summer; and the lower, where the abaasy demons sharpen their teeth. The lower world had begun to send its monsters up through cracks in the ice, stealing daughters and burning meadows. The upper-world chief sent down a hero.",
        "Nyurgun Bootur the Swift was born already armoured. His horse Yulahalys-Kuuruk had wings of frozen vapor. They came down through a hole in the sky and landed on the river ice. From village to village Nyurgun fought abaasy, freed captive women, restored cattle, and bound the worst demons under flat stones.",
        "Each duel lasted days, the heroes' breath turning to mist that wrote their names in the air. Nyurgun married a middle-world girl, taught the people a new song of courage, and rode back up through the sky. The olonkhosut sing his exploits for many evenings in a row, never finishing in one sitting; the song itself, the Yakut say, is part of how the upper sky still defends the middle world.",
      ],
      zh: [
        "雅库特人的世界分三层：上层住着光辉的“阿伊”众神；中层是凡人耕作短暂夏季之处；下层是“阿巴阿瑟”磨牙的所在。下层世界开始借冰层裂缝把怪物送到中层人间，掳走女儿、焚毁草甸。上层之主因此遣下一位英雄。",
        "捷者尼乌尔贡·勃图尔出生时已披甲冑。他的马“尤拉哈雷斯-库鲁克”有一对冻雾织成的翼。他们从天上的口降下，落在冰河之上。一村接一村，尼乌尔贡与阿巴阿瑟血战，救出囚妇，归还牛群，把最凶的几只魔捆压在扁石之下。",
        "每场决斗长达数日，英雄们的气息化为雾在空中写下他们的名字。尼乌尔贡娶了中层世界的一位女子，教会众人一支新的勇气之歌，又骑马穿天而上。奥隆霍苏特艺人会连续几个夜晚地唱他的功业，一次绝不唱完；雅库特人说，这首歌本身，便是上层天空至今仍守护中层人间的方式之一。",
      ]
    },
    themes: [text("three-world cosmos", "三层世界"), text("hero descent", "英雄下行"), text("epic song", "史诗歌")],
    tags: [text("yakut", "雅库特"), text("olonkho", "奥隆霍"), text("nyurgun bootur", "尼乌尔贡·勃图尔"), text("abaasy", "阿巴阿瑟")],
    sourceUrl: "https://en.wikipedia.org/wiki/Olonkho"
  },
  {
    id: "bukhe-noyon",
    title: text("Bukhe Noyon, the Bull Ancestor", "公牛之祖布赫·诺颜"),
    country: text("Russia", "俄罗斯"),
    region: text("Arctic", "北极"),
    culture: text("Buryat", "布里亚特"),
    latitude: 52.0307,
    longitude: 104.4456,
    category: "myth",
    summary: text(
      "A great blue bull comes down from Lake Baikal at dawn, ploughs a furrow with his horn, and from that furrow rise the eleven clans of the Buryat.",
      "拂晓时分一头大青牛从贝加尔湖中走出，以角犁出一道深沟，从沟中升起布里亚特的十一个氏族。"
    ),
    background: text(
      "Buryat origin tales speak of Bukhe Noyon, a great totemic bull associated with Lake Baikal and the Olkhon shamans.",
      "布里亚特起源故事中讲述“布赫·诺颜”，是与贝加尔湖及奥尔洪岛萨满相关的图腾大公牛。"
    ),
    narrativeParagraphs: {
      en: [
        "Before the Buryat had names, the steppe along Lake Baikal was empty grass. One dawn a great blue bull with white horns came up out of the water. He shook himself; foam rolled off his back into the lake. He walked along the shore and pushed his right horn into the earth, ploughing a deep furrow as he went.",
        "From the furrow eleven men stood up, each with a different face. Bukhe Noyon turned to them and bellowed eleven sounds, giving each man a different name and a different way to graze his sheep. He told them to look after the water, the islands, and the herds. Then he walked back into the lake.",
        "The eleven men became the eleven clans of the Buryat. Even today on the rocky island of Olkhon shamans speak to Bukhe Noyon at the shore. They leave a cup of milk and a strip of blue cloth on the rocks, and if the wind takes the cloth into the water without dropping it, the year will be good.",
      ],
      zh: [
        "布里亚特人还没有族名时，贝加尔湖边的草原空空如也。一日拂晓，一头白角大青牛从湖中走出。他抖了抖身躯，泡沫从背上落回湖里。他沿岸而行，把右角扎入地中，一路犁出一道深沟。",
        "沟中站起十一位男子，每人面容不同。布赫·诺颜转身向他们发出十一种低吼，给每一位取了不同的名字，指点他放牧的方式。他叮嘱他们看顾水、岛与畜群，然后转身走回湖中。",
        "这十一位男子便成了布里亚特的十一个氏族。今日在多石的奥尔洪岛上，萨满仍向湖岸呼唤布赫·诺颜。他们在岩石上放一杯奶、一条蓝色布带；若风把布带吹进水中而不让它落地，这一年便是好年景。",
      ]
    },
    themes: [text("totem ancestor", "图腾之祖"), text("origin of clans", "氏族起源"), text("sacred lake", "圣湖")],
    tags: [text("buryat", "布里亚特"), text("baikal", "贝加尔湖"), text("olkhon", "奥尔洪"), text("bukhe noyon", "布赫·诺颜")],
    sourceUrl: "https://en.wikipedia.org/wiki/Buryats"
  },
  {
    id: "num-reindeer",
    title: text("Num and the First Reindeer", "努姆与最早的驯鹿"),
    country: text("Russia", "俄罗斯"),
    region: text("Arctic", "北极"),
    culture: text("Nenets", "涅涅茨"),
    latitude: 66.5333,
    longitude: 66.6,
    category: "myth",
    summary: text(
      "Num the sky pulls a reindeer up out of the swampy earth so the Nenets will have something to follow across the tundra; the herd takes their direction from Num's breath ever since.",
      "天神努姆从沼泽的大地中拉出第一头驯鹿，好让涅涅茨人有可以跟随的牲畜；从那以后，鹿群仍依着努姆的呼吸而行进。"
    ),
    background: text(
      "Among the Nenets reindeer-herders of the Russian Arctic, Num is the high sky-god and Yamine is the underworld; the reindeer is the central creature of life.",
      "在俄罗斯北极的涅涅茨牧鹿人中，努姆是上层天神，亚米涅是下界，驯鹿则是生活的核心动物。"
    ),
    narrativeParagraphs: {
      en: [
        "Num lived at the top of the sky and looked down on the earth that lay in shallow water under the snow. He saw small dark men walking on the bog with nothing to follow. He pitied them. He bent down and put his fingers into the bog, feeling for a body. He found one shaped like the wind running across the moss. He pulled it up.",
        "The body had two long branched bones on its head, four narrow legs, a soft nose. He called it ngeneka—reindeer. He pushed it gently with his breath; the reindeer began to walk. The dark men watched, and Num told them, 'Where the reindeer walks, you can go. Where the reindeer eats, you can pitch your tent. When the reindeer dies, you can eat. Do not break the rules.'",
        "He pulled up more reindeer, then taught the men how to harness them to long flat sleds. The Nenets followed the herd up to the Yamal coast and down across the Ural. To this day a Nenets child learns to read wind by reading where the reindeer turn their faces, because the herd is still listening to Num's breath.",
      ],
      zh: [
        "努姆住在天顶，俯瞰雪下浅水中的大地。他看见黑色小人在沼泽上行走，没有可跟随的牲畜。他生怜悯之心，把手指伸进沼泽探寻形体，摸到一个像风掠过苔藓时的形状。他把它拉了上来。",
        "那形体头上长着两簇分枝的骨，四条细腿，柔软的鼻子。他叫它 ngeneka——驯鹿。他用一口气轻推它，驯鹿开始走动。黑色小人在一旁看着。努姆对他们说：“鹿走到哪里，你们就能去到哪里；鹿吃什么，你们就在哪儿扎帐篷；鹿死时，你们才能吃。规矩不可破。”",
        "他又拉出更多的驯鹿，教人把它们套在长长的平爬犁上。涅涅茨人随鹿群北上亚马尔海岸，南下乌拉尔山。直到今日，涅涅茨孩子学辨风向，要靠看驯鹿把脸朝向哪里——因为鹿群至今仍在听努姆的呼吸。",
      ]
    },
    themes: [text("creator pull", "拔出造物"), text("reindeer covenant", "与鹿之约"), text("tundra", " 苔原")],
    tags: [text("nenets", "涅涅茨"), text("num", "努姆"), text("reindeer", "驯鹿"), text("yamal", "亚马尔")],
    sourceUrl: "https://en.wikipedia.org/wiki/Nenets_people"
  },
  {
    id: "ainu-okikurmi",
    title: text("Okikurmi Teaches the Ainu", "奥基库尔米教导阿伊努"),
    country: text("Japan", "日本"),
    region: text("East Asia", "东亚"),
    culture: text("Ainu", "阿伊努"),
    latitude: 43.0667,
    longitude: 141.35,
    category: "myth",
    summary: text(
      "The culture hero Okikurmi comes down from the upper world of the kamuy, teaches the Ainu to set salmon weirs and to send the bear-spirit back home, then walks east into the dawn.",
      "文化英雄奥基库尔米从“神祇”的上界降下，教阿伊努人设鲑梁、举行送熊礼，然后向东走入晨曦。"
    ),
    background: text(
      "Okikurmi (also Aeoina-kamuy) is the great teacher of Ainu folklore on Hokkaido, Sakhalin, and the Kuril Islands.",
      "奥基库尔米（亦称 Aeoina-kamuy）是北海道、库页岛与千岛群岛阿伊努民间故事中最重要的“教师”。"
    ),
    narrativeParagraphs: {
      en: [
        "When the Ainu were new on the land, they did not know how to live with the salmon, the bear, or the gods of the rivers. Okikurmi came down from the upper world dressed in a soft fibre robe, with his sister Tureshmat at his side. He sat by the first river and watched the salmon. Then he showed the people how to weave a wooden weir.",
        "He taught them which mountain herbs to chew for fever, which bird's call meant a storm, how to greet a bear if you met one. Most importantly, he taught the iyomante ceremony: when the people raised a bear cub, fed it for two winters, and finally sent its spirit back home with offerings of inau wood-shavings, the bear-spirit would speak well of them in the upper world and the forests would stay full of game.",
        "When his work was done Okikurmi did not stay to be worshipped as a god. He told his sister to wait at the river, and he walked east along the coast into the rising sun. The Ainu say he is still walking. Whenever the salmon come back to the rivers and the inau are placed by the doorway, Okikurmi has visited again.",
      ],
      zh: [
        "阿伊努人刚到这片土地时，不懂得如何与鲑鱼、与熊、与河中诸神相处。奥基库尔米从上界降下，身着柔软纤维制成的长袍，妹妹图列什玛特随行。他在最初的河边坐下，看着鲑鱼，然后教族人如何织出木制鲑梁。",
        "他教他们辨识哪种山药可降高热，哪种鸟鸣预示风暴，路上遇见熊时如何招呼。最重要的是他传下“伊约曼特”送熊礼——人们将熊仔养上两个冬季，最后以削得纤细的“伊瑙”木条为礼，把熊的灵送回上界。这样一来，熊神在上界会替人间说好话，森林里也始终猎物丰盛。",
        "工作完成后，奥基库尔米并没有留下让人尊奉为神。他让妹妹守在河边，自己沿海岸向东走入升起的太阳。阿伊努人说他仍在路上。每逢鲑鱼归来、伊瑙立于门边时，奥基库尔米又一次到访。",
      ]
    },
    themes: [text("culture hero", "文化英雄"), text("bear ceremony", "送熊礼"), text("walking east", "向东而去")],
    tags: [text("ainu", "阿伊努"), text("okikurmi", "奥基库尔米"), text("iyomante", "伊约曼特"), text("inau", "伊瑙")],
    sourceUrl: "https://en.wikipedia.org/wiki/Okikurmi"
  },
  {
    id: "vainamoinen-sampo",
    title: text("Väinämöinen Sings the Sampo", "维纳莫宁吟唱萨姆波"),
    originalTitle: text("Kalevala", "卡勒瓦拉"),
    country: text("Finland", "芬兰"),
    region: text("Northern Europe", "北欧"),
    culture: text("Finnish", "芬兰"),
    latitude: 60.1699,
    longitude: 24.9384,
    category: "epic",
    summary: text(
      "The ancient singer Väinämöinen sails north with the smith Ilmarinen to win the Sampo, a magical mill of plenty, from the witch-queen of Pohjola.",
      "古老的歌者维纳莫宁与铁匠伊尔玛里宁北上波赫尤拉，从那里的巫女女王手中夺取丰饶之磨“萨姆波”。"
    ),
    background: text(
      "Elias Lönnrot compiled the Finnish national epic Kalevala in 1835 from oral runes, with Väinämöinen at its heart.",
      "埃利亚斯·伦罗特于 1835 年从民间“runo”歌谣汇编出芬兰民族史诗《卡勒瓦拉》，维纳莫宁是其核心。"
    ),
    narrativeParagraphs: {
      en: [
        "Väinämöinen was born already old, with a long beard and a memory of songs older than the trees. He had no smithy of his own but he had Ilmarinen, the master smith born of his words. The witch-queen Louhi of dark Pohjola had heard that Ilmarinen could forge the Sampo—a mill that pours grain out one side, salt out the other, and gold out the third. She demanded it as the bride-price for her daughter.",
        "Väinämöinen and Ilmarinen sailed north on a long pinewood ship. Ilmarinen worked at the forge for many days, sweating winds and frost. The Sampo came out covered in colours. Louhi locked it in a copper mountain. She did not give her daughter to Ilmarinen. The two friends returned home angry.",
        "Years later they sailed back, by storm and song, and stole the Sampo. Louhi's ship caught them on the open sea. In the fight the Sampo broke and fell into the water; some pieces washed ashore and became the wealth of Kaleva-land, others sank and made the sea generous. Väinämöinen, his work done, sang one last song and rowed away in a copper boat. He left his kantele harp behind for the next singer who would dare to take it down.",
      ],
      zh: [
        "维纳莫宁一出生便已年老，长须飘飘，记着比林木更古老的歌。他没有自己的铁匠铺，但有伊尔玛里宁——由他歌咒唤出的大匠。黑暗的波赫尤拉女王娄希听说伊尔玛里宁能锻造“萨姆波”——一面磨：一侧磨出粮食，一侧磨出盐，一侧磨出黄金。她以此作为娶女儿的聘礼。",
        "维纳莫宁与伊尔玛里宁乘长长的松木船北上。伊尔玛里宁在炉边干了好几天，汗中流出风与霜。萨姆波终于打成，光华各异。娄希把它锁进一座铜山，却没有把女儿嫁给伊尔玛里宁。两位友人愤然回乡。",
        "数年后他们再以风暴与歌咒北航，偷走萨姆波。娄希的船在大海上追上他们。混战中萨姆波碎裂，落入海里：一些碎片漂上岸，成了“卡勒瓦之地”的财富；另一些沉入海底，使大海至今丰饶。事毕后维纳莫宁吟出最后一支歌，划着一条铜船远去。他把自己的“坎特勒”竖琴留在岸上，等下一个敢取下它的歌者。",
      ]
    },
    themes: [text("magic mill", "神奇之磨"), text("forge", "锻造"), text("departure of the bard", "歌者远去")],
    tags: [text("finnish", "芬兰"), text("vainamoinen", "维纳莫宁"), text("ilmarinen", "伊尔玛里宁"), text("sampo", "萨姆波")],
    sourceUrl: "https://en.wikipedia.org/wiki/V%C3%A4in%C3%A4m%C3%B6inen"
  },
  {
    id: "lemminkainen-tuonela",
    title: text("Lemminkäinen at the Black River", "莱明凯宁在黑河"),
    country: text("Finland", "芬兰"),
    region: text("Northern Europe", "北欧"),
    culture: text("Finnish", "芬兰"),
    latitude: 60.1699,
    longitude: 24.9384,
    category: "myth",
    summary: text(
      "The reckless lover Lemminkäinen rides to Pohjola to steal a bride, and his mother must rake him out of the black river of Tuonela piece by piece to put him back together.",
      "鲁莽的情人莱明凯宁北上波赫尤拉求亲，他的母亲不得不在死者之河“图奥内拉”里一片一片把他打捞起来重新拼合。"
    ),
    background: text(
      "Lemminkäinen is the Finnish epic's reckless seducer and warrior, son of a mother whose grief and skill bring him back from the underworld.",
      "莱明凯宁是芬兰史诗中鲁莽的情场战士，他母亲以哀痛与技巧把他从冥府打捞回来。"
    ),
    narrativeParagraphs: {
      en: [
        "Lemminkäinen could never sit still. He left his island home to sail to Pohjola in search of a bride. Louhi the witch-queen accepted his offer only if he completed three impossible tasks: catch the elk of Hiisi, bridle the fire-horse, and shoot the black swan of Tuonela, the river of the dead.",
        "He caught the elk and bridled the horse. By the river of the dead, the herder of Tuonela waited with his bow drawn. Before Lemminkäinen could shoot, the herder shot him with a poisoned arrow. He fell, was cut into many pieces, and the pieces were swept down the black river.",
        "Lemminkäinen's mother saw the hairbrush at home dripping blood. She walked all the way to Pohjola, asked tree and water and bee where her son was, and at last, with a long rake of copper, dragged the pieces of his body out of Tuonela's black water. With prayers and salves she put him back together. She did not let him go off seeking brides for some time after that, but Lemminkäinen, once whole, eventually disobeyed again.",
      ],
      zh: [
        "莱明凯宁从来坐不住。他离开海岛之家，北航至波赫尤拉求亲。巫女女王娄希答应他，但要他完成三件不可能之事：捕到“希西”的麋鹿、给火马上辔、射下死者之河图奥内拉的黑天鹅。",
        "他捕到了麋鹿，又给火马上了辔。到了死者之河，图奥内拉的牧者已拉满弓在等他。莱明凯宁尚未来得及搭箭，便被一支毒箭射倒。他随之被砍成多段，碎块顺着黑水冲下河去。",
        "莱明凯宁的母亲在家中看见梳子滴血，立刻一路赶赴波赫尤拉，问遍林木、流水和蜂群，孩子在哪里。她最终用一柄长长的铜耙在图奥内拉的黑水中把儿子的碎块一片片捞起，凭祷告与药膏把他重新拼合。此后她有一段日子不再让他四处求亲，但莱明凯宁刚一恢复，照样又一次违背她的话。",
      ]
    },
    themes: [text("reckless hero", "鲁莽英雄"), text("mother's love", "母爱"), text("river of the dead", "死者之河")],
    tags: [text("finnish", "芬兰"), text("lemminkainen", "莱明凯宁"), text("tuonela", "图奥内拉"), text("kalevala", "卡勒瓦拉")],
    sourceUrl: "https://en.wikipedia.org/wiki/Lemmink%C3%A4inen"
  },
  {
    id: "kalevipoeg",
    title: text("Kalevipoeg, Son of Kalev", "卡列维波埃格——卡列夫之子"),
    originalTitle: text("Kalevipoeg", "卡列维波埃格"),
    country: text("Estonia", "爱沙尼亚"),
    region: text("Northern Europe", "北欧"),
    culture: text("Estonian", "爱沙尼亚"),
    latitude: 59.437,
    longitude: 24.7536,
    category: "epic",
    summary: text(
      "The giant son of Kalev throws boulders that become hills, ploughs the moors with his own hands, dies guarding the gates of the underworld, and is promised to return when Estonia needs him.",
      "卡列夫的巨人之子掷出的巨石化为山丘，他亲手开垦荒原，最终守在冥府门口而死；他被许诺，将在爱沙尼亚需要他的那一天归来。"
    ),
    background: text(
      "Friedrich Reinhold Kreutzwald compiled the Estonian national epic Kalevipoeg in 1857 from oral runo songs.",
      "弗里德里希·莱因霍尔德·克鲁茨瓦尔德于 1857 年根据民间“runo”歌谣编成爱沙尼亚民族史诗《卡列维波埃格》。"
    ),
    narrativeParagraphs: {
      en: [
        "Kalev was an old chief of the Estonian tribes. His youngest son was born tall as a tree and strong enough to lift a horse. The boy travelled across the country looking for his lost mother, fought monsters in the bog of Endla, and crossed Lake Peipus on a borrowed sword that he later lost in the water.",
        "He cleared forests with his bare hands and laid out fields where no plough had yet gone. He carried boulders home for building and dropped them in piles that today are the hills of Estonia. Sometimes he lay down and slept; the hills of his sleep are gentler. He fought a Finnish sorcerer, lost a wager, regained his standing only with great labour.",
        "At last he was killed at the very gate of the underworld, by his own lost sword cutting up out of the water. The gods did not let him pass through; they set his right hand to guard the gate against the worst things from below. Estonian song says that when the country is in danger, the rock will open and Kalevipoeg's left hand will join the right, and he will walk again across the marshes.",
      ],
      zh: [
        "卡列夫是爱沙尼亚部落古老的酋长。他最小的儿子出生时如树般高，单臂能举起一匹马。这孩子走遍国土寻找失踪的母亲，在恩德拉沼泽与怪兽搏斗，又以一柄借来的剑横渡佩普西湖——那柄剑后来被他失落于水中。",
        "他赤手伐林，把从未犁过的荒原开成田野。他抱回大石用于筑屋，堆成的石堆便是今日爱沙尼亚的丘陵。他偶尔躺下沉睡，他沉睡之地的山丘格外柔和。他与一名芬兰巫师斗法、输过赌局，又靠艰苦劳作恢复声望。",
        "他最终被自己昔日掉入水中的那柄剑——从水底升起——斩杀于冥府之门前。诸神不让他穿过冥府之门，而把他的右手安在门旁守卫，挡住下界最可怕的东西。爱沙尼亚的歌谣说，当国家陷入危急时，岩石会打开，卡列维波埃格的左手将与右手会合，他将重新跨过沼泽行走。",
      ]
    },
    themes: [text("giant founder", "巨人之祖"), text("national epic", "民族史诗"), text("guardian sleep", "守门之眠")],
    tags: [text("estonian", "爱沙尼亚"), text("kalevipoeg", "卡列维波埃格"), text("peipus", "佩普西"), text("runo", "runo 歌谣")],
    sourceUrl: "https://en.wikipedia.org/wiki/Kalevipoeg"
  },
  {
    id: "mari-basque",
    title: text("Mari, Lady of Anboto", "安博托之主玛丽"),
    country: text("Spain", "西班牙"),
    region: text("Western Europe", "西欧"),
    culture: text("Basque", "巴斯克"),
    latitude: 43.0833,
    longitude: -2.6833,
    category: "religion",
    summary: text(
      "Mari, the goddess of the Basque mountains, lives in different caves on the year's wheel, rides a ram of flame across the sky, and demands above all that one's word be kept.",
      "巴斯克山中之神玛丽随年轮在不同山洞间居住，乘着火焰公羊横越天空；她的最大要求是“言出必行”。"
    ),
    background: text(
      "Mari is the most important figure of pre-Christian Basque religion, with cave-shrines on Anboto, Aizkorri, Aralar, and other Basque mountains.",
      "玛丽是巴斯克前基督教宗教中最重要的神祇，在安博托、艾兹科里、阿拉拉等山中均有洞穴祠。"
    ),
    narrativeParagraphs: {
      en: [
        "Mari does not live in one place. She moves on the wheel of the year through the great caves of the Basque country: Anboto in summer, Aizkorri in autumn, Aralar in winter, Murumendi in spring. Shepherds who stand still at dusk can sometimes see a slow trail of light moving from one peak to the next: she is on her way.",
        "She is not a god of doctrine. The Basque say she does not care whether you call yourself Christian or not. She cares about three rules: do not boast, do not lie, do not break your word. To a shepherd who keeps his promises, she gives quiet luck—the lost goat returns, the storm bends around the flock. To one who breaks his word, she gives confusion, and his goat does not return.",
        "Once a year she meets her consort Sugaar in a cave deep under Anboto, and from their meeting come the storms of summer. Children in the Basque country still leave bread on rocks for Mari and Sugaar, and the elders still tell off a boastful traveller by saying, 'Anbotoko Andra Mari is listening.'",
      ],
      zh: [
        "玛丽并不固定在一处。她沿年轮在巴斯克国土的大山洞之间迁徙：夏天在安博托，秋天在艾兹科里，冬天在阿拉拉，春天在穆鲁门迪。黄昏静立的牧人有时能看见一缕缓慢的光迹从一峰移向另一峰——那是她在赴下一座洞窟。",
        "她不是讲教义的神。巴斯克人说，你自称基督徒与否，她不在意；她在意三条：不要夸口、不要撒谎、不要食言。守诺的牧人，她默默回报好运——丢失的山羊自己回来，风暴绕过羊群。食言之人，她回报一团混乱——丢失的山羊就再也回不来。",
        "每年她与配偶苏加尔在安博托深处的山洞相会一次，他们的相会便带来夏季的雷雨。巴斯克孩子至今仍在岩石上为玛丽与苏加尔留一块面包；长老们听到旅人夸口时，仍会一句话把他堵回去：“安博托的玛丽夫人在听。”",
      ]
    },
    themes: [text("mountain goddess", "山神"), text("keeping one's word", "守诺"), text("seasonal cave", "随季迁洞")],
    tags: [text("basque", "巴斯克"), text("mari", "玛丽"), text("anboto", "安博托"), text("sugaar", "苏加尔")],
    sourceUrl: "https://en.wikipedia.org/wiki/Mari_(goddess)"
  },
  {
    id: "miorita-shepherd",
    title: text("The Prophetic Lamb of Mioriţa", "《米奥里查》的预言羔羊"),
    originalTitle: text("Mioriţa", "米奥里查"),
    country: text("Romania", "罗马尼亚"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Romanian", "罗马尼亚"),
    latitude: 45.9432,
    longitude: 24.9668,
    category: "folktale",
    summary: text(
      "A small ewe warns the Moldavian shepherd that his two fellows plan to kill him at sunset; he answers not by fleeing but by giving the lamb instructions for what to tell his mother and the world.",
      "一只小母绵羊警告摩尔达维亚牧人，他的两位同伴打算在日落时杀他；他不逃，反而吩咐羊去把他的话告诉母亲和世人。"
    ),
    background: text(
      "Mioriţa is the great Romanian ballad of resignation and beauty in the face of death, recorded in many regional versions.",
      "《米奥里查》是罗马尼亚最重要的民谣，各地版本繁多，赞颂面对死亡时的从容与美。"
    ),
    narrativeParagraphs: {
      en: [
        "Three shepherds met at a green pasture in the Carpathians: one from Moldavia, one from Wallachia, one from Transylvania. They had spent the summer together on the upland with one big flock. The Moldavian shepherd had the finest sheep, and his two friends grew envious. They agreed in low voices to kill him at sunset and divide his flock.",
        "A small ewe—the Mioriţa—heard them. She would not eat. The Moldavian shepherd asked why. She told him plainly. He listened, and instead of running he gave her instructions: 'Tell them to bury me at the sheepfold, with my flute by my head. Tell my mother that I have married a princess of the mountain, with stars at the wedding, and a long white veil of mist.'",
        "The lamb went and told. The mother sang and waited. The other shepherds carried out their plan but were lonely afterwards. The Romanian say the ballad teaches not weakness but a way of meeting the inevitable with one's eyes open, and that the mountains themselves carry the shepherd's news to anyone willing to listen.",
      ],
      zh: [
        "三位牧人在喀尔巴阡山的一片青草地相会：一位来自摩尔达维亚，一位来自瓦拉几亚，一位来自特兰西瓦尼亚。整个夏天他们带着一大群羊一起在高地上放牧。摩尔达维亚牧人的羊最好，另两人心生嫉妒。他们低声约定，日落时杀掉他，把羊群三家平分。",
        "一只小母绵羊——米奥里查——听见了。她不肯吃草。摩尔达维亚牧人问她为何，她平静地把事情告诉他。他听完，并没有逃跑，反而给她吩咐：“替我转告他们，把我葬在羊圈旁，把笛子放在我头边。告诉我母亲，说我娶了山中的一位公主，星辰来参加婚礼，新娘披一条长长的白雾。”",
        "小绵羊去转告了。母亲一边歌一边等。另两位牧人按计行事，事后却感到孤独。罗马尼亚人说，这首谣并不教人柔弱，而教人在不可避免的事面前睁着眼相迎；山脉本身，会把那位牧人的话送给任何愿意倾听的人。",
      ]
    },
    themes: [text("foretold death", "预知之死"), text("acceptance", "从容"), text("pastoral elegy", "牧歌挽歌")],
    tags: [text("romanian", "罗马尼亚"), text("miorita", "米奥里查"), text("shepherd", "牧人"), text("carpathian", "喀尔巴阡")],
    sourceUrl: "https://en.wikipedia.org/wiki/Miori%C8%9Ba"
  },
  {
    id: "master-manole",
    title: text("Master Manole's Tower", "曼诺勒匠人之塔"),
    country: text("Romania", "罗马尼亚"),
    region: text("Eastern Europe", "东欧"),
    culture: text("Romanian", "罗马尼亚"),
    latitude: 45.05,
    longitude: 24.95,
    category: "folktale",
    summary: text(
      "Cursed by a wall that falls each night, Master Manole and his nine craftsmen agree to wall up the first wife who arrives at dawn; the woman is his own, and the monastery rises on her grief.",
      "围墙夜夜倒下，木匠师曼诺勒与他的九位徒弟约定把次日清晨第一位送饭来的妻子砌入墙中——结果来的是他自己的妻子，修道院由她的悲恸筑起。"
    ),
    background: text(
      "The 'Master Manole' ballad explains the building of the monastery of Curtea de Argeş with a sacrifice motif found across the Balkans.",
      "“曼诺勒匠人”谣传与库尔泰亚迪阿尔杰什修道院的修建相关，其“筑入献祭”母题在巴尔干各地流传。"
    ),
    narrativeParagraphs: {
      en: [
        "Prince Negru Vodă wanted a monastery so beautiful that the world would talk of it. He hired Manole, the best builder in the country, and nine craftsmen. They laid stone all day, but each night the unfinished wall fell down. After many such mornings the men sat down at the foot of the broken wall, exhausted.",
        "That night Manole dreamed an old voice that said the wall would only stand if a living woman was built into it. He told the other nine; they swore together that the next morning the first wife who came up the road with food for her husband would be the one. At dawn they watched. The first wife to appear was Ana, Manole's own.",
        "He prayed for a storm, for a sudden rain, for any reason she would turn back. The morning stayed bright. Manole told Ana, 'It is only a game; we will pretend to build a wall around you.' She laughed and stood inside. They sealed her up. The wall held. The monastery rose. When the prince came to inspect, he asked if the men could build something even greater. Manole, knowing they would never be allowed to leave, climbed to the roof and threw himself off. Where he fell, a spring of cold water rose, and the spring still flows by the wall.",
      ],
      zh: [
        "奈格鲁王想修一座绝世修道院。他请来全国最好的匠人师曼诺勒及九位徒弟。他们整日砌石，可砌好的墙夜里就倒。这样过了几个早晨，众人精疲力竭地坐在塌墙脚下。",
        "那夜曼诺勒梦见一个苍老的声音，说唯有把一位活着的妇人砌入墙中，墙才能立住。他告诉九位徒弟，他们一同立誓：次日清晨第一个沿路给丈夫送饭来的妻子，就由她来作。天明时分他们望路。先到的人是安娜——曼诺勒自己的妻子。",
        "他默默祷告，求一场雷雨、一场骤雨、任何能让她回转的理由。早晨却始终明亮。曼诺勒对安娜说：“这不过是个玩笑——我们假装围你筑一道墙。”她笑着站进墙里。他们一层层把她封上，墙果然立住。修道院落成。王子来检视，又问能不能再修一座更宏伟的。曼诺勒明白他们再也不被允许离开，于是登上屋顶纵身跃下。他坠落之处涌出一汪清凉的泉水，至今仍在那道墙边流淌。",
      ]
    },
    themes: [text("building sacrifice", "筑入献祭"), text("oath", "誓约"), text("hidden cost", "隐性代价")],
    tags: [text("romanian", "罗马尼亚"), text("manole", "曼诺勒"), text("arges", "阿尔杰什"), text("ana", "安娜")],
    sourceUrl: "https://en.wikipedia.org/wiki/Monastery_of_Arge%C8%99"
  },
  {
    id: "white-stag-hunor",
    title: text("The White Stag of Hunor and Magor", "胡诺尔与马戈尔的白鹿"),
    country: text("Hungary", "匈牙利"),
    region: text("Central Europe", "中欧"),
    culture: text("Hungarian", "匈牙利"),
    latitude: 47.4979,
    longitude: 19.0402,
    category: "myth",
    summary: text(
      "Two princely brothers chase a white stag across the Don, into the marshes of Maeotis, and out onto open steppe; from them descend the Huns and the Magyars.",
      "两位王子兄弟一路追逐一头白鹿，越过顿河、穿过迈奥提斯沼泽，进入开阔的草原；他们之后繁衍出匈人与马扎尔人。"
    ),
    background: text(
      "The chronicler Simon of Kéza (thirteenth century) records the legend of Hunor and Magor as the founding myth of both Huns and Hungarians.",
      "十三世纪编年史家凯萨的西门把胡诺尔与马戈尔的传说记作匈人与马扎尔人共同的开族神话。"
    ),
    narrativeParagraphs: {
      en: [
        "Long ago, beyond the river Don, two princes named Hunor and Magor went out hunting with fifty companions. They saw a white stag with antlers like silver branches. The stag did not run hard; it teased them by stopping at the river's edge, by waiting on the far bank, by trotting on as soon as they approached. They followed it for many days.",
        "The stag led them through marshes thick with reeds, into the open grasslands of Maeotis. Where it finally disappeared, the brothers saw the daughters of the Alans dancing at a festival. They chose two of them as wives and took the others home to their fifty companions. From their union came two peoples: from Hunor the Huns, from Magor the Magyars.",
        "Generations later, when the Magyars rode west toward the Carpathian basin, the elders said they were still following the white stag, and even today the white stag is one of the oldest emblems of Hungary. Children at school learn the brothers' names before they learn their dates.",
      ],
      zh: [
        "很久以前，在顿河彼岸，两位王子胡诺尔与马戈尔带着五十位伙伴出猎。他们看见一头白鹿，鹿角如银枝。鹿并不急逃——它在河边停一停，在彼岸等一等，他们一靠近又轻快小跑。他们就这样追了好几天。",
        "白鹿引他们穿过茂密的芦苇沼泽，来到迈奥提斯一带的开阔草原。它最终消失之处，兄弟二人看见阿兰人的女儿们在节庆上起舞。他们各选一位为妻，并把其余诸女带回送给五十位同伴。两支血脉由此繁衍：胡诺尔之系成为匈人，马戈尔之系成为马扎尔人。",
        "若干世代之后，马扎尔人西行抵达喀尔巴阡盆地。长老们说，他们仍在追那头白鹿——直到今日，白鹿仍是匈牙利最古老的象征之一。学校里的孩子还没记住具体年代，便先记住了这对兄弟的名字。",
      ]
    },
    themes: [text("founding chase", "追猎开族"), text("white stag", "白鹿"), text("migration", "迁徙")],
    tags: [text("hungarian", "匈牙利"), text("hunor", "胡诺尔"), text("magor", "马戈尔"), text("magyar", "马扎尔")],
    sourceUrl: "https://en.wikipedia.org/wiki/Hunor_and_Magor"
  },
  {
    id: "zana-albanian",
    title: text("Zana of the Albanian Mountains", "阿尔巴尼亚群山中的扎娜"),
    country: text("Albania", "阿尔巴尼亚"),
    region: text("Southern Europe", "南欧"),
    culture: text("Albanian", "阿尔巴尼亚"),
    latitude: 42.4297,
    longitude: 19.3289,
    category: "creature",
    summary: text(
      "On the steep ridges of the Accursed Mountains, the warrior-women called Zana sing in three voices, lift shepherds who keep faith, and turn to stone those who break their oaths.",
      "在“被诅咒的山脉”之上，被称作“扎娜”的战士仙女们以三重和声歌唱，把守誓的牧人高举，把背誓者化为石头。"
    ),
    background: text(
      "Zana (related to the Latin Diana) are mountain nymph-warriors of Albanian folklore, especially in the Kelmend and northern highlands.",
      "扎娜（与拉丁“狄安娜”有渊源）是阿尔巴尼亚民间的山间战士仙女，尤其盛行于凯尔门德等北部高地。"
    ),
    narrativeParagraphs: {
      en: [
        "In the Albanian highlands the Zana live where men cannot easily climb. They are tall women with long hair, armed with bows, sometimes seen washing in stone basins above the cloud line. Their voice has three layers at once—like a Mountain Iso-polyphony song—and the second voice carries the law.",
        "A Zana adopts shepherds and warriors who keep faith. If a man swears an oath on the besa, the highland code of honour, and keeps it, the Zana raises him in fight and gives his arrows true flight. If he breaks the oath, the same Zana strikes him with her glance. In some songs the broken-oath man stiffens on the spot and becomes one of the standing stones that line the passes.",
        "Mountain women sing the Zana into their lullabies to give daughters a model: walk straight, run faster than fear, and let no man tell you not to climb. In the bloody centuries of feud, the besa kept by the Zana was sometimes the only safe-conduct an enemy traveller could expect. Even now, the elders mutter, 'The Zana is watching,' when a young man boasts of breaking a promise.",
      ],
      zh: [
        "在阿尔巴尼亚高地，扎娜栖息于人难以攀登之处。她们是身材高挑、长发飘荡的女子，背着弓，有时被看见在云线之上的石盆里梳洗。她们的嗓音有三重叠加——像“山地复调”歌——其中第二声承载律法。",
        "扎娜会收下守信的牧人与战士。一个人若在“besa”——高地荣誉律——之上立誓并守住，扎娜便在战中助他，让他的箭命中目标。一旦背誓，同一位扎娜便用目光把他击倒。某些歌中，背誓者立时僵硬，化为山口边那些立石中的一块。",
        "山中的妇女把扎娜唱进摇篮曲里，让女儿们有一个模板：身正而行，比恐惧跑得更快，不许任何男人禁止你登山。在血腥的世仇世纪里，扎娜守护的“besa”有时是敌方旅人唯一的通行凭证。今天，年轻人若夸口要背弃承诺，长老仍会喃喃一句：“扎娜在看着呢。”",
      ]
    },
    themes: [text("mountain women", "山中之女"), text("besa oath", "besa 誓约"), text("petrification", "化石")],
    tags: [text("albanian", "阿尔巴尼亚"), text("zana", "扎娜"), text("accursed mountains", "被诅咒的山脉"), text("besa", "besa 誓约")],
    sourceUrl: "https://en.wikipedia.org/wiki/Zana_e_mal%C3%ABve"
  },
];

stories.forEach((story) => {
  if (story.imageUrl) {
    return;
  }
  if (generatedArtworkIds.has(story.id)) {
    story.imageUrl = `/story-artwork/generated/${story.id}.webp`;
  }
});
