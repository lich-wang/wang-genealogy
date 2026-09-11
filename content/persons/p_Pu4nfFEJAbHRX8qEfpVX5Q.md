---
schema: wang-person/v1
id: p_Pu4nfFEJAbHRX8qEfpVX5Q
status: active
merged_into: null
display_name: 王還樸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N4rXDq8VvwWKYiUSGgjDQE
        subject_person_id: p_Pu4nfFEJAbHRX8qEfpVX5Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王還樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T7H1B9QMypDzX93YxXmPM2
          claim_id: c_N4rXDq8VvwWKYiUSGgjDQE
          source_id: s_LEqS2x5FmoZX2Y4QhmjxT1
          stance: supports
          locator: CBDB:71665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71665）
          source: &a1
            id: s_LEqS2x5FmoZX2Y4QhmjxT1
            source_type: api_record
            title: 中国历代人物传记资料库：王還樸（CBDB 71665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71665&o=json
            external_identifier: CBDB:71665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PKZEkp5hM1cJ86CQ1PvDKH
        subject_person_id: p_Pu4nfFEJAbHRX8qEfpVX5Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EsXL5jJaELjGL1WY3RD9AH
          claim_id: c_PKZEkp5hM1cJ86CQ1PvDKH
          source_id: s_LEqS2x5FmoZX2Y4QhmjxT1
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
        id: c_HkAwu8kT3cREtP1CbdQn5z
        subject_person_id: p_Pu4nfFEJAbHRX8qEfpVX5Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王還樸（生于1694年），清人物。籍贯太康。（中国历代人物传记资料库 CBDB 71665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OU1Y-7_IVbvcqQayNE_oNd
          claim_id: c_HkAwu8kT3cREtP1CbdQn5z
          source_id: s_LEqS2x5FmoZX2Y4QhmjxT1
          stance: supports
          locator: CBDB:71665
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

# 王還樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王還樸 | accepted |
| birth.date | 1694年 | accepted |
| bio.summary | 王還樸（生于1694年），清人物。籍贯太康。（中国历代人物传记资料库 CBDB 71665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王還樸（CBDB 71665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71665&o=json)
