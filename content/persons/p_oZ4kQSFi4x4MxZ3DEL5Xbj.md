---
schema: wang-person/v1
id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
status: active
merged_into: null
display_name: 王纘宗
cbdb_id: 324561
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qPqBm29KsKHPNd6wgbCVH3
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘宗，明人物。嘉靖三十八年進士，籍贯南充，曾任知縣。（中国历代人物传记资料库 CBDB 324561）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qIJJf3ONITuKlxjokbLLvp
          claim_id: c_qPqBm29KsKHPNd6wgbCVH3
          source_id: s_4y8cFGHpEpZcqM3DqnwKCq
          stance: supports
          locator: CBDB:324561
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4y8cFGHpEpZcqM3DqnwKCq
            source_type: api_record
            title: 中国历代人物传记资料库：王纘宗（CBDB 324561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324561&o=json
            external_identifier: CBDB:324561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2eLsSv95M3BG1TmKQGhT8d
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iPHS6GHtYKPyi1fKEjjN6z
          claim_id: c_2eLsSv95M3BG1TmKQGhT8d
          source_id: s_4y8cFGHpEpZcqM3DqnwKCq
          stance: supports
          locator: CBDB:324561
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gW5ClgZTRF44P-BOnw_BSn
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_128B9biG3SCqBi3RjuYvYI
          claim_id: c_gW5ClgZTRF44P-BOnw_BSn
          source_id: s_4y8cFGHpEpZcqM3DqnwKCq
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4y8cFGHpEpZcqM3DqnwKCq
            source_type: api_record
            title: 中国历代人物传记资料库：王纘宗（CBDB 324561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324561&o=json
            external_identifier: CBDB:324561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
    - claim:
        id: c_laZzZok2MMngvo-BTP5h_Y
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GFNJN3RybBE7dopVUBEes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u7sfR5BuxPxLbbep_xm1Si
          claim_id: c_laZzZok2MMngvo-BTP5h_Y
          source_id: s_GBUWLbP0m8k1Ai7ScKTe2J
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王嘉 之父／母。
          source:
            id: s_GBUWLbP0m8k1Ai7ScKTe2J
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json
            external_identifier: CBDB:324571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GFNJN3RybBE7dopVUBEes
        status: active
        display_name: 王嘉
        merged_into_person_id: null
    - claim:
        id: c_ahqxKCC1o0TU9ecvRZyxuz
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CtzM6SrBC88nz162s91Kx6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hif5hdsxaXDHsTzoX8EEAc
          claim_id: c_ahqxKCC1o0TU9ecvRZyxuz
          source_id: s_5IwcKFGZaB3bNW4H9a9lM7
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用官 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王用官 之父／母。
          source:
            id: s_5IwcKFGZaB3bNW4H9a9lM7
            source_type: api_record
            title: 中国历代人物传记资料库：王用官（CBDB 324566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json
            external_identifier: CBDB:324566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CtzM6SrBC88nz162s91Kx6
        status: active
        display_name: 王用官
        merged_into_person_id: null
    - claim:
        id: c_ftwT3LhT9qIQGVGBmXFPqu
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HaAN2bLNRjLhZBVymSE7kz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Rkc5PJUaY8YYymo-01BSA
          claim_id: c_ftwT3LhT9qIQGVGBmXFPqu
          source_id: s_5P_v-w6ghkP5P4G2XcpS-Z
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用行 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用行 之父／母。
          source:
            id: s_5P_v-w6ghkP5P4G2XcpS-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王用行（CBDB 324573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json
            external_identifier: CBDB:324573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HaAN2bLNRjLhZBVymSE7kz
        status: active
        display_name: 王用行
        merged_into_person_id: null
    - claim:
        id: c_prCJWGI-fZErFO9_y3ZeQN
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQnaoBrw8SsaLnnF4L3Po3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IPxTR2YR7dovStdcQ2enQ
          claim_id: c_prCJWGI-fZErFO9_y3ZeQN
          source_id: s_BnCY1x4ZoaXB-39IIz_6bC
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王疇 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王疇 之父／母。
          source:
            id: s_BnCY1x4ZoaXB-39IIz_6bC
            source_type: api_record
            title: 中国历代人物传记资料库：王疇（CBDB 324568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324568&o=json
            external_identifier: CBDB:324568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQnaoBrw8SsaLnnF4L3Po3
        status: active
        display_name: 王疇
        merged_into_person_id: null
    - claim:
        id: c_LBHLsDLsF9JFooxu_1RvNf
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M6LEcXJ4fAxH6NMLaBJTYV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrTb0JWzkO-dClEatSz2-O
          claim_id: c_LBHLsDLsF9JFooxu_1RvNf
          source_id: s_8LoXkFgmCiZ2ZowExxHmrx
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王達孚 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王達孚 之父／母。
          source:
            id: s_8LoXkFgmCiZ2ZowExxHmrx
            source_type: api_record
            title: 中国历代人物传记资料库：王達孚（CBDB 324570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json
            external_identifier: CBDB:324570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M6LEcXJ4fAxH6NMLaBJTYV
        status: active
        display_name: 王達孚
        merged_into_person_id: null
    - claim:
        id: c_oHadBBtgpMUhDhcU5ECe11
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U7t29AJET8TEYjEiPgwzy7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9jja5AsByXVrsKbmYTRwx
          claim_id: c_oHadBBtgpMUhDhcU5ECe11
          source_id: s_gGjC5Fy7xXdGd0kj42_Z5R
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用康 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用康 之父／母。
          source:
            id: s_gGjC5Fy7xXdGd0kj42_Z5R
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 324575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json
            external_identifier: CBDB:324575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7t29AJET8TEYjEiPgwzy7
        status: active
        display_name: 王用康
        merged_into_person_id: null
    - claim:
        id: c_HWphZHfhsam--69UkiuLQZ
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNNbh8NWTBE9vDh7X2rEN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HUsjsAEEd6lEBpxxl0Y3SP
          claim_id: c_HWphZHfhsam--69UkiuLQZ
          source_id: s_YFtgSyuyP1EsFLM-MREwnV
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王美銳 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王美銳 之父／母。
          source:
            id: s_YFtgSyuyP1EsFLM-MREwnV
            source_type: api_record
            title: 中国历代人物传记资料库：王美銳（CBDB 324567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324567&o=json
            external_identifier: CBDB:324567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNNbh8NWTBE9vDh7X2rEN1
        status: active
        display_name: 王美銳
        merged_into_person_id: null
    - claim:
        id: c_QFT5zrDWFpkBG3mXfKo1P9
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSzOjJcC2MyF5upACJ3cWb
          claim_id: c_QFT5zrDWFpkBG3mXfKo1P9
          source_id: s_-G7fBIBN9btKEGuhClctud
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賓 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王用賓 之父／母。
          source:
            id: s_-G7fBIBN9btKEGuhClctud
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 324565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json
            external_identifier: CBDB:324565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VnMF4vYCZBF1or3PKc5Tz3
        status: active
        display_name: 王用賓
        merged_into_person_id: null
    - claim:
        id: c_XQ_bwKnStjQPG1IAB_ErcU
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WZhbbHJkMSdRjeeuQou9DY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCo-snPhPLtUq2xC12Wa-u
          claim_id: c_XQ_bwKnStjQPG1IAB_ErcU
          source_id: s_hioFLfz-T_vvlAONjVin5z
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用章 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用章 之父／母。
          source:
            id: s_hioFLfz-T_vvlAONjVin5z
            source_type: api_record
            title: 中国历代人物传记资料库：王用章（CBDB 324572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json
            external_identifier: CBDB:324572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WZhbbHJkMSdRjeeuQou9DY
        status: active
        display_name: 王用章
        merged_into_person_id: null
    - claim:
        id: c_Vn6gyWBVnNuNdai3EMZCx8
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xu98awyac4YYMCq5HUoMnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63DBvLP8FWpZAK8TmXkp3h
          claim_id: c_Vn6gyWBVnNuNdai3EMZCx8
          source_id: s_85MjhOqh_lKUTHTq7tYe1W
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用予 与 王用楨 为同胞（CBDB 记「兄」），王用楨 之父／母即 王用予 之父／母。
          source:
            id: s_85MjhOqh_lKUTHTq7tYe1W
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 324576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324576&o=json
            external_identifier: CBDB:324576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xu98awyac4YYMCq5HUoMnW
        status: active
        display_name: 王用予
        merged_into_person_id: null
    - claim:
        id: c_lClS1SC21U7fEqEy8iOzo2
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9VGzJxeEjCUMANz6T7gPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK0QPk4LOoaPvOxQvk0mTi
          claim_id: c_lClS1SC21U7fEqEy8iOzo2
          source_id: s_N7UidzKA1FuuGTNrtZ8xWu
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王茂孚 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王茂孚 之父／母。
          source:
            id: s_N7UidzKA1FuuGTNrtZ8xWu
            source_type: api_record
            title: 中国历代人物传记资料库：王茂孚（CBDB 324569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324569&o=json
            external_identifier: CBDB:324569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9VGzJxeEjCUMANz6T7gPv
        status: active
        display_name: 王茂孚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纘宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纘宗，明人物。嘉靖三十八年進士，籍贯南充，曾任知縣。（中国历代人物传记资料库 CBDB 324561） | accepted |
| name.primary | 王纘宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |
| children | p_6GFNJN3RybBE7dopVUBEes | 王嘉 | accepted |
| children | p_CtzM6SrBC88nz162s91Kx6 | 王用官 | accepted |
| children | p_HaAN2bLNRjLhZBVymSE7kz | 王用行 | accepted |
| children | p_KQnaoBrw8SsaLnnF4L3Po3 | 王疇 | accepted |
| children | p_M6LEcXJ4fAxH6NMLaBJTYV | 王達孚 | accepted |
| children | p_U7t29AJET8TEYjEiPgwzy7 | 王用康 | accepted |
| children | p_VNNbh8NWTBE9vDh7X2rEN1 | 王美銳 | accepted |
| children | p_VnMF4vYCZBF1or3PKc5Tz3 | 王用賓 | accepted |
| children | p_WZhbbHJkMSdRjeeuQou9DY | 王用章 | accepted |
| children | p_Xu98awyac4YYMCq5HUoMnW | 王用予 | accepted |
| children | p_g9VGzJxeEjCUMANz6T7gPv | 王茂孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王疇（CBDB 324568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324568&o=json)
- [中国历代人物传记资料库：王達孚（CBDB 324570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324570&o=json)
- [中国历代人物传记资料库：王嘉（CBDB 324571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324571&o=json)
- [中国历代人物传记资料库：王茂孚（CBDB 324569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324569&o=json)
- [中国历代人物传记资料库：王美銳（CBDB 324567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324567&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 324565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json)
- [中国历代人物传记资料库：王用官（CBDB 324566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324566&o=json)
- [中国历代人物传记资料库：王用康（CBDB 324575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324575&o=json)
- [中国历代人物传记资料库：王用行（CBDB 324573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324573&o=json)
- [中国历代人物传记资料库：王用予（CBDB 324576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324576&o=json)
- [中国历代人物传记资料库：王用章（CBDB 324572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json)
- [中国历代人物传记资料库：王纘宗（CBDB 324561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324561&o=json)
