---
schema: wang-person/v1
id: p_cxd5bBJMRXQ1FLgie23F8Z
status: active
merged_into: null
display_name: 王克昌
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Um7cYViKoDyxMUsRWC_jGP
        subject_person_id: p_cxd5bBJMRXQ1FLgie23F8Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克昌，史料所见人物。本项目依据《王克昌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9T2yZ4PuLTBCNX-Pja4KoV
          claim_id: c_Um7cYViKoDyxMUsRWC_jGP
          source_id: s_TKjh4w2dR15r3nM8bgsxY9
          stance: supports
          locator: Q13668769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TKjh4w2dR15r3nM8bgsxY9
            source_type: api_record
            title: 维基数据：王克昌（Q13668769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668769
            external_identifier: Q13668769
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EbxN6GPFjCjbBK8tQq88B
        subject_person_id: p_cxd5bBJMRXQ1FLgie23F8Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克昌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MgLsZZEDM9CNpbve8mc5Rn
          claim_id: c_7EbxN6GPFjCjbBK8tQq88B
          source_id: s_TKjh4w2dR15r3nM8bgsxY9
          stance: supports
          locator: Q13668769
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NgNyD9qFVnZN62tu7d2jKW
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cxd5bBJMRXQ1FLgie23F8Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENPKLjNZiHdRSaDDX3Q3Fk
          claim_id: c_NgNyD9qFVnZN62tu7d2jKW
          source_id: s_b4h73LZw2Fw5KrXfofcXu1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_b4h73LZw2Fw5KrXfofcXu1
            source_type: api_record
            title: 维基数据：王熙（Q13668762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668762
            external_identifier: Q13668762
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:21.514Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%86%99_(%E9%A0%86%E6%B2%BB%E9%80%B2%E5%A3%AB)
        - id: cs_c9xFbBCtEAz7iv54Fr6KSr
          claim_id: c_NgNyD9qFVnZN62tu7d2jKW
          source_id: s_TKjh4w2dR15r3nM8bgsxY9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克昌，史料所见人物。本项目依据《王克昌》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王克昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [维基数据：王克昌（Q13668769）](https://www.wikidata.org/wiki/Q13668769)
- [维基数据：王熙（Q13668762）](https://www.wikidata.org/wiki/Q13668762)
