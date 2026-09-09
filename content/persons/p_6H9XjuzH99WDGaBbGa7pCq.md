---
schema: wang-person/v1
id: p_6H9XjuzH99WDGaBbGa7pCq
status: active
merged_into: null
display_name: 王新命
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpGmLLdDhgxwfnyuKRJS2M
        subject_person_id: p_6H9XjuzH99WDGaBbGa7pCq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qy8TQSdHaAQc5Si9yA1dQB
          claim_id: c_dpGmLLdDhgxwfnyuKRJS2M
          source_id: s_6MfZM1TexKAfARVWCAcbDn
          stance: supports
          locator: CBDB:56868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56868）
          source: &a1
            id: s_6MfZM1TexKAfARVWCAcbDn
            source_type: api_record
            title: 中国历代人物传记资料库：王新命（CBDB 56868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56868&o=json
            external_identifier: CBDB:56868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zFs4Nz1grfeCGjzZyvDpex
        subject_person_id: p_6H9XjuzH99WDGaBbGa7pCq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1633年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cRQaV2D3fyX31WWwABCw6x
          claim_id: c_zFs4Nz1grfeCGjzZyvDpex
          source_id: s_6MfZM1TexKAfARVWCAcbDn
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
        id: c_ppdBctFYytM96sfL64vxV9
        subject_person_id: p_6H9XjuzH99WDGaBbGa7pCq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1708年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHHMciGPmS7LkTNFucPfxk
          claim_id: c_ppdBctFYytM96sfL64vxV9
          source_id: s_6MfZM1TexKAfARVWCAcbDn
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
        id: c_nz89qMMNW4iCNboasNRQdY
        subject_person_id: p_6H9XjuzH99WDGaBbGa7pCq
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
        - id: cs_DWKkGiqSkWFV44SyeUrgvm
          claim_id: c_nz89qMMNW4iCNboasNRQdY
          source_id: s_6MfZM1TexKAfARVWCAcbDn
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

# 王新命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新命 | accepted |
| birth.date | 1633年 | accepted |
| death.date | 1708年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新命（CBDB 56868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56868&o=json)
