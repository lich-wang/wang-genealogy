---
schema: wang-person/v1
id: p_2LCs128HMx8dbvsEorc8ou
status: active
merged_into: null
display_name: 王鉉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8NPyAVW8VvmaHzZLD5v63
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5YBaY1eVS2gbHvD5v8cpuv
          claim_id: c_E8NPyAVW8VvmaHzZLD5v63
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: CBDB:200018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200018）
          source: &a1
            id: s_dKnFiskbarp17JvcEgAkrM
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 200018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json
            external_identifier: CBDB:200018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_S3yJGHWs2TfBje24knDFCa
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s9zEgBpN7dS1wKZkfm92PJ
          claim_id: c_S3yJGHWs2TfBje24knDFCa
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j8reG6ssQMj5qPXGQ2J2mZ
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
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
        - id: cs_rzRFqgJEXgvTmTrnuK2zAz
          claim_id: c_j8reG6ssQMj5qPXGQ2J2mZ
          source_id: s_dKnFiskbarp17JvcEgAkrM
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

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 200018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json)
