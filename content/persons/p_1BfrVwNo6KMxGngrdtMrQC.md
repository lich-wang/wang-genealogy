---
schema: wang-person/v1
id: p_1BfrVwNo6KMxGngrdtMrQC
status: active
merged_into: null
display_name: 王煇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CrfqaHkVBaDG13k4BrfswJ
        subject_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E2HpmwK3JusJYXASBzP7f4
          claim_id: c_CrfqaHkVBaDG13k4BrfswJ
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: CBDB:136338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（136338）
          source: &a1
            id: s_gqmwEU56k6tFMccUQF4t4V
            source_type: api_record
            title: 中国历代人物传记资料库：王煇（CBDB 136338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json
            external_identifier: CBDB:136338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j4mV3XVxhN1GJhuxQFsvQd
        subject_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ooePRKdLSTMBVZW2PLWDtZ
          claim_id: c_j4mV3XVxhN1GJhuxQFsvQd
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tnKIHKu_cT6_Bci30SxcaP
        subject_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZRZM6NAflNxtx4Yn6Xu6X
          claim_id: c_tnKIHKu_cT6_Bci30SxcaP
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m4LMsDs1QJMNb7B4hFNvPT
        status: active
        display_name: 王壡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6Z2p9myXU-t9RFc-2O5ZgG
        subject_person_id: p_QakmAcbWphZrG5JAN338dk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j5f1lCRrBDti8zEIq1Pue7
          claim_id: c_6Z2p9myXU-t9RFc-2O5ZgG
          source_id: s_hh1QMD_u1zmczoELIXYCVW
          stance: supports
          locator: 寶祐登科錄：丈夫
          quotation: null
          interpretation_note: null
          source:
            id: s_hh1QMD_u1zmczoELIXYCVW
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王煇妻)（CBDB 138303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138303&o=json
            external_identifier: CBDB:138303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QakmAcbWphZrG5JAN338dk
        status: active
        display_name: 蕭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yENalvVcLlEjZvOUjtLLiR
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tNgVKD3VZSEft-kIS9qZ0
          claim_id: c_yENalvVcLlEjZvOUjtLLiR
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iu7y5uzAHNAHpBHrqhDhMe
        status: active
        display_name: 王驥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m4LMsDs1QJMNb7B4hFNvPT | 王壡 | accepted |
| spouses | p_QakmAcbWphZrG5JAN338dk | 蕭氏 | accepted |
| ancestors | p_iu7y5uzAHNAHpBHrqhDhMe | 王驥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煇（CBDB 136338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json)
- [中国历代人物传记资料库：蕭氏(王煇妻)（CBDB 138303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138303&o=json)
