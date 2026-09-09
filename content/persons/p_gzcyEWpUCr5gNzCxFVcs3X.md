---
schema: wang-person/v1
id: p_gzcyEWpUCr5gNzCxFVcs3X
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U1jHPWLopAkRPMQ8MamgVi
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2g2Mvnhvn31Ny6qH6B2RF
          claim_id: c_U1jHPWLopAkRPMQ8MamgVi
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
          stance: supports
          locator: CBDB:67901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67901）
          source: &a1
            id: s_P8EVzQGCVvtfnWbVMBRKGN
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 67901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67901&o=json
            external_identifier: CBDB:67901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6kNVqZu94LGBSYxPWdHTCU
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZWQkarGBCVgu9Jx6hyR4KL
          claim_id: c_6kNVqZu94LGBSYxPWdHTCU
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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
        id: c_778SN6JAgyQNM4EN6LzxNb
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
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
        - id: cs_p9v816U5j6P8QoTvP7QByZ
          claim_id: c_778SN6JAgyQNM4EN6LzxNb
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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
        id: c_F8771QHiDBkGZqY4QmGuKt
        subject_person_id: p_gzcyEWpUCr5gNzCxFVcs3X
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
        - id: cs_ARnetpcrGNzY1N79rQazHw
          claim_id: c_F8771QHiDBkGZqY4QmGuKt
          source_id: s_P8EVzQGCVvtfnWbVMBRKGN
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| birth.date | 1475年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 67901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67901&o=json)
