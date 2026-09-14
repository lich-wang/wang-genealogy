---
schema: wang-person/v1
id: p_zYsGWZ26RZr9NP9BPEi82D
status: active
merged_into: null
display_name: 王永潮
cbdb_id: 260630
revision: 16
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ExCafqPtdypRCkX2tcN4FN
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永潮，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260630）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zGQZiQA7EZUEhBNDUJjKoT
          claim_id: c_ExCafqPtdypRCkX2tcN4FN
          source_id: s_uoJi7xEyKf6DNa9MsXc2ow
          stance: supports
          locator: CBDB:260630
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uoJi7xEyKf6DNa9MsXc2ow
            source_type: api_record
            title: 中国历代人物传记资料库：王永潮（CBDB 260630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260630&o=json
            external_identifier: CBDB:260630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hY8ACWpP9bAw47JCYqo9yt
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永潮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fqj47pkCF5XxfEmm1AfWQ8
          claim_id: c_hY8ACWpP9bAw47JCYqo9yt
          source_id: s_uoJi7xEyKf6DNa9MsXc2ow
          stance: supports
          locator: CBDB:260630
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__7lMBo_BnxGERXo70itUJW
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_14qfRBstEnN8GR2dnBlTTm
          claim_id: c__7lMBo_BnxGERXo70itUJW
          source_id: s_uoJi7xEyKf6DNa9MsXc2ow
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uoJi7xEyKf6DNa9MsXc2ow
            source_type: api_record
            title: 中国历代人物传记资料库：王永潮（CBDB 260630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260630&o=json
            external_identifier: CBDB:260630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
    - claim:
        id: c_GCwgCHiUABDy-1l_QBlgR7
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15Lh52Ktd9cnPA4igGMzFA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNXvUDaTnD1ZdbDQ7DYVrx
          claim_id: c_GCwgCHiUABDy-1l_QBlgR7
          source_id: s_IGUz1y1sGpMix20mq2K4QO
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王穆 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王穆 之父／母。
          source:
            id: s_IGUz1y1sGpMix20mq2K4QO
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 260642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260642&o=json
            external_identifier: CBDB:260642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_15Lh52Ktd9cnPA4igGMzFA
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_nu7gl_qIssH6RKRDw6ryqQ
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbRShlN2JLrUXnzGb4JXuh
          claim_id: c_nu7gl_qIssH6RKRDw6ryqQ
          source_id: s_5CWwqM9NQKPsVDGb_oWzCJ
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王存尚 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王存尚 之父／母。
          source:
            id: s_5CWwqM9NQKPsVDGb_oWzCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王存尚（CBDB 260634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json
            external_identifier: CBDB:260634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CdwM3THTpPaWK4dEbPKnqz
        status: active
        display_name: 王存尚
        merged_into_person_id: null
    - claim:
        id: c_hwbSDYhwCCG3WbUf6QNSl9
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TT_eyMm-VPK8DlHf1sEgJ
          claim_id: c_hwbSDYhwCCG3WbUf6QNSl9
          source_id: s_CvgDSyG2QPSTQbPSUycX7s
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王補 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王補 之父／母。
          source:
            id: s_CvgDSyG2QPSTQbPSUycX7s
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 260649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json
            external_identifier: CBDB:260649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5kDRbtMMnETR6H3Nmx6uG
        status: active
        display_name: 王補
        merged_into_person_id: null
    - claim:
        id: c_0kxDoqbTImQ5LsCStTHi1I
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FeAR5qy2Be6XzKsTiDm24Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1x62-0z3x55jQRD-FuEq94
          claim_id: c_0kxDoqbTImQ5LsCStTHi1I
          source_id: s_OHfRpBEFgAaUnemYuHVL3I
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王良 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王良 之父／母。
          source:
            id: s_OHfRpBEFgAaUnemYuHVL3I
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 260644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260644&o=json
            external_identifier: CBDB:260644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FeAR5qy2Be6XzKsTiDm24Q
        status: active
        display_name: 王良
        merged_into_person_id: null
    - claim:
        id: c_5LbF4pKN3qJoAP6j4zwFW9
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J5KJhA5ahWZ43tj2viBqd9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6SaKYrD8erbFD7PW1isF9Z
          claim_id: c_5LbF4pKN3qJoAP6j4zwFW9
          source_id: s_SPojzl4anipgqVnZOfzy1K
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王英 之父／母。
          source:
            id: s_SPojzl4anipgqVnZOfzy1K
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 260638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260638&o=json
            external_identifier: CBDB:260638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J5KJhA5ahWZ43tj2viBqd9
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_oUKsz71vne32VDZD-2U8vi
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sHMD1IBO_IwIa9lDq6qdI
          claim_id: c_oUKsz71vne32VDZD-2U8vi
          source_id: s_E2aEWoBc30_gmFUJD8foBH
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王美 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王美 之父／母。
          source:
            id: s_E2aEWoBc30_gmFUJD8foBH
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 260635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json
            external_identifier: CBDB:260635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGPoDrZ9MMZVirnvNcApNL
        status: active
        display_name: 王美
        merged_into_person_id: null
    - claim:
        id: c_2aaNxQa5AlWHinu0KVpXcg
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4KGyCF96QdcgfDHp9ws1G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4W-7wVCKrU61JqxdeuZEl
          claim_id: c_2aaNxQa5AlWHinu0KVpXcg
          source_id: s_RZOF-tC9NTQES0vakp90xI
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王紏 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王紏 之父／母。
          source:
            id: s_RZOF-tC9NTQES0vakp90xI
            source_type: api_record
            title: 中国历代人物传记资料库：王紏（CBDB 260645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260645&o=json
            external_identifier: CBDB:260645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4KGyCF96QdcgfDHp9ws1G
        status: active
        display_name: 王紏
        merged_into_person_id: null
    - claim:
        id: c_JLLRaKBPWldqyLydGmmDvU
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__CAMnZEVLcYXzzYFToqtSD
          claim_id: c_JLLRaKBPWldqyLydGmmDvU
          source_id: s_tUAw7WSWGTHTSy6WP8mVPc
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王懷 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王懷 之父／母。
          source:
            id: s_tUAw7WSWGTHTSy6WP8mVPc
            source_type: api_record
            title: 中国历代人物传记资料库：王懷（CBDB 260643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json
            external_identifier: CBDB:260643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YbB5Z4MhgQnWDBLLWCtfKg
        status: active
        display_name: 王懷
        merged_into_person_id: null
    - claim:
        id: c_XSDYN4-MySV6ODC1BzDLBI
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YyrLm2sM2ZpYD4oXCPshnD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s-hrMFP8PSRCqGUQsaR5Pd
          claim_id: c_XSDYN4-MySV6ODC1BzDLBI
          source_id: s_kS7ZCdowOfa3eh8sP1w79w
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王集 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王集 之父／母。
          source:
            id: s_kS7ZCdowOfa3eh8sP1w79w
            source_type: api_record
            title: 中国历代人物传记资料库：王集（CBDB 260646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260646&o=json
            external_identifier: CBDB:260646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YyrLm2sM2ZpYD4oXCPshnD
        status: active
        display_name: 王集
        merged_into_person_id: null
    - claim:
        id: c_M23vdu8BEZE9gFliA7pSCH
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGY4hYCtLz61f28RjWAJFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__zBzCFk0VPI6jaJjIkpEIl
          claim_id: c_M23vdu8BEZE9gFliA7pSCH
          source_id: s_6uSqwpEGYYL0lSgxKSbdQN
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王賜 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王賜 之父／母。
          source:
            id: s_6uSqwpEGYYL0lSgxKSbdQN
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 260639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260639&o=json
            external_identifier: CBDB:260639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dGY4hYCtLz61f28RjWAJFY
        status: active
        display_name: 王賜
        merged_into_person_id: null
    - claim:
        id: c_sHelVOsEwEFut-W2d2Tcv7
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qqKc8n9y92oNgsCDACGR7S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsij_Tq4w1otm7ZOle6tVE
          claim_id: c_sHelVOsEwEFut-W2d2Tcv7
          source_id: s_Wb4MeMq0y-5tzrMJZ4yEwY
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王澤 之父／母。
          source:
            id: s_Wb4MeMq0y-5tzrMJZ4yEwY
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 260640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json
            external_identifier: CBDB:260640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qqKc8n9y92oNgsCDACGR7S
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_AffLawBkJ-GUtJWJD4SUCV
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s7fM57h4jdkgFa3GDMRiiW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t8OCe2vK8LKQ9m-GHwu8qr
          claim_id: c_AffLawBkJ-GUtJWJD4SUCV
          source_id: s_YJdAV1eX5vuEx_Qgh5Sr4W
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王彝 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王彝 之父／母。
          source:
            id: s_YJdAV1eX5vuEx_Qgh5Sr4W
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 260650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260650&o=json
            external_identifier: CBDB:260650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s7fM57h4jdkgFa3GDMRiiW
        status: active
        display_name: 王彝
        merged_into_person_id: null
    - claim:
        id: c_AAVAYXpQgZIM1tg60cuxbq
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbEj9KMH3C6mpXFakoOP2z
          claim_id: c_AAVAYXpQgZIM1tg60cuxbq
          source_id: s_Lqr6y6aLNWFpEWDeBEtoMe
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王益 之父／母。
          source:
            id: s_Lqr6y6aLNWFpEWDeBEtoMe
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 260641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json
            external_identifier: CBDB:260641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sF2SnQKNvV3NAN319u2Fiw
        status: active
        display_name: 王益
        merged_into_person_id: null
    - claim:
        id: c_U9dOmdpFfb26AdmOdFE8Sk
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xGen37Qykk9XcikK9zpFrP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UZ0ePyQQtLl_XcL7BetwfB
          claim_id: c_U9dOmdpFfb26AdmOdFE8Sk
          source_id: s_GnqdZcbHaNKHezjn2RXmX6
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王豪 与 王存忠 为同胞（CBDB 记「兄」），王存忠 之父／母即 王豪 之父／母。
          source:
            id: s_GnqdZcbHaNKHezjn2RXmX6
            source_type: api_record
            title: 中国历代人物传记资料库：王豪（CBDB 260647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260647&o=json
            external_identifier: CBDB:260647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xGen37Qykk9XcikK9zpFrP
        status: active
        display_name: 王豪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永潮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永潮，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260630） | accepted |
| name.primary | 王永潮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |
| children | p_15Lh52Ktd9cnPA4igGMzFA | 王穆 | accepted |
| children | p_CdwM3THTpPaWK4dEbPKnqz | 王存尚 | accepted |
| children | p_D5kDRbtMMnETR6H3Nmx6uG | 王補 | accepted |
| children | p_FeAR5qy2Be6XzKsTiDm24Q | 王良 | accepted |
| children | p_J5KJhA5ahWZ43tj2viBqd9 | 王英 | accepted |
| children | p_NGPoDrZ9MMZVirnvNcApNL | 王美 | accepted |
| children | p_Y4KGyCF96QdcgfDHp9ws1G | 王紏 | accepted |
| children | p_YbB5Z4MhgQnWDBLLWCtfKg | 王懷 | accepted |
| children | p_YyrLm2sM2ZpYD4oXCPshnD | 王集 | accepted |
| children | p_dGY4hYCtLz61f28RjWAJFY | 王賜 | accepted |
| children | p_qqKc8n9y92oNgsCDACGR7S | 王澤 | accepted |
| children | p_s7fM57h4jdkgFa3GDMRiiW | 王彝 | accepted |
| children | p_sF2SnQKNvV3NAN319u2Fiw | 王益 | accepted |
| children | p_xGen37Qykk9XcikK9zpFrP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補（CBDB 260649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json)
- [中国历代人物传记资料库：王賜（CBDB 260639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260639&o=json)
- [中国历代人物传记资料库：王存尚（CBDB 260634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json)
- [中国历代人物传记资料库：王豪（CBDB 260647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260647&o=json)
- [中国历代人物传记资料库：王懷（CBDB 260643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json)
- [中国历代人物传记资料库：王集（CBDB 260646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260646&o=json)
- [中国历代人物传记资料库：王良（CBDB 260644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260644&o=json)
- [中国历代人物传记资料库：王美（CBDB 260635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json)
- [中国历代人物传记资料库：王穆（CBDB 260642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260642&o=json)
- [中国历代人物传记资料库：王紏（CBDB 260645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260645&o=json)
- [中国历代人物传记资料库：王彝（CBDB 260650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260650&o=json)
- [中国历代人物传记资料库：王益（CBDB 260641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json)
- [中国历代人物传记资料库：王英（CBDB 260638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260638&o=json)
- [中国历代人物传记资料库：王永潮（CBDB 260630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260630&o=json)
- [中国历代人物传记资料库：王澤（CBDB 260640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json)
