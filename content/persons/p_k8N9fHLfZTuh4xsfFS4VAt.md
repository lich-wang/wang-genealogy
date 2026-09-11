---
schema: wang-person/v1
id: p_k8N9fHLfZTuh4xsfFS4VAt
status: active
merged_into: null
display_name: 王秉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CXplYutmYKCQGAw99PJezP
        subject_person_id: p_k8N9fHLfZTuh4xsfFS4VAt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉，史料所见人物。本项目依据《王秉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KdA3DS23wKfA1VSSgwgGQ
          claim_id: c_CXplYutmYKCQGAw99PJezP
          source_id: s_Bap1VHJ7heG8n9aPnRaEcM
          stance: supports
          locator: Q19826406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Bap1VHJ7heG8n9aPnRaEcM
            source_type: api_record
            title: 维基数据：王秉（Q19826406）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19826406
            external_identifier: Q19826406
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%A4%AA%E5%8E%9F%E9%83%A1%E5%85%AC)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mFCgHhR6SumYvrLgmuEQxc
        subject_person_id: p_k8N9fHLfZTuh4xsfFS4VAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tAe234XZK3xPrcstEPGFB3
          claim_id: c_mFCgHhR6SumYvrLgmuEQxc
          source_id: s_Bap1VHJ7heG8n9aPnRaEcM
          stance: supports
          locator: Q19826406
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pvG7iFon4jA8MQoEo8SZJ2
        subject_person_id: p_k8N9fHLfZTuh4xsfFS4VAt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChHXgB6mbHHPYfXFBpAr1a
          claim_id: c_pvG7iFon4jA8MQoEo8SZJ2
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jP68TirswtwKcjvQJfKLb9
            source_type: api_record
            title: 维基数据：王裕（Q25918183）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918183
            external_identifier: Q25918183
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
        - id: cs_7oQDsAsKsts2NQmPLn4woB
          claim_id: c_pvG7iFon4jA8MQoEo8SZJ2
          source_id: s_Bap1VHJ7heG8n9aPnRaEcM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_nT7k2pCzDkpksQ1s3p6rcV
        status: active
        display_name: 王裕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秉，史料所见人物。本项目依据《王秉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王秉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nT7k2pCzDkpksQ1s3p6rcV | 王裕 | accepted |

## 外部来源

- [维基数据：王秉（Q19826406）](https://www.wikidata.org/wiki/Q19826406)
- [维基数据：王裕（Q25918183）](https://www.wikidata.org/wiki/Q25918183)
