---
schema: wang-person/v1
id: p_cbFanJ9zDSK2FXjPH4P2o2
status: active
merged_into: null
display_name: 王藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpUzAjXtwRd5QsGdUkeoap
        subject_person_id: p_cbFanJ9zDSK2FXjPH4P2o2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jsZ14pwovAfHifD8WvwU1K
          claim_id: c_dpUzAjXtwRd5QsGdUkeoap
          source_id: s_4vJ3zia53ZF8zFUsPpDJ2d
          stance: supports
          locator: CBDB:61576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61576）
          source: &a1
            id: s_4vJ3zia53ZF8zFUsPpDJ2d
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 61576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61576&o=json
            external_identifier: CBDB:61576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aLMbj8Z5pZ24hw1X957kFz
        subject_person_id: p_cbFanJ9zDSK2FXjPH4P2o2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3uVngADim8vzd9im2HGAgn
          claim_id: c_aLMbj8Z5pZ24hw1X957kFz
          source_id: s_4vJ3zia53ZF8zFUsPpDJ2d
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
        id: c_wrxEvY7U83MfA9yoS1Xieh
        subject_person_id: p_cbFanJ9zDSK2FXjPH4P2o2
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
        - id: cs_e9aQicckkJpz1z8F5fF983
          claim_id: c_wrxEvY7U83MfA9yoS1Xieh
          source_id: s_4vJ3zia53ZF8zFUsPpDJ2d
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

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| birth.date | 1787年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 61576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61576&o=json)
