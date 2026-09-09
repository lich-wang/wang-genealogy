---
schema: wang-person/v1
id: p_nTV1T9RX74vHEA3tyMaebm
status: active
merged_into: null
display_name: 王與齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_egBFVPUg7n5MFPoHzzKQEm
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9ieNaaoujaRFt1o5PbS5T
          claim_id: c_egBFVPUg7n5MFPoHzzKQEm
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: CBDB:68464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68464）
          source: &a1
            id: s_VNsrGWznq4wS5HwLa4u6ov
            source_type: api_record
            title: 中国历代人物传记资料库：王與齡（CBDB 68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kkop8pr3DEXgL4Yv2LSbwV
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgwWZhoY6JGs7idP43bcSB
          claim_id: c_kkop8pr3DEXgL4Yv2LSbwV
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
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
        id: c_d3ZtW1HriH5mrWRX4xPKcv
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JNgxwXD7oW7TEpq6353ma6
          claim_id: c_d3ZtW1HriH5mrWRX4xPKcv
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
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
        id: c_GDDqRqvgpMJ9dRTTDLEQs6
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
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
        - id: cs_j73KwCTVRmwEeZYSQ7xCVa
          claim_id: c_GDDqRqvgpMJ9dRTTDLEQs6
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
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

# 王與齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與齡 | accepted |
| birth.date | 1508年 | accepted |
| death.date | 1564年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與齡（CBDB 68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
