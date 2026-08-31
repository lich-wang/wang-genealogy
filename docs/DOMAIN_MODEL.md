# 领域与数据模型

## 一、建模原则

数据库不把某个可争议值直接视为最终事实。`Person` 只是人物身份锚点，姓名、生卒、籍贯和亲属关系均由 `Claim` 表达。

```text
User ──< Contribution
             │
Person ──< Claim ──< ClaimRevision
  │           │
  │           └──< ClaimSource >── Source
  │
  ├──< PersonMaintainer >── User
  └──< PersonMergeProposal
```

## 二、主要实体

### User（贡献者账号）

用户账号只代表网站贡献者，不代表族谱人物。

建议字段：

- `id`
- `display_name`
- `email_hash` 或外部登录标识
- `role`
- `status`
- `created_at`

### Person（历史人物锚点）

建议字段：

- `id`：不可变公开 ID；
- `status`：`candidate`、`active`、`merged`、`suppressed`；
- `merged_into_person_id`：软合并目标；
- `created_by_user_id`；
- `created_at`、`updated_at`；
- `current_revision`：用于并发控制。

`Person` 不直接存放“最终姓名”“最终出生年”等可争议信息。页面上的摘要由当前已采纳主张计算生成。

### Claim（资料主张）

统一表达人物属性和人物关系。

建议字段：

- `id`
- `subject_person_id`
- `claim_kind`：`property` 或 `relationship`
- `predicate`
- `object_person_id`：关系主张使用；
- `value_json`：属性主张使用；
- `status`：`proposed`、`accepted`、`disputed`、`retracted`、`superseded`；
- `confidence`：`unknown`、`low`、`medium`、`high`；
- `created_by_user_id`
- `created_at`、`updated_at`
- `current_revision`

属性谓词示例：

- `name.primary`
- `name.alias`
- `name.courtesy`
- `name.pseudonym`
- `birth.date`
- `death.date`
- `place.origin`
- `place.residence`
- `lineage.branch`
- `generation.character`

关系谓词示例：

- `kinship.parent_of`
- `kinship.spouse_of`
- `kinship.adoptive_parent_of`
- `kinship.step_parent_of`
- `kinship.ancestor_of`

父母和子女不保存成两条互相复制的记录。统一保存 `parent_of`：

```text
PARENT --kinship.parent_of--> CHILD
```

人物接口可让用户用“这是他的父母”或“这是他的子女”两种自然语言提交，服务端最终归一化为同一种方向。

若资料只能说明“父母之一”而不能判断父或母，仍使用 `parent_of`，不要根据姓名或传统惯例推断性别角色。外部数据库的「父」「母」「長子」「女兒」等称谓同样只映射到中性谓词，原始称谓写进引用的 `locator`，不编码成角色（映射表见 `packages/validation`）。

`kinship.spouse_of` 是对称关系，同样只保存一条：服务端把两个人物 ID 中较小者作为 `subject`，因此从任一方提交都会归一化到同一行。

#### 代数不明的世系：`kinship.ancestor_of`

中国谱系的来源经常只说世系而不点名中间各代：「太子晉後代」「王元四世孫」「琅邪王氏之後」。把这种说法塞进 `parent_of` 会凭空造出来源从未提到的世代，因此单独用 `kinship.ancestor_of` 表示「代数不明的先祖—后代」：

```text
ANCESTOR --kinship.ancestor_of--> DESCENDANT
```

同样只保存一条方向。接口接受相对于当前人物的 `ancestor` 和 `descendant`，服务端归一化到以先祖为 `subject`。来源若给出代数（「四世孫」），代数写进引用的 `locator`，不编码进谓词——它是来源的说法，不是本项目的断言。

人物页把它单列为「先祖（代數不明）」「後代（代數不明）」两组，不与父母子女混列。家族树里，来源给出代数就跨几行（「八代孫」在八行之下），未给代数的跨两行——跨一行会读成父子，跨更多则是在假装知道自己不知道的事。

**图上已有完整父子链时不再画这条虚线**：「王翦之孫王離」与 王翦 → 王賁 → 王離 说的是同一件事，两条都画等于在它所概括的链条旁边再补一条捷径，展开时每填上一个缺口就多出一条重复的线。判定只看**当前已加载**的边——数据库里有、屏幕上还没有的链条，读者跟不了，虚线就该留着。

`ancestor_of` 与 `parent_of` 一同参与环检测：「A 是 B 的先祖」和「B 是 A 的先祖」不能同时成立。反过来，`ancestor_of` **不会**由 `parent_of` 链自动推导出来，也不应该为已经有完整父子链的两个人再补一条 `ancestor_of`——那只是冗余。

#### value_json 与字形标记

属性主张的 `value_json` 至少包含：

- `text`：来源原文，按录入时的字形原样保存；
- `language`：BCP-47 标记，如 `zh-Hans`、`zh-Hant`、`zh-Latn-pinyin`；
- `date`：不确定日期结构（见第三节）。

`name.primary` 应是人物的本名。庙号、谥号、封号（「汉成帝」「孝景王皇后」）记为 `name.alias`；只有在所有来源都不给出本名时，才以称号作为 `name.primary`。

字形（简体／繁體）规则：

1. **不改写存储值。** 来源写作「王贲」就存「王贲」，写作「王賁」就存「王賁」。把主张值统一成某种字形等于静默编辑有来源的证据。
2. **字形是显示层投影。** 读者选择的字形在渲染时转换，和人物摘要一样属于「计算得出」的结果，不落库。
3. **原文始终可得。** 摘要类展示（人物标题、搜索结果、关系链接）显示读者字形并在提示中给出原文；证据类展示（主张卡片、来源摘录）以原文为主，另附自动转换结果并标明「非来源原文」。
4. **`zh-Latn-*` 及非中文标记不转换。** 拼音异名不做字形转换。
5. **同名判定与字形无关。** 「王賁」和「王贲」折叠后相同，视为同一姓名；折叠方向为繁體→简体（多对一，结果稳定）。

### ClaimRevision（主张版本）

每次编辑都追加新版本，不原地覆盖历史内容。

建议字段：

- `id`
- `claim_id`
- `revision_number`
- `snapshot_json`
- `change_summary`
- `created_by_user_id`
- `created_at`
- `reverts_revision_id`

### Source（来源）

来源是可复用的独立记录。

建议字段：

- `id`
- `source_type`：`book`、`genealogy`、`gazetteer`、`epitaph`、`api_record`、`website`、`user_testimony` 等；
- `title`
- `creator`
- `publisher`
- `published_at_text`
- `canonical_url`
- `external_identifier`
- `license_code`
- `accessed_at`
- `metadata_json`
- `created_by_user_id`

### ClaimSource（主张—来源关联）

一个主张可由多个来源支持；一个来源也可支持多个主张。

建议字段：

- `claim_id`
- `source_id`
- `stance`：`supports`、`contradicts`、`mentions`；
- `locator`：卷、册、页、条目号、API ID 等；
- `quotation`：合理范围内的短文本摘录；
- `interpretation_note`
- `added_by_user_id`
- `created_at`

### PersonMaintainer（人物维护关系）

- `person_id`
- `user_id`
- `maintainer_role`
- `created_at`

维护者负责关注修改，不获得排他编辑权。

### PersonMergeProposal（人物合并提案）

- `id`
- `source_person_id`
- `target_person_id`
- `status`：`proposed`、`reviewing`、`approved`、`rejected`、`reverted`；
- `reason`
- `created_by_user_id`
- `approved_by_user_id`
- `created_at`、`resolved_at`
- `merge_snapshot_json`

合并来源和目标不是“删除者与保留者”的价值判断；目标仅是继续承担稳定公开 ID 的记录。

#### 反向情形：一条记录其实是两个同名的人

合并的镜像不是删除，而是**新建加撤回**，没有单独的实体：

1. 为来源真正所指的那个人**新建**人物记录，其 `name.primary` 的引用写明凭什么认定他与同名者不是一人；
2. 把错挂上去的关系主张逐条**撤回**（`claim.retract`）。撤回不销毁任何东西——版本链、引用、原文摘录全部留在原处可读；
3. 用**同一条引用**（同样的 `locator` 和 `quotation`）在正确的两个锚点之间重建关系。证据本身不变，只改它被认定连接了哪两个锚点。

拆分没有合并那样的快照与回滚，因此顺序是硬性的：**先撤回再新建**。撤回之前旧边仍然成立，新边往往方向相反，服务端会（正确地）以亲属环为由拒绝其中一半。

拆分不是软合并的逆操作，不复用 `PersonMergeProposal`；被拆出的新人物是一条全新的公开 ID，旧 ID 不重定向，因为旧 ID 指的始终是另一个人。

## 三、不确定日期

历史日期不能只用一个 SQL 日期字段，应同时保存：

- 原始文字：`清光绪二十年`、`约1488年`、`前208年`、`3世纪`、`不详`；
- 规范化最早/最晚日期（公元前用历史纪年加负号，如 `前208年` → `-0208-01-01`，与来源写法和维基数据一致；该约定没有零年，因此这对边界用于展示和区间判断，不能跨纪元做字典序排序）；
- 精度：日、月、年、年代、世纪、朝代、未知；
- 历法和换算说明。

## 四、完整性规则

1. 公开主张至少关联一个来源；草稿可以暂时无来源但不能公开。
2. `parent_of` 不允许人物指向自己。
3. 系统检测明显的亲属环，但不能因检测结果自动删除历史资料。
4. 已合并人物不可再接受新主张，写请求自动转到目标人物并提示旧 ID。
5. 未证明为已故历史人物的记录进入隔离状态，不进入公开索引。
6. 任何硬删除仅限违法、隐私或安全事故，并保留最小审计记录。
7. 主张值的字形不做归一化写入；同名判定、搜索和重复提示一律按字形折叠后比较。

## 五、贡献记录（Contribution）

追加式审计流水，字段：`id`、`action`、`actor_user_id`、`target_type`、`target_id`、`change_summary`、`before_revision`、`after_revision`、`created_at`。

`action` 取值：

- `person.create`
- `claim.create`、`claim.revise`、`claim.dispute`、`claim.retract`、`claim.revert`
- `claim.source.add`、`claim.source.remove`
- `source.create`
- `merge.propose`、`merge.approve`、`merge.reject`、`merge.revert`
- `admin.reattribute`：运维维护动作，把既有记录的归属字段（`created_by_user_id`、`added_by_user_id`、`actor_user_id` 等）改到另一账号。只改归属，不改任何主张内容、状态或版本，且本身也要写入一条审计记录。
- `admin.correct_metadata`：运维维护动作，修正导入写错的描述性元数据（例如把维基数据属性号当作维基百科条目的 `locator`）。同样不改主张内容、状态或版本，且必须写入审计记录说明改了什么。
- `admin.suppress_person`：运维维护动作，把超出收录范围的人物转为 `suppressed`（不公开、不进搜索），不删除任何数据、可随时恢复。跨越公开边界的关系主张另行按正常流程撤回（`claim.retract`），公开页面因此不会指向隐藏记录。
