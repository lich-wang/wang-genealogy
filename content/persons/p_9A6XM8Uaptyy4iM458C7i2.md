---
schema: wang-person/v1
id: p_9A6XM8Uaptyy4iM458C7i2
status: active
merged_into: null
display_name: 王之才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4ohVpLv7JD9BHZKEEWnN7
        subject_person_id: p_9A6XM8Uaptyy4iM458C7i2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tteaZG9N3vuEt5TNQAQADQ
          claim_id: c_b4ohVpLv7JD9BHZKEEWnN7
          source_id: s_7HrcjbRaAmZkNCsBqtMe6t
          stance: supports
          locator: CBDB:334261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334261）
          source: &a1
            id: s_7HrcjbRaAmZkNCsBqtMe6t
            source_type: api_record
            title: 中国历代人物传记资料库：王之才（CBDB 334261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json
            external_identifier: CBDB:334261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h7hCdST8CRu6S3HTva8xgj
        subject_person_id: p_9A6XM8Uaptyy4iM458C7i2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7vY4FrUHmKvWA4WJwz6gz
          claim_id: c_h7hCdST8CRu6S3HTva8xgj
          source_id: s_7HrcjbRaAmZkNCsBqtMe6t
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

# 王之才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之才 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之才（CBDB 334261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334261&o=json)
