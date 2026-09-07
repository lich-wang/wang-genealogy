---
schema: wang-person/v1
id: p_d5wrqNKm2UtzkniGD7eLTC
status: active
merged_into: null
display_name: 王晏平
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ae1f5mHhHM6wuPTD2vaw4T
        subject_person_id: p_d5wrqNKm2UtzkniGD7eLTC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏平（?—?），是唐朝軍事人物。 王智兴之長子。早年隨父讨李同捷有功，授检校右散骑常侍、灵州大都督府长史。累官擔任灵武节度使。开成三年，因自盗贜七千余缗，贬康州（今廣東德慶）司户参军。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FmSJh3I7pYLPal2MaJYeXt
          claim_id: c_ae1f5mHhHM6wuPTD2vaw4T
          source_id: s_Yu6sGn9DfHABbNpYJVNVVH
          stance: supports
          locator: 导言
          quotation: 王晏平（?—?），是唐朝軍事人物。 王智兴之長子。早年隨父讨李同
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_Yu6sGn9DfHABbNpYJVNVVH
            source_type: website
            title: 中文维基百科：王晏平
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F%E5%B9%B3
            external_identifier: Q15901012
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MLKK1K9wa6sH3yqKNebqbf
        subject_person_id: p_d5wrqNKm2UtzkniGD7eLTC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0854-01-01
            latest: 0854-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5eRMQUXpR8DTpF1tpMht2E
          claim_id: c_MLKK1K9wa6sH3yqKNebqbf
          source_id: s_ro1QX8Adonbc7TpcZqY3Cc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ro1QX8Adonbc7TpcZqY3Cc
            source_type: api_record
            title: 维基数据：王晏平（Q15901012）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15901012
            external_identifier: Q15901012
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:30.188Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wuq8BD1fid4feozZFJFZzf
        subject_person_id: p_d5wrqNKm2UtzkniGD7eLTC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏平
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X7o1NBRBQnKEr1DYXUUh9R
          claim_id: c_Wuq8BD1fid4feozZFJFZzf
          source_id: s_ro1QX8Adonbc7TpcZqY3Cc
          stance: supports
          locator: Q15901012
          quotation: null
          interpretation_note: null
          source:
            id: s_ro1QX8Adonbc7TpcZqY3Cc
            source_type: api_record
            title: 维基数据：王晏平（Q15901012）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15901012
            external_identifier: Q15901012
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:30.188Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_536TAk2iV2zhS8quJuep4j
        subject_person_id: p_6BymFd7sw6j7GAmg7erqPj
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_d5wrqNKm2UtzkniGD7eLTC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MP5MUnAox7eCj3SiREZ3gD
          claim_id: c_536TAk2iV2zhS8quJuep4j
          source_id: s_ro1QX8Adonbc7TpcZqY3Cc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ro1QX8Adonbc7TpcZqY3Cc
            source_type: api_record
            title: 维基数据：王晏平（Q15901012）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15901012
            external_identifier: Q15901012
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:30.188Z
            metadata_json: null
        - id: cs_b5JBKEm91WtJWCmv6KCBTX
          claim_id: c_536TAk2iV2zhS8quJuep4j
          source_id: s_YtiuJ4x6oyDJbCvjY9nQK7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YtiuJ4x6oyDJbCvjY9nQK7
            source_type: api_record
            title: 维基数据：王智兴（Q7967776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967776
            external_identifier: Q7967776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.494Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA%E8%88%88
      object_person:
        id: p_6BymFd7sw6j7GAmg7erqPj
        status: active
        display_name: 王智兴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏平（?—?），是唐朝軍事人物。 王智兴之長子。早年隨父讨李同捷有功，授检校右散骑常侍、灵州大都督府长史。累官擔任灵武节度使。开成三年，因自盗贜七千余缗，贬康州（今廣東德慶）司户参军。 | accepted |
| death.date | 854年 | accepted |
| name.primary | 王晏平 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6BymFd7sw6j7GAmg7erqPj | 王智兴 | accepted |

## 外部来源

- [维基数据：王晏平（Q15901012）](https://www.wikidata.org/wiki/Q15901012)
- [维基数据：王智兴（Q7967776）](https://www.wikidata.org/wiki/Q7967776)
- [中文维基百科：王晏平](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F%E5%B9%B3)
