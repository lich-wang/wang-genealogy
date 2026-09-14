---
schema: wang-person/v1
id: p_5dqAK3hD6kewBU4JbJcy31
status: active
merged_into: null
display_name: 王材
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3kFE35dyefMcBdpUDyuLR
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_735Z84PTtJ3M1GYBUEQHpY
          claim_id: c_T3kFE35dyefMcBdpUDyuLR
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: CBDB:201358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201358）
          source: &a1
            id: s_An9gdp4F4554SBwPLfcvo1
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 201358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json
            external_identifier: CBDB:201358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_phpkYamFimocC1Q9QS9K9h
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1461年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3buwGNGH44PjjR2Lz8B9Y7
          claim_id: c_phpkYamFimocC1Q9QS9K9h
          source_id: s_An9gdp4F4554SBwPLfcvo1
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
        id: c_CwCNnYby4jkyMwkkXr2vr6
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材（生于1461年），明人物。明清進士進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 201358）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BcOqXtL-0eBZlMn0-nGlnu
          claim_id: c_CwCNnYby4jkyMwkkXr2vr6
          source_id: s_An9gdp4F4554SBwPLfcvo1
          stance: supports
          locator: CBDB:201358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5amWBS1HirtjGpubQuFTcZ
        subject_person_id: p_2b9TwxYB6wxHNBNWLVvncu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5yOnrwsPa7mJvZ0YY5z11
          claim_id: c_5amWBS1HirtjGpubQuFTcZ
          source_id: s_U49EE6FSj9755rRx66Z9c2
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U49EE6FSj9755rRx66Z9c2
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 271102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271102&o=json
            external_identifier: CBDB:271102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2b9TwxYB6wxHNBNWLVvncu
        status: active
        display_name: 王旻
        merged_into_person_id: null
    - claim:
        id: c_SpM_lDNpvHENUy1cTPbyL7
        subject_person_id: p_nek84Xdon2JWL2E4LgqiXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5dqAK3hD6kewBU4JbJcy31
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AT-_gMST1nnyCPZgrmdvbB
          claim_id: c_SpM_lDNpvHENUy1cTPbyL7
          source_id: s_Zf2MbjP8nVFyCrS2uk4Mnw
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zf2MbjP8nVFyCrS2uk4Mnw
            source_type: api_record
            title: 中国历代人物传记资料库：王震隆（CBDB 271101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271101&o=json
            external_identifier: CBDB:271101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nek84Xdon2JWL2E4LgqiXF
        status: active
        display_name: 王震隆
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Ab_xatgzngJLFYNPHejUhQ
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_93w6EWjQAuF7ETZJATszKb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XzksJWsRbFa13zkhXfavhS
          claim_id: c_Ab_xatgzngJLFYNPHejUhQ
          source_id: s_xW8nZiEjF7c1hpa2mpn4WK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_WSaTXif8Qa_VnuLFUWhphV
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HYniqG475BGY8GGcPu1Mtp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9CrnqXcgnGNNvjI5wLUCJS
          claim_id: c_WSaTXif8Qa_VnuLFUWhphV
          source_id: s_P6ADOJLRQvTu518Twb6NYM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Fo8vEchuAoqpUN-33kzxul
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RBTTTqHW4fncDHKEq5R5nj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HAfm7CFP_ie6rEl4UnirSY
          claim_id: c_Fo8vEchuAoqpUN-33kzxul
          source_id: s_vemI__HKIWSuKpR4z-27Zb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_krfgnONTxUsZNGKEiGUpuA
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SJvN4BrFh4PvLcwBPGyYHk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVGLzSVpDZBQZD3U5x4wsq
          claim_id: c_krfgnONTxUsZNGKEiGUpuA
          source_id: s_mQgAfRHVkdTpLAAOeDXkxb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ss4jKgQHMGX8fTEc9Cu9Lu
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bDFgBZLmWhHrk46Gz9idH4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7nJNst1lbH3LCkbFbDto2
          claim_id: c_ss4jKgQHMGX8fTEc9Cu9Lu
          source_id: s_SkTvPbRiptsjKQB0guxbRD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_B7fHdZQyc8alNXgmpwAtG8
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bRgMZRH9w776ipvvdJJHX5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHp4fLJn7ab8wp5LVEcWaK
          claim_id: c_B7fHdZQyc8alNXgmpwAtG8
          source_id: s_9tit1gxikl9J7wg_S9iKvb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_FmlCsBTOX9raOVMxchIwHJ
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e43FUsetKWCi23ye3DLbaQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EKsR9OhLeveI4Ya2Ryfwwe
          claim_id: c_FmlCsBTOX9raOVMxchIwHJ
          source_id: s_-vpEB8Z-ltUqgpBNdFMzdx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4eN5gOYDff8yUbz82Hmxwn
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQaNt5E49dd91bpPLHPWVC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7IQaddDSf_0oPRuxUjVHb
          claim_id: c_4eN5gOYDff8yUbz82Hmxwn
          source_id: s_ScQgqNY8EXWUda5ua0vVFR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_RIiY1imiCpqSGcam8_TDDq
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gfDiB39atm3fJTavP3p14z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFe9FUB8x7lvi5IgkQlp1-
          claim_id: c_RIiY1imiCpqSGcam8_TDDq
          source_id: s_-IN7pexX0Le_G6uGubKWLm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4esrnYGJHJZKSCKTPTEe4x
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jL6KBQG85w9ULK5CRSbNz5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N_OjCX2BGCGR6lsOQ3p84p
          claim_id: c_4esrnYGJHJZKSCKTPTEe4x
          source_id: s_zUCV8w1UP8_-IxmrVe-WLa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_w8c84OQFNEZnQlhjEFBEsc
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k2iJtrHCVFRVP3NTzpJXMH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vYOlG7X0ICx8IQqfqTzus6
          claim_id: c_w8c84OQFNEZnQlhjEFBEsc
          source_id: s_uLn_LEmM4PP9DqwZwq1w-o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_4UdY2V4RIZdsZSrRn3SG_p
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYU1pIugWjYf89r9xIhriB
          claim_id: c_4UdY2V4RIZdsZSrRn3SG_p
          source_id: s_ARltkL7FOlUphEvhw7T1eX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| birth.date | 1461年 | accepted |
| bio.summary | 王材（生于1461年），明人物。明清進士進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 201358） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| ancestors | p_2b9TwxYB6wxHNBNWLVvncu | 王旻 | accepted |
| ancestors | p_nek84Xdon2JWL2E4LgqiXF | 王震隆 | accepted |
| other | p_93w6EWjQAuF7ETZJATszKb | 王松 | accepted |
| other | p_HYniqG475BGY8GGcPu1Mtp | 王櫟 | accepted |
| other | p_RBTTTqHW4fncDHKEq5R5nj | 王楠 | accepted |
| other | p_SJvN4BrFh4PvLcwBPGyYHk | 王楷 | accepted |
| other | p_bDFgBZLmWhHrk46Gz9idH4 | 王桓 | accepted |
| other | p_bRgMZRH9w776ipvvdJJHX5 | 王桐 | accepted |
| other | p_e43FUsetKWCi23ye3DLbaQ | 王橒 | accepted |
| other | p_eQaNt5E49dd91bpPLHPWVC | 王椿 | accepted |
| other | p_gfDiB39atm3fJTavP3p14z | 王欒 | accepted |
| other | p_jL6KBQG85w9ULK5CRSbNz5 | 王樾 | accepted |
| other | p_k2iJtrHCVFRVP3NTzpJXMH | 王榦 | accepted |
| other | p_sQm8vRe6yfwU4PQxcEpNLQ | 王杞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 201358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201358&o=json)
- [中国历代人物传记资料库：王椿（CBDB 271114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271114&o=json)
- [中国历代人物传记资料库：王榦（CBDB 271113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271113&o=json)
- [中国历代人物传记资料库：王桓（CBDB 271111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271111&o=json)
- [中国历代人物传记资料库：王楷（CBDB 271110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271110&o=json)
- [中国历代人物传记资料库：王櫟（CBDB 271117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271117&o=json)
- [中国历代人物传记资料库：王欒（CBDB 271119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271119&o=json)
- [中国历代人物传记资料库：王旻（CBDB 271102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271102&o=json)
- [中国历代人物传记资料库：王楠（CBDB 271118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271118&o=json)
- [中国历代人物传记资料库：王杞（CBDB 271107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 271103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271103&o=json)
- [中国历代人物传记资料库：王松（CBDB 271108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json)
- [中国历代人物传记资料库：王桐（CBDB 271115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271115&o=json)
- [中国历代人物传记资料库：王樾（CBDB 271112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271112&o=json)
- [中国历代人物传记资料库：王橒（CBDB 271109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271109&o=json)
- [中国历代人物传记资料库：王震隆（CBDB 271101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271101&o=json)
