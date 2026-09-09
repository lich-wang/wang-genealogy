---
schema: wang-person/v1
id: p_xXxvLxt9L4wtt7W2n23QER
status: active
merged_into: null
display_name: 王完
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TGjDxWWL3QjcNuVhQVtH4n
        subject_person_id: p_xXxvLxt9L4wtt7W2n23QER
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9c4kGyrk2zDEfGSAYazRG
          claim_id: c_TGjDxWWL3QjcNuVhQVtH4n
          source_id: s_BuEjUyEeANEbYWWxCcVNJx
          stance: supports
          locator: CBDB:324110
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324110）
          source: &a1
            id: s_BuEjUyEeANEbYWWxCcVNJx
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 324110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324110&o=json
            external_identifier: CBDB:324110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tC7NoyC9GBVk5J2iSDsiCc
        subject_person_id: p_xXxvLxt9L4wtt7W2n23QER
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
        - id: cs_BfuGVwm2jEqkQFEKabE78D
          claim_id: c_tC7NoyC9GBVk5J2iSDsiCc
          source_id: s_BuEjUyEeANEbYWWxCcVNJx
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

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王完（CBDB 324110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324110&o=json)
