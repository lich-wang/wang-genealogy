---
schema: wang-person/v1
id: p_DNERe7qJNb3V7E5Uc4DPd7
status: active
merged_into: null
display_name: 王竑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EocrbrQvpiB2SntULzi6S9
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ALJw1q4RgeZ3G74wDdcmP
          claim_id: c_EocrbrQvpiB2SntULzi6S9
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
          stance: supports
          locator: CBDB:67649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67649）
          source: &a1
            id: s_gGJgZArxs2CRiEaQd8Eu1r
            source_type: api_record
            title: 中国历代人物传记资料库：王竑（CBDB 67649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json
            external_identifier: CBDB:67649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_afaQgUuiAesb4R1ZBEkpkW
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BJPeb62Mm9gax49MFZrf9D
          claim_id: c_afaQgUuiAesb4R1ZBEkpkW
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
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
        id: c_pv2gQrDJC3X1CaxpPw2ZN8
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hCMJDGnhXjFXDrEAL3u5C5
          claim_id: c_pv2gQrDJC3X1CaxpPw2ZN8
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
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
        id: c_FchpmsQmXWafYWQEbHVmd2
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
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
        - id: cs_bjTwEdD3WAqATZNYJCTVjp
          claim_id: c_FchpmsQmXWafYWQEbHVmd2
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
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

# 王竑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王竑 | accepted |
| birth.date | 1414年 | accepted |
| death.date | 1488年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王竑（CBDB 67649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json)
