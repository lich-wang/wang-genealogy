---
schema: wang-person/v1
id: p_ahJ97i6Ls8wgTe2hMc2p2s
status: active
merged_into: null
display_name: 王荁
cbdb_id: 206722
revision: 15
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WggMwUR6WfBC6o33sQ44Tk
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荁（生于1558年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 206722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__iOUn7L2yQatIiJTVEXN8M
          claim_id: c_WggMwUR6WfBC6o33sQ44Tk
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EuaLxK7Nr6Pv8DH4PRqcB8
            source_type: api_record
            title: 中国历代人物传记资料库：王荁（CBDB 206722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json
            external_identifier: CBDB:206722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mwFegfQntbiJBHsf8hUaMR
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1558-01-01
            latest: 1558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nK8NstFqg9zKibTdT4PATG
          claim_id: c_mwFegfQntbiJBHsf8hUaMR
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_EuaLxK7Nr6Pv8DH4PRqcB8
            source_type: api_record
            title: 中国历代人物传记资料库：王荁（CBDB 206722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json
            external_identifier: CBDB:206722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Z1J4AqX9fP1Wy41WTGaWC
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bRPA67ofnpRPBRpF5PDCDP
          claim_id: c_4Z1J4AqX9fP1Wy41WTGaWC
          source_id: s_EuaLxK7Nr6Pv8DH4PRqcB8
          stance: supports
          locator: CBDB:206722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z8ukmA_UqTxSiZBttC4LwD
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-FZuxMsMgTJIjvs2jDdoS
          claim_id: c_z8ukmA_UqTxSiZBttC4LwD
          source_id: s_WbFGM8GMG3mSMAr4ffnbF5
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WbFGM8GMG3mSMAr4ffnbF5
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 222166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json
            external_identifier: CBDB:222166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Fg3GMGms49SjIz3syhG2Ku
        subject_person_id: p_UzHJwFpgcSDAtyRk76Dz9N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnH-xR4ckifr9yHjApky_z
          claim_id: c_Fg3GMGms49SjIz3syhG2Ku
          source_id: s_9cWGTwNo769p91oaxtngrJ
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9cWGTwNo769p91oaxtngrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 222164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222164&o=json
            external_identifier: CBDB:222164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UzHJwFpgcSDAtyRk76Dz9N
        status: active
        display_name: 王珫
        merged_into_person_id: null
    - claim:
        id: c_QBCNdHBJpMmi0tdxkQbW5O
        subject_person_id: p_Z4yxgGeYixBWLtpQKEsxKY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-Z3tF2risAy3jp-QcIZIR
          claim_id: c_QBCNdHBJpMmi0tdxkQbW5O
          source_id: s_1YsCT82H4oN38pvYT4JGtQ
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1YsCT82H4oN38pvYT4JGtQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嵱（CBDB 222165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222165&o=json
            external_identifier: CBDB:222165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z4yxgGeYixBWLtpQKEsxKY
        status: active
        display_name: 王嵱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BtksgO3W9QaCIzeOhJJdEz
        subject_person_id: p_2hWuUAqDqwKKsMHvDHdqv9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fiyICoU6o0TpOFAYLgwKwh
          claim_id: c_BtksgO3W9QaCIzeOhJJdEz
          source_id: s_S01CbbFNGzbFqoYJota7_1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S01CbbFNGzbFqoYJota7_1
            source_type: api_record
            title: 中国历代人物传记资料库：王蓳（CBDB 222179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222179&o=json
            external_identifier: CBDB:222179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hWuUAqDqwKKsMHvDHdqv9
        status: active
        display_name: 王蓳
        merged_into_person_id: null
    - claim:
        id: c_UaGZcr1-Bplk_w-xWnC0Af
        subject_person_id: p_8hjEV1vNP9UBEPtxdtug6c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2iGWmj4v9Tg48fJ4ED7SWp
          claim_id: c_UaGZcr1-Bplk_w-xWnC0Af
          source_id: s_eOgczC7R3Hu-Eq7iVTbORX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eOgczC7R3Hu-Eq7iVTbORX
            source_type: api_record
            title: 中国历代人物传记资料库：王苕（CBDB 222176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json
            external_identifier: CBDB:222176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8hjEV1vNP9UBEPtxdtug6c
        status: active
        display_name: 王苕
        merged_into_person_id: null
    - claim:
        id: c_aYenEWuPzj6haYq5CQwVmT
        subject_person_id: p_CcnEQDngdGPkspJW1sQpqM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5XN_Ke2_MT8wSTnL9JJP6
          claim_id: c_aYenEWuPzj6haYq5CQwVmT
          source_id: s_FazGfYdoaDaCE_jZZn3_St
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FazGfYdoaDaCE_jZZn3_St
            source_type: api_record
            title: 中国历代人物传记资料库：王芃（CBDB 222178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222178&o=json
            external_identifier: CBDB:222178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CcnEQDngdGPkspJW1sQpqM
        status: active
        display_name: 王芃
        merged_into_person_id: null
    - claim:
        id: c_7385m3lQgRK7N240y3Y0Y3
        subject_person_id: p_CmgfAJvHFAwZUMgb3EXgfM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k-IvYkM_hf5iKmlYCiqJnc
          claim_id: c_7385m3lQgRK7N240y3Y0Y3
          source_id: s_mi9mW5essqTO1UjE_RCTay
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mi9mW5essqTO1UjE_RCTay
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 222175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json
            external_identifier: CBDB:222175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CmgfAJvHFAwZUMgb3EXgfM
        status: active
        display_name: 王荃
        merged_into_person_id: null
    - claim:
        id: c_ZhPhg7oi3KFPlydWrkMPay
        subject_person_id: p_DN4SP5nU87Eqbii4fRgQR8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hLJ5YmqLJ4-kQ9Pi7kO91q
          claim_id: c_ZhPhg7oi3KFPlydWrkMPay
          source_id: s_AdflYNQVGS0t9gFuZ5T3VX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AdflYNQVGS0t9gFuZ5T3VX
            source_type: api_record
            title: 中国历代人物传记资料库：王若（CBDB 222174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222174&o=json
            external_identifier: CBDB:222174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DN4SP5nU87Eqbii4fRgQR8
        status: active
        display_name: 王若
        merged_into_person_id: null
    - claim:
        id: c_JK2p2ezTn6SqYbbFlKzVNf
        subject_person_id: p_PH8dsFBVSTEs7C2PEXie8K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kkemvJNogydPNbCIKBG7vR
          claim_id: c_JK2p2ezTn6SqYbbFlKzVNf
          source_id: s_sv-sPklfppPR_ecoHQoXuF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sv-sPklfppPR_ecoHQoXuF
            source_type: api_record
            title: 中国历代人物传记资料库：王芮（CBDB 222177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json
            external_identifier: CBDB:222177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PH8dsFBVSTEs7C2PEXie8K
        status: active
        display_name: 王芮
        merged_into_person_id: null
    - claim:
        id: c_vE-DDopEuO1bSlR6qYwcfX
        subject_person_id: p_RQD8Ld16cfj6m2FXsNqQ93
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSfGKwtllNO-jI2-3YKUI2
          claim_id: c_vE-DDopEuO1bSlR6qYwcfX
          source_id: s_tvSkseHmDQHKJPbMcmPbPw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tvSkseHmDQHKJPbMcmPbPw
            source_type: api_record
            title: 中国历代人物传记资料库：王芑（CBDB 222173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json
            external_identifier: CBDB:222173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQD8Ld16cfj6m2FXsNqQ93
        status: active
        display_name: 王芑
        merged_into_person_id: null
    - claim:
        id: c_y6uO7OkhnJ4W0hmD5PeeVg
        subject_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBHZRMGFfRNHzF-7GpbYRe
          claim_id: c_y6uO7OkhnJ4W0hmD5PeeVg
          source_id: s_e6ScjfNev0huNZN8Skl5NK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e6ScjfNev0huNZN8Skl5NK
            source_type: api_record
            title: 中国历代人物传记资料库：王苘（CBDB 222180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json
            external_identifier: CBDB:222180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3M3sq2MZq8jQQSuDjj1H9
        status: active
        display_name: 王苘
        merged_into_person_id: null
    - claim:
        id: c_nMcoSRwyJq55dfKGtRJfMa
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IFpIhZ6XJRoMVP2N8vVZz
          claim_id: c_nMcoSRwyJq55dfKGtRJfMa
          source_id: s_JwM2dRFji4RVaqNXCEx6U8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JwM2dRFji4RVaqNXCEx6U8
            source_type: api_record
            title: 中国历代人物传记资料库：王荷（CBDB 222183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json
            external_identifier: CBDB:222183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ie4ty6AGh2xzEj7TbWPL2T
        status: active
        display_name: 王荷
        merged_into_person_id: null
    - claim:
        id: c__FT28h3q9CJ9iZ3GiSob_c
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jUFi92KMxHRSexVAgYw8ot
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGdVAMVSzKa1bJ8cTnjAir
          claim_id: c__FT28h3q9CJ9iZ3GiSob_c
          source_id: s_6WoqsbV-S1nsLgWlzoDWdg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6WoqsbV-S1nsLgWlzoDWdg
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jUFi92KMxHRSexVAgYw8ot
        status: active
        display_name: 王益
        merged_into_person_id: null
    - claim:
        id: c_YtvwRVrsfzcrVkEx0PbWDi
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wdSw4BbibnXyZCRXBicDsZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GP9TsEuC4uqEUDtq0pBcCR
          claim_id: c_YtvwRVrsfzcrVkEx0PbWDi
          source_id: s_eu4t_55vTUWRnMfegZuk5t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eu4t_55vTUWRnMfegZuk5t
            source_type: api_record
            title: 中国历代人物传记资料库：王茹（CBDB 222181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json
            external_identifier: CBDB:222181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wdSw4BbibnXyZCRXBicDsZ
        status: active
        display_name: 王茹
        merged_into_person_id: null
---

# 王荁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荁（生于1558年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 206722） | accepted |
| birth.date | 1558年 | accepted |
| name.primary | 王荁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| ancestors | p_UzHJwFpgcSDAtyRk76Dz9N | 王珫 | accepted |
| ancestors | p_Z4yxgGeYixBWLtpQKEsxKY | 王嵱 | accepted |
| other | p_2hWuUAqDqwKKsMHvDHdqv9 | 王蓳 | accepted |
| other | p_8hjEV1vNP9UBEPtxdtug6c | 王苕 | accepted |
| other | p_CcnEQDngdGPkspJW1sQpqM | 王芃 | accepted |
| other | p_CmgfAJvHFAwZUMgb3EXgfM | 王荃 | accepted |
| other | p_DN4SP5nU87Eqbii4fRgQR8 | 王若 | accepted |
| other | p_PH8dsFBVSTEs7C2PEXie8K | 王芮 | accepted |
| other | p_RQD8Ld16cfj6m2FXsNqQ93 | 王芑 | accepted |
| other | p_T3M3sq2MZq8jQQSuDjj1H9 | 王苘 | accepted |
| other | p_ie4ty6AGh2xzEj7TbWPL2T | 王荷 | accepted |
| other | p_jUFi92KMxHRSexVAgYw8ot | 王益 | accepted |
| other | p_wdSw4BbibnXyZCRXBicDsZ | 王茹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珫（CBDB 222164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222164&o=json)
- [中国历代人物传记资料库：王荷（CBDB 222183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json)
- [中国历代人物传记资料库：王荁（CBDB 206722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206722&o=json)
- [中国历代人物传记资料库：王交（CBDB 222166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222166&o=json)
- [中国历代人物传记资料库：王蓳（CBDB 222179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222179&o=json)
- [中国历代人物传记资料库：王芃（CBDB 222178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222178&o=json)
- [中国历代人物传记资料库：王芑（CBDB 222173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222173&o=json)
- [中国历代人物传记资料库：王苘（CBDB 222180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json)
- [中国历代人物传记资料库：王荃（CBDB 222175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json)
- [中国历代人物传记资料库：王茹（CBDB 222181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222181&o=json)
- [中国历代人物传记资料库：王芮（CBDB 222177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222177&o=json)
- [中国历代人物传记资料库：王若（CBDB 222174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222174&o=json)
- [中国历代人物传记资料库：王苕（CBDB 222176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222176&o=json)
- [中国历代人物传记资料库：王益（CBDB 222172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json)
- [中国历代人物传记资料库：王嵱（CBDB 222165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222165&o=json)
