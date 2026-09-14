---
schema: wang-person/v1
id: p_8EDFnNdhzDymseXpHLiztk
status: active
merged_into: null
display_name: 王應誥
cbdb_id: 236256
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6Rzhk5Wt8oFFXyEm72kef
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應誥，明人物。籍贯同州，曾任壽官。（中国历代人物传记资料库 CBDB 236256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UtNm0SwAgfKU5x49MGSLsp
          claim_id: c_X6Rzhk5Wt8oFFXyEm72kef
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: CBDB:236256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RpFUfgLjZke4p125QL1oHk
            source_type: api_record
            title: 中国历代人物传记资料库：王應誥（CBDB 236256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json
            external_identifier: CBDB:236256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wa7e6MzHjXgtup3KkN9Npa
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bL3BQTywZH4GH46AqTe5tE
          claim_id: c_wa7e6MzHjXgtup3KkN9Npa
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: CBDB:236256
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CogB1AJOUR1_NK-Oc4KBaN
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLuSIXbAkXHmzw87bBk9DM
          claim_id: c_CogB1AJOUR1_NK-Oc4KBaN
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RpFUfgLjZke4p125QL1oHk
            source_type: api_record
            title: 中国历代人物传记资料库：王應誥（CBDB 236256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json
            external_identifier: CBDB:236256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
    - claim:
        id: c_jj2pznz8YnHHJs93Lus_S3
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3D5xmKyyUNCPzGBMmVRaX4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cty398OZmCacpTop9qAYh1
          claim_id: c_jj2pznz8YnHHJs93Lus_S3
          source_id: s_SBMUYS9fJTsDZ5Jqsy0iLA
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王崇祖 之父／母。
          source:
            id: s_SBMUYS9fJTsDZ5Jqsy0iLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇祖（CBDB 236270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json
            external_identifier: CBDB:236270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3D5xmKyyUNCPzGBMmVRaX4
        status: active
        display_name: 王崇祖
        merged_into_person_id: null
    - claim:
        id: c_7Rg0N3I07QFpf2Q4nIGb5B
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8vaWxLtKAay3NrBgZSBhqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YM9M3E5zuKfuC20tyAdFQt
          claim_id: c_7Rg0N3I07QFpf2Q4nIGb5B
          source_id: s_1R5oKAPos1B3vuCMLdhCd3
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王屬 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王屬 之父／母。
          source:
            id: s_1R5oKAPos1B3vuCMLdhCd3
            source_type: api_record
            title: 中国历代人物传记资料库：王屬（CBDB 236261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json
            external_identifier: CBDB:236261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8vaWxLtKAay3NrBgZSBhqq
        status: active
        display_name: 王屬
        merged_into_person_id: null
    - claim:
        id: c_HRgA_TaiwdiaRaJwyyPPDx
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9i6nBJKo32DqQjdV8M68T7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AeBXEW7QYqVYrIkN25l1Bz
          claim_id: c_HRgA_TaiwdiaRaJwyyPPDx
          source_id: s_lcPbQ1ZBafOfyEvBBFsPGr
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王憲祖 之父／母。
          source:
            id: s_lcPbQ1ZBafOfyEvBBFsPGr
            source_type: api_record
            title: 中国历代人物传记资料库：王憲祖（CBDB 236272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236272&o=json
            external_identifier: CBDB:236272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9i6nBJKo32DqQjdV8M68T7
        status: active
        display_name: 王憲祖
        merged_into_person_id: null
    - claim:
        id: c_JJINzr6jCxjsufkO9Nulx6
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EWyT8CucPjWb43tbnrkRZW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1ZWDhxPbP5RkAE6bWV014
          claim_id: c_JJINzr6jCxjsufkO9Nulx6
          source_id: s_LqQpFu2sO7s2058fpQ7X9G
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王述祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王述祖 之父／母。
          source:
            id: s_LqQpFu2sO7s2058fpQ7X9G
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 236262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236262&o=json
            external_identifier: CBDB:236262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EWyT8CucPjWb43tbnrkRZW
        status: active
        display_name: 王述祖
        merged_into_person_id: null
    - claim:
        id: c_A1wHQblY33-3oulvsS2uq4
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MUn5Rs4WrtWhB95EnJwf3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ga2D6NO0Hhh675u0KGTc8e
          claim_id: c_A1wHQblY33-3oulvsS2uq4
          source_id: s_fSLn9eVOriPz3eQGM4W-1o
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王榮祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王榮祖 之父／母。
          source:
            id: s_fSLn9eVOriPz3eQGM4W-1o
            source_type: api_record
            title: 中国历代人物传记资料库：王榮祖（CBDB 236271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236271&o=json
            external_identifier: CBDB:236271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MUn5Rs4WrtWhB95EnJwf3r
        status: active
        display_name: 王榮祖
        merged_into_person_id: null
    - claim:
        id: c_V3nMW41l4QIb3qqWtmVPOv
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U51xQewEMqZMndeQxpxv9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KIJDSGWSFPnUyXs_Vu4gdj
          claim_id: c_V3nMW41l4QIb3qqWtmVPOv
          source_id: s_XzSGi0duqfetm9deDZfMeF
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王念祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王念祖 之父／母。
          source:
            id: s_XzSGi0duqfetm9deDZfMeF
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 236269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236269&o=json
            external_identifier: CBDB:236269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U51xQewEMqZMndeQxpxv9u
        status: active
        display_name: 王念祖
        merged_into_person_id: null
    - claim:
        id: c_gPC2dzYzrlTRudW1YwZ8Sx
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gSSHxuS8HvKEdhFqU9WLBj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jm-LvFVxcCgBMKlNxLv3I_
          claim_id: c_gPC2dzYzrlTRudW1YwZ8Sx
          source_id: s_jtImcwqpFGsO6-ZH0P_TdZ
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王振祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王振祖 之父／母。
          source:
            id: s_jtImcwqpFGsO6-ZH0P_TdZ
            source_type: api_record
            title: 中国历代人物传记资料库：王振祖（CBDB 236267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json
            external_identifier: CBDB:236267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gSSHxuS8HvKEdhFqU9WLBj
        status: active
        display_name: 王振祖
        merged_into_person_id: null
    - claim:
        id: c_Ud8n35_-nUk8peyByeLcNV
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nH4mSdKDWKtycex3Q8KQAF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iEm-z0b-0sJt-WjUZijQJM
          claim_id: c_Ud8n35_-nUk8peyByeLcNV
          source_id: s_f7xYko2kf7pkwHjbFWyXfu
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王耀祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王耀祖 之父／母。
          source:
            id: s_f7xYko2kf7pkwHjbFWyXfu
            source_type: api_record
            title: 中国历代人物传记资料库：王耀祖（CBDB 236268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236268&o=json
            external_identifier: CBDB:236268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nH4mSdKDWKtycex3Q8KQAF
        status: active
        display_name: 王耀祖
        merged_into_person_id: null
    - claim:
        id: c_c8toZcG5rE6C6wkCfmuR4g
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qcCVcen8Bt57KMExSuuKZ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EG0Vo-JcrXv0ofU47QT3yb
          claim_id: c_c8toZcG5rE6C6wkCfmuR4g
          source_id: s_EFfQhclKMAu4-Nxg5PRCUl
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王似祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王似祖 之父／母。
          source:
            id: s_EFfQhclKMAu4-Nxg5PRCUl
            source_type: api_record
            title: 中国历代人物传记资料库：王似祖（CBDB 236263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json
            external_identifier: CBDB:236263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qcCVcen8Bt57KMExSuuKZ5
        status: active
        display_name: 王似祖
        merged_into_person_id: null
    - claim:
        id: c_eLNmuaGfQqXBomm_Md3NLs
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sMxEUdxNe6otnVmPDjmaoW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GBgyByuoPLgDPt_dhGBQZq
          claim_id: c_eLNmuaGfQqXBomm_Md3NLs
          source_id: s_anZ3mwr9HF9aQTNf0hIz2B
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王追祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王追祖 之父／母。
          source:
            id: s_anZ3mwr9HF9aQTNf0hIz2B
            source_type: api_record
            title: 中国历代人物传记资料库：王追祖（CBDB 236264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236264&o=json
            external_identifier: CBDB:236264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMxEUdxNe6otnVmPDjmaoW
        status: active
        display_name: 王追祖
        merged_into_person_id: null
    - claim:
        id: c_ccRocg87bceERZ1y_b-iWP
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vpXFhLuRTXyZoefxdP1Ymz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yXFf_FyyakzubJJXAebKD
          claim_id: c_ccRocg87bceERZ1y_b-iWP
          source_id: s_pMt69zP8uCo7cmdSCHBx-9
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王輝祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王輝祖 之父／母。
          source:
            id: s_pMt69zP8uCo7cmdSCHBx-9
            source_type: api_record
            title: 中国历代人物传记资料库：王輝祖（CBDB 236266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236266&o=json
            external_identifier: CBDB:236266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpXFhLuRTXyZoefxdP1Ymz
        status: active
        display_name: 王輝祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應誥，明人物。籍贯同州，曾任壽官。（中国历代人物传记资料库 CBDB 236256） | accepted |
| name.primary | 王應誥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |
| children | p_3D5xmKyyUNCPzGBMmVRaX4 | 王崇祖 | accepted |
| children | p_8vaWxLtKAay3NrBgZSBhqq | 王屬 | accepted |
| children | p_9i6nBJKo32DqQjdV8M68T7 | 王憲祖 | accepted |
| children | p_EWyT8CucPjWb43tbnrkRZW | 王述祖 | accepted |
| children | p_MUn5Rs4WrtWhB95EnJwf3r | 王榮祖 | accepted |
| children | p_U51xQewEMqZMndeQxpxv9u | 王念祖 | accepted |
| children | p_gSSHxuS8HvKEdhFqU9WLBj | 王振祖 | accepted |
| children | p_nH4mSdKDWKtycex3Q8KQAF | 王耀祖 | accepted |
| children | p_qcCVcen8Bt57KMExSuuKZ5 | 王似祖 | accepted |
| children | p_sMxEUdxNe6otnVmPDjmaoW | 王追祖 | accepted |
| children | p_vpXFhLuRTXyZoefxdP1Ymz | 王輝祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇祖（CBDB 236270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236270&o=json)
- [中国历代人物传记资料库：王輝祖（CBDB 236266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236266&o=json)
- [中国历代人物传记资料库：王念祖（CBDB 236269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236269&o=json)
- [中国历代人物传记资料库：王榮祖（CBDB 236271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236271&o=json)
- [中国历代人物传记资料库：王屬（CBDB 236261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json)
- [中国历代人物传记资料库：王述祖（CBDB 236262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236262&o=json)
- [中国历代人物传记资料库：王似祖（CBDB 236263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json)
- [中国历代人物传记资料库：王憲祖（CBDB 236272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236272&o=json)
- [中国历代人物传记资料库：王耀祖（CBDB 236268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236268&o=json)
- [中国历代人物传记资料库：王應誥（CBDB 236256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json)
- [中国历代人物传记资料库：王振祖（CBDB 236267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json)
- [中国历代人物传记资料库：王追祖（CBDB 236264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236264&o=json)
