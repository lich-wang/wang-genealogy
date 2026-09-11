---
schema: wang-person/v1
id: p_oaNDfLCNACocvS6e5dX6tR
status: active
merged_into: null
display_name: 王鼎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x68BztKAbwPmFDX6VPnKvL
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pDuMBhvJQQ57cDDXDVeZsX
          claim_id: c_x68BztKAbwPmFDX6VPnKvL
          source_id: s_5KdizvAFPJEps1ZHmf6uDF
          stance: supports
          locator: CBDB:312137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312137）
          source: &a1
            id: s_5KdizvAFPJEps1ZHmf6uDF
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 312137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312137&o=json
            external_identifier: CBDB:312137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C4ac4HSBYWgSF3RV5HTbCZ
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
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
        - id: cs_GX3dX9tHRp4po9JRjAGtGS
          claim_id: c_C4ac4HSBYWgSF3RV5HTbCZ
          source_id: s_5KdizvAFPJEps1ZHmf6uDF
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
        id: c_FJzoXPBVYebSlfJ2RjRL6a
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oaNDfLCNACocvS6e5dX6tR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYUETNrQkaWAq2iO-4jbmd
          claim_id: c_FJzoXPBVYebSlfJ2RjRL6a
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_Nr2qY755GTwgwauW1Hdu83
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 126744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json
            external_identifier: CBDB:126744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m69DkPkNmbULcq7eko5aNw
        status: active
        display_name: 王居
        merged_into_person_id: null
  children:
    - claim:
        id: c_BFvf2bt6f4Yy7D56yth8Dn
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lg426XjwtGThS6GKpMTASR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNbJOZ7DSVeVm5U4u092w1
          claim_id: c_BFvf2bt6f4Yy7D56yth8Dn
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_Lg426XjwtGThS6GKpMTASR
        status: active
        display_name: 王尚智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_2mzj5rkRPPYPVt9hDRSL0e
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJ57f_AvHF_cIadveh5LyF
          claim_id: c_2mzj5rkRPPYPVt9hDRSL0e
          source_id: s_5KdizvAFPJEps1ZHmf6uDF
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1FCXxHhqD3wzUFWARQDXSE
        status: active
        display_name: 王道行
        merged_into_person_id: null
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m69DkPkNmbULcq7eko5aNw | 王居 | accepted |
| children | p_Lg426XjwtGThS6GKpMTASR | 王尚智 | accepted |
| descendants | p_1FCXxHhqD3wzUFWARQDXSE | 王道行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 126744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 312137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312137&o=json)
