---
schema: wang-person/v1
id: p_FKGACGJEtpNfY27ed69fiJ
status: active
merged_into: null
display_name: 王宮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8rpnTMmrNqVvDLFM6eb5r
        subject_person_id: p_FKGACGJEtpNfY27ed69fiJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A51Qa5Ucp5trE2PUijeKZh
          claim_id: c_A8rpnTMmrNqVvDLFM6eb5r
          source_id: s_Mf9BSg5hjkvpzAgtUqWiZi
          stance: supports
          locator: CBDB:637157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637157）
          source: &a1
            id: s_Mf9BSg5hjkvpzAgtUqWiZi
            source_type: api_record
            title: 中国历代人物传记资料库：王宮（CBDB 637157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637157&o=json
            external_identifier: CBDB:637157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e75uJxQrNnzQ7HtmHrNast
        subject_person_id: p_FKGACGJEtpNfY27ed69fiJ
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
        - id: cs_Dy1hph17EgyH2sFHaEphfX
          claim_id: c_e75uJxQrNnzQ7HtmHrNast
          source_id: s_Mf9BSg5hjkvpzAgtUqWiZi
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

# 王宮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宮（CBDB 637157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637157&o=json)
