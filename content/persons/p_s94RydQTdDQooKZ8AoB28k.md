---
schema: wang-person/v1
id: p_s94RydQTdDQooKZ8AoB28k
status: active
merged_into: null
display_name: 王儀
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8zyWkyadNU9DsCSRAtjTP
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TWjmmMqU6ASEnEQ4bNQkAL
          claim_id: c_S8zyWkyadNU9DsCSRAtjTP
          source_id: s_LhLdZ1qqvScxSavV2YX4Dm
          stance: supports
          locator: CBDB:209198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209198）
          source: &a1
            id: s_LhLdZ1qqvScxSavV2YX4Dm
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 209198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json
            external_identifier: CBDB:209198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQLMPsz52u6q27cXvx7WgW
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀，明人物。隆慶五年進士，籍贯文安，曾任都察院右副都御史。（中国历代人物传记资料库 CBDB 209198）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ll9QGOdoWl-0QLtr-8esjZ
          claim_id: c_QQLMPsz52u6q27cXvx7WgW
          source_id: s_LhLdZ1qqvScxSavV2YX4Dm
          stance: supports
          locator: CBDB:209198
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Z_NwSl8NVkwuuYC0DKH-mS
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IJfNIjvMLWVvsb5FHkfQ8j
          claim_id: c_Z_NwSl8NVkwuuYC0DKH-mS
          source_id: s_LhLdZ1qqvScxSavV2YX4Dm
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ux2gsGHcSC8JtKGeSs9ttp
        status: active
        display_name: 王緘
        merged_into_person_id: null
    - claim:
        id: c_CEPZBiqljFA6t5OYs-gaFE
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2mYyLk6eJWT5V7f1kLYXR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdEUX9pFD96LmCSYdMx8Ub
          claim_id: c_CEPZBiqljFA6t5OYs-gaFE
          source_id: s_CqYDF1c9w7CABskz46lcrQ
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王緒 之父／母。
          source:
            id: s_CqYDF1c9w7CABskz46lcrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 209204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209204&o=json
            external_identifier: CBDB:209204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2mYyLk6eJWT5V7f1kLYXR5
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_i8MQHyZuyORHbSdmRFAHXX
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VqtFvnh6S-ta4ZpRdN5sNm
          claim_id: c_i8MQHyZuyORHbSdmRFAHXX
          source_id: s_CJMg7ZYvRmPJWFbzXkzkQL
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王紳 之父／母。
          source:
            id: s_CJMg7ZYvRmPJWFbzXkzkQL
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 209207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json
            external_identifier: CBDB:209207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3qcuzBqbTi9SfdBKxLmiQX
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_AZh2xt65BAu7uSaPyS8COZ
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8XtTa11MPaSMjuGbv1Ed9Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q0uALnwTMXatpKPaPzF9EA
          claim_id: c_AZh2xt65BAu7uSaPyS8COZ
          source_id: s_OkMhoEbFapkBBdWYWSgcF9
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王守訓 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王守訓 之父／母。
          source:
            id: s_OkMhoEbFapkBBdWYWSgcF9
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 209208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json
            external_identifier: CBDB:209208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8XtTa11MPaSMjuGbv1Ed9Y
        status: active
        display_name: 王守訓
        merged_into_person_id: null
    - claim:
        id: c_ihdGxVo9APBQUnSwtw_HxV
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AA29b6icXJkkAJBgWC2YHi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAskYmwX7jfuRW5j2fR1kt
          claim_id: c_ihdGxVo9APBQUnSwtw_HxV
          source_id: s_pakgWt811YOD38uqMA6Gmf
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王練 与 王緘 为同胞（CBDB 记「兄」），王緘 之父／母即 王練 之父／母。
          source:
            id: s_pakgWt811YOD38uqMA6Gmf
            source_type: api_record
            title: 中国历代人物传记资料库：王練（CBDB 209217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209217&o=json
            external_identifier: CBDB:209217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AA29b6icXJkkAJBgWC2YHi
        status: active
        display_name: 王練
        merged_into_person_id: null
    - claim:
        id: c_olVjF9bFXWAd48MeW9fIqb
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BL6tHZSsBBfrc6uMtndoAU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n-hcipjWIrtvVHzskGW327
          claim_id: c_olVjF9bFXWAd48MeW9fIqb
          source_id: s_pkzNq8tdOswg2Ne89PKF_I
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王綵 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王綵 之父／母。
          source:
            id: s_pkzNq8tdOswg2Ne89PKF_I
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 209209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209209&o=json
            external_identifier: CBDB:209209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BL6tHZSsBBfrc6uMtndoAU
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_KDVbU3ky0P6VcjZFhG3RBh
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78JqWXG78hGTYd8F6PN4Tg
          claim_id: c_KDVbU3ky0P6VcjZFhG3RBh
          source_id: s_cUmEu0kwrFVPqPo4r-pfeT
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王絡 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王絡 之父／母。
          source:
            id: s_cUmEu0kwrFVPqPo4r-pfeT
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 209211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json
            external_identifier: CBDB:209211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EPa4mGvnNFxVG6U2bdfUUq
        status: active
        display_name: 王絡
        merged_into_person_id: null
    - claim:
        id: c_kbpItbCO5qVIiV7ar64K9a
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X7nMZFJXx496NeuQJ5nEM8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7MY7nAh2yr-oe69_Uonos
          claim_id: c_kbpItbCO5qVIiV7ar64K9a
          source_id: s_uN4u1dUSMXfO6Fue3kiwbC
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王織 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王織 之父／母。
          source:
            id: s_uN4u1dUSMXfO6Fue3kiwbC
            source_type: api_record
            title: 中国历代人物传记资料库：王織（CBDB 209210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209210&o=json
            external_identifier: CBDB:209210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7nMZFJXx496NeuQJ5nEM8
        status: active
        display_name: 王織
        merged_into_person_id: null
    - claim:
        id: c_NB0C2Zg6UuejC-ixmuVNon
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YywxbhMRNj52NqwuHGEz7G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_llfPdaXuUpxgUT310bNqVU
          claim_id: c_NB0C2Zg6UuejC-ixmuVNon
          source_id: s_MAOemK-aQII4PnFxzrNWzz
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王絲 与 王緘 为同胞（CBDB 记「兄」），王緘 之父／母即 王絲 之父／母。
          source:
            id: s_MAOemK-aQII4PnFxzrNWzz
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 209218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209218&o=json
            external_identifier: CBDB:209218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YywxbhMRNj52NqwuHGEz7G
        status: active
        display_name: 王絲
        merged_into_person_id: null
    - claim:
        id: c_FQIqOjNFErU-LDZdzFJ2EP
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZKxy5hUbt7MJA1exnNYFRa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ix9NVzWRul5jUeKFB9Qsnn
          claim_id: c_FQIqOjNFErU-LDZdzFJ2EP
          source_id: s_S2OJ0_lkF8Q1KO9ME4HI2S
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王緄 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王緄 之父／母。
          source:
            id: s_S2OJ0_lkF8Q1KO9ME4HI2S
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 209206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json
            external_identifier: CBDB:209206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZKxy5hUbt7MJA1exnNYFRa
        status: active
        display_name: 王緄
        merged_into_person_id: null
    - claim:
        id: c_A4PjfUgim7GtQKMg2xmYTV
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aWJRAJc9BxLAgY324fhqxj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3C6Bh7RYRB3XoIxtj5Ztn1
          claim_id: c_A4PjfUgim7GtQKMg2xmYTV
          source_id: s_R6k2B16ighwwkTvtR9SMk_
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王統 之父／母。
          source:
            id: s_R6k2B16ighwwkTvtR9SMk_
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 209213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209213&o=json
            external_identifier: CBDB:209213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aWJRAJc9BxLAgY324fhqxj
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_K--dp-v8zTltEoUqk7rkD9
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghgeffSPW5Q9YaaN4u6XSy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v_MMX9BO-g5CL4mTC-qxuC
          claim_id: c_K--dp-v8zTltEoUqk7rkD9
          source_id: s_80qFQRPY2UR5jUM7i8CM46
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王緼 与 王緘 为同胞（CBDB 记「兄」），王緘 之父／母即 王緼 之父／母。
          source:
            id: s_80qFQRPY2UR5jUM7i8CM46
            source_type: api_record
            title: 中国历代人物传记资料库：王緼（CBDB 209219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209219&o=json
            external_identifier: CBDB:209219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ghgeffSPW5Q9YaaN4u6XSy
        status: active
        display_name: 王緼
        merged_into_person_id: null
    - claim:
        id: c_NU1OvspdFCB83gCXwu5-zV
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n3DaYoCYSw9QjJd9M6MZBM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pW6JnpOD_4c0MYUFY6_h0f
          claim_id: c_NU1OvspdFCB83gCXwu5-zV
          source_id: s_eJPZGVJwkN-bSHREGj4RAo
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王綰 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王綰 之父／母。
          source:
            id: s_eJPZGVJwkN-bSHREGj4RAo
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 209205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209205&o=json
            external_identifier: CBDB:209205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n3DaYoCYSw9QjJd9M6MZBM
        status: active
        display_name: 王綰
        merged_into_person_id: null
    - claim:
        id: c_CsmYI5qk6My1VutLpt9C_9
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQ4anmrjBHEgUtNREqoJvW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zv9CEU-2nLC0y0cNkCUfrl
          claim_id: c_CsmYI5qk6My1VutLpt9C_9
          source_id: s_mjm7SsYVDR-19wo73KHLzb
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王繕 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王繕 之父／母。
          source:
            id: s_mjm7SsYVDR-19wo73KHLzb
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 209212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209212&o=json
            external_identifier: CBDB:209212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQ4anmrjBHEgUtNREqoJvW
        status: active
        display_name: 王繕
        merged_into_person_id: null
    - claim:
        id: c_03kN3RU-lIKK92PJV0csza
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_teNpXqzuh4Zr2K6MBacVUe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0CemzqusXoUhbq00w0sfTc
          claim_id: c_03kN3RU-lIKK92PJV0csza
          source_id: s_QKN92z2Nj2fUIvT9jFeh8u
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王以纁 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王以纁 之父／母。
          source:
            id: s_QKN92z2Nj2fUIvT9jFeh8u
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 209216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json
            external_identifier: CBDB:209216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_teNpXqzuh4Zr2K6MBacVUe
        status: active
        display_name: 王以纁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| bio.summary | 王儀，明人物。隆慶五年進士，籍贯文安，曾任都察院右副都御史。（中国历代人物传记资料库 CBDB 209198） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ux2gsGHcSC8JtKGeSs9ttp | 王緘 | accepted |
| children | p_2mYyLk6eJWT5V7f1kLYXR5 | 王緒 | accepted |
| children | p_3qcuzBqbTi9SfdBKxLmiQX | 王紳 | accepted |
| children | p_8XtTa11MPaSMjuGbv1Ed9Y | 王守訓 | accepted |
| children | p_AA29b6icXJkkAJBgWC2YHi | 王練 | accepted |
| children | p_BL6tHZSsBBfrc6uMtndoAU | 王綵 | accepted |
| children | p_EPa4mGvnNFxVG6U2bdfUUq | 王絡 | accepted |
| children | p_X7nMZFJXx496NeuQJ5nEM8 | 王織 | accepted |
| children | p_YywxbhMRNj52NqwuHGEz7G | 王絲 | accepted |
| children | p_ZKxy5hUbt7MJA1exnNYFRa | 王緄 | accepted |
| children | p_aWJRAJc9BxLAgY324fhqxj | 王統 | accepted |
| children | p_ghgeffSPW5Q9YaaN4u6XSy | 王緼 | accepted |
| children | p_n3DaYoCYSw9QjJd9M6MZBM | 王綰 | accepted |
| children | p_nQ4anmrjBHEgUtNREqoJvW | 王繕 | accepted |
| children | p_teNpXqzuh4Zr2K6MBacVUe | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 209209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209209&o=json)
- [中国历代人物传记资料库：王緄（CBDB 209206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209206&o=json)
- [中国历代人物传记资料库：王練（CBDB 209217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209217&o=json)
- [中国历代人物传记资料库：王絡（CBDB 209211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json)
- [中国历代人物传记资料库：王繕（CBDB 209212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209212&o=json)
- [中国历代人物传记资料库：王紳（CBDB 209207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json)
- [中国历代人物传记资料库：王守訓（CBDB 209208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209208&o=json)
- [中国历代人物传记资料库：王絲（CBDB 209218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209218&o=json)
- [中国历代人物传记资料库：王統（CBDB 209213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209213&o=json)
- [中国历代人物传记资料库：王綰（CBDB 209205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209205&o=json)
- [中国历代人物传记资料库：王緒（CBDB 209204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209204&o=json)
- [中国历代人物传记资料库：王儀（CBDB 209198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209198&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 209216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209216&o=json)
- [中国历代人物传记资料库：王緼（CBDB 209219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209219&o=json)
- [中国历代人物传记资料库：王織（CBDB 209210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209210&o=json)
