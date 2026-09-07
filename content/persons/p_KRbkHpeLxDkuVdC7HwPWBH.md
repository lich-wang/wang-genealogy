---
schema: wang-person/v1
id: p_KRbkHpeLxDkuVdC7HwPWBH
status: active
merged_into: null
display_name: 王D
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4TLPBMWsu3QL1C75hKr25c
        subject_person_id: p_KRbkHpeLxDkuVdC7HwPWBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王D，史料所见人物。本项目依据《王D》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_gASNpeYEWf-MOEe3RIetPQ
          claim_id: c_4TLPBMWsu3QL1C75hKr25c
          source_id: s_DHP6CAL1B33Wqe1tE1w5GT
          stance: supports
          locator: Q45401114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source:
            id: s_DHP6CAL1B33Wqe1tE1w5GT
            source_type: api_record
            title: 维基数据：王D（Q45401114）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401114
            external_identifier: Q45401114
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLR9kihbx75hXFDKNXiooY
        subject_person_id: p_KRbkHpeLxDkuVdC7HwPWBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王D
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rMGG7Zuq4mDtHLGfVQ4eLT
          claim_id: c_aLR9kihbx75hXFDKNXiooY
          source_id: s_DHP6CAL1B33Wqe1tE1w5GT
          stance: supports
          locator: Q45401114
          quotation: null
          interpretation_note: null
          source:
            id: s_DHP6CAL1B33Wqe1tE1w5GT
            source_type: api_record
            title: 维基数据：王D（Q45401114）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401114
            external_identifier: Q45401114
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_G6NNya6LPVzNsniPpXKRBJ
        subject_person_id: p_KRbkHpeLxDkuVdC7HwPWBH
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gU4WTuxS5a8iwDm9VLJE1n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUhFHgLQzSQb2mNXw69daa
          claim_id: c_G6NNya6LPVzNsniPpXKRBJ
          source_id: s_JS4P2uMGLxNkCsMFe6eJep
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JS4P2uMGLxNkCsMFe6eJep
            source_type: api_record
            title: 维基数据：王广廉（Q15895306）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15895306
            external_identifier: Q15895306
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:26.704Z
            metadata_json: null
        - id: cs_MUMnPKFEL3nv6tTNbmFFaR
          claim_id: c_G6NNya6LPVzNsniPpXKRBJ
          source_id: s_DHP6CAL1B33Wqe1tE1w5GT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DHP6CAL1B33Wqe1tE1w5GT
            source_type: api_record
            title: 维基数据：王D（Q45401114）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401114
            external_identifier: Q45401114
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person:
        id: p_gU4WTuxS5a8iwDm9VLJE1n
        status: active
        display_name: 王广廉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王D

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王D，史料所见人物。本项目依据《王D》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王D | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gU4WTuxS5a8iwDm9VLJE1n | 王广廉 | accepted |

## 外部来源

- [维基数据：王广廉（Q15895306）](https://www.wikidata.org/wiki/Q15895306)
- [维基数据：王D（Q45401114）](https://www.wikidata.org/wiki/Q45401114)
