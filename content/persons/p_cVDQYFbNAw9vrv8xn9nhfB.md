---
schema: wang-person/v1
id: p_cVDQYFbNAw9vrv8xn9nhfB
status: active
merged_into: null
display_name: 王彬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CrjGoHa7dQWHAwPeFDkXFG
        subject_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬（?—?），字思文，琅邪临沂人，南朝书法家。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_EJ2CytBJpO4wQwMm0uGuDX
          claim_id: c_CrjGoHa7dQWHAwPeFDkXFG
          source_id: s_2IJEmlj7yEluZ1NYUP2bNU
          stance: supports
          locator: 导言
          quotation: 王彬（?—?），字思文，琅邪临沂人，南朝书法家。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_2IJEmlj7yEluZ1NYUP2bNU
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: Q10414073
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMyM1DBRfG5Giunxz71MeW
        subject_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2VMAwkvWLgo9MCgVugV4rJ
          claim_id: c_DMyM1DBRfG5Giunxz71MeW
          source_id: s_G2TuyKwTTZ1hhdUJk9S5nD
          stance: supports
          locator: Q10414073
          quotation: null
          interpretation_note: null
          source:
            id: s_G2TuyKwTTZ1hhdUJk9S5nD
            source_type: api_record
            title: 维基数据：王彬（Q10414073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414073
            external_identifier: Q10414073
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3jkubSziAHZaxG6LRcXHsV
        subject_person_id: p_ApPtvCCNtKJL2K4yt7EBWn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ysBtNQExAcV6iGUXNN8dJj
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
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
        - id: cs_8pNMa3GWPXoyUtQxQ551KL
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
          source_id: s_G2TuyKwTTZ1hhdUJk9S5nD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G2TuyKwTTZ1hhdUJk9S5nD
            source_type: api_record
            title: 维基数据：王彬（Q10414073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414073
            external_identifier: Q10414073
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:42.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
        - id: cs_F8en3mmV6uBry6LPW2rmiu
          claim_id: c_3jkubSziAHZaxG6LRcXHsV
          source_id: s_yUzZ6qvKKqmYu4ysTwPvw2
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王僧虔之子
          interpretation_note: null
          source:
            id: s_yUzZ6qvKKqmYu4ysTwPvw2
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:37.187Z
            metadata_json: null
      object_person:
        id: p_ApPtvCCNtKJL2K4yt7EBWn
        status: active
        display_name: 王僧虔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ePNNVJTaKXEP4SAU8j73ZJ
        subject_person_id: p_QHZ7QEdYaFJrqsvUfLXThS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_49YuzN2ixFuPHA8GwN2wWE
          claim_id: c_ePNNVJTaKXEP4SAU8j73ZJ
          source_id: s_MeteaC5rZduV3qSYs6d9uQ
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王彬娶齐高帝女临海公主
          interpretation_note: null
          source:
            id: s_MeteaC5rZduV3qSYs6d9uQ
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.901Z
            metadata_json: null
      object_person:
        id: p_QHZ7QEdYaFJrqsvUfLXThS
        status: active
        display_name: 临海公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彬（?—?），字思文，琅邪临沂人，南朝书法家。 | accepted |
| name.primary | 王彬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ApPtvCCNtKJL2K4yt7EBWn | 王僧虔 | accepted |
| spouses | p_QHZ7QEdYaFJrqsvUfLXThS | 临海公主 | accepted |

## 外部来源

- [维基数据：王彬（Q10414073）](https://www.wikidata.org/wiki/Q10414073)
- [维基数据：王僧虔（Q15942059）](https://www.wikidata.org/wiki/Q15942059)
- [中文维基百科：王彬 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D))
