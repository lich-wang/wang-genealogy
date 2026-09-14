---
schema: wang-person/v1
id: p_xZpq5Wncb1eFGiKsRsheWy
status: active
merged_into: null
display_name: 王直哉
cbdb_id: 35027
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wo4cwJan8mAeE3WSV2fyq
        subject_person_id: p_xZpq5Wncb1eFGiKsRsheWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直哉，金人物。籍贯玉田。（中国历代人物传记资料库 CBDB 35027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eIiwVPqsecL3KlNIDNTiDG
          claim_id: c_8wo4cwJan8mAeE3WSV2fyq
          source_id: s_E2yZGYsXF4mMx8P1jP34qb
          stance: supports
          locator: CBDB:35027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E2yZGYsXF4mMx8P1jP34qb
            source_type: api_record
            title: 中国历代人物传记资料库：王直哉（CBDB 35027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35027&o=json
            external_identifier: CBDB:35027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DQY1mLaAGqNYCXxNNKnqGf
        subject_person_id: p_xZpq5Wncb1eFGiKsRsheWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直哉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WNS2KFHGL2qXspkMqrNeeP
          claim_id: c_DQY1mLaAGqNYCXxNNKnqGf
          source_id: s_E2yZGYsXF4mMx8P1jP34qb
          stance: supports
          locator: CBDB:35027
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 金
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-GLzi4FfZ3x6Di1BKwlp45
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xZpq5Wncb1eFGiKsRsheWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eA01JbXjkgXRhR7vzb-LoI
          claim_id: c_-GLzi4FfZ3x6Di1BKwlp45
          source_id: s_QL4rQO6nUnnw1TOU_nEBwY
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35022）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_QL4rQO6nUnnw1TOU_nEBwY
            source_type: api_record
            title: 中国历代人物传记资料库：王直哉（CBDB 35027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35027&o=json
            external_identifier: CBDB:35027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k32g45q5JsQaD65qkta3Hz
        status: active
        display_name: 王寂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王直哉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王直哉，金人物。籍贯玉田。（中国历代人物传记资料库 CBDB 35027） | accepted |
| name.primary | 王直哉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k32g45q5JsQaD65qkta3Hz | 王寂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王直哉（CBDB 35027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35027&o=json)
