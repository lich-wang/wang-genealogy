---
schema: wang-person/v1
id: p_4ZCwVhtqs1JgjWNX18f2Rg
status: active
merged_into: null
display_name: 王瓛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLGqh6QuVecHE8H6qxspeN
        subject_person_id: p_4ZCwVhtqs1JgjWNX18f2Rg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdNsyEQGtf6u2Sjr5LrMEb
          claim_id: c_gLGqh6QuVecHE8H6qxspeN
          source_id: s_tNzMtdY55qHsbuaf9eZ5Zt
          stance: supports
          locator: CBDB:483181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483181）
          source: &a1
            id: s_tNzMtdY55qHsbuaf9eZ5Zt
            source_type: api_record
            title: 中国历代人物传记资料库：王瓛（CBDB 483181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483181&o=json
            external_identifier: CBDB:483181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdT9ybDZAqFWmtkmtceDsz
        subject_person_id: p_4ZCwVhtqs1JgjWNX18f2Rg
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
        - id: cs_uhMppK3qe7b9ypTSXK1RDY
          claim_id: c_DdT9ybDZAqFWmtkmtceDsz
          source_id: s_tNzMtdY55qHsbuaf9eZ5Zt
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

# 王瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓛（CBDB 483181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483181&o=json)
