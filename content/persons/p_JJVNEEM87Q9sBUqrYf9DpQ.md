---
schema: wang-person/v1
id: p_JJVNEEM87Q9sBUqrYf9DpQ
status: active
merged_into: null
display_name: 王瓊
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fmJAY3HoVc5Amk3A71Nga6
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hoosVzKwBHGhvkWxYwEqMF
          claim_id: c_fmJAY3HoVc5Amk3A71Nga6
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
          stance: supports
          locator: CBDB:271103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271103）
          source: &a1
            id: s_3WV1SaBi3ghD6oEqEXPGRG
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 271103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json
            external_identifier: CBDB:271103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F4FQ1K32FM4EGmSU6TUzWT
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271103）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d9rnf8wC_lUYTNXt4Z4PfP
          claim_id: c_F4FQ1K32FM4EGmSU6TUzWT
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
          stance: supports
          locator: CBDB:271103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WS1Enqd5T-kH3dLnxZS1aK
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjAxFlEIb9OYRl08tNb1Zn
          claim_id: c_WS1Enqd5T-kH3dLnxZS1aK
          source_id: s_3WV1SaBi3ghD6oEqEXPGRG
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5dqAK3hD6kewBU4JbJcy31
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_DKeEi22uG8bj9qNZi4ClR3
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93w6EWjQAuF7ETZJATszKb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4ui2pILDADzTNnMEvCgfC
          claim_id: c_DKeEi22uG8bj9qNZi4ClR3
          source_id: s_xW8nZiEjF7c1hpa2mpn4WK
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王松 与 王材 为同胞（CBDB 记「弟」），王材 之父／母即 王松 之父／母。
          source:
            id: s_xW8nZiEjF7c1hpa2mpn4WK
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 271108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json
            external_identifier: CBDB:271108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_93w6EWjQAuF7ETZJATszKb
        status: active
        display_name: 王松
        merged_into_person_id: null
    - claim:
        id: c_JQ4lpEqebf9KcVVWotZNF0
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HYniqG475BGY8GGcPu1Mtp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TY5wuhRSpMOv8j2oa5Qxi
          claim_id: c_JQ4lpEqebf9KcVVWotZNF0
          source_id: s_P6ADOJLRQvTu518Twb6NYM
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫟 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王櫟 之父／母。
          source:
            id: s_P6ADOJLRQvTu518Twb6NYM
            source_type: api_record
            title: 中国历代人物传记资料库：王櫟（CBDB 271117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271117&o=json
            external_identifier: CBDB:271117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HYniqG475BGY8GGcPu1Mtp
        status: active
        display_name: 王櫟
        merged_into_person_id: null
    - claim:
        id: c_7ChYZKzjt8vApbZRIrfQoj
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bzJ1AyArvkTEjfxOFUgxO
          claim_id: c_7ChYZKzjt8vApbZRIrfQoj
          source_id: s_vemI__HKIWSuKpR4z-27Zb
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王楠 之父／母。
          source:
            id: s_vemI__HKIWSuKpR4z-27Zb
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 271118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json
            external_identifier: CBDB:271118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBTTTqHW4fncDHKEq5R5nj
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_jfDPI7nIr6AwG_DHhC4DId
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SJvN4BrFh4PvLcwBPGyYHk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAFyENK7Zc_hSMyy6rU2Ar
          claim_id: c_jfDPI7nIr6AwG_DHhC4DId
          source_id: s_mQgAfRHVkdTpLAAOeDXkxb
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王楷 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王楷 之父／母。
          source:
            id: s_mQgAfRHVkdTpLAAOeDXkxb
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 271110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271110&o=json
            external_identifier: CBDB:271110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJvN4BrFh4PvLcwBPGyYHk
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_JFPqWTsQm7eghF5W1Y6iUm
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AgIVZUcStjzTzhZXi_9nO
          claim_id: c_JFPqWTsQm7eghF5W1Y6iUm
          source_id: s_SkTvPbRiptsjKQB0guxbRD
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王桓 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王桓 之父／母。
          source:
            id: s_SkTvPbRiptsjKQB0guxbRD
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 271111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json
            external_identifier: CBDB:271111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bDFgBZLmWhHrk46Gz9idH4
        status: active
        display_name: 王桓
        merged_into_person_id: null
    - claim:
        id: c_LdWjiLyApgeiX_BmC2FfoR
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bRgMZRH9w776ipvvdJJHX5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dY2rYfEOaI5YJ1XPI3pgY
          claim_id: c_LdWjiLyApgeiX_BmC2FfoR
          source_id: s_9tit1gxikl9J7wg_S9iKvb
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王桐 之父／母。
          source:
            id: s_9tit1gxikl9J7wg_S9iKvb
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 271115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271115&o=json
            external_identifier: CBDB:271115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bRgMZRH9w776ipvvdJJHX5
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_-96DpNMRR1IBNWEImAcmeu
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e43FUsetKWCi23ye3DLbaQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OpuA7BKWeXc552EldhkbXx
          claim_id: c_-96DpNMRR1IBNWEImAcmeu
          source_id: s_-vpEB8Z-ltUqgpBNdFMzdx
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王橒 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王橒 之父／母。
          source:
            id: s_-vpEB8Z-ltUqgpBNdFMzdx
            source_type: api_record
            title: 中国历代人物传记资料库：王橒（CBDB 271109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271109&o=json
            external_identifier: CBDB:271109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e43FUsetKWCi23ye3DLbaQ
        status: active
        display_name: 王橒
        merged_into_person_id: null
    - claim:
        id: c_wLDKZ-PLSdEX8HaRp81EAf
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQaNt5E49dd91bpPLHPWVC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__c7nT4y2Wm45n-U0RGhBgK
          claim_id: c_wLDKZ-PLSdEX8HaRp81EAf
          source_id: s_ScQgqNY8EXWUda5ua0vVFR
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王椿 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王椿 之父／母。
          source:
            id: s_ScQgqNY8EXWUda5ua0vVFR
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 271114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271114&o=json
            external_identifier: CBDB:271114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQaNt5E49dd91bpPLHPWVC
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_3Y3V1qfSDn5pNai9ST95kp
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gfDiB39atm3fJTavP3p14z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mrFYspz2wjosk4-k0IjIWr
          claim_id: c_3Y3V1qfSDn5pNai9ST95kp
          source_id: s_-IN7pexX0Le_G6uGubKWLm
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王欒 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王欒 之父／母。
          source:
            id: s_-IN7pexX0Le_G6uGubKWLm
            source_type: api_record
            title: 中国历代人物传记资料库：王欒（CBDB 271119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271119&o=json
            external_identifier: CBDB:271119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gfDiB39atm3fJTavP3p14z
        status: active
        display_name: 王欒
        merged_into_person_id: null
    - claim:
        id: c_x9sU1mFgfmQdPlF--I2ket
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jL6KBQG85w9ULK5CRSbNz5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0UXktvATLeln23a8290DlU
          claim_id: c_x9sU1mFgfmQdPlF--I2ket
          source_id: s_zUCV8w1UP8_-IxmrVe-WLa
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王樾 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王樾 之父／母。
          source:
            id: s_zUCV8w1UP8_-IxmrVe-WLa
            source_type: api_record
            title: 中国历代人物传记资料库：王樾（CBDB 271112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271112&o=json
            external_identifier: CBDB:271112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jL6KBQG85w9ULK5CRSbNz5
        status: active
        display_name: 王樾
        merged_into_person_id: null
    - claim:
        id: c_xwA7DlTmEYIIwr9eTyxmsL
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k2iJtrHCVFRVP3NTzpJXMH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zknCAC5S4ZEVdTZrx4cALD
          claim_id: c_xwA7DlTmEYIIwr9eTyxmsL
          source_id: s_uLn_LEmM4PP9DqwZwq1w-o
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王榦 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王榦 之父／母。
          source:
            id: s_uLn_LEmM4PP9DqwZwq1w-o
            source_type: api_record
            title: 中国历代人物传记资料库：王榦（CBDB 271113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271113&o=json
            external_identifier: CBDB:271113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k2iJtrHCVFRVP3NTzpJXMH
        status: active
        display_name: 王榦
        merged_into_person_id: null
    - claim:
        id: c_pBXW7IwTDNSDd4hbub8RZI
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_bPwn-LLDDLdF8ZidRTyw
          claim_id: c_pBXW7IwTDNSDd4hbub8RZI
          source_id: s_ARltkL7FOlUphEvhw7T1eX
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王杞 与 王材 为同胞（CBDB 记「弟」），王材 之父／母即 王杞 之父／母。
          source:
            id: s_ARltkL7FOlUphEvhw7T1eX
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 271107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json
            external_identifier: CBDB:271107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQm8vRe6yfwU4PQxcEpNLQ
        status: active
        display_name: 王杞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。弘治十五年進士，籍贯望江。（中国历代人物传记资料库 CBDB 271103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5dqAK3hD6kewBU4JbJcy31 | 王材 | accepted |
| children | p_93w6EWjQAuF7ETZJATszKb | 王松 | accepted |
| children | p_HYniqG475BGY8GGcPu1Mtp | 王櫟 | accepted |
| children | p_RBTTTqHW4fncDHKEq5R5nj | 王楠 | accepted |
| children | p_SJvN4BrFh4PvLcwBPGyYHk | 王楷 | accepted |
| children | p_bDFgBZLmWhHrk46Gz9idH4 | 王桓 | accepted |
| children | p_bRgMZRH9w776ipvvdJJHX5 | 王桐 | accepted |
| children | p_e43FUsetKWCi23ye3DLbaQ | 王橒 | accepted |
| children | p_eQaNt5E49dd91bpPLHPWVC | 王椿 | accepted |
| children | p_gfDiB39atm3fJTavP3p14z | 王欒 | accepted |
| children | p_jL6KBQG85w9ULK5CRSbNz5 | 王樾 | accepted |
| children | p_k2iJtrHCVFRVP3NTzpJXMH | 王榦 | accepted |
| children | p_sQm8vRe6yfwU4PQxcEpNLQ | 王杞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 271114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271114&o=json)
- [中国历代人物传记资料库：王榦（CBDB 271113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271113&o=json)
- [中国历代人物传记资料库：王桓（CBDB 271111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json)
- [中国历代人物传记资料库：王楷（CBDB 271110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271110&o=json)
- [中国历代人物传记资料库：王櫟（CBDB 271117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271117&o=json)
- [中国历代人物传记资料库：王欒（CBDB 271119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271119&o=json)
- [中国历代人物传记资料库：王楠（CBDB 271118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json)
- [中国历代人物传记资料库：王杞（CBDB 271107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 271103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json)
- [中国历代人物传记资料库：王松（CBDB 271108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json)
- [中国历代人物传记资料库：王桐（CBDB 271115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271115&o=json)
- [中国历代人物传记资料库：王樾（CBDB 271112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271112&o=json)
- [中国历代人物传记资料库：王橒（CBDB 271109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271109&o=json)
