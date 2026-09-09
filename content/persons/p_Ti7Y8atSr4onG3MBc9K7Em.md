---
schema: wang-person/v1
id: p_Ti7Y8atSr4onG3MBc9K7Em
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXUV1TBeP4H9rYSL6QnARa
        subject_person_id: p_Ti7Y8atSr4onG3MBc9K7Em
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PUm6jELWXz6b8qY9j7cMvf
          claim_id: c_xXUV1TBeP4H9rYSL6QnARa
          source_id: s_x58pCWgGxE3Etb3Ns84PTy
          stance: supports
          locator: CBDB:489400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489400）
          source: &a1
            id: s_x58pCWgGxE3Etb3Ns84PTy
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 489400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489400&o=json
            external_identifier: CBDB:489400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7cXG9aAKC27RnqXSXvmjAA
        subject_person_id: p_Ti7Y8atSr4onG3MBc9K7Em
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
        - id: cs_YU7BQNKcnXKHz2c26ZdgeS
          claim_id: c_7cXG9aAKC27RnqXSXvmjAA
          source_id: s_x58pCWgGxE3Etb3Ns84PTy
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 489400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489400&o=json)
