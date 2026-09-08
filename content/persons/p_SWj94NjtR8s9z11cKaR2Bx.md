---
schema: wang-person/v1
id: p_SWj94NjtR8s9z11cKaR2Bx
status: active
merged_into: null
display_name: 王瑨
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OLYVt2hjh61k9sdZJi1atS
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨，史料所见人物。本项目依据《王瑨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VWwKrRrfwnzXbYiuz4-kXG
          claim_id: c_OLYVt2hjh61k9sdZJi1atS
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: Q26209205
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4FfCSxs5x4oN7PKmKxPivL
            source_type: api_record
            title: 维基数据：王瑨（Q26209205）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209205
            external_identifier: Q26209205
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NisJMbJhssrYEEz5WZsvCP
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fF6rWFsUcQHr6AKDkpAYG4
          claim_id: c_NisJMbJhssrYEEz5WZsvCP
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: Q26209205
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xDfk3CxkXYfXnxqKSwWj8U
        subject_person_id: p_gtuvXLikvWh5oAFQk1AX2V
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5HxD1BKE5HwJanLEGRscs9
          claim_id: c_xDfk3CxkXYfXnxqKSwWj8U
          source_id: s_fdGLHFjHM2j96uzSyHgbbY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fdGLHFjHM2j96uzSyHgbbY
            source_type: api_record
            title: 维基数据：王方翼（Q15904891）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904891
            external_identifier: Q15904891
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:34.053Z
            metadata_json: null
        - id: cs_HvSLGLAB1odNTKye4KJLUD
          claim_id: c_xDfk3CxkXYfXnxqKSwWj8U
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4FfCSxs5x4oN7PKmKxPivL
            source_type: api_record
            title: 维基数据：王瑨（Q26209205）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209205
            external_identifier: Q26209205
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
      object_person:
        id: p_gtuvXLikvWh5oAFQk1AX2V
        status: active
        display_name: 王方翼
        merged_into_person_id: null
  children:
    - claim:
        id: c_uY9z65ULPkpsS9sKLwihwa
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCCzfaBPGmC4CCrXYa95Yt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSKL41x8rNSowB1ieHZ6TB
          claim_id: c_uY9z65ULPkpsS9sKLwihwa
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_4pD9J4KU8BV55nEYsB9nVT
          claim_id: c_uY9z65ULPkpsS9sKLwihwa
          source_id: s_d0cSzmi0CQfj3gDEt97JRm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_d0cSzmi0CQfj3gDEt97JRm
            source_type: website
            title: 中文维基百科：王鉷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7
            external_identifier: Q11572879
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_cCCzfaBPGmC4CCrXYa95Yt
        status: active
        display_name: 王鉷
        merged_into_person_id: null
    - claim:
        id: c_SiVYUhhUh1LkcFYmrCTn5X
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VhYJfua3oKHd9zWvRRU8LK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRuHYoapf9URLrANXqj1T8
          claim_id: c_SiVYUhhUh1LkcFYmrCTn5X
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_fM3P1nDkWoCt8RYNZQdCwM
          claim_id: c_SiVYUhhUh1LkcFYmrCTn5X
          source_id: s_hGMxK9qCJ3iKjQGBh2Rpgc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hGMxK9qCJ3iKjQGBh2Rpgc
            source_type: api_record
            title: 维基数据：王銲（Q11572873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572873
            external_identifier: Q11572873
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json: null
      object_person:
        id: p_VhYJfua3oKHd9zWvRRU8LK
        status: active
        display_name: 王銲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑨，史料所见人物。本项目依据《王瑨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王瑨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gtuvXLikvWh5oAFQk1AX2V | 王方翼 | accepted |
| children | p_cCCzfaBPGmC4CCrXYa95Yt | 王鉷 | accepted |
| children | p_VhYJfua3oKHd9zWvRRU8LK | 王銲 | accepted |

## 外部来源

- [维基数据：王方翼（Q15904891）](https://www.wikidata.org/wiki/Q15904891)
- [维基数据：王銲（Q11572873）](https://www.wikidata.org/wiki/Q11572873)
- [维基数据：王瑨（Q26209205）](https://www.wikidata.org/wiki/Q26209205)
- [中文维基百科：王鉷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7)
