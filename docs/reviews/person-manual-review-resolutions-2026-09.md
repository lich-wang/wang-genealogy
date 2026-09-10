# 人物审核待办复核与合并：2026-09

本文处理在线逐项审核（第 1–33 批）中留待人工复核的关系与重复人物。所有判断均以 CBDB 实时 API 为准，并以 Wikidata/维基百科交叉核对；关系端点一律按唯一 CBDB ID 或稳定 QID 对应，不按姓名猜测。

## 一、重复人物合并

按 `docs/DOMAIN_MODEL.md`，源文件设 `status: merged` 与 `merged_into`，目标文件继续承担稳定公开 ID。两例均为目标已存在完整亲属网络、来源仅为新导入的重复记录。

| 来源 | 目标 | 识别依据 |
| --- | --- | --- |
| 王越 `p_1CAD7Cg5ACndjPsTMwMUQ7`（CBDB:467429） | 王越 `p_SAKZSsVXkQRnwcLYqa1oYe`（Wikidata Q15898715） | 同为明代王越（1425/1426–1498/1499，直隶大名誉濬县，景泰二年進士）；CBDB 467429 的来源清单本身即指向 Wikidata Q15898715 与中文维基“王越 (明朝)”。目标已挂父王頤、祖父王子忠、曾祖王顯道与妻孫氏。 |
| 王智興 `p_1HLRDPP5GEjvYAj6jfrJ31`（CBDB:184939） | 王智兴 `p_6BymFd7sw6j7GAmg7erqPj`（Wikidata Q7967776，CBDB:92090） | CBDB 就同一唐代王智興（758–836，怀州）并存 92090、184939 两条权威记录，父同为王縉、子同为王晏平等；目标已挂父王缙与王晏平等诸子。 |

### 附：`scripts/duplicate-merges.json` 待执行计划复核

该计划中 13 条 `merge` 的来源文件在 D1→Git 迁移后已不存在（迁移时已按旧计划删除），无需再执行；`approve` 6 条经复核后处理如下（合并时同时删除重复关系边，避免源记录仍留在图谱中）：

| 来源 | 目标 | 识别依据 |
| --- | --- | --- |
| 王祥 `p_AYW3SKpFyWc6LQ4SMJ7Ln8`（Q45408733） | 王祥 `p_Xategg2TUsqjtsJGVyycV2`（Q710053） | Wikidata 父均为 Q22814786；来源无子、无条目，目标为《二十四孝》卧冰求鲤之王祥。 |
| 王睦 `p_9vPNkYXgE5ypKRpd8uYFJG`（Q100292568） | 王睦 `p_cstL9BTvsD4SQ3GTDYx54b`（Q26209973） | Wikidata 父均为 Q11573232，同一人的两条维基数据条目。 |
| 王衡 `p_kdP4rCdMUaqm8XsL572Ypm`（CBDB:124005，太仓） | 王衡 `p_nNCdrm1mnJ77Np28ADWXHR`（王锡爵之子） | 同为明 1561 年太仓王衡：父王锡爵、子王時敏；目标已挂同两端。 |

**驳回（不得合并）**

- 王融 `p_mxbESjeJMqx1uiQKJg1sN2`（Q16906208，太子中庶子，王奂长子）与 王融 `p_irTA1gthdaRFGCsbuP9hX4`（Q11573204，中书郎，王道琰子，竟陵八友）**不是同一人**：父系不同（王奂 vs 王道琰），生年与事迹均不同，中文维基分列《王融 (太子中庶子)》《王融 (中书郎)》两条。`approve` 中“王融 Q16906208 → Q11573204”一项错误，未执行。
  - 顺带发现：王诵 `p_rbZNYEH2GP46qNZ57sZo3K` 同时挂了以上两位王融为父；按《南齐书》，其父应为太子中庶子王融（`p_mxbESje`），指向中书郎王融的边属错挂，宜在后续单独 PR 中撤回。

**仍挂起**

- 王耆之 `p_B1Pwn6…`（Q22814794）与 `p_xgQoPQ…`（Q45408771）父同为王廙、子各为一条同名“王随之”，须先合并重复的王随之（其下另有重复子系），故本批不处理。
- 郁氏目标 Q65833786 在 Git 中不存在，来源已不在，视为已消解。
- 另经全库扫描发现以下同名同父重复尚未在既有计划中，属迁移前遗留，建议另立清理批次：王承（王暕子）、王丹（王立子）、王谭（王訢子）、王恕（王承裕父）、王炎午（王留孙父）。

## 二、底本标为“未知”的亲属关系（复核后采纳）

CBDB `PersonKinshipInfo` 的 `Source` 为“未知”时，先查两端是否为唯一 CBDB 记录互为父子，再核 Wikidata P22/P40 是否同向；两者一致或另有具名底本者予以采纳。

| 关系 | 依据 |
| --- | --- |
| 王季安 → 王孚 | CBDB 双向记录（王孚父王季安、王季安次子王孚），Wikidata Q45411710 P40 含 Q45411713、Q45411713 P22 为王季安；另《宋人傳記資料索引(電子版)》662 载王孚家世。 |
| 王璘 → 王仲方 | 《宋代墓誌輯釋·大宋贈秘書少監王府君（璘）墓誌銘并序》明列“曰仲方……五男”之一，王璘 PersonSource 亦同。 |
| 王審禮 → 王綯 | CBDB 双向记录，Wikidata Q45373566 P40 含 Q45363027、Q45363027 P22 为王审礼。 |
| 王綯 → 王炎 | CBDB 记录长子王炎，Wikidata Q45359795 P22 为王绹。 |
| 王劌 → 王恩 | CBDB 双向记录，Wikidata Q45401997 P40 含 Q45401998、Q45401998 P22 为王刿。 |
| 王恩 → 王惟正 | Wikidata Q45359773 P22 为王恩；CBDB 记录子王惟正。 |
| 王文彪 → 王廩（相隔 2 代） | CBDB 双向记录，底本《全元文》第 55 冊 page 588（王廩祖父王文彪、王文彪孙王廩）。 |

## 三、收养关系

| 关系 | 依据 |
| --- | --- |
| 王汶 → 王士麟（`kinship.adoptive_father_of`） | CBDB 王汶记“過繼的嗣子王士麟”，王士麟记“嗣父王汶”，底本均为《宋濂全集》1606。 |

## 四、配偶端点的建立

以下配偶／女性端点原不在库，现依 CBDB 记录新建最小人物记录（`name.primary` + `kinship.spouse_of` 双向），并在原人物文件补上对应配偶关系：

| 新建人物 | CBDB | 配偶（原人物） | 底本 |
| --- | --- | --- | --- |
| 徐氏 `p_ZiM4N5Gs41SCGQ3WKw5622` | 255124 | 王宥 `p_15Nh8Xnsw6Q2WxxXdtixbY` | 成化十七年進士登科錄 |
| 張氏 `p_5ZSVQNW7tLuMVH6CLhp3wL` | 38063 | 王景亮 `p_161GNVSM8DiRJnB3XBWjtc` | 宋人傳記資料索引(電子版) 1920 |
| 徐氏 `p_KwijCE3WHKKrFHTR2UVJLz` | 324277 | 王儒 `p_16nv23omiPWM5bXpCbD3EC` | 嘉靖三十八年進士登科錄 |
| 某氏 `p_uH3FpppC9zy3QgMqbzW5AL` | 134604 | 王良 `p_17LFViQqC7kDQcKC7Pxwru` | 明清婦女著作數據庫 MQWW #2497 |
| 錢氏 `p_QfJB6kHdWiEPHQYHnuHvBt` | 311209 | 王任用 `p_18GnPkpUEcGNgbFCDg5gah` | 嘉靖二十六年進士登科錄 |
| 葉慧光 `p_QXjebW9cakU2CLFMGsUv6M` | 56403 | 王進之 `p_19HhxBBa41LXR8XidmLDzC` | 明清婦女著作數據庫 MQWW #890 |
| 蕭氏 `p_QakmAcbWphZrG5JAN338dk` | 138303 | 王煇 `p_1BfrVwNo6KMxGngrdtMrQC` | 寶祐登科錄 |
| 張本嘉 `p_dL4jP8DHdSRLNu6vNpG9kU` | 119189 | 王鳳嫻 `p_18fFnjtnGXtoq2dgN1ume2` | 明清婦女著作數據庫 MQWW #3313 |
| 趙氏 `p_15zkLYv3q2p9LKJwXkpuD5` | 38089 + 691876 | 王貽永 `p_127UF7yvGqCLXapDi883c4` | 宋人傳記資料索引 1928;1929；鄭國懿順大長公主据新出宋代墓志碑刻輯錄 |

王貽永妻原列两项（趙氏 CBDB 38089、鄭國懿順大長公主 CBDB 691876）：趙氏即宋太宗之女（父趙炅），691876 记“太宗皇帝第六女”，二者同为王貽永之妻，经消歧后合为一条记录，主张同时保留两份 CBDB 来源。

## 五、撤回错挂关系

王诵 `p_rbZNYEH2GP46qNZ57sZo3K` 原同时挂太子中庶子王融 `p_mxbESjeJMqx1uiQKJg1sN2`（正确，Q16906208）与中书郎王融 `p_irTA1gthdaRFGCsbuP9hX4`（错误，Q11573204）为父。据中文维基《王融 (太子中庶子)》（王奂长子）与 Wikidata Q22079109 P22，已删除错挂主张 `c_SQoCUCiytwtShan4oQhPHJ`（两个文件同步移除）；Git 历史保留原记录可追溯。

## 六、仍未处理

- 王煇之父王知，CBDB 未能唯一定位仓库端点。
- 王耆之/王随之重复须先合并重复子系。
- 全库扫描发现迁移前遗留的同名同父重复：王承、王丹、王谭、王恕、王炎午。

机器可读记录见 `scripts/person-manual-review-resolutions-2026-09.json`。
