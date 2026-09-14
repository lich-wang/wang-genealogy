---
schema: wang-person/v1
id: p_x8mQMeJnHp1fPict2xPV7L
status: active
merged_into: null
display_name: 王中
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxgdaexiPEEdurZmjkUE7A
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4sjR7vv6g3AJ9nzSHTxHUj
          claim_id: c_uxgdaexiPEEdurZmjkUE7A
          source_id: s_8QTQSnfdxP8A23vs42VSsj
          stance: supports
          locator: CBDB:200448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200448）
          source: &a1
            id: s_8QTQSnfdxP8A23vs42VSsj
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 200448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json
            external_identifier: CBDB:200448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4TDYKsz9Ht6U5fH8wHTLwQ
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1i5WCztiXPwA9GKgpwabei
          claim_id: c_4TDYKsz9Ht6U5fH8wHTLwQ
          source_id: s_8QTQSnfdxP8A23vs42VSsj
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
        id: c_MLDT3zwGXRqCfHb588JUWr
        subject_person_id: p_x8mQMeJnHp1fPict2xPV7L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中（生于1443年），明人物。明清進士進士，籍贯寧海，入仕進士。（中国历代人物传记资料库 CBDB 200448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6ZCYJGf29aMEiO5UTP3n0
          claim_id: c_MLDT3zwGXRqCfHb588JUWr
          source_id: s_8QTQSnfdxP8A23vs42VSsj
          stance: supports
          locator: CBDB:200448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Op5FC_jf765rWXpgKy6gq0
        subject_person_id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKjVL3f5VqnIjQB-_WPe9z
          claim_id: c_Op5FC_jf765rWXpgKy6gq0
          source_id: s_UZW7prP5gENTbsK36GuEPH
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UZW7prP5gENTbsK36GuEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗曜（CBDB 258050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json
            external_identifier: CBDB:258050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XAZFGAYeQkDJ8m4Kt7zkQf
        status: active
        display_name: 王宗曜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__sZqA190UtAwXUTzCyGvty
        subject_person_id: p_Cj6vGAMv5ZbiFFJLZpuwPf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1lKINrcmd8k_LT2uZunGj
          claim_id: c__sZqA190UtAwXUTzCyGvty
          source_id: s_Z7Cg1BCURR1JT9LcZb5siE
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z7Cg1BCURR1JT9LcZb5siE
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 258049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258049&o=json
            external_identifier: CBDB:258049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cj6vGAMv5ZbiFFJLZpuwPf
        status: active
        display_name: 王文奎
        merged_into_person_id: null
    - claim:
        id: c_uk1o9W6CHjCeS-CzUsKbOI
        subject_person_id: p_9NbEpLfAQRZh3XBJbRK4xk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P51cVcPI0TdWyaiMX8mqWM
          claim_id: c_uk1o9W6CHjCeS-CzUsKbOI
          source_id: s_c6ECLnk2zr9w6SJK4PX5WU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c6ECLnk2zr9w6SJK4PX5WU
            source_type: api_record
            title: 中国历代人物传记资料库：王公蒙（CBDB 258048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json
            external_identifier: CBDB:258048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9NbEpLfAQRZh3XBJbRK4xk
        status: active
        display_name: 王公蒙
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Ir39PufVD-Jamm5JafKMzh
        subject_person_id: p_7XWkven58npQrrRbKAf8FD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AbCNo5jLvy67xXB4ECoTOy
          claim_id: c_Ir39PufVD-Jamm5JafKMzh
          source_id: s_HK9vCb0SrCmLoI4-hkFk5w
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HK9vCb0SrCmLoI4-hkFk5w
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鑑（CBDB 258061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258061&o=json
            external_identifier: CBDB:258061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7XWkven58npQrrRbKAf8FD
        status: active
        display_name: 王孟鑑
        merged_into_person_id: null
    - claim:
        id: c_leQHe6gcvXSGOm4ldqOOmD
        subject_person_id: p_7Y6h92yvWxBQAUwmv4t23M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T1FKIOsREp4EIQkK37lrql
          claim_id: c_leQHe6gcvXSGOm4ldqOOmD
          source_id: s_1ET4kDrrO3W07eW0GocHDK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ET4kDrrO3W07eW0GocHDK
            source_type: api_record
            title: 中国历代人物传记资料库：王孟遠（CBDB 258055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258055&o=json
            external_identifier: CBDB:258055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Y6h92yvWxBQAUwmv4t23M
        status: active
        display_name: 王孟遠
        merged_into_person_id: null
    - claim:
        id: c_ntsJKNjeHl4O_ibZ8GCNwc
        subject_person_id: p_Bvs1tpB2TZ6i77o8kc3BTS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYn9yzCwNv5XDYHPH2qhMI
          claim_id: c_ntsJKNjeHl4O_ibZ8GCNwc
          source_id: s_jiKDMs8ryx1DEhvAnjNH5J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jiKDMs8ryx1DEhvAnjNH5J
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鍠（CBDB 258060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258060&o=json
            external_identifier: CBDB:258060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bvs1tpB2TZ6i77o8kc3BTS
        status: active
        display_name: 王孟鍠
        merged_into_person_id: null
    - claim:
        id: c_U7rTAni2wWZmd5iJ3Vt_HA
        subject_person_id: p_MmBv8UuDK8TCMHPc1z1WJW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xZmPW6XOAmNCMZztkJQD8-
          claim_id: c_U7rTAni2wWZmd5iJ3Vt_HA
          source_id: s_0ZxH-IVAou0-kF8ZDmA38k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ZxH-IVAou0-kF8ZDmA38k
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鈞（CBDB 258059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258059&o=json
            external_identifier: CBDB:258059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MmBv8UuDK8TCMHPc1z1WJW
        status: active
        display_name: 王孟鈞
        merged_into_person_id: null
    - claim:
        id: c_W8LRFap_Ar4F4tOkvIzcm9
        subject_person_id: p_PBwmAQoDn382AYrqgEADiL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRZDfmpywQ0xBIHytPtAg4
          claim_id: c_W8LRFap_Ar4F4tOkvIzcm9
          source_id: s_PTmsKbSo4xo8E4_SHRNxCh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PTmsKbSo4xo8E4_SHRNxCh
            source_type: api_record
            title: 中国历代人物传记资料库：王孟良（CBDB 258056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json
            external_identifier: CBDB:258056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PBwmAQoDn382AYrqgEADiL
        status: active
        display_name: 王孟良
        merged_into_person_id: null
    - claim:
        id: c_L_r8Un-WRy9EcFyWLi_GMI
        subject_person_id: p_QTZhJQRm4DvyvhM9cqV8VT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vyo8Lhc80aP2peHqf8oLfd
          claim_id: c_L_r8Un-WRy9EcFyWLi_GMI
          source_id: s_lKqnSh2ddlzdmadtP1-WNT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lKqnSh2ddlzdmadtP1-WNT
            source_type: api_record
            title: 中国历代人物传记资料库：王孟鎧（CBDB 258064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258064&o=json
            external_identifier: CBDB:258064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QTZhJQRm4DvyvhM9cqV8VT
        status: active
        display_name: 王孟鎧
        merged_into_person_id: null
    - claim:
        id: c_vaoxmqbxt8UM_MYAAAU2Wr
        subject_person_id: p_g1CdQkAjpo6aBj7U56pDri
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saEzB1AscDy7Hoc5dSfOgQ
          claim_id: c_vaoxmqbxt8UM_MYAAAU2Wr
          source_id: s_Su6gRgFac-jCvpelsNsviy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Su6gRgFac-jCvpelsNsviy
            source_type: api_record
            title: 中国历代人物传记资料库：王孟錢（CBDB 258063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258063&o=json
            external_identifier: CBDB:258063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g1CdQkAjpo6aBj7U56pDri
        status: active
        display_name: 王孟錢
        merged_into_person_id: null
    - claim:
        id: c_Ymq-NMHppaBEbeM_rYogAV
        subject_person_id: p_mrif1eywc1pQdgqjKdUDJ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fY_S-yhLfN_HbmexkvNij4
          claim_id: c_Ymq-NMHppaBEbeM_rYogAV
          source_id: s_KAt4ExcKusU-CJ3jmGdWJQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KAt4ExcKusU-CJ3jmGdWJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟洪（CBDB 258054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258054&o=json
            external_identifier: CBDB:258054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mrif1eywc1pQdgqjKdUDJ6
        status: active
        display_name: 王孟洪
        merged_into_person_id: null
    - claim:
        id: c_FL_43pk4oj2RHcF8dt25h-
        subject_person_id: p_ventMwBMX62g8cCmpzeTXW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEleMQoLumxfc2SKnbrxNV
          claim_id: c_FL_43pk4oj2RHcF8dt25h-
          source_id: s_bQGAWoUQNleWjkCpLGiSTQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bQGAWoUQNleWjkCpLGiSTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王孟寬（CBDB 258058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json
            external_identifier: CBDB:258058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ventMwBMX62g8cCmpzeTXW
        status: active
        display_name: 王孟寬
        merged_into_person_id: null
    - claim:
        id: c_aNlrLj02V7Sm8gmWs73dO9
        subject_person_id: p_whxfs6F7FGcjhCSBTAZMKC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x8mQMeJnHp1fPict2xPV7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wrMB2WgA30i3yZaruX_7tK
          claim_id: c_aNlrLj02V7Sm8gmWs73dO9
          source_id: s_KisyDkVUdcsEeZTIZpkVjV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200448 王中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KisyDkVUdcsEeZTIZpkVjV
            source_type: api_record
            title: 中国历代人物传记资料库：王孟錡（CBDB 258062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258062&o=json
            external_identifier: CBDB:258062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_whxfs6F7FGcjhCSBTAZMKC
        status: active
        display_name: 王孟錡
        merged_into_person_id: null
---

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | 王中（生于1443年），明人物。明清進士進士，籍贯寧海，入仕進士。（中国历代人物传记资料库 CBDB 200448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XAZFGAYeQkDJ8m4Kt7zkQf | 王宗曜 | accepted |
| ancestors | p_Cj6vGAMv5ZbiFFJLZpuwPf | 王文奎 | accepted |
| ancestors | p_9NbEpLfAQRZh3XBJbRK4xk | 王公蒙 | accepted |
| other | p_7XWkven58npQrrRbKAf8FD | 王孟鑑 | accepted |
| other | p_7Y6h92yvWxBQAUwmv4t23M | 王孟遠 | accepted |
| other | p_Bvs1tpB2TZ6i77o8kc3BTS | 王孟鍠 | accepted |
| other | p_MmBv8UuDK8TCMHPc1z1WJW | 王孟鈞 | accepted |
| other | p_PBwmAQoDn382AYrqgEADiL | 王孟良 | accepted |
| other | p_QTZhJQRm4DvyvhM9cqV8VT | 王孟鎧 | accepted |
| other | p_g1CdQkAjpo6aBj7U56pDri | 王孟錢 | accepted |
| other | p_mrif1eywc1pQdgqjKdUDJ6 | 王孟洪 | accepted |
| other | p_ventMwBMX62g8cCmpzeTXW | 王孟寬 | accepted |
| other | p_whxfs6F7FGcjhCSBTAZMKC | 王孟錡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公蒙（CBDB 258048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258048&o=json)
- [中国历代人物传记资料库：王孟洪（CBDB 258054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258054&o=json)
- [中国历代人物传记资料库：王孟鍠（CBDB 258060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258060&o=json)
- [中国历代人物传记资料库：王孟鑑（CBDB 258061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258061&o=json)
- [中国历代人物传记资料库：王孟鈞（CBDB 258059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258059&o=json)
- [中国历代人物传记资料库：王孟鎧（CBDB 258064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258064&o=json)
- [中国历代人物传记资料库：王孟寬（CBDB 258058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258058&o=json)
- [中国历代人物传记资料库：王孟良（CBDB 258056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json)
- [中国历代人物传记资料库：王孟錡（CBDB 258062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258062&o=json)
- [中国历代人物传记资料库：王孟錢（CBDB 258063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258063&o=json)
- [中国历代人物传记资料库：王孟遠（CBDB 258055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258055&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 258049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258049&o=json)
- [中国历代人物传记资料库：王中（CBDB 200448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200448&o=json)
- [中国历代人物传记资料库：王宗曜（CBDB 258050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258050&o=json)
