---
schema: wang-person/v1
id: p_CWPBrhMiB4QhsDQzD22Bfc
status: active
merged_into: null
display_name: 王美暢
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AN3B6VBv3PrVHA1fmLutKk
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美暢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bSS7xcC9Qmp76zkmk7TaDX
          claim_id: c_AN3B6VBv3PrVHA1fmLutKk
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: CBDB:150489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150489）
          source: &a1
            id: s_yd3oS6UgooQrEVwzqDGCU1
            source_type: api_record
            title: 中国历代人物传记资料库：王美暢（CBDB 150489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json
            external_identifier: CBDB:150489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BNKmKkCxtc9xHCjPbyLNh6
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
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
        - id: cs_oLVqKgCGeHDoj2DdFAFU32
          claim_id: c_BNKmKkCxtc9xHCjPbyLNh6
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
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
        id: c_h0cYx4snHSJ2onsQ3H3LQs
        subject_person_id: p_QWBaJrFaK6czZu1tA48fxf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3nD-laiCjp_LSCEtAgzLZ
          claim_id: c_h0cYx4snHSJ2onsQ3H3LQs
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QWBaJrFaK6czZu1tA48fxf
        status: active
        display_name: 王思泰
        merged_into_person_id: null
  children:
    - claim:
        id: c_rHeAxqL8VntTKeHXx3Mou-
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5KHvdsjKfdht29UH2RE6Zz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eviaFFOeoTEfhFZv8yCsBq
          claim_id: c_rHeAxqL8VntTKeHXx3Mou-
          source_id: s_QkQtabEHYHa9rCxZzWGEQ4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QkQtabEHYHa9rCxZzWGEQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 175850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175850&o=json
            external_identifier: CBDB:175850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5KHvdsjKfdht29UH2RE6Zz
        status: active
        display_name: 王輝
        merged_into_person_id: null
    - claim:
        id: c_smWfk5HaiwoNCKJ2qP5cwd
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GfcoaCQXYnuXJ4AhCP9h6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbiirHvDNVH_ltuoQh5uVa
          claim_id: c_smWfk5HaiwoNCKJ2qP5cwd
          source_id: s_2zpcfvCRMMXS6EoUaCajEs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2zpcfvCRMMXS6EoUaCajEs
            source_type: api_record
            title: 中国历代人物传记资料库：王玢（CBDB 175849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175849&o=json
            external_identifier: CBDB:175849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GfcoaCQXYnuXJ4AhCP9h6
        status: active
        display_name: 王玢
        merged_into_person_id: null
    - claim:
        id: c_VAbSHG22dZ_6_Ossa8UP7o
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8FHiW23J39Chbi8scGXN4o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ0g7m2lVCup4aCYO_H6d0
          claim_id: c_VAbSHG22dZ_6_Ossa8UP7o
          source_id: s_3x6QuTDFvBJQEh1BBVxzaZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3x6QuTDFvBJQEh1BBVxzaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 175848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175848&o=json
            external_identifier: CBDB:175848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8FHiW23J39Chbi8scGXN4o
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_w7dnhYqpPNlC0O-R-CYsJ8
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_whVPa9hQeTh6hDTGuq4S4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7D0hbQE1gTwrEjgsgYd3jX
          claim_id: c_w7dnhYqpPNlC0O-R-CYsJ8
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_whVPa9hQeTh6hDTGuq4S4A
        status: active
        display_name: 王昕
        merged_into_person_id: null
    - claim:
        id: c_ivY__AM-KzLb9m9UOY3TnY
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_keA1ABM5X5ny74ci5yWTeu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_159wKNCo7EfVHC0dSus4
          claim_id: c_ivY__AM-KzLb9m9UOY3TnY
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_keA1ABM5X5ny74ci5yWTeu
        status: active
        display_name: 王警
        merged_into_person_id: null
    - claim:
        id: c_bhcqpJqSWde1S7mF4Foaov
        subject_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WS9553kGD2chRotK2V3Rw3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QxHRs30XEYb9FO68ZcUnzm
          claim_id: c_bhcqpJqSWde1S7mF4Foaov
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WS9553kGD2chRotK2V3Rw3
        status: active
        display_name: 王翼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王美暢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美暢 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QWBaJrFaK6czZu1tA48fxf | 王思泰 | accepted |
| children | p_5KHvdsjKfdht29UH2RE6Zz | 王輝 | accepted |
| children | p_6GfcoaCQXYnuXJ4AhCP9h6 | 王玢 | accepted |
| children | p_8FHiW23J39Chbi8scGXN4o | 王弼 | accepted |
| children | p_whVPa9hQeTh6hDTGuq4S4A | 王昕 | accepted |
| children | p_keA1ABM5X5ny74ci5yWTeu | 王警 | accepted |
| children | p_WS9553kGD2chRotK2V3Rw3 | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 175848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175848&o=json)
- [中国历代人物传记资料库：王玢（CBDB 175849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175849&o=json)
- [中国历代人物传记资料库：王輝（CBDB 175850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175850&o=json)
- [中国历代人物传记资料库：王美暢（CBDB 150489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json)
