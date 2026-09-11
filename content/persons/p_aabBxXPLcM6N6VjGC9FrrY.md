---
schema: wang-person/v1
id: p_aabBxXPLcM6N6VjGC9FrrY
status: active
merged_into: null
display_name: 王琳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7vXxSwHKjoDqxGcFRfqV9y
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D7Mdk1qVuD4e956B3iVPDo
          claim_id: c_7vXxSwHKjoDqxGcFRfqV9y
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: CBDB:126709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126709）
          source: &a1
            id: s_DxH93UieDPA9NdBmWVHZkb
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 126709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json
            external_identifier: CBDB:126709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tx925N9RZU526TzqTBfEdd
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
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
        - id: cs_92AXsAor8EKMn1H18MRBhu
          claim_id: c_Tx925N9RZU526TzqTBfEdd
          source_id: s_DxH93UieDPA9NdBmWVHZkb
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
        id: c_XRk4Q5iCT3-lIADkwSOPi9
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tcse5frLZiwaidZzCmRSoB
          claim_id: c_XRk4Q5iCT3-lIADkwSOPi9
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c9qMmjg6ShUcbRMz8upxQ9
        status: active
        display_name: 王景明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_D3oudUJJnuH8bLDOJX-Uy9
        subject_person_id: p_LwpbLAjs1GpyXx1VwqVnm9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4Uj4JLrko1tTiJDiWkXgb
          claim_id: c_D3oudUJJnuH8bLDOJX-Uy9
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LwpbLAjs1GpyXx1VwqVnm9
        status: active
        display_name: 王福賜
        merged_into_person_id: null
    - claim:
        id: c_XKQ9wtNVpy2de3TBnrr-hL
        subject_person_id: p_iVsKoMKZ2pdBqdgY6tXGNE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LE8fjfR6krVH9WjE2o1_VX
          claim_id: c_XKQ9wtNVpy2de3TBnrr-hL
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iVsKoMKZ2pdBqdgY6tXGNE
        status: active
        display_name: 王以曾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c9qMmjg6ShUcbRMz8upxQ9 | 王景明 | accepted |
| ancestors | p_LwpbLAjs1GpyXx1VwqVnm9 | 王福賜 | accepted |
| ancestors | p_iVsKoMKZ2pdBqdgY6tXGNE | 王以曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 126709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json)
