---
schema: wang-person/v1
id: p_BWHc8HQY8MKvfURPueK7Ht
status: active
merged_into: null
display_name: 王醇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TpZGk2q3VfjYvotNCszEGp
        subject_person_id: p_BWHc8HQY8MKvfURPueK7Ht
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王醇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tMd9UWtoXBDQRu6Ezc3nC3
          claim_id: c_TpZGk2q3VfjYvotNCszEGp
          source_id: s_eRJ6eMCqUoxdvC58ByUKbJ
          stance: supports
          locator: CBDB:640491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640491）
          source: &a1
            id: s_eRJ6eMCqUoxdvC58ByUKbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王醇（CBDB 640491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640491&o=json
            external_identifier: CBDB:640491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ehge4uDduASfKcdyK5bHb3
        subject_person_id: p_BWHc8HQY8MKvfURPueK7Ht
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
        - id: cs_h56t7fPA3hmoH5vubMkQZw
          claim_id: c_ehge4uDduASfKcdyK5bHb3
          source_id: s_eRJ6eMCqUoxdvC58ByUKbJ
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

# 王醇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王醇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王醇（CBDB 640491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640491&o=json)
