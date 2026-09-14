---
schema: wang-person/v1
id: p_oXNXhcmP3pgs4EeZNT7tYq
status: active
merged_into: null
display_name: 王篆
revision: 22
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61uWpk43HThDEy9CpqE6HR
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bYVqdBaAqmAZSzTe7xKnn1
          claim_id: c_61uWpk43HThDEy9CpqE6HR
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: CBDB:205090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205090）
          source: &a1
            id: s_Na2wbX6AVZxBfFuDJULbnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王篆（CBDB 205090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json
            external_identifier: CBDB:205090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1kKuSHNL6Tk84LRg8bP9DQ
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P8N1QVRe8rjt3n51TMPRgZ
          claim_id: c_1kKuSHNL6Tk84LRg8bP9DQ
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
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
        id: c_ftzFY5SEXxz6znD6s4cxny
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篆（生于1532年），明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 205090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zCIYRrf-xcWxLfLKuQbJKc
          claim_id: c_ftzFY5SEXxz6znD6s4cxny
          source_id: s_Na2wbX6AVZxBfFuDJULbnZ
          stance: supports
          locator: CBDB:205090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3CiTeJ3Vbu0_uP89Xq3w5I
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2f2eeKcOTCn4c-nu-QD76u
          claim_id: c_3CiTeJ3Vbu0_uP89Xq3w5I
          source_id: s_1SkpxRiqFu3c6zkjxMZfv3
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SkpxRiqFu3c6zkjxMZfv3
            source_type: api_record
            title: 中国历代人物传记资料库：王良策（CBDB 328155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json
            external_identifier: CBDB:328155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__eoLL8z5-54xP-hNgDSBHx
        subject_person_id: p_6nYBhpCbadtLK7Qb2JDrdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJKj1j6Z29TO8bq14Bw7Ex
          claim_id: c__eoLL8z5-54xP-hNgDSBHx
          source_id: s_m3FB6rL8Mfe15DRQD2E95m
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m3FB6rL8Mfe15DRQD2E95m
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 328154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json
            external_identifier: CBDB:328154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6nYBhpCbadtLK7Qb2JDrdz
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_TqiIKHJDdFCeFDyjjiINes
        subject_person_id: p_dLJ7sEAxdkznybwp8rHiXD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdHdhCS6X4C-wwlWkePup-
          claim_id: c_TqiIKHJDdFCeFDyjjiINes
          source_id: s_gDm2Q1yV66T3DMexL9bVhe
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gDm2Q1yV66T3DMexL9bVhe
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 328152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json
            external_identifier: CBDB:328152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dLJ7sEAxdkznybwp8rHiXD
        status: active
        display_name: 王傑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GniS9Ne1I7cRG65zdvkjz6
        subject_person_id: p_2KcUZKCUdK4RPJmFdrf3y5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8d1NWk_hTcCqTXC3jyLt_
          claim_id: c_GniS9Ne1I7cRG65zdvkjz6
          source_id: s_imzOjNZ8rDMa-p6hM1qXvi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_imzOjNZ8rDMa-p6hM1qXvi
            source_type: api_record
            title: 中国历代人物传记资料库：王笈（CBDB 328168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328168&o=json
            external_identifier: CBDB:328168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2KcUZKCUdK4RPJmFdrf3y5
        status: active
        display_name: 王笈
        merged_into_person_id: null
    - claim:
        id: c_El5p0mRYqILQ-m9cUglHf4
        subject_person_id: p_2WktwwnTU4FENMPnQKtpiU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHXtS1RVJqp9IyNlpdFMVd
          claim_id: c_El5p0mRYqILQ-m9cUglHf4
          source_id: s_ejCjQ78tmsIZqmMLQ_EYQl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ejCjQ78tmsIZqmMLQ_EYQl
            source_type: api_record
            title: 中国历代人物传记资料库：王筥（CBDB 328169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328169&o=json
            external_identifier: CBDB:328169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2WktwwnTU4FENMPnQKtpiU
        status: active
        display_name: 王筥
        merged_into_person_id: null
    - claim:
        id: c_qADJGLkLpDutrZNNQbXIUn
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_re55RAwGuQf79apOYrfsG6
          claim_id: c_qADJGLkLpDutrZNNQbXIUn
          source_id: s_RXhe8H0napwnm96OLdqGh9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RXhe8H0napwnm96OLdqGh9
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3HHmqJEpLXSB6PpgNSryHi
        status: active
        display_name: 王筵
        merged_into_person_id: null
    - claim:
        id: c_g_aZW9Hnm8EQq7ZcYLVE75
        subject_person_id: p_5iJjdkhYivD15rGhLapXLc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30II45QIiZWqduVBEDWjkR
          claim_id: c_g_aZW9Hnm8EQq7ZcYLVE75
          source_id: s_BNiFUaQnsTzlFLaoJxOSh_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BNiFUaQnsTzlFLaoJxOSh_
            source_type: api_record
            title: 中国历代人物传记资料库：王笙（CBDB 328161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328161&o=json
            external_identifier: CBDB:328161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5iJjdkhYivD15rGhLapXLc
        status: active
        display_name: 王笙
        merged_into_person_id: null
    - claim:
        id: c_-bZw5v_4ALDsBaUM2cuES5
        subject_person_id: p_7PrnkQ1vCQ85W1WNeGTe3T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Of3sgFbQ-7dLXBqLBSs0Z
          claim_id: c_-bZw5v_4ALDsBaUM2cuES5
          source_id: s_aeb3sQHq8NANJh0n9cWPny
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aeb3sQHq8NANJh0n9cWPny
            source_type: api_record
            title: 中国历代人物传记资料库：王籌（CBDB 328160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328160&o=json
            external_identifier: CBDB:328160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7PrnkQ1vCQ85W1WNeGTe3T
        status: active
        display_name: 王籌
        merged_into_person_id: null
    - claim:
        id: c_6SlYR1KH4DbDwZyMEZXlbH
        subject_person_id: p_CD7Ej34g8gyM4KRWj46ezZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7CEJqU92hMS2RgsgXJFyC
          claim_id: c_6SlYR1KH4DbDwZyMEZXlbH
          source_id: s_hCUbASrLGSX-f8QILn_-H9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hCUbASrLGSX-f8QILn_-H9
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 328165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json
            external_identifier: CBDB:328165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CD7Ej34g8gyM4KRWj46ezZ
        status: active
        display_name: 王簡
        merged_into_person_id: null
    - claim:
        id: c_DlCLJ-j9YLDclaRzLfxTTx
        subject_person_id: p_HxVPhw9dL6ewA5NrNhk92M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmO0VCyv3aRfHCn6hOGVoL
          claim_id: c_DlCLJ-j9YLDclaRzLfxTTx
          source_id: s_n3VQ-IhbrENufASj_oFC8q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n3VQ-IhbrENufASj_oFC8q
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 328173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json
            external_identifier: CBDB:328173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxVPhw9dL6ewA5NrNhk92M
        status: active
        display_name: 王簪
        merged_into_person_id: null
    - claim:
        id: c_im1NfqtpTutr51pi4_lzJq
        subject_person_id: p_KdcwAzhHL5tGaabPuXFMG9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjzwQqje9Z5Raq2uZBtsHc
          claim_id: c_im1NfqtpTutr51pi4_lzJq
          source_id: s_dBAFvraShmyZP5bKnFjqZ7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dBAFvraShmyZP5bKnFjqZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王笏（CBDB 328167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328167&o=json
            external_identifier: CBDB:328167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdcwAzhHL5tGaabPuXFMG9
        status: active
        display_name: 王笏
        merged_into_person_id: null
    - claim:
        id: c_NoQhkf6gP5fwbzL4HfDm7x
        subject_person_id: p_NXQP9MAoFTd4AtvGj4u9mE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sczhh3n-xk68gl2ZPfyCPk
          claim_id: c_NoQhkf6gP5fwbzL4HfDm7x
          source_id: s_W2cn5-aVpXAWhYsqdD-RjB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W2cn5-aVpXAWhYsqdD-RjB
            source_type: api_record
            title: 中国历代人物传记资料库：王竹（CBDB 328174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328174&o=json
            external_identifier: CBDB:328174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NXQP9MAoFTd4AtvGj4u9mE
        status: active
        display_name: 王竹
        merged_into_person_id: null
    - claim:
        id: c_1C62HSDFgpQ3SgAq3eF_Fq
        subject_person_id: p_PzRePc5EJoq1KbEJRhjzun
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1ZfV9agJAaZ-nqXBY4a7b
          claim_id: c_1C62HSDFgpQ3SgAq3eF_Fq
          source_id: s_kZM-E3OQxwvBFpcAA_9e5z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kZM-E3OQxwvBFpcAA_9e5z
            source_type: api_record
            title: 中国历代人物传记资料库：王箎（CBDB 328163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328163&o=json
            external_identifier: CBDB:328163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PzRePc5EJoq1KbEJRhjzun
        status: active
        display_name: 王箎
        merged_into_person_id: null
    - claim:
        id: c_xKoi-L-0jDIp4aid2p2iLt
        subject_person_id: p_T3eCYqvXkHmvxr7mbNPNzJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3JBC-2wCa9fTPIHzZaEZ3
          claim_id: c_xKoi-L-0jDIp4aid2p2iLt
          source_id: s_Zbyb6l2dOMrDxft3OXSP0p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Zbyb6l2dOMrDxft3OXSP0p
            source_type: api_record
            title: 中国历代人物传记资料库：王笥（CBDB 328179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328179&o=json
            external_identifier: CBDB:328179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3eCYqvXkHmvxr7mbNPNzJ
        status: active
        display_name: 王笥
        merged_into_person_id: null
    - claim:
        id: c_Ay_IVRwjEGC4iDCcFz6w-L
        subject_person_id: p_aHPF2nHn3ZpvQSzEyKNrmv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI-LtNo9tn_mt2okf6B93o
          claim_id: c_Ay_IVRwjEGC4iDCcFz6w-L
          source_id: s_-VIsHXN7AJCt3sCCcrH60U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-VIsHXN7AJCt3sCCcrH60U
            source_type: api_record
            title: 中国历代人物传记资料库：王籛（CBDB 328177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json
            external_identifier: CBDB:328177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aHPF2nHn3ZpvQSzEyKNrmv
        status: active
        display_name: 王籛
        merged_into_person_id: null
    - claim:
        id: c_KVo0OyxxL2A1gwjxTl2jUJ
        subject_person_id: p_bXZbmrS1UaMK1UjrZBShnE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3jhVGcIRHpnVa6Y1nt3sN
          claim_id: c_KVo0OyxxL2A1gwjxTl2jUJ
          source_id: s_YlQ-EkNrIPSLs7i0RpXUdJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YlQ-EkNrIPSLs7i0RpXUdJ
            source_type: api_record
            title: 中国历代人物传记资料库：王答（CBDB 328170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328170&o=json
            external_identifier: CBDB:328170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bXZbmrS1UaMK1UjrZBShnE
        status: active
        display_name: 王答
        merged_into_person_id: null
    - claim:
        id: c_a7qI_pPYi0pe7N3FuJGq00
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ooSt6tTvwspA6VdUfqmTRj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ago853Snf_SpuUcV-F6ZQ-
          claim_id: c_a7qI_pPYi0pe7N3FuJGq00
          source_id: s_hedxKt8BI2_jTeg_hI-b3h
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hedxKt8BI2_jTeg_hI-b3h
            source_type: api_record
            title: 中国历代人物传记资料库：王籥（CBDB 328159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328159&o=json
            external_identifier: CBDB:328159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ooSt6tTvwspA6VdUfqmTRj
        status: active
        display_name: 王籥
        merged_into_person_id: null
    - claim:
        id: c_SKzWnVeVb0GBbTSQPyw6HQ
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tM6cJhm73R8fKS4eb5qBHW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ghuu9g1rM74TcNTS0cARyk
          claim_id: c_SKzWnVeVb0GBbTSQPyw6HQ
          source_id: s_1CoQ_LZDOFmKZU7Y2_JHHi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1CoQ_LZDOFmKZU7Y2_JHHi
            source_type: api_record
            title: 中国历代人物传记资料库：王箋（CBDB 328172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json
            external_identifier: CBDB:328172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tM6cJhm73R8fKS4eb5qBHW
        status: active
        display_name: 王箋
        merged_into_person_id: null
    - claim:
        id: c_-LZUi-8mXj5WXxOALjiMZt
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y3rQXS8GdBKYUREVoYrfCs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VKjCIYRVglOhh2tuoHD-A1
          claim_id: c_-LZUi-8mXj5WXxOALjiMZt
          source_id: s_GEnSRCMMxC6Sz8sN31q0sk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GEnSRCMMxC6Sz8sN31q0sk
            source_type: api_record
            title: 中国历代人物传记资料库：王籣（CBDB 328178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328178&o=json
            external_identifier: CBDB:328178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y3rQXS8GdBKYUREVoYrfCs
        status: active
        display_name: 王籣
        merged_into_person_id: null
    - claim:
        id: c_ciWy7pAy_IT8o2LcdiMPPy
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zEuXgNPzNyhH1Dt4YEDNHE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Qh9uD1reOsk0EmZaw3nbY
          claim_id: c_ciWy7pAy_IT8o2LcdiMPPy
          source_id: s_5rKuPh6rTEzI-L430BUV9J
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5rKuPh6rTEzI-L430BUV9J
            source_type: api_record
            title: 中国历代人物传记资料库：王符（CBDB 328162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json
            external_identifier: CBDB:328162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zEuXgNPzNyhH1Dt4YEDNHE
        status: active
        display_name: 王符
        merged_into_person_id: null
    - claim:
        id: c_-qbAvztSm2A6Rv7g9ct9Ds
        subject_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zu98TRr6KJSR5KkKHM97Kg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHSbh5uOT8JI-cUlVJcNn8
          claim_id: c_-qbAvztSm2A6Rv7g9ct9Ds
          source_id: s_Qqzwcd1lSi6ojKbGmPwRz8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qqzwcd1lSi6ojKbGmPwRz8
            source_type: api_record
            title: 中国历代人物传记资料库：王簠（CBDB 328166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328166&o=json
            external_identifier: CBDB:328166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zu98TRr6KJSR5KkKHM97Kg
        status: active
        display_name: 王簠
        merged_into_person_id: null
---

# 王篆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篆 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | 王篆（生于1532年），明人物。明清進士進士，籍贯夷陵州，入仕進士。（中国历代人物传记资料库 CBDB 205090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| ancestors | p_6nYBhpCbadtLK7Qb2JDrdz | 王璲 | accepted |
| ancestors | p_dLJ7sEAxdkznybwp8rHiXD | 王傑 | accepted |
| other | p_2KcUZKCUdK4RPJmFdrf3y5 | 王笈 | accepted |
| other | p_2WktwwnTU4FENMPnQKtpiU | 王筥 | accepted |
| other | p_3HHmqJEpLXSB6PpgNSryHi | 王筵 | accepted |
| other | p_5iJjdkhYivD15rGhLapXLc | 王笙 | accepted |
| other | p_7PrnkQ1vCQ85W1WNeGTe3T | 王籌 | accepted |
| other | p_CD7Ej34g8gyM4KRWj46ezZ | 王簡 | accepted |
| other | p_HxVPhw9dL6ewA5NrNhk92M | 王簪 | accepted |
| other | p_KdcwAzhHL5tGaabPuXFMG9 | 王笏 | accepted |
| other | p_NXQP9MAoFTd4AtvGj4u9mE | 王竹 | accepted |
| other | p_PzRePc5EJoq1KbEJRhjzun | 王箎 | accepted |
| other | p_T3eCYqvXkHmvxr7mbNPNzJ | 王笥 | accepted |
| other | p_aHPF2nHn3ZpvQSzEyKNrmv | 王籛 | accepted |
| other | p_bXZbmrS1UaMK1UjrZBShnE | 王答 | accepted |
| other | p_ooSt6tTvwspA6VdUfqmTRj | 王籥 | accepted |
| other | p_tM6cJhm73R8fKS4eb5qBHW | 王箋 | accepted |
| other | p_y3rQXS8GdBKYUREVoYrfCs | 王籣 | accepted |
| other | p_zEuXgNPzNyhH1Dt4YEDNHE | 王符 | accepted |
| other | p_zu98TRr6KJSR5KkKHM97Kg | 王簠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王箎（CBDB 328163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328163&o=json)
- [中国历代人物传记资料库：王籌（CBDB 328160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328160&o=json)
- [中国历代人物传记资料库：王答（CBDB 328170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328170&o=json)
- [中国历代人物传记资料库：王符（CBDB 328162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json)
- [中国历代人物传记资料库：王簠（CBDB 328166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328166&o=json)
- [中国历代人物传记资料库：王笏（CBDB 328167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328167&o=json)
- [中国历代人物传记资料库：王笈（CBDB 328168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328168&o=json)
- [中国历代人物传记资料库：王箋（CBDB 328172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328172&o=json)
- [中国历代人物传记资料库：王簡（CBDB 328165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json)
- [中国历代人物传记资料库：王籛（CBDB 328177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328177&o=json)
- [中国历代人物传记资料库：王傑（CBDB 328152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json)
- [中国历代人物传记资料库：王筥（CBDB 328169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328169&o=json)
- [中国历代人物传记资料库：王籣（CBDB 328178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328178&o=json)
- [中国历代人物传记资料库：王良策（CBDB 328155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328155&o=json)
- [中国历代人物传记资料库：王笙（CBDB 328161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328161&o=json)
- [中国历代人物传记资料库：王笥（CBDB 328179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328179&o=json)
- [中国历代人物传记资料库：王璲（CBDB 328154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json)
- [中国历代人物传记资料库：王筵（CBDB 328171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json)
- [中国历代人物传记资料库：王籥（CBDB 328159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328159&o=json)
- [中国历代人物传记资料库：王簪（CBDB 328173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328173&o=json)
- [中国历代人物传记资料库：王竹（CBDB 328174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328174&o=json)
- [中国历代人物传记资料库：王篆（CBDB 205090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205090&o=json)
