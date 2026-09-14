---
schema: wang-person/v1
id: p_hBEcoRHLpZFMNN6ewK4SfC
status: active
merged_into: null
display_name: 王棐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FaPJFGpSzRbsNnUFfDFugp
        subject_person_id: p_hBEcoRHLpZFMNN6ewK4SfC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kLYzZH4jTYNGSxoxL3m5LQ
          claim_id: c_FaPJFGpSzRbsNnUFfDFugp
          source_id: s_miBJMsU4m2xkXgJ96ZDUg9
          stance: supports
          locator: CBDB:291894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291894）
          source: &a1
            id: s_miBJMsU4m2xkXgJ96ZDUg9
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 291894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json
            external_identifier: CBDB:291894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TB9m34LFftVi5peYtBwFEb
        subject_person_id: p_hBEcoRHLpZFMNN6ewK4SfC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棐，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hu5gAka_1YN-0e1f8qyfda
          claim_id: c_TB9m34LFftVi5peYtBwFEb
          source_id: s_miBJMsU4m2xkXgJ96ZDUg9
          stance: supports
          locator: CBDB:291894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kdWbz1inZqLqvjP_e5o7fl
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hBEcoRHLpZFMNN6ewK4SfC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UX_RFL1eOHLd98y1eK3uDK
          claim_id: c_kdWbz1inZqLqvjP_e5o7fl
          source_id: s_zYdGrUgpgcYRRFByFbPEmm
          stance: supports
          locator: CBDB：兄弟 王廷榦（126553）之父／母 王汝猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王棐 与 王廷榦 为同胞（CBDB 记「兄」），王廷榦 之父／母即 王棐 之父／母。
          source:
            id: s_zYdGrUgpgcYRRFByFbPEmm
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 291894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json
            external_identifier: CBDB:291894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_11RhKLzn2Mi6Moy5jEp4MD
        status: active
        display_name: 王汝猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ABvbl5O8F40F2I4bL157YJ
        subject_person_id: p_hBEcoRHLpZFMNN6ewK4SfC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_QwtzMfMThoJBsf7C1t8v
          claim_id: c_ABvbl5O8F40F2I4bL157YJ
          source_id: s_zYdGrUgpgcYRRFByFbPEmm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zYdGrUgpgcYRRFByFbPEmm
            source_type: api_record
            title: 中国历代人物传记资料库：王棐（CBDB 291894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json
            external_identifier: CBDB:291894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
---

# 王棐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棐 | accepted |
| bio.summary | 王棐，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11RhKLzn2Mi6Moy5jEp4MD | 王汝猷 | accepted |
| other | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棐（CBDB 291894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json)
