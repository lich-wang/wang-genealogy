---
schema: wang-person/v1
id: p_35PzL233nqJ85Q2BX1Q5dA
status: active
merged_into: null
display_name: 王良柱
cbdb_id: 202803
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WZvu3CM5pXarAkwN5p9W1P
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良柱（生于1501年），明人物。嘉靖十一年進士，籍贯南安，入仕進士，曾任工部郎中、工部員外郎、吏部觀政。（中国历代人物传记资料库 CBDB 202803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KmM7cG4xFlmTGsID8oh-IL
          claim_id: c_WZvu3CM5pXarAkwN5p9W1P
          source_id: s_Mv5dxPVUorJgLKNwkRHiB4
          stance: supports
          locator: CBDB:202803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mv5dxPVUorJgLKNwkRHiB4
            source_type: api_record
            title: 中国历代人物传记资料库：王良柱（CBDB 202803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202803&o=json
            external_identifier: CBDB:202803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mUoE6izMU3bQJSCh92US6n
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1501-01-01
            latest: 1501-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aHmqVjBFj9Hn9FWeKrMuPd
          claim_id: c_mUoE6izMU3bQJSCh92US6n
          source_id: s_Mv5dxPVUorJgLKNwkRHiB4
          stance: supports
          locator: CBDB:202803
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1501
          source:
            id: s_Mv5dxPVUorJgLKNwkRHiB4
            source_type: api_record
            title: 中国历代人物传记资料库：王良柱（CBDB 202803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202803&o=json
            external_identifier: CBDB:202803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PaE3qhceN5gygeoQLmnVTS
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5by87YEdJKheRE8aMJXSX7
          claim_id: c_PaE3qhceN5gygeoQLmnVTS
          source_id: s_Mv5dxPVUorJgLKNwkRHiB4
          stance: supports
          locator: CBDB:202803
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1501
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iaHod77ipD-CB0W62c1LbI
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LwC0nbVaz3nfWZf0zd8KQM
          claim_id: c_iaHod77ipD-CB0W62c1LbI
          source_id: s_KNfqCFvx4suPRQMFekJ9z8
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KNfqCFvx4suPRQMFekJ9z8
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 294712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294712&o=json
            external_identifier: CBDB:294712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9nEN1wcMurxxo4Z5YaVJEh
        status: active
        display_name: 王海
        merged_into_person_id: null
  children:
    - claim:
        id: c_hJFtglx8_t5YvPWMBjcOJz
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_25bxYkxDg88jPw2BmTPRrX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WrInQtVbYfzcx3MTcZHkjS
          claim_id: c_hJFtglx8_t5YvPWMBjcOJz
          source_id: s_KRuFoeGPog9Di4xqvUeXhb
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KRuFoeGPog9Di4xqvUeXhb
            source_type: api_record
            title: 中国历代人物传记资料库：王列（CBDB 294720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294720&o=json
            external_identifier: CBDB:294720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_25bxYkxDg88jPw2BmTPRrX
        status: active
        display_name: 王列
        merged_into_person_id: null
    - claim:
        id: c_lwnB4H_WQVo3COcEtWae6c
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4GriEgrqEP5KnKX7db7riC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DORvnxKnFhM19VUT909v8I
          claim_id: c_lwnB4H_WQVo3COcEtWae6c
          source_id: s_ZgECzcvM1vC5yYYVBBBTCQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZgECzcvM1vC5yYYVBBBTCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王點（CBDB 294719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294719&o=json
            external_identifier: CBDB:294719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4GriEgrqEP5KnKX7db7riC
        status: active
        display_name: 王點
        merged_into_person_id: null
    - claim:
        id: c_e-TW8_PSVwtFTH76ot9JdW
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uZkPDwHNoaSKndJm6FyMgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzBQJAMQjROGcNkNavDYCs
          claim_id: c_e-TW8_PSVwtFTH76ot9JdW
          source_id: s_aaAm1QC8BYxuo8sm1u9nf4
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aaAm1QC8BYxuo8sm1u9nf4
            source_type: api_record
            title: 中国历代人物传记资料库：王炤（CBDB 294718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294718&o=json
            external_identifier: CBDB:294718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uZkPDwHNoaSKndJm6FyMgQ
        status: active
        display_name: 王炤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dvlqxIO10dsowdwxGcmuv1
        subject_person_id: p_gVSd52s65yGFeVvBTqbk7q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCMM0JK8ARoZE6BkmqUDt2
          claim_id: c_dvlqxIO10dsowdwxGcmuv1
          source_id: s_Eg5KZTbBEajUmLESaQuXxm
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Eg5KZTbBEajUmLESaQuXxm
            source_type: api_record
            title: 中国历代人物传记资料库：王錞（CBDB 294711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294711&o=json
            external_identifier: CBDB:294711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gVSd52s65yGFeVvBTqbk7q
        status: active
        display_name: 王錞
        merged_into_person_id: null
    - claim:
        id: c_026tZKUweOw8rG2KHudUE9
        subject_person_id: p_tUUJLRTLozjhgRk2GuHbbu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__mam5bYv4jRsKP0tU_cv4w
          claim_id: c_026tZKUweOw8rG2KHudUE9
          source_id: s_BDcXHrEWGRFHM9nkXiRv5B
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BDcXHrEWGRFHM9nkXiRv5B
            source_type: api_record
            title: 中国历代人物传记资料库：王尚瑀（CBDB 294710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294710&o=json
            external_identifier: CBDB:294710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tUUJLRTLozjhgRk2GuHbbu
        status: active
        display_name: 王尚瑀
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_PEoFAH4wPDT3QJClD7ivrQ
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JyQurP22g37oU9bmwXM9Eq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_rx8nPUNeSpa3qou53Xyz
          claim_id: c_PEoFAH4wPDT3QJClD7ivrQ
          source_id: s_B65mxtnFJKabJQPmjMpx5F
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B65mxtnFJKabJQPmjMpx5F
            source_type: api_record
            title: 中国历代人物传记资料库：王繼曾（CBDB 294731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294731&o=json
            external_identifier: CBDB:294731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JyQurP22g37oU9bmwXM9Eq
        status: active
        display_name: 王繼曾
        merged_into_person_id: null
    - claim:
        id: c_Ioj-LR2jxH3sMOeG0K6ESP
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BFDV7acnCdY6xJ5FNvZKDJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QArHPpbJfl1npm2cdXCzLe
          claim_id: c_Ioj-LR2jxH3sMOeG0K6ESP
          source_id: s_EJjg7n8GF9A8XPRGBhYj5p
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EJjg7n8GF9A8XPRGBhYj5p
            source_type: api_record
            title: 中国历代人物传记资料库：王墀京（CBDB 294725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294725&o=json
            external_identifier: CBDB:294725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BFDV7acnCdY6xJ5FNvZKDJ
        status: active
        display_name: 王墀京
        merged_into_person_id: null
    - claim:
        id: c_VcG3-dsRDvIr-_vojTpQRr
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f4JuEaK4LNhkn4Zgbm74PZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBe-PmiWIZFNZUagpldt8L
          claim_id: c_VcG3-dsRDvIr-_vojTpQRr
          source_id: s_4ZqVwkFVVrKzjfbAGTKmrX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4ZqVwkFVVrKzjfbAGTKmrX
            source_type: api_record
            title: 中国历代人物传记资料库：王堡京（CBDB 294726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294726&o=json
            external_identifier: CBDB:294726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_f4JuEaK4LNhkn4Zgbm74PZ
        status: active
        display_name: 王堡京
        merged_into_person_id: null
    - claim:
        id: c_hy7FiHuTYzFeVCadSTKaPL
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fWczF2jSL5FxnJaYaEq9Jv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5KBfOJRf7W-xhJaNuDrZHz
          claim_id: c_hy7FiHuTYzFeVCadSTKaPL
          source_id: s_Moa7zLz15Tz9Yk6rkLRBCw
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Moa7zLz15Tz9Yk6rkLRBCw
            source_type: api_record
            title: 中国历代人物传记资料库：王陞京（CBDB 294729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294729&o=json
            external_identifier: CBDB:294729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_fWczF2jSL5FxnJaYaEq9Jv
        status: active
        display_name: 王陞京
        merged_into_person_id: null
    - claim:
        id: c_8IWLSeyUtF8Bd5w_WplNXa
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hSn4qodg1L9JG29Qsj9HF7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eDZ8eKJqwAL8fnMdM1Wee0
          claim_id: c_8IWLSeyUtF8Bd5w_WplNXa
          source_id: s_aSi7uG8KQxGbgAziYNsPKf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aSi7uG8KQxGbgAziYNsPKf
            source_type: api_record
            title: 中国历代人物传记资料库：王基京（CBDB 294730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294730&o=json
            external_identifier: CBDB:294730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hSn4qodg1L9JG29Qsj9HF7
        status: active
        display_name: 王基京
        merged_into_person_id: null
    - claim:
        id: c_yZrXtXn9Pe1pQulcjp9P_L
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_smx239hSf1Hi4d72s9AyRz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJjhM4m-JqXpF3GMFi71Ma
          claim_id: c_yZrXtXn9Pe1pQulcjp9P_L
          source_id: s_FBj6jAMvHWu7d6L58wNs8v
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FBj6jAMvHWu7d6L58wNs8v
            source_type: api_record
            title: 中国历代人物传记资料库：王坤京（CBDB 294721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294721&o=json
            external_identifier: CBDB:294721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_smx239hSf1Hi4d72s9AyRz
        status: active
        display_name: 王坤京
        merged_into_person_id: null
    - claim:
        id: c_b22sBrTSXCA62CWhkous34
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sziDCoXrKTUefCn4kaJ4E8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZEnpoL0sZ6T0_s-K-aV3P1
          claim_id: c_b22sBrTSXCA62CWhkous34
          source_id: s_akrNxoN4sE8z3CwMFAqxAQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_akrNxoN4sE8z3CwMFAqxAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坊京（CBDB 294722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294722&o=json
            external_identifier: CBDB:294722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_sziDCoXrKTUefCn4kaJ4E8
        status: active
        display_name: 王坊京
        merged_into_person_id: null
    - claim:
        id: c_XbULSEgMceT2dWp8iX61vP
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uWS3ofLwxoYWjnRbSLuL1G
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_WkiEl67MRe-SH7NSJKWV
          claim_id: c_XbULSEgMceT2dWp8iX61vP
          source_id: s_7p2NtFNMKtWv7ncH6BosRG
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7p2NtFNMKtWv7ncH6BosRG
            source_type: api_record
            title: 中国历代人物传记资料库：王在京（CBDB 294723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294723&o=json
            external_identifier: CBDB:294723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uWS3ofLwxoYWjnRbSLuL1G
        status: active
        display_name: 王在京
        merged_into_person_id: null
    - claim:
        id: c_rbpAkc0I11JIM7dGpJ2tDx
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WLV64Ck8v3CgJLVH6Th9Nz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DjyyHZgM0SqWfZY9NJVnA
          claim_id: c_rbpAkc0I11JIM7dGpJ2tDx
          source_id: s_Hr6vXCN25B4pTy7yxrDYqX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hr6vXCN25B4pTy7yxrDYqX
            source_type: api_record
            title: 中国历代人物传记资料库：王亘京（CBDB 294727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294727&o=json
            external_identifier: CBDB:294727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_WLV64Ck8v3CgJLVH6Th9Nz
        status: active
        display_name: 王亘京
        merged_into_person_id: null
    - claim:
        id: c_4RuCYvN1cCEa4A6Zs2Spns
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ywFJ54QHDsobpcY9CXnv6f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w-qGgrW8pe8XKODsrHAQP_
          claim_id: c_4RuCYvN1cCEa4A6Zs2Spns
          source_id: s_X2DGErd3jHhDqrTsXtxH8Z
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X2DGErd3jHhDqrTsXtxH8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王觀京（CBDB 294724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294724&o=json
            external_identifier: CBDB:294724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ywFJ54QHDsobpcY9CXnv6f
        status: active
        display_name: 王觀京
        merged_into_person_id: null
  other: []
---

# 王良柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良柱（生于1501年），明人物。嘉靖十一年進士，籍贯南安，入仕進士，曾任工部郎中、工部員外郎、吏部觀政。（中国历代人物传记资料库 CBDB 202803） | accepted |
| birth.date | 1501年 | accepted |
| name.primary | 王良柱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9nEN1wcMurxxo4Z5YaVJEh | 王海 | accepted |
| children | p_25bxYkxDg88jPw2BmTPRrX | 王列 | accepted |
| children | p_4GriEgrqEP5KnKX7db7riC | 王點 | accepted |
| children | p_uZkPDwHNoaSKndJm6FyMgQ | 王炤 | accepted |
| ancestors | p_gVSd52s65yGFeVvBTqbk7q | 王錞 | accepted |
| ancestors | p_tUUJLRTLozjhgRk2GuHbbu | 王尚瑀 | accepted |
| descendants | p_JyQurP22g37oU9bmwXM9Eq | 王繼曾 | accepted |
| descendants | p_BFDV7acnCdY6xJ5FNvZKDJ | 王墀京 | accepted |
| descendants | p_f4JuEaK4LNhkn4Zgbm74PZ | 王堡京 | accepted |
| descendants | p_fWczF2jSL5FxnJaYaEq9Jv | 王陞京 | accepted |
| descendants | p_hSn4qodg1L9JG29Qsj9HF7 | 王基京 | accepted |
| descendants | p_smx239hSf1Hi4d72s9AyRz | 王坤京 | accepted |
| descendants | p_sziDCoXrKTUefCn4kaJ4E8 | 王坊京 | accepted |
| descendants | p_uWS3ofLwxoYWjnRbSLuL1G | 王在京 | accepted |
| descendants | p_WLV64Ck8v3CgJLVH6Th9Nz | 王亘京 | accepted |
| descendants | p_ywFJ54QHDsobpcY9CXnv6f | 王觀京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堡京（CBDB 294726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294726&o=json)
- [中国历代人物传记资料库：王墀京（CBDB 294725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294725&o=json)
- [中国历代人物传记资料库：王錞（CBDB 294711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294711&o=json)
- [中国历代人物传记资料库：王點（CBDB 294719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294719&o=json)
- [中国历代人物传记资料库：王坊京（CBDB 294722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294722&o=json)
- [中国历代人物传记资料库：王亘京（CBDB 294727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294727&o=json)
- [中国历代人物传记资料库：王觀京（CBDB 294724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294724&o=json)
- [中国历代人物传记资料库：王海（CBDB 294712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294712&o=json)
- [中国历代人物传记资料库：王基京（CBDB 294730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294730&o=json)
- [中国历代人物传记资料库：王繼曾（CBDB 294731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294731&o=json)
- [中国历代人物传记资料库：王坤京（CBDB 294721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294721&o=json)
- [中国历代人物传记资料库：王良柱（CBDB 202803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202803&o=json)
- [中国历代人物传记资料库：王列（CBDB 294720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294720&o=json)
- [中国历代人物传记资料库：王尚瑀（CBDB 294710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294710&o=json)
- [中国历代人物传记资料库：王陞京（CBDB 294729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294729&o=json)
- [中国历代人物传记资料库：王在京（CBDB 294723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294723&o=json)
- [中国历代人物传记资料库：王炤（CBDB 294718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294718&o=json)
