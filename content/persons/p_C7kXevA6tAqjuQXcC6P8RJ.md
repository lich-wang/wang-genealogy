---
schema: wang-person/v1
id: p_C7kXevA6tAqjuQXcC6P8RJ
status: active
merged_into: null
display_name: 王璞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thibwtbuVFdWazuKtSQQwQ
        subject_person_id: p_C7kXevA6tAqjuQXcC6P8RJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZeCKQtC6c3nQ5sYwSB9Nns
          claim_id: c_thibwtbuVFdWazuKtSQQwQ
          source_id: s_F4oJKy8SGdKn7G6Y4FSa6L
          stance: supports
          locator: CBDB:475473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475473）
          source: &a1
            id: s_F4oJKy8SGdKn7G6Y4FSa6L
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 475473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475473&o=json
            external_identifier: CBDB:475473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eoePXKeEUjuMuB3a9vNiPh
        subject_person_id: p_C7kXevA6tAqjuQXcC6P8RJ
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
        - id: cs_cptSSA4BYaKNx7ggA41eH7
          claim_id: c_eoePXKeEUjuMuB3a9vNiPh
          source_id: s_F4oJKy8SGdKn7G6Y4FSa6L
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

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 475473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475473&o=json)
