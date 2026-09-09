---
schema: wang-person/v1
id: p_7kt2c6LEEJXJ45MmJkyvhy
status: active
merged_into: null
display_name: 王允
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5LDdQhCxrQXH1w2MEFAhU
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b2cG6bx3vseGHLi78MXNu6
          claim_id: c_Q5LDdQhCxrQXH1w2MEFAhU
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: CBDB:208031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208031）
          source: &a1
            id: s_YMCYHYzEVLvaEnSkkrjDYW
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 208031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json
            external_identifier: CBDB:208031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8f21JoC4GZz9AyMrtdBcjA
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69r5C4Fr7EjcrAQH9aKLKC
          claim_id: c_8f21JoC4GZz9AyMrtdBcjA
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M34x4vQ4Lbn9gQU1qaJEeH
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
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
        - id: cs_UQ8CtEj98JXXhvJUJb1Uou
          claim_id: c_M34x4vQ4Lbn9gQU1qaJEeH
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
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

# 王允

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允（CBDB 208031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json)
