---
schema: wang-person/v1
id: p_4KL28H32dmZ89RjQ98aCSY
status: active
merged_into: null
display_name: 王慈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pRbl5mgJUaleH0MPjePhNF
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈（451年—491年），史料所见人物。本项目依据《王慈》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UhyD-s1c5ZFDJICRveYomr
          claim_id: c_pRbl5mgJUaleH0MPjePhNF
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: Q11573074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Yo9qmZbVo8CUMo7qXx9Ma
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 451年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0451-01-01
            latest: 0451-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hsx9WAw1aFm13Ld478guKi
          claim_id: c_9Yo9qmZbVo8CUMo7qXx9Ma
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tGrckLf577bAmHdknM3tF8
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 491年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0491-01-01
            latest: 0491-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_547etC1CnzRkJ1cJLJfXaV
          claim_id: c_tGrckLf577bAmHdknM3tF8
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tcdtYbSTY7k8RQoi2Khe9J
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_axAqnp8bbzwPdQgQaz5Qj3
          claim_id: c_tcdtYbSTY7k8RQoi2Khe9J
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: Q11573074
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FCh3rAHh2BLCvMPq8HMJVx
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4KL28H32dmZ89RjQ98aCSY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VaYb9U7VmpZd5DZC4YL34g
          claim_id: c_FCh3rAHh2BLCvMPq8HMJVx
          source_id: s_bvGmtcxeGmhT7vE7oBmwbu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bvGmtcxeGmhT7vE7oBmwbu
            source_type: api_record
            title: 维基数据：王僧虔（Q15942059）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942059
            external_identifier: Q15942059
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%99%94
        - id: cs_QyFWnVJkazTsikU7tkkjB9
          claim_id: c_FCh3rAHh2BLCvMPq8HMJVx
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
      object_person:
        id: p_ApPtvCCNtKJL2K4yt7EBWn
        status: active
        display_name: 王僧虔
        merged_into_person_id: null
  children:
    - claim:
        id: c_nVk92m2tK2s7RFN2F94VJ6
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_srksaSoGMPMi1rSqTFdenR
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
        - id: cs_TanQtVX1Z9Mg4CgVHFFTq3
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
        - id: cs_paRc94GeSJQVMV36rBb9NU
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_4P2AtYDkeHXyhJFrFSbaRM
          stance: supports
          locator: 条文：之子/之女
          quotation: 王韶明（{{bd|5世紀||？||}}），琅邪郡临沂县（今山东省临沂市）人，太常王慈之女，南齐海陵王萧昭文皇后
          interpretation_note: null
          source:
            id: s_4P2AtYDkeHXyhJFrFSbaRM
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:08.376Z
            metadata_json: null
        - id: cs_KTTRBF3CjQSrHVKDQky45p
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王韶明
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_3cfjHAoAPprMQ3TtmJ9hX9
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王韶明
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_KsZ6rBV4XMBz3E1R4hb7YM
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_R7L8gdqTS9cXj2XUrWMvoC
          stance: supports
          locator: 条文：之子/之女
          quotation: 王韶明，琅邪郡临沂县（今山东省临沂市）人，太常王慈之女，南齐海陵王萧昭文皇后
          interpretation_note: null
          source:
            id: s_R7L8gdqTS9cXj2XUrWMvoC
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:06.182Z
            metadata_json: null
      object_person:
        id: p_Lg5XqeMUBiSajHTPH9pFan
        status: active
        display_name: 王韶明
        merged_into_person_id: null
    - claim:
        id: c_4GQsh9AeW8L3KJt3dZ3ELN
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_63XUayA3k8V61aLudm2BhJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xHN7aaCBaNRJz4t2jdJ4BZ
          claim_id: c_4GQsh9AeW8L3KJt3dZ3ELN
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
        - id: cs_pRCSQK2H9Mq2o1eB7h8SHk
          claim_id: c_4GQsh9AeW8L3KJt3dZ3ELN
          source_id: s_JBa1fDo8LnFWQ5vpScodxo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JBa1fDo8LnFWQ5vpScodxo
            source_type: api_record
            title: 维基数据：王观（Q38975364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975364
            external_identifier: Q38975364
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90)
        - id: cs_iG59UTGofvbcpL5aRGMZC9
          claim_id: c_4GQsh9AeW8L3KJt3dZ3ELN
          source_id: s_7DpmFvgEKc9Q3oXBMVb7hF
          stance: supports
          locator: 条文：之子/之女
          quotation: 琅琊王氏王慈的儿子
          interpretation_note: null
          source:
            id: s_7DpmFvgEKc9Q3oXBMVb7hF
            source_type: website
            title: 中文维基百科：王观 (南齐)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.902Z
            metadata_json: null
        - id: cs_WQKsfbQULCGH6WKeFaHuGF
          claim_id: c_4GQsh9AeW8L3KJt3dZ3ELN
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王观
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_K6mQJN1QirYNahgv5Z6v76
          claim_id: c_4GQsh9AeW8L3KJt3dZ3ELN
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王观
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_63XUayA3k8V61aLudm2BhJ
        status: active
        display_name: 王观
        merged_into_person_id: null
    - claim:
        id: c_RPaazfB8Swo8ubshg8MN3z
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4rFF69vBDJpk7RvhXnZhL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_X8iQ71cGK6gAb6giPVD7MG
          claim_id: c_RPaazfB8Swo8ubshg8MN3z
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
        - id: cs_r6sC7Kz6YS3p8CBrh8aXTo
          claim_id: c_RPaazfB8Swo8ubshg8MN3z
          source_id: s_qfv8h3EskzUJfpU4nrKMUv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qfv8h3EskzUJfpU4nrKMUv
            source_type: api_record
            title: 维基数据：王泰（Q11573156）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573156
            external_identifier: Q11573156
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:58.732Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B3%B0_(%E5%8D%97%E6%9C%9D)
        - id: cs_23dzKYWA3TCX1gPLU72HKQ
          claim_id: c_RPaazfB8Swo8ubshg8MN3z
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王泰
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_JSHPMmm52H6MrBXG3ABQDS
          claim_id: c_RPaazfB8Swo8ubshg8MN3z
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王泰
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_Q4rFF69vBDJpk7RvhXnZhL
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慈（451年—491年），史料所见人物。本项目依据《王慈》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 451年 | accepted |
| death.date | 491年 | accepted |
| name.primary | 王慈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |
| children | p_Lg5XqeMUBiSajHTPH9pFan | 王韶明 | accepted |
| children | p_63XUayA3k8V61aLudm2BhJ | 王观 | accepted |
| children | p_Q4rFF69vBDJpk7RvhXnZhL | 王泰 | accepted |

## 外部来源

- [维基数据：王慈（Q11573074）](https://www.wikidata.org/wiki/Q11573074)
- [维基数据：王观（Q38975364）](https://www.wikidata.org/wiki/Q38975364)
- [维基数据：王僧虔（Q15942059）](https://www.wikidata.org/wiki/Q15942059)
- [维基数据：王韶明（Q4392491）](https://www.wikidata.org/wiki/Q4392491)
- [维基数据：王泰（Q11573156）](https://www.wikidata.org/wiki/Q11573156)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王观 (南齐)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90))
- [中文维基百科：王韶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E)
