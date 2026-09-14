---
schema: wang-person/v1
id: p_4epX45r9bJPqQLoodeDXss
status: active
merged_into: null
display_name: 王一陽
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pfcFvg7L3FYJHJJwmiJjyT
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kc1LLdx7VpTf3LnFoUJ3bE
          claim_id: c_pfcFvg7L3FYJHJJwmiJjyT
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: CBDB:203535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203535）
          source: &a1
            id: s_mQ2Mbm44EcchNqrBaH456s
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 203535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json
            external_identifier: CBDB:203535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ErC9kRbrhoDKMFm3x3qZYU
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9HsNyhCwSUAXz8znf7Xdh9
          claim_id: c_ErC9kRbrhoDKMFm3x3qZYU
          source_id: s_mQ2Mbm44EcchNqrBaH456s
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
        id: c_yJdmAtgtPhVRJZE7rkHDnH
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽（生于1510年），明人物。明清進士進士，籍贯江都，入仕進士。（中国历代人物传记资料库 CBDB 203535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L7NKqA3x90tc2TxAqP8HKH
          claim_id: c_yJdmAtgtPhVRJZE7rkHDnH
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: CBDB:203535
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jIJJi_4bDWy8vZiPOLhbXI
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0J9i011CMDkAnwTGupM20c
          claim_id: c_jIJJi_4bDWy8vZiPOLhbXI
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NlkvvbEPjv_-xQh-lbAFKT
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SQtYU9yGDz4GaX8X8VgBaQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_przumMqnf9MPTyhiiqAKUA
          claim_id: c_NlkvvbEPjv_-xQh-lbAFKT
          source_id: s_eXjlmZtr4GLvSCxtKqZ81X
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eXjlmZtr4GLvSCxtKqZ81X
            source_type: api_record
            title: 中国历代人物传记资料库：俞氏(王一陽妻)（CBDB 306148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306148&o=json
            external_identifier: CBDB:306148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SQtYU9yGDz4GaX8X8VgBaQ
        status: active
        display_name: 俞氏
        merged_into_person_id: null
    - claim:
        id: c_wm6QwWjeSZmkvZ0PzIrCqr
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_utJUZx2cJXkW5Ne98B7ZGB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I0M0RaU3t0IHHQ2---xa10
          claim_id: c_wm6QwWjeSZmkvZ0PzIrCqr
          source_id: s_OZYpPPNTessCr6H_LAR6hp
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OZYpPPNTessCr6H_LAR6hp
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王一陽妻)（CBDB 306149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306149&o=json
            external_identifier: CBDB:306149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_utJUZx2cJXkW5Ne98B7ZGB
        status: active
        display_name: 沈氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_VdABGjujICj78RVPUUlW-_
        subject_person_id: p_pJunG57MHAi2x423pkpYEA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyynXuQ5-o1hBIVffOTBWt
          claim_id: c_VdABGjujICj78RVPUUlW-_
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pJunG57MHAi2x423pkpYEA
        status: active
        display_name: 王珏
        merged_into_person_id: null
    - claim:
        id: c_hqZyVoU5XKRN_-Wmng1Bju
        subject_person_id: p_TDSACRPuvvyZ91nEqE7y1X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ved4MD7oO-GxLXjMa6sQrK
          claim_id: c_hqZyVoU5XKRN_-Wmng1Bju
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TDSACRPuvvyZ91nEqE7y1X
        status: active
        display_name: 王輔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TmK1_1SLH5U0GxWje_vUJx
        subject_person_id: p_287KfFj8Ceh8MeB7L3oUPP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njbX3WnFdu0tgNm9bk8Bk1
          claim_id: c_TmK1_1SLH5U0GxWje_vUJx
          source_id: s_OAmle8spNivrOKYGTvJ3GC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OAmle8spNivrOKYGTvJ3GC
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 306152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306152&o=json
            external_identifier: CBDB:306152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_287KfFj8Ceh8MeB7L3oUPP
        status: active
        display_name: 王一言
        merged_into_person_id: null
    - claim:
        id: c_MQJqVTKe5En4-cdFBTxagS
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7hdyxt8972xgL4C51Kr76e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5T8Cnhx-gn7F_1x5YvPoZN
          claim_id: c_MQJqVTKe5En4-cdFBTxagS
          source_id: s_f8ieQfxZKb2ZO87sE7pLle
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f8ieQfxZKb2ZO87sE7pLle
            source_type: api_record
            title: 中国历代人物传记资料库：王一心（CBDB 306155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306155&o=json
            external_identifier: CBDB:306155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7hdyxt8972xgL4C51Kr76e
        status: active
        display_name: 王一心
        merged_into_person_id: null
    - claim:
        id: c_ureAWhl41FVXy9Ixw5HQkO
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AdnBkjWwYgpjvtqTRJbHqK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umvumjsNvzjwn8KA5xCjdP
          claim_id: c_ureAWhl41FVXy9Ixw5HQkO
          source_id: s_HHofTMNGp3DP7DV6Z4UILW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HHofTMNGp3DP7DV6Z4UILW
            source_type: api_record
            title: 中国历代人物传记资料库：王一恩（CBDB 306157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json
            external_identifier: CBDB:306157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AdnBkjWwYgpjvtqTRJbHqK
        status: active
        display_name: 王一恩
        merged_into_person_id: null
    - claim:
        id: c_JaYRsdnkZmZJfoIIQuqSir
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G8qWhYWcav95VJFrwVwwvL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z-O5_R2cMUGKldOEjnRJt_
          claim_id: c_JaYRsdnkZmZJfoIIQuqSir
          source_id: s_fJRbWmi-bstaG5Ifo01blZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fJRbWmi-bstaG5Ifo01blZ
            source_type: api_record
            title: 中国历代人物传记资料库：王一儒（CBDB 306158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306158&o=json
            external_identifier: CBDB:306158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G8qWhYWcav95VJFrwVwwvL
        status: active
        display_name: 王一儒
        merged_into_person_id: null
    - claim:
        id: c_CnRn1EEgEApGCkuycuYMia
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GGrgjmoCpG8khHk1WntQx4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbFl10KjckGrrkxYaOBdyc
          claim_id: c_CnRn1EEgEApGCkuycuYMia
          source_id: s_EbQzEwH1On6Utb0L6XjwUV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EbQzEwH1On6Utb0L6XjwUV
            source_type: api_record
            title: 中国历代人物传记资料库：王一桂（CBDB 306156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306156&o=json
            external_identifier: CBDB:306156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGrgjmoCpG8khHk1WntQx4
        status: active
        display_name: 王一桂
        merged_into_person_id: null
    - claim:
        id: c_ikLvScuz1qNCMvQtrMUh3X
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6UKeFWCxXm9pNUWMNvEbf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YuMXBso6_fyaPzmcFIU2AA
          claim_id: c_ikLvScuz1qNCMvQtrMUh3X
          source_id: s_UA--5X4gT8VGGFKWuzarS5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UA--5X4gT8VGGFKWuzarS5
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 306163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306163&o=json
            external_identifier: CBDB:306163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6UKeFWCxXm9pNUWMNvEbf
        status: active
        display_name: 王一治
        merged_into_person_id: null
    - claim:
        id: c_GH0KNUgz3-xbXzeiFEeF6m
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cCY43oapotvmJRx1286FUr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmUXjAwWi2aPHYlD0BIUTC
          claim_id: c_GH0KNUgz3-xbXzeiFEeF6m
          source_id: s_o6OE2ZF_ZULl-17IYFfmuZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o6OE2ZF_ZULl-17IYFfmuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王一夔（CBDB 306153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json
            external_identifier: CBDB:306153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCY43oapotvmJRx1286FUr
        status: active
        display_name: 王一夔
        merged_into_person_id: null
    - claim:
        id: c_tQdjLcKo6qFuf4rbabYnO1
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8RYhVNTRdqdiHdl8gjzHq
          claim_id: c_tQdjLcKo6qFuf4rbabYnO1
          source_id: s__QU12oxhUJ4y7zjD_akKjo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__QU12oxhUJ4y7zjD_akKjo
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jMQq3YUY1rS9x8GMhcsfGD
        status: active
        display_name: 王一德
        merged_into_person_id: null
    - claim:
        id: c_L_hbESs8KAYDsYQdYZZQSx
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kgkckdjSCfP3767FgQpEeb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMrApEPXBLiz4FzcShBuQt
          claim_id: c_L_hbESs8KAYDsYQdYZZQSx
          source_id: s_76FNDukl-ALF3xjq92bnhw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_76FNDukl-ALF3xjq92bnhw
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 306154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json
            external_identifier: CBDB:306154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kgkckdjSCfP3767FgQpEeb
        status: active
        display_name: 王一恭
        merged_into_person_id: null
    - claim:
        id: c_X0vVeWq4mVaO89rm7DRAWB
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mbgEqEMZcw8hcr1HznBD6o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dBe1czklpdBtaIkOVswwr
          claim_id: c_X0vVeWq4mVaO89rm7DRAWB
          source_id: s_hGh8nCufhSU3d2OMhnG9aD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hGh8nCufhSU3d2OMhnG9aD
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 306159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306159&o=json
            external_identifier: CBDB:306159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mbgEqEMZcw8hcr1HznBD6o
        status: active
        display_name: 王一舉
        merged_into_person_id: null
    - claim:
        id: c_WuOwU9W_uVf5E662NndvAl
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0luElnPM6k4TF6eCUDZw2T
          claim_id: c_WuOwU9W_uVf5E662NndvAl
          source_id: s_nwwsWLyzCfE7QSJ3U99Q_V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nwwsWLyzCfE7QSJ3U99Q_V
            source_type: api_record
            title: 中国历代人物传记资料库：王一貞（CBDB 306160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json
            external_identifier: CBDB:306160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQicTWdNR9GLjPd5vmTkRA
        status: active
        display_name: 王一貞
        merged_into_person_id: null
    - claim:
        id: c_bwniYhWfnQmELhXuvn_pvY
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rAy6BSNeedf4P5cQWT4vg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVjPW_9N7Yjcu4AjN8w8zt
          claim_id: c_bwniYhWfnQmELhXuvn_pvY
          source_id: s_x1Cq4xjToFDzwFxa4HxjpR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x1Cq4xjToFDzwFxa4HxjpR
            source_type: api_record
            title: 中国历代人物传记资料库：王一方（CBDB 306161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306161&o=json
            external_identifier: CBDB:306161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rAy6BSNeedf4P5cQWT4vg2
        status: active
        display_name: 王一方
        merged_into_person_id: null
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | 王一陽（生于1510年），明人物。明清進士進士，籍贯江都，入仕進士。（中国历代人物传记资料库 CBDB 203535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| spouses | p_SQtYU9yGDz4GaX8X8VgBaQ | 俞氏 | accepted |
| spouses | p_utJUZx2cJXkW5Ne98B7ZGB | 沈氏 | accepted |
| ancestors | p_pJunG57MHAi2x423pkpYEA | 王珏 | accepted |
| ancestors | p_TDSACRPuvvyZ91nEqE7y1X | 王輔 | accepted |
| other | p_287KfFj8Ceh8MeB7L3oUPP | 王一言 | accepted |
| other | p_7hdyxt8972xgL4C51Kr76e | 王一心 | accepted |
| other | p_AdnBkjWwYgpjvtqTRJbHqK | 王一恩 | accepted |
| other | p_G8qWhYWcav95VJFrwVwwvL | 王一儒 | accepted |
| other | p_GGrgjmoCpG8khHk1WntQx4 | 王一桂 | accepted |
| other | p_Y6UKeFWCxXm9pNUWMNvEbf | 王一治 | accepted |
| other | p_cCY43oapotvmJRx1286FUr | 王一夔 | accepted |
| other | p_jMQq3YUY1rS9x8GMhcsfGD | 王一德 | accepted |
| other | p_kgkckdjSCfP3767FgQpEeb | 王一恭 | accepted |
| other | p_mbgEqEMZcw8hcr1HznBD6o | 王一舉 | accepted |
| other | p_nQicTWdNR9GLjPd5vmTkRA | 王一貞 | accepted |
| other | p_rAy6BSNeedf4P5cQWT4vg2 | 王一方 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王一陽妻)（CBDB 306149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306149&o=json)
- [中国历代人物传记资料库：王一德（CBDB 306150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json)
- [中国历代人物传记资料库：王一恩（CBDB 306157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306157&o=json)
- [中国历代人物传记资料库：王一方（CBDB 306161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306161&o=json)
- [中国历代人物传记资料库：王一恭（CBDB 306154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306154&o=json)
- [中国历代人物传记资料库：王一桂（CBDB 306156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306156&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 306159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306159&o=json)
- [中国历代人物传记资料库：王一夔（CBDB 306153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json)
- [中国历代人物传记资料库：王一儒（CBDB 306158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306158&o=json)
- [中国历代人物传记资料库：王一心（CBDB 306155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306155&o=json)
- [中国历代人物传记资料库：王一言（CBDB 306152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306152&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 203535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json)
- [中国历代人物传记资料库：王一貞（CBDB 306160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json)
- [中国历代人物传记资料库：王一治（CBDB 306163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306163&o=json)
- [中国历代人物传记资料库：俞氏(王一陽妻)（CBDB 306148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306148&o=json)
