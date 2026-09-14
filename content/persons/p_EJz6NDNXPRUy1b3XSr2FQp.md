---
schema: wang-person/v1
id: p_EJz6NDNXPRUy1b3XSr2FQp
status: active
merged_into: null
display_name: 王稼
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1jH3dmm36xud5kUYsSvxv1
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tG55BNSwiZtaMJdZ77f8zY
          claim_id: c_1jH3dmm36xud5kUYsSvxv1
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: CBDB:287445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287445）
          source: &a1
            id: s_uNgy8ncguYMsX9WoGJzPaL
            source_type: api_record
            title: 中国历代人物传记资料库：王稼（CBDB 287445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287445&o=json
            external_identifier: CBDB:287445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jmCWsWNBuJMQJTZgQkycSw
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稼，明人物。嘉靖八年進士，籍贯安福，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 287445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LF-Zd5qDsPMTP6z2ltB0K5
          claim_id: c_jmCWsWNBuJMQJTZgQkycSw
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: CBDB:287445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6Np6EDyXWGJYrHP6z1zPLa
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-cL3tdcuz_PZodfZ14scd
          claim_id: c_6Np6EDyXWGJYrHP6z1zPLa
          source_id: s_uNgy8ncguYMsX9WoGJzPaL
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoY6249MAYNFPdVz2u3z4E
        status: active
        display_name: 王學益
        merged_into_person_id: null
    - claim:
        id: c_L70uQBDfuubHMecfqYO4Dq
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1XztGATvwXtkA2DA44WhCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlaLfBNj0nKMV8tXItbR7k
          claim_id: c_L70uQBDfuubHMecfqYO4Dq
          source_id: s_rU89Jv861K9_Exq9KSXkpg
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學龍 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學龍 之父／母。
          source:
            id: s_rU89Jv861K9_Exq9KSXkpg
            source_type: api_record
            title: 中国历代人物传记资料库：王學龍（CBDB 287450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287450&o=json
            external_identifier: CBDB:287450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XztGATvwXtkA2DA44WhCQ
        status: active
        display_name: 王學龍
        merged_into_person_id: null
    - claim:
        id: c_eonJwzwtVt0w1S9eXzF8Xs
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVGqhGyB3tNF0BDcOLLnIJ
          claim_id: c_eonJwzwtVt0w1S9eXzF8Xs
          source_id: s_yqV_elKtnesszEEr_8_PZf
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學舜 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學舜 之父／母。
          source:
            id: s_yqV_elKtnesszEEr_8_PZf
            source_type: api_record
            title: 中国历代人物传记资料库：王學舜（CBDB 287451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json
            external_identifier: CBDB:287451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNQvnTusvNC6E7ht7oJX6h
        status: active
        display_name: 王學舜
        merged_into_person_id: null
    - claim:
        id: c_nRzzaNHnMOLx_V-5toVbp-
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CMNJyscHbH4XjFldAg1qlB
          claim_id: c_nRzzaNHnMOLx_V-5toVbp-
          source_id: s_JVP2N1Qd-iwPzugAlVN7de
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學夔 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學夔 之父／母。
          source:
            id: s_JVP2N1Qd-iwPzugAlVN7de
            source_type: api_record
            title: 中国历代人物传记资料库：王學夔（CBDB 287448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json
            external_identifier: CBDB:287448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jQmdPG33TzwLQ6ur3usHPZ
        status: active
        display_name: 王學夔
        merged_into_person_id: null
    - claim:
        id: c_-20zzaotlNmrozQ-7omlRE
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EDZnyLnrVTK7dWzI7QkrIa
          claim_id: c_-20zzaotlNmrozQ-7omlRE
          source_id: s_85AhDQmoCmhEvEaV63EoR8
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學吾 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學吾 之父／母。
          source:
            id: s_85AhDQmoCmhEvEaV63EoR8
            source_type: api_record
            title: 中国历代人物传记资料库：王學吾（CBDB 287453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json
            external_identifier: CBDB:287453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vt3AmcVCzP9pkvd9zscCbg
        status: active
        display_name: 王學吾
        merged_into_person_id: null
    - claim:
        id: c_4TgRxmqqYbPa8brQrvoz4K
        subject_person_id: p_EJz6NDNXPRUy1b3XSr2FQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hAdK0SEoDgEMbDfG73XJD
          claim_id: c_4TgRxmqqYbPa8brQrvoz4K
          source_id: s_GhmctIiTasDUayw9cvPUdk
          stance: supports
          locator: CBDB：兄弟 王學益（202399）之父／母 王稼
          quotation: null
          interpretation_note: 由兄弟关系推断：王學孔 与 王學益 为同胞（CBDB 记「弟」），王學益 之父／母即 王學孔 之父／母。
          source:
            id: s_GhmctIiTasDUayw9cvPUdk
            source_type: api_record
            title: 中国历代人物传记资料库：王學孔（CBDB 287449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json
            external_identifier: CBDB:287449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zqEYGEQzC8hLBe9t4HJAzq
        status: active
        display_name: 王學孔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稼 | accepted |
| bio.summary | 王稼，明人物。嘉靖八年進士，籍贯安福，曾任吏部員外郎。（中国历代人物传记资料库 CBDB 287445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EoY6249MAYNFPdVz2u3z4E | 王學益 | accepted |
| children | p_1XztGATvwXtkA2DA44WhCQ | 王學龍 | accepted |
| children | p_VNQvnTusvNC6E7ht7oJX6h | 王學舜 | accepted |
| children | p_jQmdPG33TzwLQ6ur3usHPZ | 王學夔 | accepted |
| children | p_vt3AmcVCzP9pkvd9zscCbg | 王學吾 | accepted |
| children | p_zqEYGEQzC8hLBe9t4HJAzq | 王學孔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稼（CBDB 287445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287445&o=json)
- [中国历代人物传记资料库：王學孔（CBDB 287449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json)
- [中国历代人物传记资料库：王學夔（CBDB 287448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json)
- [中国历代人物传记资料库：王學龍（CBDB 287450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287450&o=json)
- [中国历代人物传记资料库：王學舜（CBDB 287451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json)
- [中国历代人物传记资料库：王學吾（CBDB 287453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json)
