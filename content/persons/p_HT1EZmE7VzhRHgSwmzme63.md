---
schema: wang-person/v1
id: p_HT1EZmE7VzhRHgSwmzme63
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9gXLnjeWvl-WBu3KrVYoFY
        subject_person_id: p_HT1EZmE7VzhRHgSwmzme63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CS6ykQ50hbIqcdrK-tavRx
          claim_id: c_9gXLnjeWvl-WBu3KrVYoFY
          source_id: s_qCGN6VYcRPRPs2qd2JAV6t
          stance: supports
          locator: Q133468037
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qCGN6VYcRPRPs2qd2JAV6t
            source_type: api_record
            title: 维基数据：王氏（Q133468037）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q133468037
            external_identifier: Q133468037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:42.528Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ccDtjyQN8HKrnr7eAYkCby
        subject_person_id: p_HT1EZmE7VzhRHgSwmzme63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vywD3t3xE3zYbF7JAaFdN9
          claim_id: c_ccDtjyQN8HKrnr7eAYkCby
          source_id: s_qCGN6VYcRPRPs2qd2JAV6t
          stance: supports
          locator: Q133468037
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cqn7dNKLNfFDoAupJ8yER1
        subject_person_id: p_5AMv9WBqacZuT86WkDC25v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HT1EZmE7VzhRHgSwmzme63
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XeEFQD7hGKxZ8PiRA5NHwR
          claim_id: c_cqn7dNKLNfFDoAupJ8yER1
          source_id: s_fpGHJUb9sFa3Lu1QgrjA68
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fpGHJUb9sFa3Lu1QgrjA68
            source_type: api_record
            title: 维基数据：王肃（Q4273020）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4273020
            external_identifier: Q4273020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:44.689Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%82%83_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_Dbe5YrTd9CK3SE2H6aeqj6
          claim_id: c_cqn7dNKLNfFDoAupJ8yER1
          source_id: s_qCGN6VYcRPRPs2qd2JAV6t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qCGN6VYcRPRPs2qd2JAV6t
            source_type: api_record
            title: 维基数据：王氏（Q133468037）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q133468037
            external_identifier: Q133468037
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:42.528Z
            metadata_json: null
      object_person:
        id: p_5AMv9WBqacZuT86WkDC25v
        status: active
        display_name: 王肃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5AMv9WBqacZuT86WkDC25v | 王肃 | accepted |

## 外部来源

- [维基数据：王氏（Q133468037）](https://www.wikidata.org/wiki/Q133468037)
- [维基数据：王肃（Q4273020）](https://www.wikidata.org/wiki/Q4273020)
