---
schema: wang-person/v1
id: p_jAVyhBnNZH6E8YuMK9H782
status: active
merged_into: null
display_name: 王坤厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1HQK76fCJFo1QgEwJw8YJp
        subject_person_id: p_jAVyhBnNZH6E8YuMK9H782
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43yooAm2PnHQnd1dGS3W2G
          claim_id: c_1HQK76fCJFo1QgEwJw8YJp
          source_id: s_s9J6HnLrKP6o68xem54F6Y
          stance: supports
          locator: CBDB:694398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694398）
          source: &a1
            id: s_s9J6HnLrKP6o68xem54F6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王坤厚（CBDB 694398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694398&o=json
            external_identifier: CBDB:694398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LC2MQimeKXuJB8eY3ywA2g
        subject_person_id: p_jAVyhBnNZH6E8YuMK9H782
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
        - id: cs_u8X2pqvLfaapPdG76XeWCD
          claim_id: c_LC2MQimeKXuJB8eY3ywA2g
          source_id: s_s9J6HnLrKP6o68xem54F6Y
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

# 王坤厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤厚 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坤厚（CBDB 694398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694398&o=json)
