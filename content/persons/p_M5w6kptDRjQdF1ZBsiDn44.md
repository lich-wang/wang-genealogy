---
schema: wang-person/v1
id: p_M5w6kptDRjQdF1ZBsiDn44
status: active
merged_into: null
display_name: 王繼琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Es7QvqFGeooCv5u8RKYvyB
        subject_person_id: p_M5w6kptDRjQdF1ZBsiDn44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y7Euvez9oMrcjS5eFJ9DcB
          claim_id: c_Es7QvqFGeooCv5u8RKYvyB
          source_id: s_NmX8CQAjemK1YLV9m1YgbN
          stance: supports
          locator: CBDB:639877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639877）
          source: &a1
            id: s_NmX8CQAjemK1YLV9m1YgbN
            source_type: api_record
            title: 中国历代人物传记资料库：王繼琮（CBDB 639877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639877&o=json
            external_identifier: CBDB:639877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T5XA6F3FauvvnnunSqwQUE
        subject_person_id: p_M5w6kptDRjQdF1ZBsiDn44
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
        - id: cs_hn8MVX8TxetEZ3x74s9aaV
          claim_id: c_T5XA6F3FauvvnnunSqwQUE
          source_id: s_NmX8CQAjemK1YLV9m1YgbN
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

# 王繼琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼琮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼琮（CBDB 639877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639877&o=json)
