---
schema: wang-person/v1
id: p_KXD6a4zaL9E1N69hTNkTMP
status: active
merged_into: null
display_name: 王志悌
cbdb_id: 140994
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CofWULbBDDVB74Qywq3AQ5
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志悌，唐人物。籍贯臨沂，曾任未詳。（中国历代人物传记资料库 CBDB 140994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ZXX2ziB5cGo72vzjE9J3WG
          claim_id: c_CofWULbBDDVB74Qywq3AQ5
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_otdFtxnmo8vFQx0don6XNN
          claim_id: c_CofWULbBDDVB74Qywq3AQ5
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: CBDB:140994
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_36QqPEtzKdYmXkvBfqRbvg
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志悌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HN2a2ARA7j42qoZpAHHuYo
          claim_id: c_36QqPEtzKdYmXkvBfqRbvg
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: Q45507893
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_ixpG787Ec4PoxKCrvRn2NW
          claim_id: c_36QqPEtzKdYmXkvBfqRbvg
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: Q45507893
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zkpMiThqSyAE7zKmQ3Exsa
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LXzF8g6GwBchTSwpXEnCcq
          claim_id: c_zkpMiThqSyAE7zKmQ3Exsa
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oEZhBpmPhCMLgvgFWpzFVy
            source_type: api_record
            title: 维基数据：王鸿（Q45507766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507766
            external_identifier: Q45507766
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:31.027Z
            metadata_json: null
        - id: cs_g6V1cMJKv1rhLGrdXndWDD
          claim_id: c_zkpMiThqSyAE7zKmQ3Exsa
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_842fPHTiuXebkgrsSQy6Wc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鴻（140992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json
            external_identifier: CBDB:140992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:31.350Z
            metadata_json: null
        - id: cs_66NynFMsfgd5ftVKJt88Fx
          claim_id: c_zkpMiThqSyAE7zKmQ3Exsa
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_oPR2abxcBmJ3srmmghsdho
          claim_id: c_zkpMiThqSyAE7zKmQ3Exsa
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person:
        id: p_Bj8bFyazic2NrpdNesGfKg
        status: active
        display_name: 王鸿
        merged_into_person_id: null
  children:
    - claim:
        id: c_Kjwv3RqAzjL8AQcy8dd2DJ
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TSbppQ7EMGk93dhLkHhJoS
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_kctzQzQt1tNU6aRF4MrNhE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_kctzQzQt1tNU6aRF4MrNhE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王同恩（154138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154138&o=json
            external_identifier: CBDB:154138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.646Z
            metadata_json: null
        - id: cs_UwXYDWQXQzY6fizdKD1Zea
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_Zr9PiNegxAqK3oGnidjMx6
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_LgKdubFApXZfva7Fvx63NH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LgKdubFApXZfva7Fvx63NH
            source_type: api_record
            title: 维基数据：王同恩（Q45623269）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623269
            external_identifier: Q45623269
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_gh1rv6fd6xaVvvYuQNNmeX
          claim_id: c_Kjwv3RqAzjL8AQcy8dd2DJ
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person:
        id: p_S3MwG2kKk5brnwtbib7BVJ
        status: active
        display_name: 王同恩
        merged_into_person_id: null
    - claim:
        id: c_uEtZg6grsFVD2uEyBrnXag
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iTqKF6d5DFftKyBtDG4KDL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_W7fyqqLPeKjmny53519S82
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_dJVZ6BD85k7VK1H29vw86E
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_vP3LdB2TLEy2cC2qZBNUPD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vP3LdB2TLEy2cC2qZBNUPD
            source_type: api_record
            title: 维基数据：王胡子（Q45623519）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623519
            external_identifier: Q45623519
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.560Z
            metadata_json: null
        - id: cs_ujZKDSnB821gsuwqPE6sd3
          claim_id: c_uEtZg6grsFVD2uEyBrnXag
          source_id: s_SvGE27R8W3kVzdAREBsA61
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_SvGE27R8W3kVzdAREBsA61
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鬍子（154142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154142&o=json
            external_identifier: CBDB:154142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.714Z
            metadata_json: null
      object_person:
        id: p_iTqKF6d5DFftKyBtDG4KDL
        status: active
        display_name: 王胡子
        merged_into_person_id: null
    - claim:
        id: c_fsYMPoaAa7U8LLT9dqgpkx
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xtyYrh2ceBwZ769mV4SDUW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43BFG1eNjSezqJ9HL3eDoh
          claim_id: c_fsYMPoaAa7U8LLT9dqgpkx
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌彙編續集
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person:
        id: p_xtyYrh2ceBwZ769mV4SDUW
        status: active
        display_name: 王汶
        merged_into_person_id: null
    - claim:
        id: c_5R5sLjLpRf87au56AB1yn3
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pkvum7C9UbRnL4Ph3WHQ58
          claim_id: c_5R5sLjLpRf87au56AB1yn3
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vvTps2KQMtPrvQNm7fq5sF
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_57LyeeVHTGURYHJKMHQtCN
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_qh81CBHUevU8MqAeHDH7JX
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
        - id: cs_qr57pN2WvrcErgtBcmWrFa
          claim_id: c_vvTps2KQMtPrvQNm7fq5sF
          source_id: s_ayizmqntTivBixJU5P1JqR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ayizmqntTivBixJU5P1JqR
            source_type: api_record
            title: 维基数据：李氏（Q65805411）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805411
            external_identifier: Q65805411
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:54.206Z
            metadata_json: null
      object_person:
        id: p_a3GyCfQsaAPkPQhLi9t2Z8
        status: active
        display_name: 李氏
        merged_into_person_id: null
    - claim:
        id: c_vam935wazFsT7aJbjDZTGb
        subject_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_381bNLPcQvefj4YG6bYZoC
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_fA4yFEVkP128orqD5bJWNZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fA4yFEVkP128orqD5bJWNZ
            source_type: api_record
            title: 维基数据：王志悌（Q45507893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507893
            external_identifier: Q45507893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_GReARQA6f7ZqPT7MLaJyS1
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_zZdP9fY2WNPS2b17HTjS2G
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_zZdP9fY2WNPS2b17HTjS2G
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志悌（140994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json
            external_identifier: CBDB:140994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.649Z
            metadata_json: null
        - id: cs_7eAWyMCGSCGHkrBQU392Xd
          claim_id: c_vam935wazFsT7aJbjDZTGb
          source_id: s_4YxwPCNmu5fTGDpDscrk4p
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4YxwPCNmu5fTGDpDscrk4p
            source_type: api_record
            title: 维基数据：崔氏（Q65805412）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805412
            external_identifier: Q65805412
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.917Z
            metadata_json: null
      object_person:
        id: p_sJy5HhqgLH3dD5PKotzG8r
        status: active
        display_name: 崔氏
        merged_into_person_id: null
    - claim:
        id: c_1705_ESTq-t7kiB99CtHjq
        subject_person_id: p_a3GyCfQsaAPkPQhLi9t2Z8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujlRXPfQutXmFO-h6csnDK
          claim_id: c_1705_ESTq-t7kiB99CtHjq
          source_id: s_kFDbesSL1u6MpZteKAfmDA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 190：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kFDbesSL1u6MpZteKAfmDA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（154150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154150&o=json
            external_identifier: CBDB:154150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:54.348Z
            metadata_json: null
      object_person:
        id: p_a3GyCfQsaAPkPQhLi9t2Z8
        status: active
        display_name: 李氏
        merged_into_person_id: null
    - claim:
        id: c_uA2mVQ1HPqiWBq_eQedofp
        subject_person_id: p_sJy5HhqgLH3dD5PKotzG8r
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXD6a4zaL9E1N69hTNkTMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXpccsQllI6ld_d4Q3TY1B
          claim_id: c_uA2mVQ1HPqiWBq_eQedofp
          source_id: s_g976X44Q93pkoABpTU6h3j
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 190：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g976X44Q93pkoABpTU6h3j
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：崔氏（154151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154151&o=json
            external_identifier: CBDB:154151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.084Z
            metadata_json: null
      object_person:
        id: p_sJy5HhqgLH3dD5PKotzG8r
        status: active
        display_name: 崔氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王志悌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志悌，唐人物。籍贯臨沂，曾任未詳。（中国历代人物传记资料库 CBDB 140994） | accepted |
| name.primary | 王志悌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Bj8bFyazic2NrpdNesGfKg | 王鸿 | accepted |
| children | p_S3MwG2kKk5brnwtbib7BVJ | 王同恩 | accepted |
| children | p_iTqKF6d5DFftKyBtDG4KDL | 王胡子 | accepted |
| children | p_xtyYrh2ceBwZ769mV4SDUW | 王汶 | accepted |
| children | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |
| spouses | p_a3GyCfQsaAPkPQhLi9t2Z8 | 李氏 | accepted |
| spouses | p_sJy5HhqgLH3dD5PKotzG8r | 崔氏 | accepted |
| spouses | p_a3GyCfQsaAPkPQhLi9t2Z8 | 李氏 | accepted |
| spouses | p_sJy5HhqgLH3dD5PKotzG8r | 崔氏 | accepted |

## 外部来源

- [维基数据：崔氏（Q65805412）](https://www.wikidata.org/wiki/Q65805412)
- [维基数据：李氏（Q65805411）](https://www.wikidata.org/wiki/Q65805411)
- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：王胡子（Q45623519）](https://www.wikidata.org/wiki/Q45623519)
- [维基数据：王同恩（Q45623269）](https://www.wikidata.org/wiki/Q45623269)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [CBDB 中国历代人物传记资料库：崔氏（154151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154151&o=json)
- [CBDB 中国历代人物传记资料库：李氏（154150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154150&o=json)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
- [CBDB 中国历代人物传记资料库：王鬍子（154142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154142&o=json)
- [CBDB 中国历代人物传记资料库：王同恩（154138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154138&o=json)
- [CBDB 中国历代人物传记资料库：王志悌（140994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json)
