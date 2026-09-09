---
schema: wang-person/v1
id: p_D5ec5jupf1WyP5yU3NHEdT
status: active
merged_into: null
display_name: 王寵光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2m7hUxkBgT89ZoteTHqK2r
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QNGx6A9YNNbzeNfRQG8DPj
          claim_id: c_2m7hUxkBgT89ZoteTHqK2r
          source_id: s_wdV6K2ia8sq6D4XoM6FygF
          stance: supports
          locator: CBDB:223500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223500）
          source: &a1
            id: s_wdV6K2ia8sq6D4XoM6FygF
            source_type: api_record
            title: 中国历代人物传记资料库：王寵光（CBDB 223500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223500&o=json
            external_identifier: CBDB:223500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2kQ6yYy1a8o6mxeaPY6un
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
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
        - id: cs_XPNA5XhKwPr1bgLRZmKFUH
          claim_id: c_U2kQ6yYy1a8o6mxeaPY6un
          source_id: s_wdV6K2ia8sq6D4XoM6FygF
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

# 王寵光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵光 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寵光（CBDB 223500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223500&o=json)
