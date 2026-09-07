---
schema: wang-person/v1
id: p_hQ3t44d3ST3M2RebcRxMiw
status: active
merged_into: null
display_name: 王圖炯
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_syfOF7agLZJn5fVfJr0WI9
        subject_person_id: p_hQ3t44d3ST3M2RebcRxMiw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圖炯，史料所见人物。本项目依据《王圖炯》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CbsbJV3gYoxkHUvIwCE_mE
          claim_id: c_syfOF7agLZJn5fVfJr0WI9
          source_id: s_CUDxJwCaBokw3PzpszUbv9
          stance: supports
          locator: Q133305762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CUDxJwCaBokw3PzpszUbv9
            source_type: api_record
            title: 维基数据：王圖炯（Q133305762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q133305762
            external_identifier: Q133305762
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:44.084Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7fGGxUniEUbqtHBzBGyvon
        subject_person_id: p_hQ3t44d3ST3M2RebcRxMiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圖炯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_37mDJEsfPk1jZErzUx5YXN
          claim_id: c_7fGGxUniEUbqtHBzBGyvon
          source_id: s_CUDxJwCaBokw3PzpszUbv9
          stance: supports
          locator: Q133305762
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ai2xmMXHNFKKuD7cMModQA
        subject_person_id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hQ3t44d3ST3M2RebcRxMiw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CNfJf9GMxnucDQBUii9Mnb
          claim_id: c_ai2xmMXHNFKKuD7cMModQA
          source_id: s_CUDxJwCaBokw3PzpszUbv9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CUDxJwCaBokw3PzpszUbv9
            source_type: api_record
            title: 维基数据：王圖炯（Q133305762）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q133305762
            external_identifier: Q133305762
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:44.084Z
            metadata_json: null
        - id: cs_hXVMb86xe6wo3oqrT2CLi9
          claim_id: c_ai2xmMXHNFKKuD7cMModQA
          source_id: s_3274JnsuaAfJg8rZ4kF3gw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3274JnsuaAfJg8rZ4kF3gw
            source_type: api_record
            title: 维基数据：王鸿绪（Q15913275）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913275
            external_identifier: Q15913275
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:12.577Z
            metadata_json: null
      object_person:
        id: p_CzTWpHL7Ygd6jZ5FnFr3gg
        status: active
        display_name: 王鸿绪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王圖炯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王圖炯，史料所见人物。本项目依据《王圖炯》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王圖炯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CzTWpHL7Ygd6jZ5FnFr3gg | 王鸿绪 | accepted |

## 外部来源

- [维基数据：王鸿绪（Q15913275）](https://www.wikidata.org/wiki/Q15913275)
- [维基数据：王圖炯（Q133305762）](https://www.wikidata.org/wiki/Q133305762)
