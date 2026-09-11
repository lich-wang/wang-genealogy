---
schema: wang-person/v1
id: p_ixapZhQmmSDAS1angZKZYU
status: active
merged_into: null
display_name: 王士霖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nLo8p3aCJq6GJTFFhr4Z81
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UA1RPWPvTb3Q3RsCSaBb3d
          claim_id: c_nLo8p3aCJq6GJTFFhr4Z81
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: CBDB:694147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694147）
          source: &a1
            id: s_hPA2wXFn6CM42W4D5FLhFz
            source_type: api_record
            title: 中国历代人物传记资料库：王士霖（CBDB 694147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json
            external_identifier: CBDB:694147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FBWMyuK6c8Tnjxb7m8jDvC
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
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
        - id: cs_UAfN2cRsv1q3hSDAd4tyD1
          claim_id: c_FBWMyuK6c8Tnjxb7m8jDvC
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
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
  descendants:
    - claim:
        id: c__Tk3h7DaKgIe3gNzzsnM2O
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gWeQqYSDEj93QiAPCoQxmK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l1PzeYoqAx3SYarwBA9o0m
          claim_id: c__Tk3h7DaKgIe3gNzzsnM2O
          source_id: s_4cM4ZihPu3KAUqfAFWA7ZV
          stance: supports
          locator: 鄞縣志，lgid=243606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4cM4ZihPu3KAUqfAFWA7ZV
            source_type: api_record
            title: 中国历代人物传记资料库：王予彰（CBDB 694148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694148&o=json
            external_identifier: CBDB:694148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gWeQqYSDEj93QiAPCoQxmK
        status: active
        display_name: 王予彰
        merged_into_person_id: null
    - claim:
        id: c_lSQznjYAdFG_E2zU1aY_uK
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GrUu3zghDRVSzoU1NxbQux
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JWZhwOZte8Bo5T-W3MkKpt
          claim_id: c_lSQznjYAdFG_E2zU1aY_uK
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: 鄞縣志，lgid=243606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GrUu3zghDRVSzoU1NxbQux
        status: active
        display_name: 王宗耀
        merged_into_person_id: null
    - claim:
        id: c_zNtQZoJo6-uL829VMZGmub
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qKn9NKn52gxrJajYJxmo3C
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IfWzcf5M7cEd7JydNbjk6
          claim_id: c_zNtQZoJo6-uL829VMZGmub
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: 鄞縣志，lgid=243606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qKn9NKn52gxrJajYJxmo3C
        status: active
        display_name: 王宗淦
        merged_into_person_id: null
    - claim:
        id: c_VAMNo3DaAOsPu7aBZt4bLl
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rDsy8HY5TyxvyKG8WgSE65
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9OoPI81dPsB7TOYGYoMK1s
          claim_id: c_VAMNo3DaAOsPu7aBZt4bLl
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: 鄞縣志，lgid=243606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rDsy8HY5TyxvyKG8WgSE65
        status: active
        display_name: 王宗植
        merged_into_person_id: null
  other: []
---

# 王士霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士霖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gWeQqYSDEj93QiAPCoQxmK | 王予彰 | accepted |
| descendants | p_GrUu3zghDRVSzoU1NxbQux | 王宗耀 | accepted |
| descendants | p_qKn9NKn52gxrJajYJxmo3C | 王宗淦 | accepted |
| descendants | p_rDsy8HY5TyxvyKG8WgSE65 | 王宗植 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士霖（CBDB 694147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json)
- [中国历代人物传记资料库：王予彰（CBDB 694148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694148&o=json)
