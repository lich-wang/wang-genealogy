---
schema: wang-person/v1
id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
status: active
merged_into: null
display_name: 王汝述
cbdb_id: 204086
revision: 16
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4MSFK51vfnpe47LzHLa3u
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝述（生于1515年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 204086）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8ZytFDBTJj0FGv-ds4icJe
          claim_id: c_h4MSFK51vfnpe47LzHLa3u
          source_id: s_y94hZW5q5Wrmsdaq812Rv6
          stance: supports
          locator: CBDB:204086
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_y94hZW5q5Wrmsdaq812Rv6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝述（CBDB 204086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204086&o=json
            external_identifier: CBDB:204086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aArB1WFK1vBZ8TvH4fwrfG
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1515-01-01
            latest: 1515-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4X8PvDXqxCVah27o7gNgjH
          claim_id: c_aArB1WFK1vBZ8TvH4fwrfG
          source_id: s_y94hZW5q5Wrmsdaq812Rv6
          stance: supports
          locator: CBDB:204086
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1515
          source:
            id: s_y94hZW5q5Wrmsdaq812Rv6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝述（CBDB 204086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204086&o=json
            external_identifier: CBDB:204086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kim4FHwUE6APiWbkBU9CSN
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_97WKT1Y47L2CPxEmV97jJ4
          claim_id: c_Kim4FHwUE6APiWbkBU9CSN
          source_id: s_y94hZW5q5Wrmsdaq812Rv6
          stance: supports
          locator: CBDB:204086
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1515
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WjuLA8-3X31ysCkjfTHGj7
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPmElOUPUB6Wxll5TfQlkO
          claim_id: c_WjuLA8-3X31ysCkjfTHGj7
          source_id: s_HdtR9Y586aJ6gpfNHRKxPc
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HdtR9Y586aJ6gpfNHRKxPc
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 314222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json
            external_identifier: CBDB:314222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jp7Who27nqLM3Z2dWPqF3U
        status: active
        display_name: 王銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7SMZIzNyjGvCb1cYlnS4mR
        subject_person_id: p_hNxUudbeswjm4CQkTUbcQo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKCKhzv8tl70VUPW2Q3gWH
          claim_id: c_7SMZIzNyjGvCb1cYlnS4mR
          source_id: s_3P1Ehz7fDt6H1VqN9Ui9w4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百五十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3P1Ehz7fDt6H1VqN9Ui9w4
            source_type: api_record
            title: 中国历代人物传记资料库：王琨（CBDB 314221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314221&o=json
            external_identifier: CBDB:314221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hNxUudbeswjm4CQkTUbcQo
        status: active
        display_name: 王琨
        merged_into_person_id: null
    - claim:
        id: c_OWtlACQY3JTozgJ2pAEYO-
        subject_person_id: p_ruT6UfVTT9uBucoR57Joub
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kU63GeBHvywzsAomBJSITl
          claim_id: c_OWtlACQY3JTozgJ2pAEYO-
          source_id: s_qLm7X7Ms7gKp8VPvKKrje8
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百五十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qLm7X7Ms7gKp8VPvKKrje8
            source_type: api_record
            title: 中国历代人物传记资料库：王克厚（CBDB 314220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314220&o=json
            external_identifier: CBDB:314220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ruT6UfVTT9uBucoR57Joub
        status: active
        display_name: 王克厚
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CANPaW4wfBFEMVtaCRRzPM
        subject_person_id: p_1AXfev5jLoFbbnQugYk4b6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iqGrR0lKjtMSpH3Po2LGc
          claim_id: c_CANPaW4wfBFEMVtaCRRzPM
          source_id: s_37ykKCyhH6OPx8tjS4VoPm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_37ykKCyhH6OPx8tjS4VoPm
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倫（CBDB 314232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314232&o=json
            external_identifier: CBDB:314232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1AXfev5jLoFbbnQugYk4b6
        status: active
        display_name: 王汝倫
        merged_into_person_id: null
    - claim:
        id: c_WVXTfNyJ5FLbpRgnrrPEwn
        subject_person_id: p_6nmzxaGP1qSmMy6MfMxEKa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UwxrRzILgiY2DzId6iik0A
          claim_id: c_WVXTfNyJ5FLbpRgnrrPEwn
          source_id: s_DnmNMp6KPNhQmDq-Kt5vdC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DnmNMp6KPNhQmDq-Kt5vdC
            source_type: api_record
            title: 中国历代人物传记资料库：王汝繼（CBDB 314234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314234&o=json
            external_identifier: CBDB:314234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6nmzxaGP1qSmMy6MfMxEKa
        status: active
        display_name: 王汝繼
        merged_into_person_id: null
    - claim:
        id: c_NuuAuNh1t8XebvB6rDvH9Y
        subject_person_id: p_AmBfkDBygmu2cLPSPTaU8S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZgMDhnVVxQDl_ui8OqVrm
          claim_id: c_NuuAuNh1t8XebvB6rDvH9Y
          source_id: s_iKe2aFDdHAvLR82bvFkhak
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iKe2aFDdHAvLR82bvFkhak
            source_type: api_record
            title: 中国历代人物传记资料库：王汝新（CBDB 314237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json
            external_identifier: CBDB:314237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AmBfkDBygmu2cLPSPTaU8S
        status: active
        display_name: 王汝新
        merged_into_person_id: null
    - claim:
        id: c_NKOQOhe9Wl3SU-hoEZRaQV
        subject_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FpyKimpxuD7C18BuDYljb
          claim_id: c_NKOQOhe9Wl3SU-hoEZRaQV
          source_id: s_5FnxBodn9_iXWOQsLMUZvz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5FnxBodn9_iXWOQsLMUZvz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝光（CBDB 314230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json
            external_identifier: CBDB:314230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BRk8GRJ9ALS1shYv5ub2na
        status: active
        display_name: 王汝光
        merged_into_person_id: null
    - claim:
        id: c_1U5OCI8Lu7r_-Cis0cgKus
        subject_person_id: p_Er9fsNmsYSEDcW8NMxTeiW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCf3x7ZI1p5pFf72Rz2FYQ
          claim_id: c_1U5OCI8Lu7r_-Cis0cgKus
          source_id: s_lCGf4klL1aHSOHA32Ob0OW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lCGf4klL1aHSOHA32Ob0OW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝儀（CBDB 314235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314235&o=json
            external_identifier: CBDB:314235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Er9fsNmsYSEDcW8NMxTeiW
        status: active
        display_name: 王汝儀
        merged_into_person_id: null
    - claim:
        id: c_QqRb1V1AfxFSnZ-8I8AbIB
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TEmny9VOn2WhN-o-c2dBp
          claim_id: c_QqRb1V1AfxFSnZ-8I8AbIB
          source_id: s_UB1jiP1durdCGn9cxbkEi5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UB1jiP1durdCGn9cxbkEi5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 314227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json
            external_identifier: CBDB:314227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V62fNQDx9yA3R1RJt6P8gC
        status: active
        display_name: 王汝嘉
        merged_into_person_id: null
    - claim:
        id: c_BhnaCsDxLoRY2Mds5FmFLF
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dS2Wb96WKEJfumFDVDFNes
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qpY4guOEWfkSY0XWwjHwCE
          claim_id: c_BhnaCsDxLoRY2Mds5FmFLF
          source_id: s_jZtNWSe_IPyLsz5dITyJoG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jZtNWSe_IPyLsz5dITyJoG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝偉（CBDB 314233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314233&o=json
            external_identifier: CBDB:314233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dS2Wb96WKEJfumFDVDFNes
        status: active
        display_name: 王汝偉
        merged_into_person_id: null
    - claim:
        id: c_Bagr5Oxe17pVdmqmAHPuh8
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10hXcTGzHVILwUeg0jn4n-
          claim_id: c_Bagr5Oxe17pVdmqmAHPuh8
          source_id: s_vjLGOybTHnLaV0hohHsehT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vjLGOybTHnLaV0hohHsehT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eNv5d7w4KD4ugJ5YeDzYxk
        status: active
        display_name: 王汝耀
        merged_into_person_id: null
    - claim:
        id: c_KUK4TGnB7kovECa81YwJYK
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KktCdVUReq7CWo62pnSY-V
          claim_id: c_KUK4TGnB7kovECa81YwJYK
          source_id: s_yDV44TBYtjMKNkem_1djEK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yDV44TBYtjMKNkem_1djEK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倬（CBDB 314236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json
            external_identifier: CBDB:314236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nk9HMkgY4xke8h5CW5tUKy
        status: active
        display_name: 王汝倬
        merged_into_person_id: null
    - claim:
        id: c_f54O_t7hBe76ZrI_PUR9XH
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rru-_ZrRlKgnPyaIjuiEam
          claim_id: c_f54O_t7hBe76ZrI_PUR9XH
          source_id: s_x4NNm0cYb2HD7_HZIe9ldE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x4NNm0cYb2HD7_HZIe9ldE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 314238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json
            external_identifier: CBDB:314238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pXgJTHeMwK5XZyuVjyKWfY
        status: active
        display_name: 王汝直
        merged_into_person_id: null
    - claim:
        id: c_8ncomuc7bz8KFSqgUzicEd
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ssWuezQYa3QEq5g4RHRJTs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r4Jgcx5Wv3IvWupQ2RamkH
          claim_id: c_8ncomuc7bz8KFSqgUzicEd
          source_id: s_2ReZHvCfuuQGXm3UCEwbWl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2ReZHvCfuuQGXm3UCEwbWl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 314228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314228&o=json
            external_identifier: CBDB:314228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ssWuezQYa3QEq5g4RHRJTs
        status: active
        display_name: 王汝舟
        merged_into_person_id: null
    - claim:
        id: c_AVhoELF_UOzmxYu4VOkTbv
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUCWxdZ3S4LebXfQQb2QCQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6yBYjTmgl0ywfPyaQGG-P
          claim_id: c_AVhoELF_UOzmxYu4VOkTbv
          source_id: s_2wZq1dQO4dGoRuAXFLqHru
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2wZq1dQO4dGoRuAXFLqHru
            source_type: api_record
            title: 中国历代人物传记资料库：王汝謙（CBDB 314226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json
            external_identifier: CBDB:314226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yUCWxdZ3S4LebXfQQb2QCQ
        status: active
        display_name: 王汝謙
        merged_into_person_id: null
---

# 王汝述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝述（生于1515年），明人物。明清進士進士，籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 204086） | accepted |
| birth.date | 1515年 | accepted |
| name.primary | 王汝述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| ancestors | p_hNxUudbeswjm4CQkTUbcQo | 王琨 | accepted |
| ancestors | p_ruT6UfVTT9uBucoR57Joub | 王克厚 | accepted |
| other | p_1AXfev5jLoFbbnQugYk4b6 | 王汝倫 | accepted |
| other | p_6nmzxaGP1qSmMy6MfMxEKa | 王汝繼 | accepted |
| other | p_AmBfkDBygmu2cLPSPTaU8S | 王汝新 | accepted |
| other | p_BRk8GRJ9ALS1shYv5ub2na | 王汝光 | accepted |
| other | p_Er9fsNmsYSEDcW8NMxTeiW | 王汝儀 | accepted |
| other | p_V62fNQDx9yA3R1RJt6P8gC | 王汝嘉 | accepted |
| other | p_dS2Wb96WKEJfumFDVDFNes | 王汝偉 | accepted |
| other | p_eNv5d7w4KD4ugJ5YeDzYxk | 王汝耀 | accepted |
| other | p_nk9HMkgY4xke8h5CW5tUKy | 王汝倬 | accepted |
| other | p_pXgJTHeMwK5XZyuVjyKWfY | 王汝直 | accepted |
| other | p_ssWuezQYa3QEq5g4RHRJTs | 王汝舟 | accepted |
| other | p_yUCWxdZ3S4LebXfQQb2QCQ | 王汝謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克厚（CBDB 314220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314220&o=json)
- [中国历代人物传记资料库：王琨（CBDB 314221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314221&o=json)
- [中国历代人物传记资料库：王銓（CBDB 314222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314222&o=json)
- [中国历代人物传记资料库：王汝光（CBDB 314230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json)
- [中国历代人物传记资料库：王汝繼（CBDB 314234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314234&o=json)
- [中国历代人物传记资料库：王汝嘉（CBDB 314227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json)
- [中国历代人物传记资料库：王汝倫（CBDB 314232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314232&o=json)
- [中国历代人物传记资料库：王汝謙（CBDB 314226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314226&o=json)
- [中国历代人物传记资料库：王汝述（CBDB 204086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204086&o=json)
- [中国历代人物传记资料库：王汝偉（CBDB 314233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314233&o=json)
- [中国历代人物传记资料库：王汝新（CBDB 314237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314237&o=json)
- [中国历代人物传记资料库：王汝耀（CBDB 314231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json)
- [中国历代人物传记资料库：王汝儀（CBDB 314235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314235&o=json)
- [中国历代人物传记资料库：王汝直（CBDB 314238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json)
- [中国历代人物传记资料库：王汝舟（CBDB 314228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314228&o=json)
- [中国历代人物传记资料库：王汝倬（CBDB 314236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json)
