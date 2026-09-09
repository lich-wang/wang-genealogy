---
schema: wang-person/v1
id: p_yTQMLPnTPSKXeZ2t1boCym
status: active
merged_into: null
display_name: 王實
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dKQ46zGX46MmZLKaRji8f
        subject_person_id: p_yTQMLPnTPSKXeZ2t1boCym
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7P6GJ3JN3Wyde31LrHkPpr
          claim_id: c_5dKQ46zGX46MmZLKaRji8f
          source_id: s_xR5KYH8QzY3hfn8oGdh8Nr
          stance: supports
          locator: CBDB:251904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251904）
          source: &a1
            id: s_xR5KYH8QzY3hfn8oGdh8Nr
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 251904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json
            external_identifier: CBDB:251904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oUpjNtV1KXgKE8MKKmenJn
        subject_person_id: p_yTQMLPnTPSKXeZ2t1boCym
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
        - id: cs_NXZ4p87K5yFR1aJBTnnSJx
          claim_id: c_oUpjNtV1KXgKE8MKKmenJn
          source_id: s_xR5KYH8QzY3hfn8oGdh8Nr
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

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 251904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251904&o=json)
