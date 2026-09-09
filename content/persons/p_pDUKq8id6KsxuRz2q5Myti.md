---
schema: wang-person/v1
id: p_pDUKq8id6KsxuRz2q5Myti
status: active
merged_into: null
display_name: 王翱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sg6iVbrgK5CTAL8TnBy1Ym
        subject_person_id: p_pDUKq8id6KsxuRz2q5Myti
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ej5N3th4LakLwJ8PagHSY
          claim_id: c_Sg6iVbrgK5CTAL8TnBy1Ym
          source_id: s_MoQugiDMDCCMuDM4SPzups
          stance: supports
          locator: CBDB:67645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67645）
          source: &a1
            id: s_MoQugiDMDCCMuDM4SPzups
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 67645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67645&o=json
            external_identifier: CBDB:67645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7Yty9CBsXKjbkJkCCCfJYr
        subject_person_id: p_pDUKq8id6KsxuRz2q5Myti
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1384年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61v5SHgDN3qehHVxAaLbD7
          claim_id: c_7Yty9CBsXKjbkJkCCCfJYr
          source_id: s_MoQugiDMDCCMuDM4SPzups
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
        id: c_PN3VfCUdjP3Bx3UMDcbpPF
        subject_person_id: p_pDUKq8id6KsxuRz2q5Myti
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6pq5LRSyg4fhJC123z4ar
          claim_id: c_PN3VfCUdjP3Bx3UMDcbpPF
          source_id: s_MoQugiDMDCCMuDM4SPzups
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
        id: c_KDQQiJUPG1eS2AqfbLmQan
        subject_person_id: p_pDUKq8id6KsxuRz2q5Myti
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
        - id: cs_WRHHckFU22iDp6cuwNJKCZ
          claim_id: c_KDQQiJUPG1eS2AqfbLmQan
          source_id: s_MoQugiDMDCCMuDM4SPzups
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

# 王翱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翱 | accepted |
| birth.date | 1384年 | accepted |
| death.date | 1467年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翱（CBDB 67645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67645&o=json)
