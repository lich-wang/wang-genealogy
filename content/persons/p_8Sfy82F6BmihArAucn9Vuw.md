---
schema: wang-person/v1
id: p_8Sfy82F6BmihArAucn9Vuw
status: active
merged_into: null
display_name: 王詔
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cyH2jDF9r8i1GCUHM6E5G2
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N8kEFnB6ShSA8JFWdL3YM6
          claim_id: c_cyH2jDF9r8i1GCUHM6E5G2
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: CBDB:67953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67953）
          source: &a1
            id: s_p1CXfyPv5LXzNzgR3qcWyx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json
            external_identifier: CBDB:67953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wd7hPi6oW2aHj3rPDaWB28
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1480年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f2D7gLJR6ZoaTzyKWrE3LC
          claim_id: c_Wd7hPi6oW2aHj3rPDaWB28
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
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
        id: c_rWEbnwTrfubuMavstkYjG1
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔（卒于1480年），明人物。明清進士進士，籍贯衡陽，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 67953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bL_PP4umoC7bsfQGcZMORx
          claim_id: c_rWEbnwTrfubuMavstkYjG1
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: CBDB:67953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B8o3gYbeOxx3Z0i4cWDPD-
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMQPsnar_3FC8lH_0YSEwB
          claim_id: c_B8o3gYbeOxx3Z0i4cWDPD-
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-3np-FQRQ8IKp-AJKY7zy7
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TemfgwrpFYqJXJgrCQQV3E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bsq4f5H1mVTK8ggF2uL1Rc
          claim_id: c_-3np-FQRQ8IKp-AJKY7zy7
          source_id: s_tXr19Xoo72PTD1blJotUI5
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tXr19Xoo72PTD1blJotUI5
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王詔妻)（CBDB 238055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238055&o=json
            external_identifier: CBDB:238055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TemfgwrpFYqJXJgrCQQV3E
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yWCuPGOZbzaYemjnxj9u3c
        subject_person_id: p_thNdzJMkJjjDe2Hr5mo9Hf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVovzc0hVshq8sfNb5XsZJ
          claim_id: c_yWCuPGOZbzaYemjnxj9u3c
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_thNdzJMkJjjDe2Hr5mo9Hf
        status: active
        display_name: 王庶叔
        merged_into_person_id: null
    - claim:
        id: c_5luk-4dAwn2nVFRk78s6yB
        subject_person_id: p_q88ScjyNJ3fMjZFYBwS46A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmUGfu-YyF7rwnP7C5TgZ-
          claim_id: c_5luk-4dAwn2nVFRk78s6yB
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q88ScjyNJ3fMjZFYBwS46A
        status: active
        display_name: 王原簡
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JVzdn9nUNbuC8oES0tYLaJ
        subject_person_id: p_1ZmNuQVEjTeM1YCqNfPMP8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSw8UYtDGn3rVCxbK0jDYS
          claim_id: c_JVzdn9nUNbuC8oES0tYLaJ
          source_id: s_W6rBt0jkd_NpTa_VtSQ748
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W6rBt0jkd_NpTa_VtSQ748
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 238062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238062&o=json
            external_identifier: CBDB:238062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ZmNuQVEjTeM1YCqNfPMP8
        status: active
        display_name: 王護
        merged_into_person_id: null
    - claim:
        id: c_Fvb_nvT5Ua6SGlljudeehF
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJrhFd3BeA7RWRk5JBJ5ED
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17Q8nZiSnU139pn2yi04H2
          claim_id: c_Fvb_nvT5Ua6SGlljudeehF
          source_id: s_j8X0B25auKnK68w-fRTbtt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j8X0B25auKnK68w-fRTbtt
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 238060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238060&o=json
            external_identifier: CBDB:238060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJrhFd3BeA7RWRk5JBJ5ED
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_TtPvID5_LwmAOtoI_qYYtD
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_E3QDRAKVeAEYLmzzBxczHb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgYuPW3ZDSScqRU61P-1fc
          claim_id: c_TtPvID5_LwmAOtoI_qYYtD
          source_id: s_foN4KHsgJJquDOOHe9S4FB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_foN4KHsgJJquDOOHe9S4FB
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 238063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json
            external_identifier: CBDB:238063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E3QDRAKVeAEYLmzzBxczHb
        status: active
        display_name: 王詡
        merged_into_person_id: null
    - claim:
        id: c_ctQoH4PQB6x0EInbNzYT0v
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GA5YTX1LYddFUt38uKCfD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dDmHB_l5BkbNbcett20XTl
          claim_id: c_ctQoH4PQB6x0EInbNzYT0v
          source_id: s_7s6FHoapUENiUvtvm0MDIe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7s6FHoapUENiUvtvm0MDIe
            source_type: api_record
            title: 中国历代人物传记资料库：王誧（CBDB 238067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238067&o=json
            external_identifier: CBDB:238067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GA5YTX1LYddFUt38uKCfD2
        status: active
        display_name: 王誧
        merged_into_person_id: null
    - claim:
        id: c_LyzaNxpiYYuXivg7BL4z7T
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NDoSrSfUL15U7JdJDrWceZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0h7EdloyMm-Trq7Q1391nQ
          claim_id: c_LyzaNxpiYYuXivg7BL4z7T
          source_id: s_97sdjRwdz0-kWLtwTkbcvE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_97sdjRwdz0-kWLtwTkbcvE
            source_type: api_record
            title: 中国历代人物传记资料库：王諶（CBDB 238065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238065&o=json
            external_identifier: CBDB:238065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NDoSrSfUL15U7JdJDrWceZ
        status: active
        display_name: 王諶
        merged_into_person_id: null
    - claim:
        id: c_PfgpzrUZ89CvxXYC4-NqPR
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QkVjCs2adG3HPFyMu98fVN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkEDyXo_6nC56E6efVolbk
          claim_id: c_PfgpzrUZ89CvxXYC4-NqPR
          source_id: s_2KhHCcws643IKxHW_NFpxH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2KhHCcws643IKxHW_NFpxH
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 238056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json
            external_identifier: CBDB:238056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QkVjCs2adG3HPFyMu98fVN
        status: active
        display_name: 王謨
        merged_into_person_id: null
    - claim:
        id: c_Awg4uHJc2RPfbzzq8awuLR
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Xit3jEeEJdCCRBnfxzPDWn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2O-NIfdpvJNR2lqauBBZ1_
          claim_id: c_Awg4uHJc2RPfbzzq8awuLR
          source_id: s_aFbKg3Oo42hoabAfDLjGVa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aFbKg3Oo42hoabAfDLjGVa
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 238061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json
            external_identifier: CBDB:238061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xit3jEeEJdCCRBnfxzPDWn
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_n2Nhvlh1zlcd8ndX1iXBmB
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dRmajZMi4CLBg7x1fJXP17
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YiLr30zcsQAhuWssfQpP8A
          claim_id: c_n2Nhvlh1zlcd8ndX1iXBmB
          source_id: s_C0yOeKxjequCHQZX_MqIp3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C0yOeKxjequCHQZX_MqIp3
            source_type: api_record
            title: 中国历代人物传记资料库：王講（CBDB 238058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json
            external_identifier: CBDB:238058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dRmajZMi4CLBg7x1fJXP17
        status: active
        display_name: 王講
        merged_into_person_id: null
    - claim:
        id: c_D2K5a1MNhT1ZYpnC8QA0J_
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nMCMRGSXiGjY2dWR579fri
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a6ElBBfo_JDVJju158ElKm
          claim_id: c_D2K5a1MNhT1ZYpnC8QA0J_
          source_id: s_1N09etlIiC7k_acylykryo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1N09etlIiC7k_acylykryo
            source_type: api_record
            title: 中国历代人物传记资料库：王譓（CBDB 238057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238057&o=json
            external_identifier: CBDB:238057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nMCMRGSXiGjY2dWR579fri
        status: active
        display_name: 王譓
        merged_into_person_id: null
    - claim:
        id: c_Q5xbVaUj-7tUyoXKfYQvnQ
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pAeM9kBSTAJMf4aS8aopYc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPqVo3tyTcu_064xQEs_-r
          claim_id: c_Q5xbVaUj-7tUyoXKfYQvnQ
          source_id: s_k67rajDHvbxXVLd7OjKUWP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67953 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k67rajDHvbxXVLd7OjKUWP
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 238066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json
            external_identifier: CBDB:238066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pAeM9kBSTAJMf4aS8aopYc
        status: active
        display_name: 王誥
        merged_into_person_id: null
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| death.date | 1480年 | accepted |
| bio.summary | 王詔（卒于1480年），明人物。明清進士進士，籍贯衡陽，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 67953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| spouses | p_TemfgwrpFYqJXJgrCQQV3E | 曹氏 | accepted |
| ancestors | p_thNdzJMkJjjDe2Hr5mo9Hf | 王庶叔 | accepted |
| ancestors | p_q88ScjyNJ3fMjZFYBwS46A | 王原簡 | accepted |
| other | p_1ZmNuQVEjTeM1YCqNfPMP8 | 王護 | accepted |
| other | p_DJrhFd3BeA7RWRk5JBJ5ED | 王訓 | accepted |
| other | p_E3QDRAKVeAEYLmzzBxczHb | 王詡 | accepted |
| other | p_GA5YTX1LYddFUt38uKCfD2 | 王誧 | accepted |
| other | p_NDoSrSfUL15U7JdJDrWceZ | 王諶 | accepted |
| other | p_QkVjCs2adG3HPFyMu98fVN | 王謨 | accepted |
| other | p_Xit3jEeEJdCCRBnfxzPDWn | 王謙 | accepted |
| other | p_dRmajZMi4CLBg7x1fJXP17 | 王講 | accepted |
| other | p_nMCMRGSXiGjY2dWR579fri | 王譓 | accepted |
| other | p_pAeM9kBSTAJMf4aS8aopYc | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王詔妻)（CBDB 238055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238055&o=json)
- [中国历代人物传记资料库：王誧（CBDB 238067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238067&o=json)
- [中国历代人物传记资料库：王諶（CBDB 238065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238065&o=json)
- [中国历代人物传记资料库：王誥（CBDB 238066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238066&o=json)
- [中国历代人物传记资料库：王護（CBDB 238062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238062&o=json)
- [中国历代人物传记资料库：王譓（CBDB 238057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238057&o=json)
- [中国历代人物传记资料库：王講（CBDB 238058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238058&o=json)
- [中国历代人物传记资料库：王謨（CBDB 238056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238056&o=json)
- [中国历代人物传记资料库：王謙（CBDB 238061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238061&o=json)
- [中国历代人物传记资料库：王詡（CBDB 238063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238063&o=json)
- [中国历代人物传记资料库：王訓（CBDB 238060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238060&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json)
