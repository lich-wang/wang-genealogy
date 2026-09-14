---
schema: wang-person/v1
id: p_DYviEpoQ7QNEe7UQdPVSd4
status: active
merged_into: null
display_name: 王以纁
revision: 19
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKj974iq1pjJMHhqUMgMb7
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uac9f4pJopPKx3C95uQJaQ
          claim_id: c_oKj974iq1pjJMHhqUMgMb7
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: CBDB:205075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205075）
          source: &a1
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TxWkJ3LA9NQgyDbA1eD2n
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCC2YEoVAFk3dagjmLNETq
          claim_id: c_7TxWkJ3LA9NQgyDbA1eD2n
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
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
        id: c_JXVj1nhiEE3kV41iwCvGsS
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁（生于1536年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205075）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v7nrHCbRjkPRALipApeOCc
          claim_id: c_JXVj1nhiEE3kV41iwCvGsS
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: CBDB:205075
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I5huK4fvM09TaXPK6L45Pz
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CDPdNvxabQX9Mzpz2bTClj
          claim_id: c_I5huK4fvM09TaXPK6L45Pz
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tqjCV0HrsWpwB1Njzs4gM_
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gAE7Y6mD8FN6PQfoSCLqU6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHtj4nZc3o1ilXiEaK65xA
          claim_id: c_tqjCV0HrsWpwB1Njzs4gM_
          source_id: s_E4hPiD9AzsAhuci4rgn_ao
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E4hPiD9AzsAhuci4rgn_ao
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json
            external_identifier: CBDB:327947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gAE7Y6mD8FN6PQfoSCLqU6
        status: active
        display_name: 段氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Ef9s1miXQLEf-PKYDiiINm
        subject_person_id: p_UmiM46iyTrzbnFK5RdENAL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOcWJdNotoaKqPqBYn02-v
          claim_id: c_Ef9s1miXQLEf-PKYDiiINm
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UmiM46iyTrzbnFK5RdENAL
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_9D0ROdQlGGks2jIJWd2h75
        subject_person_id: p_gSoKgcTCFAWExn64bcLa7C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ANTojEQO9kD-DwjLolJSuc
          claim_id: c_9D0ROdQlGGks2jIJWd2h75
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gSoKgcTCFAWExn64bcLa7C
        status: active
        display_name: 王詔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Uaga-nKohbqx-I8-iNjrr7
        subject_person_id: p_7s8BAPmNWBK223SSZme44D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oVzxSydbv03bk0t7XRLNfc
          claim_id: c_Uaga-nKohbqx-I8-iNjrr7
          source_id: s_gbxkTKWad_OTgXxfO6v3Jo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gbxkTKWad_OTgXxfO6v3Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王緘（CBDB 327961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327961&o=json
            external_identifier: CBDB:327961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7s8BAPmNWBK223SSZme44D
        status: active
        display_name: 王緘
        merged_into_person_id: null
    - claim:
        id: c__4l-b8qk4VD_Akxa5tah1X
        subject_person_id: p_858rFw8Q6P9UNfpyN3uBVB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuMkMG659RrIJKN16ZBREX
          claim_id: c__4l-b8qk4VD_Akxa5tah1X
          source_id: s_UrZYd_NRdJvjHCapq-9ZGB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UrZYd_NRdJvjHCapq-9ZGB
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 327960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327960&o=json
            external_identifier: CBDB:327960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_858rFw8Q6P9UNfpyN3uBVB
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_eG_Eh4Thudif7mbXPtET3y
        subject_person_id: p_B1Kw46B7WBT48xCkV36EkN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jH_DSjJG8cSZxfFd4eYcfn
          claim_id: c_eG_Eh4Thudif7mbXPtET3y
          source_id: s_R7gLFAjCxhhQuxCnNVlzn-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R7gLFAjCxhhQuxCnNVlzn-
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 327951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327951&o=json
            external_identifier: CBDB:327951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B1Kw46B7WBT48xCkV36EkN
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_LsH82eN2CKn9pokISBxv7O
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GUBF5xYpVcU5txwspcxGii
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-fHh3-MvV68Zlcdhj5HKly
          claim_id: c_LsH82eN2CKn9pokISBxv7O
          source_id: s_s67Wde2kiVgZ1itZjVYGw6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s67Wde2kiVgZ1itZjVYGw6
            source_type: api_record
            title: 中国历代人物传记资料库：王練（CBDB 327962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json
            external_identifier: CBDB:327962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GUBF5xYpVcU5txwspcxGii
        status: active
        display_name: 王練
        merged_into_person_id: null
    - claim:
        id: c_JbXlhiI5X-0jLK3AcrRfPm
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H8DB8C3cPyHMGK8CbvSLv8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2g7-NMqlAMoDEKXbeSnKU
          claim_id: c_JbXlhiI5X-0jLK3AcrRfPm
          source_id: s_HsP9HOrPwi8s_I_d6bB2Yq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HsP9HOrPwi8s_I_d6bB2Yq
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 327956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327956&o=json
            external_identifier: CBDB:327956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8DB8C3cPyHMGK8CbvSLv8
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_9qjJJkrzeSPz-L84q-XOHk
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HsH2tHxo8zSYxpnHpBoPLZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grf2LwkRXE0j_eL9wA_Yzh
          claim_id: c_9qjJJkrzeSPz-L84q-XOHk
          source_id: s_js7rCQ3jhThXii4znjFPTF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_js7rCQ3jhThXii4znjFPTF
            source_type: api_record
            title: 中国历代人物传记资料库：王纉（CBDB 327954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json
            external_identifier: CBDB:327954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HsH2tHxo8zSYxpnHpBoPLZ
        status: active
        display_name: 王纉
        merged_into_person_id: null
    - claim:
        id: c_nFMsYTy5NvwK92x6C-FiT0
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bEZ8VwC1w4huKeEpVyWEjp
          claim_id: c_nFMsYTy5NvwK92x6C-FiT0
          source_id: s_TrMHkXuU21FF9msb42A1se
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TrMHkXuU21FF9msb42A1se
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 327964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json
            external_identifier: CBDB:327964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jw3V9gcCZgE2uB8eYMnY58
        status: active
        display_name: 王絲
        merged_into_person_id: null
    - claim:
        id: c_n2rZU4IxH-5iHPZzmOWI6K
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tzev94VoedK2unqkseUDPf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SJwXYJwWCJPHGXYHBmypu
          claim_id: c_n2rZU4IxH-5iHPZzmOWI6K
          source_id: s_oykuFz70MtsOaJ-51wDUSJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oykuFz70MtsOaJ-51wDUSJ
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 327958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json
            external_identifier: CBDB:327958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tzev94VoedK2unqkseUDPf
        status: active
        display_name: 王絡
        merged_into_person_id: null
    - claim:
        id: c_Y8tqcn5ncDf1XrRaIMT2SL
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z2dzASTzEFzCvxNk31CAkL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRbg_rB2ICWdtFgXAiSLVL
          claim_id: c_Y8tqcn5ncDf1XrRaIMT2SL
          source_id: s_3LjgxgQpMfybrNYOcLkv5g
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3LjgxgQpMfybrNYOcLkv5g
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 327948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json
            external_identifier: CBDB:327948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z2dzASTzEFzCvxNk31CAkL
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_yA0FZ41w0ebQlvosWIuuo6
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aRwuGCsBp9XwQBCDQ9TQcm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2H3bL72LqaVvwRfgIOajm
          claim_id: c_yA0FZ41w0ebQlvosWIuuo6
          source_id: s_eQrihrfQZWR4-17r4V5g5e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eQrihrfQZWR4-17r4V5g5e
            source_type: api_record
            title: 中国历代人物传记资料库：王繕（CBDB 327959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json
            external_identifier: CBDB:327959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aRwuGCsBp9XwQBCDQ9TQcm
        status: active
        display_name: 王繕
        merged_into_person_id: null
    - claim:
        id: c_I0ZFFr-O-OLsCDbOvfHoE9
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c6EZKhcAeKEGNkKKjkJYbo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4H-2ziUgmfoZGxep80bbr
          claim_id: c_I0ZFFr-O-OLsCDbOvfHoE9
          source_id: s_-NErw36ins0IIS2wmcSq6D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-NErw36ins0IIS2wmcSq6D
            source_type: api_record
            title: 中国历代人物传记资料库：王緼（CBDB 327965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327965&o=json
            external_identifier: CBDB:327965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c6EZKhcAeKEGNkKKjkJYbo
        status: active
        display_name: 王緼
        merged_into_person_id: null
    - claim:
        id: c_SFZ7K4iDdZD0XqJcqie3GH
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dXQNHYX57uwhFKcBCaCTvm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13dn5PbtZ_K4Dab6CX_-er
          claim_id: c_SFZ7K4iDdZD0XqJcqie3GH
          source_id: s_5uvVL1d6pDYcyyRtHY2szG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5uvVL1d6pDYcyyRtHY2szG
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 327949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327949&o=json
            external_identifier: CBDB:327949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXQNHYX57uwhFKcBCaCTvm
        status: active
        display_name: 王維
        merged_into_person_id: null
    - claim:
        id: c_pyj-RZLezSzxvlWwsGzifg
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g3EiLD53uQMuc5qwxSS8Qa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PLsfwDwd6AoTMhV4HAyIIB
          claim_id: c_pyj-RZLezSzxvlWwsGzifg
          source_id: s_BC3XiEFqS192XZcvBhyvIy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BC3XiEFqS192XZcvBhyvIy
            source_type: api_record
            title: 中国历代人物传记资料库：王織（CBDB 327957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327957&o=json
            external_identifier: CBDB:327957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g3EiLD53uQMuc5qwxSS8Qa
        status: active
        display_name: 王織
        merged_into_person_id: null
    - claim:
        id: c_bBCLQogmWUfgTAXnGUwRLq
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mZeDep1J2jXrGYbGRwS2AL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ha84I93bVET3bhdzQUoaq
          claim_id: c_bBCLQogmWUfgTAXnGUwRLq
          source_id: s_dHg17AUvcla8llL-DQVlcb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dHg17AUvcla8llL-DQVlcb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 327953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json
            external_identifier: CBDB:327953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mZeDep1J2jXrGYbGRwS2AL
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_HxZg9JZL1CqpByPKQwHsGg
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KznA5x-HIbslzGiA7KxGM2
          claim_id: c_HxZg9JZL1CqpByPKQwHsGg
          source_id: s_KtdxWCEWaHVasFTaNOvZS4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KtdxWCEWaHVasFTaNOvZS4
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 327950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json
            external_identifier: CBDB:327950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        status: active
        display_name: 王緄
        merged_into_person_id: null
    - claim:
        id: c_zgZKzzrheUkgG5EyRH9Zwd
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A34iv7zcId-qDkTd0iXY_t
          claim_id: c_zgZKzzrheUkgG5EyRH9Zwd
          source_id: s_yUy4P6xdRHGDSKattfLuKg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yUy4P6xdRHGDSKattfLuKg
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tAM5wcGVWvfoWBvQ6tKyVK
        status: active
        display_name: 王守訓
        merged_into_person_id: null
---

# 王以纁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以纁 | accepted |
| birth.date | 1536年 | accepted |
| bio.summary | 王以纁（生于1536年），明人物。明清進士進士，籍贯文安，入仕進士。（中国历代人物传记资料库 CBDB 205075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| spouses | p_gAE7Y6mD8FN6PQfoSCLqU6 | 段氏 | accepted |
| ancestors | p_UmiM46iyTrzbnFK5RdENAL | 王能 | accepted |
| ancestors | p_gSoKgcTCFAWExn64bcLa7C | 王詔 | accepted |
| other | p_7s8BAPmNWBK223SSZme44D | 王緘 | accepted |
| other | p_858rFw8Q6P9UNfpyN3uBVB | 王統 | accepted |
| other | p_B1Kw46B7WBT48xCkV36EkN | 王紳 | accepted |
| other | p_GUBF5xYpVcU5txwspcxGii | 王練 | accepted |
| other | p_H8DB8C3cPyHMGK8CbvSLv8 | 王綵 | accepted |
| other | p_HsH2tHxo8zSYxpnHpBoPLZ | 王纉 | accepted |
| other | p_Jw3V9gcCZgE2uB8eYMnY58 | 王絲 | accepted |
| other | p_Tzev94VoedK2unqkseUDPf | 王絡 | accepted |
| other | p_Z2dzASTzEFzCvxNk31CAkL | 王緒 | accepted |
| other | p_aRwuGCsBp9XwQBCDQ9TQcm | 王繕 | accepted |
| other | p_c6EZKhcAeKEGNkKKjkJYbo | 王緼 | accepted |
| other | p_dXQNHYX57uwhFKcBCaCTvm | 王維 | accepted |
| other | p_g3EiLD53uQMuc5qwxSS8Qa | 王織 | accepted |
| other | p_mZeDep1J2jXrGYbGRwS2AL | 王縉 | accepted |
| other | p_p7YXJqS1tPmq2Dnq2Ur8cH | 王緄 | accepted |
| other | p_tAM5wcGVWvfoWBvQ6tKyVK | 王守訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json)
- [中国历代人物传记资料库：王綵（CBDB 327956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327956&o=json)
- [中国历代人物传记资料库：王緄（CBDB 327950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json)
- [中国历代人物传记资料库：王緘（CBDB 327961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327961&o=json)
- [中国历代人物传记资料库：王縉（CBDB 327953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327953&o=json)
- [中国历代人物传记资料库：王練（CBDB 327962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327962&o=json)
- [中国历代人物传记资料库：王絡（CBDB 327958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327958&o=json)
- [中国历代人物传记资料库：王繕（CBDB 327959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327959&o=json)
- [中国历代人物传记资料库：王紳（CBDB 327951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327951&o=json)
- [中国历代人物传记资料库：王守訓（CBDB 327955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json)
- [中国历代人物传记资料库：王絲（CBDB 327964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json)
- [中国历代人物传记资料库：王統（CBDB 327960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327960&o=json)
- [中国历代人物传记资料库：王維（CBDB 327949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327949&o=json)
- [中国历代人物传记资料库：王緒（CBDB 327948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327948&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
- [中国历代人物传记资料库：王緼（CBDB 327965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327965&o=json)
- [中国历代人物传记资料库：王織（CBDB 327957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327957&o=json)
- [中国历代人物传记资料库：王纉（CBDB 327954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327954&o=json)
