---
schema: wang-person/v1
id: p_NzTWth6hN1Hy5PztPD5mHR
status: active
merged_into: null
display_name: 王宜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMTjJC3q585rmhs8dYLPFi
        subject_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6S5VmLSEAPHZ39z5LTZbP
          claim_id: c_DMTjJC3q585rmhs8dYLPFi
          source_id: s_nQEpA6JdhnfaP8QkWQLf92
          stance: supports
          locator: CBDB:315710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315710）
          source: &a1
            id: s_nQEpA6JdhnfaP8QkWQLf92
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 315710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json
            external_identifier: CBDB:315710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4SXPzP3p9ziHnN1PnZErwE
        subject_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LzM7A2cKo8IlBJ2ieIV4ww
          claim_id: c_4SXPzP3p9ziHnN1PnZErwE
          source_id: s_nQEpA6JdhnfaP8QkWQLf92
          stance: supports
          locator: CBDB:315710
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mFP4Rxe_9R5KNUh6IK_dg1
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3kwZWkCbErrcdC5u9DOrt
          claim_id: c_mFP4Rxe_9R5KNUh6IK_dg1
          source_id: s_x-fCNAPC-IokYSFlmdZJAt
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王宜 之父／母。
          source:
            id: s_x-fCNAPC-IokYSFlmdZJAt
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 315710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json
            external_identifier: CBDB:315710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuF4DaKK4SqaM66dLXVH8d
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6tpq5jR3vOA4u9XDGXM1qf
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Aoe_ca0DFBVJdpoPI5v9R
          claim_id: c_6tpq5jR3vOA4u9XDGXM1qf
          source_id: s_x-fCNAPC-IokYSFlmdZJAt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x-fCNAPC-IokYSFlmdZJAt
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 315710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json
            external_identifier: CBDB:315710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | 王宜，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| other | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 315710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json)
