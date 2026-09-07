---
schema: wang-person/v1
id: p_Ang9eiGuniGWoebR7bHwTe
status: active
merged_into: null
display_name: 王源植
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DeUf4YrxFhXGUGSLGCDY9T
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源植（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任觀察使。中国历代人物传记资料库（CBDB）以人物编号 175513 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6YQCJwNv2PzVd6pXbYFqdW
          claim_id: c_DeUf4YrxFhXGUGSLGCDY9T
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_Xf8EOl1euQYlMql0mmLOZN
          claim_id: c_DeUf4YrxFhXGUGSLGCDY9T
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: CBDB:175513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nig6aCJQD2MAnrJLRaQUHS
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZFHSE242YNsgBEkhFvfwx2
          claim_id: c_nig6aCJQD2MAnrJLRaQUHS
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3RwBzxEZSDEYG6bAEFQCYz
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源植
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q8z3rLLCB4qNFJ5DjEcSNW
          claim_id: c_3RwBzxEZSDEYG6bAEFQCYz
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: Q45664050
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_pCepZGWC9CA2Lkt67BgMtA
          claim_id: c_3RwBzxEZSDEYG6bAEFQCYz
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: Q45664050
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AoHmPHaxSmc9yRsjWwcu87
        subject_person_id: p_4wbLmXso7CEPndJiovTrS6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ang9eiGuniGWoebR7bHwTe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ga7ZjMufGk5LRLUgJmFPX2
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_uCb6D1MQ7rqZFP4WWBbACN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uCb6D1MQ7rqZFP4WWBbACN
            source_type: api_record
            title: 维基数据：王涧（Q45663995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663995
            external_identifier: Q45663995
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.369Z
            metadata_json: null
        - id: cs_ZkadLtS1sAMN8WLtbPF4VF
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_x9jX1CPvi1JzpZGHEakrCh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x9jX1CPvi1JzpZGHEakrCh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澗（175512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json
            external_identifier: CBDB:175512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.523Z
            metadata_json: null
        - id: cs_YCQh3PxAwSoUeBrCvy9egM
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_5azWgRJ5b9AzcCxFdoTJdM
          claim_id: c_AoHmPHaxSmc9yRsjWwcu87
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
      object_person:
        id: p_4wbLmXso7CEPndJiovTrS6
        status: active
        display_name: 王涧
        merged_into_person_id: null
  children:
    - claim:
        id: c_ksBzLcBnKf8Y5uNUhPFD2S
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vKnTYZkMnhEhgMRQeZWtJ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1DdaRmDzDYStwbSpk7uCAb
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_Sb8SBpF4G9SvceCFRYYa7x
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_srZExKFnJ63i6D368LZKuX
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_mem5RhPPkPP2521RDpjpLm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mem5RhPPkPP2521RDpjpLm
            source_type: api_record
            title: 维基数据：王愿（Q45664104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664104
            external_identifier: Q45664104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_99hCN5zX3F3scTfqmMQNse
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_N7LbjoMaZh3n8EDG2rjRDs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_N7LbjoMaZh3n8EDG2rjRDs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愿（175514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175514&o=json
            external_identifier: CBDB:175514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.017Z
            metadata_json: null
      object_person:
        id: p_vKnTYZkMnhEhgMRQeZWtJ8
        status: active
        display_name: 王愿
        merged_into_person_id: null
    - claim:
        id: c_7snVMdXLVZteksT2CLpNrE
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5N5Aoe4K2PD3KPHaShvznr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1ArHztVzVRVLpt8eDx56WK
          claim_id: c_7snVMdXLVZteksT2CLpNrE
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_epS747BW7Z2ix1sCPr8pnj
          claim_id: c_7snVMdXLVZteksT2CLpNrE
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_jwAH5N7hJocHAwKSLRiBVc
          claim_id: c_7snVMdXLVZteksT2CLpNrE
          source_id: s_ZDCMTW8KbK7KNCUtrUHD9N
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZDCMTW8KbK7KNCUtrUHD9N
            source_type: api_record
            title: 维基数据：王赐（Q45664158）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664158
            external_identifier: Q45664158
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_hRXnvwX8iCDtXbAiXbhdZt
          claim_id: c_7snVMdXLVZteksT2CLpNrE
          source_id: s_L87oCaeXHSB7QewxwtjsFN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_L87oCaeXHSB7QewxwtjsFN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賜（175515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175515&o=json
            external_identifier: CBDB:175515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.016Z
            metadata_json: null
      object_person:
        id: p_5N5Aoe4K2PD3KPHaShvznr
        status: active
        display_name: 王赐
        merged_into_person_id: null
    - claim:
        id: c_aWqcG99x1Q37Lh44hjH2g1
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R5j1wizb6egtoUUCeeZr8r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E99Xx8abAQaXaXiyHukHAx
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_jGnWPsE8fZyFCLP1GVEdsC
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_ZnLARAZ2wrt5YEkwd4JfJG
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_w63DtpVDi8Fi4Lp3RfWyDf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w63DtpVDi8Fi4Lp3RfWyDf
            source_type: api_record
            title: 维基数据：王恪（Q45664213）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664213
            external_identifier: Q45664213
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_ZCkzeuLfmrCsT1iqwQP8L2
          claim_id: c_aWqcG99x1Q37Lh44hjH2g1
          source_id: s_cxei3uZQoL5YF4AMexHT9E
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_cxei3uZQoL5YF4AMexHT9E
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恪（175516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175516&o=json
            external_identifier: CBDB:175516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.009Z
            metadata_json: null
      object_person:
        id: p_R5j1wizb6egtoUUCeeZr8r
        status: active
        display_name: 王恪
        merged_into_person_id: null
    - claim:
        id: c_ftPrCwp8ShGJteqH3SBS4W
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LRLqzYmU7vSsaDV5fcuH9q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DkhPTRFcq57n2LR7TJT1w6
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_YQVsUWqaSW9WLnQhN4obHy
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_V281foiHQXAmh1yeQtQ4z3
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_w6ZLqnYQ7PDgL8pGTNoBBs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6ZLqnYQ7PDgL8pGTNoBBs
            source_type: api_record
            title: 维基数据：王慎（Q45664267）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664267
            external_identifier: Q45664267
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_wBPzyCGX8YH28CC1x2KG9p
          claim_id: c_ftPrCwp8ShGJteqH3SBS4W
          source_id: s_q8XzXf12qppqFvuVDBDqhQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_q8XzXf12qppqFvuVDBDqhQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175517&o=json
            external_identifier: CBDB:175517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.734Z
            metadata_json: null
      object_person:
        id: p_LRLqzYmU7vSsaDV5fcuH9q
        status: active
        display_name: 王慎
        merged_into_person_id: null
    - claim:
        id: c_uyQXE7r4G5aU4LBEWHaQ93
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R1AWtKLJKe6Pe6kZGiam47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DSQGNneDw1MMMQmn4QuHca
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_PF4FifkxBMbCVgPzvwSYR3
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_9P2LC52NPdmGwk6HKARfDS
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QbicAE4ciheoSksPx5VAXt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QbicAE4ciheoSksPx5VAXt
            source_type: api_record
            title: 维基数据：王愖（Q45664321）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664321
            external_identifier: Q45664321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_TJzTb2MP6sWE7FioAMzQEk
          claim_id: c_uyQXE7r4G5aU4LBEWHaQ93
          source_id: s_QNtKr8JLon8QJCaqxBhhbV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QNtKr8JLon8QJCaqxBhhbV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愖（175518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175518&o=json
            external_identifier: CBDB:175518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.741Z
            metadata_json: null
      object_person:
        id: p_R1AWtKLJKe6Pe6kZGiam47
        status: active
        display_name: 王愖
        merged_into_person_id: null
    - claim:
        id: c_RbRcHvzbUg561yff6WMe3R
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zu4iq4fW7QSu6w1A5xih6t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BGNV9gj2rJZZUnNznnTZS2
          claim_id: c_RbRcHvzbUg561yff6WMe3R
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_N6TkxC1QBohH2RJFejh1LU
          claim_id: c_RbRcHvzbUg561yff6WMe3R
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_jB9BBAcQ4NcBEukT5fSUzt
          claim_id: c_RbRcHvzbUg561yff6WMe3R
          source_id: s_tet1XuyTe7oE61xGBFq1jy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tet1XuyTe7oE61xGBFq1jy
            source_type: api_record
            title: 维基数据：王憬（Q45664376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664376
            external_identifier: Q45664376
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_hZPc69W3pD2dTjXcWjcy1a
          claim_id: c_RbRcHvzbUg561yff6WMe3R
          source_id: s_WvJGEw6EqBzH6zTLcm9Cwr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_WvJGEw6EqBzH6zTLcm9Cwr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王憬（175519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175519&o=json
            external_identifier: CBDB:175519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.741Z
            metadata_json: null
      object_person:
        id: p_zu4iq4fW7QSu6w1A5xih6t
        status: active
        display_name: 王憬
        merged_into_person_id: null
    - claim:
        id: c_8gGskow9TpDEsopK94BQeZ
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35J3P4G4dTwFui33z71AnY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_89Kqc2pP7gfwmdsuwH7GwQ
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_MD9VBio3pKVrDJBkKeNd8s
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_5V4NPB9y4b4FXytU41sLoC
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_MsT71Bu72R2cVxfvC8uNan
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MsT71Bu72R2cVxfvC8uNan
            source_type: api_record
            title: 维基数据：王柷（Q45664433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664433
            external_identifier: Q45664433
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:53.571Z
            metadata_json: null
        - id: cs_iEBvRC13TtAPV2BYwSR1FX
          claim_id: c_8gGskow9TpDEsopK94BQeZ
          source_id: s_CXMrHP1FWDq12wj7YWoyBz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CXMrHP1FWDq12wj7YWoyBz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王柷（175520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175520&o=json
            external_identifier: CBDB:175520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:53.737Z
            metadata_json: null
      object_person:
        id: p_35J3P4G4dTwFui33z71AnY
        status: active
        display_name: 王柷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源植（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任觀察使。中国历代人物传记资料库（CBDB）以人物编号 175513 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源植 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wbLmXso7CEPndJiovTrS6 | 王涧 | accepted |
| children | p_vKnTYZkMnhEhgMRQeZWtJ8 | 王愿 | accepted |
| children | p_5N5Aoe4K2PD3KPHaShvznr | 王赐 | accepted |
| children | p_R5j1wizb6egtoUUCeeZr8r | 王恪 | accepted |
| children | p_LRLqzYmU7vSsaDV5fcuH9q | 王慎 | accepted |
| children | p_R1AWtKLJKe6Pe6kZGiam47 | 王愖 | accepted |
| children | p_zu4iq4fW7QSu6w1A5xih6t | 王憬 | accepted |
| children | p_35J3P4G4dTwFui33z71AnY | 王柷 | accepted |

## 外部来源

- [维基数据：王愖（Q45664321）](https://www.wikidata.org/wiki/Q45664321)
- [维基数据：王赐（Q45664158）](https://www.wikidata.org/wiki/Q45664158)
- [维基数据：王涧（Q45663995）](https://www.wikidata.org/wiki/Q45663995)
- [维基数据：王憬（Q45664376）](https://www.wikidata.org/wiki/Q45664376)
- [维基数据：王恪（Q45664213）](https://www.wikidata.org/wiki/Q45664213)
- [维基数据：王慎（Q45664267）](https://www.wikidata.org/wiki/Q45664267)
- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [维基数据：王愿（Q45664104）](https://www.wikidata.org/wiki/Q45664104)
- [维基数据：王柷（Q45664433）](https://www.wikidata.org/wiki/Q45664433)
- [CBDB 中国历代人物传记资料库：王愖（175518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175518&o=json)
- [CBDB 中国历代人物传记资料库：王賜（175515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175515&o=json)
- [CBDB 中国历代人物传记资料库：王澗（175512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175512&o=json)
- [CBDB 中国历代人物传记资料库：王憬（175519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175519&o=json)
- [CBDB 中国历代人物传记资料库：王恪（175516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175516&o=json)
- [CBDB 中国历代人物传记资料库：王慎（175517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175517&o=json)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
- [CBDB 中国历代人物传记资料库：王愿（175514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175514&o=json)
- [CBDB 中国历代人物传记资料库：王柷（175520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175520&o=json)
