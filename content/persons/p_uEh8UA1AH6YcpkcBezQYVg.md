---
schema: wang-person/v1
id: p_uEh8UA1AH6YcpkcBezQYVg
status: active
merged_into: null
display_name: 王介之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K9vtiZ7hVbApF3T37pYtFK
        subject_person_id: p_uEh8UA1AH6YcpkcBezQYVg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jqkRpQ7BRNCbgBgxaEnefA
          claim_id: c_K9vtiZ7hVbApF3T37pYtFK
          source_id: s_Dj8U9CZ6qT1G63A7T6NBtL
          stance: supports
          locator: CBDB:69080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69080）
          source: &a1
            id: s_Dj8U9CZ6qT1G63A7T6NBtL
            source_type: api_record
            title: 中国历代人物传记资料库：王介之（CBDB 69080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69080&o=json
            external_identifier: CBDB:69080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JXPJ25Q8e3aPrxmDzZC7pL
        subject_person_id: p_uEh8UA1AH6YcpkcBezQYVg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1606年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PM8uyE7MgUMrrH3Kv1Gis7
          claim_id: c_JXPJ25Q8e3aPrxmDzZC7pL
          source_id: s_Dj8U9CZ6qT1G63A7T6NBtL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yTvYDkNSt9CR3Nh3sNYKV3
        subject_person_id: p_uEh8UA1AH6YcpkcBezQYVg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tFiKwHbWmdgcx9j4mvpP2y
          claim_id: c_yTvYDkNSt9CR3Nh3sNYKV3
          source_id: s_Dj8U9CZ6qT1G63A7T6NBtL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xnuyUMfteTtgebxSuz4UDL
        subject_person_id: p_uEh8UA1AH6YcpkcBezQYVg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nL3sq8KtQ1vYEggEzSvs3
          claim_id: c_xnuyUMfteTtgebxSuz4UDL
          source_id: s_Dj8U9CZ6qT1G63A7T6NBtL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介之 | accepted |
| birth.date | 1606年 | accepted |
| death.date | 1686年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介之（CBDB 69080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69080&o=json)
