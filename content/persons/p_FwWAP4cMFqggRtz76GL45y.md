---
schema: wang-person/v1
id: p_FwWAP4cMFqggRtz76GL45y
status: active
merged_into: null
display_name: 王訪
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DYEzqN2RVfQSmFDDrN9crM
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oaFYEfoemeoJz1d4twqHBS
          claim_id: c_DYEzqN2RVfQSmFDDrN9crM
          source_id: s_LKRshe6MuohdxBxu7BSr7A
          stance: supports
          locator: CBDB:330479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330479）
          source: &a1
            id: s_LKRshe6MuohdxBxu7BSr7A
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 330479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json
            external_identifier: CBDB:330479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQ49oEQKEhQytmPYm3PxwB
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_91j5sXt4KzD0BGGybWSTOY
          claim_id: c_JQ49oEQKEhQytmPYm3PxwB
          source_id: s_LKRshe6MuohdxBxu7BSr7A
          stance: supports
          locator: CBDB:330479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xzYxbceRBu9EfnyWeKsUrU
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8itfIgg4tM4GT1bnExx4g0
          claim_id: c_xzYxbceRBu9EfnyWeKsUrU
          source_id: s_LKRshe6MuohdxBxu7BSr7A
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_01E-SMTtho__DHzioq3Hpw
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3wz8fBFxVb7CTtNJiGp6zF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_408sFKIjlwQ1K-drjfTseK
          claim_id: c_01E-SMTtho__DHzioq3Hpw
          source_id: s__V8WqG3ZslTH-ZLJrK8s3s
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王七教 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王七教 之父／母。
          source:
            id: s__V8WqG3ZslTH-ZLJrK8s3s
            source_type: api_record
            title: 中国历代人物传记资料库：王七教（CBDB 330491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330491&o=json
            external_identifier: CBDB:330491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3wz8fBFxVb7CTtNJiGp6zF
        status: active
        display_name: 王七教
        merged_into_person_id: null
    - claim:
        id: c_5jy2xxgi8GATAVWZq8J25_
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AWLY5JhcGsYgq55393cBKE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S9Tn6jbpKLtOpYI2gJ-jNz
          claim_id: c_5jy2xxgi8GATAVWZq8J25_
          source_id: s_gC40h6cfc6QWasyj-Lex5X
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王十翼 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王十翼 之父／母。
          source:
            id: s_gC40h6cfc6QWasyj-Lex5X
            source_type: api_record
            title: 中国历代人物传记资料库：王十翼（CBDB 330495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json
            external_identifier: CBDB:330495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AWLY5JhcGsYgq55393cBKE
        status: active
        display_name: 王十翼
        merged_into_person_id: null
    - claim:
        id: c_kX3OKgDnunMipom53owe6j
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EUHvHseeDaeEK44dH4jAWf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KucD33S3GvD-niswPkvoaE
          claim_id: c_kX3OKgDnunMipom53owe6j
          source_id: s_tR7qUyajWJAUjYj0mM_GFS
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王六與 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王六與 之父／母。
          source:
            id: s_tR7qUyajWJAUjYj0mM_GFS
            source_type: api_record
            title: 中国历代人物传记资料库：王六與（CBDB 330490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json
            external_identifier: CBDB:330490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EUHvHseeDaeEK44dH4jAWf
        status: active
        display_name: 王六與
        merged_into_person_id: null
    - claim:
        id: c_rCQGQAR5B3-FI1k9qqqzCr
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJZmVh2DvEPf1KamLAVYE7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J99ACUR-USZSiGBPx4opDW
          claim_id: c_rCQGQAR5B3-FI1k9qqqzCr
          source_id: s_UIZfgcyIXlx8fMTM1Cj704
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王二雅 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王二雅 之父／母。
          source:
            id: s_UIZfgcyIXlx8fMTM1Cj704
            source_type: api_record
            title: 中国历代人物传记资料库：王二雅（CBDB 330488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330488&o=json
            external_identifier: CBDB:330488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TJZmVh2DvEPf1KamLAVYE7
        status: active
        display_name: 王二雅
        merged_into_person_id: null
    - claim:
        id: c_b7JdAz2qQo6haBDkPaOxzW
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VBfUvqUHVfG5ffpmCP5SEC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RsmnM9Nkus83MRSpWukB7z
          claim_id: c_b7JdAz2qQo6haBDkPaOxzW
          source_id: s_3PSEItPlGxyRrF7seIvrUa
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王五美 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王五美 之父／母。
          source:
            id: s_3PSEItPlGxyRrF7seIvrUa
            source_type: api_record
            title: 中国历代人物传记资料库：王五美（CBDB 330489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330489&o=json
            external_identifier: CBDB:330489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VBfUvqUHVfG5ffpmCP5SEC
        status: active
        display_name: 王五美
        merged_into_person_id: null
    - claim:
        id: c_ZYKLk-E83cfIMN1zTCtbHy
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQUhurjj7aW6BmKDwcHajP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtFncm0QdpNIV9j78nq8kB
          claim_id: c_ZYKLk-E83cfIMN1zTCtbHy
          source_id: s_eHk61xaWLIJ0Z2cX56etiL
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝安 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王汝安 之父／母。
          source:
            id: s_eHk61xaWLIJ0Z2cX56etiL
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 330486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json
            external_identifier: CBDB:330486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQUhurjj7aW6BmKDwcHajP
        status: active
        display_name: 王汝安
        merged_into_person_id: null
    - claim:
        id: c_o62AXmL9rKOG5tG1ky5A2w
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YTBz4fGCBrcfT1SwWNc91W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEC4r6-CzuM8shpFhlzz_w
          claim_id: c_o62AXmL9rKOG5tG1ky5A2w
          source_id: s__2IPLHH3xDvKuw5ccmwUQz
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王八元 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王八元 之父／母。
          source:
            id: s__2IPLHH3xDvKuw5ccmwUQz
            source_type: api_record
            title: 中国历代人物传记资料库：王八元（CBDB 330492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json
            external_identifier: CBDB:330492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YTBz4fGCBrcfT1SwWNc91W
        status: active
        display_name: 王八元
        merged_into_person_id: null
    - claim:
        id: c_APAn842qwTv-fMKU5-NMoY
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hQYdDeW7E5c5LCtwiuRSDv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mt7wfeA3CK9P7WL8mA3ZY1
          claim_id: c_APAn842qwTv-fMKU5-NMoY
          source_id: s_xin3LspeKa_SscRL_khTA7
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝高 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王汝高 之父／母。
          source:
            id: s_xin3LspeKa_SscRL_khTA7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝高（CBDB 330485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330485&o=json
            external_identifier: CBDB:330485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hQYdDeW7E5c5LCtwiuRSDv
        status: active
        display_name: 王汝高
        merged_into_person_id: null
    - claim:
        id: c_PVIo6Q7BdDcDBryCDjC42e
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kue5mnTjRCamT6djWtTumF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2BaJdvW8xS5D8hb9qrWba
          claim_id: c_PVIo6Q7BdDcDBryCDjC42e
          source_id: s_mMDzbVn3hLRWgVsfjr4Goj
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王子實 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王子實 之父／母。
          source:
            id: s_mMDzbVn3hLRWgVsfjr4Goj
            source_type: api_record
            title: 中国历代人物传记资料库：王子實（CBDB 330493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330493&o=json
            external_identifier: CBDB:330493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kue5mnTjRCamT6djWtTumF
        status: active
        display_name: 王子實
        merged_into_person_id: null
    - claim:
        id: c_y6KY8JkUNIRU5__3OlidZT
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nGWAHeEASKiJdfcar4Chmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHCCai6sBdQPaFBxjNspgA
          claim_id: c_y6KY8JkUNIRU5__3OlidZT
          source_id: s_sVLVjVzoSn94_TU1wLsUvD
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王一陽 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王一陽 之父／母。
          source:
            id: s_sVLVjVzoSn94_TU1wLsUvD
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 330484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json
            external_identifier: CBDB:330484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nGWAHeEASKiJdfcar4Chmc
        status: active
        display_name: 王一陽
        merged_into_person_id: null
    - claim:
        id: c_tpwmu2P7DyNFBQY4JKM5fn
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uhm7QMvYDUq8M3FEsbzMvB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PTT4CBNfs8KbY8FIl9JcO
          claim_id: c_tpwmu2P7DyNFBQY4JKM5fn
          source_id: s_vSDJaiSQnv-6N0vt6O_IHh
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王子美 与 王三錫 为同胞（CBDB 记「弟」），王三錫 之父／母即 王子美 之父／母。
          source:
            id: s_vSDJaiSQnv-6N0vt6O_IHh
            source_type: api_record
            title: 中国历代人物传记资料库：王子美（CBDB 330483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json
            external_identifier: CBDB:330483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uhm7QMvYDUq8M3FEsbzMvB
        status: active
        display_name: 王子美
        merged_into_person_id: null
    - claim:
        id: c_pFCoNdbUk9_RnXM8SNgiSN
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w1LWpKPfQMvGduA5Eohqa3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I2oisFL2PdmYijUXK9H5Xf
          claim_id: c_pFCoNdbUk9_RnXM8SNgiSN
          source_id: s_qCFOw2iMt-CYKnF0YcBZZF
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王九儀 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王九儀 之父／母。
          source:
            id: s_qCFOw2iMt-CYKnF0YcBZZF
            source_type: api_record
            title: 中国历代人物传记资料库：王九儀（CBDB 330494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330494&o=json
            external_identifier: CBDB:330494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w1LWpKPfQMvGduA5Eohqa3
        status: active
        display_name: 王九儀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訪 | accepted |
| bio.summary | 王訪，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |
| children | p_3wz8fBFxVb7CTtNJiGp6zF | 王七教 | accepted |
| children | p_AWLY5JhcGsYgq55393cBKE | 王十翼 | accepted |
| children | p_EUHvHseeDaeEK44dH4jAWf | 王六與 | accepted |
| children | p_TJZmVh2DvEPf1KamLAVYE7 | 王二雅 | accepted |
| children | p_VBfUvqUHVfG5ffpmCP5SEC | 王五美 | accepted |
| children | p_WQUhurjj7aW6BmKDwcHajP | 王汝安 | accepted |
| children | p_YTBz4fGCBrcfT1SwWNc91W | 王八元 | accepted |
| children | p_hQYdDeW7E5c5LCtwiuRSDv | 王汝高 | accepted |
| children | p_kue5mnTjRCamT6djWtTumF | 王子實 | accepted |
| children | p_nGWAHeEASKiJdfcar4Chmc | 王一陽 | accepted |
| children | p_uhm7QMvYDUq8M3FEsbzMvB | 王子美 | accepted |
| children | p_w1LWpKPfQMvGduA5Eohqa3 | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王八元（CBDB 330492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330492&o=json)
- [中国历代人物传记资料库：王二雅（CBDB 330488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330488&o=json)
- [中国历代人物传记资料库：王訪（CBDB 330479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330479&o=json)
- [中国历代人物传记资料库：王九儀（CBDB 330494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330494&o=json)
- [中国历代人物传记资料库：王六與（CBDB 330490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json)
- [中国历代人物传记资料库：王七教（CBDB 330491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330491&o=json)
- [中国历代人物传记资料库：王汝安（CBDB 330486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json)
- [中国历代人物传记资料库：王汝高（CBDB 330485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330485&o=json)
- [中国历代人物传记资料库：王十翼（CBDB 330495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330495&o=json)
- [中国历代人物传记资料库：王五美（CBDB 330489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330489&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 330484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330484&o=json)
- [中国历代人物传记资料库：王子美（CBDB 330483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330483&o=json)
- [中国历代人物传记资料库：王子實（CBDB 330493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330493&o=json)
