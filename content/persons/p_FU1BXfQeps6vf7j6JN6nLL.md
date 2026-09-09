---
schema: wang-person/v1
id: p_FU1BXfQeps6vf7j6JN6nLL
status: active
merged_into: null
display_name: 王守道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jem172XW2ABkZZnxUq7yQF
        subject_person_id: p_FU1BXfQeps6vf7j6JN6nLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_77yksaL7o9z76rbqL9Z6nD
          claim_id: c_Jem172XW2ABkZZnxUq7yQF
          source_id: s_oA6EkviQEBpwQjCujz3N62
          stance: supports
          locator: CBDB:492048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492048）
          source: &a1
            id: s_oA6EkviQEBpwQjCujz3N62
            source_type: api_record
            title: 中国历代人物传记资料库：王守道（CBDB 492048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492048&o=json
            external_identifier: CBDB:492048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EX9rEuC8RC6SjsMfzbXko9
        subject_person_id: p_FU1BXfQeps6vf7j6JN6nLL
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
        - id: cs_j18Mp8tm4P2k77m54wM41v
          claim_id: c_EX9rEuC8RC6SjsMfzbXko9
          source_id: s_oA6EkviQEBpwQjCujz3N62
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

# 王守道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守道（CBDB 492048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492048&o=json)
