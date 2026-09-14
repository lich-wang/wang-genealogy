---
schema: wang-person/v1
id: p_HfLk9ptSCZD1pXUYCky88S
status: active
merged_into: null
display_name: 王一言
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tA9Ht1o1Vj1KXWJXjTbh9v
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JnpnM6bVgWuRGUE4Bh9774
          claim_id: c_tA9Ht1o1Vj1KXWJXjTbh9v
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
          stance: supports
          locator: CBDB:206148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206148）
          source: &a1
            id: s_XvtFARKg2ZDosjdmbTHxzK
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 206148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206148&o=json
            external_identifier: CBDB:206148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4DmWF6xUtsmj8CXa5RMCr3
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VP9u3uNNcP4YcfHaNWAHHP
          claim_id: c_4DmWF6xUtsmj8CXa5RMCr3
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
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
        id: c_u2zSSY6wnbrw96hZwCaWxf
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言（生于1539年），明人物。明清進士進士，籍贯南城，入仕進士，曾任府丞、副使、縣令。（中国历代人物传记资料库 CBDB 206148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TKpxXEjIuKuO1ThBIMluzv
          claim_id: c_u2zSSY6wnbrw96hZwCaWxf
          source_id: s_XvtFARKg2ZDosjdmbTHxzK
          stance: supports
          locator: CBDB:206148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wyNqnoYbBIaqm4DY-IcgRb
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRl7uUuBQCryXGHOEaPExu
          claim_id: c_wyNqnoYbBIaqm4DY-IcgRb
          source_id: s_fFP76qM8mRHfLkqmZSpu9Q
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fFP76qM8mRHfLkqmZSpu9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 213978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json
            external_identifier: CBDB:213978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IBNQ9GkhMIcwzoWGtfAQBK
        subject_person_id: p_3AyKgJ9Du3h776Ls9PM57m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8RNLN1wRAZ2-mWDKf1cQse
          claim_id: c_IBNQ9GkhMIcwzoWGtfAQBK
          source_id: s_XKg4VMEwyzCG9qCLPt3Vc3
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XKg4VMEwyzCG9qCLPt3Vc3
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 213977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213977&o=json
            external_identifier: CBDB:213977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3AyKgJ9Du3h776Ls9PM57m
        status: active
        display_name: 王廉
        merged_into_person_id: null
    - claim:
        id: c_cQwxV4TvhGEwNKNrQsSydL
        subject_person_id: p_HooaQHi6HT221VAZHQM9oZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CjOmTVmky8zH3Me6DqABUf
          claim_id: c_cQwxV4TvhGEwNKNrQsSydL
          source_id: s_FuTo1YqZGeJBhuKFmzyc4S
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FuTo1YqZGeJBhuKFmzyc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 213976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json
            external_identifier: CBDB:213976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HooaQHi6HT221VAZHQM9oZ
        status: active
        display_name: 王珍
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_MmVSJhS8M5wBtsx9EKeaIH
        subject_person_id: p_4YukAyrWLgRehW7Qz3TA7Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dAGSCvh9I5C96E3KtLFhKF
          claim_id: c_MmVSJhS8M5wBtsx9EKeaIH
          source_id: s_y98RtRXywai9hI9ZkoFVZb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y98RtRXywai9hI9ZkoFVZb
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 213985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213985&o=json
            external_identifier: CBDB:213985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4YukAyrWLgRehW7Qz3TA7Z
        status: active
        display_name: 王一龍
        merged_into_person_id: null
    - claim:
        id: c_9t25WkRa58FowtNek0Q7KW
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvK8rkTwPZQFZrg6BtulhQ
          claim_id: c_9t25WkRa58FowtNek0Q7KW
          source_id: s_wXmxvYxHORYZnLLLD1FM6D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wXmxvYxHORYZnLLLD1FM6D
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4vHM6gNZTvxZM2XR9bP4ac
        status: active
        display_name: 王一經
        merged_into_person_id: null
    - claim:
        id: c_WjRO4XLYblDlTyVSvPOY_H
        subject_person_id: p_8yA38mLKkSBSoPttddDF9L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zMRnLxIMo2mrhqFrT6hfXQ
          claim_id: c_WjRO4XLYblDlTyVSvPOY_H
          source_id: s_6BerxPZX6yj-4Z8XuEAv1c
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6BerxPZX6yj-4Z8XuEAv1c
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 213986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213986&o=json
            external_identifier: CBDB:213986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yA38mLKkSBSoPttddDF9L
        status: active
        display_name: 王一舉
        merged_into_person_id: null
    - claim:
        id: c_87hkbt30b4GHw215PMK4jF
        subject_person_id: p_9kssxifapNve63ckwVF8c1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pqcIW-4AahkLvy6jX1oeWm
          claim_id: c_87hkbt30b4GHw215PMK4jF
          source_id: s_42cgDSd_6_DqK2Vu457A6i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_42cgDSd_6_DqK2Vu457A6i
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 213982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json
            external_identifier: CBDB:213982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9kssxifapNve63ckwVF8c1
        status: active
        display_name: 王一元
        merged_into_person_id: null
    - claim:
        id: c_kWbiIwxKmlqC4BLCZE5PsO
        subject_person_id: p_C745Q6Xo91hq74REVnbJ56
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGT1yOAfy8TOwXoWduqre5
          claim_id: c_kWbiIwxKmlqC4BLCZE5PsO
          source_id: s_PLyM90ElP0HS6i07V2XdeY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PLyM90ElP0HS6i07V2XdeY
            source_type: api_record
            title: 中国历代人物传记资料库：王一本（CBDB 213988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json
            external_identifier: CBDB:213988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C745Q6Xo91hq74REVnbJ56
        status: active
        display_name: 王一本
        merged_into_person_id: null
    - claim:
        id: c_m70VABaiXAU687D5Uhqvk9
        subject_person_id: p_Frzy82Pddoh3noG2YBakWo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2SzfTIw1Zpdhhv2pYElfu
          claim_id: c_m70VABaiXAU687D5Uhqvk9
          source_id: s_L7pC-ZBh8RNXz-cqbu07Vh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L7pC-ZBh8RNXz-cqbu07Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王一揆（CBDB 213983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json
            external_identifier: CBDB:213983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Frzy82Pddoh3noG2YBakWo
        status: active
        display_name: 王一揆
        merged_into_person_id: null
    - claim:
        id: c_WAPwbTgUxjCvuhDrBPBTry
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MNka8FxmrpKqyMcrF14VqK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BUOBsV4v-ZpDOH1g9s6klX
          claim_id: c_WAPwbTgUxjCvuhDrBPBTry
          source_id: s_8O-4Aheyqgf767VtOgM7k6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8O-4Aheyqgf767VtOgM7k6
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 213989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213989&o=json
            external_identifier: CBDB:213989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MNka8FxmrpKqyMcrF14VqK
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
    - claim:
        id: c_LDfem0BUmZTIp-I72SX2IG
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NN2hQz1jpPDW7ogPyofiyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MOqqZNFeCq8asODPzMxV5o
          claim_id: c_LDfem0BUmZTIp-I72SX2IG
          source_id: s_pwW3p2jG4fdTPSnoRFGVRr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pwW3p2jG4fdTPSnoRFGVRr
            source_type: api_record
            title: 中国历代人物传记资料库：王一科（CBDB 213984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json
            external_identifier: CBDB:213984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NN2hQz1jpPDW7ogPyofiyM
        status: active
        display_name: 王一科
        merged_into_person_id: null
    - claim:
        id: c_URzefNGBGvJ0rePuyFdTc3
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WpNmWhrQX1ERu4VzkaK7Hp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1jA1iTQexBebpuZCJki0c-
          claim_id: c_URzefNGBGvJ0rePuyFdTc3
          source_id: s_4IMxvUj39GVf-aE-LfTHW5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4IMxvUj39GVf-aE-LfTHW5
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 213987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213987&o=json
            external_identifier: CBDB:213987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WpNmWhrQX1ERu4VzkaK7Hp
        status: active
        display_name: 王一正
        merged_into_person_id: null
    - claim:
        id: c__GEltaWnY7FM06TfkrPF-u
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sN3PcXnM88ou4acFpbnUWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CL1tsVxkVrqsevljb7RO23
          claim_id: c__GEltaWnY7FM06TfkrPF-u
          source_id: s_U3PU8sspWP2_97UTWKTBsk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U3PU8sspWP2_97UTWKTBsk
            source_type: api_record
            title: 中国历代人物传记资料库：王一成（CBDB 213991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json
            external_identifier: CBDB:213991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sN3PcXnM88ou4acFpbnUWs
        status: active
        display_name: 王一成
        merged_into_person_id: null
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王一言（生于1539年），明人物。明清進士進士，籍贯南城，入仕進士，曾任府丞、副使、縣令。（中国历代人物传记资料库 CBDB 206148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| ancestors | p_3AyKgJ9Du3h776Ls9PM57m | 王廉 | accepted |
| ancestors | p_HooaQHi6HT221VAZHQM9oZ | 王珍 | accepted |
| other | p_4YukAyrWLgRehW7Qz3TA7Z | 王一龍 | accepted |
| other | p_4vHM6gNZTvxZM2XR9bP4ac | 王一經 | accepted |
| other | p_8yA38mLKkSBSoPttddDF9L | 王一舉 | accepted |
| other | p_9kssxifapNve63ckwVF8c1 | 王一元 | accepted |
| other | p_C745Q6Xo91hq74REVnbJ56 | 王一本 | accepted |
| other | p_Frzy82Pddoh3noG2YBakWo | 王一揆 | accepted |
| other | p_MNka8FxmrpKqyMcrF14VqK | 王一鳳 | accepted |
| other | p_NN2hQz1jpPDW7ogPyofiyM | 王一科 | accepted |
| other | p_WpNmWhrQX1ERu4VzkaK7Hp | 王一正 | accepted |
| other | p_sN3PcXnM88ou4acFpbnUWs | 王一成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 213977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213977&o=json)
- [中国历代人物传记资料库：王一本（CBDB 213988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213988&o=json)
- [中国历代人物传记资料库：王一成（CBDB 213991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json)
- [中国历代人物传记资料库：王一鳳（CBDB 213989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213989&o=json)
- [中国历代人物传记资料库：王一經（CBDB 213990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 213986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213986&o=json)
- [中国历代人物传记资料库：王一科（CBDB 213984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213984&o=json)
- [中国历代人物传记资料库：王一揆（CBDB 213983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json)
- [中国历代人物传记资料库：王一龍（CBDB 213985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213985&o=json)
- [中国历代人物传记资料库：王一言（CBDB 206148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206148&o=json)
- [中国历代人物传记资料库：王一元（CBDB 213982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213982&o=json)
- [中国历代人物传记资料库：王一正（CBDB 213987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213987&o=json)
- [中国历代人物传记资料库：王湧（CBDB 213978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213978&o=json)
- [中国历代人物传记资料库：王珍（CBDB 213976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json)
