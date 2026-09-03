# HTTP API 草案

版本前缀暂定 `/api/v1`。公开读取允许匿名访问；新增和修改需要认证。匿名公开 `GET` 只读取随版本发布的静态快照，响应含 `X-Wang-D1: BYPASS`，不会访问 D1；带认证信息的读取使用实时数据库。

## 一、人物接口

### 获取人物摘要

```http
GET /api/v1/persons/{personId}
```

返回：

- 稳定人物 ID 和状态；
- 根据当前主张生成的摘要；
- 已采纳及争议中的基本信息主张；
- 父母、子女、配偶等关系；
- 每条主张的来源摘要；
- 当前版本号；
- 若已合并，返回目标人物并可使用 `301` 或结构化重定向信息。

### 获取人物全部主张

```http
GET /api/v1/persons/{personId}/claims
GET /api/v1/persons/{personId}/claims?status=disputed
```

创建亲属关系时，`relationship` 接受 `father`、`mother`、`parent`、`child`、`adoptive_parent`、
`adoptive_child`、`spouse`、`ancestor` 和 `descendant`。收养关系存为
`kinship.adoptive_parent_of`，不与生物学 `kinship.parent_of` 混用。

### 获取亲属关系图（家族树用）

```http
GET /api/v1/persons/{personId}/relatives?up=2&down=2
GET /api/v1/persons/{personId}/relatives?scope=all
```

返回以该人物为中心、向上向下各若干代的**轻量**切片：`nodes`（id、姓名、生卒原文、状态）、`parent_edges`（按存储方向 PARENT→CHILD，并带 `parent_role: father | mother | null`）、`spouse_edges`。每条边带 `claim_id`、`status` 和 `citations`（`source_title` + `locator`）——连线本身就是一条主张，读者要能就地看到它的依据。不含人物的其他主张。

- `up`／`down` 为 0–4 的整数，默认各 2；超出范围返回 `400 invalid_generations`；
- 单次最多返回 240 个节点，触顶时 `truncated: true`，客户端应提示「从某个具体人物继续展开」而不是静默截断；
- `scope=all` 返回该人物所在的完整公开亲缘连通分量，供「展开全部」使用；全局视图最多 1200 人，触顶同样以 `truncated` 明示；响应以 `scope: "all"` 区分；
- 只包含公开人物（`active`／`merged`），已撤回的关系不计入；
- 配偶边只在两端都在本次切片内时返回。
- 匿名局部和 `scope=all` 家族树都读取最近发布的只读公开快照；局部切片由 Worker 在内存中遍历快照生成，不查询 D1。登录用户仍读取实时数据。响应头 `X-Wang-Data-Source: public-tree-snapshot` 明示来源；快照只含本端点原有的公开人物、关系与引用字段，不含账号或草稿。

成功的匿名公开读取会按 URL 短期边缘缓存；缓存命中以 `X-Wang-Cache: HIT` 标记。带认证信息的读取和全部写入不使用公开缓存。

### 获取人物修改历史

```http
GET /api/v1/persons/{personId}/history
```

### 创建候选人物

```http
POST /api/v1/persons
```

创建人物锚点时应同时提交至少一个姓名主张和来源；如果尚无来源，只能保存为用户私有草稿。

响应除新人物 ID 和姓名主张 ID 外，还返回 `possible_duplicates`：已公开、且姓名折叠后与本次提交相同的人物列表（繁體与简体视为同名）。这是提示而非拒绝——同名历史人物确实存在，是否合并由人判断，走可回滚的合并提案。

### 搜索人物

```http
GET /api/v1/search?q=王賁
GET /api/v1/search?q=王&cursor=MjAyNi0wMS0wMlQwMDowMDowMC4wMDBafHBfMg
```

- 只返回 `active` 人物，匹配 `name.*` 且状态为 `accepted` 或 `disputed` 的主张；
- **字形不敏感**：查询词展开为简体与繁體两种写法后一起匹配，搜「王賁」能找到录入为「王贲」的人物；
- 存储值不做字形归一化（那是有来源的证据），因此展开发生在查询侧；
- 每个人物只返回一条结果，`display_name` 取推荐的 `name.primary`，而不是恰好命中的异名。
- 每条结果同时返回用于区分同名人物的轻量线索：`birth_text`、`death_text`、`origin_text`、`branch_text`、`also_known_as` 与 `relative_count`；这些字段从当前主张批量计算，不要求客户端再逐个人物请求详情。

响应是标准游标列表 `{ "items": [...], "next_cursor": … }`：

- 每页 50 条（页大小由服务端决定，客户端不能调整）；
- **排序键即分页键**：按 `(person.created_at, person.id)` 升序。`created_at` 不唯一（批量导入会给多条记录打上同一时刻），因此用人物 ID 破平，保证翻页不重复也不漏；升序意味着新增人物排在末尾，不会移动客户端已经翻过的页；
- `next_cursor` 是不透明字符串（上述排序键的 base64url 编码），只应原样回传；非空表示还有结果，为 `null` 表示已到末尾——客户端据此判断结果是否完整，而不是靠「刚好返回 50 条」去猜；
- 游标不合法返回 `400 invalid_cursor`；
- 「王」这类高频姓氏必然跨多页：客户端应展示「载入更多」，不要静默截断。
- 客户端选择人物时必须展示上述身份线索；同名结果不得只显示姓名或内部 ID。

### 家族树起点

```http
GET /api/v1/kinship-highlights?limit=8
```

供首页作为家族树入口的公开人物列表（`limit` 1–24，默认 8）。得姓前先祖按来源政策中的封闭名单优先展示（当前为姬晋及其别称、宗敬），响应以 `is_surname_progenitor` 标记；其余名额再按已记录亲属关系数排序。封闭名单避免把一般外姓亲属误当作王氏得姓先祖。

## 二、基础信息主张

```http
POST /api/v1/persons/{personId}/claims
```

示例：

```json
{
  "claim_kind": "property",
  "predicate": "name.primary",
  "value": { "text": "王安石", "language": "zh-Hans" },
  "confidence": "high",
  "sources": [
    {
      "source_id": "SRC_123",
      "stance": "supports",
      "locator": "CBDB ID 1762"
    }
  ],
  "change_summary": "补充规范姓名及数据库出处"
}
```

## 三、父母与子女主张

为了便于前端使用，同一个接口接受相对于当前人物的 `father`、`mother`、`parent`、`child`、`spouse`、`ancestor`、`descendant`。服务端统一保持 PARENT→CHILD 方向：`father` → `father_of`，`mother` → `mother_of`，角色不详的 `parent`/`child` → `parent_of`；`child` 请求若带 `parent_role` 则规范化为对应的 `father_of`／`mother_of`。`ancestor`/`descendant` → `ancestor_of`，`spouse` → `spouse_of`。

```http
POST /api/v1/persons/{personId}/relationships
```

声称某人是当前人物的父亲：

```json
{
  "relationship": "father",
  "related_person_id": "P_PARENT",
  "confidence": "medium",
  "sources": [
    {
      "source_id": "SRC_456",
      "stance": "supports",
      "locator": "卷三，第十二页"
    },
    {
      "source_id": "SRC_789",
      "stance": "supports",
      "locator": "人物条目 88"
    }
  ]
}
```

声称某人是当前人物的子女：

```json
{
  "relationship": "child",
  "related_person_id": "P_CHILD",
  "parent_role": "mother",
  "sources": [{ "source_id": "SRC_456", "stance": "supports" }]
}
```

两种请求最终分别规范化为：

```text
P_PARENT father_of {personId}
{personId} mother_of P_CHILD
```

第二种请求里的 `parent_role` 表示当前人物在这条亲子关系中是母亲，服务端因此保存 `mother_of`。来源只说明「父母之一」时使用 `relationship: "parent"` 或将 `parent_role` 留空；不能根据姓名猜测。已有关系可通过版本化修订补充或改正角色，服务端切换三个谓词并保留历史版本。

### 跨代世系与具体代数

来源只说「某人是某人的后代」而不点名中间各代时（「太子晉後代」「王元四世孫」），用 `ancestor` 与 `descendant`，服务端统一转成 `kinship.ancestor_of`：

```json
{
  "relationship": "ancestor",
  "related_person_id": "P_OLD",
  "generation_count": 4,
  "sources": [{ "source_id": "SRC_456", "stance": "supports", "locator": "王元四世孫" }]
}
```

```text
P_OLD ancestor_of {personId}
{personId} ancestor_of P_DESCENDANT
```

能从来源确认时，`generation_count` 填相隔代数（整数 `2..100`）；不能确认时省略。相隔一代必须改用 `parent`/`child`，其他关系携带该字段会校验失败。`locator` 仍保留来源原文位置或「四世孫」等原始表述，但不再承担结构化代数。旧数据继续兼容从 `locator` 读取。`ancestor_of` 与 `parent_of` 共用环检测：若新关系会构成亲属环，返回 `409 kinship_cycle`。

## 四、修改、争议与回滚

修改主张不会覆盖旧版本：

```http
POST /api/v1/claims/{claimId}/revisions
```

客户端必须提交 `expected_revision`，版本不一致时返回 `409 Conflict`，避免两个人互相覆盖修改。

```json
{
  "expected_revision": 4,
  "patch": { "confidence": "high" },
  "change_summary": "新增第二份独立来源后提高可信度"
}
```

历史导入中若大量 `parent_of` 已经由引用定位明确写出 P22/P25 或「父亲／母亲」，维护者可使用受限的集合式修复接口：

```http
POST /api/v1/claims/bulk-parent-roles
```

请求只接收 `claim_id`、`expected_revision` 和 `parent_role`。接口仅允许 `admin`／`maintainer`，会一次读取全部目标及其支持性引用，并独立验证定位文字；不能确认、证据冲突或版本变化时整批拒绝。通过后以集合式 SQL 更新谓词，并为每条主张分别追加 `ClaimRevision` 与 `Contribution`，不覆盖历史。日常人物编辑仍使用单条版本接口。

同名异人或误读关系经过完整离线审计后，维护者可把一组相互关联的修复作为一个集合式请求提交：

```http
POST /api/v1/claims/bulk-kinship-repairs
```

请求同时声明待撤回主张的版本与原端点、要新建的同名人物、从旧主张复制引用并改挂的新端点，以及少量关系谓词重分类。服务端先用一次集合读取验证整个计划；任何版本、谓词或端点不一致都会让整批拒绝。验证通过后，一次 D1 batch 追加人物、主张、引用、版本与贡献记录，并撤回旧主张，不覆盖或删除历史。该接口仅供 `admin`／`maintainer` 执行已审核的数据维护计划，普通贡献仍走逐条接口。

争议与撤回：

```http
POST /api/v1/claims/{claimId}/disputes
POST /api/v1/claims/{claimId}/retractions
POST /api/v1/claims/{claimId}/reverts
```

## 五、来源接口

```http
POST /api/v1/sources
GET  /api/v1/sources?q=資治通鑑
GET  /api/v1/sources/{sourceId}
POST /api/v1/claims/{claimId}/sources
GET  /api/v1/sources/{sourceId}/claims
```

不得上传影像。来源接口只接收书目信息、URL、外部 ID、定位和合理长度的摘录。

`GET /api/v1/sources?q=...` 按标题、作者或外部标识模糊匹配，最多返回 20 条来源记录，供贡献表单按书名选择来源。人物和来源的内部 ID 只用于前后端传输，不要求普通用户查看、复制或手工填写。

`GET /api/v1/sources/{sourceId}/claims` 的每一项包含引用该来源的主张、该主张的全部来源、关系主张的对方人物，以及**本来源**这条引用的 `stance`、`locator`、`quotation`。

## 六、人物合并

```http
POST /api/v1/persons/{personId}/merge-proposals
GET  /api/v1/person-merge-proposals/{proposalId}
POST /api/v1/person-merge-proposals/{proposalId}/approve
POST /api/v1/person-merge-proposals/{proposalId}/reject
POST /api/v1/person-merge-proposals/{proposalId}/revert
```

创建提案：

```json
{
  "target_person_id": "P_CANONICAL",
  "reason": "两条记录姓名、年代、籍贯和父亲均相同",
  "supporting_claim_ids": ["C_1", "C_8", "C_21"]
}
```

权限草案：

- 任意认证贡献者可提出合并；
- 同时维护两个候选人物的用户可以进入简化合并流程；
- 只要存在其他维护者反对、已接受主张冲突或较大关系网络影响，就必须由审核者确认；
- 合并始终可回滚且保留两个原 ID。

## 七、通用响应要求

- 所有写操作返回贡献记录 ID；
- 所有公开对象包含 `created_at`、`updated_at` 和版本；
- 分页使用游标而非页码；
- 时间统一使用 UTC ISO 8601；
- 错误返回机器可读错误码和中文可读说明；
- 批量导入使用异步任务，不能绕过逐条来源和审核规则；
- 接口按原样返回主张文本及其 `language` 标记，不做简繁转换；字形选择属于客户端显示层；
- 单对象或列表读取统一包在对象里，便于以后加字段：`{ "source": … }`、`{ "claims": [...] }`、`{ "history": [...] }`、`{ "proposal": … }`、`{ "user": … }`；人物摘要、人物导出和游标列表（`{ "items": [...], "next_cursor": … }`）例外，直接返回自身结构；
- `POST /api/v1/auth/signup` 与 `login` 一样返回 `token` 和完整 `user`。
