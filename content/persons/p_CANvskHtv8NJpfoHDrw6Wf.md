---
schema: wang-person/v1
id: p_CANvskHtv8NJpfoHDrw6Wf
status: active
merged_into: null
display_name: 王翊中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XZfErvGy3nSdBkQmeHzuJT
        subject_person_id: p_CANvskHtv8NJpfoHDrw6Wf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_58cSxnC3chT26a7AAHMUY1
          claim_id: c_XZfErvGy3nSdBkQmeHzuJT
          source_id: s_K6ka2C32PoNjtW2gfEA5CR
          stance: supports
          locator: CBDB:639892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639892）
          source: &a1
            id: s_K6ka2C32PoNjtW2gfEA5CR
            source_type: api_record
            title: 中国历代人物传记资料库：王翊中（CBDB 639892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639892&o=json
            external_identifier: CBDB:639892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47WdHMTTw6ygGgrFnjQ1me
        subject_person_id: p_CANvskHtv8NJpfoHDrw6Wf
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
        - id: cs_HDxm8DkSZ9SWjHBNLv54sY
          claim_id: c_47WdHMTTw6ygGgrFnjQ1me
          source_id: s_K6ka2C32PoNjtW2gfEA5CR
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

# 王翊中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊中 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翊中（CBDB 639892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639892&o=json)
