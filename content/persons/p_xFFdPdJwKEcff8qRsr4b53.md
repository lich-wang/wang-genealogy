---
schema: wang-person/v1
id: p_xFFdPdJwKEcff8qRsr4b53
status: active
merged_into: null
display_name: 王紹紀
cbdb_id: 279053
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mT1poAzpL8Z1CEmDDX125V
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹紀，明人物。正德六年進士，籍贯遂寧，曾任七品散官。（中国历代人物传记资料库 CBDB 279053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q2IaMFBQdQeK_9W2yy-SId
          claim_id: c_mT1poAzpL8Z1CEmDDX125V
          source_id: s_JU6WdxENMJvNu5xaw7DoH5
          stance: supports
          locator: CBDB:279053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JU6WdxENMJvNu5xaw7DoH5
            source_type: api_record
            title: 中国历代人物传记资料库：王紹紀（CBDB 279053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279053&o=json
            external_identifier: CBDB:279053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTPH1tyMmpHwHRgP4rDbrG
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H8a1aS41cMFJHAxRbDStDK
          claim_id: c_pTPH1tyMmpHwHRgP4rDbrG
          source_id: s_JU6WdxENMJvNu5xaw7DoH5
          stance: supports
          locator: CBDB:279053
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_Pj4uES50aGcSDscobvk6je
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_575PN2zenAgGgPucoUhYuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O0mSAwM0FkgyaKwDY0ChJ5
          claim_id: c_Pj4uES50aGcSDscobvk6je
          source_id: s_Pcz5gGNzY05jmbzCVbu9iN
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宏 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王宏 之父／母。
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
        id: c_aD6jpM2jgJF5NwwIG89_GI
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrHnGbQLbkswCDhSDvm9i4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zwyGmqMOyPMSYMZWlt5MG0
          claim_id: c_aD6jpM2jgJF5NwwIG89_GI
          source_id: s_JNGWXIPaw0mCQ5vGeIplFH
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王寀 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王寀 之父／母。
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
        id: c_LpnklazN0Jif1nKFVSOJj8
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L94W3zHB9wTdKzvMk5FW8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MU16U7bgURN0RjnGr8aOv
          claim_id: c_LpnklazN0Jif1nKFVSOJj8
          source_id: s_T6AXkdJIEWLc75iy6kPmPT
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王賓 之父／母。
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
        id: c_-scB5fVeIgqG2LS-onfIh_
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNbsTBML2fPMzmP7bGF6KE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KagBQkC8d9nSA-Cb7avqGc
          claim_id: c_-scB5fVeIgqG2LS-onfIh_
          source_id: s_KHBmV2rbm-M4mVoGTnfkj9
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宓 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王宓 之父／母。
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
        id: c_jLZ4TXNiT3aUUhlaO4tD3P
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WAG4bv7AnBN5QxauzvM7pQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1OSigxgLV4wexgia_G90gr
          claim_id: c_jLZ4TXNiT3aUUhlaO4tD3P
          source_id: s_1kEcMWOM2Fw2vGrlN7_H9L
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宰 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王宰 之父／母。
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
        id: c_EOyAiFYbPxqTvD1IvB8cds
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NT5-WuAtZMdekDY07obRCs
          claim_id: c_EOyAiFYbPxqTvD1IvB8cds
          source_id: s_s-bP7wwFnATtms_OiFF5Uz
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王公正 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王公正 之父／母。
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
        id: c_SZJvCb0MdBprHzpUG-N8f-
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8L3VuucF7CjfcSpgUwBjH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vGr8XS62AQoGbJ6dEnTzYH
          claim_id: c_SZJvCb0MdBprHzpUG-N8f-
          source_id: s__uOQb1YL1mjBC8TZ7P151D
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宜 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王宜 之父／母。
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
        id: c_p8KPRVkjBj8T8L5_Uo4htg
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_idFGhxp89gx2A42LcmhSeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SXmIHVd6V5jp1YHbC1Ty0
          claim_id: c_p8KPRVkjBj8T8L5_Uo4htg
          source_id: s_qsrETQ2krScSeiDST3kmrg
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王宸 之父／母。
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
        id: c_-4X3WipKy2wGWHCVUDWcwM
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kHHPCpYNN3LLHAdyLEy4C9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbWYuaDBvEczQNhsnqKiCd
          claim_id: c_-4X3WipKy2wGWHCVUDWcwM
          source_id: s_n5F9d112SvtSkHMr3Pueo6
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王宇 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王宇 之父／母。
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
        id: c_hFSH_2BnEAB0-asdS9L7n4
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ovUyUTmfFcaFnPEtCeUYe7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DfADCE49dRwVrr26R8wGMn
          claim_id: c_hFSH_2BnEAB0-asdS9L7n4
          source_id: s_lGGMgJnKDOs8G3bjz-efYQ
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王寔 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王寔 之父／母。
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
        id: c_Svha8Gb8orC-AbDpdbVTbs
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAZqZv44Jk4YRjmrCJ1gEz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LrF4VLrt5vcZn8A5bG9It
          claim_id: c_Svha8Gb8orC-AbDpdbVTbs
          source_id: s_8VSHik688S_Ugf2zYfF268
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王寓 与 王寧 为同胞（CBDB 记「兄」），王寧 之父／母即 王寓 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹紀，明人物。正德六年進士，籍贯遂寧，曾任七品散官。（中国历代人物传记资料库 CBDB 279053） | accepted |
| name.primary | 王紹紀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |
| children | p_575PN2zenAgGgPucoUhYuD | 王宏 | accepted |
| children | p_KrHnGbQLbkswCDhSDvm9i4 | 王寀 | accepted |
| children | p_L94W3zHB9wTdKzvMk5FW8v | 王賓 | accepted |
| children | p_LNbsTBML2fPMzmP7bGF6KE | 王宓 | accepted |
| children | p_WAG4bv7AnBN5QxauzvM7pQ | 王宰 | accepted |
| children | p_WbJ6j4zGGAHSjY4ZqR7wfa | 王公正 | accepted |
| children | p_X8L3VuucF7CjfcSpgUwBjH | 王宜 | accepted |
| children | p_idFGhxp89gx2A42LcmhSeP | 王宸 | accepted |
| children | p_kHHPCpYNN3LLHAdyLEy4C9 | 王宇 | accepted |
| children | p_ovUyUTmfFcaFnPEtCeUYe7 | 王寔 | accepted |
| children | p_yAZqZv44Jk4YRjmrCJ1gEz | 王寓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 278861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278861&o=json)
- [中国历代人物传记资料库：王寀（CBDB 279065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279065&o=json)
- [中国历代人物传记资料库：王宸（CBDB 278870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278870&o=json)
- [中国历代人物传记资料库：王公正（CBDB 279057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json)
- [中国历代人物传记资料库：王宏（CBDB 278865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278865&o=json)
- [中国历代人物传记资料库：王宓（CBDB 279059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279059&o=json)
- [中国历代人物传记资料库：王寧（CBDB 201843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json)
- [中国历代人物传记资料库：王紹紀（CBDB 279053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279053&o=json)
- [中国历代人物传记资料库：王寔（CBDB 279061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279061&o=json)
- [中国历代人物传记资料库：王宜（CBDB 278859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278859&o=json)
- [中国历代人物传记资料库：王宇（CBDB 278869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278869&o=json)
- [中国历代人物传记资料库：王寓（CBDB 278871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278871&o=json)
- [中国历代人物传记资料库：王宰（CBDB 279066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279066&o=json)
