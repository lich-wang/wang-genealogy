---
schema: wang-person/v1
id: p_i5579JHLY2cRuS7YHKZJ5T
status: active
merged_into: null
display_name: 王萬樞
revision: 2
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
  ancestors:
    - claim:
        id: c_gQs2rSgXMnMIJF4BtcRIFT
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jj-YVsjUzEaUdz__op241l
          claim_id: c_gQs2rSgXMnMIJF4BtcRIFT
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f5uvxnPRT14yx91yn4yLGC
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_ch4WSZwoeM4ioMVup6I8-X
        subject_person_id: p_LmvwBv9Vm8BVkEPgL1A7GT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i5579JHLY2cRuS7YHKZJ5T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_of-NyooUxO8xkavIccgT6r
          claim_id: c_ch4WSZwoeM4ioMVup6I8-X
          source_id: s_JiBcFyQDVHFNQoKUexCzy3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LmvwBv9Vm8BVkEPgL1A7GT
        status: active
        display_name: 王寀
        merged_into_person_id: null
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
| ancestors | p_f5uvxnPRT14yx91yn4yLGC | 王韶 | accepted |
| ancestors | p_LmvwBv9Vm8BVkEPgL1A7GT | 王寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬樞（CBDB 12051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12051&o=json)
