---
schema: wang-person/v1
id: p_NRmDJMD9Wzr4UWs937zuPi
status: active
merged_into: null
display_name: 王恭守
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tvMl3HNo1qO1oU69LEfMa
        subject_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭守，1909年—？，英文名 Kung-Shou Wang，前国民政府外交官，常驻美国。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CWXfr273400X2KslK2Xvt5
          claim_id: c_5tvMl3HNo1qO1oU69LEfMa
          source_id: s_7Ao-x3lP8_QMS9xXYBZCy0
          stance: supports
          locator: 导言
          quotation: 王恭守，1909年—？，英文名 Kung-Shou Wang，前
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_7Ao-x3lP8_QMS9xXYBZCy0
            source_type: website
            title: 中文维基百科：王恭守
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
            external_identifier: Q21017023
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XZ7Q494mfMPYvFU6qdHTYL
        subject_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1909年2月26日
            calendar_note: 维基数据 P569 结构化日期，精度：日
            earliest: 1909-02-26
            latest: 1909-02-26
            precision: day
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iqRsoM8J5bvKaETfcXbPJJ
          claim_id: c_XZ7Q494mfMPYvFU6qdHTYL
          source_id: s_D1QxCC8u2yVo6eBx3Z8XD1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_D1QxCC8u2yVo6eBx3Z8XD1
            source_type: api_record
            title: 维基数据：王恭守（Q21017023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21017023
            external_identifier: Q21017023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FRgBkRSwiC5yEkGnAu9oAK
        subject_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭守
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eTtdFPJtaZrPU7e6afnM5Q
          claim_id: c_FRgBkRSwiC5yEkGnAu9oAK
          source_id: s_D1QxCC8u2yVo6eBx3Z8XD1
          stance: supports
          locator: Q21017023
          quotation: null
          interpretation_note: null
          source:
            id: s_D1QxCC8u2yVo6eBx3Z8XD1
            source_type: api_record
            title: 维基数据：王恭守（Q21017023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21017023
            external_identifier: Q21017023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5xzhCuNxhgJaZ7n2oNJK72
        subject_person_id: p_J1kC3vsL3hsJDeuTGs4QkU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bD1F4PjXgxLbtQNz6i5ZcH
          claim_id: c_5xzhCuNxhgJaZ7n2oNJK72
          source_id: s_D1QxCC8u2yVo6eBx3Z8XD1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D1QxCC8u2yVo6eBx3Z8XD1
            source_type: api_record
            title: 维基数据：王恭守（Q21017023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21017023
            external_identifier: Q21017023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
        - id: cs_dxYteyw3zY6JK8JMTnKi2Y
          claim_id: c_5xzhCuNxhgJaZ7n2oNJK72
          source_id: s_NP4KYUMqwkPA5s1QLVG7Gf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_NP4KYUMqwkPA5s1QLVG7Gf
            source_type: api_record
            title: 维基数据：王正庸（Q112683524）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683524
            external_identifier: Q112683524
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person:
        id: p_J1kC3vsL3hsJDeuTGs4QkU
        status: active
        display_name: 王正庸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PebURc7rLw7ECg3nzzgRjm
        subject_person_id: p_bxJELQErrsq2HNLztgJJvw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NRmDJMD9Wzr4UWs937zuPi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5gfCaDh1YsM4rD3KmNYPkm
          claim_id: c_PebURc7rLw7ECg3nzzgRjm
          source_id: s_D1QxCC8u2yVo6eBx3Z8XD1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_D1QxCC8u2yVo6eBx3Z8XD1
            source_type: api_record
            title: 维基数据：王恭守（Q21017023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21017023
            external_identifier: Q21017023
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88
        - id: cs_g5eL3xyno51YwLxiwmF4n2
          claim_id: c_PebURc7rLw7ECg3nzzgRjm
          source_id: s_WJNi35Kv1DAAHtBqPCyD1S
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WJNi35Kv1DAAHtBqPCyD1S
            source_type: api_record
            title: 维基数据：周綠霞（Q112683577）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112683577
            external_identifier: Q112683577
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:20.289Z
            metadata_json: null
      object_person:
        id: p_bxJELQErrsq2HNLztgJJvw
        status: active
        display_name: 周綠霞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王恭守

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恭守，1909年—？，英文名 Kung-Shou Wang，前国民政府外交官，常驻美国。 | accepted |
| birth.date | 1909年2月26日 | accepted |
| name.primary | 王恭守 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J1kC3vsL3hsJDeuTGs4QkU | 王正庸 | accepted |
| spouses | p_bxJELQErrsq2HNLztgJJvw | 周綠霞 | accepted |

## 外部来源

- [维基数据：王恭守（Q21017023）](https://www.wikidata.org/wiki/Q21017023)
- [维基数据：王正庸（Q112683524）](https://www.wikidata.org/wiki/Q112683524)
- [维基数据：周綠霞（Q112683577）](https://www.wikidata.org/wiki/Q112683577)
- [中文维基百科：王恭守](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%AD%E5%AE%88)
