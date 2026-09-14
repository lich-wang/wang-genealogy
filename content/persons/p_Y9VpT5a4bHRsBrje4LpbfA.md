---
schema: wang-person/v1
id: p_Y9VpT5a4bHRsBrje4LpbfA
status: active
merged_into: null
display_name: 王豫
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7JtBDHw4X89UMpDe8SnEGj
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nYfhXFMrUyADDG1BCr7sJG
          claim_id: c_7JtBDHw4X89UMpDe8SnEGj
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: CBDB:260235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260235）
          source: &a1
            id: s_supKiBCeqfoZKnhWAj2v7T
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 260235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json
            external_identifier: CBDB:260235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tjHBbQDKs8MX4MFEAt9CL
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0ZgrN7IsIM8U0hfDaNCcUh
          claim_id: c_2tjHBbQDKs8MX4MFEAt9CL
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: CBDB:260235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yVomOuItwIcCWSy6fXrzfi
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6il5sz4nf8NWu1AsCR9Vzu
          claim_id: c_yVomOuItwIcCWSy6fXrzfi
          source_id: s_supKiBCeqfoZKnhWAj2v7T
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
    - claim:
        id: c_9KCsjlgcr0hLOeW4J66epc
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_354XDNnF2jP5CLDqCQoBca
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BPda3DPV2GODRrBh8btGJ
          claim_id: c_9KCsjlgcr0hLOeW4J66epc
          source_id: s_x0HeFMJBxQ15xYGrey2oSw
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑀 之父／母。
          source:
            id: s_x0HeFMJBxQ15xYGrey2oSw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 260247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json
            external_identifier: CBDB:260247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_354XDNnF2jP5CLDqCQoBca
        status: active
        display_name: 王瑀
        merged_into_person_id: null
    - claim:
        id: c_uvkpGsaD2_DH96HpakzILq
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Uxjrthw52hnqawrYtUy6r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwt4ZeSCXpBwkjhFmeyGKh
          claim_id: c_uvkpGsaD2_DH96HpakzILq
          source_id: s_9M-AUN2uqtVohOcPSkJkth
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王卿 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王卿 之父／母。
          source:
            id: s_9M-AUN2uqtVohOcPSkJkth
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 260243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json
            external_identifier: CBDB:260243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Uxjrthw52hnqawrYtUy6r
        status: active
        display_name: 王卿
        merged_into_person_id: null
    - claim:
        id: c_CJowmVyKpMlMZ5YP-VuEmB
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3uHGxBBKZGMcqnc8KrjRV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVyfc0_IgPl48Wwxk-ywGl
          claim_id: c_CJowmVyKpMlMZ5YP-VuEmB
          source_id: s_MIXZ2DoFPSdHuQTasDnV10
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王珙 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王珙 之父／母。
          source:
            id: s_MIXZ2DoFPSdHuQTasDnV10
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 260251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260251&o=json
            external_identifier: CBDB:260251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C3uHGxBBKZGMcqnc8KrjRV
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_JmTx8qTgutenS8JzwobqwV
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GqDKg1DUJK4ZTvwyBiZ9EU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ych5ZWLqIWfXTbHbq92aJ9
          claim_id: c_JmTx8qTgutenS8JzwobqwV
          source_id: s_qVrbBjoQADLhUE0UVfMXmt
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王玠 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王玠 之父／母。
          source:
            id: s_qVrbBjoQADLhUE0UVfMXmt
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 260249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260249&o=json
            external_identifier: CBDB:260249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GqDKg1DUJK4ZTvwyBiZ9EU
        status: active
        display_name: 王玠
        merged_into_person_id: null
    - claim:
        id: c_CON6Mg-KFpSZKkKeNXURNw
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GrqDC35rqQLHh6KATgrzMj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHlSXuWqg__hjTyUCA2Pz5
          claim_id: c_CON6Mg-KFpSZKkKeNXURNw
          source_id: s_LFA7lPrEaNid_NntZBMq1m
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑜 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑜 之父／母。
          source:
            id: s_LFA7lPrEaNid_NntZBMq1m
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 260238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260238&o=json
            external_identifier: CBDB:260238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GrqDC35rqQLHh6KATgrzMj
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_NoIFljOeAnCHIma-McG38q
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MG9BJcTnRYy7oqKWnx7Hyg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TYlSKKad9PEkRgWNFeKAH4
          claim_id: c_NoIFljOeAnCHIma-McG38q
          source_id: s_EZknlB-qLJH-5_OEGTIiql
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王彥 之父／母。
          source:
            id: s_EZknlB-qLJH-5_OEGTIiql
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 260242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260242&o=json
            external_identifier: CBDB:260242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MG9BJcTnRYy7oqKWnx7Hyg
        status: active
        display_name: 王彥
        merged_into_person_id: null
    - claim:
        id: c_ThMmd3irp86aoBo56QvsTI
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aBHAdFbb1fkaQCkqWLPDJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IDYXKoPQ1NNPofW20gnaI1
          claim_id: c_ThMmd3irp86aoBo56QvsTI
          source_id: s_VfJkX19ft1fDXnrZeUdUOi
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王璽 之父／母。
          source:
            id: s_VfJkX19ft1fDXnrZeUdUOi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 260240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260240&o=json
            external_identifier: CBDB:260240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aBHAdFbb1fkaQCkqWLPDJg
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_iu31DmWHG_b6VhOUmPIqeZ
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cFedZB76AQZpjakNEZjEkd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GURzWa6MF1v-WOpWAo3eEn
          claim_id: c_iu31DmWHG_b6VhOUmPIqeZ
          source_id: s_C8uSFaJ9pOHlXj9WXmA7iQ
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王琇 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王琇 之父／母。
          source:
            id: s_C8uSFaJ9pOHlXj9WXmA7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 260250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json
            external_identifier: CBDB:260250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cFedZB76AQZpjakNEZjEkd
        status: active
        display_name: 王琇
        merged_into_person_id: null
    - claim:
        id: c_7GGH5DegYR_q7Oo5kJgzQl
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gmqrGvGzDPv1ATq8M2VNE6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mJK76qG4h9SptwQT6NNxH5
          claim_id: c_7GGH5DegYR_q7Oo5kJgzQl
          source_id: s_N1y1CYa0F29PyTW6VTlv_0
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王現 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王現 之父／母。
          source:
            id: s_N1y1CYa0F29PyTW6VTlv_0
            source_type: api_record
            title: 中国历代人物传记资料库：王現（CBDB 260244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json
            external_identifier: CBDB:260244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gmqrGvGzDPv1ATq8M2VNE6
        status: active
        display_name: 王現
        merged_into_person_id: null
    - claim:
        id: c_jBf7BSl4cvw05CUssMyuou
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iHoD5FZnf6MNjQYPVRJjoR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uwGcS7HzYlMjGxfRtc3pmR
          claim_id: c_jBf7BSl4cvw05CUssMyuou
          source_id: s_uWnPAY59i-tce0RyTcGff0
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑞 之父／母。
          source:
            id: s_uWnPAY59i-tce0RyTcGff0
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 260246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260246&o=json
            external_identifier: CBDB:260246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iHoD5FZnf6MNjQYPVRJjoR
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_1dvnYcBNdscZGtw59mwaiK
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rhxJkneEWB8jm8b59umBtT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O16iALp8yi0pQfrJfb1O_0
          claim_id: c_1dvnYcBNdscZGtw59mwaiK
          source_id: s_F2WzEIBIJXU4fp_-t4n0TU
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王珦 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王珦 之父／母。
          source:
            id: s_F2WzEIBIJXU4fp_-t4n0TU
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 260248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json
            external_identifier: CBDB:260248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rhxJkneEWB8jm8b59umBtT
        status: active
        display_name: 王珦
        merged_into_person_id: null
    - claim:
        id: c_5j3zKSWQBas3cc5eugRo3e
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0jsxw30X9YGhAh3BDrdfP5
          claim_id: c_5j3zKSWQBas3cc5eugRo3e
          source_id: s_dOzCW3QtVYDb_II1SCcTAX
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑄 之父／母。
          source:
            id: s_dOzCW3QtVYDb_II1SCcTAX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tmF5xrpBms9iT9QL5bH6SF
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_UjOonhjOG7djr3BB0mCWVl
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xCUH2Emd6jxqrPz2wMXJZx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZUcDfzzFsS3c7aXyHTqTO
          claim_id: c_UjOonhjOG7djr3BB0mCWVl
          source_id: s_5_meAe31Ll_kS54GBi50JS
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑁 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑁 之父／母。
          source:
            id: s_5_meAe31Ll_kS54GBi50JS
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 260241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260241&o=json
            external_identifier: CBDB:260241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xCUH2Emd6jxqrPz2wMXJZx
        status: active
        display_name: 王瑁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | 王豫，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |
| children | p_354XDNnF2jP5CLDqCQoBca | 王瑀 | accepted |
| children | p_4Uxjrthw52hnqawrYtUy6r | 王卿 | accepted |
| children | p_C3uHGxBBKZGMcqnc8KrjRV | 王珙 | accepted |
| children | p_GqDKg1DUJK4ZTvwyBiZ9EU | 王玠 | accepted |
| children | p_GrqDC35rqQLHh6KATgrzMj | 王瑜 | accepted |
| children | p_MG9BJcTnRYy7oqKWnx7Hyg | 王彥 | accepted |
| children | p_aBHAdFbb1fkaQCkqWLPDJg | 王璽 | accepted |
| children | p_cFedZB76AQZpjakNEZjEkd | 王琇 | accepted |
| children | p_gmqrGvGzDPv1ATq8M2VNE6 | 王現 | accepted |
| children | p_iHoD5FZnf6MNjQYPVRJjoR | 王瑞 | accepted |
| children | p_rhxJkneEWB8jm8b59umBtT | 王珦 | accepted |
| children | p_tmF5xrpBms9iT9QL5bH6SF | 王瑄 | accepted |
| children | p_xCUH2Emd6jxqrPz2wMXJZx | 王瑁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 260251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260251&o=json)
- [中国历代人物传记资料库：王玠（CBDB 260249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260249&o=json)
- [中国历代人物传记资料库：王瑁（CBDB 260241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260241&o=json)
- [中国历代人物传记资料库：王卿（CBDB 260243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260243&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 260246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260246&o=json)
- [中国历代人物传记资料库：王璽（CBDB 260240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260240&o=json)
- [中国历代人物传记资料库：王現（CBDB 260244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260244&o=json)
- [中国历代人物传记资料库：王珦（CBDB 260248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260248&o=json)
- [中国历代人物传记资料库：王琇（CBDB 260250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 260239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json)
- [中国历代人物传记资料库：王彥（CBDB 260242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260242&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 260238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260238&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 260247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260247&o=json)
- [中国历代人物传记资料库：王豫（CBDB 260235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260235&o=json)
