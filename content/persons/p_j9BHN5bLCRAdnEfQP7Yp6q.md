---
schema: wang-person/v1
id: p_j9BHN5bLCRAdnEfQP7Yp6q
status: active
merged_into: null
display_name: 王民順
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81L6Vo8JNJcEecPMnCN3vQ
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ruKYKL1q4zL22uUaTZfB6
          claim_id: c_81L6Vo8JNJcEecPMnCN3vQ
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: CBDB:205877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205877）
          source: &a1
            id: s_4ni9ypkhqH9bL97APqjeXx
            source_type: api_record
            title: 中国历代人物传记资料库：王民順（CBDB 205877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json
            external_identifier: CBDB:205877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UMsVF4eRnFCahhZaMBLwvx
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
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
        - id: cs_GTHweYnRXmVLs9yrFX8mTe
          claim_id: c_UMsVF4eRnFCahhZaMBLwvx
          source_id: s_4ni9ypkhqH9bL97APqjeXx
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
        id: c_Z71HXz57oSZF9Jm79uS9x5
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民順（生于1539年），明人物。隆慶五年進士，籍贯金谿，入仕進士，曾任御史、知縣、左布政使。（中国历代人物传记资料库 CBDB 205877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hUqD5WYrFdmBGYfHny92Zl
          claim_id: c_Z71HXz57oSZF9Jm79uS9x5
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: CBDB:205877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pfb24NHlWqS7YAmmSp3AtV
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8Pjk8ZhPs_CHhupNsfPeI
          claim_id: c_Pfb24NHlWqS7YAmmSp3AtV
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-8o6l6pOUwar-2kSLzBVyi
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2GV378NyKPJVrNj6GrUdt7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NhIbdcuNrkyzMz08LJ7Cq
          claim_id: c_-8o6l6pOUwar-2kSLzBVyi
          source_id: s_DtoY72s2oA-vxHoJivOGuF
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DtoY72s2oA-vxHoJivOGuF
            source_type: api_record
            title: 中国历代人物传记资料库：鄒氏(王民順妻)（CBDB 210117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210117&o=json
            external_identifier: CBDB:210117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2GV378NyKPJVrNj6GrUdt7
        status: active
        display_name: 鄒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KoneCsjjPoA-GN7LNhWjX6
        subject_person_id: p_yv8SGEh1yCP849cH7azrtA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7SdWDzReBAAZ54EET2oaS
          claim_id: c_KoneCsjjPoA-GN7LNhWjX6
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yv8SGEh1yCP849cH7azrtA
        status: active
        display_name: 王斯立
        merged_into_person_id: null
    - claim:
        id: c_eHQZYbxEyeNYoVIbCcC5bQ
        subject_person_id: p_sLfupwUzfgDqZ8YZvZZpx9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ty8QAStNHh_jWxK3vk7d1l
          claim_id: c_eHQZYbxEyeNYoVIbCcC5bQ
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLfupwUzfgDqZ8YZvZZpx9
        status: active
        display_name: 王克完
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FPng5EzMckCMmc5ZLI3uGm
        subject_person_id: p_7w7R7PSA759EpLs8K9jpxH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGBsaulYEPQGi_T84HWE2k
          claim_id: c_FPng5EzMckCMmc5ZLI3uGm
          source_id: s_byEVRzP__f5u_5APNhJgU2
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_byEVRzP__f5u_5APNhJgU2
            source_type: api_record
            title: 中国历代人物传记资料库：王民秀（CBDB 210125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json
            external_identifier: CBDB:210125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7w7R7PSA759EpLs8K9jpxH
        status: active
        display_name: 王民秀
        merged_into_person_id: null
    - claim:
        id: c_V0ZD6es_72lwm1THgkg-iu
        subject_person_id: p_8Ep5P5ZpEFCitMHRmNMN6i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDevfIG8mXc903SWm3RpxQ
          claim_id: c_V0ZD6es_72lwm1THgkg-iu
          source_id: s_Z8wok6JHetQryty9dHMi8X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z8wok6JHetQryty9dHMi8X
            source_type: api_record
            title: 中国历代人物传记资料库：王民傑（CBDB 210118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210118&o=json
            external_identifier: CBDB:210118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Ep5P5ZpEFCitMHRmNMN6i
        status: active
        display_name: 王民傑
        merged_into_person_id: null
    - claim:
        id: c_fuokqVmEVnQNYUiPlhZCxo
        subject_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IzhtkpfSg4hLWnkAn25YKg
          claim_id: c_fuokqVmEVnQNYUiPlhZCxo
          source_id: s_LMemHArGlvOIsw0SGe7cme
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LMemHArGlvOIsw0SGe7cme
            source_type: api_record
            title: 中国历代人物传记资料库：王民獻（CBDB 210122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json
            external_identifier: CBDB:210122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQysQ4M7AfMq9vujKpVLj4
        status: active
        display_name: 王民獻
        merged_into_person_id: null
    - claim:
        id: c_mIzv7tbxL1xQxrAfcKxw6G
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AdfFkwugk79zxtoV7yL-mc
          claim_id: c_mIzv7tbxL1xQxrAfcKxw6G
          source_id: s_sZgCxXiNIMbsMHUzRwQbHu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sZgCxXiNIMbsMHUzRwQbHu
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C3qbUqK8r4tdCLJC1H25mH
        status: active
        display_name: 王民卿
        merged_into_person_id: null
    - claim:
        id: c_xrdlk7dKfAUIUr4kAjGUWV
        subject_person_id: p_fSQoZdJtpp4PDfZBMTNv9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qns4YiiTUMU6Jvx9lAU-sR
          claim_id: c_xrdlk7dKfAUIUr4kAjGUWV
          source_id: s_eBdXea64dpfIvA5S5WnPqD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eBdXea64dpfIvA5S5WnPqD
            source_type: api_record
            title: 中国历代人物传记资料库：王民悅（CBDB 210123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210123&o=json
            external_identifier: CBDB:210123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fSQoZdJtpp4PDfZBMTNv9M
        status: active
        display_name: 王民悅
        merged_into_person_id: null
    - claim:
        id: c_nNg6uH4ce5wgJZc2YJIZus
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n3vStaMTAGUemfDPhiMx1L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqNcIkTF3y-p7wyHX1nPj-
          claim_id: c_nNg6uH4ce5wgJZc2YJIZus
          source_id: s_Fnu9AKi09zsvZmTkQd0reX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fnu9AKi09zsvZmTkQd0reX
            source_type: api_record
            title: 中国历代人物传记资料库：王民綱（CBDB 210120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210120&o=json
            external_identifier: CBDB:210120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n3vStaMTAGUemfDPhiMx1L
        status: active
        display_name: 王民綱
        merged_into_person_id: null
    - claim:
        id: c_qmyXGeFhSiRrOne-55MMTv
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oBLDjR5Hdjeu8G8S7GFHUw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_floMD8IuSSH_sNAI8NyF9S
          claim_id: c_qmyXGeFhSiRrOne-55MMTv
          source_id: s_5ha-T59rutJ-IBSqYqDpyW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5ha-T59rutJ-IBSqYqDpyW
            source_type: api_record
            title: 中国历代人物传记资料库：王民熙（CBDB 210124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210124&o=json
            external_identifier: CBDB:210124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBLDjR5Hdjeu8G8S7GFHUw
        status: active
        display_name: 王民熙
        merged_into_person_id: null
    - claim:
        id: c_v7WvOu9H5HRBBkwQsRYbbj
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oi2PvK2HYJDZDMKhZv9HwZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avoFHS8onNVG3PT7N10gNM
          claim_id: c_v7WvOu9H5HRBBkwQsRYbbj
          source_id: s_KxKfRhAwTjhRVdC8y8T9lw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KxKfRhAwTjhRVdC8y8T9lw
            source_type: api_record
            title: 中国历代人物传记资料库：王民聘（CBDB 210121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210121&o=json
            external_identifier: CBDB:210121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oi2PvK2HYJDZDMKhZv9HwZ
        status: active
        display_name: 王民聘
        merged_into_person_id: null
    - claim:
        id: c_7UQV2iHh1D4beyCGzjD1-R
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EE0fH2qrl3ZqLsXekHj3sC
          claim_id: c_7UQV2iHh1D4beyCGzjD1-R
          source_id: s_Au797MFLNHN0Up2ZjduvTx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Au797MFLNHN0Up2ZjduvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王民戴（CBDB 210127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json
            external_identifier: CBDB:210127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8qq6ZZQLo2v36rcUxxeFP
        status: active
        display_name: 王民戴
        merged_into_person_id: null
    - claim:
        id: c_USsfkc-Xi6G29ux4U1eMrc
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPbAyPeH49qEiDGBjDfaEA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxdBuEUkumivdaoe9013Pw
          claim_id: c_USsfkc-Xi6G29ux4U1eMrc
          source_id: s_EeYAlJoHm4q1CN4IwwXB11
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EeYAlJoHm4q1CN4IwwXB11
            source_type: api_record
            title: 中国历代人物传记资料库：王民頌（CBDB 210128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210128&o=json
            external_identifier: CBDB:210128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yPbAyPeH49qEiDGBjDfaEA
        status: active
        display_name: 王民頌
        merged_into_person_id: null
---

# 王民順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民順 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王民順（生于1539年），明人物。隆慶五年進士，籍贯金谿，入仕進士，曾任御史、知縣、左布政使。（中国历代人物传记资料库 CBDB 205877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| spouses | p_2GV378NyKPJVrNj6GrUdt7 | 鄒氏 | accepted |
| ancestors | p_yv8SGEh1yCP849cH7azrtA | 王斯立 | accepted |
| ancestors | p_sLfupwUzfgDqZ8YZvZZpx9 | 王克完 | accepted |
| other | p_7w7R7PSA759EpLs8K9jpxH | 王民秀 | accepted |
| other | p_8Ep5P5ZpEFCitMHRmNMN6i | 王民傑 | accepted |
| other | p_BQysQ4M7AfMq9vujKpVLj4 | 王民獻 | accepted |
| other | p_C3qbUqK8r4tdCLJC1H25mH | 王民卿 | accepted |
| other | p_fSQoZdJtpp4PDfZBMTNv9M | 王民悅 | accepted |
| other | p_n3vStaMTAGUemfDPhiMx1L | 王民綱 | accepted |
| other | p_oBLDjR5Hdjeu8G8S7GFHUw | 王民熙 | accepted |
| other | p_oi2PvK2HYJDZDMKhZv9HwZ | 王民聘 | accepted |
| other | p_y8qq6ZZQLo2v36rcUxxeFP | 王民戴 | accepted |
| other | p_yPbAyPeH49qEiDGBjDfaEA | 王民頌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民戴（CBDB 210127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json)
- [中国历代人物传记资料库：王民綱（CBDB 210120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210120&o=json)
- [中国历代人物传记资料库：王民傑（CBDB 210118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210118&o=json)
- [中国历代人物传记资料库：王民聘（CBDB 210121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210121&o=json)
- [中国历代人物传记资料库：王民卿（CBDB 210119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json)
- [中国历代人物传记资料库：王民順（CBDB 205877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json)
- [中国历代人物传记资料库：王民頌（CBDB 210128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210128&o=json)
- [中国历代人物传记资料库：王民熙（CBDB 210124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210124&o=json)
- [中国历代人物传记资料库：王民獻（CBDB 210122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json)
- [中国历代人物传记资料库：王民秀（CBDB 210125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210125&o=json)
- [中国历代人物传记资料库：王民悅（CBDB 210123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210123&o=json)
- [中国历代人物传记资料库：鄒氏(王民順妻)（CBDB 210117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210117&o=json)
