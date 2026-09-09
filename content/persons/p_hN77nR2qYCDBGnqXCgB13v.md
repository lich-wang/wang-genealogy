---
schema: wang-person/v1
id: p_hN77nR2qYCDBGnqXCgB13v
status: active
merged_into: null
display_name: 王贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gb9C5vFTyfD34bmDDcyUsD
        subject_person_id: p_hN77nR2qYCDBGnqXCgB13v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eRpm2bQftRqQXTrt34DCHN
          claim_id: c_Gb9C5vFTyfD34bmDDcyUsD
          source_id: s_R7W5kiQV2yyTTx91is6XhV
          stance: supports
          locator: CBDB:699383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699383）
          source: &a1
            id: s_R7W5kiQV2yyTTx91is6XhV
            source_type: api_record
            title: 中国历代人物传记资料库：王贊（CBDB 699383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699383&o=json
            external_identifier: CBDB:699383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HpRBtBsDYLDVwLaytdDAd3
        subject_person_id: p_hN77nR2qYCDBGnqXCgB13v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XEDK1kqVm4uZQ2tpNogAMm
          claim_id: c_HpRBtBsDYLDVwLaytdDAd3
          source_id: s_R7W5kiQV2yyTTx91is6XhV
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

# 王贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊（CBDB 699383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699383&o=json)
