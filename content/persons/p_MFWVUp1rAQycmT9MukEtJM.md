---
schema: wang-person/v1
id: p_MFWVUp1rAQycmT9MukEtJM
status: active
merged_into: null
display_name: 王文雄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n_u1T7n3xV14ZAizGMYqFt
        subject_person_id: p_MFWVUp1rAQycmT9MukEtJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雄（1749年—1800年），字叔師，賜號法佛禮巴圖魯，貴州玉屏人，清朝軍事將領。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AJb_YgPpGG86qHTI7kknmu
          claim_id: c_n_u1T7n3xV14ZAizGMYqFt
          source_id: s_ELLGwwt89GflYfTl7AOUC9
          stance: supports
          locator: 导言
          quotation: 王文雄（1749年—1800年），字叔師，賜號法佛禮巴圖魯，貴州
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_ELLGwwt89GflYfTl7AOUC9
            source_type: website
            title: 中文维基百科：王文雄
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%87%E9%9B%84
            external_identifier: Q15941763
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CNSPyeyiKHCkkV9Pg5Y6Pt
        subject_person_id: p_MFWVUp1rAQycmT9MukEtJM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1749-01-01
            latest: 1749-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AAqkGhmxDwskWrWGdtc3RX
          claim_id: c_CNSPyeyiKHCkkV9Pg5Y6Pt
          source_id: s_BcAriB7LY7pfFkUY2GiPAY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAriB7LY7pfFkUY2GiPAY
            source_type: api_record
            title: 维基数据：王文雄（Q15941763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941763
            external_identifier: Q15941763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_tLome6e8fZQMhbMvHEVn4u
        subject_person_id: p_MFWVUp1rAQycmT9MukEtJM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1800-01-01
            latest: 1800-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AbG495m82o5kE688zCrEZu
          claim_id: c_tLome6e8fZQMhbMvHEVn4u
          source_id: s_BcAriB7LY7pfFkUY2GiPAY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAriB7LY7pfFkUY2GiPAY
            source_type: api_record
            title: 维基数据：王文雄（Q15941763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941763
            external_identifier: Q15941763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YtaSZwS4CYDxg37uWRj3KM
        subject_person_id: p_MFWVUp1rAQycmT9MukEtJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jTHSmrbCJM3SMYBm4cUBuJ
          claim_id: c_YtaSZwS4CYDxg37uWRj3KM
          source_id: s_BcAriB7LY7pfFkUY2GiPAY
          stance: supports
          locator: Q15941763
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAriB7LY7pfFkUY2GiPAY
            source_type: api_record
            title: 维基数据：王文雄（Q15941763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941763
            external_identifier: Q15941763
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.064Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文雄（1749年—1800年），字叔師，賜號法佛禮巴圖魯，貴州玉屏人，清朝軍事將領。 | accepted |
| birth.date | 1749年 | accepted |
| death.date | 1800年 | accepted |
| name.primary | 王文雄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王文雄（Q15941763）](https://www.wikidata.org/wiki/Q15941763)
- [中文维基百科：王文雄](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%87%E9%9B%84)
