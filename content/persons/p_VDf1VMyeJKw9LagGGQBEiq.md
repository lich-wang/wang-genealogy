---
schema: wang-person/v1
id: p_VDf1VMyeJKw9LagGGQBEiq
status: active
merged_into: null
display_name: 王彧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hyg7rSfsppf4nPi2yUifku
        subject_person_id: p_VDf1VMyeJKw9LagGGQBEiq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JeMsGskj3Epq5HbvtZeWF3
          claim_id: c_Hyg7rSfsppf4nPi2yUifku
          source_id: s_BxSdcAA143RpLCasgXsi8S
          stance: supports
          locator: CBDB:175783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175783）
          source: &a1
            id: s_BxSdcAA143RpLCasgXsi8S
            source_type: api_record
            title: 中国历代人物传记资料库：王彧（CBDB 175783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175783&o=json
            external_identifier: CBDB:175783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cjh2km3dXCTNrfYWZ3Tm54
        subject_person_id: p_VDf1VMyeJKw9LagGGQBEiq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TP3fMQe7JRmAMf6PQwPHEf
          claim_id: c_cjh2km3dXCTNrfYWZ3Tm54
          source_id: s_BxSdcAA143RpLCasgXsi8S
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
        id: c_WoDTdr4EBASeZ6TKERwr66
        subject_person_id: p_VDf1VMyeJKw9LagGGQBEiq
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
        - id: cs_u5j6LqTXP35pZFwgVah8AJ
          claim_id: c_WoDTdr4EBASeZ6TKERwr66
          source_id: s_BxSdcAA143RpLCasgXsi8S
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

# 王彧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彧 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彧（CBDB 175783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175783&o=json)
