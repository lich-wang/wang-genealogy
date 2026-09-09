---
schema: wang-person/v1
id: p_Lj8ZDGqmsPetsBLLN8QVqD
status: active
merged_into: null
display_name: 王羾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JBQaFnFHuQV3D2Ga4j5Hwt
        subject_person_id: p_Lj8ZDGqmsPetsBLLN8QVqD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGL74G92iKbfKo6muJtXq9
          claim_id: c_JBQaFnFHuQV3D2Ga4j5Hwt
          source_id: s_GJ2JE2tvSmr6863NC8rkfF
          stance: supports
          locator: CBDB:65800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65800）
          source: &a1
            id: s_GJ2JE2tvSmr6863NC8rkfF
            source_type: api_record
            title: 中国历代人物传记资料库：王羾（CBDB 65800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65800&o=json
            external_identifier: CBDB:65800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n5ac6Y3R6zTpeEw1uN7915
        subject_person_id: p_Lj8ZDGqmsPetsBLLN8QVqD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UG9sRGto3F8snE1V8BqUpB
          claim_id: c_n5ac6Y3R6zTpeEw1uN7915
          source_id: s_GJ2JE2tvSmr6863NC8rkfF
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
        id: c_zMuCTWzzPoz732BSWNHGvj
        subject_person_id: p_Lj8ZDGqmsPetsBLLN8QVqD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NTU9F111M61WQyJindXF9c
          claim_id: c_zMuCTWzzPoz732BSWNHGvj
          source_id: s_GJ2JE2tvSmr6863NC8rkfF
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
        id: c_Z853eR5ApjTBsCGL275YJr
        subject_person_id: p_Lj8ZDGqmsPetsBLLN8QVqD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SV94VhMChW7hrniV3zagwd
          claim_id: c_Z853eR5ApjTBsCGL275YJr
          source_id: s_GJ2JE2tvSmr6863NC8rkfF
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

# 王羾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羾 | accepted |
| birth.date | 1678年 | accepted |
| death.date | 1749年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羾（CBDB 65800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65800&o=json)
