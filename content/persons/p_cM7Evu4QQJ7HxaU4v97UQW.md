---
schema: wang-person/v1
id: p_cM7Evu4QQJ7HxaU4v97UQW
status: active
merged_into: null
display_name: 王懿荣
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ftnwcBy5uiDCTA3ySSsxa_
        subject_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿荣，史料所见人物。本项目依据《王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_L7ajKyqyjWPbhyBQMupch9
          claim_id: c_ftnwcBy5uiDCTA3ySSsxa_
          source_id: s_zCfQALHyD5HG8Sar6fZ5FG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zCfQALHyD5HG8Sar6fZ5FG
            source_type: website
            title: 中文维基百科：王懿荣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%BF%E8%8D%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.150Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_52TybhKy9gD6uzUFjuD4Qj
        subject_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿荣
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_41FmaXKmA7inP4mN2R3rDh
          claim_id: c_52TybhKy9gD6uzUFjuD4Qj
          source_id: s_zCfQALHyD5HG8Sar6fZ5FG
          stance: supports
          locator: Q716194
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n9BRNMFRQrciQq8CvMBsPe
        subject_person_id: p_BqkTCMXwcG3871wc1aZK5X
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6ZMn5D2UV2uvMTNHAQYqgc
          claim_id: c_n9BRNMFRQrciQq8CvMBsPe
          source_id: s_gM89RbUmhZQJH58LQM4C7F
          stance: supports
          locator: 王懿荣的生平
          quotation: 为公考资政公讳祖源长子。
          interpretation_note: null
          source:
            id: s_gM89RbUmhZQJH58LQM4C7F
            source_type: website
            title: 泰安市文学艺术界联合会：甲骨文之父王懿荣及家世考略
            creator: 孟鸿声
            publisher: 泰安市文学艺术界联合会
            published_at_text: null
            canonical_url: https://wenlian.taian.gov.cn/art/2019/12/10/art_69765_8169980.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:05.772Z
            metadata_json: null
      object_person:
        id: p_BqkTCMXwcG3871wc1aZK5X
        status: active
        display_name: 王祖源
        merged_into_person_id: null
  children:
    - claim:
        id: c_Kuyfj7qEHD19NNRTk5Lx77
        subject_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_iTCTJkheS49AizcGNFNmoz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w9TP7mB4cdZ8gD5vNE9M13
          claim_id: c_Kuyfj7qEHD19NNRTk5Lx77
          source_id: s_zCfQALHyD5HG8Sar6fZ5FG
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王懿荣之子近代作家王崇焕（又王汉章）
          interpretation_note: null
          source:
            id: s_zCfQALHyD5HG8Sar6fZ5FG
            source_type: website
            title: 中文维基百科：王懿荣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%BF%E8%8D%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.150Z
            metadata_json: null
        - id: cs_Zc1ftUETZW5WAZUR6uX6De
          claim_id: c_Kuyfj7qEHD19NNRTk5Lx77
          source_id: s_gM89RbUmhZQJH58LQM4C7F
          stance: supports
          locator: 甲骨发现与金石研究
          quotation: 王懿荣之子王崇焕《清王文敏公年谱》。
          interpretation_note: null
          source:
            id: s_gM89RbUmhZQJH58LQM4C7F
            source_type: website
            title: 泰安市文学艺术界联合会：甲骨文之父王懿荣及家世考略
            creator: 孟鸿声
            publisher: 泰安市文学艺术界联合会
            published_at_text: null
            canonical_url: https://wenlian.taian.gov.cn/art/2019/12/10/art_69765_8169980.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:05.772Z
            metadata_json: null
      object_person:
        id: p_iTCTJkheS49AizcGNFNmoz
        status: active
        display_name: 王崇焕
        merged_into_person_id: null
    - claim:
        id: c_ohzFSvAN1RyjSUFDAgpBm5
        subject_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_1yWHm3K2AUvqFvD4jN97Aj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DCZfm2FJ4iUAGgnM4RgcSt
          claim_id: c_ohzFSvAN1RyjSUFDAgpBm5
          source_id: s_YCiogxpUEMJrcECuzDNF24
          stance: supports
          locator: 家庭
          quotation: 次子王崇烈，字翰辅、汉甫，生于1870年。
          interpretation_note: null
          source:
            id: s_YCiogxpUEMJrcECuzDNF24
            source_type: website
            title: 人民网：甲骨文之父王懿荣
            creator: null
            publisher: 人民网
            published_at_text: null
            canonical_url: https://culture.people.com.cn/n/2014/1102/c22219-25958035.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:58.770Z
            metadata_json: null
      object_person:
        id: p_1yWHm3K2AUvqFvD4jN97Aj
        status: active
        display_name: 王崇烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AQpGJNQ1x8mrDhHMXhu2A2
        subject_person_id: p_2GtSgGuXFEQG1GF9MBZwyj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6KA6PbTFvMN9Zgm4Uuxm11
          claim_id: c_AQpGJNQ1x8mrDhHMXhu2A2
          source_id: s_af9sNti4THHVbgxUGisAP8
          stance: supports
          locator: 家世段
          quotation: 明初他的始祖王忠（官至登宁盐课大使），居住福山以来。
          interpretation_note: null
          source:
            id: s_af9sNti4THHVbgxUGisAP8
            source_type: website
            title: 水母网：王懿荣家世
            creator: null
            publisher: 水母网
            published_at_text: null
            canonical_url: https://u.shm.com.cn/2017-09/07/content_4650012.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.142Z
            metadata_json: null
      object_person:
        id: p_2GtSgGuXFEQG1GF9MBZwyj
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懿荣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懿荣，史料所见人物。本项目依据《王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王懿荣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BqkTCMXwcG3871wc1aZK5X | 王祖源 | accepted |
| children | p_iTCTJkheS49AizcGNFNmoz | 王崇焕 | accepted |
| children | p_1yWHm3K2AUvqFvD4jN97Aj | 王崇烈 | accepted |
| ancestors | p_2GtSgGuXFEQG1GF9MBZwyj | 王忠 | accepted |

## 外部来源

- [人民网：甲骨文之父王懿荣](https://culture.people.com.cn/n/2014/1102/c22219-25958035.html)
- [水母网：王懿荣家世](https://u.shm.com.cn/2017-09/07/content_4650012.html)
- [泰安市文学艺术界联合会：甲骨文之父王懿荣及家世考略](https://wenlian.taian.gov.cn/art/2019/12/10/art_69765_8169980.html)
- [中文维基百科：王懿荣](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%BF%E8%8D%A3)
