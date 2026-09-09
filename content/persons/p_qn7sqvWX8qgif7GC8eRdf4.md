---
schema: wang-person/v1
id: p_qn7sqvWX8qgif7GC8eRdf4
status: active
merged_into: null
display_name: 王茂源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qLPKQsDVCE1HqBCqVdsiLi
        subject_person_id: p_qn7sqvWX8qgif7GC8eRdf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XnN73N3TtQnZb5uWE4JniH
          claim_id: c_qLPKQsDVCE1HqBCqVdsiLi
          source_id: s_FJ49H1197D554K3vXLf8HD
          stance: supports
          locator: CBDB:640083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640083）
          source: &a1
            id: s_FJ49H1197D554K3vXLf8HD
            source_type: api_record
            title: 中国历代人物传记资料库：王茂源（CBDB 640083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640083&o=json
            external_identifier: CBDB:640083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZFMK6PJb9nyezJEZ5mfzL
        subject_person_id: p_qn7sqvWX8qgif7GC8eRdf4
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
        - id: cs_1WcjGHGXZCXsn7Y81p297E
          claim_id: c_tZFMK6PJb9nyezJEZ5mfzL
          source_id: s_FJ49H1197D554K3vXLf8HD
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

# 王茂源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂源 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂源（CBDB 640083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640083&o=json)
