import type { Story } from "@/lib/story-types";

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
    id: "vasa-voyage",
    title: text("Vasa's Voyage Through the Underwater World", "瓦萨穿越水下世界"),
    country: text("Fiji", "斐济"),
    region: text("Melanesia", "美拉尼西亚"),
    culture: text("Fijian", "斐济文化"),
    latitude: -17.7134,
    longitude: 178.065,
    category: "folktale",
    summary: text(
      "A voyager enters the underwater world and returns with wonder, making the sea a road to danger and knowledge.",
      "一位远行者进入水下世界又带着惊奇归来，让大海成为通往危险与知识的道路。"
    ),
    background: text(
      "Fijian sea tales often treat reefs, spirits, and voyaging as connected fields where courage must respect hidden powers.",
      "斐济海洋故事常把礁石、灵力与航行视为相连领域，勇气必须敬畏隐秘力量。"
    ),
    themes: [text("voyage", "航行"), text("wonder", "惊奇"), text("respect", "敬畏")],
    tags: [text("sea", "海"), text("reef", "礁石"), text("spirits", "灵力"), text("return", "归来")],
    sourceUrl: "https://en.wikipedia.org/wiki/Fijian_mythology"
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
  }
];

type AdditionalStorySeed = readonly [
  id: string,
  titleEn: string,
  titleZh: string,
  countryEn: string,
  countryZh: string,
  regionEn: string,
  regionZh: string,
  latitude: number,
  longitude: number,
  category: Story["category"]
];

const additionalStorySeeds: AdditionalStorySeed[] = [
  [
    "nyame-sky-distance",
    "Nyame and the Distant Sky",
    "尼亚美与遥远天空",
    "Ghana",
    "加纳",
    "West Africa",
    "西非",
    6.7,
    -1.6,
    "myth"
  ],
  [
    "bagre-initiation",
    "The Bagre Initiation Story",
    "巴格雷入会故事",
    "Ghana",
    "加纳",
    "West Africa",
    "西非",
    10.1,
    -2.5,
    "religion"
  ],
  [
    "tano-river-spirit",
    "Tano the River Spirit",
    "塔诺河灵",
    "Ghana",
    "加纳",
    "West Africa",
    "西非",
    7.2,
    -2.1,
    "religion"
  ],
  [
    "mami-wata-bargain",
    "Mami Wata and the Bargain",
    "玛米瓦塔与契约",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    6.45,
    3.39,
    "creature"
  ],
  [
    "bayajidda-daura",
    "Bayajidda and the Daura Serpent",
    "巴亚吉达与道拉巨蛇",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    13.03,
    8.32,
    "history"
  ],
  [
    "queen-amina-zazzau",
    "Queen Amina of Zazzau",
    "扎扎乌的阿米娜女王",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    10.52,
    7.44,
    "history"
  ],
  [
    "moremi-ile-ife",
    "Moremi of Ile-Ife",
    "伊费的莫雷米",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    7.48,
    4.56,
    "history"
  ],
  [
    "oshun-and-drought",
    "Oshun and the Drought",
    "奥顺与旱灾",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    7.76,
    4.56,
    "religion"
  ],
  [
    "ogun-clears-road",
    "Ogun Clears the Road",
    "奥贡开路",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    7.16,
    3.35,
    "myth"
  ],
  [
    "shango-thunder-stones",
    "Shango and the Thunderstones",
    "尚戈与雷石",
    "Nigeria",
    "尼日利亚",
    "West Africa",
    "西非",
    8.13,
    4.24,
    "religion"
  ],
  [
    "mwindo-underworld",
    "Mwindo in the Underworld",
    "姆温多下冥界",
    "Democratic Republic of the Congo",
    "刚果民主共和国",
    "Central Africa",
    "中非",
    -1.67,
    28.98,
    "epic"
  ],
  [
    "lianja-hero-cycle",
    "Lianja the River Hero",
    "河流英雄利安贾",
    "Democratic Republic of the Congo",
    "刚果民主共和国",
    "Central Africa",
    "中非",
    0.05,
    18.26,
    "epic"
  ],
  [
    "mbombo-creation",
    "Mbombo Creates the World",
    "姆邦博创世",
    "Democratic Republic of the Congo",
    "刚果民主共和国",
    "Central Africa",
    "中非",
    -4.32,
    21.02,
    "myth"
  ],
  [
    "kalunga-boundary",
    "Kalunga and the Boundary Sea",
    "卡伦加与边界之海",
    "Angola",
    "安哥拉",
    "Central Africa",
    "中非",
    -8.84,
    13.23,
    "religion"
  ],
  [
    "nkisi-nkondi-oath",
    "Nkisi Nkondi and the Oath",
    "恩基西恩孔迪与誓约",
    "Democratic Republic of the Congo",
    "刚果民主共和国",
    "Central Africa",
    "中非",
    -5.85,
    13.05,
    "religion"
  ],
  [
    "kintu-and-nambi-journey",
    "Kintu and Nambi Journey to Earth",
    "金图与南比来到人间",
    "Uganda",
    "乌干达",
    "East Africa",
    "东非",
    0.32,
    32.58,
    "myth"
  ],
  [
    "nyikang-shilluk-king",
    "Nyikang the Shilluk King",
    "希卢克王尼康",
    "South Sudan",
    "南苏丹",
    "East Africa",
    "东非",
    9.54,
    31.66,
    "history"
  ],
  [
    "menelik-ark",
    "Menelik and the Ark",
    "孟尼利克与约柜",
    "Ethiopia",
    "埃塞俄比亚",
    "East Africa",
    "东非",
    9.03,
    38.74,
    "history"
  ],
  [
    "queen-gudit",
    "Queen Gudit the Destroyer",
    "毁灭者古迪特女王",
    "Ethiopia",
    "埃塞俄比亚",
    "East Africa",
    "东非",
    12.6,
    37.47,
    "history"
  ],
  [
    "fumo-liyongo",
    "Fumo Liyongo the Archer",
    "弓手富莫利永戈",
    "Kenya",
    "肯尼亚",
    "East Africa",
    "东非",
    -2.27,
    40.9,
    "epic"
  ],
  [
    "kaggen-eland",
    "Kaggen and the Eland",
    "卡根与大羚羊",
    "South Africa",
    "南非",
    "Southern Africa",
    "南部非洲",
    -30.56,
    22.94,
    "myth"
  ],
  [
    "mantis-and-moon",
    "Mantis and the Moon",
    "螳螂与月亮",
    "South Africa",
    "南非",
    "Southern Africa",
    "南部非洲",
    -32,
    21,
    "folktale"
  ],
  [
    "modjadji-rain-queen",
    "Modjadji the Rain Queen",
    "雨女王莫贾吉",
    "South Africa",
    "南非",
    "Southern Africa",
    "南部非洲",
    -23.83,
    30.16,
    "history"
  ],
  [
    "tokoloshe-night",
    "Tokoloshe in the Night",
    "夜中的托科洛希",
    "South Africa",
    "南非",
    "Southern Africa",
    "南部非洲",
    -29.86,
    31.03,
    "creature"
  ],
  [
    "thakane-ogre",
    "Thakane and the Ogre",
    "塔卡内与食人巨人",
    "Lesotho",
    "莱索托",
    "Southern Africa",
    "南部非洲",
    -29.31,
    27.48,
    "folktale"
  ],
  [
    "ditaolane-swallower",
    "Ditaolane the Swallower",
    "吞噬者迪塔奥拉内",
    "Lesotho",
    "莱索托",
    "Southern Africa",
    "南部非洲",
    -29.61,
    28.23,
    "creature"
  ],
  [
    "savitri-satyavan",
    "Savitri and Satyavan",
    "萨维特丽与萨蒂亚梵",
    "India",
    "印度",
    "South Asia",
    "南亚",
    28.61,
    77.21,
    "religion"
  ],
  [
    "nala-damayanti",
    "Nala and Damayanti",
    "那罗与达摩衍蒂",
    "India",
    "印度",
    "South Asia",
    "南亚",
    21.15,
    79.09,
    "epic"
  ],
  [
    "shakuntala-ring",
    "Shakuntala and the Ring",
    "沙恭达罗与戒指",
    "India",
    "印度",
    "South Asia",
    "南亚",
    23.18,
    79.99,
    "history"
  ],
  [
    "manu-flood",
    "Manu and the Flood Fish",
    "摩奴与洪水之鱼",
    "India",
    "印度",
    "South Asia",
    "南亚",
    25.32,
    82.97,
    "myth"
  ],
  [
    "markandeya-yama",
    "Markandeya Defies Yama",
    "马尔坎德亚抗拒阎摩",
    "India",
    "印度",
    "South Asia",
    "南亚",
    13.08,
    80.27,
    "religion"
  ],
  [
    "samudra-manthan",
    "The Churning of the Ocean",
    "搅乳海",
    "India",
    "印度",
    "South Asia",
    "南亚",
    19.08,
    72.88,
    "myth"
  ],
  [
    "arjuna-kirata",
    "Arjuna and the Kirata",
    "阿周那与猎人湿婆",
    "India",
    "印度",
    "South Asia",
    "南亚",
    30.73,
    79.07,
    "epic"
  ],
  [
    "abhimanyu-chakravyuha",
    "Abhimanyu in the Chakravyuha",
    "阿比曼纽入轮阵",
    "India",
    "印度",
    "South Asia",
    "南亚",
    29.97,
    76.84,
    "epic"
  ],
  [
    "sita-fire-ordeal",
    "Sita and the Fire Ordeal",
    "悉多与火焰考验",
    "India",
    "印度",
    "South Asia",
    "南亚",
    26.85,
    80.95,
    "epic"
  ],
  [
    "prahlada-narasimha",
    "Prahlada and Narasimha",
    "普拉赫拉达与人狮",
    "India",
    "印度",
    "South Asia",
    "南亚",
    17.39,
    78.49,
    "religion"
  ],
  [
    "shirin-farhad",
    "Shirin and Farhad",
    "希琳与法尔哈德",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    35.69,
    51.39,
    "folktale"
  ],
  [
    "leyli-majnun",
    "Layla and Majnun",
    "莱拉与马杰农",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    32.65,
    51.67,
    "folktale"
  ],
  [
    "simurgh-zal",
    "The Simurgh Raises Zal",
    "神鸟西摩格养育扎尔",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    36.26,
    59.62,
    "epic"
  ],
  [
    "zahhak-serpents",
    "Zahhak and the Serpents",
    "蛇肩扎哈克",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    33.64,
    46.42,
    "epic"
  ],
  [
    "kaveh-blacksmith",
    "Kaveh the Blacksmith",
    "铁匠卡维",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    35.69,
    51.39,
    "history"
  ],
  [
    "gilaki-mirza",
    "Mirza Kuchak Khan in Legend",
    "传说中的米尔扎库恰克汗",
    "Iran",
    "伊朗",
    "Western Asia",
    "西亚",
    37.28,
    49.59,
    "history"
  ],
  [
    "dede-korkut-bamsi",
    "Bamsi Beyrek of Dede Korkut",
    "《科尔库特祖父》中的班姆西",
    "Turkey",
    "土耳其",
    "Western Asia",
    "西亚",
    39.93,
    32.86,
    "epic"
  ],
  [
    "koroglu-bandit-bard",
    "Koroglu the Bandit Bard",
    "侠盗歌手柯罗格鲁",
    "Azerbaijan",
    "阿塞拜疆",
    "Western Asia",
    "西亚",
    40.41,
    49.87,
    "epic"
  ],
  [
    "alpanmysh",
    "Alpamysh the Hero",
    "英雄阿勒帕米什",
    "Uzbekistan",
    "乌兹别克斯坦",
    "Central Asia",
    "中亚",
    41.31,
    69.24,
    "epic"
  ],
  [
    "er-toshtuk-underworld",
    "Er Toshtuk Below the Earth",
    "额尔托什图克下地底",
    "Kyrgyzstan",
    "吉尔吉斯斯坦",
    "Central Asia",
    "中亚",
    42.87,
    74.59,
    "epic"
  ],
  [
    "jacheongbi-grain",
    "Jacheongbi Brings Grain",
    "自清妃带来谷物",
    "South Korea",
    "韩国",
    "East Asia",
    "东亚",
    33.5,
    126.53,
    "religion"
  ],
  [
    "chasa-bonpuli",
    "Chasa Bonpuli and the Death Messengers",
    "差使本解与死者使者",
    "South Korea",
    "韩国",
    "East Asia",
    "东亚",
    33.38,
    126.55,
    "religion"
  ],
  [
    "nyi-roro-kidul",
    "Nyi Roro Kidul of the Southern Sea",
    "南海女王妮罗罗基杜尔",
    "Indonesia",
    "印度尼西亚",
    "Southeast Asia",
    "东南亚",
    -8.02,
    110.32,
    "religion"
  ],
  [
    "dewi-sri-rice",
    "Dewi Sri and the Rice Life",
    "稻米女神德维斯丽",
    "Indonesia",
    "印度尼西亚",
    "Southeast Asia",
    "东南亚",
    -7.8,
    110.37,
    "religion"
  ],
  [
    "mahsuri-langkawi",
    "Mahsuri of Langkawi",
    "兰卡威的玛苏丽",
    "Malaysia",
    "马来西亚",
    "Southeast Asia",
    "东南亚",
    6.35,
    99.8,
    "history"
  ],
  [
    "badang-strongman",
    "Badang the Strongman",
    "大力士巴当",
    "Singapore",
    "新加坡",
    "Southeast Asia",
    "东南亚",
    1.29,
    103.85,
    "folktale"
  ],
  [
    "orpheus-eurydice",
    "Orpheus and Eurydice",
    "俄耳甫斯与欧律狄刻",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    40.64,
    22.94,
    "myth"
  ],
  [
    "theseus-minotaur",
    "Theseus and the Minotaur",
    "忒修斯与米诺陶",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    35.24,
    24.81,
    "myth"
  ],
  [
    "perseus-medusa",
    "Perseus and Medusa",
    "珀耳修斯与美杜莎",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    37.98,
    23.72,
    "myth"
  ],
  [
    "phaethon-sun-chariot",
    "Phaethon and the Sun Chariot",
    "法厄同与太阳车",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    38.25,
    21.73,
    "myth"
  ],
  [
    "baucis-philemon",
    "Baucis and Philemon",
    "鲍喀斯与腓利门",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    39,
    22,
    "folktale"
  ],
  [
    "aeneas-latium",
    "Aeneas Reaches Latium",
    "埃涅阿斯抵达拉提乌姆",
    "Italy",
    "意大利",
    "Southern Europe",
    "南欧",
    41.9,
    12.5,
    "epic"
  ],
  [
    "romulus-remus",
    "Romulus and Remus",
    "罗慕路斯与雷穆斯",
    "Italy",
    "意大利",
    "Southern Europe",
    "南欧",
    41.89,
    12.49,
    "history"
  ],
  [
    "europa-bull",
    "Europa and the Bull",
    "欧罗巴与公牛",
    "Greece",
    "希腊",
    "Southern Europe",
    "南欧",
    35.34,
    25.13,
    "myth"
  ],
  [
    "selkie-bride",
    "The Selkie Bride",
    "海豹女新娘",
    "Scotland",
    "苏格兰",
    "Northern Europe",
    "北欧",
    58.98,
    -2.96,
    "creature"
  ],
  [
    "tam-lin",
    "Tam Lin in Carterhaugh",
    "卡特霍的谭林",
    "Scotland",
    "苏格兰",
    "Northern Europe",
    "北欧",
    55.49,
    -2.79,
    "folktale"
  ],
  [
    "deirdre-sorrows",
    "Deirdre of the Sorrows",
    "悲伤的迪尔德丽",
    "Ireland",
    "爱尔兰",
    "Northern Europe",
    "北欧",
    54.6,
    -5.93,
    "epic"
  ],
  [
    "finn-giants-causeway",
    "Finn and the Giant's Causeway",
    "芬恩与巨人堤道",
    "Ireland",
    "爱尔兰",
    "Northern Europe",
    "北欧",
    55.24,
    -6.51,
    "folktale"
  ],
  [
    "pwyll-annwn",
    "Pwyll in Annwn",
    "安努恩中的普伊尔",
    "Wales",
    "威尔士",
    "Western Europe",
    "西欧",
    51.88,
    -4.3,
    "epic"
  ],
  [
    "blodeuwedd",
    "Blodeuwedd the Flower Woman",
    "花之女布洛代韦兹",
    "Wales",
    "威尔士",
    "Western Europe",
    "西欧",
    52.92,
    -4.13,
    "myth"
  ],
  [
    "cantre-gwaelod",
    "Cantre'r Gwaelod",
    "沉没的坎特雷尔瓜埃洛德",
    "Wales",
    "威尔士",
    "Western Europe",
    "西欧",
    52.42,
    -4.08,
    "history"
  ],
  [
    "sampo-forging",
    "The Forging of the Sampo",
    "锻造桑波",
    "Finland",
    "芬兰",
    "Northern Europe",
    "北欧",
    61.5,
    23.76,
    "epic"
  ],
  [
    "vainamoinen-singing",
    "Vainamoinen's Singing",
    "万奈摩宁的歌唱",
    "Finland",
    "芬兰",
    "Northern Europe",
    "北欧",
    62.24,
    25.75,
    "epic"
  ],
  [
    "kullervo-tragedy",
    "Kullervo's Tragedy",
    "库勒沃的悲剧",
    "Finland",
    "芬兰",
    "Northern Europe",
    "北欧",
    61,
    24.5,
    "epic"
  ],
  [
    "melusine",
    "Melusine of the Spring",
    "泉边的梅吕西娜",
    "France",
    "法国",
    "Western Europe",
    "西欧",
    46.58,
    0.34,
    "creature"
  ],
  [
    "roland-roncesvalles",
    "Roland at Roncevaux",
    "龙塞斯瓦耶斯的罗兰",
    "France",
    "法国",
    "Western Europe",
    "西欧",
    43.01,
    -1.3,
    "epic"
  ],
  [
    "el-cid-exile",
    "El Cid in Exile",
    "流放中的熙德",
    "Spain",
    "西班牙",
    "Southern Europe",
    "南欧",
    41.65,
    -0.88,
    "epic"
  ],
  [
    "don-juan",
    "Don Juan the Seducer",
    "诱惑者唐璜",
    "Spain",
    "西班牙",
    "Southern Europe",
    "南欧",
    37.39,
    -5.99,
    "folktale"
  ],
  [
    "pied-piper-hamelin",
    "The Pied Piper of Hamelin",
    "哈默尔恩的花衣吹笛人",
    "Germany",
    "德国",
    "Central Europe",
    "中欧",
    52.1,
    9.36,
    "folktale"
  ],
  [
    "tannhauser-venusberg",
    "Tannhauser in Venusberg",
    "维纳斯山中的唐怀瑟",
    "Germany",
    "德国",
    "Central Europe",
    "中欧",
    50.97,
    10.31,
    "folktale"
  ],
  [
    "flying-dutchman",
    "The Flying Dutchman",
    "飞翔的荷兰人",
    "Netherlands",
    "荷兰",
    "Western Europe",
    "西欧",
    52.37,
    4.9,
    "creature"
  ],
  [
    "kraken-northern-sea",
    "The Kraken of the Northern Sea",
    "北海巨妖克拉肯",
    "Norway",
    "挪威",
    "Northern Europe",
    "北欧",
    68.44,
    15.42,
    "creature"
  ],
  [
    "raven-steals-light",
    "Raven Steals the Light",
    "渡鸦盗来光明",
    "Canada",
    "加拿大",
    "North America",
    "北美洲",
    53.25,
    -132.08,
    "myth"
  ],
  [
    "sedna-sea-mother",
    "Sedna the Sea Mother",
    "海母塞德娜",
    "Canada",
    "加拿大",
    "Arctic North America",
    "北极北美",
    63.75,
    -68.52,
    "religion"
  ],
  [
    "nanabozho-earth-diver",
    "Nanabozho and the Earth Diver",
    "纳纳博佐与潜水取土",
    "Canada",
    "加拿大",
    "North America",
    "北美洲",
    46.49,
    -84.35,
    "myth"
  ],
  [
    "white-buffalo-calf-woman",
    "White Buffalo Calf Woman",
    "白牛犊女",
    "United States",
    "美国",
    "North America",
    "北美洲",
    43.88,
    -102.36,
    "religion"
  ],
  [
    "kokopelli-flute",
    "Kokopelli the Flute Player",
    "吹笛者科科佩利",
    "United States",
    "美国",
    "North America",
    "北美洲",
    35.69,
    -105.94,
    "religion"
  ],
  [
    "piasa-bird",
    "The Piasa Bird",
    "皮亚萨鸟",
    "United States",
    "美国",
    "North America",
    "北美洲",
    38.89,
    -90.18,
    "creature"
  ],
  [
    "paul-bunyan",
    "Paul Bunyan and the Logging Camp",
    "保罗班扬与伐木营",
    "United States",
    "美国",
    "North America",
    "北美洲",
    46.79,
    -92.1,
    "folktale"
  ],
  [
    "pecos-bill",
    "Pecos Bill Rides the Cyclone",
    "佩科斯比尔骑旋风",
    "United States",
    "美国",
    "North America",
    "北美洲",
    31.76,
    -103.5,
    "folktale"
  ],
  [
    "johnny-appleseed",
    "Johnny Appleseed",
    "苹果籽约翰尼",
    "United States",
    "美国",
    "North America",
    "北美洲",
    40.8,
    -82.97,
    "history"
  ],
  [
    "la-llorona-river",
    "La Llorona by the River",
    "河边的哭泣女",
    "Mexico",
    "墨西哥",
    "Mesoamerica",
    "中部美洲",
    19.43,
    -99.13,
    "creature"
  ],
  [
    "quinto-sol",
    "The Birth of the Fifth Sun",
    "第五太阳诞生",
    "Mexico",
    "墨西哥",
    "Mesoamerica",
    "中部美洲",
    19.69,
    -98.84,
    "myth"
  ],
  [
    "princess-ixquic",
    "Ixquic and the Calabash Tree",
    "伊什基克与葫芦树",
    "Guatemala",
    "危地马拉",
    "Mesoamerica",
    "中部美洲",
    14.84,
    -91.52,
    "myth"
  ],
  [
    "siuanaba",
    "La Siguanaba at the Water",
    "水边的西瓜纳巴",
    "El Salvador",
    "萨尔瓦多",
    "Central America",
    "中美洲",
    13.69,
    -89.19,
    "creature"
  ],
  [
    "sisimito",
    "El Sisimito in the Hills",
    "山中的西西米托",
    "Honduras",
    "洪都拉斯",
    "Central America",
    "中美洲",
    14.08,
    -87.21,
    "creature"
  ],
  [
    "iara-river",
    "Iara of the River",
    "河中伊阿拉",
    "Brazil",
    "巴西",
    "South America",
    "南美洲",
    -3.12,
    -60.02,
    "creature"
  ],
  [
    "curupira-forest",
    "Curupira Guards the Forest",
    "库鲁皮拉守护森林",
    "Brazil",
    "巴西",
    "South America",
    "南美洲",
    -3.47,
    -62.21,
    "creature"
  ],
  [
    "saci-whirlwind",
    "Saci in the Whirlwind",
    "旋风中的萨西",
    "Brazil",
    "巴西",
    "South America",
    "南美洲",
    -23.55,
    -46.63,
    "folktale"
  ],
  [
    "boitata-fire-serpent",
    "Boitata the Fire Serpent",
    "火蛇博伊塔塔",
    "Brazil",
    "巴西",
    "South America",
    "南美洲",
    -15.78,
    -47.93,
    "creature"
  ],
  [
    "mapinguari",
    "Mapinguari in the Forest",
    "森林中的马平瓜里",
    "Brazil",
    "巴西",
    "South America",
    "南美洲",
    -8.76,
    -63.9,
    "creature"
  ],
  [
    "caleuche-ghost-ship",
    "The Caleuche Ghost Ship",
    "幽灵船卡莱乌切",
    "Chile",
    "智利",
    "South America",
    "南美洲",
    -42.62,
    -73.77,
    "creature"
  ],
  [
    "trauco-forest",
    "El Trauco of Chiloe",
    "奇洛埃的特劳科",
    "Chile",
    "智利",
    "South America",
    "南美洲",
    -42.5,
    -73.8,
    "creature"
  ],
  [
    "pombero-night",
    "Pombero at Night",
    "夜中的蓬贝罗",
    "Paraguay",
    "巴拉圭",
    "South America",
    "南美洲",
    -25.28,
    -57.63,
    "creature"
  ],
  [
    "yacumama",
    "Yacumama the Water Mother",
    "水母亚库玛玛",
    "Peru",
    "秘鲁",
    "South America",
    "南美洲",
    -3.75,
    -73.25,
    "creature"
  ],
  [
    "tunupa-salt",
    "Tunupa and the Salt Flats",
    "图努帕与盐原",
    "Bolivia",
    "玻利维亚",
    "South America",
    "南美洲",
    -20.13,
    -67.49,
    "myth"
  ],
  [
    "ai-apaec",
    "Ai Apaec the Decapitator",
    "断首者艾阿帕埃克",
    "Peru",
    "秘鲁",
    "South America",
    "南美洲",
    -8.11,
    -79.03,
    "religion"
  ],
  [
    "tiddalik-frog",
    "Tiddalik Drinks the Water",
    "蒂达利克喝光水",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -25.27,
    133.78,
    "folktale"
  ],
  [
    "bunjil-eaglehawk",
    "Bunjil the Eaglehawk",
    "鹰隼本吉尔",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -37.81,
    144.96,
    "myth"
  ],
  [
    "baiame-sky-father",
    "Baiame the Sky Father",
    "天父拜亚米",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -33.86,
    148.69,
    "religion"
  ],
  [
    "wawalag-sisters",
    "The Wawalag Sisters",
    "瓦瓦拉格姐妹",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -12.19,
    136.78,
    "religion"
  ],
  [
    "yhi-sun-woman",
    "Yhi the Sun Woman",
    "太阳女子伊希",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -30.32,
    149.78,
    "myth"
  ],
  [
    "seven-sisters-dreaming",
    "Seven Sisters Dreaming",
    "七姐妹梦行",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -25.34,
    131.04,
    "myth"
  ],
  [
    "dirawong-rainbow-snake",
    "Dirawong the Rainbow Snake",
    "彩虹蛇迪拉旺",
    "Australia",
    "澳大利亚",
    "Oceania",
    "大洋洲",
    -28.87,
    153.56,
    "religion"
  ],
  [
    "paikea-whale-rider",
    "Paikea the Whale Rider",
    "鲸骑者派凯亚",
    "New Zealand",
    "新西兰",
    "Oceania",
    "大洋洲",
    -37.63,
    178.35,
    "history"
  ],
  [
    "kupe-discovery",
    "Kupe Discovers Aotearoa",
    "库佩发现奥特亚罗瓦",
    "New Zealand",
    "新西兰",
    "Oceania",
    "大洋洲",
    -41.29,
    174.78,
    "history"
  ],
  [
    "rata-canoe",
    "Rata and the Canoe",
    "拉塔与独木舟",
    "New Zealand",
    "新西兰",
    "Oceania",
    "大洋洲",
    -17.53,
    -149.57,
    "folktale"
  ],
  [
    "tawhaki-climbs-sky",
    "Tawhaki Climbs to the Sky",
    "塔法基攀上天空",
    "New Zealand",
    "新西兰",
    "Oceania",
    "大洋洲",
    -38.14,
    176.25,
    "myth"
  ],
  [
    "hina-eel",
    "Hina and the Eel",
    "希娜与鳗鱼",
    "Samoa",
    "萨摩亚",
    "Oceania",
    "大洋洲",
    -13.83,
    -171.76,
    "myth"
  ],
  [
    "sina-eel",
    "Sina and the Eel",
    "西娜与鳗鱼",
    "Samoa",
    "萨摩亚",
    "Oceania",
    "大洋洲",
    -13.85,
    -171.75,
    "folktale"
  ],
  [
    "nafanuas-war",
    "Nafanua Goes to War",
    "纳法努阿出征",
    "Samoa",
    "萨摩亚",
    "Oceania",
    "大洋洲",
    -13.62,
    -172.63,
    "history"
  ],
  [
    "tagaloa-creation",
    "Tagaloa Creates the Islands",
    "塔加洛阿创造群岛",
    "Samoa",
    "萨摩亚",
    "Oceania",
    "大洋洲",
    -13.76,
    -172.1,
    "myth"
  ],
  [
    "taaroa-shell",
    "Ta'aroa in the Shell",
    "贝壳中的塔阿罗阿",
    "French Polynesia",
    "法属波利尼西亚",
    "Oceania",
    "大洋洲",
    -17.65,
    -149.43,
    "myth"
  ],
  [
    "hiro-voyager",
    "Hiro the Voyager",
    "航海者希罗",
    "French Polynesia",
    "法属波利尼西亚",
    "Oceania",
    "大洋洲",
    -16.5,
    -151.74,
    "epic"
  ],
  [
    "rona-moon",
    "Rona and the Moon",
    "罗娜与月亮",
    "New Zealand",
    "新西兰",
    "Oceania",
    "大洋洲",
    -39.49,
    176.92,
    "myth"
  ],
  [
    "dakuwaqa-shark",
    "Dakuwaqa the Shark God",
    "鲨神达库瓦卡",
    "Fiji",
    "斐济",
    "Oceania",
    "大洋洲",
    -17.71,
    178.07,
    "religion"
  ],
  [
    "ratumaibulu",
    "Ratumaibulu and the Breadfruit",
    "拉图迈布卢与面包果",
    "Fiji",
    "斐济",
    "Oceania",
    "大洋洲",
    -17.8,
    178.15,
    "religion"
  ],
  [
    "qat-creation",
    "Qat Shapes the World",
    "卡特塑造世界",
    "Vanuatu",
    "瓦努阿图",
    "Oceania",
    "大洋洲",
    -13.65,
    167.71,
    "myth"
  ],
  [
    "tagaro-melanesia",
    "Tagaro and the Ordered World",
    "塔加罗与有序世界",
    "Vanuatu",
    "瓦努阿图",
    "Oceania",
    "大洋洲",
    -15.38,
    166.96,
    "myth"
  ],
  [
    "nareau-spider",
    "Nareau the Spider Creator",
    "蜘蛛创世者纳雷奥",
    "Kiribati",
    "基里巴斯",
    "Oceania",
    "大洋洲",
    1.45,
    173.03,
    "myth"
  ],
  [
    "areop-enap",
    "Areop-Enap and the Clam",
    "阿雷奥埃纳普与蛤蜊",
    "Nauru",
    "瑙鲁",
    "Oceania",
    "大洋洲",
    -0.52,
    166.93,
    "myth"
  ],
  [
    "aluluei-navigation",
    "Aluluei Teaches Navigation",
    "阿卢莱教导航",
    "Micronesia",
    "密克罗尼西亚",
    "Oceania",
    "大洋洲",
    7.42,
    151.78,
    "religion"
  ]
];

const categoryStoryLanguage: Record<Story["category"], { en: string; zh: string; tags: [string, string, string, string]; tagsZh: [string, string, string, string] }> = {
  myth: { en: "myth", zh: "神话", tags: ["origin", "cosmos", "transformation", "sacred landscape"], tagsZh: ["起源", "宇宙", "变化", "神圣地貌"] },
  folktale: { en: "folktale", zh: "民间故事", tags: ["wit", "choice", "journey", "community memory"], tagsZh: ["机智", "选择", "旅程", "社群记忆"] },
  epic: { en: "epic", zh: "史诗", tags: ["hero", "trial", "honor", "journey"], tagsZh: ["英雄", "试炼", "荣誉", "旅程"] },
  creature: { en: "creature legend", zh: "异兽传说", tags: ["warning", "boundary", "fear", "night"], tagsZh: ["警示", "边界", "恐惧", "夜晚"] },
  religion: { en: "sacred story", zh: "神圣故事", tags: ["ritual", "balance", "offering", "sacred duty"], tagsZh: ["仪式", "平衡", "供奉", "神圣职责"] },
  history: { en: "legendary history", zh: "传奇历史", tags: ["memory", "lineage", "place", "inheritance"], tagsZh: ["记忆", "血统", "地点", "传承"] }
};

const additionalStoryNarratives = {
  "quinto-sol": {
    en: [
      "In Aztec tradition, four earlier suns have already perished, and the world has fallen into darkness again and again. The gods gather at Teotihuacan to decide who will become the new sun. The proud and wealthy Tecuciztecatl and the scarred Nanahuatzin stand before a sacrificial fire, knowing that only self-offering can restart the cosmos. What is at stake is not personal honor alone, but whether a whole age can begin again.",
      "When the moment comes to leap, Tecuciztecatl hesitates again and again, but Nanahuatzin closes his eyes and throws himself into the flames. He rises from the fire as the new sun, and the other god follows too late, becoming the moon. Yet the sun remains fixed in the sky, so light returns without time truly moving forward. The gods can see radiance above them, but the day has not yet learned how to move.",
      "To set the Fifth Sun in motion, the other gods also give up their lives, and the wind god drives sun and moon across the heavens. Only then does the present age begin, placing human life inside a cosmos sustained by sacrifice. Human existence is thereafter understood in relation to that first divine offering. For that reason Teotihuacan is remembered not just as an ancient city, but as the sacred landscape where this era first began to move."
    ],
    zh: [
      "在阿兹特克传统里，前四个太阳都已经毁灭，世界一次次陷入黑暗。诸神于是聚到特奥蒂瓦坎，商议谁来成为新的太阳。富有而自负的特库西斯特卡特尔与满身疮痍的纳纳瓦钦都被推到火堆前，准备以自我焚献换来新天体。这场抉择决定的不是一位神的荣耀，而是整个时代能否重新开始。",
      "轮到纵身入火时，特库西斯特卡特尔一连退缩了几次，纳纳瓦钦却先闭眼跳进烈焰。火光中他升起为新的太阳，迟一步跃入的另一位神随后化成月亮。可太阳高悬之后仍旧不动，天地虽然重新发亮，时间却没有真正开始流转。众神眼前已经有了光，却还没有迎来真正运转起来的白昼。",
      "为了让第五太阳走上天空，诸神又接连献出自己的生命，风神再把太阳与月亮吹送上路。于是今天这个时代才真正开始，人世也被放进必须以祭献维系的宇宙秩序里。此后的人类生存，也被理解为与这场宇宙性的献祭彼此呼应。墨西哥高原上的特奥蒂瓦坎因此不只是古城遗址，也被记作新太阳起行的神圣地点。"
    ]
  }
};

const usedAdditionalStoryIds = new Set(stories.map((story) => story.id));

function getAdditionalStoryId(baseId: string) {
  let id = baseId;
  let suffix = 2;

  while (usedAdditionalStoryIds.has(id)) {
    id = `${baseId}-atlas${suffix === 2 ? "" : `-${suffix}`}`;
    suffix += 1;
  }

  usedAdditionalStoryIds.add(id);
  return id;
}

stories.push(
  ...additionalStorySeeds.map(([id, titleEn, titleZh, countryEn, countryZh, regionEn, regionZh, latitude, longitude, category]) => {
    const language = categoryStoryLanguage[category];
    const cultureEn = `${countryEn} regional tradition`;
    const cultureZh = `${countryZh}地方传统`;

    return {
      id: getAdditionalStoryId(id),
      title: text(titleEn, titleZh),
      country: text(countryEn, countryZh),
      region: text(regionEn, regionZh),
      culture: text(cultureEn, cultureZh),
      latitude,
      longitude,
      category,
      summary: text(
        `${titleEn} adds a ${language.en} from ${countryEn}, carrying local memory through ${language.tags[0]}, ${language.tags[1]}, and ${language.tags[2]}.`,
        `${titleZh}补入一则来自${countryZh}的${language.zh}，以${language.tagsZh[0]}、${language.tagsZh[1]}与${language.tagsZh[2]}承载地方记忆。`
      ),
      background: text(
        `This ${regionEn} entry broadens the atlas with ${cultureEn}, keeping ${language.tags[3]} tied to place, performance, and inherited imagination.`,
        `这条${regionZh}条目以${cultureZh}拓展故事地图，让${language.tagsZh[3]}与地点、讲述和传承想象相连。`
      ),
      narrativeParagraphs: id === "quinto-sol" ? additionalStoryNarratives["quinto-sol"] : undefined,
      themes: language.tags.slice(0, 3).map((tag, index) => text(tag, language.tagsZh[index] ?? tag)),
      tags: language.tags.map((tag, index) => text(tag, language.tagsZh[index] ?? tag))
    } satisfies Story;
  })
);

stories.forEach((story) => {
  story.imageUrl ??= `/story-artwork/generated/${story.id}.webp`;
});
