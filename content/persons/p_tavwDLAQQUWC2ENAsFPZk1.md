---
schema: wang-person/v1
id: p_tavwDLAQQUWC2ENAsFPZk1
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFxbFiMRiEL53uLnKH7KaQ
        subject_person_id: p_tavwDLAQQUWC2ENAsFPZk1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i2TA5BLXPqjG9VUswzEYp4
          claim_id: c_jFxbFiMRiEL53uLnKH7KaQ
          source_id: s_26ZtgX6aDUHZCV2ge6nfMg
          stance: supports
          locator: CBDB:156053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156053）
          source: &a1
            id: s_26ZtgX6aDUHZCV2ge6nfMg
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 156053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156053&o=json
            external_identifier: CBDB:156053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UBCHjKRHvXaJQCFbQiCBVg
        subject_person_id: p_tavwDLAQQUWC2ENAsFPZk1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VeaVSJFTxJP9MQcn1rU7eM
          claim_id: c_UBCHjKRHvXaJQCFbQiCBVg
          source_id: s_26ZtgX6aDUHZCV2ge6nfMg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9wmE5y1t9g2zwhIjBSONe9
        subject_person_id: p_tavwDLAQQUWC2ENAsFPZk1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yzbyLWEwa8DKLF9NjjcA7m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPg1jHu53UMDYJKgiX4v5X
          claim_id: c_9wmE5y1t9g2zwhIjBSONe9
          source_id: s_26ZtgX6aDUHZCV2ge6nfMg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yzbyLWEwa8DKLF9NjjcA7m
        status: active
        display_name: 王庭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Se1tnlY2CD5m_YetgNw913
        subject_person_id: p_tavwDLAQQUWC2ENAsFPZk1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zzQn3afESvutWcTEBVbFTe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wf1JWG7GwbZFimsBlNYt3L
          claim_id: c_Se1tnlY2CD5m_YetgNw913
          source_id: s_26ZtgX6aDUHZCV2ge6nfMg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 118：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zzQn3afESvutWcTEBVbFTe
        status: active
        display_name: 王恆汎
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yzbyLWEwa8DKLF9NjjcA7m | 王庭 | accepted |
| descendants | p_zzQn3afESvutWcTEBVbFTe | 王恆汎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 156053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156053&o=json)
