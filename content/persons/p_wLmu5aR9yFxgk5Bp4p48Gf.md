---
schema: wang-person/v1
id: p_wLmu5aR9yFxgk5Bp4p48Gf
status: active
merged_into: null
display_name: 王元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_reP3N64XC1LdR6wHkpHgLd
        subject_person_id: p_wLmu5aR9yFxgk5Bp4p48Gf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZXLUkSfPLL7GgPKqcpwA6A
          claim_id: c_reP3N64XC1LdR6wHkpHgLd
          source_id: s_mLDCfpRqRVQxGTBMVcdQNr
          stance: supports
          locator: CBDB:100632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100632）
          source: &a1
            id: s_mLDCfpRqRVQxGTBMVcdQNr
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 100632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100632&o=json
            external_identifier: CBDB:100632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U4t9ACtrETpxR6n7c3sNYz
        subject_person_id: p_wLmu5aR9yFxgk5Bp4p48Gf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQb7s7SjXrZpeEFFsaBQAD
          claim_id: c_U4t9ACtrETpxR6n7c3sNYz
          source_id: s_mLDCfpRqRVQxGTBMVcdQNr
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
        id: c_LqqXKEdM6EXiWPLHPY5PrU
        subject_person_id: p_wLmu5aR9yFxgk5Bp4p48Gf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1356年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rM2tgtbfM67aju1YrHqajY
          claim_id: c_LqqXKEdM6EXiWPLHPY5PrU
          source_id: s_mLDCfpRqRVQxGTBMVcdQNr
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
        id: c_rx9dJBnq68KAcW6FwW5wQd
        subject_person_id: p_wLmu5aR9yFxgk5Bp4p48Gf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMZ3qCX8Zwt9FMgkvmDoGk
          claim_id: c_rx9dJBnq68KAcW6FwW5wQd
          source_id: s_mLDCfpRqRVQxGTBMVcdQNr
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

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| birth.date | 1278年 | accepted |
| death.date | 1356年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 100632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100632&o=json)
