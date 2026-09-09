---
schema: wang-person/v1
id: p_9tUG6V4BcgtFuqXZKwR7SF
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8q443iyWUZHKUqZJMYVueS
        subject_person_id: p_9tUG6V4BcgtFuqXZKwR7SF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KKVN41qEj9Adiws9PKYuLP
          claim_id: c_8q443iyWUZHKUqZJMYVueS
          source_id: s_ub8DcNqFDGVRWYh5LHTfKA
          stance: supports
          locator: CBDB:489146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489146）
          source: &a1
            id: s_ub8DcNqFDGVRWYh5LHTfKA
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 489146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489146&o=json
            external_identifier: CBDB:489146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_42wSvXA7zSbcX1KjDeXbmh
        subject_person_id: p_9tUG6V4BcgtFuqXZKwR7SF
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
        - id: cs_r9CiN5hgaA65whHxMF73Km
          claim_id: c_42wSvXA7zSbcX1KjDeXbmh
          source_id: s_ub8DcNqFDGVRWYh5LHTfKA
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 489146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489146&o=json)
