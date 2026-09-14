---
schema: wang-person/v1
id: p_TdovnQSDHPgtdb6L5QzgtZ
status: active
merged_into: null
display_name: 王梴
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEUu88eXJDZEJG3ctU6tZQ
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eFAPGWxGpfNkeUHDH9nagU
          claim_id: c_BEUu88eXJDZEJG3ctU6tZQ
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
          stance: supports
          locator: CBDB:202789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202789）
          source: &a1
            id: s_5dW9XCt13sjfnC4xEFsoHy
            source_type: api_record
            title: 中国历代人物传记资料库：王梴（CBDB 202789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202789&o=json
            external_identifier: CBDB:202789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mmk7Rc6hhoGr4LQpoGt14A
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etDh7sQngRsFS96U25rzXw
          claim_id: c_mmk7Rc6hhoGr4LQpoGt14A
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
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
        id: c_z4bXK3t7uTRdYYFd64zxEH
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梴（生于1493年），明人物。明清進士進士，籍贯象山，入仕進士，曾任布政使司參議、布政使司參政、工部郎中。（中国历代人物传记资料库 CBDB 202789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JA3IzjhcsFTPUvXedE64cK
          claim_id: c_z4bXK3t7uTRdYYFd64zxEH
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
          stance: supports
          locator: CBDB:202789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xTI7CCJzeGfkvUZQEA4upw
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWm92R8BxfH1SXFUJfsfle
          claim_id: c_xTI7CCJzeGfkvUZQEA4upw
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hi4Dfz1rKMoiuGrViGfdTN
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 294432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json
            external_identifier: CBDB:294432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2-JulN6C0GSRyv2WDBz0PA
        subject_person_id: p_1gMJ6NpQ7CbPiCgahWrTwG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDyohAfI1Jp67xtww_762A
          claim_id: c_2-JulN6C0GSRyv2WDBz0PA
          source_id: s_BTWFBHpMR6hb3Wanm2MPtX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BTWFBHpMR6hb3Wanm2MPtX
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 294431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json
            external_identifier: CBDB:294431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1gMJ6NpQ7CbPiCgahWrTwG
        status: active
        display_name: 王京
        merged_into_person_id: null
    - claim:
        id: c_h-rXTXreEj5GoCF5ObF9DA
        subject_person_id: p_9H13uhvw1t7EEDU5JE92D9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XxuIb24zXOatU9tvbN60if
          claim_id: c_h-rXTXreEj5GoCF5ObF9DA
          source_id: s_BQprRgv39qvp6Ah1vTgw7H
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BQprRgv39qvp6Ah1vTgw7H
            source_type: api_record
            title: 中国历代人物传记资料库：王在明（CBDB 294430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294430&o=json
            external_identifier: CBDB:294430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9H13uhvw1t7EEDU5JE92D9
        status: active
        display_name: 王在明
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_EwTXsqSB-sqz2Hwe9nPIAx
        subject_person_id: p_2rqmo3og7G8V9Dr9vMvnwH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAqCc023yXi0qCq9Fr7lda
          claim_id: c_EwTXsqSB-sqz2Hwe9nPIAx
          source_id: s_5xP3-zkwZTeRNXIEt9jTxc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5xP3-zkwZTeRNXIEt9jTxc
            source_type: api_record
            title: 中国历代人物传记资料库：王𬄣（CBDB 294437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json
            external_identifier: CBDB:294437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2rqmo3og7G8V9Dr9vMvnwH
        status: active
        display_name: 王𬄣
        merged_into_person_id: null
    - claim:
        id: c_RlOMS-Yf5SK9h_p0Do7YfJ
        subject_person_id: p_66iBPSDxjazgshmXgCinW3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4BZxtFclMcAMk9aHa7S0d
          claim_id: c_RlOMS-Yf5SK9h_p0Do7YfJ
          source_id: s_VdifsS33Qpk4BeXbMfUovO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VdifsS33Qpk4BeXbMfUovO
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 294448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json
            external_identifier: CBDB:294448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_66iBPSDxjazgshmXgCinW3
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_-hyZSPkRV-avYZGEpU2yOP
        subject_person_id: p_B9zZ1dWS88mCc3eFnzsa8t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1q7q0uAPxqmZGrBWbzWPn
          claim_id: c_-hyZSPkRV-avYZGEpU2yOP
          source_id: s_1-y6caMC3pT96Zo0W4GLNF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1-y6caMC3pT96Zo0W4GLNF
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 294441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json
            external_identifier: CBDB:294441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B9zZ1dWS88mCc3eFnzsa8t
        status: active
        display_name: 王模
        merged_into_person_id: null
    - claim:
        id: c_DuxNx4u-jUA_FNOkBkJgTk
        subject_person_id: p_Jivm79X5Ec98aRrbuSP5SG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nxOW0C4xy3aI2MGd6gNElg
          claim_id: c_DuxNx4u-jUA_FNOkBkJgTk
          source_id: s_Jy2i9ETCsJrZtITBKRdd8z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Jy2i9ETCsJrZtITBKRdd8z
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 294447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294447&o=json
            external_identifier: CBDB:294447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jivm79X5Ec98aRrbuSP5SG
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_4gGXajVIgqNuKhrTgcXcwE
        subject_person_id: p_LFt8Rsde3gMfwwAy7NB9xn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUcaNoqQZTbkUavLWch5Xi
          claim_id: c_4gGXajVIgqNuKhrTgcXcwE
          source_id: s_tRSIuMhN6gXMoreLKB6bCs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tRSIuMhN6gXMoreLKB6bCs
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 294445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json
            external_identifier: CBDB:294445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LFt8Rsde3gMfwwAy7NB9xn
        status: active
        display_name: 王棟
        merged_into_person_id: null
    - claim:
        id: c_7OLSYnapv9X6oua99geJQs
        subject_person_id: p_N7CXSPXtEUxoPtcpzKGask
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IFj17HiClRrWddOp-ERZlq
          claim_id: c_7OLSYnapv9X6oua99geJQs
          source_id: s_c6_3r_hREfnIjT3kvB1P33
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c6_3r_hREfnIjT3kvB1P33
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 294439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294439&o=json
            external_identifier: CBDB:294439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7CXSPXtEUxoPtcpzKGask
        status: active
        display_name: 王楷
        merged_into_person_id: null
    - claim:
        id: c_Sp1utgkBsa7VXe4HN2ZF01
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fbxtTcQ4A5CmnHLGeDox7c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_txiLCjUjDspn0DKCtC-59q
          claim_id: c_Sp1utgkBsa7VXe4HN2ZF01
          source_id: s_I1basQgZPF72n37z6nDcNX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1basQgZPF72n37z6nDcNX
            source_type: api_record
            title: 中国历代人物传记资料库：王㭿（CBDB 294443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json
            external_identifier: CBDB:294443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbxtTcQ4A5CmnHLGeDox7c
        status: active
        display_name: 王㭿
        merged_into_person_id: null
    - claim:
        id: c_tRyUSsSqGtMu8_Ia9qNgTG
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ibHfsNHumtJYpPyWsKmmrk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E_2OcmvAyfCmCmu9PJ8T3F
          claim_id: c_tRyUSsSqGtMu8_Ia9qNgTG
          source_id: s_8JLrZ-7uovnJBf0I8FCT-O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8JLrZ-7uovnJBf0I8FCT-O
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 294435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json
            external_identifier: CBDB:294435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ibHfsNHumtJYpPyWsKmmrk
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_AHN4ROTINXB8CQgu1-Pj_m
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iz6rBd11y4FybC2WrF2LFJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SWdDmXayqktubKdA3a-aQB
          claim_id: c_AHN4ROTINXB8CQgu1-Pj_m
          source_id: s_Se_e5nlM5tPlnScgnDJreK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Se_e5nlM5tPlnScgnDJreK
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 294446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294446&o=json
            external_identifier: CBDB:294446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iz6rBd11y4FybC2WrF2LFJ
        status: active
        display_name: 王極
        merged_into_person_id: null
    - claim:
        id: c_KHjwqvoTRAuhHqmcxs5ofS
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kvFwT4sa4wGvdykoDxnfP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bE4akgqA3Fxd5mxJcjiiyy
          claim_id: c_KHjwqvoTRAuhHqmcxs5ofS
          source_id: s_f1FfXpes1afQmKPy7eQv0O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f1FfXpes1afQmKPy7eQv0O
            source_type: api_record
            title: 中国历代人物传记资料库：王櫕（CBDB 294444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json
            external_identifier: CBDB:294444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kvFwT4sa4wGvdykoDxnfP9
        status: active
        display_name: 王櫕
        merged_into_person_id: null
    - claim:
        id: c_TBXWyoAETuflvUCKUKtieG
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nT1qAM9Qvrc4bEuowpcXAi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xjkb2qOjkGGc0RrJTjh_iC
          claim_id: c_TBXWyoAETuflvUCKUKtieG
          source_id: s_xZE7rVEIZ7y3rQ8vOPhcV-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xZE7rVEIZ7y3rQ8vOPhcV-
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 294436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294436&o=json
            external_identifier: CBDB:294436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nT1qAM9Qvrc4bEuowpcXAi
        status: active
        display_name: 王桓
        merged_into_person_id: null
    - claim:
        id: c_Lg6O-4z4sbkw5VhZrXVQRS
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwcsGassEoZJf7LEyWo3fJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUE4cCrxUttCoTmLpjnjOJ
          claim_id: c_Lg6O-4z4sbkw5VhZrXVQRS
          source_id: s_RAuoK1DrSd53dS9WF6EjeE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RAuoK1DrSd53dS9WF6EjeE
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 294442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294442&o=json
            external_identifier: CBDB:294442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwcsGassEoZJf7LEyWo3fJ
        status: active
        display_name: 王橋
        merged_into_person_id: null
    - claim:
        id: c_yj9Nt3cRSLnKw-iWqhMVNq
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z18ptdZJMMwCTGr7YAuqDh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WfP8SXR7e0fEQFNBukP0SZ
          claim_id: c_yj9Nt3cRSLnKw-iWqhMVNq
          source_id: s_MEZb4ZGvQ8Wt8Fgl-5FwNP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MEZb4ZGvQ8Wt8Fgl-5FwNP
            source_type: api_record
            title: 中国历代人物传记资料库：王檄（CBDB 294438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294438&o=json
            external_identifier: CBDB:294438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z18ptdZJMMwCTGr7YAuqDh
        status: active
        display_name: 王檄
        merged_into_person_id: null
---

# 王梴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梴 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | 王梴（生于1493年），明人物。明清進士進士，籍贯象山，入仕進士，曾任布政使司參議、布政使司參政、工部郎中。（中国历代人物传记资料库 CBDB 202789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| ancestors | p_1gMJ6NpQ7CbPiCgahWrTwG | 王京 | accepted |
| ancestors | p_9H13uhvw1t7EEDU5JE92D9 | 王在明 | accepted |
| other | p_2rqmo3og7G8V9Dr9vMvnwH | 王𬄣 | accepted |
| other | p_66iBPSDxjazgshmXgCinW3 | 王楊 | accepted |
| other | p_B9zZ1dWS88mCc3eFnzsa8t | 王模 | accepted |
| other | p_Jivm79X5Ec98aRrbuSP5SG | 王楠 | accepted |
| other | p_LFt8Rsde3gMfwwAy7NB9xn | 王棟 | accepted |
| other | p_N7CXSPXtEUxoPtcpzKGask | 王楷 | accepted |
| other | p_fbxtTcQ4A5CmnHLGeDox7c | 王㭿 | accepted |
| other | p_ibHfsNHumtJYpPyWsKmmrk | 王林 | accepted |
| other | p_iz6rBd11y4FybC2WrF2LFJ | 王極 | accepted |
| other | p_kvFwT4sa4wGvdykoDxnfP9 | 王櫕 | accepted |
| other | p_nT1qAM9Qvrc4bEuowpcXAi | 王桓 | accepted |
| other | p_nwcsGassEoZJf7LEyWo3fJ | 王橋 | accepted |
| other | p_z18ptdZJMMwCTGr7YAuqDh | 王檄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梴（CBDB 202789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202789&o=json)
- [中国历代人物传记资料库：王櫕（CBDB 294444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294444&o=json)
- [中国历代人物传记资料库：王棟（CBDB 294445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294445&o=json)
- [中国历代人物传记资料库：王桓（CBDB 294436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294436&o=json)
- [中国历代人物传记资料库：王渙（CBDB 294432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json)
- [中国历代人物传记资料库：王極（CBDB 294446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294446&o=json)
- [中国历代人物传记资料库：王京（CBDB 294431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json)
- [中国历代人物传记资料库：王楷（CBDB 294439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294439&o=json)
- [中国历代人物传记资料库：王林（CBDB 294435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json)
- [中国历代人物传记资料库：王模（CBDB 294441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294441&o=json)
- [中国历代人物传记资料库：王楠（CBDB 294447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294447&o=json)
- [中国历代人物传记资料库：王橋（CBDB 294442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294442&o=json)
- [中国历代人物传记资料库：王檄（CBDB 294438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294438&o=json)
- [中国历代人物传记资料库：王楊（CBDB 294448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json)
- [中国历代人物传记资料库：王在明（CBDB 294430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294430&o=json)
- [中国历代人物传记资料库：王㭿（CBDB 294443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294443&o=json)
- [中国历代人物传记资料库：王𬄣（CBDB 294437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294437&o=json)
