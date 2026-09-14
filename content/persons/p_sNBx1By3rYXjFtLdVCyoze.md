---
schema: wang-person/v1
id: p_sNBx1By3rYXjFtLdVCyoze
status: active
merged_into: null
display_name: 王汝言
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9b81o6AMcN5kRZu3LAh9K
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3DtcCzRkc514fZejpZqaov
          claim_id: c_S9b81o6AMcN5kRZu3LAh9K
          source_id: s_asqVdqH4YR4QECWKaApuy9
          stance: supports
          locator: CBDB:126500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126500）
          source: &a1
            id: s_asqVdqH4YR4QECWKaApuy9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝言（CBDB 126500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126500&o=json
            external_identifier: CBDB:126500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MGSAxHjXa81MxbLYeZQCLP
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJ4YBrGcUwg9hdqBQD6unc
          claim_id: c_MGSAxHjXa81MxbLYeZQCLP
          source_id: s_asqVdqH4YR4QECWKaApuy9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4ppMvA8aDfstaeXXPnB5Nh
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1579年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGS13CgkMWKqSEDGeJAdSF
          claim_id: c_4ppMvA8aDfstaeXXPnB5Nh
          source_id: s_asqVdqH4YR4QECWKaApuy9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WAFg7anK5YHfqK2V752yd
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝言（1525年—1579年），明人物。明清進士進士，籍贯濱州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W-R_ia-aN04t6Lyzx8Sp2J
          claim_id: c_2WAFg7anK5YHfqK2V752yd
          source_id: s_asqVdqH4YR4QECWKaApuy9
          stance: supports
          locator: CBDB:126500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WSrug1D1O-JrdfC9iKS5WR
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fV_BynYnRf9f2fsNAUKFLN
          claim_id: c_WSrug1D1O-JrdfC9iKS5WR
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aGmu253DAHvMUPPFMGST4C
            source_type: api_record
            title: 中国历代人物传记资料库：王鎌（CBDB 318310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json
            external_identifier: CBDB:318310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EGM3NKNbuzivbf6yG7YfAa
        status: active
        display_name: 王鎌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cb6HVL9ebtOri5eVYqPUm7
        subject_person_id: p_7pynUL8pd6HES6aaAFZwhP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0dZjuCL2ou9cCQ1XJSvwDC
          claim_id: c_cb6HVL9ebtOri5eVYqPUm7
          source_id: s_XMe7zjWwPEMG5aZamr66QQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XMe7zjWwPEMG5aZamr66QQ
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 318308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318308&o=json
            external_identifier: CBDB:318308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7pynUL8pd6HES6aaAFZwhP
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_Irz0hEsA2y6U5HYtAH_q_Q
        subject_person_id: p_GxHmTXA7oD96gMtbuVKH9Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_he65DHhWKTzVoJO4PUVfh7
          claim_id: c_Irz0hEsA2y6U5HYtAH_q_Q
          source_id: s_e62KDQVsTATycgpijPwCo4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e62KDQVsTATycgpijPwCo4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 318309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318309&o=json
            external_identifier: CBDB:318309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GxHmTXA7oD96gMtbuVKH9Q
        status: active
        display_name: 王弘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JF8YrlNKnEam2x6d0MW3ZQ
        subject_person_id: p_3zKFvVf3yUNwrFtDrsCEqD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RZB1Y4mFQ9OKPM25zMWmz4
          claim_id: c_JF8YrlNKnEam2x6d0MW3ZQ
          source_id: s_MkmOUTZ2y-dX-Asn0qUaw4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MkmOUTZ2y-dX-Asn0qUaw4
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 318319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318319&o=json
            external_identifier: CBDB:318319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zKFvVf3yUNwrFtDrsCEqD
        status: active
        display_name: 王漢
        merged_into_person_id: null
    - claim:
        id: c_3H9PENQiDwB9qIiwaspwQr
        subject_person_id: p_59sz4GWdkKzDrpYdRCELA6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iaB-v586QLvSjaxmvdSD1i
          claim_id: c_3H9PENQiDwB9qIiwaspwQr
          source_id: s_-DQu5tdjLpO2qA6zP_L6A6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-DQu5tdjLpO2qA6zP_L6A6
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 318316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318316&o=json
            external_identifier: CBDB:318316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_59sz4GWdkKzDrpYdRCELA6
        status: active
        display_name: 王瀛
        merged_into_person_id: null
    - claim:
        id: c_nygMGSPj7jMQaPuKWomiXU
        subject_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gn6fKYX5B6I66_6I_e8U_E
          claim_id: c_nygMGSPj7jMQaPuKWomiXU
          source_id: s_t6heVWJpyzbZ85T9_cY5fe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t6heVWJpyzbZ85T9_cY5fe
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濟（CBDB 318320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json
            external_identifier: CBDB:318320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_83T4Gx8zXT4i7ZTiM8PZHx
        status: active
        display_name: 王汝濟
        merged_into_person_id: null
    - claim:
        id: c_kmpGwqVVjx-08howBdw8Jl
        subject_person_id: p_DeWPAA3ELncewaaHzcDNYn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1AdoWCbPX52xfT_C1MOXGv
          claim_id: c_kmpGwqVVjx-08howBdw8Jl
          source_id: s_8OsFcDMzCxeO9SCfuTj6c_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8OsFcDMzCxeO9SCfuTj6c_
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 318315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318315&o=json
            external_identifier: CBDB:318315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DeWPAA3ELncewaaHzcDNYn
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_gPvhbj6oVzyYYJH8HaYGp1
        subject_person_id: p_JeWsBNwAAMvaBffA9g8xqG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGZcOXhWtVzHO0oYs-TYT9
          claim_id: c_gPvhbj6oVzyYYJH8HaYGp1
          source_id: s_OSDqS2KMMlIlEVv5IjtCJq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OSDqS2KMMlIlEVv5IjtCJq
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 318317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318317&o=json
            external_identifier: CBDB:318317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JeWsBNwAAMvaBffA9g8xqG
        status: active
        display_name: 王浩
        merged_into_person_id: null
    - claim:
        id: c_rFEOVQ3ooA6UJExrijwYH9
        subject_person_id: p_jLGNJPgfHEctu5rwo562em
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uj2JDmNkBG9BFo6x0REPPT
          claim_id: c_rFEOVQ3ooA6UJExrijwYH9
          source_id: s__Mt179SmdGn7fiDY12wyYD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__Mt179SmdGn7fiDY12wyYD
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 318314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json
            external_identifier: CBDB:318314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jLGNJPgfHEctu5rwo562em
        status: active
        display_name: 王淮
        merged_into_person_id: null
---

# 王汝言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝言 | accepted |
| birth.date | 1525年 | accepted |
| death.date | 1579年 | accepted |
| bio.summary | 王汝言（1525年—1579年），明人物。明清進士進士，籍贯濱州，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126500） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EGM3NKNbuzivbf6yG7YfAa | 王鎌 | accepted |
| ancestors | p_7pynUL8pd6HES6aaAFZwhP | 王福 | accepted |
| ancestors | p_GxHmTXA7oD96gMtbuVKH9Q | 王弘 | accepted |
| other | p_3zKFvVf3yUNwrFtDrsCEqD | 王漢 | accepted |
| other | p_59sz4GWdkKzDrpYdRCELA6 | 王瀛 | accepted |
| other | p_83T4Gx8zXT4i7ZTiM8PZHx | 王汝濟 | accepted |
| other | p_DeWPAA3ELncewaaHzcDNYn | 王潮 | accepted |
| other | p_JeWsBNwAAMvaBffA9g8xqG | 王浩 | accepted |
| other | p_jLGNJPgfHEctu5rwo562em | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 318315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318315&o=json)
- [中国历代人物传记资料库：王福（CBDB 318308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318308&o=json)
- [中国历代人物传记资料库：王漢（CBDB 318319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318319&o=json)
- [中国历代人物传记资料库：王浩（CBDB 318317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318317&o=json)
- [中国历代人物传记资料库：王弘（CBDB 318309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318309&o=json)
- [中国历代人物传记资料库：王淮（CBDB 318314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json)
- [中国历代人物传记资料库：王鎌（CBDB 318310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json)
- [中国历代人物传记资料库：王汝濟（CBDB 318320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json)
- [中国历代人物传记资料库：王汝言（CBDB 126500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126500&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 318316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318316&o=json)
