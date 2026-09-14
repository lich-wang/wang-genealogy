---
schema: wang-person/v1
id: p_MWFGy9uHg9NsSwK8c42QRv
status: active
merged_into: null
display_name: 王同休
cbdb_id: 207136
revision: 20
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_guRf4hgPVDk9NJkHhC7MnB
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同休（生于1558年），明人物。明清進士進士，籍贯晉江，入仕進士，曾任戶部觀政、刑部廣東司主事。（中国历代人物传记资料库 CBDB 207136）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PZgSp78SlUaGmZUi6qXLWU
          claim_id: c_guRf4hgPVDk9NJkHhC7MnB
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uPRGd16VLneaaXqs5MHxfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王同休（CBDB 207136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json
            external_identifier: CBDB:207136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9rF31BgYpoVoTNTn7qmYCL
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1558-01-01
            latest: 1558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JtyFW3ucGQmRCMpoNPWYGF
          claim_id: c_9rF31BgYpoVoTNTn7qmYCL
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_uPRGd16VLneaaXqs5MHxfZ
            source_type: api_record
            title: 中国历代人物传记资料库：王同休（CBDB 207136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json
            external_identifier: CBDB:207136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4To6YGPCLWsxcaCMs6DtMb
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fyMHL2Q9BU2y42GK6dvJtd
          claim_id: c_4To6YGPCLWsxcaCMs6DtMb
          source_id: s_uPRGd16VLneaaXqs5MHxfZ
          stance: supports
          locator: CBDB:207136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p0tj7EIMohCg0e_5rHN1FV
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYhSm1gQZ0-d0_55qLU7r8
          claim_id: c_p0tj7EIMohCg0e_5rHN1FV
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JdxuK8SMW5Cg89USVQp6Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 228268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json
            external_identifier: CBDB:228268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children:
    - claim:
        id: c_t2AXiLBQKQaYm37msCBJEg
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wW1HszyZJVtcha7euKGLM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45YnZWOz9UQX-zTNS_tnCP
          claim_id: c_t2AXiLBQKQaYm37msCBJEg
          source_id: s_o6NPbqL9xWXrj7Q9QW1Pu6
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o6NPbqL9xWXrj7Q9QW1Pu6
            source_type: api_record
            title: 中国历代人物传记资料库：王士璋（CBDB 228291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228291&o=json
            external_identifier: CBDB:228291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7wW1HszyZJVtcha7euKGLM
        status: active
        display_name: 王士璋
        merged_into_person_id: null
    - claim:
        id: c_gQeWaHWUZEJ9K9SjWctgSV
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C118ci2mxBfq6hXn42LYgU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_05cx7pMH6n9mhimPF2sIde
          claim_id: c_gQeWaHWUZEJ9K9SjWctgSV
          source_id: s_y9gag48hETPhP48f11VR64
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y9gag48hETPhP48f11VR64
            source_type: api_record
            title: 中国历代人物传记资料库：王士寶（CBDB 228289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228289&o=json
            external_identifier: CBDB:228289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_C118ci2mxBfq6hXn42LYgU
        status: active
        display_name: 王士寶
        merged_into_person_id: null
    - claim:
        id: c_6IjgznJaY36kiADef4CSIQ
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CMtyQaW3uvi1CJTCSwB1k5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYH7XAFDBQfhKPLv4buquT
          claim_id: c_6IjgznJaY36kiADef4CSIQ
          source_id: s_Btt61F5Ra2rWenM8ZMhUrE
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Btt61F5Ra2rWenM8ZMhUrE
            source_type: api_record
            title: 中国历代人物传记资料库：王士璣（CBDB 228290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228290&o=json
            external_identifier: CBDB:228290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CMtyQaW3uvi1CJTCSwB1k5
        status: active
        display_name: 王士璣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DlCAFr35uLobZcNgn9ZMhk
        subject_person_id: p_MdTA9g1vPfh7eB7W38aEek
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWywQoJaEMykQGVtykVesm
          claim_id: c_DlCAFr35uLobZcNgn9ZMhk
          source_id: s_4GwQtJPeQrwuWxRSdyreku
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4GwQtJPeQrwuWxRSdyreku
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 228266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228266&o=json
            external_identifier: CBDB:228266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MdTA9g1vPfh7eB7W38aEek
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_oQ8UlbVNNnZWYmqJ68p_2a
        subject_person_id: p_wJBmjFiTtjYvsNPmK8eR1t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4tZHzbwSRc0bzIvFDZAgQ
          claim_id: c_oQ8UlbVNNnZWYmqJ68p_2a
          source_id: s_VZ8CmK1k5KXdrdtUmSMbzr
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VZ8CmK1k5KXdrdtUmSMbzr
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 228267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json
            external_identifier: CBDB:228267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wJBmjFiTtjYvsNPmK8eR1t
        status: active
        display_name: 王紀
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_T4c1-f5dYIAOY1ZEfVIM79
        subject_person_id: p_3qMgFHcRQvpK8sdeAZ4L1A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0fVpIjcq7YOHT4nRufD27N
          claim_id: c_T4c1-f5dYIAOY1ZEfVIM79
          source_id: s_DFPD1d5mCY3Qh-3s2BhiAw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DFPD1d5mCY3Qh-3s2BhiAw
            source_type: api_record
            title: 中国历代人物传记资料库：王同廉（CBDB 228279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json
            external_identifier: CBDB:228279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3qMgFHcRQvpK8sdeAZ4L1A
        status: active
        display_name: 王同廉
        merged_into_person_id: null
    - claim:
        id: c_42IKeiekWcNNlQ0fk1jHVf
        subject_person_id: p_7UeP8FttiN2sjK938QZYon
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u4UoK5af1SkE232LQBlQWP
          claim_id: c_42IKeiekWcNNlQ0fk1jHVf
          source_id: s_22RmRXrBFNpASPPjhvCy1c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_22RmRXrBFNpASPPjhvCy1c
            source_type: api_record
            title: 中国历代人物传记资料库：王同言（CBDB 228277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228277&o=json
            external_identifier: CBDB:228277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7UeP8FttiN2sjK938QZYon
        status: active
        display_name: 王同言
        merged_into_person_id: null
    - claim:
        id: c_7qOmmOYm6wF011BhrKmpXk
        subject_person_id: p_86wTZFBZPTN3Z1XQarsVFQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0N7-eJorRTonxT5noHew4N
          claim_id: c_7qOmmOYm6wF011BhrKmpXk
          source_id: s_y0dNCFTQgMFxaHIGhclOg3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y0dNCFTQgMFxaHIGhclOg3
            source_type: api_record
            title: 中国历代人物传记资料库：王同康（CBDB 228276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228276&o=json
            external_identifier: CBDB:228276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_86wTZFBZPTN3Z1XQarsVFQ
        status: active
        display_name: 王同康
        merged_into_person_id: null
    - claim:
        id: c_3X7RFvzyAgbWlYfOrYvmIo
        subject_person_id: p_A9BFPQLEUgHVSFRY2Y99pq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQ6MZkkXCp9DTFAM_SFOSw
          claim_id: c_3X7RFvzyAgbWlYfOrYvmIo
          source_id: s_sIWcGAe1NXtHULS36_kDNW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sIWcGAe1NXtHULS36_kDNW
            source_type: api_record
            title: 中国历代人物传记资料库：王同文（CBDB 228280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228280&o=json
            external_identifier: CBDB:228280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A9BFPQLEUgHVSFRY2Y99pq
        status: active
        display_name: 王同文
        merged_into_person_id: null
    - claim:
        id: c_5UvrnDqNE9w7llnch25WSg
        subject_person_id: p_CjS2biWiV8uLbydmFB48Cd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2jpLvXb1OxPi9tAMOgfRo
          claim_id: c_5UvrnDqNE9w7llnch25WSg
          source_id: s_VUMGttAD8vXq7c61H9asUt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VUMGttAD8vXq7c61H9asUt
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 228278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228278&o=json
            external_identifier: CBDB:228278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CjS2biWiV8uLbydmFB48Cd
        status: active
        display_name: 王同任
        merged_into_person_id: null
    - claim:
        id: c_AAnh9_aIm1nseLYmx2glrR
        subject_person_id: p_J7RLh9g8kkBqfkKSJnwL4p
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zG7ukVkvr9JgWQN1Qbj1ov
          claim_id: c_AAnh9_aIm1nseLYmx2glrR
          source_id: s_efKwOk68tKuxmyJyo4C8DE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_efKwOk68tKuxmyJyo4C8DE
            source_type: api_record
            title: 中国历代人物传记资料库：王同庶（CBDB 228285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228285&o=json
            external_identifier: CBDB:228285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J7RLh9g8kkBqfkKSJnwL4p
        status: active
        display_name: 王同庶
        merged_into_person_id: null
    - claim:
        id: c_LpanJqrktZwSCjoVIY7oL0
        subject_person_id: p_LMGs3ubexVRQy3nt9urZLc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yP2oEMM9Ew3oroVd6L24Pv
          claim_id: c_LpanJqrktZwSCjoVIY7oL0
          source_id: s_uN3KNsyXHdf9IWEmddVROU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uN3KNsyXHdf9IWEmddVROU
            source_type: api_record
            title: 中国历代人物传记资料库：王同賡（CBDB 228283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json
            external_identifier: CBDB:228283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LMGs3ubexVRQy3nt9urZLc
        status: active
        display_name: 王同賡
        merged_into_person_id: null
    - claim:
        id: c_9Yf6CNijzahhA5MAwtmf8n
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NvNyxpEHnfKTqPCRw7joWN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vri5iilMR1auVINGnwgc32
          claim_id: c_9Yf6CNijzahhA5MAwtmf8n
          source_id: s_Nn_MOD-OykSZ9O9_AaSnxH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nn_MOD-OykSZ9O9_AaSnxH
            source_type: api_record
            title: 中国历代人物传记资料库：王同廕（CBDB 228287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228287&o=json
            external_identifier: CBDB:228287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NvNyxpEHnfKTqPCRw7joWN
        status: active
        display_name: 王同廕
        merged_into_person_id: null
    - claim:
        id: c_j0Op3nDvHrr3yplfi21afl
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SxAezkkbL8Xi9KjRQRGAT1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cx9HTeg1Gdd2dAFFaUhBf
          claim_id: c_j0Op3nDvHrr3yplfi21afl
          source_id: s_oEephQjlr4_QKYGnpuAqO-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oEephQjlr4_QKYGnpuAqO-
            source_type: api_record
            title: 中国历代人物传记资料库：王同杲（CBDB 228286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228286&o=json
            external_identifier: CBDB:228286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SxAezkkbL8Xi9KjRQRGAT1
        status: active
        display_name: 王同杲
        merged_into_person_id: null
    - claim:
        id: c_J-JtK1GAWE248o4tmqETdt
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6sIvwMDKQK79nJnQJKgC4
          claim_id: c_J-JtK1GAWE248o4tmqETdt
          source_id: s_7w0gBfGTppNSdjyH-eMunI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7w0gBfGTppNSdjyH-eMunI
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQN4y9LgUeW1EE3eV6uurj
        status: active
        display_name: 王同讚
        merged_into_person_id: null
    - claim:
        id: c_Q3g3eUdEqKIYON4UgYaTVO
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g3UQBZAEVU2F537juVQrYi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPaofIIHP--RsZxzgnwM8K
          claim_id: c_Q3g3eUdEqKIYON4UgYaTVO
          source_id: s_H2S7IY13w4B4y-FGrpaXxI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H2S7IY13w4B4y-FGrpaXxI
            source_type: api_record
            title: 中国历代人物传记资料库：王同朝（CBDB 228282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228282&o=json
            external_identifier: CBDB:228282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g3UQBZAEVU2F537juVQrYi
        status: active
        display_name: 王同朝
        merged_into_person_id: null
    - claim:
        id: c_VvXBZokPJG_loNn83XMWTO
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gLRJKr7VDnTGS3DdpFvZbo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bD29KQKV0IJwfXvMBLmuSO
          claim_id: c_VvXBZokPJG_loNn83XMWTO
          source_id: s_7KHlCdfeUHOL69xyen3sjf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7KHlCdfeUHOL69xyen3sjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同衣（CBDB 228281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228281&o=json
            external_identifier: CBDB:228281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gLRJKr7VDnTGS3DdpFvZbo
        status: active
        display_name: 王同衣
        merged_into_person_id: null
    - claim:
        id: c_0Zch3S8gddvkn2bTzUW1k9
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZsvm1r23hqV2Gd7SVGLFv
          claim_id: c_0Zch3S8gddvkn2bTzUW1k9
          source_id: s_pxkqmRAMwHC3-29nCQPypw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pxkqmRAMwHC3-29nCQPypw
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 228288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json
            external_identifier: CBDB:228288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h1x6uoqPx8KyBczJG44BbJ
        status: active
        display_name: 王同京
        merged_into_person_id: null
    - claim:
        id: c_43o42epWn7avz5v6hUsTep
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jJEyhLtJFmqq5UKdpjzWh2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6N3n-vAcL_9-YpfBpAEV0W
          claim_id: c_43o42epWn7avz5v6hUsTep
          source_id: s_x0JVMLswN0CQwaI73vqpKK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x0JVMLswN0CQwaI73vqpKK
            source_type: api_record
            title: 中国历代人物传记资料库：王同度（CBDB 228275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228275&o=json
            external_identifier: CBDB:228275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJEyhLtJFmqq5UKdpjzWh2
        status: active
        display_name: 王同度
        merged_into_person_id: null
---

# 王同休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同休（生于1558年），明人物。明清進士進士，籍贯晉江，入仕進士，曾任戶部觀政、刑部廣東司主事。（中国历代人物传记资料库 CBDB 207136） | accepted |
| birth.date | 1558年 | accepted |
| name.primary | 王同休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| children | p_7wW1HszyZJVtcha7euKGLM | 王士璋 | accepted |
| children | p_C118ci2mxBfq6hXn42LYgU | 王士寶 | accepted |
| children | p_CMtyQaW3uvi1CJTCSwB1k5 | 王士璣 | accepted |
| ancestors | p_MdTA9g1vPfh7eB7W38aEek | 王寰 | accepted |
| ancestors | p_wJBmjFiTtjYvsNPmK8eR1t | 王紀 | accepted |
| other | p_3qMgFHcRQvpK8sdeAZ4L1A | 王同廉 | accepted |
| other | p_7UeP8FttiN2sjK938QZYon | 王同言 | accepted |
| other | p_86wTZFBZPTN3Z1XQarsVFQ | 王同康 | accepted |
| other | p_A9BFPQLEUgHVSFRY2Y99pq | 王同文 | accepted |
| other | p_CjS2biWiV8uLbydmFB48Cd | 王同任 | accepted |
| other | p_J7RLh9g8kkBqfkKSJnwL4p | 王同庶 | accepted |
| other | p_LMGs3ubexVRQy3nt9urZLc | 王同賡 | accepted |
| other | p_NvNyxpEHnfKTqPCRw7joWN | 王同廕 | accepted |
| other | p_SxAezkkbL8Xi9KjRQRGAT1 | 王同杲 | accepted |
| other | p_eQN4y9LgUeW1EE3eV6uurj | 王同讚 | accepted |
| other | p_g3UQBZAEVU2F537juVQrYi | 王同朝 | accepted |
| other | p_gLRJKr7VDnTGS3DdpFvZbo | 王同衣 | accepted |
| other | p_h1x6uoqPx8KyBczJG44BbJ | 王同京 | accepted |
| other | p_jJEyhLtJFmqq5UKdpjzWh2 | 王同度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 228266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228266&o=json)
- [中国历代人物传记资料库：王紀（CBDB 228267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228267&o=json)
- [中国历代人物传记资料库：王士寶（CBDB 228289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228289&o=json)
- [中国历代人物传记资料库：王士璣（CBDB 228290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228290&o=json)
- [中国历代人物传记资料库：王士璋（CBDB 228291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228291&o=json)
- [中国历代人物传记资料库：王同朝（CBDB 228282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228282&o=json)
- [中国历代人物传记资料库：王同度（CBDB 228275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228275&o=json)
- [中国历代人物传记资料库：王同杲（CBDB 228286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228286&o=json)
- [中国历代人物传记资料库：王同賡（CBDB 228283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228283&o=json)
- [中国历代人物传记资料库：王同京（CBDB 228288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json)
- [中国历代人物传记资料库：王同康（CBDB 228276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228276&o=json)
- [中国历代人物传记资料库：王同廉（CBDB 228279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228279&o=json)
- [中国历代人物传记资料库：王同任（CBDB 228278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228278&o=json)
- [中国历代人物传记资料库：王同庶（CBDB 228285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228285&o=json)
- [中国历代人物传记资料库：王同文（CBDB 228280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228280&o=json)
- [中国历代人物传记资料库：王同休（CBDB 207136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207136&o=json)
- [中国历代人物传记资料库：王同言（CBDB 228277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228277&o=json)
- [中国历代人物传记资料库：王同衣（CBDB 228281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228281&o=json)
- [中国历代人物传记资料库：王同廕（CBDB 228287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228287&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 228274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json)
- [中国历代人物传记资料库：王惟中（CBDB 228268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json)
