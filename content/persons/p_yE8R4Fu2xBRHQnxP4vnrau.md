---
schema: wang-person/v1
id: p_yE8R4Fu2xBRHQnxP4vnrau
status: active
merged_into: null
display_name: 王寧
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWrov8rrXE3w2P11gGdDqP
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hq1N4YcwnP7KWKJNFgtZuV
          claim_id: c_BWrov8rrXE3w2P11gGdDqP
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: CBDB:201843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201843）
          source: &a1
            id: s_dd11Ucp3nBYq5pLBRoWsZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 201843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json
            external_identifier: CBDB:201843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZJNM5Tn2gW1D9i4m3JU9Te
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESFKCewjNzx9yBDRFneWxp
          claim_id: c_ZJNM5Tn2gW1D9i4m3JU9Te
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
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
        id: c_Kd5q1aF7uvge6z27DqnehN
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧（生于1483年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 201843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xcctGhUZ4xq4ujK6QrmkTp
          claim_id: c_Kd5q1aF7uvge6z27DqnehN
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: CBDB:201843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xSv-Ep-KvbMPH7w_QufvCv
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6aIGbMTpxw76Pze_u0g11
          claim_id: c_xSv-Ep-KvbMPH7w_QufvCv
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Czx-sIwPNSGS29NmN3UOxj
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KsgT5UMPaPDmQXhkv3U2N8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SruEEEWgkkr_eKwOHczejE
          claim_id: c_Czx-sIwPNSGS29NmN3UOxj
          source_id: s_2cxQLxByZBltlp6thWByG_
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2cxQLxByZBltlp6thWByG_
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王寧妻)（CBDB 279056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279056&o=json
            external_identifier: CBDB:279056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KsgT5UMPaPDmQXhkv3U2N8
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_iemBz_6Y5hyZswpNKw4sGz
        subject_person_id: p_gmSkBYBnj6AUDqkC7pewDS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uby6xaCWTSlBwa27NZtNah
          claim_id: c_iemBz_6Y5hyZswpNKw4sGz
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gmSkBYBnj6AUDqkC7pewDS
        status: active
        display_name: 王某選
        merged_into_person_id: null
    - claim:
        id: c_rMcXaTlHmS0773bm1lM6YU
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZxy0L7T7JDFm1o4x2blKt
          claim_id: c_rMcXaTlHmS0773bm1lM6YU
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2EDQ55UQpfwb7UC1C3XQAT
        status: active
        display_name: 王郁文
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2p79G9ER43sE_g1YFAnFsZ
        subject_person_id: p_575PN2zenAgGgPucoUhYuD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OzTE_AP0vWqcmLj2wD4W4D
          claim_id: c_2p79G9ER43sE_g1YFAnFsZ
          source_id: s_Pcz5gGNzY05jmbzCVbu9iN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Pcz5gGNzY05jmbzCVbu9iN
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 278865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278865&o=json
            external_identifier: CBDB:278865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_575PN2zenAgGgPucoUhYuD
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_42FXNoZl3JB_By3KmYVbwc
        subject_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OC0zVALbaKzBYixlrvZ8pL
          claim_id: c_42FXNoZl3JB_By3KmYVbwc
          source_id: s_JNGWXIPaw0mCQ5vGeIplFH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JNGWXIPaw0mCQ5vGeIplFH
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 279065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json
            external_identifier: CBDB:279065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KrHnGbQLbkswCDhSDvm9i4
        status: active
        display_name: 王寀
        merged_into_person_id: null
    - claim:
        id: c_85uFLYFmp5Db2-SDja7hcY
        subject_person_id: p_L94W3zHB9wTdKzvMk5FW8v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wP0t0kjHJ6SSXW4pV-63me
          claim_id: c_85uFLYFmp5Db2-SDja7hcY
          source_id: s_T6AXkdJIEWLc75iy6kPmPT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T6AXkdJIEWLc75iy6kPmPT
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 278861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278861&o=json
            external_identifier: CBDB:278861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L94W3zHB9wTdKzvMk5FW8v
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_lmSKlXTY0Es9iegU6eFGlh
        subject_person_id: p_LNbsTBML2fPMzmP7bGF6KE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRgXtYKSKWZkT3__l4lygC
          claim_id: c_lmSKlXTY0Es9iegU6eFGlh
          source_id: s_KHBmV2rbm-M4mVoGTnfkj9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHBmV2rbm-M4mVoGTnfkj9
            source_type: api_record
            title: 中国历代人物传记资料库：王宓（CBDB 279059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279059&o=json
            external_identifier: CBDB:279059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LNbsTBML2fPMzmP7bGF6KE
        status: active
        display_name: 王宓
        merged_into_person_id: null
    - claim:
        id: c_GnZ0HgF22FFTcLVMcnEIHy
        subject_person_id: p_WAG4bv7AnBN5QxauzvM7pQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDdonfzGa7zJhd_BbZOgFx
          claim_id: c_GnZ0HgF22FFTcLVMcnEIHy
          source_id: s_1kEcMWOM2Fw2vGrlN7_H9L
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1kEcMWOM2Fw2vGrlN7_H9L
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 279066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279066&o=json
            external_identifier: CBDB:279066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WAG4bv7AnBN5QxauzvM7pQ
        status: active
        display_name: 王宰
        merged_into_person_id: null
    - claim:
        id: c_Rjgr9un7tpCc7darNomLtl
        subject_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUDyaZtILCb1O8ESJ9lGKn
          claim_id: c_Rjgr9un7tpCc7darNomLtl
          source_id: s_s-bP7wwFnATtms_OiFF5Uz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s-bP7wwFnATtms_OiFF5Uz
            source_type: api_record
            title: 中国历代人物传记资料库：王公正（CBDB 279057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json
            external_identifier: CBDB:279057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        status: active
        display_name: 王公正
        merged_into_person_id: null
    - claim:
        id: c_Yf3ik6mm66edWFrYhUpugk
        subject_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3AIZWYNjpoFrnCrybxkopB
          claim_id: c_Yf3ik6mm66edWFrYhUpugk
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__uOQb1YL1mjBC8TZ7P151D
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 278859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json
            external_identifier: CBDB:278859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8L3VuucF7CjfcSpgUwBjH
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_7Ec0u7xUtRKIqsGAwqLF7D
        subject_person_id: p_idFGhxp89gx2A42LcmhSeP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zWwZffa0So11rZgW6se-J_
          claim_id: c_7Ec0u7xUtRKIqsGAwqLF7D
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsrETQ2krScSeiDST3kmrg
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 278870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json
            external_identifier: CBDB:278870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_idFGhxp89gx2A42LcmhSeP
        status: active
        display_name: 王宸
        merged_into_person_id: null
    - claim:
        id: c_-VkiUOVnpOgiRQ9TH3EZ7G
        subject_person_id: p_kHHPCpYNN3LLHAdyLEy4C9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mYADskju-Fybm_qSDkOHHa
          claim_id: c_-VkiUOVnpOgiRQ9TH3EZ7G
          source_id: s_n5F9d112SvtSkHMr3Pueo6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n5F9d112SvtSkHMr3Pueo6
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 278869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278869&o=json
            external_identifier: CBDB:278869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kHHPCpYNN3LLHAdyLEy4C9
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_R-jg6Hr1XVlDrCp_rk4ovB
        subject_person_id: p_ovUyUTmfFcaFnPEtCeUYe7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GHbfx8XJiQ3pLEMCiEo5tJ
          claim_id: c_R-jg6Hr1XVlDrCp_rk4ovB
          source_id: s_lGGMgJnKDOs8G3bjz-efYQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lGGMgJnKDOs8G3bjz-efYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王寔（CBDB 279061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279061&o=json
            external_identifier: CBDB:279061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ovUyUTmfFcaFnPEtCeUYe7
        status: active
        display_name: 王寔
        merged_into_person_id: null
    - claim:
        id: c_gDWhLRl99SMz_xerQfB_Lb
        subject_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EEKOW0Zdv04cwJ41_Jc1zH
          claim_id: c_gDWhLRl99SMz_xerQfB_Lb
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8VSHik688S_Ugf2zYfF268
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 278871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json
            external_identifier: CBDB:278871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yAZqZv44Jk4YRjmrCJ1gEz
        status: active
        display_name: 王寓
        merged_into_person_id: null
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| birth.date | 1483年 | accepted |
| bio.summary | 王寧（生于1483年），明人物。明清進士進士，籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 201843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| spouses | p_KsgT5UMPaPDmQXhkv3U2N8 | 楊氏 | accepted |
| ancestors | p_gmSkBYBnj6AUDqkC7pewDS | 王某選 | accepted |
| ancestors | p_2EDQ55UQpfwb7UC1C3XQAT | 王郁文 | accepted |
| other | p_575PN2zenAgGgPucoUhYuD | 王宏 | accepted |
| other | p_KrHnGbQLbkswCDhSDvm9i4 | 王寀 | accepted |
| other | p_L94W3zHB9wTdKzvMk5FW8v | 王賓 | accepted |
| other | p_LNbsTBML2fPMzmP7bGF6KE | 王宓 | accepted |
| other | p_WAG4bv7AnBN5QxauzvM7pQ | 王宰 | accepted |
| other | p_WbJ6j4zGGAHSjY4ZqR7wfa | 王公正 | accepted |
| other | p_X8L3VuucF7CjfcSpgUwBjH | 王宜 | accepted |
| other | p_idFGhxp89gx2A42LcmhSeP | 王宸 | accepted |
| other | p_kHHPCpYNN3LLHAdyLEy4C9 | 王宇 | accepted |
| other | p_ovUyUTmfFcaFnPEtCeUYe7 | 王寔 | accepted |
| other | p_yAZqZv44Jk4YRjmrCJ1gEz | 王寓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 278861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278861&o=json)
- [中国历代人物传记资料库：王寀（CBDB 279065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json)
- [中国历代人物传记资料库：王宸（CBDB 278870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json)
- [中国历代人物传记资料库：王公正（CBDB 279057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json)
- [中国历代人物传记资料库：王宏（CBDB 278865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278865&o=json)
- [中国历代人物传记资料库：王宓（CBDB 279059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279059&o=json)
- [中国历代人物传记资料库：王寧（CBDB 201843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json)
- [中国历代人物传记资料库：王寔（CBDB 279061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279061&o=json)
- [中国历代人物传记资料库：王宜（CBDB 278859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json)
- [中国历代人物传记资料库：王宇（CBDB 278869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278869&o=json)
- [中国历代人物传记资料库：王寓（CBDB 278871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json)
- [中国历代人物传记资料库：王宰（CBDB 279066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279066&o=json)
- [中国历代人物传记资料库：楊氏(王寧妻)（CBDB 279056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279056&o=json)
