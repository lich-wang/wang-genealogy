---
schema: wang-person/v1
id: p_u4WJzDqd2NQMRBGF8jd3Vq
status: active
merged_into: null
display_name: 王卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LhjqT2Ez84ZqauLnUHZVWD
        subject_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LtEfPgkihNgQE9iEtNJidf
          claim_id: c_LhjqT2Ez84ZqauLnUHZVWD
          source_id: s_pg35YZfNTFs6a6yMQx7Np8
          stance: supports
          locator: CBDB:315709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315709）
          source: &a1
            id: s_pg35YZfNTFs6a6yMQx7Np8
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 315709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json
            external_identifier: CBDB:315709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rpNyS95UHfECCtNbZXQB8j
        subject_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m3VObaqbRzTzbaeRFhl-eW
          claim_id: c_rpNyS95UHfECCtNbZXQB8j
          source_id: s_pg35YZfNTFs6a6yMQx7Np8
          stance: supports
          locator: CBDB:315709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_97RhNm6OsOeC2ILIQYE9eg
        subject_person_id: p_QuF4DaKK4SqaM66dLXVH8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PpbeS9ETTRceoKZbTEjg0D
          claim_id: c_97RhNm6OsOeC2ILIQYE9eg
          source_id: s_vS6cvdAFxpsM-JL1bEuN9e
          stance: supports
          locator: CBDB：兄弟 王宇（204187）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王卿 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王卿 之父／母。
          source:
            id: s_vS6cvdAFxpsM-JL1bEuN9e
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 315709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json
            external_identifier: CBDB:315709
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
        id: c_e70ZHNrtl_6Gv1F_CC-Yup
        subject_person_id: p_GXZCrH2ek2TqbFGJ8qqmqw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u4WJzDqd2NQMRBGF8jd3Vq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rlbspe8uIGPPxX4ahih4oL
          claim_id: c_e70ZHNrtl_6Gv1F_CC-Yup
          source_id: s_vS6cvdAFxpsM-JL1bEuN9e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204187 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vS6cvdAFxpsM-JL1bEuN9e
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 315709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json
            external_identifier: CBDB:315709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GXZCrH2ek2TqbFGJ8qqmqw
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| bio.summary | 王卿，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QuF4DaKK4SqaM66dLXVH8d | 王億 | accepted |
| other | p_GXZCrH2ek2TqbFGJ8qqmqw | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 315709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315709&o=json)
