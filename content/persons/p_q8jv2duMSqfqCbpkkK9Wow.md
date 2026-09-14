---
schema: wang-person/v1
id: p_q8jv2duMSqfqCbpkkK9Wow
status: active
merged_into: null
display_name: 王魯
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Kf599PShzi63k3HHYGo96
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RptGrZewxpQnr9twQRF8TV
          claim_id: c_4Kf599PShzi63k3HHYGo96
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
          stance: supports
          locator: CBDB:198398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198398）
          source: &a1
            id: s_ZEDjW9qJAw7y5dYn9riCxJ
            source_type: api_record
            title: 中国历代人物传记资料库：王魯（CBDB 198398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198398&o=json
            external_identifier: CBDB:198398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pfi175XHb9fUaf4EmSQpyL
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LPaxX12KM69LeRuqvyEBC
          claim_id: c_pfi175XHb9fUaf4EmSQpyL
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
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
        id: c_Q6gppLPJRNMZYiNKBbE8RC
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯（生于1427年），明人物。明清進士進士，籍贯溧水，入仕進士。（中国历代人物传记资料库 CBDB 198398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L09YHKQAg0VZJzH3mYlZWh
          claim_id: c_Q6gppLPJRNMZYiNKBbE8RC
          source_id: s_ZEDjW9qJAw7y5dYn9riCxJ
          stance: supports
          locator: CBDB:198398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f--7Ef3bfwXRVwErnaEdjk
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0LJomOgWEjeHsS8Evk1jj
          claim_id: c_f--7Ef3bfwXRVwErnaEdjk
          source_id: s_Cg2uT2jLBdKAn8ujADvzDV
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cg2uT2jLBdKAn8ujADvzDV
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 267005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json
            external_identifier: CBDB:267005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CKPv9UAc3q29PWyukafcq8
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_p_KBPg5Hs9JVufeRsWuorb
        subject_person_id: p_dFiwtZQDoCpys33mCXoLWB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7wpfNMoRgtdt6DfRHVVLh
          claim_id: c_p_KBPg5Hs9JVufeRsWuorb
          source_id: s_HYj8ziYMW42GetXUrveVNt
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HYj8ziYMW42GetXUrveVNt
            source_type: api_record
            title: 中国历代人物传记资料库：王伯忠（CBDB 266994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266994&o=json
            external_identifier: CBDB:266994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dFiwtZQDoCpys33mCXoLWB
        status: active
        display_name: 王伯忠
        merged_into_person_id: null
    - claim:
        id: c_AujGplPhdSeg_OZRRq7xPE
        subject_person_id: p_GZiUYnnrLjUkWy49TPto1R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BvYZ8kn5Y9Dq0G8THr5_6N
          claim_id: c_AujGplPhdSeg_OZRRq7xPE
          source_id: s_JxwaNHDTFD7kd93Z6EFvGZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JxwaNHDTFD7kd93Z6EFvGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 266983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json
            external_identifier: CBDB:266983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GZiUYnnrLjUkWy49TPto1R
        status: active
        display_name: 王德明
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8OjIKn_wwdBqlG_eqm6H8h
        subject_person_id: p_3FjhEKeM1c8kyPoKNRnB72
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giZAlTLnwKYH69g_yolXtt
          claim_id: c_8OjIKn_wwdBqlG_eqm6H8h
          source_id: s_yhYUrbD_wKgMI23rKL9vd9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yhYUrbD_wKgMI23rKL9vd9
            source_type: api_record
            title: 中国历代人物传记资料库：王孝（CBDB 267171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267171&o=json
            external_identifier: CBDB:267171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3FjhEKeM1c8kyPoKNRnB72
        status: active
        display_name: 王孝
        merged_into_person_id: null
    - claim:
        id: c_bgpaOQLro4MvV9XHVyym2I
        subject_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YrgmAaex2XXqUMc7_PW5Bc
          claim_id: c_bgpaOQLro4MvV9XHVyym2I
          source_id: s_l7WMjAe31oVQxKX7OK_8tE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l7WMjAe31oVQxKX7OK_8tE
            source_type: api_record
            title: 中国历代人物传记资料库：王器（CBDB 267138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json
            external_identifier: CBDB:267138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6TJyuxKhQ18JjQzDuJGDY4
        status: active
        display_name: 王器
        merged_into_person_id: null
    - claim:
        id: c_15oLtRcAT_LLNm2bdmKPKc
        subject_person_id: p_A2FMZcBwz2Z4nhrvf4rDa7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoR-ArcHxm0JW5NgvZ08FL
          claim_id: c_15oLtRcAT_LLNm2bdmKPKc
          source_id: s_jZAll7DltMUR9BvvS0Qyy7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jZAll7DltMUR9BvvS0Qyy7
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json
            external_identifier: CBDB:267105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2FMZcBwz2Z4nhrvf4rDa7
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c__cQghxHYWECY4rCvDZ-Z3f
        subject_person_id: p_CqjxXJ5m9n5YfJTKbQceeD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2L4TBflFinrwvRjkaIPLkr
          claim_id: c__cQghxHYWECY4rCvDZ-Z3f
          source_id: s_zWxthLLF2G0pxVZsm_Q4Y4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zWxthLLF2G0pxVZsm_Q4Y4
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 267094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267094&o=json
            external_identifier: CBDB:267094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqjxXJ5m9n5YfJTKbQceeD
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_g2vnLU_-7G54ljC68g4KOd
        subject_person_id: p_E8gXGY9qEndYYMGS6eqbKv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wof7XhMRuzeX1joDaBC2pW
          claim_id: c_g2vnLU_-7G54ljC68g4KOd
          source_id: s_wM1cTG625l2bfZtn3OR8SW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wM1cTG625l2bfZtn3OR8SW
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 267060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267060&o=json
            external_identifier: CBDB:267060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E8gXGY9qEndYYMGS6eqbKv
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_iWQO7Kn3mHSfJAQzbGcbxZ
        subject_person_id: p_Fw6GsK3qMAkvT8eTTxPa7v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ldNIIv18h3a9-UgzSjP6d
          claim_id: c_iWQO7Kn3mHSfJAQzbGcbxZ
          source_id: s_Wqz2mi3F4XPlPqW1kXS3Su
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wqz2mi3F4XPlPqW1kXS3Su
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 267127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267127&o=json
            external_identifier: CBDB:267127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fw6GsK3qMAkvT8eTTxPa7v
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_WmmYoM1RiGwsaZT_t_g8ua
        subject_person_id: p_XLFFyyxGCzdnmsqVyYWFKn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VK9KjyfunMdBNhWwjwh02n
          claim_id: c_WmmYoM1RiGwsaZT_t_g8ua
          source_id: s_QW8wd35vqjVT9O6YTqKURP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QW8wd35vqjVT9O6YTqKURP
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 267071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267071&o=json
            external_identifier: CBDB:267071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XLFFyyxGCzdnmsqVyYWFKn
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_sCZltSglPqPzwTi2G-GoLN
        subject_person_id: p_XMQdK2FcGGicPgwMFMaiBE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5E56I1S9ZWX8uCdnGoWCk
          claim_id: c_sCZltSglPqPzwTi2G-GoLN
          source_id: s_B3HeTi8G9yE0O5Wf5vn53G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B3HeTi8G9yE0O5Wf5vn53G
            source_type: api_record
            title: 中国历代人物传记资料库：王辨（CBDB 267149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267149&o=json
            external_identifier: CBDB:267149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XMQdK2FcGGicPgwMFMaiBE
        status: active
        display_name: 王辨
        merged_into_person_id: null
    - claim:
        id: c_vyex7XZQSD0jA6X8rmO1Vo
        subject_person_id: p_Zagw2jUXA2bGhFt3Tf6Wc2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kqSHQag63DeuxD1TIsTJ-g
          claim_id: c_vyex7XZQSD0jA6X8rmO1Vo
          source_id: s_G8c8S86xVzABH0M6lO7oZh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G8c8S86xVzABH0M6lO7oZh
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 267160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267160&o=json
            external_identifier: CBDB:267160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zagw2jUXA2bGhFt3Tf6Wc2
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_XhaMQbHUTg6IulSOqWsSyM
        subject_person_id: p_mTrNh2z3rLv3K8dQdvAPr1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apXWbVGZIfhkIJKNe1dJNE
          claim_id: c_XhaMQbHUTg6IulSOqWsSyM
          source_id: s_LFMk3YnPv9CAiaEpeB8f0m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LFMk3YnPv9CAiaEpeB8f0m
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 267116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json
            external_identifier: CBDB:267116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mTrNh2z3rLv3K8dQdvAPr1
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_Hlfg6P740sz7a6WZDPE5i5
        subject_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rBBhtXWwFwTPfqn7qyEhmD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nobKlFl_conSesIel8PIh
          claim_id: c_Hlfg6P740sz7a6WZDPE5i5
          source_id: s_mdTbGXRvlBCAMkL5qdr6Wj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mdTbGXRvlBCAMkL5qdr6Wj
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 267083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json
            external_identifier: CBDB:267083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rBBhtXWwFwTPfqn7qyEhmD
        status: active
        display_name: 王聰
        merged_into_person_id: null
---

# 王魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | 王魯（生于1427年），明人物。明清進士進士，籍贯溧水，入仕進士。（中国历代人物传记资料库 CBDB 198398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CKPv9UAc3q29PWyukafcq8 | 王文奎 | accepted |
| ancestors | p_dFiwtZQDoCpys33mCXoLWB | 王伯忠 | accepted |
| ancestors | p_GZiUYnnrLjUkWy49TPto1R | 王德明 | accepted |
| other | p_3FjhEKeM1c8kyPoKNRnB72 | 王孝 | accepted |
| other | p_6TJyuxKhQ18JjQzDuJGDY4 | 王器 | accepted |
| other | p_A2FMZcBwz2Z4nhrvf4rDa7 | 王俊 | accepted |
| other | p_CqjxXJ5m9n5YfJTKbQceeD | 王明 | accepted |
| other | p_E8gXGY9qEndYYMGS6eqbKv | 王佐 | accepted |
| other | p_Fw6GsK3qMAkvT8eTTxPa7v | 王文 | accepted |
| other | p_XLFFyyxGCzdnmsqVyYWFKn | 王弼 | accepted |
| other | p_XMQdK2FcGGicPgwMFMaiBE | 王辨 | accepted |
| other | p_Zagw2jUXA2bGhFt3Tf6Wc2 | 王謹 | accepted |
| other | p_mTrNh2z3rLv3K8dQdvAPr1 | 王述 | accepted |
| other | p_rBBhtXWwFwTPfqn7qyEhmD | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 267071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267071&o=json)
- [中国历代人物传记资料库：王辨（CBDB 267149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267149&o=json)
- [中国历代人物传记资料库：王伯忠（CBDB 266994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266994&o=json)
- [中国历代人物传记资料库：王聰（CBDB 267083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267083&o=json)
- [中国历代人物传记资料库：王德明（CBDB 266983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266983&o=json)
- [中国历代人物传记资料库：王謹（CBDB 267160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267160&o=json)
- [中国历代人物传记资料库：王俊（CBDB 267105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267105&o=json)
- [中国历代人物传记资料库：王魯（CBDB 198398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198398&o=json)
- [中国历代人物传记资料库：王明（CBDB 267094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267094&o=json)
- [中国历代人物传记资料库：王器（CBDB 267138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json)
- [中国历代人物传记资料库：王述（CBDB 267116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267116&o=json)
- [中国历代人物传记资料库：王文（CBDB 267127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267127&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 267005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267005&o=json)
- [中国历代人物传记资料库：王孝（CBDB 267171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267171&o=json)
- [中国历代人物传记资料库：王佐（CBDB 267060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267060&o=json)
