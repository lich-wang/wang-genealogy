---
schema: wang-person/v1
id: p_tHbVGq9sycrykvp4emuxp6
status: active
merged_into: null
display_name: 王珉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LRCJPRAEmzp4CkGyJ7fgGi
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉（生于351年），东晋大臣。维基数据以独立条目 Q15925683 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_K9FBQoaTesZ69s9M2M1c8c
          claim_id: c_LRCJPRAEmzp4CkGyJ7fgGi
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: Q15925683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_Bgg1PQFKhmwF8dZVqQKj43
            source_type: api_record
            title: 维基数据：王珉（Q15925683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925683
            external_identifier: Q15925683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:54.326Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%89_(%E6%9D%B1%E6%99%89)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RxMsc6V71uLJn9RzCxv5Ad
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 351年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0351-01-01
            latest: 0351-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtT3LD1v4yNhjUYZJCQEzH
          claim_id: c_RxMsc6V71uLJn9RzCxv5Ad
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Bgg1PQFKhmwF8dZVqQKj43
            source_type: api_record
            title: 维基数据：王珉（Q15925683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925683
            external_identifier: Q15925683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:54.326Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%89_(%E6%9D%B1%E6%99%89)
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_TBjMJB4s1M7sjCJVQAnp79
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 东晋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nf5xLoXg4d8KzgHPaiPEuh
          claim_id: c_TBjMJB4s1M7sjCJVQAnp79
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_Bgg1PQFKhmwF8dZVqQKj43
            source_type: api_record
            title: 维基数据：王珉（Q15925683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925683
            external_identifier: Q15925683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:54.326Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%89_(%E6%9D%B1%E6%99%89)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P6NU1bqjP3by69ZB3oft6p
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SeeeRAwSHyQN1u3rhTnFjA
          claim_id: c_P6NU1bqjP3by69ZB3oft6p
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: Q15925683
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uWJuLBeMkVK71gSSQteLgF
        subject_person_id: p_8QRkdSq3az8C44oyD2PR6v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tHbVGq9sycrykvp4emuxp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bcY4TU1pJAX6CuH5bHvnf9
          claim_id: c_uWJuLBeMkVK71gSSQteLgF
          source_id: s_cEaTt9MJJL6TnPNmyJ8rAC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEaTt9MJJL6TnPNmyJ8rAC
            source_type: api_record
            title: 維基數據：王洽（Q15915744）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915744
            external_identifier: Q15915744
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:03.233Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B4%BD_(%E6%9D%B1%E6%99%89)
        - id: cs_bCFnb9uFBYDUk8LpxMXRcQ
          claim_id: c_uWJuLBeMkVK71gSSQteLgF
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bgg1PQFKhmwF8dZVqQKj43
            source_type: api_record
            title: 维基数据：王珉（Q15925683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925683
            external_identifier: Q15925683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:54.326Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%89_(%E6%9D%B1%E6%99%89)
        - id: cs_pF7q49SQubr9hMZVBZ7jfC
          claim_id: c_uWJuLBeMkVK71gSSQteLgF
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王洽 → 王珉
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
        - id: cs_HKLdpCeKCguacSmbA5tCPQ
          claim_id: c_uWJuLBeMkVK71gSSQteLgF
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王洽 → 王珉
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
        - id: cs_gyQPdDpGHMJC98WF39gbiq
          claim_id: c_uWJuLBeMkVK71gSSQteLgF
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：珣、珉。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_8QRkdSq3az8C44oyD2PR6v
        status: active
        display_name: 王洽
        merged_into_person_id: null
  children:
    - claim:
        id: c_rFEdTgx31KJCM1Xu3Cdewv
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hCx9fcxQAYp3dsFzujCq7B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2Dm2zvXPAkvURovmKHMGEA
          claim_id: c_rFEdTgx31KJCM1Xu3Cdewv
          source_id: s_Bgg1PQFKhmwF8dZVqQKj43
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bgg1PQFKhmwF8dZVqQKj43
            source_type: api_record
            title: 维基数据：王珉（Q15925683）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15925683
            external_identifier: Q15925683
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:54.326Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%89_(%E6%9D%B1%E6%99%89)
        - id: cs_FKcuKrKKLTK9pbxjjqHPSA
          claim_id: c_rFEdTgx31KJCM1Xu3Cdewv
          source_id: s_XnuMa6Km3NG4hBxMMKPCbG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XnuMa6Km3NG4hBxMMKPCbG
            source_type: api_record
            title: 维基数据：王練（Q67197249）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q67197249
            external_identifier: Q67197249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4
        - id: cs_vd3qbFXNrFcDdnr8zskiu2
          claim_id: c_rFEdTgx31KJCM1Xu3Cdewv
          source_id: s_FVwgYj2eP5mUtAJiXQKynM
          stance: supports
          locator: 条文：之子/之女
          quotation: 王練（{{bd|?||?||}}），字洪明，琅琊郡临沂县（今山东临沂）人，中国南北朝南朝宋人物，东晋名相王导曾孙，中书令王珉之子
          interpretation_note: null
          source:
            id: s_FVwgYj2eP5mUtAJiXQKynM
            source_type: website
            title: 中文维基百科：王練
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person:
        id: p_hCx9fcxQAYp3dsFzujCq7B
        status: active
        display_name: 王練
        merged_into_person_id: null
    - claim:
        id: c_CxpW37UCQXqCDm693hCDDD
        subject_person_id: p_tHbVGq9sycrykvp4emuxp6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_x4EaSZo5qkZiT5sV8dssfE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTG3H35KM1zNzGDk3Av63J
          claim_id: c_CxpW37UCQXqCDm693hCDDD
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珉 → 王朗
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
        - id: cs_NDFjBSi8onzQQaMLDc61kK
          claim_id: c_CxpW37UCQXqCDm693hCDDD
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王珉 → 王朗
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
        id: p_x4EaSZo5qkZiT5sV8dssfE
        status: active
        display_name: 王朗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珉（生于351年），东晋大臣。维基数据以独立条目 Q15925683 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 351年 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王珉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8QRkdSq3az8C44oyD2PR6v | 王洽 | accepted |
| children | p_hCx9fcxQAYp3dsFzujCq7B | 王練 | accepted |
| children | p_x4EaSZo5qkZiT5sV8dssfE | 王朗 | accepted |

## 外部来源

- [维基数据：王練（Q67197249）](https://www.wikidata.org/wiki/Q67197249)
- [维基数据：王珉（Q15925683）](https://www.wikidata.org/wiki/Q15925683)
- [維基數據：王洽（Q15915744）](https://www.wikidata.org/wiki/Q15915744)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王練](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B7%B4)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
