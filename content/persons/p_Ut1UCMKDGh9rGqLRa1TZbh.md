---
schema: wang-person/v1
id: p_Ut1UCMKDGh9rGqLRa1TZbh
status: active
merged_into: null
display_name: 王庭蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6BGF3s84w6Umxm5WGaHvMN
        subject_person_id: p_Ut1UCMKDGh9rGqLRa1TZbh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ug55XFYWhdreBwC4WonpiZ
          claim_id: c_6BGF3s84w6Umxm5WGaHvMN
          source_id: s_qjvixbCWFxCZ443tzgyfEc
          stance: supports
          locator: CBDB:69353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69353）
          source: &a1
            id: s_qjvixbCWFxCZ443tzgyfEc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭蘭（CBDB 69353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69353&o=json
            external_identifier: CBDB:69353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aUHgo5bFEJYcYPAGkgBBJB
        subject_person_id: p_Ut1UCMKDGh9rGqLRa1TZbh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1674年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VdD4mQAhEb3Rq8V3gNEwhL
          claim_id: c_aUHgo5bFEJYcYPAGkgBBJB
          source_id: s_qjvixbCWFxCZ443tzgyfEc
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
        id: c_pWoT92h4vCbT4YyYSaRXny
        subject_person_id: p_Ut1UCMKDGh9rGqLRa1TZbh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1745年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12Az8ZgAFFRpbvW3yV36Pn
          claim_id: c_pWoT92h4vCbT4YyYSaRXny
          source_id: s_qjvixbCWFxCZ443tzgyfEc
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
        id: c_c5AcfDWfxXSHUkbx98BXFb
        subject_person_id: p_Ut1UCMKDGh9rGqLRa1TZbh
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
        - id: cs_pTQkwXyQf47kJbRLZBBuVD
          claim_id: c_c5AcfDWfxXSHUkbx98BXFb
          source_id: s_qjvixbCWFxCZ443tzgyfEc
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

# 王庭蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭蘭 | accepted |
| birth.date | 1674年 | accepted |
| death.date | 1745年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭蘭（CBDB 69353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69353&o=json)
