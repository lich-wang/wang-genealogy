---
schema: wang-person/v1
id: p_ShbQcKbhPZJtYL14xZXyTR
status: active
merged_into: null
display_name: 王佩
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sW5HGfEVQ5UQPP1Y3pyyuD
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CvvRRvvfr85ZuXVYrURc1E
          claim_id: c_sW5HGfEVQ5UQPP1Y3pyyuD
          source_id: s_wm2ikfL3duojoSSPK4pyUC
          stance: supports
          locator: CBDB:202809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202809）
          source: &a1
            id: s_wm2ikfL3duojoSSPK4pyUC
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 202809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json
            external_identifier: CBDB:202809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R8393u9V6557EWTShpuBbv
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VvAMdhg7vvwP7HzAFDFQb
          claim_id: c_R8393u9V6557EWTShpuBbv
          source_id: s_wm2ikfL3duojoSSPK4pyUC
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
        id: c_bCAEUZZD6v5ZCW4dyzTQfo
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩（生于1499年），明人物。明清進士進士，籍贯文安，入仕進士，曾任郎中、員外郎、知府。（中国历代人物传记资料库 CBDB 202809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hv9YQ9K8w1E9LJsETQqkKW
          claim_id: c_bCAEUZZD6v5ZCW4dyzTQfo
          source_id: s_wm2ikfL3duojoSSPK4pyUC
          stance: supports
          locator: CBDB:202809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fRXUHSyGtBaF-bL5ACyknY
        subject_person_id: p_cDjtDCi8h6mSG4Cms93AKT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgE5ADHUh6omf2-6fLJ6gn
          claim_id: c_fRXUHSyGtBaF-bL5ACyknY
          source_id: s_sC1ZqLTT81hUx4vovz4x5G
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sC1ZqLTT81hUx4vovz4x5G
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 294953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json
            external_identifier: CBDB:294953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cDjtDCi8h6mSG4Cms93AKT
        status: active
        display_name: 王深
        merged_into_person_id: null
  children:
    - claim:
        id: c_sTspnGh5ZLmDsH_4kfnhBe
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bxhtYQ9E8JH99TgLXQgD1K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJEsLo32QiXsfOUNgoqyOL
          claim_id: c_sTspnGh5ZLmDsH_4kfnhBe
          source_id: s_2BQQQuAJbNuujs3BEbjUXw
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2BQQQuAJbNuujs3BEbjUXw
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 294964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json
            external_identifier: CBDB:294964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bxhtYQ9E8JH99TgLXQgD1K
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
    - claim:
        id: c_A3w1KftfTd1WgQL290CinE
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w39jjd3JxxSiu1jw1L8DFd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbbw_tTyLBxGbnUX_JrW75
          claim_id: c_A3w1KftfTd1WgQL290CinE
          source_id: s_NugpXN1hXqAaJE8FxaxG1C
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NugpXN1hXqAaJE8FxaxG1C
            source_type: api_record
            title: 中国历代人物传记资料库：王惟玄（CBDB 294965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294965&o=json
            external_identifier: CBDB:294965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w39jjd3JxxSiu1jw1L8DFd
        status: active
        display_name: 王惟玄
        merged_into_person_id: null
    - claim:
        id: c_0DQxK_qM7qgLRsKvyejhIP
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ct25pKmaZJo6zvVomNZ3sE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pL3XI4dqLQQQS1EbkwzPCG
          claim_id: c_0DQxK_qM7qgLRsKvyejhIP
          source_id: s_5zLAcCBMbtGv2spLzL72AC
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5zLAcCBMbtGv2spLzL72AC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祇（CBDB 294966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294966&o=json
            external_identifier: CBDB:294966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Ct25pKmaZJo6zvVomNZ3sE
        status: active
        display_name: 王惟祇
        merged_into_person_id: null
    - claim:
        id: c_GLq1dEAbS4xC_UbEpZ7bVv
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dDHYnGAnK1DYGbrFYBFLLA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AYFdSTKR73Rx1ww05GNbtd
          claim_id: c_GLq1dEAbS4xC_UbEpZ7bVv
          source_id: s_ZwDnTm7PfHoS5L6eP5T5gF
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZwDnTm7PfHoS5L6eP5T5gF
            source_type: api_record
            title: 中国历代人物传记资料库：王惟時（CBDB 294963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294963&o=json
            external_identifier: CBDB:294963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dDHYnGAnK1DYGbrFYBFLLA
        status: active
        display_name: 王惟時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_eFbt9BWPYmoaBZLPRKl6F6
        subject_person_id: p_YSNbFAUDK8xiiXfhU6tQEw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7uclxg5OhitLihNE3Po-ic
          claim_id: c_eFbt9BWPYmoaBZLPRKl6F6
          source_id: s_frrPLFFU4ucpeDwcuWewC9
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_frrPLFFU4ucpeDwcuWewC9
            source_type: api_record
            title: 中国历代人物传记资料库：王翺（CBDB 294952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294952&o=json
            external_identifier: CBDB:294952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YSNbFAUDK8xiiXfhU6tQEw
        status: active
        display_name: 王翺
        merged_into_person_id: null
    - claim:
        id: c_Rtqco8g_rrRAzNLDPM43c0
        subject_person_id: p_zsDXFxFD1wGKxUmqu43tAu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGqwHS4EdxzfyLIivf1ri_
          claim_id: c_Rtqco8g_rrRAzNLDPM43c0
          source_id: s_VbxPeyZuXpGU1oH9M5bvQQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VbxPeyZuXpGU1oH9M5bvQQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 294950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294950&o=json
            external_identifier: CBDB:294950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zsDXFxFD1wGKxUmqu43tAu
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_4djINIL1J6eG7KwIh3u1Pk
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EuRd96THGYk3sKLAvBNXcu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWz6UwqLu8y_zpWjcVZazW
          claim_id: c_4djINIL1J6eG7KwIh3u1Pk
          source_id: s_9zqVDWCYtmKaFs87yCBPwo
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9zqVDWCYtmKaFs87yCBPwo
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 294967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294967&o=json
            external_identifier: CBDB:294967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EuRd96THGYk3sKLAvBNXcu
        status: active
        display_name: 王陞
        merged_into_person_id: null
  other:
    - claim:
        id: c_hYF7I56lJFMB507GxTwpMV
        subject_person_id: p_FPPqqpmpr1dQzrNM4f842m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Oq6XuFiSQWDCUeDY_7Nyu4
          claim_id: c_hYF7I56lJFMB507GxTwpMV
          source_id: s_7rMAm9MWhyPOJA21KzwA0x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7rMAm9MWhyPOJA21KzwA0x
            source_type: api_record
            title: 中国历代人物传记资料库：王珂（CBDB 294957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json
            external_identifier: CBDB:294957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FPPqqpmpr1dQzrNM4f842m
        status: active
        display_name: 王珂
        merged_into_person_id: null
    - claim:
        id: c_lb4N0NPyr_TFdcUnY1M9qz
        subject_person_id: p_RCvrnA8oUM8obQJHS1AyUb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Q5ywM0mJaDLC3rJ4jd2ka
          claim_id: c_lb4N0NPyr_TFdcUnY1M9qz
          source_id: s_JEJF94WCYHrfkrKutwlNdF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JEJF94WCYHrfkrKutwlNdF
            source_type: api_record
            title: 中国历代人物传记资料库：王玻（CBDB 294960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294960&o=json
            external_identifier: CBDB:294960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RCvrnA8oUM8obQJHS1AyUb
        status: active
        display_name: 王玻
        merged_into_person_id: null
    - claim:
        id: c_CLNzt1OGaIesrYo3zi2Og_
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jrznE4b26e5BrcocqTd29S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wp0Tit5tlpeaqJSliCW2Sm
          claim_id: c_CLNzt1OGaIesrYo3zi2Og_
          source_id: s_w5Rp9jhn5rFoJZ1wlXKRwZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w5Rp9jhn5rFoJZ1wlXKRwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 294958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294958&o=json
            external_identifier: CBDB:294958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jrznE4b26e5BrcocqTd29S
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_uFocuomV42pAmkxJlSJn1h
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n2oTZTtv7eB89Qsr3D1F47
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYx79scwA5vgKj4a51UIGA
          claim_id: c_uFocuomV42pAmkxJlSJn1h
          source_id: s_auAE2ntc7MzfU-4KThGe7x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_auAE2ntc7MzfU-4KThGe7x
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 294961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json
            external_identifier: CBDB:294961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n2oTZTtv7eB89Qsr3D1F47
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_QJ9SEWQuGAj7t6ELL1FpLA
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rPriaqYVjKQYmfTe7ujnCw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OHPQr52xKN9fIP6YY_C332
          claim_id: c_QJ9SEWQuGAj7t6ELL1FpLA
          source_id: s_6o1cQQCIfrONYqmaZNPmL3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202809 王佩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6o1cQQCIfrONYqmaZNPmL3
            source_type: api_record
            title: 中国历代人物传记资料库：王儇（CBDB 294959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json
            external_identifier: CBDB:294959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rPriaqYVjKQYmfTe7ujnCw
        status: active
        display_name: 王儇
        merged_into_person_id: null
---

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | 王佩（生于1499年），明人物。明清進士進士，籍贯文安，入仕進士，曾任郎中、員外郎、知府。（中国历代人物传记资料库 CBDB 202809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cDjtDCi8h6mSG4Cms93AKT | 王深 | accepted |
| children | p_bxhtYQ9E8JH99TgLXQgD1K | 王惟幾 | accepted |
| children | p_w39jjd3JxxSiu1jw1L8DFd | 王惟玄 | accepted |
| children | p_Ct25pKmaZJo6zvVomNZ3sE | 王惟祇 | accepted |
| children | p_dDHYnGAnK1DYGbrFYBFLLA | 王惟時 | accepted |
| ancestors | p_YSNbFAUDK8xiiXfhU6tQEw | 王翺 | accepted |
| ancestors | p_zsDXFxFD1wGKxUmqu43tAu | 王輔 | accepted |
| descendants | p_EuRd96THGYk3sKLAvBNXcu | 王陞 | accepted |
| other | p_FPPqqpmpr1dQzrNM4f842m | 王珂 | accepted |
| other | p_RCvrnA8oUM8obQJHS1AyUb | 王玻 | accepted |
| other | p_jrznE4b26e5BrcocqTd29S | 王璞 | accepted |
| other | p_n2oTZTtv7eB89Qsr3D1F47 | 王价 | accepted |
| other | p_rPriaqYVjKQYmfTe7ujnCw | 王儇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翺（CBDB 294952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294952&o=json)
- [中国历代人物传记资料库：王玻（CBDB 294960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294960&o=json)
- [中国历代人物传记资料库：王輔（CBDB 294950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294950&o=json)
- [中国历代人物传记资料库：王价（CBDB 294961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json)
- [中国历代人物传记资料库：王珂（CBDB 294957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294957&o=json)
- [中国历代人物传记资料库：王佩（CBDB 202809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json)
- [中国历代人物传记资料库：王璞（CBDB 294958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294958&o=json)
- [中国历代人物传记资料库：王深（CBDB 294953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294953&o=json)
- [中国历代人物传记资料库：王陞（CBDB 294967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294967&o=json)
- [中国历代人物传记资料库：王惟幾（CBDB 294964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json)
- [中国历代人物传记资料库：王惟祇（CBDB 294966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294966&o=json)
- [中国历代人物传记资料库：王惟時（CBDB 294963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294963&o=json)
- [中国历代人物传记资料库：王惟玄（CBDB 294965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294965&o=json)
- [中国历代人物传记资料库：王儇（CBDB 294959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294959&o=json)
