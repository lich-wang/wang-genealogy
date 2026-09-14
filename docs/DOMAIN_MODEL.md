# 领域与数据模型

## 一、建模原则

Markdown 数据不把某个可争议值直接视为最终事实。一个人物文件是身份锚点，姓名、生卒、籍贯和亲属关系仍由 `Claim` 表达。

```text
GitHub Account ──< OAuth Binding ──< Site Session
       │
       └──< Commit / Pull Request
                       │
Person Markdown ──< Claim ──< Source Reference
       │
       └── merged_into ──> Person Markdown
```

## 二、主要实体

### GitHub Account（唯一站点身份）

站点以 GitHub numeric user ID 作为不可变外部身份键。`login`、公开头像 URL 只是可更新的显示快照，GitHub 改名不能创建第二个账号。首次 OAuth 回调即注册，后续回调即登录；不存在邮箱密码身份。

GitHub 账号可以拥有本地会话、偏好和订阅，但不代表族谱人物。作者、审阅者、时间和讨论由 Git commit 与 Pull Request 元数据记录。

### OAuthBinding 与 SiteSession（D1 运行数据）

D1 可以保存登录和个性化所需的最小数据：GitHub user ID、当前 login、公开头像 URL、账号状态、OAuth scope 与到期时间、加密的 access/refresh token、会话摘要、偏好、通知订阅和账号安全审计。token 加密密钥只能存在于 Worker secret。

这些实体不得拥有 `Person`、`Claim` 或 `Source` 的数据库外键。关注人物时只保存公开 `person_id` 字符串。站点也不复制仓库角色；审核权由 GitHub 仓库权限、CODEOWNERS 和分支保护决定。

### ContributionSubmission（瞬时命令，不是实体）

投稿命令包含 `submission_id`、`base_sha`、PR 标题与说明、目标路径及完整 Markdown。Worker 仅在一次请求内处理它，并使用当前 GitHub 用户 token 创建 fork、branch、commit 和 Pull Request；不得把 Markdown、diff 或投稿草稿写入 D1。

`submission_id` 只用于导出确定性 GitHub 分支名。重试时以 GitHub 已有分支/PR 作为幂等事实，不在 D1 建立“投稿记录”或第二套审核状态。

### Person（历史人物锚点）

Markdown front matter 字段：

- `id`：不可变公开 ID；
- `status`：`candidate`、`active`、`merged`、`suppressed`；
- `merged_into`：软合并目标；
- `display_name`：构建期标题摘要；
- `cbdb_id`：可选的中国历代人物传记资料库（CBDB）人物编号；仅在来源已确认同一人物时填写，为无前缀的正整数。构建产物据此生成官方 CBDB 记录链接；
- `revision`：当前文件内的内容版本提示；
- `properties`、`relationships`：结构化主张集合。

`Person` 不直接存放“最终姓名”“最终出生年”等可争议信息。页面上的摘要由当前已采纳主张计算生成。

### Claim（资料主张）

统一表达人物属性和人物关系。

建议字段：

- `id`
- `subject_person_id`
- `claim_kind`：`property` 或 `relationship`
- `predicate`
- `object_person_id`：关系主张使用；
- `generation_count`：跨代世系在来源明确时记录相隔代数；
- `value_json`：属性主张使用；
- `status`：`proposed`、`accepted`、`disputed`、`retracted`、`superseded`；
- `confidence`：`unknown`、`low`、`medium`、`high`；
- `current_revision`：文件内主张版本提示；真正的修改历史以 Git 为准。

属性谓词示例：

- `name.primary`
- `name.alias`
- `name.courtesy`
- `name.pseudonym`
- `birth.date`
- `death.date`
- `historical.period`：朝代或历史时期，保留来源写法（如「東晉」「明末清初」「清—民國」），不由生卒年自动覆盖；
- `place.origin`
- `place.residence`
- `lineage.branch`
- `generation.character`

关系谓词示例：

- `kinship.parent_of`
- `kinship.father_of`
- `kinship.mother_of`
- `kinship.spouse_of`
- `kinship.sibling_of`
- `kinship.adoptive_parent_of`
- `kinship.step_parent_of`
- `kinship.ancestor_of`

父母和子女不保存成两条互相复制的记录。统一保存 `parent_of`：

```text
PARENT --kinship.parent_of--> CHILD
```

贡献工具可让用户用“这是他的父母”或“这是他的子女”两种自然语言编辑，提交前必须归一化为同一种方向并由 CI 校验。

亲子边保持同一个 PARENT→CHILD 方向，但按来源明确程度使用三个谓词：明确写「父／生父」时用 `father_of`，明确写「母／生母」时用 `mother_of`，只能说明“父母之一”时用 `parent_of`。不得根据姓名、称号或传统惯例猜测。原始称谓仍写进引用的 `locator`，便于复核。旧 `parent_of` 主张的读取层只对 P22/P25、「父亲／母亲」等明确定位文字作保守兼容，冲突或不明确时仍显示「父母未详」。静态构建层为三个谓词统一投影 `parent_role: father | mother | null`，方便界面和家族树消费。

`kinship.spouse_of` 是对称关系，逻辑上只表示一条主张；人物文件两端的副本必须具有同一主张 ID 和内容，由构建器检查一致性。

#### 兄弟姊妹：`kinship.sibling_of`

`kinship.sibling_of` 同样是对称关系（兄／弟／姊／妹），与 `spouse_of` 一致：只存一条主张，按人物 ID 字典序取较小者作 `subject`，人物文件两端副本必须具有同一主张 ID 与内容。CBDB 与族谱常直接书「兄／弟／姊／妹」，此谓词保留来源的原话，而不擅自为两人共造一个来源从未点名的父。

```text
SIBLING_A --kinship.sibling_of--> SIBLING_B
```

只接受**亲生兄弟姊妹**的同辈称谓（兄、弟、姊、妹、兄弟、姊妹等）。从兄弟、堂兄弟、表兄弟（從兄／從弟／堂兄／表兄）是**从亲**而非同胞，不映射到此谓词；「繼／庶」半兄弟以及无血缘的「义兄弟」同样不映射，避免把来源没说的事写成同胞。

当来源只给出兄长而兄长的父亲另有记载时，可由该父反推出本人之父，但这条**推断出来的亲子边必须标注为「由兄弟关系推断」**（写入引用 `interpretation_note`），与来源直接陈述的亲子关系区分开。

#### 跨代世系：`kinship.ancestor_of`

中国谱系的来源经常只说世系而不点名中间各代：「太子晉後代」「王元四世孫」「琅邪王氏之後」。把这种说法塞进 `parent_of` 会凭空造出来源从未提到的世代，因此单独用 `kinship.ancestor_of` 表示不直接等同父母子女的「先祖—后代」：

```text
ANCESTOR --kinship.ancestor_of--> DESCENDANT
```

同样只保存一条方向。编辑工具把相对于当前人物的 `ancestor` 和 `descendant` 归一化到以先祖为 `subject`。来源若能确认代数（「四世孫」），把整数 `4` 写入关系主张的 `generation_count`；无法确认则为 `null`。`1` 不合法，因为相隔一代应使用 `parent_of`。旧导入数据若只在引用 `locator` 中保留「八世」等文字，读取层继续兼容提取，但新提交必须使用结构化字段。

人物页把它单列为「先祖」「後代」两组，每一条显示「相隔 N 代」或「代数不详」，不与父母子女混列。家族树里，来源给出代数就跨几行（「八代孫」在八行之下），未给代数的跨两行——跨一行会读成父子，跨更多则是在假装知道自己不知道的事。

**图上已有完整父子链时不再画这条虚线**：「王翦之孫王離」与 王翦 → 王賁 → 王離 说的是同一件事，两条都画等于在它所概括的链条旁边再补一条捷径，展开时每填上一个缺口就多出一条重复的线。判定只看**当前已加载**的静态边；构建产物里有、屏幕上还没有的链条，读者跟不了，虚线就该留着。

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

不再建立数据库修订实体。每次编辑通过提交和 Pull Request 修改人物 Markdown；Git blob、commit、作者、时间、审阅与 revert 共同构成完整版本链。文件中的 `current_revision` 仅用于阅读提示，不能替代 Git 历史。

### Source（来源）

来源在人物 Markdown 中随主张保存完整引用快照；构建时按 `source.id` 去重并生成来源反向索引，不写数据库。

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

### ClaimSource（主张—来源关联）

一个主张可由多个来源支持；一个来源也可支持多个主张。

建议字段：

- `claim_id`
- `source_id`
- `stance`：`supports`、`contradicts`、`mentions`；
- `locator`：卷、册、页、条目号、API ID 等；
- `quotation`：合理范围内的短文本摘录；
- `interpretation_note`

### PersonMaintainer（人物维护关系）

不再保存数据库实体。维护责任通过 CODEOWNERS、GitHub team、Issue/PR 订阅和审阅请求表达；维护者不获得排他编辑权。D1 中的关注订阅只用于通知，不代表维护权限。

### PersonMergeProposal（人物合并提案）

人物合并以带明确说明的 Pull Request 表达。源文件设置 `status: merged` 和 `merged_into`，目标文件接收经审阅的主张；PR 状态和 Git revert 分别承担提案状态与回滚能力，不写 D1。

合并来源和目标不是“删除者与保留者”的价值判断；目标仅是继续承担稳定公开 ID 的记录。

#### 反向情形：一条记录其实是两个同名的人

合并的镜像不是删除，而是**新建加撤回**，没有单独的实体：

1. 为来源真正所指的那个人**新建**人物记录，其 `name.primary` 的引用写明凭什么认定他与同名者不是一人；
2. 在同一 Pull Request 中把错挂关系标为 `retracted`。Git 历史、引用和原文摘录仍然可追溯；
3. 用**同一条引用**（同样的 `locator` 和 `quotation`）在正确的两个锚点之间重建关系。证据本身不变，只改它被认定连接了哪两个锚点。

拆分必须在同一 Pull Request 中同时完成“撤回旧边”和“建立新边”，由构建器对最终状态做环检测；不能拆成两个先后发布的 PR。

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
4. 已合并人物文件不可再接受新主张，修改应落到目标人物文件；旧 ID 继续重定向。
5. 未证明为已故历史人物的记录进入隔离状态，不进入公开索引。
6. 任何硬删除仅限违法、隐私或安全事故，并通过受保护的 Git 提交保留最小审计说明。
7. 主张值的字形不做归一化写入；同名判定、搜索和重复提示一律按字形折叠后比较。

## 五、两类审计记录

族谱内容审计只存在于 GitHub：commit、Pull Request、review、合并提交和 revert 记录人物、主张、来源与合并的全部变化，不复制进 D1。

账号安全审计只存在于 D1，记录 OAuth 成功/失败、scope 变化、会话撤销、GitHub grant 断开和账号封禁。账号审计不得使用 `person_id`、`claim_id` 或 `source_id` 作为数据库外键，也不得记录 PR 正文、人物内容或 diff。两类审计不能互相替代或混表保存。
