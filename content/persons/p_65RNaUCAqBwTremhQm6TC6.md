---
schema: wang-person/v1
id: p_65RNaUCAqBwTremhQm6TC6
status: active
merged_into: null
display_name: 王茂元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gVDVzx2sTYMAQe7K9Zx4SD
        subject_person_id: p_65RNaUCAqBwTremhQm6TC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L6L5YWEi519j2L1Se47Y19
          claim_id: c_gVDVzx2sTYMAQe7K9Zx4SD
          source_id: s_X5sxFwokompcjobznWmEEA
          stance: supports
          locator: CBDB:189586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189586）
          source: &a1
            id: s_X5sxFwokompcjobznWmEEA
            source_type: api_record
            title: 中国历代人物传记资料库：王茂元（CBDB 189586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189586&o=json
            external_identifier: CBDB:189586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HL7q9AgVt2QPxBjiQ2pJHL
        subject_person_id: p_65RNaUCAqBwTremhQm6TC6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zpjio9sERLcGyBFE3Gko4J
          claim_id: c_HL7q9AgVt2QPxBjiQ2pJHL
          source_id: s_X5sxFwokompcjobznWmEEA
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
        id: c_CugKoAD375XJU46P1J3TmD
        subject_person_id: p_65RNaUCAqBwTremhQm6TC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqo3UDxqYhTFcScF7nbmcB
          claim_id: c_CugKoAD375XJU46P1J3TmD
          source_id: s_X5sxFwokompcjobznWmEEA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_knNS_XRHxUeYOuXkLefYez
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65RNaUCAqBwTremhQm6TC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qSACCvryS1bjwWWMfDDLi-
          claim_id: c_knNS_XRHxUeYOuXkLefYez
          source_id: s_X5sxFwokompcjobznWmEEA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LVQYZ3GtoMeNLNRiLNfrkK
        status: active
        display_name: 王栖曜
        merged_into_person_id: null
  children:
    - claim:
        id: c_E5hWzwpK7tsmXlcmP-s73j
        subject_person_id: p_65RNaUCAqBwTremhQm6TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZDXcwpMYEuVw2urSmW93Jt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wF7iYseNNmPk7WX9XK_1oJ
          claim_id: c_E5hWzwpK7tsmXlcmP-s73j
          source_id: s_X5sxFwokompcjobznWmEEA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZDXcwpMYEuVw2urSmW93Jt
        status: active
        display_name: 王權
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂元 | accepted |
| death.date | 843年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LVQYZ3GtoMeNLNRiLNfrkK | 王栖曜 | accepted |
| children | p_ZDXcwpMYEuVw2urSmW93Jt | 王權 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂元（CBDB 189586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189586&o=json)
