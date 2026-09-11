---
schema: wang-person/v1
id: p_HEBEMbatrU5oc351aRHFA3
status: active
merged_into: null
display_name: 王瑩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nt6PEUFzZJCEeLLLUuLdFA
        subject_person_id: p_HEBEMbatrU5oc351aRHFA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XG34KJo6NT7b2uDYen3epJ
          claim_id: c_nt6PEUFzZJCEeLLLUuLdFA
          source_id: s_v6Hd5gSeMGCJTHNA5viqaH
          stance: supports
          locator: CBDB:698405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698405）
          source: &a1
            id: s_v6Hd5gSeMGCJTHNA5viqaH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 698405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698405&o=json
            external_identifier: CBDB:698405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LC7P4CJ7UDDSQPHh7fhnt
        subject_person_id: p_HEBEMbatrU5oc351aRHFA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩，明人物。籍贯曹州。（中国历代人物传记资料库 CBDB 698405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d-tp4r5_cY1s7N6eli8Ugr
          claim_id: c_8LC7P4CJ7UDDSQPHh7fhnt
          source_id: s_v6Hd5gSeMGCJTHNA5viqaH
          stance: supports
          locator: CBDB:698405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_P8MdnmLL0i1l-kW1cvN9TY
        subject_person_id: p_HEBEMbatrU5oc351aRHFA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XrTWKrQQBfj5ofYAyMKk12
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8gr29Iq-kuckYUIxvJMvH
          claim_id: c_P8MdnmLL0i1l-kW1cvN9TY
          source_id: s_v6Hd5gSeMGCJTHNA5viqaH
          stance: supports
          locator: 新修菏澤縣志，lgid=725096：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XrTWKrQQBfj5ofYAyMKk12
        status: active
        display_name: 王垂拱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | 王瑩，明人物。籍贯曹州。（中国历代人物传记资料库 CBDB 698405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XrTWKrQQBfj5ofYAyMKk12 | 王垂拱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 698405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698405&o=json)
