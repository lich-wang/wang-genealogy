---
schema: wang-person/v1
id: p_oDCtFv3cf2CiUbXVcBy9FF
status: active
merged_into: null
display_name: 王廷榦
revision: 25
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nHtzhEdEYX5HxXcFh6V5Xn
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷榦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8m784mdFRZLGuv2Ug25T6s
          claim_id: c_nHtzhEdEYX5HxXcFh6V5Xn
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: CBDB:126553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126553）
          source: &a1
            id: s_1raHT5WktiXo8Cx29ateix
            source_type: api_record
            title: 中国历代人物传记资料库：王廷榦（CBDB 126553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json
            external_identifier: CBDB:126553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oGNo5Ae6XftjFD7E7FArt2
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3eE5QJFm6KUcYqcs9Q6a6K
          claim_id: c_oGNo5Ae6XftjFD7E7FArt2
          source_id: s_1raHT5WktiXo8Cx29ateix
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
        id: c_kdzgAStB1eJys9Ecc34AQ1
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷榦（生于1516年），明人物。籍贯涇縣，入仕進士，曾任府同知、戶部郎中、戶部員外郎。（中国历代人物传记资料库 CBDB 126553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZWiNaHTdnFLaK3CpdtEVOk
          claim_id: c_kdzgAStB1eJys9Ecc34AQ1
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: CBDB:126553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YILQ7RzAt-O1YkUkB9QI4F
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32UHQh4Fdj4J7BssaAtSLY
          claim_id: c_YILQ7RzAt-O1YkUkB9QI4F
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ARCmWyZdEEd1UcgNfncxT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝猷（CBDB 291880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json
            external_identifier: CBDB:291880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11RhKLzn2Mi6Moy5jEp4MD
        status: active
        display_name: 王汝猷
        merged_into_person_id: null
  children:
    - claim:
        id: c_4_86609IL99emaviir8VaF
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5gpPWrhVFmbfxwLkGyt6Up
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yT_JBja8bz9ronURTrzFUl
          claim_id: c_4_86609IL99emaviir8VaF
          source_id: s_eKFjaTbqNQmuFNUjRciBrj
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eKFjaTbqNQmuFNUjRciBrj
            source_type: api_record
            title: 中国历代人物传记资料库：王文爟（CBDB 291900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291900&o=json
            external_identifier: CBDB:291900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5gpPWrhVFmbfxwLkGyt6Up
        status: active
        display_name: 王文爟
        merged_into_person_id: null
    - claim:
        id: c_voMbx_P_FCPAtl6OR32Xbq
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gBimkCGQoGDQ7VZXasL4y6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lz-dOYBXSN6fnwfo-16vkd
          claim_id: c_voMbx_P_FCPAtl6OR32Xbq
          source_id: s_4vQLRCPRoRdgDjcim23SeF
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4vQLRCPRoRdgDjcim23SeF
            source_type: api_record
            title: 中国历代人物传记资料库：王文炯（CBDB 291898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291898&o=json
            external_identifier: CBDB:291898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gBimkCGQoGDQ7VZXasL4y6
        status: active
        display_name: 王文炯
        merged_into_person_id: null
    - claim:
        id: c_7ACcHb4JGrZdBpyYjzkM0S
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xGopDcAXJgrE5Lk3DZAkF3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZxQkF_tPjf18Ke_8x4_ZYs
          claim_id: c_7ACcHb4JGrZdBpyYjzkM0S
          source_id: s_B9S4ZW4dvd4HsF7CtNZXS6
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B9S4ZW4dvd4HsF7CtNZXS6
            source_type: api_record
            title: 中国历代人物传记资料库：王文燁（CBDB 291899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291899&o=json
            external_identifier: CBDB:291899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xGopDcAXJgrE5Lk3DZAkF3
        status: active
        display_name: 王文燁
        merged_into_person_id: null
    - claim:
        id: c_yY-f0-ipqnsMVEpVT96UM4
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cREcqbhxgXG2hVD29ybNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__sKsLjlxj9oRslteW4nqe3
          claim_id: c_yY-f0-ipqnsMVEpVT96UM4
          source_id: s_7K2JsWrUx8X8LVXUDDBQkA
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7K2JsWrUx8X8LVXUDDBQkA
            source_type: api_record
            title: 中国历代人物传记资料库：王文灼（CBDB 291901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291901&o=json
            external_identifier: CBDB:291901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5cREcqbhxgXG2hVD29ybNb
        status: active
        display_name: 王文灼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CBknzOnpJeVWavIbP9Rl2k
        subject_person_id: p_2hBKyxrN1dj7d5F4o4qUat
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n97VSOGe9qMcddxJeNSj_Q
          claim_id: c_CBknzOnpJeVWavIbP9Rl2k
          source_id: s_P7CoYMX4u35GG1LGj3vDJN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P7CoYMX4u35GG1LGj3vDJN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 291878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json
            external_identifier: CBDB:291878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hBKyxrN1dj7d5F4o4qUat
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_t5KZYWsYhuZB_YA69Ukdx9
        subject_person_id: p_VmLwuTXbApP8EYVhFWfaQg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__n3H87Xr5lEw5rddM2A2gs
          claim_id: c_t5KZYWsYhuZB_YA69Ukdx9
          source_id: s_EPA8QkJ16acAThhwgCwudz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EPA8QkJ16acAThhwgCwudz
            source_type: api_record
            title: 中国历代人物传记资料库：王鏴（CBDB 291879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291879&o=json
            external_identifier: CBDB:291879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VmLwuTXbApP8EYVhFWfaQg
        status: active
        display_name: 王鏴
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_t6HVtxRJKUgnuT5XbsQJeL
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2pEjUDgmg6ACaWkcArzGmB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QZIJp0ydiNZNLKpvotN1Z
          claim_id: c_t6HVtxRJKUgnuT5XbsQJeL
          source_id: s_DQ9qFN5BNG97aT4nG3H4qe
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DQ9qFN5BNG97aT4nG3H4qe
            source_type: api_record
            title: 中国历代人物传记资料库：王允元（CBDB 291911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291911&o=json
            external_identifier: CBDB:291911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2pEjUDgmg6ACaWkcArzGmB
        status: active
        display_name: 王允元
        merged_into_person_id: null
    - claim:
        id: c_HKu8-SXasLgERXLLGg4qLC
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fagWpUqsWGi5ABdQASKVK9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UH0WA9xaBaUnxK_mOMnJ7x
          claim_id: c_HKu8-SXasLgERXLLGg4qLC
          source_id: s_dkCzSjnWxJrGEE3y9VeBje
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dkCzSjnWxJrGEE3y9VeBje
            source_type: api_record
            title: 中国历代人物传记资料库：王時陞（CBDB 291908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291908&o=json
            external_identifier: CBDB:291908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fagWpUqsWGi5ABdQASKVK9
        status: active
        display_name: 王時陞
        merged_into_person_id: null
    - claim:
        id: c_GDscPLf3i0HIMBzEmG8XTH
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ktsnU8FTeioQRpsJfaLUo1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMbOwqfjH2DqBrAilP_lA0
          claim_id: c_GDscPLf3i0HIMBzEmG8XTH
          source_id: s_H3s4HvGKR6qTkkbYs9xDwf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H3s4HvGKR6qTkkbYs9xDwf
            source_type: api_record
            title: 中国历代人物传记资料库：王允亨（CBDB 291912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291912&o=json
            external_identifier: CBDB:291912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ktsnU8FTeioQRpsJfaLUo1
        status: active
        display_name: 王允亨
        merged_into_person_id: null
    - claim:
        id: c_-jecEuJ9BBL7ZPmZ8LlCeu
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PpLqnBNRrTw5b6vkG3TPK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0R8xWLaYi1JQ2MInY5f-Tx
          claim_id: c_-jecEuJ9BBL7ZPmZ8LlCeu
          source_id: s_48w7agQBRvSUkP56U1snL5
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_48w7agQBRvSUkP56U1snL5
            source_type: api_record
            title: 中国历代人物传记资料库：王時可（CBDB 291906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json
            external_identifier: CBDB:291906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PpLqnBNRrTw5b6vkG3TPK7
        status: active
        display_name: 王時可
        merged_into_person_id: null
    - claim:
        id: c_9pYlgtLO387z8hv27I9pc0
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T9E7DvbctBp2op4eaF9sZG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tul1mA2iePcq283fYIlF0l
          claim_id: c_9pYlgtLO387z8hv27I9pc0
          source_id: s_WBK8MeoGCfzqjEW7LM3Gxh
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WBK8MeoGCfzqjEW7LM3Gxh
            source_type: api_record
            title: 中国历代人物传记资料库：王時亮（CBDB 291904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json
            external_identifier: CBDB:291904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_T9E7DvbctBp2op4eaF9sZG
        status: active
        display_name: 王時亮
        merged_into_person_id: null
    - claim:
        id: c_dT1X4VWCQv5EnrELZZnsi7
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4Jn99nDhfjpZiAyCYhq6M8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mcc1SQJUwDQ6_BX14v4qL6
          claim_id: c_dT1X4VWCQv5EnrELZZnsi7
          source_id: s_ngpJJCHMmj1kzE4qm69ajX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ngpJJCHMmj1kzE4qm69ajX
            source_type: api_record
            title: 中国历代人物传记资料库：王時隆（CBDB 291903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291903&o=json
            external_identifier: CBDB:291903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4Jn99nDhfjpZiAyCYhq6M8
        status: active
        display_name: 王時隆
        merged_into_person_id: null
    - claim:
        id: c_iQpqwfN4CqrLyQ-I88kNqC
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8CdN36FbF54RVCMd92N8La
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMJfgN0fp5orqfMMS2LcGg
          claim_id: c_iQpqwfN4CqrLyQ-I88kNqC
          source_id: s_uG9ZYAwAD933EVzSBy2vLs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uG9ZYAwAD933EVzSBy2vLs
            source_type: api_record
            title: 中国历代人物传记资料库：王允某（CBDB 291910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291910&o=json
            external_identifier: CBDB:291910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8CdN36FbF54RVCMd92N8La
        status: active
        display_name: 王允某
        merged_into_person_id: null
    - claim:
        id: c_bA37KKfghN73fqCckyK3BH
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rfg8anW9X2Y9GWiToS8XT4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8AWiOBAxMRpcsX7cYpcnc
          claim_id: c_bA37KKfghN73fqCckyK3BH
          source_id: s_aWtXs1LuYMbFTzLbZFJctL
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aWtXs1LuYMbFTzLbZFJctL
            source_type: api_record
            title: 中国历代人物传记资料库：王時春（CBDB 291905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291905&o=json
            external_identifier: CBDB:291905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Rfg8anW9X2Y9GWiToS8XT4
        status: active
        display_name: 王時春
        merged_into_person_id: null
    - claim:
        id: c_oeLlIhuMTOjLLVzhC1wMPb
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VLtC8CDJh5E2i42Aedjyf9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xLz-iUXhlOOHZAZRTtv9M9
          claim_id: c_oeLlIhuMTOjLLVzhC1wMPb
          source_id: s_3h6L2zbcTVM3zBsev2ume1
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3h6L2zbcTVM3zBsev2ume1
            source_type: api_record
            title: 中国历代人物传记资料库：王時譽（CBDB 291902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291902&o=json
            external_identifier: CBDB:291902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VLtC8CDJh5E2i42Aedjyf9
        status: active
        display_name: 王時譽
        merged_into_person_id: null
    - claim:
        id: c_2yzh97-2MFwCI0FOmmnaSu
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XDd9Xr42aqw3Cvow3Z5yKw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IKKb05ReXpYWLUGvyOlEPw
          claim_id: c_2yzh97-2MFwCI0FOmmnaSu
          source_id: s_n27SANAJSS8EvXRn2denrV
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n27SANAJSS8EvXRn2denrV
            source_type: api_record
            title: 中国历代人物传记资料库：王允仁（CBDB 291909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291909&o=json
            external_identifier: CBDB:291909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XDd9Xr42aqw3Cvow3Z5yKw
        status: active
        display_name: 王允仁
        merged_into_person_id: null
  other:
    - claim:
        id: c_OUBDQTsx0XOSfrLx4gCcU6
        subject_person_id: p_4J9YJu8rjeYqar7Hg2YMUA
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
        - id: cs_hBbczfV5fomD0edyltiNAz
          claim_id: c_OUBDQTsx0XOSfrLx4gCcU6
          source_id: s_gTH8GgJ4cdU_JFSDG8bhHI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gTH8GgJ4cdU_JFSDG8bhHI
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 291889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json
            external_identifier: CBDB:291889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4J9YJu8rjeYqar7Hg2YMUA
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_aZu8YJw65al7ekf7mfgSFD
        subject_person_id: p_8zPmSWpJPpy8b4A3Xqp6m5
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
        - id: cs_vGdSijjbyQwcWTk34yips5
          claim_id: c_aZu8YJw65al7ekf7mfgSFD
          source_id: s_5HNn6ncQ1ehnVMRpPjJw5M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5HNn6ncQ1ehnVMRpPjJw5M
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 291888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json
            external_identifier: CBDB:291888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8zPmSWpJPpy8b4A3Xqp6m5
        status: active
        display_name: 王楹
        merged_into_person_id: null
    - claim:
        id: c_dmeGiHBtZ5BVeJsmRIW7nl
        subject_person_id: p_DeJBBTDJzAqfa9itKrS7Ug
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
        - id: cs_x2FrzMVFEWZnXQyinxtlC4
          claim_id: c_dmeGiHBtZ5BVeJsmRIW7nl
          source_id: s_fE1Uj3iqhTtLoB1dXyvLZ5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fE1Uj3iqhTtLoB1dXyvLZ5
            source_type: api_record
            title: 中国历代人物传记资料库：王栗（CBDB 291893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291893&o=json
            external_identifier: CBDB:291893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DeJBBTDJzAqfa9itKrS7Ug
        status: active
        display_name: 王栗
        merged_into_person_id: null
    - claim:
        id: c_cZscPPfZXye_BEYIMD7E0g
        subject_person_id: p_WA5sko5dY4oC4aTSjVEDme
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
        - id: cs_98VXCCjv0xUC_dwi5jFwgt
          claim_id: c_cZscPPfZXye_BEYIMD7E0g
          source_id: s_eXhN4F1Ldj9EdF8k2D4guT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eXhN4F1Ldj9EdF8k2D4guT
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 291886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291886&o=json
            external_identifier: CBDB:291886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WA5sko5dY4oC4aTSjVEDme
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_yQe2Y6vkAPOeP2dvHi6hD8
        subject_person_id: p_Zzmui67U7CyDsMeJFVXKz1
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
        - id: cs_yx231tllTGlptDnhMWl0E8
          claim_id: c_yQe2Y6vkAPOeP2dvHi6hD8
          source_id: s_ToRn8b6CoIbZCrOPDPb77c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ToRn8b6CoIbZCrOPDPb77c
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 291883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291883&o=json
            external_identifier: CBDB:291883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zzmui67U7CyDsMeJFVXKz1
        status: active
        display_name: 王樞
        merged_into_person_id: null
    - claim:
        id: c_Sp_LyZwHCYx3XgVRtBiUDe
        subject_person_id: p_dgGGiho7Jod4eno8cPBKed
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
        - id: cs_1Nl9_bqFZG6fgHKaqHA7s4
          claim_id: c_Sp_LyZwHCYx3XgVRtBiUDe
          source_id: s_pyNOpiBD8XsRLxpv35dlK0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pyNOpiBD8XsRLxpv35dlK0
            source_type: api_record
            title: 中国历代人物传记资料库：王樟（CBDB 291891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291891&o=json
            external_identifier: CBDB:291891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dgGGiho7Jod4eno8cPBKed
        status: active
        display_name: 王樟
        merged_into_person_id: null
    - claim:
        id: c_YGstII4GeC970MnAvwIKNe
        subject_person_id: p_f1XwTRMVAYJExkGTa5bF92
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
        - id: cs_EDaq2UvVcv7npSqjNZYUFF
          claim_id: c_YGstII4GeC970MnAvwIKNe
          source_id: s_juzNLf6eq7K9DTvDTYKOrq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_juzNLf6eq7K9DTvDTYKOrq
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 291887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json
            external_identifier: CBDB:291887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f1XwTRMVAYJExkGTa5bF92
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_nQfp808dhEouBFuEHlnjhu
        subject_person_id: p_fWwneV8r1G2iVJWGgF8cT1
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
        - id: cs_e3nKrxK-s9ufajE9nVQSUD
          claim_id: c_nQfp808dhEouBFuEHlnjhu
          source_id: s_j7LUjFm8EDMNxzHQ_DgHP5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j7LUjFm8EDMNxzHQ_DgHP5
            source_type: api_record
            title: 中国历代人物传记资料库：王欄（CBDB 291897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json
            external_identifier: CBDB:291897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fWwneV8r1G2iVJWGgF8cT1
        status: active
        display_name: 王欄
        merged_into_person_id: null
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
        id: p_hBEcoRHLpZFMNN6ewK4SfC
        status: active
        display_name: 王棐
        merged_into_person_id: null
    - claim:
        id: c_Y_whs1hYnxZK0XzPATqeWn
        subject_person_id: p_m3uc26Dpb16ny9EsAfFfb6
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
        - id: cs_P2RsSDwlqfvFAHHpQ1hBu4
          claim_id: c_Y_whs1hYnxZK0XzPATqeWn
          source_id: s_douja9rodMHb9uXjlf9Fid
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_douja9rodMHb9uXjlf9Fid
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 291892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291892&o=json
            external_identifier: CBDB:291892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m3uc26Dpb16ny9EsAfFfb6
        status: active
        display_name: 王極
        merged_into_person_id: null
    - claim:
        id: c_-fuvQbx_ups4jLtV0m2jPV
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qmNvDF2sUe4JHGGJosA5ms
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2wAH3b2C8GGdDSJ_TZWMa
          claim_id: c_-fuvQbx_ups4jLtV0m2jPV
          source_id: s_v1ebsaTejayfIiwvJq_S0P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v1ebsaTejayfIiwvJq_S0P
            source_type: api_record
            title: 中国历代人物传记资料库：王杭（CBDB 291895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291895&o=json
            external_identifier: CBDB:291895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qmNvDF2sUe4JHGGJosA5ms
        status: active
        display_name: 王杭
        merged_into_person_id: null
    - claim:
        id: c__raiK6T0nMY3RjqI6hI61Q
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x3R1rAebwTq6W53VbbXqQw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D6L4Xr-Zo9dMXRRvOgPEiu
          claim_id: c__raiK6T0nMY3RjqI6hI61Q
          source_id: s_R4kOnGpqOyLXsVg6Pr7ifC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126553 王廷榦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R4kOnGpqOyLXsVg6Pr7ifC
            source_type: api_record
            title: 中国历代人物传记资料库：王梧（CBDB 291890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291890&o=json
            external_identifier: CBDB:291890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x3R1rAebwTq6W53VbbXqQw
        status: active
        display_name: 王梧
        merged_into_person_id: null
---

# 王廷榦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷榦 | accepted |
| birth.date | 1516年 | accepted |
| bio.summary | 王廷榦（生于1516年），明人物。籍贯涇縣，入仕進士，曾任府同知、戶部郎中、戶部員外郎。（中国历代人物传记资料库 CBDB 126553） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11RhKLzn2Mi6Moy5jEp4MD | 王汝猷 | accepted |
| children | p_5gpPWrhVFmbfxwLkGyt6Up | 王文爟 | accepted |
| children | p_gBimkCGQoGDQ7VZXasL4y6 | 王文炯 | accepted |
| children | p_xGopDcAXJgrE5Lk3DZAkF3 | 王文燁 | accepted |
| children | p_5cREcqbhxgXG2hVD29ybNb | 王文灼 | accepted |
| ancestors | p_2hBKyxrN1dj7d5F4o4qUat | 王達 | accepted |
| ancestors | p_VmLwuTXbApP8EYVhFWfaQg | 王鏴 | accepted |
| descendants | p_2pEjUDgmg6ACaWkcArzGmB | 王允元 | accepted |
| descendants | p_fagWpUqsWGi5ABdQASKVK9 | 王時陞 | accepted |
| descendants | p_ktsnU8FTeioQRpsJfaLUo1 | 王允亨 | accepted |
| descendants | p_PpLqnBNRrTw5b6vkG3TPK7 | 王時可 | accepted |
| descendants | p_T9E7DvbctBp2op4eaF9sZG | 王時亮 | accepted |
| descendants | p_4Jn99nDhfjpZiAyCYhq6M8 | 王時隆 | accepted |
| descendants | p_8CdN36FbF54RVCMd92N8La | 王允某 | accepted |
| descendants | p_Rfg8anW9X2Y9GWiToS8XT4 | 王時春 | accepted |
| descendants | p_VLtC8CDJh5E2i42Aedjyf9 | 王時譽 | accepted |
| descendants | p_XDd9Xr42aqw3Cvow3Z5yKw | 王允仁 | accepted |
| other | p_4J9YJu8rjeYqar7Hg2YMUA | 王梓 | accepted |
| other | p_8zPmSWpJPpy8b4A3Xqp6m5 | 王楹 | accepted |
| other | p_DeJBBTDJzAqfa9itKrS7Ug | 王栗 | accepted |
| other | p_WA5sko5dY4oC4aTSjVEDme | 王廷 | accepted |
| other | p_Zzmui67U7CyDsMeJFVXKz1 | 王樞 | accepted |
| other | p_dgGGiho7Jod4eno8cPBKed | 王樟 | accepted |
| other | p_f1XwTRMVAYJExkGTa5bF92 | 王傑 | accepted |
| other | p_fWwneV8r1G2iVJWGgF8cT1 | 王欄 | accepted |
| other | p_hBEcoRHLpZFMNN6ewK4SfC | 王棐 | accepted |
| other | p_m3uc26Dpb16ny9EsAfFfb6 | 王極 | accepted |
| other | p_qmNvDF2sUe4JHGGJosA5ms | 王杭 | accepted |
| other | p_x3R1rAebwTq6W53VbbXqQw | 王梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 291878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json)
- [中国历代人物传记资料库：王棐（CBDB 291894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291894&o=json)
- [中国历代人物传记资料库：王杭（CBDB 291895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291895&o=json)
- [中国历代人物传记资料库：王極（CBDB 291892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291892&o=json)
- [中国历代人物传记资料库：王傑（CBDB 291887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json)
- [中国历代人物传记资料库：王欄（CBDB 291897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291897&o=json)
- [中国历代人物传记资料库：王栗（CBDB 291893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291893&o=json)
- [中国历代人物传记资料库：王鏴（CBDB 291879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291879&o=json)
- [中国历代人物传记资料库：王汝猷（CBDB 291880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json)
- [中国历代人物传记资料库：王時春（CBDB 291905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291905&o=json)
- [中国历代人物传记资料库：王時可（CBDB 291906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json)
- [中国历代人物传记资料库：王時亮（CBDB 291904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json)
- [中国历代人物传记资料库：王時隆（CBDB 291903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291903&o=json)
- [中国历代人物传记资料库：王時陞（CBDB 291908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291908&o=json)
- [中国历代人物传记资料库：王時譽（CBDB 291902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291902&o=json)
- [中国历代人物传记资料库：王樞（CBDB 291883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291883&o=json)
- [中国历代人物传记资料库：王廷（CBDB 291886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291886&o=json)
- [中国历代人物传记资料库：王廷榦（CBDB 126553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json)
- [中国历代人物传记资料库：王文爟（CBDB 291900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291900&o=json)
- [中国历代人物传记资料库：王文炯（CBDB 291898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291898&o=json)
- [中国历代人物传记资料库：王文燁（CBDB 291899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291899&o=json)
- [中国历代人物传记资料库：王文灼（CBDB 291901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291901&o=json)
- [中国历代人物传记资料库：王梧（CBDB 291890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291890&o=json)
- [中国历代人物传记资料库：王楹（CBDB 291888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291888&o=json)
- [中国历代人物传记资料库：王允亨（CBDB 291912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291912&o=json)
- [中国历代人物传记资料库：王允某（CBDB 291910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291910&o=json)
- [中国历代人物传记资料库：王允仁（CBDB 291909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291909&o=json)
- [中国历代人物传记资料库：王允元（CBDB 291911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291911&o=json)
- [中国历代人物传记资料库：王樟（CBDB 291891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291891&o=json)
- [中国历代人物传记资料库：王梓（CBDB 291889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291889&o=json)
