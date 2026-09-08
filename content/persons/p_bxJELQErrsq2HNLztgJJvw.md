---
schema: wang-person/v1
id: p_bxJELQErrsq2HNLztgJJvw
status: active
merged_into: null
display_name: 周綠霞
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_85ovSDRqkUrmhcaD45hK1g
        subject_person_id: p_bxJELQErrsq2HNLztgJJvw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周綠霞，史料所见人物。本项目依据《周綠霞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eM91hfXJoxlYxIygmz4mn5
          claim_id: c_85ovSDRqkUrmhcaD45hK1g
          source_id: s_WJNi35Kv1DAAHtBqPCyD1S
          stance: supports
          locator: Q112683577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D48Gq2kPEEEFXLtgpCWsv6
        subject_person_id: p_bxJELQErrsq2HNLztgJJvw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周綠霞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GtN1EEo7feTYXw554AkQum
          claim_id: c_D48Gq2kPEEEFXLtgpCWsv6
          source_id: s_WJNi35Kv1DAAHtBqPCyD1S
          stance: supports
          locator: Q112683577
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_NRmDJMD9Wzr4UWs937zuPi
        status: active
        display_name: 王恭守
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周綠霞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周綠霞，史料所见人物。本项目依据《周綠霞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 周綠霞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NRmDJMD9Wzr4UWs937zuPi | 王恭守 | accepted |

## 外部来源

- [维基数据：王恭守（Q21017023）](https://www.wikidata.org/wiki/Q21017023)
- [维基数据：周綠霞（Q112683577）](https://www.wikidata.org/wiki/Q112683577)
