---
schema: wang-person/v1
id: p_Hx1uqZdSdV9DHzkCraHrC8
status: active
merged_into: null
display_name: 王佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3uLfXMR4FSKyiWFwHYhyHE
        subject_person_id: p_Hx1uqZdSdV9DHzkCraHrC8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fu56Df5Sx2DMrzaKb7mGJ3
          claim_id: c_3uLfXMR4FSKyiWFwHYhyHE
          source_id: s_18yDSe4syUHvunU57Wa2Gu
          stance: supports
          locator: CBDB:71079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71079）
          source: &a1
            id: s_18yDSe4syUHvunU57Wa2Gu
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 71079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71079&o=json
            external_identifier: CBDB:71079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UwXXPAXfYeDHJ2sTZZwJuX
        subject_person_id: p_Hx1uqZdSdV9DHzkCraHrC8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1702年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDiVVKhY5rdDQQbMcuioyy
          claim_id: c_UwXXPAXfYeDHJ2sTZZwJuX
          source_id: s_18yDSe4syUHvunU57Wa2Gu
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
        id: c_4p7VrAQhsbcybTxU4hePUf
        subject_person_id: p_Hx1uqZdSdV9DHzkCraHrC8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1770年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHiGqrVYAZtJejL8z8ruHK
          claim_id: c_4p7VrAQhsbcybTxU4hePUf
          source_id: s_18yDSe4syUHvunU57Wa2Gu
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
        id: c_CPj87f6ocAemBYZTzAPXFe
        subject_person_id: p_Hx1uqZdSdV9DHzkCraHrC8
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
        - id: cs_8an8BMRMRLRDH2HEdiGA44
          claim_id: c_CPj87f6ocAemBYZTzAPXFe
          source_id: s_18yDSe4syUHvunU57Wa2Gu
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

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| birth.date | 1702年 | accepted |
| death.date | 1770年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佑（CBDB 71079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71079&o=json)
