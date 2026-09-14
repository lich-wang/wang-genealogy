---
schema: wang-person/v1
id: p_ybLqBE5H4AFTdmTJtgwy2w
status: active
merged_into: null
display_name: 王存忠
revision: 18
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PJ8DLR7BDk8PHHEtAHFdP
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WRAab4zwUZNbzzNTz3QUAB
          claim_id: c_3PJ8DLR7BDk8PHHEtAHFdP
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
          stance: supports
          locator: CBDB:200628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200628）
          source: &a1
            id: s_5iN8YRqwqwNvNG7HaRVWEq
            source_type: api_record
            title: 中国历代人物传记资料库：王存忠（CBDB 200628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200628&o=json
            external_identifier: CBDB:200628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o59Dn8Nk3k4KLJGSceFhaN
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvdWG2nD61UUotY2WhmMw5
          claim_id: c_o59Dn8Nk3k4KLJGSceFhaN
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
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
        id: c_K2WQNVW5LPmsYcnmyD4ZTB
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存忠（生于1447年），明人物。成化二十三年進士，籍贯寧海，身份为堪輿家風水師，入仕進士。（中国历代人物传记资料库 CBDB 200628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RFa8JQxDnbpt1_w6XxRsuA
          claim_id: c_K2WQNVW5LPmsYcnmyD4ZTB
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
          stance: supports
          locator: CBDB:200628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_OKF3fjrKeNCoDFHLSF4Uss
        subject_person_id: p_jAsZukDNAeNHmk16362L7C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hpPd5zErDQugti-ybdpo4T
          claim_id: c_OKF3fjrKeNCoDFHLSF4Uss
          source_id: s_SkJgLiZamHYtw2Kveeg2sS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SkJgLiZamHYtw2Kveeg2sS
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 260628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260628&o=json
            external_identifier: CBDB:260628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jAsZukDNAeNHmk16362L7C
        status: active
        display_name: 王思明
        merged_into_person_id: null
    - claim:
        id: c_8t2UUZM2_5lNkmIzpZx0Us
        subject_person_id: p_dZgW4VsZQ7RHA497W3Qg63
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IDqRUH73rsGAz31zFKnMfT
          claim_id: c_8t2UUZM2_5lNkmIzpZx0Us
          source_id: s_86BmNQsFrSyiK7ZmEp58sc
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_86BmNQsFrSyiK7ZmEp58sc
            source_type: api_record
            title: 中国历代人物传记资料库：王文彬（CBDB 260629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260629&o=json
            external_identifier: CBDB:260629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dZgW4VsZQ7RHA497W3Qg63
        status: active
        display_name: 王文彬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_9eTGIOu4GDvP0mRf1jNWpp
        subject_person_id: p_15Lh52Ktd9cnPA4igGMzFA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJ-cORXpC6BgpLLa9292pO
          claim_id: c_9eTGIOu4GDvP0mRf1jNWpp
          source_id: s_IGUz1y1sGpMix20mq2K4QO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_hCJp4ZBfpAuRECRO58PBgC
        subject_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOVAQ_bSrIzkxmOhStddDc
          claim_id: c_hCJp4ZBfpAuRECRO58PBgC
          source_id: s_5CWwqM9NQKPsVDGb_oWzCJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_aq7UdahEUo_jdcx67NAsWu
        subject_person_id: p_D5kDRbtMMnETR6H3Nmx6uG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5npPN7xvOG3g7YLnN51fgk
          claim_id: c_aq7UdahEUo_jdcx67NAsWu
          source_id: s_CvgDSyG2QPSTQbPSUycX7s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_lFKR62HCeI0uZYdkAjna-p
        subject_person_id: p_FeAR5qy2Be6XzKsTiDm24Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-YHji7QbDCAQVrMnuZkO-m
          claim_id: c_lFKR62HCeI0uZYdkAjna-p
          source_id: s_OHfRpBEFgAaUnemYuHVL3I
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_j1mg3L9wmkfzZpVuh6fMNN
        subject_person_id: p_J5KJhA5ahWZ43tj2viBqd9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpIDoQi1QW8kzU4Xmorbk6
          claim_id: c_j1mg3L9wmkfzZpVuh6fMNN
          source_id: s_SPojzl4anipgqVnZOfzy1K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_8qlAnl3hKtQGWyWJZZztg6
        subject_person_id: p_NGPoDrZ9MMZVirnvNcApNL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-b73PyhjUyLaorhXO_xXM7
          claim_id: c_8qlAnl3hKtQGWyWJZZztg6
          source_id: s_E2aEWoBc30_gmFUJD8foBH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_bX5qNL4DVhcRAgxboSskc9
        subject_person_id: p_Y4KGyCF96QdcgfDHp9ws1G
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVVSfW0bVx1MtiGgLnM2j0
          claim_id: c_bX5qNL4DVhcRAgxboSskc9
          source_id: s_RZOF-tC9NTQES0vakp90xI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_XOGw0irPObhGYOYbhHd3-u
        subject_person_id: p_YbB5Z4MhgQnWDBLLWCtfKg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83KAcX7ekmgwUxRIUo-Leg
          claim_id: c_XOGw0irPObhGYOYbhHd3-u
          source_id: s_tUAw7WSWGTHTSy6WP8mVPc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_COawMTfVslzInmVDAWDEiN
        subject_person_id: p_YyrLm2sM2ZpYD4oXCPshnD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GGppKBR5m4EbZ_LDc_K8A
          claim_id: c_COawMTfVslzInmVDAWDEiN
          source_id: s_kS7ZCdowOfa3eh8sP1w79w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Tt9Vid32EZ4ok69R3BzNru
        subject_person_id: p_dGY4hYCtLz61f28RjWAJFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09oth4SAtJOZ6FIbAc-Txi
          claim_id: c_Tt9Vid32EZ4ok69R3BzNru
          source_id: s_6uSqwpEGYYL0lSgxKSbdQN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_28NTyBLMjfT3cDQJaIuB3q
        subject_person_id: p_qqKc8n9y92oNgsCDACGR7S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy_7LhJFn9R9lARvVJLTVX
          claim_id: c_28NTyBLMjfT3cDQJaIuB3q
          source_id: s_Wb4MeMq0y-5tzrMJZ4yEwY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_oS3xk6Wa0W-0-siKN6FXkM
        subject_person_id: p_s7fM57h4jdkgFa3GDMRiiW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jyqTgO3KEuZ0Ix2Hw8P1HF
          claim_id: c_oS3xk6Wa0W-0-siKN6FXkM
          source_id: s_YJdAV1eX5vuEx_Qgh5Sr4W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_QaP99i7OTV3zjE8bqlo_2a
        subject_person_id: p_sF2SnQKNvV3NAN319u2Fiw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TDrEIC5xFJZFmrALD3917t
          claim_id: c_QaP99i7OTV3zjE8bqlo_2a
          source_id: s_Lqr6y6aLNWFpEWDeBEtoMe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_jRTKpXSv-uwaI8otzFLdU4
        subject_person_id: p_xGen37Qykk9XcikK9zpFrP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dxWjbpfbJ3BU_-tVhmPV9
          claim_id: c_jRTKpXSv-uwaI8otzFLdU4
          source_id: s_GnqdZcbHaNKHezjn2RXmX6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王存忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存忠 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | 王存忠（生于1447年），明人物。成化二十三年進士，籍贯寧海，身份为堪輿家風水師，入仕進士。（中国历代人物传记资料库 CBDB 200628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| ancestors | p_jAsZukDNAeNHmk16362L7C | 王思明 | accepted |
| ancestors | p_dZgW4VsZQ7RHA497W3Qg63 | 王文彬 | accepted |
| other | p_15Lh52Ktd9cnPA4igGMzFA | 王穆 | accepted |
| other | p_CdwM3THTpPaWK4dEbPKnqz | 王存尚 | accepted |
| other | p_D5kDRbtMMnETR6H3Nmx6uG | 王補 | accepted |
| other | p_FeAR5qy2Be6XzKsTiDm24Q | 王良 | accepted |
| other | p_J5KJhA5ahWZ43tj2viBqd9 | 王英 | accepted |
| other | p_NGPoDrZ9MMZVirnvNcApNL | 王美 | accepted |
| other | p_Y4KGyCF96QdcgfDHp9ws1G | 王紏 | accepted |
| other | p_YbB5Z4MhgQnWDBLLWCtfKg | 王懷 | accepted |
| other | p_YyrLm2sM2ZpYD4oXCPshnD | 王集 | accepted |
| other | p_dGY4hYCtLz61f28RjWAJFY | 王賜 | accepted |
| other | p_qqKc8n9y92oNgsCDACGR7S | 王澤 | accepted |
| other | p_s7fM57h4jdkgFa3GDMRiiW | 王彝 | accepted |
| other | p_sF2SnQKNvV3NAN319u2Fiw | 王益 | accepted |
| other | p_xGen37Qykk9XcikK9zpFrP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補（CBDB 260649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260649&o=json)
- [中国历代人物传记资料库：王賜（CBDB 260639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260639&o=json)
- [中国历代人物传记资料库：王存尚（CBDB 260634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json)
- [中国历代人物传记资料库：王存忠（CBDB 200628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200628&o=json)
- [中国历代人物传记资料库：王豪（CBDB 260647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260647&o=json)
- [中国历代人物传记资料库：王懷（CBDB 260643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260643&o=json)
- [中国历代人物传记资料库：王集（CBDB 260646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260646&o=json)
- [中国历代人物传记资料库：王良（CBDB 260644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260644&o=json)
- [中国历代人物传记资料库：王美（CBDB 260635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260635&o=json)
- [中国历代人物传记资料库：王穆（CBDB 260642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260642&o=json)
- [中国历代人物传记资料库：王思明（CBDB 260628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260628&o=json)
- [中国历代人物传记资料库：王紏（CBDB 260645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260645&o=json)
- [中国历代人物传记资料库：王文彬（CBDB 260629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260629&o=json)
- [中国历代人物传记资料库：王彝（CBDB 260650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260650&o=json)
- [中国历代人物传记资料库：王益（CBDB 260641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260641&o=json)
- [中国历代人物传记资料库：王英（CBDB 260638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260638&o=json)
- [中国历代人物传记资料库：王永潮（CBDB 260630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260630&o=json)
- [中国历代人物传记资料库：王澤（CBDB 260640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260640&o=json)
