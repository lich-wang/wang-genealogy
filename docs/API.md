# HTTP API 草案

版本前缀暂定 `/api/v1`。公开读取允许匿名访问；新增和修改需要认证。

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

### 获取人物修改历史

```http
GET /api/v1/persons/{personId}/history
```

### 创建候选人物

```http
POST /api/v1/persons
```

创建人物锚点时应同时提交至少一个姓名主张和来源；如果尚无来源，只能保存为用户私有草稿。

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

为了便于前端使用，同一个接口接受相对于当前人物的 `parent` 和 `child`，服务端统一转成 `parent_of`。

```http
POST /api/v1/persons/{personId}/relationships
```

声称某人是当前人物的父母：

```json
{
  "relationship": "parent",
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
  "sources": [{ "source_id": "SRC_456", "stance": "supports" }]
}
```

两种请求最终分别规范化为：

```text
P_PARENT parent_of {personId}
{personId} parent_of P_CHILD
```

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

争议与撤回：

```http
POST /api/v1/claims/{claimId}/disputes
POST /api/v1/claims/{claimId}/retractions
POST /api/v1/claims/{claimId}/reverts
```

## 五、来源接口

```http
POST /api/v1/sources
GET  /api/v1/sources/{sourceId}
POST /api/v1/claims/{claimId}/sources
GET  /api/v1/sources/{sourceId}/claims
```

不得上传影像。来源接口只接收书目信息、URL、外部 ID、定位和合理长度的摘录。

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
- 批量导入使用异步任务，不能绕过逐条来源和审核规则。
