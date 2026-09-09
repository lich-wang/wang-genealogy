---
schema: wang-person/v1
id: p_QVC6gUA6ay4K5jJBHrjqm1
status: active
merged_into: null
display_name: 王希仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SXreMGpN93vDBgQbKyEdAf
        subject_person_id: p_QVC6gUA6ay4K5jJBHrjqm1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EH8baZwLrRxMvy6sQ2gUqg
          claim_id: c_SXreMGpN93vDBgQbKyEdAf
          source_id: s_EGcH298qSm5GXpZq5V9C5k
          stance: supports
          locator: CBDB:245288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245288）
          source: &a1
            id: s_EGcH298qSm5GXpZq5V9C5k
            source_type: api_record
            title: 中国历代人物传记资料库：王希仙（CBDB 245288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245288&o=json
            external_identifier: CBDB:245288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TmTqMVQB7WvYDwzHfEtQAv
        subject_person_id: p_QVC6gUA6ay4K5jJBHrjqm1
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
        - id: cs_367yKRPZtYLjtVgBV7qLLW
          claim_id: c_TmTqMVQB7WvYDwzHfEtQAv
          source_id: s_EGcH298qSm5GXpZq5V9C5k
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

# 王希仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希仙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希仙（CBDB 245288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245288&o=json)
