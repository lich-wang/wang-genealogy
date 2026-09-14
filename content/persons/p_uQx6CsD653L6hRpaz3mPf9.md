---
schema: wang-person/v1
id: p_uQx6CsD653L6hRpaz3mPf9
status: active
merged_into: null
display_name: 王同祖
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WkGMJAaLwkUfkHJZhZA4mp
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7wkTsPCUixmJL49b3FkC7
          claim_id: c_WkGMJAaLwkUfkHJZhZA4mp
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: CBDB:126516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126516）
          source: &a1
            id: s_1syMbZKNxAvCUu4pgsdbjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王同祖（CBDB 126516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json
            external_identifier: CBDB:126516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9SQsrJBzAQQrSJ2gRnnHeu
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CD4TrCwCPU7u5fDczUBfMr
          claim_id: c_9SQsrJBzAQQrSJ2gRnnHeu
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
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
        id: c_YHjPKBM7DxgfPz8pG2nL3N
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNPDF73GwPwdRuzz7RNiMg
          claim_id: c_YHjPKBM7DxgfPz8pG2nL3N
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
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
        id: c_1yQYQVppPXyU3xD3W989jE
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同祖（1497年—1551年），明人物。隆慶五年進士，籍贯崑山，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126516）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UcLWEXGZHUzbYMeH3SbM4k
          claim_id: c_1yQYQVppPXyU3xD3W989jE
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: CBDB:126516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_73TwUCaNvmGDE2Sj9UgBAy
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qOhS3JptvL8TsEhaO5MoFp
          claim_id: c_73TwUCaNvmGDE2Sj9UgBAy
          source_id: s_g7PvXEm32PrkrhEsYaPNjG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g7PvXEm32PrkrhEsYaPNjG
            source_type: api_record
            title: 中国历代人物传记资料库：王銀（CBDB 283926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283926&o=json
            external_identifier: CBDB:283926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XDFGKptw1EWAKBbTEUcvCN
        status: active
        display_name: 王銀
        merged_into_person_id: null
  children:
    - claim:
        id: c_yd2bB5x4FLIJRA-0Y23OYs
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tXZASZkZUbtAHM4Rg6fiXV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgSnWnBzxgTRzGobq79NXg
          claim_id: c_yd2bB5x4FLIJRA-0Y23OYs
          source_id: s_2amJnBHLFEU78yAFc6hn52
          stance: supports
          locator: 江南通志，lgid=65724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2amJnBHLFEU78yAFc6hn52
            source_type: api_record
            title: 中国历代人物传记资料库：王逢年（CBDB 126693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json
            external_identifier: CBDB:126693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tXZASZkZUbtAHM4Rg6fiXV
        status: active
        display_name: 王逢年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iYpqsuzferW29ak1RYxJfV
        subject_person_id: p_8u6YwJLN4LLPN3hh45YHPS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Dfp5jqskhGy-EGYDNSbPa
          claim_id: c_iYpqsuzferW29ak1RYxJfV
          source_id: s_QWpxtE3kN6umzCuHgf3aXK
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QWpxtE3kN6umzCuHgf3aXK
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 283924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283924&o=json
            external_identifier: CBDB:283924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8u6YwJLN4LLPN3hh45YHPS
        status: active
        display_name: 王復
        merged_into_person_id: null
    - claim:
        id: c_OGv3XXBEwNJv1a5EFNaqyg
        subject_person_id: p_cFYBiN2By1pvP86HyaLdUp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_omqu2RVSLGA68eCG-zMHYZ
          claim_id: c_OGv3XXBEwNJv1a5EFNaqyg
          source_id: s_A7mQcDzdZYPVUaQGnRjmgK
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A7mQcDzdZYPVUaQGnRjmgK
            source_type: api_record
            title: 中国历代人物传记资料库：王曰敏（CBDB 283925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283925&o=json
            external_identifier: CBDB:283925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cFYBiN2By1pvP86HyaLdUp
        status: active
        display_name: 王曰敏
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_XoFxsq_dt8u2BAA7MgxN5V
        subject_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_miXknFcV-VXlQbaxx4fiCC
          claim_id: c_XoFxsq_dt8u2BAA7MgxN5V
          source_id: s_3Da37TYtnd1BnjLerJfID8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3Da37TYtnd1BnjLerJfID8
            source_type: api_record
            title: 中国历代人物传记资料库：王橞（CBDB 283934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json
            external_identifier: CBDB:283934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1LEh3MeYQq6cJbuU57kEwb
        status: active
        display_name: 王橞
        merged_into_person_id: null
    - claim:
        id: c_GErikKBzK7TsM7g_g63USf
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB8A0g0FsxMOptY4V4xNeP
          claim_id: c_GErikKBzK7TsM7g_g63USf
          source_id: s_Agi8l7ZbAKkPcHffxQY2lj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Agi8l7ZbAKkPcHffxQY2lj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ARfUyaPkiWPDdKQtBaMiRZ
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_EsGU7jQNxFvMGiy62bNHii
        subject_person_id: p_CLeaiBYUN5tbTn66BTGdrC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJLSeJ0_A1H_-oYXKUZRIl
          claim_id: c_EsGU7jQNxFvMGiy62bNHii
          source_id: s_B9554MvmzsgBYlBh1JXUyo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B9554MvmzsgBYlBh1JXUyo
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 283929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json
            external_identifier: CBDB:283929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CLeaiBYUN5tbTn66BTGdrC
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_fmF8fapIkSYviofP5wONY7
        subject_person_id: p_JPM14fvg5d7KEzXULUSSQ9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-tzvu6AgqpUGOhC4VKNA8
          claim_id: c_fmF8fapIkSYviofP5wONY7
          source_id: s_VJSBnudgb9aiGr97QFKPmD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VJSBnudgb9aiGr97QFKPmD
            source_type: api_record
            title: 中国历代人物传记资料库：王栒（CBDB 283933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283933&o=json
            external_identifier: CBDB:283933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JPM14fvg5d7KEzXULUSSQ9
        status: active
        display_name: 王栒
        merged_into_person_id: null
    - claim:
        id: c_VgQH2DjksIoKdUMZGQL3Sj
        subject_person_id: p_KA4HmoiV97LWU9V3M1kT13
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVILRf4LROCwSp5Fir19BX
          claim_id: c_VgQH2DjksIoKdUMZGQL3Sj
          source_id: s_8Y--frPAlTXOkeJv53nufB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8Y--frPAlTXOkeJv53nufB
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 283938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283938&o=json
            external_identifier: CBDB:283938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KA4HmoiV97LWU9V3M1kT13
        status: active
        display_name: 王楫
        merged_into_person_id: null
    - claim:
        id: c_u9nxFkvRwG4-21EYj3C48E
        subject_person_id: p_McmP9Bbqr5YXPbvtw6cjyH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0r41VxM2qx8KcZdd7PZUUQ
          claim_id: c_u9nxFkvRwG4-21EYj3C48E
          source_id: s_vceNACIXt_L61moC7aI6Ky
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vceNACIXt_L61moC7aI6Ky
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 283935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283935&o=json
            external_identifier: CBDB:283935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_McmP9Bbqr5YXPbvtw6cjyH
        status: active
        display_name: 王杞
        merged_into_person_id: null
    - claim:
        id: c_e5tgmDN2NeueXzWER0yJTv
        subject_person_id: p_XAHZeesRJrm1DKRLnVWrTc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L2pP8UQoTWYUur1mt_nJJd
          claim_id: c_e5tgmDN2NeueXzWER0yJTv
          source_id: s_KxlsPD6_u9YrGskJOQmI9E
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KxlsPD6_u9YrGskJOQmI9E
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 283931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283931&o=json
            external_identifier: CBDB:283931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAHZeesRJrm1DKRLnVWrTc
        status: active
        display_name: 王栻
        merged_into_person_id: null
    - claim:
        id: c_YtkvATe0XrF9wrxylpb4jV
        subject_person_id: p_mCXNDqUDAdX2G6Y6vF1Rhe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BB1YhqPAH88_kDwaJUibq
          claim_id: c_YtkvATe0XrF9wrxylpb4jV
          source_id: s_CzArowBMFToJkXV_wNNfnh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CzArowBMFToJkXV_wNNfnh
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 283930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283930&o=json
            external_identifier: CBDB:283930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mCXNDqUDAdX2G6Y6vF1Rhe
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_iaimx3_10n-tHN3IL7MCnT
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aq-mrE-stIf7_HR7etzP2o
          claim_id: c_iaimx3_10n-tHN3IL7MCnT
          source_id: s_Zi2V_5YbqusMEYMFCB6mfn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Zi2V_5YbqusMEYMFCB6mfn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uJ8EyK9tK2GQ4mFQmLF235
        status: active
        display_name: 王棟
        merged_into_person_id: null
---

# 王同祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同祖 | accepted |
| birth.date | 1497年 | accepted |
| death.date | 1551年 | accepted |
| bio.summary | 王同祖（1497年—1551年），明人物。隆慶五年進士，籍贯崑山，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XDFGKptw1EWAKBbTEUcvCN | 王銀 | accepted |
| children | p_tXZASZkZUbtAHM4Rg6fiXV | 王逢年 | accepted |
| ancestors | p_8u6YwJLN4LLPN3hh45YHPS | 王復 | accepted |
| ancestors | p_cFYBiN2By1pvP86HyaLdUp | 王曰敏 | accepted |
| other | p_1LEh3MeYQq6cJbuU57kEwb | 王橞 | accepted |
| other | p_ARfUyaPkiWPDdKQtBaMiRZ | 王梓 | accepted |
| other | p_CLeaiBYUN5tbTn66BTGdrC | 王椿 | accepted |
| other | p_JPM14fvg5d7KEzXULUSSQ9 | 王栒 | accepted |
| other | p_KA4HmoiV97LWU9V3M1kT13 | 王楫 | accepted |
| other | p_McmP9Bbqr5YXPbvtw6cjyH | 王杞 | accepted |
| other | p_XAHZeesRJrm1DKRLnVWrTc | 王栻 | accepted |
| other | p_mCXNDqUDAdX2G6Y6vF1Rhe | 王楠 | accepted |
| other | p_uJ8EyK9tK2GQ4mFQmLF235 | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 283929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json)
- [中国历代人物传记资料库：王棟（CBDB 283936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json)
- [中国历代人物传记资料库：王逢年（CBDB 126693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json)
- [中国历代人物传记资料库：王復（CBDB 283924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283924&o=json)
- [中国历代人物传记资料库：王橞（CBDB 283934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json)
- [中国历代人物传记资料库：王楫（CBDB 283938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283938&o=json)
- [中国历代人物传记资料库：王楠（CBDB 283930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283930&o=json)
- [中国历代人物传记资料库：王杞（CBDB 283935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283935&o=json)
- [中国历代人物传记资料库：王栻（CBDB 283931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283931&o=json)
- [中国历代人物传记资料库：王同祖（CBDB 126516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json)
- [中国历代人物传记资料库：王栒（CBDB 283933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283933&o=json)
- [中国历代人物传记资料库：王銀（CBDB 283926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283926&o=json)
- [中国历代人物传记资料库：王曰敏（CBDB 283925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283925&o=json)
- [中国历代人物传记资料库：王梓（CBDB 283937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json)
