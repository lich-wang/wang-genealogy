---
schema: wang-person/v1
id: p_hpsegmCooo9gAZbLr3f93A
status: active
merged_into: null
display_name: 王元爽
cbdb_id: 207767
revision: 14
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3YaEYkPti14BWshC17oAZ5
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元爽（生于1584年），明人物。明清進士進士，籍贯東光，入仕進士，曾任吏部主事、丁艱。（中国历代人物传记资料库 CBDB 207767）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fYjBzo_USS9QQZ3wbmjBES
          claim_id: c_3YaEYkPti14BWshC17oAZ5
          source_id: s_47GcYtQZUmMLY9bGtvkByU
          stance: supports
          locator: CBDB:207767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_47GcYtQZUmMLY9bGtvkByU
            source_type: api_record
            title: 中国历代人物传记资料库：王元爽（CBDB 207767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207767&o=json
            external_identifier: CBDB:207767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FrKo8ojFVYBJVBZyR3Fe3T
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1584年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1584-01-01
            latest: 1584-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4XWxtnQKPKw2me7HfE7Kdz
          claim_id: c_FrKo8ojFVYBJVBZyR3Fe3T
          source_id: s_47GcYtQZUmMLY9bGtvkByU
          stance: supports
          locator: CBDB:207767
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1584
          source:
            id: s_47GcYtQZUmMLY9bGtvkByU
            source_type: api_record
            title: 中国历代人物传记资料库：王元爽（CBDB 207767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207767&o=json
            external_identifier: CBDB:207767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hrQvyzpgd7A6n6N6Eer7Y7
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元爽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A8Jxw4c1mg61f2ebEcvXDK
          claim_id: c_hrQvyzpgd7A6n6N6Eer7Y7
          source_id: s_47GcYtQZUmMLY9bGtvkByU
          stance: supports
          locator: CBDB:207767
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1584
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v-XTN3ch9jdsQv9VHpFv75
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nrWO6LdgFaxTHiTDcSx3So
          claim_id: c_v-XTN3ch9jdsQv9VHpFv75
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QXYD7rdXyT5aDJJeaSJ1rk
            source_type: api_record
            title: 中国历代人物传记资料库：王溉槐（CBDB 235464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json
            external_identifier: CBDB:235464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children:
    - claim:
        id: c_nTM38M9AALD1JZ0o7hOs3P
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xb1MjFzZRDmdW9kg6zdPEu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ij7oSv4t-fusj3drOOpncW
          claim_id: c_nTM38M9AALD1JZ0o7hOs3P
          source_id: s_yspfXSyTVZanNaRssr8VjM
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yspfXSyTVZanNaRssr8VjM
            source_type: api_record
            title: 中国历代人物传记资料库：王一桂（CBDB 235481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235481&o=json
            external_identifier: CBDB:235481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xb1MjFzZRDmdW9kg6zdPEu
        status: active
        display_name: 王一桂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hzKeePph-Q8TZGwgj8Y--c
        subject_person_id: p_7N9oCiJaz1DKci9t31vRFx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0DUVWzx0_DdoF6vrV8Toj5
          claim_id: c_hzKeePph-Q8TZGwgj8Y--c
          source_id: s_koQATPsB11Di2nLwDmHAmM
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_koQATPsB11Di2nLwDmHAmM
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 235463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235463&o=json
            external_identifier: CBDB:235463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.756Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7N9oCiJaz1DKci9t31vRFx
        status: active
        display_name: 王嘉賓
        merged_into_person_id: null
    - claim:
        id: c_RFVsax-Gvf2jU0S8GqEZlt
        subject_person_id: p_oeaQ7H5k6Ds2cdRdp1eWdC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qojY17_ZwaS9HC5VfUw5mk
          claim_id: c_RFVsax-Gvf2jU0S8GqEZlt
          source_id: s_4MZ3ZMHPDtcwGFCfxDLeik
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4MZ3ZMHPDtcwGFCfxDLeik
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 235462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235462&o=json
            external_identifier: CBDB:235462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oeaQ7H5k6Ds2cdRdp1eWdC
        status: active
        display_name: 王畿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_n0VF0dHUOsGSyKMlchuEbH
        subject_person_id: p_78RagDdaNsyfMD2L9KN1J1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qR3Xdmlp80XM75RRrW6Ivt
          claim_id: c_n0VF0dHUOsGSyKMlchuEbH
          source_id: s_AkKGofplVwnpnLus_0FjHC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AkKGofplVwnpnLus_0FjHC
            source_type: api_record
            title: 中国历代人物传记资料库：王元繼（CBDB 235475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235475&o=json
            external_identifier: CBDB:235475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_78RagDdaNsyfMD2L9KN1J1
        status: active
        display_name: 王元繼
        merged_into_person_id: null
    - claim:
        id: c_oWWdXk4WXfU041UiZyQWxt
        subject_person_id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tPcrOwxHbwdVh3NTSqgyc2
          claim_id: c_oWWdXk4WXfU041UiZyQWxt
          source_id: s_uBcxwLpUZFbUk5jj5P59iT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uBcxwLpUZFbUk5jj5P59iT
            source_type: api_record
            title: 中国历代人物传记资料库：王元選（CBDB 235478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json
            external_identifier: CBDB:235478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hp2gs71z7Ej3aTLnCJZ2pJ
        status: active
        display_name: 王元選
        merged_into_person_id: null
    - claim:
        id: c_faw1c_Kn2acPAQSYaEwblw
        subject_person_id: p_KKZvLds578GDQHNKEGJXPU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-dpkbx1Gf8ZCEvLsn2d7ho
          claim_id: c_faw1c_Kn2acPAQSYaEwblw
          source_id: s_7A3ytk5sYImJfOWYO_WSjT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7A3ytk5sYImJfOWYO_WSjT
            source_type: api_record
            title: 中国历代人物传记资料库：王元鑑（CBDB 235477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json
            external_identifier: CBDB:235477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KKZvLds578GDQHNKEGJXPU
        status: active
        display_name: 王元鑑
        merged_into_person_id: null
    - claim:
        id: c_2Mc8v4ohDD1kMXkFCQufHN
        subject_person_id: p_MVxkJ4qnAPvK4KQJhadCYj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UsTkGludvLvKucJG_4s91_
          claim_id: c_2Mc8v4ohDD1kMXkFCQufHN
          source_id: s__3AccALKjeRg8dIDnVJ0yT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__3AccALKjeRg8dIDnVJ0yT
            source_type: api_record
            title: 中国历代人物传记资料库：王元蘭（CBDB 235480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json
            external_identifier: CBDB:235480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MVxkJ4qnAPvK4KQJhadCYj
        status: active
        display_name: 王元蘭
        merged_into_person_id: null
    - claim:
        id: c_TjJTwLpjNl_ajUJnsYXxz_
        subject_person_id: p_T7XCT5auDmxppeFRTyn4zp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmiEwXxl5Yaq6_qBqNGNqj
          claim_id: c_TjJTwLpjNl_ajUJnsYXxz_
          source_id: s_Wdt0hFk6rfHGUMowIH39A7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wdt0hFk6rfHGUMowIH39A7
            source_type: api_record
            title: 中国历代人物传记资料库：王元婁（CBDB 235472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235472&o=json
            external_identifier: CBDB:235472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T7XCT5auDmxppeFRTyn4zp
        status: active
        display_name: 王元婁
        merged_into_person_id: null
    - claim:
        id: c_emfonLxGoooyUtDnbHlUMC
        subject_person_id: p_a66XwJPN1SnGehtNYkmZT2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlXs1NVr6Wo_GTYze09VUN
          claim_id: c_emfonLxGoooyUtDnbHlUMC
          source_id: s_lFfYfoTuV4RtjcOJVoSdzb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lFfYfoTuV4RtjcOJVoSdzb
            source_type: api_record
            title: 中国历代人物传记资料库：王元承（CBDB 235479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json
            external_identifier: CBDB:235479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a66XwJPN1SnGehtNYkmZT2
        status: active
        display_name: 王元承
        merged_into_person_id: null
    - claim:
        id: c_VkaqsWwGiwslOXsuFPT8qM
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kAgKpD4X8VXubGDiK7GRNB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ou3dBKBisrVhRDPwMlJdq
          claim_id: c_VkaqsWwGiwslOXsuFPT8qM
          source_id: s_9Nqc5WqwXZNV9SRFjo4Wd3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9Nqc5WqwXZNV9SRFjo4Wd3
            source_type: api_record
            title: 中国历代人物传记资料库：王元衡（CBDB 235471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json
            external_identifier: CBDB:235471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kAgKpD4X8VXubGDiK7GRNB
        status: active
        display_name: 王元衡
        merged_into_person_id: null
    - claim:
        id: c_d5WFmVGWpCWACnVWhoIvn7
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPQwNRR3778vPLDizaxFNZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdgXn0YikZ8qjL3mzf640C
          claim_id: c_d5WFmVGWpCWACnVWhoIvn7
          source_id: s_njHpuqJsHJ-tTz9NBvJWG_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_njHpuqJsHJ-tTz9NBvJWG_
            source_type: api_record
            title: 中国历代人物传记资料库：王元俊（CBDB 235473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json
            external_identifier: CBDB:235473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPQwNRR3778vPLDizaxFNZ
        status: active
        display_name: 王元俊
        merged_into_person_id: null
    - claim:
        id: c_nl1QI8sFsZxyMoE9JOif_K
        subject_person_id: p_hpsegmCooo9gAZbLr3f93A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y6zteE4f29zi6ki6BtCkQj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n0O4e2qTJ4dtsnCFC2SE50
          claim_id: c_nl1QI8sFsZxyMoE9JOif_K
          source_id: s_xuOCxkyczoXLN292kZd6Hc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xuOCxkyczoXLN292kZd6Hc
            source_type: api_record
            title: 中国历代人物传记资料库：王元舉（CBDB 235474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235474&o=json
            external_identifier: CBDB:235474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y6zteE4f29zi6ki6BtCkQj
        status: active
        display_name: 王元舉
        merged_into_person_id: null
---

# 王元爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元爽（生于1584年），明人物。明清進士進士，籍贯東光，入仕進士，曾任吏部主事、丁艱。（中国历代人物传记资料库 CBDB 207767） | accepted |
| birth.date | 1584年 | accepted |
| name.primary | 王元爽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| children | p_Xb1MjFzZRDmdW9kg6zdPEu | 王一桂 | accepted |
| ancestors | p_7N9oCiJaz1DKci9t31vRFx | 王嘉賓 | accepted |
| ancestors | p_oeaQ7H5k6Ds2cdRdp1eWdC | 王畿 | accepted |
| other | p_78RagDdaNsyfMD2L9KN1J1 | 王元繼 | accepted |
| other | p_Hp2gs71z7Ej3aTLnCJZ2pJ | 王元選 | accepted |
| other | p_KKZvLds578GDQHNKEGJXPU | 王元鑑 | accepted |
| other | p_MVxkJ4qnAPvK4KQJhadCYj | 王元蘭 | accepted |
| other | p_T7XCT5auDmxppeFRTyn4zp | 王元婁 | accepted |
| other | p_a66XwJPN1SnGehtNYkmZT2 | 王元承 | accepted |
| other | p_kAgKpD4X8VXubGDiK7GRNB | 王元衡 | accepted |
| other | p_rPQwNRR3778vPLDizaxFNZ | 王元俊 | accepted |
| other | p_y6zteE4f29zi6ki6BtCkQj | 王元舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溉槐（CBDB 235464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json)
- [中国历代人物传记资料库：王畿（CBDB 235462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235462&o=json)
- [中国历代人物传记资料库：王嘉賓（CBDB 235463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235463&o=json)
- [中国历代人物传记资料库：王一桂（CBDB 235481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235481&o=json)
- [中国历代人物传记资料库：王元承（CBDB 235479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json)
- [中国历代人物传记资料库：王元衡（CBDB 235471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json)
- [中国历代人物传记资料库：王元繼（CBDB 235475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235475&o=json)
- [中国历代人物传记资料库：王元鑑（CBDB 235477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235477&o=json)
- [中国历代人物传记资料库：王元舉（CBDB 235474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235474&o=json)
- [中国历代人物传记资料库：王元俊（CBDB 235473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235473&o=json)
- [中国历代人物传记资料库：王元蘭（CBDB 235480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235480&o=json)
- [中国历代人物传记资料库：王元婁（CBDB 235472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235472&o=json)
- [中国历代人物传记资料库：王元爽（CBDB 207767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207767&o=json)
- [中国历代人物传记资料库：王元選（CBDB 235478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235478&o=json)
