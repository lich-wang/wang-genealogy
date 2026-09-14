---
schema: wang-person/v1
id: p_rw3SZ4WX6NQUFQKsyEHVZ4
status: active
merged_into: null
display_name: 王希德
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KeoFD99wEqDtAg9mE41BLn
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YQV6B6U7WsryxR9HKm53Yn
          claim_id: c_KeoFD99wEqDtAg9mE41BLn
          source_id: s_gxXazWFAEVKLNVao9MANo2
          stance: supports
          locator: CBDB:296389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296389）
          source: &a1
            id: s_gxXazWFAEVKLNVao9MANo2
            source_type: api_record
            title: 中国历代人物传记资料库：王希德（CBDB 296389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296389&o=json
            external_identifier: CBDB:296389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Nug2AGKRekPS7wMeLY1PS
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希德，明人物。嘉靖十四年進士，籍贯南充，曾任訓導。（中国历代人物传记资料库 CBDB 296389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bXpkaHOODOLlEAMRlrF__w
          claim_id: c_4Nug2AGKRekPS7wMeLY1PS
          source_id: s_gxXazWFAEVKLNVao9MANo2
          stance: supports
          locator: CBDB:296389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K2nHjZDhdgi6A29tsRlF4N
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bznlL0p90sW9k05hN8yKY
          claim_id: c_K2nHjZDhdgi6A29tsRlF4N
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hSdTPDWiNR5wL1nkYF2yMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 202897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json
            external_identifier: CBDB:202897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
    - claim:
        id: c_kAsXHxYlH56PtbJSuxcoph
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ucnxt8oaV5Rolmq4DEO7yV
          claim_id: c_kAsXHxYlH56PtbJSuxcoph
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王謙 之父／母。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2UaPva3PJ4SimEwsC8AKh3
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_9eizG5DusTkThf7-MJ7WlR
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5OTZzJulZs07c8WoQ1ELFI
          claim_id: c_9eizG5DusTkThf7-MJ7WlR
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王遴 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王遴 之父／母。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EhLuzakM77Au4WLhNNyX41
        status: active
        display_name: 王遴
        merged_into_person_id: null
    - claim:
        id: c_C_4g1DncZ-g9hFtsOKyeH-
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HNXh67GiFTsu28KiwC1hUX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViVs5BTze6Ss48Nl5UqVNv
          claim_id: c_C_4g1DncZ-g9hFtsOKyeH-
          source_id: s_Mf8a11WACOkEsRDIrSbUax
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王遷 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王遷 之父／母。
          source:
            id: s_Mf8a11WACOkEsRDIrSbUax
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 290812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json
            external_identifier: CBDB:290812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNXh67GiFTsu28KiwC1hUX
        status: active
        display_name: 王遷
        merged_into_person_id: null
    - claim:
        id: c_AsmkOHIRoK7Vb_0joKAaeS
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Luud4ynJTZPaQntcrS1NQs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RJz_axOj2OwjMWY00utozT
          claim_id: c_AsmkOHIRoK7Vb_0joKAaeS
          source_id: s_Nk2pYPIvGM8EWmPWBLAxhu
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王述 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王述 之父／母。
          source:
            id: s_Nk2pYPIvGM8EWmPWBLAxhu
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 296403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296403&o=json
            external_identifier: CBDB:296403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Luud4ynJTZPaQntcrS1NQs
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_qA7_Gs3__vpwMckUrdpS6I
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PsXxCSg8UX48nkvZWrXMv2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LuM0cvVJ0ObviXxdE_BGG3
          claim_id: c_qA7_Gs3__vpwMckUrdpS6I
          source_id: s_ZpAnqmYRLSBAADlr4GyEjY
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王郁 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王郁 之父／母。
          source:
            id: s_ZpAnqmYRLSBAADlr4GyEjY
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 290819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json
            external_identifier: CBDB:290819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PsXxCSg8UX48nkvZWrXMv2
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c_g9xRa1vfE6Z9dIMxn_ZBAB
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QKjMqf1kcgRnbebgJAAErq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYVX4TGY0-4jhaExQ_Soet
          claim_id: c_g9xRa1vfE6Z9dIMxn_ZBAB
          source_id: s_1xRqa87Xvd7XnOgMEibN98
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王選 之父／母。
          source:
            id: s_1xRqa87Xvd7XnOgMEibN98
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 290811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json
            external_identifier: CBDB:290811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKjMqf1kcgRnbebgJAAErq
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_vu-xYlOPRRiejo_90F132A
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJk_DMsCT-EizIy461xwGT
          claim_id: c_vu-xYlOPRRiejo_90F132A
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王達 之父／母。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXrnVya55CwoArA8f7hzUE
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_dTkcHAz0tMClmlHFGo13_e
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bqXS9vVUEtwfuY1c1KuxB5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7VmeMHVS7Doh0v1BTN6Np
          claim_id: c_dTkcHAz0tMClmlHFGo13_e
          source_id: s_r1PGKFijZzYi9sqGrXGwns
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑤 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王瑤 之父／母。
          source:
            id: s_r1PGKFijZzYi9sqGrXGwns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 290814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json
            external_identifier: CBDB:290814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bqXS9vVUEtwfuY1c1KuxB5
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_zcsq_TdvXJeNpp1Jk_PV_j
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlISaln9WSKjFfaNS3TeME
          claim_id: c_zcsq_TdvXJeNpp1Jk_PV_j
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王追 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王追 之父／母。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbzKwFnip9EhEf2G4NEZSx
        status: active
        display_name: 王追
        merged_into_person_id: null
    - claim:
        id: c_ginagpYY1UR5zQYHmMWo9x
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPpTCzcguRQVG4PBEdBZ7_
          claim_id: c_ginagpYY1UR5zQYHmMWo9x
          source_id: s__7ZRAgQGVoKgPpP7G1Lq2U
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王誥 之父／母。
          source:
            id: s__7ZRAgQGVoKgPpP7G1Lq2U
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 296396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json
            external_identifier: CBDB:296396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q6VgqMMyd8msvogNUJ1wvQ
        status: active
        display_name: 王誥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希德 | accepted |
| bio.summary | 王希德，明人物。嘉靖十四年進士，籍贯南充，曾任訓導。（中国历代人物传记资料库 CBDB 296389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |
| children | p_2UaPva3PJ4SimEwsC8AKh3 | 王謙 | accepted |
| children | p_EhLuzakM77Au4WLhNNyX41 | 王遴 | accepted |
| children | p_HNXh67GiFTsu28KiwC1hUX | 王遷 | accepted |
| children | p_Luud4ynJTZPaQntcrS1NQs | 王述 | accepted |
| children | p_PsXxCSg8UX48nkvZWrXMv2 | 王郁 | accepted |
| children | p_QKjMqf1kcgRnbebgJAAErq | 王選 | accepted |
| children | p_SXrnVya55CwoArA8f7hzUE | 王達 | accepted |
| children | p_bqXS9vVUEtwfuY1c1KuxB5 | 王瑤 | accepted |
| children | p_fbzKwFnip9EhEf2G4NEZSx | 王追 | accepted |
| children | p_q6VgqMMyd8msvogNUJ1wvQ | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 290813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json)
- [中国历代人物传记资料库：王誥（CBDB 296396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json)
- [中国历代人物传记资料库：王遴（CBDB 290820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json)
- [中国历代人物传记资料库：王遷（CBDB 290812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json)
- [中国历代人物传记资料库：王謙（CBDB 290823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json)
- [中国历代人物传记资料库：王述（CBDB 296403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296403&o=json)
- [中国历代人物传记资料库：王希德（CBDB 296389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296389&o=json)
- [中国历代人物传记资料库：王選（CBDB 290811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 290814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json)
- [中国历代人物传记资料库：王郁（CBDB 290819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json)
- [中国历代人物传记资料库：王追（CBDB 290817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json)
- [中国历代人物传记资料库：王遵（CBDB 202897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json)
