---
schema: wang-person/v1
id: p_EoY6249MAYNFPdVz2u3z4E
status: active
merged_into: null
display_name: 王學益
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PY389Z9geZoKgpsVgaoAHN
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HSdoh8S6i5vik39i5sSD99
          claim_id: c_PY389Z9geZoKgpsVgaoAHN
          source_id: s_YMFBo3fhcGwUpQNeCiSEJz
          stance: supports
          locator: CBDB:202399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202399）
          source: &a1
            id: s_YMFBo3fhcGwUpQNeCiSEJz
            source_type: api_record
            title: 中国历代人物传记资料库：王學益（CBDB 202399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202399&o=json
            external_identifier: CBDB:202399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_azftJRD5BceUbE48GCnbLi
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjQwG4bwJiDbEVTKSw1E9i
          claim_id: c_azftJRD5BceUbE48GCnbLi
          source_id: s_YMFBo3fhcGwUpQNeCiSEJz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B2hTQEnjus7cHXos6MkhPH
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學益（生于1495年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 202399）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wxBMldDaO0JafC0EPS1fE1
          claim_id: c_B2hTQEnjus7cHXos6MkhPH
          source_id: s_YMFBo3fhcGwUpQNeCiSEJz
          stance: supports
          locator: CBDB:202399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_EJz6NDNXPRUy1b3XSr2FQp
        status: active
        display_name: 王稼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ReQX-WXoDKRSJGVgpPqD9D
        subject_person_id: p_wsDZJ1MwFHkyLqXv75Yrwu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4RQljGslsbU3f1TBA_uF1
          claim_id: c_ReQX-WXoDKRSJGVgpPqD9D
          source_id: s_ZR6sd2HFdAyMXP19FTXbYw
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZR6sd2HFdAyMXP19FTXbYw
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 287444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287444&o=json
            external_identifier: CBDB:287444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wsDZJ1MwFHkyLqXv75Yrwu
        status: active
        display_name: 王珉
        merged_into_person_id: null
    - claim:
        id: c_AOZX5eutx3l0h9q1OhR-ZX
        subject_person_id: p_DGBgTNExWyhASwnCieWYxW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8cCC6ZEY4di04GFgIQ6sD
          claim_id: c_AOZX5eutx3l0h9q1OhR-ZX
          source_id: s_PfRDKxCKBAXBt7gF1NJWkU
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PfRDKxCKBAXBt7gF1NJWkU
            source_type: api_record
            title: 中国历代人物传记资料库：王循紀（CBDB 287443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287443&o=json
            external_identifier: CBDB:287443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DGBgTNExWyhASwnCieWYxW
        status: active
        display_name: 王循紀
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gwx0VJynWm97mM0Ta0VA0b
        subject_person_id: p_1XztGATvwXtkA2DA44WhCQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EoY6249MAYNFPdVz2u3z4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__9mchGkvxbn7MQSb82GSAL
          claim_id: c_gwx0VJynWm97mM0Ta0VA0b
          source_id: s_rU89Jv861K9_Exq9KSXkpg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_6OwFD1mgZwgLHwUnX8c3L5
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VNQvnTusvNC6E7ht7oJX6h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t30aH5Zo-r3O4GNEI8iu6A
          claim_id: c_6OwFD1mgZwgLHwUnX8c3L5
          source_id: s_yqV_elKtnesszEEr_8_PZf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Zx-SoNec-W8ic8nAr_zv7Z
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jQmdPG33TzwLQ6ur3usHPZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4uB_Z8jyfBa0pi4pqgdYe
          claim_id: c_Zx-SoNec-W8ic8nAr_zv7Z
          source_id: s_JVP2N1Qd-iwPzugAlVN7de
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_EQT6TlXay9h8Z6C_OTJh5z
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vt3AmcVCzP9pkvd9zscCbg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eN8iDCRmzlujxi9lqoga1Q
          claim_id: c_EQT6TlXay9h8Z6C_OTJh5z
          source_id: s_85AhDQmoCmhEvEaV63EoR8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_57yd5-M8Xc9yTkbSv3RlfT
        subject_person_id: p_EoY6249MAYNFPdVz2u3z4E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zqEYGEQzC8hLBe9t4HJAzq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQYfTjUYpgd3E0rjtTh0Sh
          claim_id: c_57yd5-M8Xc9yTkbSv3RlfT
          source_id: s_GhmctIiTasDUayw9cvPUdk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202399 王學益）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王學益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學益 | accepted |
| birth.date | 1495年 | accepted |
| bio.summary | 王學益（生于1495年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 202399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJz6NDNXPRUy1b3XSr2FQp | 王稼 | accepted |
| ancestors | p_wsDZJ1MwFHkyLqXv75Yrwu | 王珉 | accepted |
| ancestors | p_DGBgTNExWyhASwnCieWYxW | 王循紀 | accepted |
| other | p_1XztGATvwXtkA2DA44WhCQ | 王學龍 | accepted |
| other | p_VNQvnTusvNC6E7ht7oJX6h | 王學舜 | accepted |
| other | p_jQmdPG33TzwLQ6ur3usHPZ | 王學夔 | accepted |
| other | p_vt3AmcVCzP9pkvd9zscCbg | 王學吾 | accepted |
| other | p_zqEYGEQzC8hLBe9t4HJAzq | 王學孔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稼（CBDB 287445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287445&o=json)
- [中国历代人物传记资料库：王珉（CBDB 287444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287444&o=json)
- [中国历代人物传记资料库：王學孔（CBDB 287449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287449&o=json)
- [中国历代人物传记资料库：王學夔（CBDB 287448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287448&o=json)
- [中国历代人物传记资料库：王學龍（CBDB 287450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287450&o=json)
- [中国历代人物传记资料库：王學舜（CBDB 287451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287451&o=json)
- [中国历代人物传记资料库：王學吾（CBDB 287453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287453&o=json)
- [中国历代人物传记资料库：王學益（CBDB 202399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202399&o=json)
- [中国历代人物传记资料库：王循紀（CBDB 287443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287443&o=json)
