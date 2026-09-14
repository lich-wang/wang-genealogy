---
schema: wang-person/v1
id: p_MfVeb7fgPLZUX4FfJniEs9
status: active
merged_into: null
display_name: 王錫
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKEXuwYrVHvD5KEBXiyR54
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZonormDHw58Za2wKEkjBU
          claim_id: c_rKEXuwYrVHvD5KEBXiyR54
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: CBDB:292741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292741）
          source: &a1
            id: s_gDVxGFCkxFcG1JYveorKZf
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 292741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json
            external_identifier: CBDB:292741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4ELjvP3Nz2qJ7HY8ekeHy
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫，明人物。嘉靖十一年進士，籍贯中江，入仕監生。（中国历代人物传记资料库 CBDB 292741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_202uKGXgthXPKtPvqHKAQn
          claim_id: c_U4ELjvP3Nz2qJ7HY8ekeHy
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: CBDB:292741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f4NvjuyahVCFx-H_WJGAF8
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__x4kScBruY3tbtDPxVe0Ni
          claim_id: c_f4NvjuyahVCFx-H_WJGAF8
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
    - claim:
        id: c_1MHH4l9OijODkNEkxiVDQM
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5c12iZN67E1UJGx7FWK1rK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v7jwClmnsHI0Cyd4BcAUcC
          claim_id: c_1MHH4l9OijODkNEkxiVDQM
          source_id: s_hqrV6MMM8H7hPGEgJmImbJ
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王介賢 与 王惟賢 为同胞（CBDB 记「弟」），王惟賢 之父／母即 王介賢 之父／母。
          source:
            id: s_hqrV6MMM8H7hPGEgJmImbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王介賢（CBDB 292745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json
            external_identifier: CBDB:292745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5c12iZN67E1UJGx7FWK1rK
        status: active
        display_name: 王介賢
        merged_into_person_id: null
    - claim:
        id: c_M-KbHFn17-omTQzKzlLNu7
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CnpyxECHZ2Sqyho2tBnR97
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEHJd4ZwyYHzWWJqNen6hs
          claim_id: c_M-KbHFn17-omTQzKzlLNu7
          source_id: s_Wn_st_YfIKSQqzy6fulDMf
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王崔賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王崔賢 之父／母。
          source:
            id: s_Wn_st_YfIKSQqzy6fulDMf
            source_type: api_record
            title: 中国历代人物传记资料库：王崔賢（CBDB 292752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292752&o=json
            external_identifier: CBDB:292752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CnpyxECHZ2Sqyho2tBnR97
        status: active
        display_name: 王崔賢
        merged_into_person_id: null
    - claim:
        id: c_P05g5UoXwHiGevxqtyOM4h
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QN14VWmqT7W6KKpsHCdtPp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jlTdvSxEbgxSTA_XWChk_N
          claim_id: c_P05g5UoXwHiGevxqtyOM4h
          source_id: s_Cb29OzORXzdrXgf_VcdMhR
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王希賢 与 王惟賢 为同胞（CBDB 记「弟」），王惟賢 之父／母即 王希賢 之父／母。
          source:
            id: s_Cb29OzORXzdrXgf_VcdMhR
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 292744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292744&o=json
            external_identifier: CBDB:292744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QN14VWmqT7W6KKpsHCdtPp
        status: active
        display_name: 王希賢
        merged_into_person_id: null
    - claim:
        id: c_K3inV2F4yD7fALgs-epWSU
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UEniNJwGdcvc3hDGN4MsBK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZ4Ly-ElQ_ItkgvolOeB_N
          claim_id: c_K3inV2F4yD7fALgs-epWSU
          source_id: s_yRneHzBuITCXm7EvsyPslJ
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王三賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王三賢 之父／母。
          source:
            id: s_yRneHzBuITCXm7EvsyPslJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三賢（CBDB 292747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json
            external_identifier: CBDB:292747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UEniNJwGdcvc3hDGN4MsBK
        status: active
        display_name: 王三賢
        merged_into_person_id: null
    - claim:
        id: c_SnXS3cCChOVciIF9QQK7rD
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WZDmbds81hz72ibPbytT9p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ee9uCptRxY_XrtZtmMXRFD
          claim_id: c_SnXS3cCChOVciIF9QQK7rD
          source_id: s_2A9GF1tvIUf9jQNYSRDt-Z
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王次賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王次賢 之父／母。
          source:
            id: s_2A9GF1tvIUf9jQNYSRDt-Z
            source_type: api_record
            title: 中国历代人物传记资料库：王次賢（CBDB 292749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292749&o=json
            external_identifier: CBDB:292749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WZDmbds81hz72ibPbytT9p
        status: active
        display_name: 王次賢
        merged_into_person_id: null
    - claim:
        id: c_eOCVfLjq2LsaQDk5fmYfx1
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XdtDFjMTu3YEdr574aNAWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nOY5c_EW-jFneJ28YHQU9E
          claim_id: c_eOCVfLjq2LsaQDk5fmYfx1
          source_id: s_hZA6G-JplYYwKDaph34Pzb
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王慶賢 之父／母。
          source:
            id: s_hZA6G-JplYYwKDaph34Pzb
            source_type: api_record
            title: 中国历代人物传记资料库：王慶賢（CBDB 292746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json
            external_identifier: CBDB:292746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XdtDFjMTu3YEdr574aNAWC
        status: active
        display_name: 王慶賢
        merged_into_person_id: null
    - claim:
        id: c_tYGiCXaRclhxoJmOPuPMYz
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hAFDA2mr5LdafaVzTv7DgL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rE7g9i1TY8B58g8MFDAsp-
          claim_id: c_tYGiCXaRclhxoJmOPuPMYz
          source_id: s_xm9yvmDpPGFH-SH4fjFV3h
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王立賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王立賢 之父／母。
          source:
            id: s_xm9yvmDpPGFH-SH4fjFV3h
            source_type: api_record
            title: 中国历代人物传记资料库：王立賢（CBDB 292750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json
            external_identifier: CBDB:292750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hAFDA2mr5LdafaVzTv7DgL
        status: active
        display_name: 王立賢
        merged_into_person_id: null
    - claim:
        id: c_2jkxOyp7SxcizVcxabTb26
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oPXfGu41nRvAjDhHN9KMCe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8y3wsoVars2JqVheA0TT0
          claim_id: c_2jkxOyp7SxcizVcxabTb26
          source_id: s_UkRQa4UkVsR_Ure2UPD-IX
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王某賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王某賢 之父／母。
          source:
            id: s_UkRQa4UkVsR_Ure2UPD-IX
            source_type: api_record
            title: 中国历代人物传记资料库：王某賢（CBDB 292753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json
            external_identifier: CBDB:292753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oPXfGu41nRvAjDhHN9KMCe
        status: active
        display_name: 王某賢
        merged_into_person_id: null
    - claim:
        id: c_hpt93giljkDl4yNuDdvmVd
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_swGoifyYMCGzEttLSRtgNF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7la8AoAw80m83HNqTVW86Y
          claim_id: c_hpt93giljkDl4yNuDdvmVd
          source_id: s_n8wSNdznkYeYnhIsz9EvAo
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王可賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王可賢 之父／母。
          source:
            id: s_n8wSNdznkYeYnhIsz9EvAo
            source_type: api_record
            title: 中国历代人物传记资料库：王可賢（CBDB 292754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292754&o=json
            external_identifier: CBDB:292754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_swGoifyYMCGzEttLSRtgNF
        status: active
        display_name: 王可賢
        merged_into_person_id: null
    - claim:
        id: c_ZU_kqlDXSlsfd-sRDliOrg
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xspHGTMTrdySUKmYASS629
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNOV8sfnBoWplOYJNrvVjH
          claim_id: c_ZU_kqlDXSlsfd-sRDliOrg
          source_id: s_YiMj2XF7R_O6UfBBpsmsiF
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王用賢 之父／母。
          source:
            id: s_YiMj2XF7R_O6UfBBpsmsiF
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 292748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json
            external_identifier: CBDB:292748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xspHGTMTrdySUKmYASS629
        status: active
        display_name: 王用賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | 王錫，明人物。嘉靖十一年進士，籍贯中江，入仕監生。（中国历代人物传记资料库 CBDB 292741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |
| children | p_5c12iZN67E1UJGx7FWK1rK | 王介賢 | accepted |
| children | p_CnpyxECHZ2Sqyho2tBnR97 | 王崔賢 | accepted |
| children | p_QN14VWmqT7W6KKpsHCdtPp | 王希賢 | accepted |
| children | p_UEniNJwGdcvc3hDGN4MsBK | 王三賢 | accepted |
| children | p_WZDmbds81hz72ibPbytT9p | 王次賢 | accepted |
| children | p_XdtDFjMTu3YEdr574aNAWC | 王慶賢 | accepted |
| children | p_hAFDA2mr5LdafaVzTv7DgL | 王立賢 | accepted |
| children | p_oPXfGu41nRvAjDhHN9KMCe | 王某賢 | accepted |
| children | p_swGoifyYMCGzEttLSRtgNF | 王可賢 | accepted |
| children | p_xspHGTMTrdySUKmYASS629 | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王次賢（CBDB 292749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292749&o=json)
- [中国历代人物传记资料库：王崔賢（CBDB 292752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292752&o=json)
- [中国历代人物传记资料库：王介賢（CBDB 292745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292745&o=json)
- [中国历代人物传记资料库：王可賢（CBDB 292754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292754&o=json)
- [中国历代人物传记资料库：王立賢（CBDB 292750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292750&o=json)
- [中国历代人物传记资料库：王某賢（CBDB 292753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292753&o=json)
- [中国历代人物传记资料库：王慶賢（CBDB 292746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json)
- [中国历代人物传记资料库：王三賢（CBDB 292747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292747&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 292744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292744&o=json)
- [中国历代人物传记资料库：王錫（CBDB 292741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 292748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json)
