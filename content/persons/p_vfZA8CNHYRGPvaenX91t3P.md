---
schema: wang-person/v1
id: p_vfZA8CNHYRGPvaenX91t3P
status: active
merged_into: null
display_name: 王德
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d95WdxVmj3VUtiZBvS67b6
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piMZpc6wL1MdeunjKpTY3r
          claim_id: c_d95WdxVmj3VUtiZBvS67b6
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
          stance: supports
          locator: CBDB:37768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37768）
          source: &a1
            id: s_i3EJTrgUSXi43vgBkmwbqb
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 37768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37768&o=json
            external_identifier: CBDB:37768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SRuPvLizej3ybzTuv2gygE
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WsVBizL7rZNCoSDSBtqcz8
          claim_id: c_SRuPvLizej3ybzTuv2gygE
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uHDwDccvg1VN9ZJMCjxngu
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1154年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxbEG6a5K9kd4hpGJJe5gt
          claim_id: c_uHDwDccvg1VN9ZJMCjxngu
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxocVPRbG3Ae9CmraNZHoa
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德（1087年—1154年），宋人物。籍贯通遠軍，入仕軍功補授(軍功)，曾任觀察使、承宣使、進武校尉。（中国历代人物传记资料库 CBDB 37768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ou6i0ewf3LIwzTV2WkBeW8
          claim_id: c_LxocVPRbG3Ae9CmraNZHoa
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
          stance: supports
          locator: CBDB:37768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iBJiZwRcybO-F_v9xFcFKP
        subject_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OJM1c7iHOQABWVj5_Bu8bp
          claim_id: c_iBJiZwRcybO-F_v9xFcFKP
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1197：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rvhkg7HeRM8H4DfqFM8DBt
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 37796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json
            external_identifier: CBDB:37796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9zMW97J7BAC3TDNz5VbWCT
        status: active
        display_name: 王達
        merged_into_person_id: null
  children:
    - claim:
        id: c_uC85JQB_gz6MapndvMDHR9
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JMwztXuJpn7tLK5ZwtCDp1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gqik-ohaJCVIOs-b3t4lQl
          claim_id: c_uC85JQB_gz6MapndvMDHR9
          source_id: s_CD1jKxGV1k24LYN8fGMPQs
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CD1jKxGV1k24LYN8fGMPQs
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 38419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38419&o=json
            external_identifier: CBDB:38419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JMwztXuJpn7tLK5ZwtCDp1
        status: active
        display_name: 王琪
        merged_into_person_id: null
    - claim:
        id: c_qJJGNJB6aff_Gg_ZeBb1_K
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_skvKr4qmtq2k4txSa5VE5H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yqdRDyEil3LIZIXPJQjUcC
          claim_id: c_qJJGNJB6aff_Gg_ZeBb1_K
          source_id: s_agVFDNq9CJfeLL5By6d1Rf
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_agVFDNq9CJfeLL5By6d1Rf
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 119715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119715&o=json
            external_identifier: CBDB:119715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_skvKr4qmtq2k4txSa5VE5H
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_6dH4ASXx-l1IkK74oyEqvg
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2h1PzBnAgh7Yte8MG1G47i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WtMWzD7eIZkIxcP3XfM7Jw
          claim_id: c_6dH4ASXx-l1IkK74oyEqvg
          source_id: s_R8m6kFsayd16WiyXBGLtr-
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_R8m6kFsayd16WiyXBGLtr-
            source_type: api_record
            title: 中国历代人物传记资料库：王璝（CBDB 563035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563035&o=json
            external_identifier: CBDB:563035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2h1PzBnAgh7Yte8MG1G47i
        status: active
        display_name: 王璝
        merged_into_person_id: null
    - claim:
        id: c_GF3AUrLxz02dU9rEt3mTlq
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VZomg7mDjAPLXwTN2Deew
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_l3ZnVGBXw7lRw25UtA_hrP
          claim_id: c_GF3AUrLxz02dU9rEt3mTlq
          source_id: s_-y1N5zLCR85gcaBBnE4QTW
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_-y1N5zLCR85gcaBBnE4QTW
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 563037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563037&o=json
            external_identifier: CBDB:563037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3VZomg7mDjAPLXwTN2Deew
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_RtPe777nWJGQmuYUUrrpNb
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nyde22DrwCPsJbHshCkH4h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6uA2mzx4k_X5hF25w3tLah
          claim_id: c_RtPe777nWJGQmuYUUrrpNb
          source_id: s_8MuFlfPar2ozVIDmMAJd8m
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8MuFlfPar2ozVIDmMAJd8m
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 483489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483489&o=json
            external_identifier: CBDB:483489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nyde22DrwCPsJbHshCkH4h
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_6UO-3M7iJu6rWhfoc25Wtk
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YxXLHebFgkJfGbAfuPGMRK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H4AhYSOioVkPIty-lVfyz6
          claim_id: c_6UO-3M7iJu6rWhfoc25Wtk
          source_id: s_1VkaIO2ADsbmpwDnnP8MZ1
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1VkaIO2ADsbmpwDnnP8MZ1
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 563038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563038&o=json
            external_identifier: CBDB:563038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YxXLHebFgkJfGbAfuPGMRK
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_p5-eDOVDkRGWmTZPv-_YJh
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cxi9DJbK4X5weytcPQQB7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PWSeEBNRCe0HdrhaRx14g3
          claim_id: c_p5-eDOVDkRGWmTZPv-_YJh
          source_id: s_PiO42Qec9yD6RrdEInl4Jw
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_PiO42Qec9yD6RrdEInl4Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王琠（CBDB 563041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563041&o=json
            external_identifier: CBDB:563041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cxi9DJbK4X5weytcPQQB7R
        status: active
        display_name: 王琠
        merged_into_person_id: null
    - claim:
        id: c_Okn226a75uzHILN0pjw7Y6
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kob9sUCuBGE25t3JJLw3Ck
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xZL7qSKhbSYA9sklZpaePZ
          claim_id: c_Okn226a75uzHILN0pjw7Y6
          source_id: s_1BZB0TK_MvkyJZiYmJNIBR
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1BZB0TK_MvkyJZiYmJNIBR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑻（CBDB 563043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563043&o=json
            external_identifier: CBDB:563043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kob9sUCuBGE25t3JJLw3Ck
        status: active
        display_name: 王瑻
        merged_into_person_id: null
    - claim:
        id: c_p8gtpskb-p8zGJVfLxjuQ2
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mMphVbZFFDJBVh8QKPNB6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BQ9pMfVmBzmm8hOV5xY8-L
          claim_id: c_p8gtpskb-p8zGJVfLxjuQ2
          source_id: s_yrq7wA93a1HZJNrGnHDypt
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_yrq7wA93a1HZJNrGnHDypt
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 469940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469940&o=json
            external_identifier: CBDB:469940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mMphVbZFFDJBVh8QKPNB6V
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_hhAM51Clku_61xjolyhE7s
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rFJb884nc9Z8KvwE3XSutH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cwXaNcfUN3SU4X0gX-8gyU
          claim_id: c_hhAM51Clku_61xjolyhE7s
          source_id: s_UFrN6RCcIGtqYSSfen25rr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFrN6RCcIGtqYSSfen25rr
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 468740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468740&o=json
            external_identifier: CBDB:468740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFJb884nc9Z8KvwE3XSutH
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_d4tt0rEVZKIr9Qo4PGR_cZ
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uGwBX94rp8FimwcLAJQAFN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tj1k2PfPIvFL_lb4DLp0zn
          claim_id: c_d4tt0rEVZKIr9Qo4PGR_cZ
          source_id: s_LGpBh1HinsQtZwD4ncffKM
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_LGpBh1HinsQtZwD4ncffKM
            source_type: api_record
            title: 中国历代人物传记资料库：王玫（CBDB 563044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563044&o=json
            external_identifier: CBDB:563044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uGwBX94rp8FimwcLAJQAFN
        status: active
        display_name: 王玫
        merged_into_person_id: null
    - claim:
        id: c_1SBzcFa7gvmrBLEv9tkZdn
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yFi7MXFeidwv4kDwkJRh44
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X1z906NIku4aPjETCW_0qh
          claim_id: c_1SBzcFa7gvmrBLEv9tkZdn
          source_id: s_f9yle9T0-MHS8z493z6icP
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_f9yle9T0-MHS8z493z6icP
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 563042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563042&o=json
            external_identifier: CBDB:563042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yFi7MXFeidwv4kDwkJRh44
        status: active
        display_name: 王琰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sUczdk1x5J-oAhGIrR6XgE
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mXp5TmSYvSfimtvO-SoRro
          claim_id: c_sUczdk1x5J-oAhGIrR6XgE
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1193：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wRHyMYxZqN4HHfPakjQxEN
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 37786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37786&o=json
            external_identifier: CBDB:37786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HqotrCmsQrKUu6nT3a74CK
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_NpjESgB_L-cvpfUAf1gMH4
        subject_person_id: p_jzoHdkm3G8KBKVV3oWtFDE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWTL1YkUU6SmSRfKG6Ivp-
          claim_id: c_NpjESgB_L-cvpfUAf1gMH4
          source_id: s_DzLjBnKnCWDYYK7tQM8DCx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1195：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DzLjBnKnCWDYYK7tQM8DCx
            source_type: api_record
            title: 中国历代人物传记资料库：王忠立（CBDB 37791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37791&o=json
            external_identifier: CBDB:37791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_jzoHdkm3G8KBKVV3oWtFDE
        status: active
        display_name: 王忠立
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 1087年 | accepted |
| death.date | 1154年 | accepted |
| bio.summary | 王德（1087年—1154年），宋人物。籍贯通遠軍，入仕軍功補授(軍功)，曾任觀察使、承宣使、進武校尉。（中国历代人物传记资料库 CBDB 37768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9zMW97J7BAC3TDNz5VbWCT | 王達 | accepted |
| children | p_JMwztXuJpn7tLK5ZwtCDp1 | 王琪 | accepted |
| children | p_skvKr4qmtq2k4txSa5VE5H | 王順 | accepted |
| children | p_2h1PzBnAgh7Yte8MG1G47i | 王璝 | accepted |
| children | p_3VZomg7mDjAPLXwTN2Deew | 王瑛 | accepted |
| children | p_Nyde22DrwCPsJbHshCkH4h | 王璞 | accepted |
| children | p_YxXLHebFgkJfGbAfuPGMRK | 王璋 | accepted |
| children | p_cxi9DJbK4X5weytcPQQB7R | 王琠 | accepted |
| children | p_kob9sUCuBGE25t3JJLw3Ck | 王瑻 | accepted |
| children | p_mMphVbZFFDJBVh8QKPNB6V | 王瓚 | accepted |
| children | p_rFJb884nc9Z8KvwE3XSutH | 王珙 | accepted |
| children | p_uGwBX94rp8FimwcLAJQAFN | 王玫 | accepted |
| children | p_yFi7MXFeidwv4kDwkJRh44 | 王琰 | accepted |
| ancestors | p_HqotrCmsQrKUu6nT3a74CK | 王永 | accepted |
| ancestors | p_jzoHdkm3G8KBKVV3oWtFDE | 王忠立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 37796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json)
- [中国历代人物传记资料库：王德（CBDB 37768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37768&o=json)
- [中国历代人物传记资料库：王珙（CBDB 468740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468740&o=json)
- [中国历代人物传记资料库：王璝（CBDB 563035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563035&o=json)
- [中国历代人物传记资料库：王瑻（CBDB 563043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563043&o=json)
- [中国历代人物传记资料库：王玫（CBDB 563044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563044&o=json)
- [中国历代人物传记资料库：王璞（CBDB 483489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483489&o=json)
- [中国历代人物传记资料库：王琪（CBDB 38419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38419&o=json)
- [中国历代人物传记资料库：王順（CBDB 119715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119715&o=json)
- [中国历代人物传记资料库：王琠（CBDB 563041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563041&o=json)
- [中国历代人物传记资料库：王琰（CBDB 563042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563042&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 563037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563037&o=json)
- [中国历代人物传记资料库：王永（CBDB 37786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37786&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 469940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469940&o=json)
- [中国历代人物传记资料库：王璋（CBDB 563038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563038&o=json)
- [中国历代人物传记资料库：王忠立（CBDB 37791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37791&o=json)
