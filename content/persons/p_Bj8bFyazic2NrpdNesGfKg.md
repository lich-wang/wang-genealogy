---
schema: wang-person/v1
id: p_Bj8bFyazic2NrpdNesGfKg
status: active
merged_into: null
display_name: 王鸿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tgPUsPt1EPckZtvkkC6QLx
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸿，唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 140992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9tPo7KDjjJMPGr5omyaDbM
          claim_id: c_tgPUsPt1EPckZtvkkC6QLx
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: null
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
        - id: cs_uPjDbjjktSLG2qQbYq6e14
          claim_id: c_tgPUsPt1EPckZtvkkC6QLx
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: CBDB:140992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AVcipMQ9Noov4yFFMf9Hej
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8k5TT7cqo8E2ZdtPLrAD35
          claim_id: c_AVcipMQ9Noov4yFFMf9Hej
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: Q45507766
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_bNmsc77k9pKrXKgg8hiKg4
          claim_id: c_AVcipMQ9Noov4yFFMf9Hej
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: Q45507766
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kp5iwwwb7WMMY7FTUtGoiP
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bj8bFyazic2NrpdNesGfKg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P7DpASAKwij6T313EPXJWc
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_dW2Bb8p5tn4ffUPCY1ANMp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dW2Bb8p5tn4ffUPCY1ANMp
            source_type: api_record
            title: 维基数据：王方泰（Q45623207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623207
            external_identifier: Q45623207
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:21.608Z
            metadata_json: null
        - id: cs_SkL2MoF2GJZ7tC2DRGCogz
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
        - id: cs_LA4XiACbyP37LTPTFQF4DG
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P22（父）
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
        - id: cs_K2eXFEjP2DpGzcWkUL9CkN
          claim_id: c_kp5iwwwb7WMMY7FTUtGoiP
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_RQFRb7ZkfNHmmspp2wmJ84
        status: active
        display_name: 王方泰
        merged_into_person_id: null
  children:
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
        id: p_KXD6a4zaL9E1N69hTNkTMP
        status: active
        display_name: 王志悌
        merged_into_person_id: null
    - claim:
        id: c_pTmSp9CyzZPAq9H5uJYn7o
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M5B7SxK83UpkrLpzZWB3P7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FwR99uNHP8UdpguyBGcPXy
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
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
        - id: cs_mG82jNJCbybuSN4nYAs9kG
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
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
        - id: cs_sPiZmLzQMDEvNDeeJwiCGQ
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_NANd6KM6L7cKWN9e3gDG46
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NANd6KM6L7cKWN9e3gDG46
            source_type: api_record
            title: 维基数据：王志凝（Q45623332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623332
            external_identifier: Q45623332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_QbpzE6Sa8iunWwEG7n7v6U
          claim_id: c_pTmSp9CyzZPAq9H5uJYn7o
          source_id: s_psuT8QwJ2zxVs6KEi8KjET
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_psuT8QwJ2zxVs6KEi8KjET
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志凝（154139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154139&o=json
            external_identifier: CBDB:154139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.643Z
            metadata_json: null
      object_person:
        id: p_M5B7SxK83UpkrLpzZWB3P7
        status: active
        display_name: 王志凝
        merged_into_person_id: null
    - claim:
        id: c_Lt59QQ15a11Rp1bbPzw4C5
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p5VRgM5CRYbvtxNdaeEn7i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AsSEGMvAWBh5FHnYp7SpqY
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
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
        - id: cs_UMf8UgAHbXvr76nVWyZQEy
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
          source_id: s_V15eaYzTFQ4AiHYps8Tkxg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V15eaYzTFQ4AiHYps8Tkxg
            source_type: api_record
            title: 维基数据：王悌（Q45623393）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45623393
            external_identifier: Q45623393
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.887Z
            metadata_json: null
        - id: cs_Pwko3YiJzCP5yvQvAuBgxw
          claim_id: c_Lt59QQ15a11Rp1bbPzw4C5
          source_id: s_Tv9NbTZt8C6DfbDVjHJEuC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_Tv9NbTZt8C6DfbDVjHJEuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王悌（154140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154140&o=json
            external_identifier: CBDB:154140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.029Z
            metadata_json: null
      object_person:
        id: p_p5VRgM5CRYbvtxNdaeEn7i
        status: active
        display_name: 王悌
        merged_into_person_id: null
    - claim:
        id: c_rijfjpCgqrAoHDoEr175LF
        subject_person_id: p_Bj8bFyazic2NrpdNesGfKg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_S3MwG2kKk5brnwtbib7BVJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bn3EmCfsJcmzEt4MqkBnUa
          claim_id: c_rijfjpCgqrAoHDoEr175LF
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
        - id: cs_Rna9x9HnXW24VvRGF2ckcS
          claim_id: c_rijfjpCgqrAoHDoEr175LF
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
        - id: cs_cjShkKtVR5cNEiPtm5i3k7
          claim_id: c_rijfjpCgqrAoHDoEr175LF
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
      object_person:
        id: p_S3MwG2kKk5brnwtbib7BVJ
        status: active
        display_name: 王同恩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8VXYnsyQg9uC1s6RxKKHT4
        subject_person_id: p_3YfGj4is8xidR3bZEoJwJr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Bj8bFyazic2NrpdNesGfKg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_rvpL83gV1yHuVcXssAECrU
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_842fPHTiuXebkgrsSQy6Wc
          stance: supports
          locator: 亲属关系：妻子
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
        - id: cs_uyAFCZwEArvmSfAE5ZRkBo
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_oEZhBpmPhCMLgvgFWpzFVy
          stance: supports
          locator: P26（配偶）
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
        - id: cs_cHrGh8NV96fmrj7byM1A3a
          claim_id: c_8VXYnsyQg9uC1s6RxKKHT4
          source_id: s_f96eebEACDuDWkfC2x25g9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_f96eebEACDuDWkfC2x25g9
            source_type: api_record
            title: 维基数据：薛氏（Q65805409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805409
            external_identifier: Q65805409
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:43.809Z
            metadata_json: null
      object_person:
        id: p_3YfGj4is8xidR3bZEoJwJr
        status: active
        display_name: 薛氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鸿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鸿，唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 140992 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鸿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQFRb7ZkfNHmmspp2wmJ84 | 王方泰 | accepted |
| children | p_KXD6a4zaL9E1N69hTNkTMP | 王志悌 | accepted |
| children | p_M5B7SxK83UpkrLpzZWB3P7 | 王志凝 | accepted |
| children | p_p5VRgM5CRYbvtxNdaeEn7i | 王悌 | accepted |
| children | p_S3MwG2kKk5brnwtbib7BVJ | 王同恩 | accepted |
| spouses | p_3YfGj4is8xidR3bZEoJwJr | 薛氏 | accepted |

## 外部来源

- [维基数据：王方泰（Q45623207）](https://www.wikidata.org/wiki/Q45623207)
- [维基数据：王鸿（Q45507766）](https://www.wikidata.org/wiki/Q45507766)
- [维基数据：王悌（Q45623393）](https://www.wikidata.org/wiki/Q45623393)
- [维基数据：王同恩（Q45623269）](https://www.wikidata.org/wiki/Q45623269)
- [维基数据：王志凝（Q45623332）](https://www.wikidata.org/wiki/Q45623332)
- [维基数据：王志悌（Q45507893）](https://www.wikidata.org/wiki/Q45507893)
- [维基数据：薛氏（Q65805409）](https://www.wikidata.org/wiki/Q65805409)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王鴻（140992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140992&o=json)
- [CBDB 中国历代人物传记资料库：王悌（154140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154140&o=json)
- [CBDB 中国历代人物传记资料库：王志凝（154139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154139&o=json)
- [CBDB 中国历代人物传记资料库：王志悌（140994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140994&o=json)
