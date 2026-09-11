---
schema: wang-person/v1
id: p_RH1Cuusc2PR1U4ny6cUVDC
status: active
merged_into: null
display_name: 王固忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AGm4pq41hdD98c5Rttx5bL
        subject_person_id: p_RH1Cuusc2PR1U4ny6cUVDC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vHh95JzQ1bn8CUZH1rNepS
          claim_id: c_AGm4pq41hdD98c5Rttx5bL
          source_id: s_EVPet1nn8zbNVjXmanAF6R
          stance: supports
          locator: CBDB:175652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175652）
          source: &a1
            id: s_EVPet1nn8zbNVjXmanAF6R
            source_type: api_record
            title: 中国历代人物传记资料库：王固忠（CBDB 175652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175652&o=json
            external_identifier: CBDB:175652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_twhm3LGSNnaZD6KXsRwfDP
        subject_person_id: p_RH1Cuusc2PR1U4ny6cUVDC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qS9Rt1q6d5h5gSk5jChoFF
          claim_id: c_twhm3LGSNnaZD6KXsRwfDP
          source_id: s_EVPet1nn8zbNVjXmanAF6R
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
        id: c_a3PSrtEo5Js7gyBBpEy7qH
        subject_person_id: p_RH1Cuusc2PR1U4ny6cUVDC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固忠（卒于655年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EiUAJxZBjozjIpjTt8mU2C
          claim_id: c_a3PSrtEo5Js7gyBBpEy7qH
          source_id: s_EVPet1nn8zbNVjXmanAF6R
          stance: supports
          locator: CBDB:175652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NdUsIGMB-KyBAV3has_MBz
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RH1Cuusc2PR1U4ny6cUVDC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSHAvG9tS9oZnk5BnKPvE3
          claim_id: c_NdUsIGMB-KyBAV3has_MBz
          source_id: s_EVPet1nn8zbNVjXmanAF6R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4EU5hab5MGo71FXwq1jBL2
        status: active
        display_name: 王方智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王固忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固忠 | accepted |
| death.date | 655年 | accepted |
| bio.summary | 王固忠（卒于655年），唐人物。籍贯臨沂，曾任丞。（中国历代人物传记资料库 CBDB 175652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EU5hab5MGo71FXwq1jBL2 | 王方智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固忠（CBDB 175652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175652&o=json)
