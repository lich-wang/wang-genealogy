---
schema: wang-person/v1
id: p_eJggnSoGH5ETKvaEZqE886
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_0H26CwM8Tp5A5ZJ0NjDVCe
        subject_person_id: p_eJggnSoGH5ETKvaEZqE886
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗（？—18年），初名王会宗，新朝宗室，西汉外戚，王莽之孫，王宇第四子，母呂宽之妹。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fMKbMu8FkxF_Q8o5roviUB
          claim_id: c_0H26CwM8Tp5A5ZJ0NjDVCe
          source_id: s_RAsguCBJ6dpUqziAmRdCjx
          stance: supports
          locator: 导言
          quotation: 王宗（？—18年），初名王会宗，新朝宗室，西汉外戚，王莽之孫，王
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_RAsguCBJ6dpUqziAmRdCjx
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: Q11573021
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wc9nuKGoV8UBUFKySMkqBH
        subject_person_id: p_eJggnSoGH5ETKvaEZqE886
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 18年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0018-01-01
            latest: 0018-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vWUFqT3BwCdYY4uUNXPzoB
          claim_id: c_wc9nuKGoV8UBUFKySMkqBH
          source_id: s_sB6fRvP2yPZssCrPLwDPDN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_sB6fRvP2yPZssCrPLwDPDN
            source_type: api_record
            title: 维基数据：王宗（Q11573021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573021
            external_identifier: Q11573021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:48.534Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jz1gwYqbFsYqVEnqVeh7vG
        subject_person_id: p_eJggnSoGH5ETKvaEZqE886
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hzy9ExfP6wUi2xKPKWqUJw
          claim_id: c_Jz1gwYqbFsYqVEnqVeh7vG
          source_id: s_sB6fRvP2yPZssCrPLwDPDN
          stance: supports
          locator: Q11573021
          quotation: null
          interpretation_note: null
          source:
            id: s_sB6fRvP2yPZssCrPLwDPDN
            source_type: api_record
            title: 维基数据：王宗（Q11573021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573021
            external_identifier: Q11573021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:48.534Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ppwg1Jy3mj738L5QH8fMPv
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJggnSoGH5ETKvaEZqE886
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UWMT4VMa7TyyxMpEF2FrS2
          claim_id: c_Ppwg1Jy3mj738L5QH8fMPv
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_9K6vLvG9LHDXF1SMxRawBt
          claim_id: c_Ppwg1Jy3mj738L5QH8fMPv
          source_id: s_sB6fRvP2yPZssCrPLwDPDN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sB6fRvP2yPZssCrPLwDPDN
            source_type: api_record
            title: 维基数据：王宗（Q11573021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573021
            external_identifier: Q11573021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:48.534Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗（？—18年），初名王会宗，新朝宗室，西汉外戚，王莽之孫，王宇第四子，母呂宽之妹。 | accepted |
| death.date | 18年 | accepted |
| name.primary | 王宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |

## 外部来源

- [维基数据：王宗（Q11573021）](https://www.wikidata.org/wiki/Q11573021)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王宗 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D))
