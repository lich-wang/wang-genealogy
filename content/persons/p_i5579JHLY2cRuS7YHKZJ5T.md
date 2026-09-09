---
schema: wang-person/v1
id: p_i5579JHLY2cRuS7YHKZJ5T
status: active
merged_into: null
display_name: 王萬樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Joh2xrirTk1heHgwsejC3n
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9aH1unBDDFWjMZrh7eiaL
          claim_id: c_Joh2xrirTk1heHgwsejC3n
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: CBDB:12051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12051）
          source: &a1
            id: s_JiBcFyQDVHFNQoKUexCzy3
            source_type: api_record
            title: 中国历代人物传记资料库：王萬樞（CBDB 12051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json
            external_identifier: CBDB:12051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m82URwm53HFcJhSNkExUgc
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gEujSekDnPPPb1jsmjGtL1
          claim_id: c_m82URwm53HFcJhSNkExUgc
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
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
        id: c_4wBLMwsCyJerSRx3HfaaBh
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1205年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xBgoYPWeENUNzNMtSb5G9h
          claim_id: c_4wBLMwsCyJerSRx3HfaaBh
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
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
        id: c_r1ZxZrq3DcuMPnF6V4tfF8
        subject_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h71VZn63BrUMLUEjUFZx7A
          claim_id: c_r1ZxZrq3DcuMPnF6V4tfF8
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
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

# 王萬樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬樞 | accepted |
| birth.date | 1143年 | accepted |
| death.date | 1205年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬樞（CBDB 12051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json)
