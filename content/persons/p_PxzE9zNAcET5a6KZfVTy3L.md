---
schema: wang-person/v1
id: p_PxzE9zNAcET5a6KZfVTy3L
status: active
merged_into: null
display_name: 王陞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k18wL3mmc9VgLdXF2xgKgk
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mP2T31NF67xjHsR2AEJR8
          claim_id: c_k18wL3mmc9VgLdXF2xgKgk
          source_id: s_DC9BFv1PaHMP4JKm7QiV2j
          stance: supports
          locator: CBDB:331804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331804）
          source: &a1
            id: s_DC9BFv1PaHMP4JKm7QiV2j
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAkzfu9j5xhuVRgBpJSyBB
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陞，明人物。嘉靖四十四年進士，籍贯嘉定。（中国历代人物传记资料库 CBDB 331804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bZ5Fx6vyU4_U-geG-UqMkt
          claim_id: c_nAkzfu9j5xhuVRgBpJSyBB
          source_id: s_DC9BFv1PaHMP4JKm7QiV2j
          stance: supports
          locator: CBDB:331804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lIZWhe12qc3JnLUuA0J5vW
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bggtYBRA-EmH5Eblq5fORy
          claim_id: c_lIZWhe12qc3JnLUuA0J5vW
          source_id: s_S8v6Y1HOjm28Sr05I6k6ps
          stance: supports
          locator: CBDB：兄弟 王圻（126533）之父／母 王熠
          quotation: null
          interpretation_note: 由兄弟关系推断：王陞 与 王圻 为同胞（CBDB 记「兄」），王圻 之父／母即 王陞 之父／母。
          source:
            id: s_S8v6Y1HOjm28Sr05I6k6ps
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZqpxKBqyDJtXTG8SZjo1en
        status: active
        display_name: 王熠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YNlir7cukyff5d1YbANxnh
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2olsbnwCaAl_sXUw2jv3u2
          claim_id: c_YNlir7cukyff5d1YbANxnh
          source_id: s_S8v6Y1HOjm28Sr05I6k6ps
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126533 王圻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S8v6Y1HOjm28Sr05I6k6ps
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TugXusNFHFdTE5ayse4kLm
        status: active
        display_name: 王圻
        merged_into_person_id: null
---

# 王陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陞 | accepted |
| bio.summary | 王陞，明人物。嘉靖四十四年進士，籍贯嘉定。（中国历代人物传记资料库 CBDB 331804） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZqpxKBqyDJtXTG8SZjo1en | 王熠 | accepted |
| other | p_TugXusNFHFdTE5ayse4kLm | 王圻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陞（CBDB 331804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json)
