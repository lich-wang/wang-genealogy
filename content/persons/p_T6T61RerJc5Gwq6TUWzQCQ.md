---
schema: wang-person/v1
id: p_T6T61RerJc5Gwq6TUWzQCQ
status: active
merged_into: null
display_name: 王雲栽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6bARNVyKJwr9Th9UuLYbf
        subject_person_id: p_T6T61RerJc5Gwq6TUWzQCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲栽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NUDjwUCQBDRpTTv2PX9vdH
          claim_id: c_e6bARNVyKJwr9Th9UuLYbf
          source_id: s_aQ7HovJtMqAo8iGFs7t9Qe
          stance: supports
          locator: CBDB:640808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640808）
          source: &a1
            id: s_aQ7HovJtMqAo8iGFs7t9Qe
            source_type: api_record
            title: 中国历代人物传记资料库：王雲栽（CBDB 640808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640808&o=json
            external_identifier: CBDB:640808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ocFYDh5Wi7ZybppQ1FCoMJ
        subject_person_id: p_T6T61RerJc5Gwq6TUWzQCQ
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
        - id: cs_WHXUc2AM36xJVNYVXzrNJ8
          claim_id: c_ocFYDh5Wi7ZybppQ1FCoMJ
          source_id: s_aQ7HovJtMqAo8iGFs7t9Qe
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

# 王雲栽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲栽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲栽（CBDB 640808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640808&o=json)
