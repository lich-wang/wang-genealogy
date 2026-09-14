---
schema: wang-person/v1
id: p_iwJ5aeSR3rEQ4CLmW9n7hq
status: active
merged_into: null
display_name: 王澤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FH5eDoPiLiCJgD6EPSPGRo
        subject_person_id: p_iwJ5aeSR3rEQ4CLmW9n7hq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9aPPLt9vtsKmzYxSWgrBQX
          claim_id: c_FH5eDoPiLiCJgD6EPSPGRo
          source_id: s_rocuotMk3e1sMpsz1x8b59
          stance: supports
          locator: CBDB:213559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213559）
          source: &a1
            id: s_rocuotMk3e1sMpsz1x8b59
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 213559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213559&o=json
            external_identifier: CBDB:213559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWsU4pJR8Nxu7YAcL4HAV1
        subject_person_id: p_iwJ5aeSR3rEQ4CLmW9n7hq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zffd8p0owe-RlblWAExZMS
          claim_id: c_KWsU4pJR8Nxu7YAcL4HAV1
          source_id: s_rocuotMk3e1sMpsz1x8b59
          stance: supports
          locator: CBDB:213559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dfy2AHNwkADjauEdcbJf38
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iwJ5aeSR3rEQ4CLmW9n7hq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoJamoFvQCd6Zx3JYD-ZXy
          claim_id: c_Dfy2AHNwkADjauEdcbJf38
          source_id: s_RJ2-mEJi6zwfPIWIdfYMrz
          stance: supports
          locator: CBDB：兄弟 王崇之（126685）之父／母 王憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王崇之 为同胞（CBDB 记「弟」），王崇之 之父／母即 王澤 之父／母。
          source:
            id: s_RJ2-mEJi6zwfPIWIdfYMrz
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 213559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213559&o=json
            external_identifier: CBDB:213559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_efTyspVBuWnU6D3LVRN3aM
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kBpBCTBAmyWayWzCMqVW2j
        subject_person_id: p_iwJ5aeSR3rEQ4CLmW9n7hq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_38vMs3zRVdsdX3kPJ4kqkH
          claim_id: c_kBpBCTBAmyWayWzCMqVW2j
          source_id: s_RJ2-mEJi6zwfPIWIdfYMrz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126685 王崇之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RJ2-mEJi6zwfPIWIdfYMrz
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 213559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213559&o=json
            external_identifier: CBDB:213559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMjY6kwGmS2PR67RexN7yL
        status: active
        display_name: 王崇之
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | 王澤，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_efTyspVBuWnU6D3LVRN3aM | 王憲 | accepted |
| other | p_sMjY6kwGmS2PR67RexN7yL | 王崇之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 213559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213559&o=json)
