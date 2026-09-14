---
schema: wang-person/v1
id: p_793LbrFg7DY99VBty6JTnV
status: active
merged_into: null
display_name: 王敏禮
cbdb_id: 237272
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sf3PV3AE9LrSgz4tb2B5NM
        subject_person_id: p_793LbrFg7DY99VBty6JTnV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏禮，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OfDe2rghuxDvroJYjSbUfQ
          claim_id: c_Sf3PV3AE9LrSgz4tb2B5NM
          source_id: s_hUPxqvzBAMEfK8Num66DbF
          stance: supports
          locator: CBDB:237272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hUPxqvzBAMEfK8Num66DbF
            source_type: api_record
            title: 中国历代人物传记资料库：王敏禮（CBDB 237272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237272&o=json
            external_identifier: CBDB:237272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qiXDQUyX8wQGykLcx9zQEE
        subject_person_id: p_793LbrFg7DY99VBty6JTnV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qoqA9MX8QvhDp5EbkWWzFs
          claim_id: c_qiXDQUyX8wQGykLcx9zQEE
          source_id: s_hUPxqvzBAMEfK8Num66DbF
          stance: supports
          locator: CBDB:237272
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JwkV8eObPKndVFA7_BoFXE
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_793LbrFg7DY99VBty6JTnV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkrxAULx4ObE0XM9I0qhAF
          claim_id: c_JwkV8eObPKndVFA7_BoFXE
          source_id: s_uc2RxfCDAnz7t_etB_OuYZ
          stance: supports
          locator: CBDB：兄弟 王訥（207872）之父／母 王景深
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏禮 与 王訥 为同胞（CBDB 记「弟」），王訥 之父／母即 王敏禮 之父／母。
          source:
            id: s_uc2RxfCDAnz7t_etB_OuYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王敏禮（CBDB 237272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237272&o=json
            external_identifier: CBDB:237272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vziev5XZKu5i15QAie4vMb
        status: active
        display_name: 王景深
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TvaFw-0d7F_vJZOqmUkpTQ
        subject_person_id: p_793LbrFg7DY99VBty6JTnV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOJZxdWJlMxgB2fyQDskWF
          claim_id: c_TvaFw-0d7F_vJZOqmUkpTQ
          source_id: s_uc2RxfCDAnz7t_etB_OuYZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207872 王訥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uc2RxfCDAnz7t_etB_OuYZ
            source_type: api_record
            title: 中国历代人物传记资料库：王敏禮（CBDB 237272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237272&o=json
            external_identifier: CBDB:237272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ieK4DN3AcasJWKbAPHMC7t
        status: active
        display_name: 王訥
        merged_into_person_id: null
---

# 王敏禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敏禮，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237272） | accepted |
| name.primary | 王敏禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vziev5XZKu5i15QAie4vMb | 王景深 | accepted |
| other | p_ieK4DN3AcasJWKbAPHMC7t | 王訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏禮（CBDB 237272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237272&o=json)
