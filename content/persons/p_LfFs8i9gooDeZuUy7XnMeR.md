---
schema: wang-person/v1
id: p_LfFs8i9gooDeZuUy7XnMeR
status: active
merged_into: null
display_name: 王三至
cbdb_id: 211374
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YdAuPBRVqhvowiHG4T5jPD
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三至，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kuy9WbEUu8txVP159RA75K
          claim_id: c_YdAuPBRVqhvowiHG4T5jPD
          source_id: s_zQVBAQp3QWGGLFmJ8TEPbA
          stance: supports
          locator: CBDB:211374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zQVBAQp3QWGGLFmJ8TEPbA
            source_type: api_record
            title: 中国历代人物传记资料库：王三至（CBDB 211374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211374&o=json
            external_identifier: CBDB:211374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6oM9wZN5776AJWdz1pdvz
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三至
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LoLbAWRxjVvcYkE6zAzNM4
          claim_id: c_S6oM9wZN5776AJWdz1pdvz
          source_id: s_zQVBAQp3QWGGLFmJ8TEPbA
          stance: supports
          locator: CBDB:211374
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LbTEPakxaCGsayPS9gHkV1
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JpKAwvv1MK7gdEG1QmEGyd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kLpGodz4J8xsO3OjhH6wsX
          claim_id: c_LbTEPakxaCGsayPS9gHkV1
          source_id: s_zQVBAQp3QWGGLFmJ8TEPbA
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zQVBAQp3QWGGLFmJ8TEPbA
            source_type: api_record
            title: 中国历代人物传记资料库：王三至（CBDB 211374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211374&o=json
            external_identifier: CBDB:211374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JpKAwvv1MK7gdEG1QmEGyd
        status: active
        display_name: 王湘
        merged_into_person_id: null
    - claim:
        id: c_sRDMlWTrENxwnO5Mg09MBA
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CAPCS9x9rcJyhUb9WT81ga
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D9DQHIhQR3ac2DsAWPEne8
          claim_id: c_sRDMlWTrENxwnO5Mg09MBA
          source_id: s_AAUozGJxH17gn59zeWIMwe
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王濬 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王濬 之父／母。
          source:
            id: s_AAUozGJxH17gn59zeWIMwe
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 211386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211386&o=json
            external_identifier: CBDB:211386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CAPCS9x9rcJyhUb9WT81ga
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_uTjH8LnI2_BrfsEFjTUFVW
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N5w1KpRWBNPCL7uNxohJ3j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XjVzNOqYN4MgreIbyVvZk6
          claim_id: c_uTjH8LnI2_BrfsEFjTUFVW
          source_id: s_vfgFd3ZTUQN13kBS4pVTpD
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王湛 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王湛 之父／母。
          source:
            id: s_vfgFd3ZTUQN13kBS4pVTpD
            source_type: api_record
            title: 中国历代人物传记资料库：王湛（CBDB 211380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211380&o=json
            external_identifier: CBDB:211380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N5w1KpRWBNPCL7uNxohJ3j
        status: active
        display_name: 王湛
        merged_into_person_id: null
    - claim:
        id: c_ZUMdF6nnNpP1uKng0rtUE5
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJtVpkt1Gyju9SBHBy6Dp8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GupB40YLT_wGbLAUJUsrDv
          claim_id: c_ZUMdF6nnNpP1uKng0rtUE5
          source_id: s_3C9Z-eD2Odt_wDjKfqD-Wy
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀛 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王瀛 之父／母。
          source:
            id: s_3C9Z-eD2Odt_wDjKfqD-Wy
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 211384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211384&o=json
            external_identifier: CBDB:211384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJtVpkt1Gyju9SBHBy6Dp8
        status: active
        display_name: 王瀛
        merged_into_person_id: null
    - claim:
        id: c_Rqiv43Pqx1X1N60-EkT-fJ
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XZG26mpDUSriVA7354o1a8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uoko1F2WfnhttbTL3uTLat
          claim_id: c_Rqiv43Pqx1X1N60-EkT-fJ
          source_id: s_mGXUNm6IQfs9lNGVog_6w4
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王澤 之父／母。
          source:
            id: s_mGXUNm6IQfs9lNGVog_6w4
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 211382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json
            external_identifier: CBDB:211382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XZG26mpDUSriVA7354o1a8
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_sOkcllmFV7hrePWD4RAZ_n
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bu1HGr9T8Ly1BT9Yk2yh6N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bGYvL5q-MUEg72aZBI_Ip5
          claim_id: c_sOkcllmFV7hrePWD4RAZ_n
          source_id: s_7LtjRWmHUwyjqT80oNg-Lo
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王洛 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王洛 之父／母。
          source:
            id: s_7LtjRWmHUwyjqT80oNg-Lo
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 211385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211385&o=json
            external_identifier: CBDB:211385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bu1HGr9T8Ly1BT9Yk2yh6N
        status: active
        display_name: 王洛
        merged_into_person_id: null
    - claim:
        id: c_zr4a7erV6QFrXNekSyKWnR
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_er5f6CsBJ6Dk5k9dhS7w1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8tW8LGiiUPZHnk-dTEmKt
          claim_id: c_zr4a7erV6QFrXNekSyKWnR
          source_id: s_tiZIAWh_CkvqB3JH9f9H1M
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王滿 与 王湘 为同胞（CBDB 记「兄」），王湘 之父／母即 王滿 之父／母。
          source:
            id: s_tiZIAWh_CkvqB3JH9f9H1M
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 211383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211383&o=json
            external_identifier: CBDB:211383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_er5f6CsBJ6Dk5k9dhS7w1N
        status: active
        display_name: 王滿
        merged_into_person_id: null
    - claim:
        id: c_4J6dyV4c87pY8GbnPOAK-B
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nJFpnaXs7wdWSaAzDCFMaq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i0x7Zwm1GFBAmMNjEVdeLC
          claim_id: c_4J6dyV4c87pY8GbnPOAK-B
          source_id: s_WoZ0k6lTgaXAI-YZXk0WVQ
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王清 与 王湘 为同胞（CBDB 记「弟」），王湘 之父／母即 王清 之父／母。
          source:
            id: s_WoZ0k6lTgaXAI-YZXk0WVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 211379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211379&o=json
            external_identifier: CBDB:211379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nJFpnaXs7wdWSaAzDCFMaq
        status: active
        display_name: 王清
        merged_into_person_id: null
    - claim:
        id: c_o2FxTKFNMNh3cqVP8LITLW
        subject_person_id: p_LfFs8i9gooDeZuUy7XnMeR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rgBsnZNWgZXB2nqnE1VPAs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cmyGb8t8Rthkcc4MIRGDE-
          claim_id: c_o2FxTKFNMNh3cqVP8LITLW
          source_id: s_JyARlV0J3vkRQMs42Oxk9B
          stance: supports
          locator: CBDB：兄弟 王湘（205964）之父／母 王三至
          quotation: null
          interpretation_note: 由兄弟关系推断：王沔 与 王湘 为同胞（CBDB 记「弟」），王湘 之父／母即 王沔 之父／母。
          source:
            id: s_JyARlV0J3vkRQMs42Oxk9B
            source_type: api_record
            title: 中国历代人物传记资料库：王沔（CBDB 211378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json
            external_identifier: CBDB:211378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rgBsnZNWgZXB2nqnE1VPAs
        status: active
        display_name: 王沔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三至

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三至，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211374） | accepted |
| name.primary | 王三至 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JpKAwvv1MK7gdEG1QmEGyd | 王湘 | accepted |
| children | p_CAPCS9x9rcJyhUb9WT81ga | 王濬 | accepted |
| children | p_N5w1KpRWBNPCL7uNxohJ3j | 王湛 | accepted |
| children | p_SJtVpkt1Gyju9SBHBy6Dp8 | 王瀛 | accepted |
| children | p_XZG26mpDUSriVA7354o1a8 | 王澤 | accepted |
| children | p_bu1HGr9T8Ly1BT9Yk2yh6N | 王洛 | accepted |
| children | p_er5f6CsBJ6Dk5k9dhS7w1N | 王滿 | accepted |
| children | p_nJFpnaXs7wdWSaAzDCFMaq | 王清 | accepted |
| children | p_rgBsnZNWgZXB2nqnE1VPAs | 王沔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 211386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211386&o=json)
- [中国历代人物传记资料库：王洛（CBDB 211385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211385&o=json)
- [中国历代人物传记资料库：王滿（CBDB 211383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211383&o=json)
- [中国历代人物传记资料库：王沔（CBDB 211378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211378&o=json)
- [中国历代人物传记资料库：王清（CBDB 211379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211379&o=json)
- [中国历代人物传记资料库：王三至（CBDB 211374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211374&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 211384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211384&o=json)
- [中国历代人物传记资料库：王澤（CBDB 211382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211382&o=json)
- [中国历代人物传记资料库：王湛（CBDB 211380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211380&o=json)
