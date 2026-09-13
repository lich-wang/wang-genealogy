---
schema: wang-person/v1
id: p_nKXmXJSn1SSK6HeL7KRZPW
status: active
merged_into: null
display_name: 王润
cbdb_id: 175498
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cg5Zr51oRcK3qbUswQoF6S
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王润（卒于801年），唐人物。籍贯咸陽，曾任州別駕。（中国历代人物传记资料库 CBDB 175498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_bciGRY8455KJ6HFpewBezF
          claim_id: c_Cg5Zr51oRcK3qbUswQoF6S
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_iILq63_qszWs1pMnI75Pk_
          claim_id: c_Cg5Zr51oRcK3qbUswQoF6S
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: CBDB:175498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QznYCGEJb1WAnRCHdzNH3f
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 801年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0801-01-01
            latest: 0801-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JaCs2NUp1Qr4wyHKo7C6c6
          claim_id: c_QznYCGEJb1WAnRCHdzNH3f
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_As6r3FDCfW98wmf1jSUDxh
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王润
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Nj3TJpAi2SUCZVFFzzbiba
          claim_id: c_As6r3FDCfW98wmf1jSUDxh
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: Q45663208
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_t3Rz4Go1P7G6Qe5PrV7n8U
          claim_id: c_As6r3FDCfW98wmf1jSUDxh
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: Q45663208
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ofkh8CcNoZQfF8nf1tXZ31
        subject_person_id: p_Kc9Jf7R9CePnQgCjQWHCUx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Zgdr8896Gc236PJyz9q3Bk
          claim_id: c_ofkh8CcNoZQfF8nf1tXZ31
          source_id: s_nB16U2nhz9j6YJvQSAZzMC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_nB16U2nhz9j6YJvQSAZzMC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俌（175453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json
            external_identifier: CBDB:175453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.181Z
            metadata_json: null
        - id: cs_hDM13GsQ2Fr8n5rFjaKz8u
          claim_id: c_ofkh8CcNoZQfF8nf1tXZ31
          source_id: s_vyWmh7JBAZcLjsXumeRUjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vyWmh7JBAZcLjsXumeRUjc
            source_type: api_record
            title: 维基数据：王俌（Q45660547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660547
            external_identifier: Q45660547
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%8C_(%E5%94%90%E6%9C%9D)
        - id: cs_C48QUjDTuw5NGSKJySVEZT
          claim_id: c_ofkh8CcNoZQfF8nf1tXZ31
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_GBS3DxsuVJ5Ry6dZmjV7i2
          claim_id: c_ofkh8CcNoZQfF8nf1tXZ31
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
      object_person:
        id: p_Kc9Jf7R9CePnQgCjQWHCUx
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children:
    - claim:
        id: c_ghsZMN1aQAC5EB7CC2hUUk
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ACFBuUPtdA98Dyj7Ydbe9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_T2rt56UxHGdnJ2zKWTcb84
          claim_id: c_ghsZMN1aQAC5EB7CC2hUUk
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_eb8P7NNZpeST2QKKn6YyJ3
          claim_id: c_ghsZMN1aQAC5EB7CC2hUUk
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_GHj716nEdKGsG6xe24C8J5
          claim_id: c_ghsZMN1aQAC5EB7CC2hUUk
          source_id: s_SbcjZki6oDbuqahSDLYjdU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SbcjZki6oDbuqahSDLYjdU
            source_type: api_record
            title: 维基数据：王遇（Q45663263）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663263
            external_identifier: Q45663263
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_xJzBigLB5yUgcmPyXBxaJJ
          claim_id: c_ghsZMN1aQAC5EB7CC2hUUk
          source_id: s_V84L5QjZshunPECaYAGrSL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_V84L5QjZshunPECaYAGrSL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遇（175499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175499&o=json
            external_identifier: CBDB:175499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.586Z
            metadata_json: null
      object_person:
        id: p_ACFBuUPtdA98Dyj7Ydbe9T
        status: active
        display_name: 王遇
        merged_into_person_id: null
    - claim:
        id: c_5JMvenEC1dkoGZMw8LnCDa
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6xBMX6XWhHbr86WPwDHtV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q8uXz6Q726u2KgFABuPiRe
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_pWoh5SAJthVzriKSUT6kcf
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_6yRyJmkS2uBKb4WSaLDS8F
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_YTgme2XM59m3a91BSZ28My
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YTgme2XM59m3a91BSZ28My
            source_type: api_record
            title: 维基数据：王敬元（Q45663602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663602
            external_identifier: Q45663602
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_zJDYbzMrwdmfRR795dmn9o
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_1MdEJxL2XiE4C74myy831p
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1MdEJxL2XiE4C74myy831p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敬元（175505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175505&o=json
            external_identifier: CBDB:175505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.607Z
            metadata_json: null
      object_person:
        id: p_b6xBMX6XWhHbr86WPwDHtV
        status: active
        display_name: 王敬元
        merged_into_person_id: null
    - claim:
        id: c_EP67swHhKgmYayeS3vGebU
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8fsFyfhgRHWzbUvCAX22q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hEvuztKjPQCm3YGgGwRWxi
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_y7BaLZVcFL4fSfyQoJcM1H
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_Yyh1KWU8P27Kb5kjkWajEA
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_pDPMd8zKT46EXVCQfKvYs7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pDPMd8zKT46EXVCQfKvYs7
            source_type: api_record
            title: 维基数据：王逢元（Q45663658）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663658
            external_identifier: Q45663658
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_eTCcMgPdhWM4EPtPeF6Pr5
          claim_id: c_EP67swHhKgmYayeS3vGebU
          source_id: s_cRH4GBu4cCkKYABzKHVNPG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_cRH4GBu4cCkKYABzKHVNPG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逢元（175506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175506&o=json
            external_identifier: CBDB:175506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.603Z
            metadata_json: null
      object_person:
        id: p_K8fsFyfhgRHWzbUvCAX22q
        status: active
        display_name: 王逢元
        merged_into_person_id: null
    - claim:
        id: c_Ag4qbnLJxkn4WuALuXV9gN
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vF3BNQJmoFCZph3f3LWH7k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFpA6fTVrivv7m892GEBSf
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_SeK4xDLuNnanuvkekMLMAt
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_VkZS1mHMT2G7LbmXN6LT7y
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_aZv7btLyNQaHorMXH2GZQT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aZv7btLyNQaHorMXH2GZQT
            source_type: api_record
            title: 维基数据：王迪（Q45663715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663715
            external_identifier: Q45663715
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_9a6JDPmixxW3jxtdtB9KB4
          claim_id: c_Ag4qbnLJxkn4WuALuXV9gN
          source_id: s_4ekSrCmLKAaDBHAMn7vSFN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4ekSrCmLKAaDBHAMn7vSFN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迪（175507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175507&o=json
            external_identifier: CBDB:175507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.284Z
            metadata_json: null
      object_person:
        id: p_vF3BNQJmoFCZph3f3LWH7k
        status: active
        display_name: 王迪
        merged_into_person_id: null
    - claim:
        id: c_k99fYHVE5n3iAqDW4P13Js
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cMP48zNTZu9hmEiLSZK3dy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DPEYHQC5pLLxGLuJKwM9iF
          claim_id: c_k99fYHVE5n3iAqDW4P13Js
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_NxTz4bUBeUdgJ8PQXsEQXU
          claim_id: c_k99fYHVE5n3iAqDW4P13Js
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_XTAmJK2XfpJmaQKizxpbkU
          claim_id: c_k99fYHVE5n3iAqDW4P13Js
          source_id: s_HQtUQ93LQeWQb8PyLXUbNd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HQtUQ93LQeWQb8PyLXUbNd
            source_type: api_record
            title: 维基数据：王适（Q45663771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663771
            external_identifier: Q45663771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_1dKBgmHu9RT5MeisQP6V9U
          claim_id: c_k99fYHVE5n3iAqDW4P13Js
          source_id: s_3AzCjB5PSEHghoX7NKvwn2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3AzCjB5PSEHghoX7NKvwn2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王適（175508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175508&o=json
            external_identifier: CBDB:175508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.281Z
            metadata_json: null
      object_person:
        id: p_cMP48zNTZu9hmEiLSZK3dy
        status: active
        display_name: 王适
        merged_into_person_id: null
    - claim:
        id: c_AjQpED2RDKKw4cW4adjogi
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PV1N9AJ49Net787Bq8MWNN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RoKwotmLiD3NFXJhCcj2RN
          claim_id: c_AjQpED2RDKKw4cW4adjogi
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_SCVqPsYLGMJ5GNfCTNmW3N
          claim_id: c_AjQpED2RDKKw4cW4adjogi
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_kSHKy86GQF6MuvVM3MZFoP
          claim_id: c_AjQpED2RDKKw4cW4adjogi
          source_id: s_V291aeUn77m6Gy7qHaTFNb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V291aeUn77m6Gy7qHaTFNb
            source_type: api_record
            title: 维基数据：王高（Q45663884）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663884
            external_identifier: Q45663884
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_NKuyG26jr4i4ovP3KEspqa
          claim_id: c_AjQpED2RDKKw4cW4adjogi
          source_id: s_KBgBG1N6t4HrAFymwMuyCn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KBgBG1N6t4HrAFymwMuyCn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王高（175510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175510&o=json
            external_identifier: CBDB:175510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.284Z
            metadata_json: null
      object_person:
        id: p_PV1N9AJ49Net787Bq8MWNN
        status: active
        display_name: 王高
        merged_into_person_id: null
    - claim:
        id: c_ueW4NoEQHfFHL7LZaJrpdP
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TyJ2M3ZheRX5T2BF68hTVk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FJzC4kKE63ky2cMBFHbrep
          claim_id: c_ueW4NoEQHfFHL7LZaJrpdP
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_eJGzg22Cd1uPC5XPEtVAog
          claim_id: c_ueW4NoEQHfFHL7LZaJrpdP
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_1xSWGNu31pxQCAe4casxpu
          claim_id: c_ueW4NoEQHfFHL7LZaJrpdP
          source_id: s_w6Eqp9zJRFFLrBraexCCYD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_w6Eqp9zJRFFLrBraexCCYD
            source_type: api_record
            title: 维基数据：王源中（Q16903986）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903986
            external_identifier: Q16903986
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:41.578Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BA%90%E4%B8%AD
        - id: cs_4GeY5FMZzh2EG4dNUgms1t
          claim_id: c_ueW4NoEQHfFHL7LZaJrpdP
          source_id: s_obzovB79XtaLoD1NBN8fF4
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_obzovB79XtaLoD1NBN8fF4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源中（175500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json
            external_identifier: CBDB:175500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:41.738Z
            metadata_json: null
      object_person:
        id: p_TyJ2M3ZheRX5T2BF68hTVk
        status: active
        display_name: 王源中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王润

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王润（卒于801年），唐人物。籍贯咸陽，曾任州別駕。（中国历代人物传记资料库 CBDB 175498） | accepted |
| death.date | 801年 | accepted |
| name.primary | 王润 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kc9Jf7R9CePnQgCjQWHCUx | 王俌 | accepted |
| children | p_ACFBuUPtdA98Dyj7Ydbe9T | 王遇 | accepted |
| children | p_b6xBMX6XWhHbr86WPwDHtV | 王敬元 | accepted |
| children | p_K8fsFyfhgRHWzbUvCAX22q | 王逢元 | accepted |
| children | p_vF3BNQJmoFCZph3f3LWH7k | 王迪 | accepted |
| children | p_cMP48zNTZu9hmEiLSZK3dy | 王适 | accepted |
| children | p_PV1N9AJ49Net787Bq8MWNN | 王高 | accepted |
| children | p_TyJ2M3ZheRX5T2BF68hTVk | 王源中 | accepted |

## 外部来源

- [维基数据：王迪（Q45663715）](https://www.wikidata.org/wiki/Q45663715)
- [维基数据：王逢元（Q45663658）](https://www.wikidata.org/wiki/Q45663658)
- [维基数据：王俌（Q45660547）](https://www.wikidata.org/wiki/Q45660547)
- [维基数据：王高（Q45663884）](https://www.wikidata.org/wiki/Q45663884)
- [维基数据：王敬元（Q45663602）](https://www.wikidata.org/wiki/Q45663602)
- [维基数据：王润（Q45663208）](https://www.wikidata.org/wiki/Q45663208)
- [维基数据：王适（Q45663771）](https://www.wikidata.org/wiki/Q45663771)
- [维基数据：王遇（Q45663263）](https://www.wikidata.org/wiki/Q45663263)
- [维基数据：王源中（Q16903986）](https://www.wikidata.org/wiki/Q16903986)
- [CBDB 中国历代人物传记资料库：王迪（175507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175507&o=json)
- [CBDB 中国历代人物传记资料库：王逢元（175506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175506&o=json)
- [CBDB 中国历代人物传记资料库：王俌（175453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175453&o=json)
- [CBDB 中国历代人物传记资料库：王高（175510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175510&o=json)
- [CBDB 中国历代人物传记资料库：王敬元（175505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175505&o=json)
- [CBDB 中国历代人物传记资料库：王潤（175498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json)
- [CBDB 中国历代人物传记资料库：王適（175508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175508&o=json)
- [CBDB 中国历代人物传记资料库：王遇（175499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175499&o=json)
- [CBDB 中国历代人物传记资料库：王源中（175500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175500&o=json)
