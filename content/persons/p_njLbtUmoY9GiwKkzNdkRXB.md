---
schema: wang-person/v1
id: p_njLbtUmoY9GiwKkzNdkRXB
status: active
merged_into: null
display_name: 王洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Co5gng3gP58VsC8RDiQe5V
        subject_person_id: p_njLbtUmoY9GiwKkzNdkRXB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TEpj16oikGMtxBMnFxKEB1
          claim_id: c_Co5gng3gP58VsC8RDiQe5V
          source_id: s_9AXSHHHLwS3XPGt3VyCq5y
          stance: supports
          locator: CBDB:126590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126590）
          source: &a1
            id: s_9AXSHHHLwS3XPGt3VyCq5y
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 126590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126590&o=json
            external_identifier: CBDB:126590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D6zvf44L8QYb15LKgudgNt
        subject_person_id: p_njLbtUmoY9GiwKkzNdkRXB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1379年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kugkqsZX6vDwiJNbdFRQKA
          claim_id: c_D6zvf44L8QYb15LKgudgNt
          source_id: s_9AXSHHHLwS3XPGt3VyCq5y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WRMBTqDHEEiuTwcJ9Nrk8v
        subject_person_id: p_njLbtUmoY9GiwKkzNdkRXB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vf9YpP1dPcHNMJVfJNvNzv
          claim_id: c_WRMBTqDHEEiuTwcJ9Nrk8v
          source_id: s_9AXSHHHLwS3XPGt3VyCq5y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wgKmXsHoD4YMQrmTFpbPiz
        subject_person_id: p_njLbtUmoY9GiwKkzNdkRXB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪（1379年—1420年），明人物。籍贯錢塘，身份为並稱/齊名，入仕進士，曾任副總裁、禮部主事。（中国历代人物传记资料库 CBDB 126590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTWxDu-gJQcitJxtSRDxHJ
          claim_id: c_wgKmXsHoD4YMQrmTFpbPiz
          source_id: s_9AXSHHHLwS3XPGt3VyCq5y
          stance: supports
          locator: CBDB:126590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| birth.date | 1379年 | accepted |
| death.date | 1420年 | accepted |
| bio.summary | 王洪（1379年—1420年），明人物。籍贯錢塘，身份为並稱/齊名，入仕進士，曾任副總裁、禮部主事。（中国历代人物传记资料库 CBDB 126590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 126590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126590&o=json)
