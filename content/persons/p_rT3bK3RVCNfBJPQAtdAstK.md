---
schema: wang-person/v1
id: p_rT3bK3RVCNfBJPQAtdAstK
status: active
merged_into: null
display_name: 王鳴鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5TvhrZNwz4HEn4rT1Km3kN
        subject_person_id: p_rT3bK3RVCNfBJPQAtdAstK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U49JMdDF5gH8UBM1QE2MNk
          claim_id: c_5TvhrZNwz4HEn4rT1Km3kN
          source_id: s_mii3oWe6ypq4X8rANARaB3
          stance: supports
          locator: CBDB:202244
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202244）
          source: &a1
            id: s_mii3oWe6ypq4X8rANARaB3
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴鳳（CBDB 202244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202244&o=json
            external_identifier: CBDB:202244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zEaCQ5FPbC1aNU4QJb7JaW
        subject_person_id: p_rT3bK3RVCNfBJPQAtdAstK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b27YLQUDK7CDegPaRRD5FA
          claim_id: c_zEaCQ5FPbC1aNU4QJb7JaW
          source_id: s_mii3oWe6ypq4X8rANARaB3
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
        id: c_ZURvpet8wc6ezKCUmKjNB9
        subject_person_id: p_rT3bK3RVCNfBJPQAtdAstK
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
        - id: cs_Z5n3PTmGQ3rZCeEDW5qazQ
          claim_id: c_ZURvpet8wc6ezKCUmKjNB9
          source_id: s_mii3oWe6ypq4X8rANARaB3
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

# 王鳴鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳴鳳 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳴鳳（CBDB 202244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202244&o=json)
