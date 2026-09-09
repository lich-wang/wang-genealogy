---
schema: wang-person/v1
id: p_NW1Jk4YWknrkUkdh3qKfML
status: active
merged_into: null
display_name: 王嗣衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NneX3xRiG4DSkGwJ8Fbx85
        subject_person_id: p_NW1Jk4YWknrkUkdh3qKfML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ZEiE3HkFeZupLX6kqecz9
          claim_id: c_NneX3xRiG4DSkGwJ8Fbx85
          source_id: s_U7AKmQ7wwJM4r7iTqMKcqi
          stance: supports
          locator: CBDB:471191
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471191）
          source: &a1
            id: s_U7AKmQ7wwJM4r7iTqMKcqi
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣衍（CBDB 471191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471191&o=json
            external_identifier: CBDB:471191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NNaWA45EF3wYrJ92RQ5M2a
        subject_person_id: p_NW1Jk4YWknrkUkdh3qKfML
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
        - id: cs_MyRDtT6u4ZWJSgN1TBWa4V
          claim_id: c_NNaWA45EF3wYrJ92RQ5M2a
          source_id: s_U7AKmQ7wwJM4r7iTqMKcqi
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

# 王嗣衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣衍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣衍（CBDB 471191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471191&o=json)
