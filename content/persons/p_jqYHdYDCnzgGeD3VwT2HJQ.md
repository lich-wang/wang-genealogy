---
schema: wang-person/v1
id: p_jqYHdYDCnzgGeD3VwT2HJQ
status: active
merged_into: null
display_name: 王恂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_STUbxVEJ8wsM6RkuupWt3Q
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HTMPRHGWmN2fSeyacUiWJY
          claim_id: c_STUbxVEJ8wsM6RkuupWt3Q
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: CBDB:126598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126598）
          source: &a1
            id: s_A8mfRA1Q8JxLwPQKEgaVDE
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 126598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json
            external_identifier: CBDB:126598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.048Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AcAqSHiioFSZCLxfNh8nAp
        subject_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
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
        - id: cs_G9rkWrA3eSzj22AvD8FTu1
          claim_id: c_AcAqSHiioFSZCLxfNh8nAp
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
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
        id: c_T8d9TROzG_IsOwTv7iwRW0
        subject_person_id: p_NPL6P9BFMyJuLurCHCVYkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-B-JNi8ck1GHv5RQXPNLef
          claim_id: c_T8d9TROzG_IsOwTv7iwRW0
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NPL6P9BFMyJuLurCHCVYkH
        status: active
        display_name: 王貴華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_B1IJcMg_hwz1SDLRRoKtEt
        subject_person_id: p_Qd1wdV68WZVJmfszU24bRK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Klay2NaKrLjCbRQZfazk1Z
          claim_id: c_B1IJcMg_hwz1SDLRRoKtEt
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qd1wdV68WZVJmfszU24bRK
        status: active
        display_name: 王琦
        merged_into_person_id: null
    - claim:
        id: c_14-HZlOYGOkwbfcWTb6lP-
        subject_person_id: p_ssHxbbtDC56vT3wSvtFyWj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jqYHdYDCnzgGeD3VwT2HJQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ndfA1QHpNgOAYaIpoYriDv
          claim_id: c_14-HZlOYGOkwbfcWTb6lP-
          source_id: s_A8mfRA1Q8JxLwPQKEgaVDE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ssHxbbtDC56vT3wSvtFyWj
        status: active
        display_name: 王文才
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NPL6P9BFMyJuLurCHCVYkH | 王貴華 | accepted |
| ancestors | p_Qd1wdV68WZVJmfszU24bRK | 王琦 | accepted |
| ancestors | p_ssHxbbtDC56vT3wSvtFyWj | 王文才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 126598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126598&o=json)
