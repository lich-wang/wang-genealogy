---
schema: wang-person/v1
id: p_vKDEPVDgmYej4wAakeHRGS
status: active
merged_into: null
display_name: 王嵎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_26Twyr7SjoVf6i1p7iNRPj
        subject_person_id: p_vKDEPVDgmYej4wAakeHRGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bMDZFETSdcnuYLJjyhzUWZ
          claim_id: c_26Twyr7SjoVf6i1p7iNRPj
          source_id: s_L64G8yV8Eq6eH4zjFrP3EZ
          stance: supports
          locator: CBDB:18187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18187）
          source: &a1
            id: s_L64G8yV8Eq6eH4zjFrP3EZ
            source_type: api_record
            title: 中国历代人物传记资料库：王嵎（CBDB 18187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18187&o=json
            external_identifier: CBDB:18187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S6ZCeATNhbFJ9Hxtgk19ib
        subject_person_id: p_vKDEPVDgmYej4wAakeHRGS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1182年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLdHSgokJhx8vWAADc1QDK
          claim_id: c_S6ZCeATNhbFJ9Hxtgk19ib
          source_id: s_L64G8yV8Eq6eH4zjFrP3EZ
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
        id: c_aZDCxUwB1Jf4m6sHwwxnJq
        subject_person_id: p_vKDEPVDgmYej4wAakeHRGS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵎（卒于1182年），宋人物。籍贯烏程，身份为士人。（中国历代人物传记资料库 CBDB 18187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Trkg2HAJQd9mfd3pBJ_4E5
          claim_id: c_aZDCxUwB1Jf4m6sHwwxnJq
          source_id: s_L64G8yV8Eq6eH4zjFrP3EZ
          stance: supports
          locator: CBDB:18187
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

# 王嵎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵎 | accepted |
| death.date | 1182年 | accepted |
| bio.summary | 王嵎（卒于1182年），宋人物。籍贯烏程，身份为士人。（中国历代人物传记资料库 CBDB 18187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵎（CBDB 18187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18187&o=json)
