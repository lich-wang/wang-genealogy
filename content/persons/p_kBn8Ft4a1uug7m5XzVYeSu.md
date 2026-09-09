---
schema: wang-person/v1
id: p_kBn8Ft4a1uug7m5XzVYeSu
status: active
merged_into: null
display_name: 王子東
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RGL3ACRJ9mxXLKfsRmXsyq
        subject_person_id: p_kBn8Ft4a1uug7m5XzVYeSu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子東
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wfnv9L1Fqi8njnRq9p34bf
          claim_id: c_RGL3ACRJ9mxXLKfsRmXsyq
          source_id: s_KVNjZwvdsnLPAJGDBgAhro
          stance: supports
          locator: CBDB:101047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101047）
          source: &a1
            id: s_KVNjZwvdsnLPAJGDBgAhro
            source_type: api_record
            title: 中国历代人物传记资料库：王子東（CBDB 101047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101047&o=json
            external_identifier: CBDB:101047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6U6MMnoqjgNM7SKpLjdYLh
        subject_person_id: p_kBn8Ft4a1uug7m5XzVYeSu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zj3C3XW6tGMT2AMDeK96mj
          claim_id: c_6U6MMnoqjgNM7SKpLjdYLh
          source_id: s_KVNjZwvdsnLPAJGDBgAhro
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

# 王子東

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子東 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子東（CBDB 101047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101047&o=json)
