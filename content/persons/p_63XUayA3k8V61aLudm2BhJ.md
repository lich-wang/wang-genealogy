---
schema: wang-person/v1
id: p_63XUayA3k8V61aLudm2BhJ
status: active
merged_into: null
display_name: 王观
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvQ2guz9xTf5TDkeog4Y5U
        subject_person_id: p_63XUayA3k8V61aLudm2BhJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王观（?—?），南朝梁大臣。琅琊王氏王慈的儿子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_UJ0NqDl4jsi9K0xmgiEFFJ
          claim_id: c_EvQ2guz9xTf5TDkeog4Y5U
          source_id: s_4IwT6TBrEM7NKHeD38oUTX
          stance: supports
          locator: 导言
          quotation: 王观（?—?），南朝梁大臣。琅琊王氏王慈的儿子。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_4IwT6TBrEM7NKHeD38oUTX
            source_type: website
            title: 中文维基百科：王观 (南齐)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90)
            external_identifier: Q38975364
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_agkcDCcA7USWjPMoDxApHp
        subject_person_id: p_63XUayA3k8V61aLudm2BhJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王观
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ww4e6QBuUYcWYdNkaVHrfQ
          claim_id: c_agkcDCcA7USWjPMoDxApHp
          source_id: s_JBa1fDo8LnFWQ5vpScodxo
          stance: supports
          locator: Q38975364
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_4KL28H32dmZ89RjQ98aCSY
        status: active
        display_name: 王慈
        merged_into_person_id: null
  children:
    - claim:
        id: c_cNXCEN3PakiYPkH7cKUcry
        subject_person_id: p_63XUayA3k8V61aLudm2BhJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_cKeZwSK6fJCSwErJpD8hQG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HUiU7ytKxY4ZdR3QCZPQEs
          claim_id: c_cNXCEN3PakiYPkH7cKUcry
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王观 → 王祁
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
        - id: cs_fKT79tPMx68ZYyWj58Hhd6
          claim_id: c_cNXCEN3PakiYPkH7cKUcry
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王观 → 王祁
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
        id: p_cKeZwSK6fJCSwErJpD8hQG
        status: active
        display_name: 王祁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UBAMtSwyCPG9LBjdn32dDU
        subject_person_id: p_63XUayA3k8V61aLudm2BhJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6k1m3bPxAPa9Ds41d6MHSe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UVvBgDbDykzVADC39T9LuA
          claim_id: c_UBAMtSwyCPG9LBjdn32dDU
          source_id: s_7DpmFvgEKc9Q3oXBMVb7hF
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 齐武帝萧赜之女吴县公主嫁给了王观
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
      object_person:
        id: p_6k1m3bPxAPa9Ds41d6MHSe
        status: active
        display_name: 吴县公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王观

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王观（?—?），南朝梁大臣。琅琊王氏王慈的儿子。 | accepted |
| name.primary | 王观 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4KL28H32dmZ89RjQ98aCSY | 王慈 | accepted |
| children | p_cKeZwSK6fJCSwErJpD8hQG | 王祁 | accepted |
| spouses | p_6k1m3bPxAPa9Ds41d6MHSe | 吴县公主 | accepted |

## 外部来源

- [维基数据：王慈（Q11573074）](https://www.wikidata.org/wiki/Q11573074)
- [维基数据：王观（Q38975364）](https://www.wikidata.org/wiki/Q38975364)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王观 (南齐)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A7%82_(%E5%8D%97%E9%BD%90))
