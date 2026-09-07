---
schema: wang-person/v1
id: p_Q4rFF69vBDJpk7RvhXnZhL
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NBb5NGUrHFUGFv3osKzMB
        subject_person_id: p_Q4rFF69vBDJpk7RvhXnZhL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，史料所见人物。本项目依据《王泰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_47qAbLQA6ive31ZsLQ3f8W
          claim_id: c_6NBb5NGUrHFUGFv3osKzMB
          source_id: s_qfv8h3EskzUJfpU4nrKMUv
          stance: supports
          locator: Q11573156
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bbu2HEdMCgD5bvGGbW83Hz
        subject_person_id: p_Q4rFF69vBDJpk7RvhXnZhL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pjZDU9x2E6FuboVmtyUaCv
          claim_id: c_Bbu2HEdMCgD5bvGGbW83Hz
          source_id: s_qfv8h3EskzUJfpU4nrKMUv
          stance: supports
          locator: Q11573156
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_4KL28H32dmZ89RjQ98aCSY
        status: active
        display_name: 王慈
        merged_into_person_id: null
  children:
    - claim:
        id: c_H3vD6Y8h4riH3UfvRr75du
        subject_person_id: p_Q4rFF69vBDJpk7RvhXnZhL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fF4jZHkAtP4j6GLjuTvHYb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GKhGJjFZpi5ks9cHW81cRP
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_qfv8h3EskzUJfpU4nrKMUv
          stance: supports
          locator: P40（子女）
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
        - id: cs_H3x2upmdAsGg9jAvshPrsS
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_NRZVn9Hm8HW3QDdwR3Rb3P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NRZVn9Hm8HW3QDdwR3Rb3P
            source_type: api_record
            title: 维基数据：王廓（Q55707941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55707941
            external_identifier: Q55707941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:08.353Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%93_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_CBU8LeH5QsrPcETxqkHJuu
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_GNdgVkwB1kYH4hBZKzZHSQ
          stance: supports
          locator: 条文：之子/之女
          quotation: 王廓（{{bd|?||?||}}），出自琅琊王氏，中国南北朝南梁、南陈政治人物，王泰之子
          interpretation_note: null
          source:
            id: s_GNdgVkwB1kYH4hBZKzZHSQ
            source_type: website
            title: 中文维基百科：王廓 (南北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%93_(%E5%8D%97%E5%8C%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:17.416Z
            metadata_json: null
        - id: cs_2Q8K65hiv2MQjRNSSsQ1UW
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王泰 → 王廓
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
        - id: cs_GJg7ghfqf7A8RggeKFNibS
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王泰 → 王廓
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
        - id: cs_fXHZZG529jQYAQ95ehMpEa
          claim_id: c_H3vD6Y8h4riH3UfvRr75du
          source_id: s_U554YBS34GM7zNPJBApPwR
          stance: supports
          locator: 条文：之子/之女
          quotation: 王廓，出自琅琊王氏，中国南北朝南梁、南陈政治人物，王泰之子
          interpretation_note: null
          source:
            id: s_U554YBS34GM7zNPJBApPwR
            source_type: website
            title: 中文维基百科：王廓 (南北朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%93_(%E5%8D%97%E5%8C%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:16.436Z
            metadata_json: null
      object_person:
        id: p_fF4jZHkAtP4j6GLjuTvHYb
        status: active
        display_name: 王廓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王泰，史料所见人物。本项目依据《王泰》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4KL28H32dmZ89RjQ98aCSY | 王慈 | accepted |
| children | p_fF4jZHkAtP4j6GLjuTvHYb | 王廓 | accepted |

## 外部来源

- [维基数据：王慈（Q11573074）](https://www.wikidata.org/wiki/Q11573074)
- [维基数据：王廓（Q55707941）](https://www.wikidata.org/wiki/Q55707941)
- [维基数据：王泰（Q11573156）](https://www.wikidata.org/wiki/Q11573156)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王廓 (南北朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%93_(%E5%8D%97%E5%8C%97%E6%9C%9D))
