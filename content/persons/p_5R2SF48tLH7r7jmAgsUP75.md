---
schema: wang-person/v1
id: p_5R2SF48tLH7r7jmAgsUP75
status: active
merged_into: null
display_name: 王天敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kFgd6SMpNFuEH5yAy1JXqD
        subject_person_id: p_5R2SF48tLH7r7jmAgsUP75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZNMNa2KRmX5kzjBLABSRt7
          claim_id: c_kFgd6SMpNFuEH5yAy1JXqD
          source_id: s_AJCeR2d6cnj1t4B7gWHuwY
          stance: supports
          locator: CBDB:414206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414206）
          source: &a1
            id: s_AJCeR2d6cnj1t4B7gWHuwY
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 414206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414206&o=json
            external_identifier: CBDB:414206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tHSyd7eY9VSH4DtoxEJ9BL
        subject_person_id: p_5R2SF48tLH7r7jmAgsUP75
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
        - id: cs_6vodY14ayyPGdDQayJvFuk
          claim_id: c_tHSyd7eY9VSH4DtoxEJ9BL
          source_id: s_AJCeR2d6cnj1t4B7gWHuwY
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

# 王天敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天敘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 414206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414206&o=json)
