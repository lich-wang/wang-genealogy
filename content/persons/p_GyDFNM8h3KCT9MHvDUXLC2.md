---
schema: wang-person/v1
id: p_GyDFNM8h3KCT9MHvDUXLC2
status: active
merged_into: null
display_name: 王惟誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c8NkfJ2ECFC9x95pUpzRCx
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZjaJg7F79Sn3wSMEu6dnA
          claim_id: c_c8NkfJ2ECFC9x95pUpzRCx
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
          stance: supports
          locator: CBDB:143228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143228）
          source: &a1
            id: s_i7VeDGRjr3jLVssGMAx7FC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟誠（CBDB 143228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json
            external_identifier: CBDB:143228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u4FssvWsU75nVKHFCopRWo
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AEYspTxKqVA8zniKRktuz
          claim_id: c_u4FssvWsU75nVKHFCopRWo
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
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
        id: c_zpttdry5Y41avxbEJeriNJ
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rTDHCiHXjwnHV9oEyJoqib
          claim_id: c_zpttdry5Y41avxbEJeriNJ
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
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
        id: c_2mYjkVAvAjiLMxd1JB6LgT
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eYkYJijiB7FPpc9gRxGWVe
          claim_id: c_2mYjkVAvAjiLMxd1JB6LgT
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
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

# 王惟誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟誠 | accepted |
| birth.date | 724年 | accepted |
| death.date | 806年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟誠（CBDB 143228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json)
