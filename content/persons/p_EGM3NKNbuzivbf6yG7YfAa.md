---
schema: wang-person/v1
id: p_EGM3NKNbuzivbf6yG7YfAa
status: active
merged_into: null
display_name: 王鎌
cbdb_id: 318310
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cxvNgDDiXMGKDaCPK9c82
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎌，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318310）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rTvfjCxm5WwoEJgpq6EZVp
          claim_id: c_1cxvNgDDiXMGKDaCPK9c82
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: CBDB:318310
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFX1c7YJUQspKDJ7M7eJsD
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hbYCiFRH32m43ENx1CTf1w
          claim_id: c_jFX1c7YJUQspKDJ7M7eJsD
          source_id: s_aGmu253DAHvMUPPFMGST4C
          stance: supports
          locator: CBDB:318310
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_sNBx1By3rYXjFtLdVCyoze
        status: active
        display_name: 王汝言
        merged_into_person_id: null
    - claim:
        id: c_E0FvsyMQDZOGBxtXB8RLOq
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3zKFvVf3yUNwrFtDrsCEqD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p-a_2x2L5Mi1ooaXl_9OCY
          claim_id: c_E0FvsyMQDZOGBxtXB8RLOq
          source_id: s_MkmOUTZ2y-dX-Asn0qUaw4
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王漢 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王漢 之父／母。
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
        id: c_H1QDpRu8aNcEgqHx8WkjJH
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_59sz4GWdkKzDrpYdRCELA6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D43SNWlqC46HKhrOTZ6KOo
          claim_id: c_H1QDpRu8aNcEgqHx8WkjJH
          source_id: s_-DQu5tdjLpO2qA6zP_L6A6
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀛 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王瀛 之父／母。
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
        id: c_8_yhRfFY9L8w0cYZZW-TKS
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83T4Gx8zXT4i7ZTiM8PZHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0GMCggoJK79jcKr4vMkMlk
          claim_id: c_8_yhRfFY9L8w0cYZZW-TKS
          source_id: s_t6heVWJpyzbZ85T9_cY5fe
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝濟 与 王汝言 为同胞（CBDB 记「兄」），王汝言 之父／母即 王汝濟 之父／母。
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
        id: c_DLsXUXrBY8P812Y2NuXbmP
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DeWPAA3ELncewaaHzcDNYn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNytp3RPrJUkp_VxchL0uj
          claim_id: c_DLsXUXrBY8P812Y2NuXbmP
          source_id: s_8OsFcDMzCxeO9SCfuTj6c_
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王潮 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王潮 之父／母。
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
        id: c_SRWkfYJadO3A37AYkpUTGA
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JeWsBNwAAMvaBffA9g8xqG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o807APc3FcqBeLkihzSyDG
          claim_id: c_SRWkfYJadO3A37AYkpUTGA
          source_id: s_OSDqS2KMMlIlEVv5IjtCJq
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王浩 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王浩 之父／母。
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
        id: c_JhH_adgyovf5je41fQhg7I
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLGNJPgfHEctu5rwo562em
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPpuMn-6Kua_jqmuRGAZb5
          claim_id: c_JhH_adgyovf5je41fQhg7I
          source_id: s__Mt179SmdGn7fiDY12wyYD
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王淮 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王淮 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鎌，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318310） | accepted |
| name.primary | 王鎌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sNBx1By3rYXjFtLdVCyoze | 王汝言 | accepted |
| children | p_3zKFvVf3yUNwrFtDrsCEqD | 王漢 | accepted |
| children | p_59sz4GWdkKzDrpYdRCELA6 | 王瀛 | accepted |
| children | p_83T4Gx8zXT4i7ZTiM8PZHx | 王汝濟 | accepted |
| children | p_DeWPAA3ELncewaaHzcDNYn | 王潮 | accepted |
| children | p_JeWsBNwAAMvaBffA9g8xqG | 王浩 | accepted |
| children | p_jLGNJPgfHEctu5rwo562em | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 318315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318315&o=json)
- [中国历代人物传记资料库：王漢（CBDB 318319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318319&o=json)
- [中国历代人物传记资料库：王浩（CBDB 318317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318317&o=json)
- [中国历代人物传记资料库：王淮（CBDB 318314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json)
- [中国历代人物传记资料库：王鎌（CBDB 318310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318310&o=json)
- [中国历代人物传记资料库：王汝濟（CBDB 318320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318320&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 318316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318316&o=json)
