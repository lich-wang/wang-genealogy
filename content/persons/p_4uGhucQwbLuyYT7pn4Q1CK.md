---
schema: wang-person/v1
id: p_4uGhucQwbLuyYT7pn4Q1CK
status: active
merged_into: null
display_name: 王瓘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GJCXqYbtZXyoxnD5LaEKjm
        subject_person_id: p_4uGhucQwbLuyYT7pn4Q1CK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BmV5rCxYeBLN271uVBKXFE
          claim_id: c_GJCXqYbtZXyoxnD5LaEKjm
          source_id: s_8Tkx5Si281dUuT1zJ531r6
          stance: supports
          locator: CBDB:71305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71305）
          source: &a1
            id: s_8Tkx5Si281dUuT1zJ531r6
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 71305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71305&o=json
            external_identifier: CBDB:71305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CQoD9wiKWDEGYkFHUrSbRp
        subject_person_id: p_4uGhucQwbLuyYT7pn4Q1CK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1XirEdbK4DG2zc2YwqWpBR
          claim_id: c_CQoD9wiKWDEGYkFHUrSbRp
          source_id: s_8Tkx5Si281dUuT1zJ531r6
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
        id: c_vtx4VQcg7B94VY5oEfEwes
        subject_person_id: p_4uGhucQwbLuyYT7pn4Q1CK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWweC8FgBrYCorza3y6ViN
          claim_id: c_vtx4VQcg7B94VY5oEfEwes
          source_id: s_8Tkx5Si281dUuT1zJ531r6
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
        id: c_CEmFCMUKaVw9qW42TeAGGg
        subject_person_id: p_4uGhucQwbLuyYT7pn4Q1CK
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
        - id: cs_infdwP9i2asQFsXEcGQdm5
          claim_id: c_CEmFCMUKaVw9qW42TeAGGg
          source_id: s_8Tkx5Si281dUuT1zJ531r6
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

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| birth.date | 1847年 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓘（CBDB 71305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71305&o=json)
