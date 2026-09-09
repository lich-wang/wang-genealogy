---
schema: wang-person/v1
id: p_TdY8PeNMMQnspsGSLcC9h4
status: active
merged_into: null
display_name: 王思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SxhmHAhWTNf69UE2116cfX
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FiLKhfGLTjKXz1gMFiSP7w
          claim_id: c_SxhmHAhWTNf69UE2116cfX
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
          stance: supports
          locator: CBDB:68065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68065）
          source: &a1
            id: s_13bLqZr3bWKRDKJ3R5NeYd
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 68065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68065&o=json
            external_identifier: CBDB:68065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tWWVns8w8agJ7DiPZpzG3z
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvTtAMhMx5UrRrBCsrgAec
          claim_id: c_tWWVns8w8agJ7DiPZpzG3z
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
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
        id: c_akx57MccMm7YWNJk1myc61
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xvKfE6dq74ZJhGhG67rfJU
          claim_id: c_akx57MccMm7YWNJk1myc61
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
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
        id: c_jGnSKyBj4D7nPCLugXNJMu
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
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
        - id: cs_y5bYBMhyR32ZF31mAycjYE
          claim_id: c_jGnSKyBj4D7nPCLugXNJMu
          source_id: s_13bLqZr3bWKRDKJ3R5NeYd
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

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| birth.date | 1481年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思（CBDB 68065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68065&o=json)
