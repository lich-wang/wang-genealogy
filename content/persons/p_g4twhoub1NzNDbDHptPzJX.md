---
schema: wang-person/v1
id: p_g4twhoub1NzNDbDHptPzJX
status: active
merged_into: null
display_name: 王思旻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lygy9To7AHiX8CbQu4qvhc
        subject_person_id: p_g4twhoub1NzNDbDHptPzJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c1ZJUQJEKXJmWLW3v7F76K
          claim_id: c_Lygy9To7AHiX8CbQu4qvhc
          source_id: s_YkbBB1kk6cWXoE8hhwTBKb
          stance: supports
          locator: CBDB:279532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279532）
          source: &a1
            id: s_YkbBB1kk6cWXoE8hhwTBKb
            source_type: api_record
            title: 中国历代人物传记资料库：王思旻（CBDB 279532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json
            external_identifier: CBDB:279532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DuX2owupKrrZNG13KkBnHc
        subject_person_id: p_g4twhoub1NzNDbDHptPzJX
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
        - id: cs_6VeXnSPHGH4DMbmgvkqN6H
          claim_id: c_DuX2owupKrrZNG13KkBnHc
          source_id: s_YkbBB1kk6cWXoE8hhwTBKb
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

# 王思旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思旻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思旻（CBDB 279532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json)
