---
schema: wang-person/v1
id: p_Ev9rPKJUrkBKAQXV6D6QqB
status: active
merged_into: null
display_name: 王丹
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qquUifaDIIJ6C9Wn9EOaFX
        subject_person_id: p_Ev9rPKJUrkBKAQXV6D6QqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹，史料所见人物。本项目依据《王丹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPG4MVSTP8S7Ebi18XyhFR
          claim_id: c_qquUifaDIIJ6C9Wn9EOaFX
          source_id: s_hKRe4zANDCej6Dhqiteb2R
          stance: supports
          locator: Q104698719
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hKRe4zANDCej6Dhqiteb2R
            source_type: api_record
            title: 维基数据：王丹（Q104698719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q104698719
            external_identifier: Q104698719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_79PCaRLYpn6eEZyUSWCUkd
        subject_person_id: p_Ev9rPKJUrkBKAQXV6D6QqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ENzgvGW212d7tWmWWDFvvf
          claim_id: c_79PCaRLYpn6eEZyUSWCUkd
          source_id: s_hKRe4zANDCej6Dhqiteb2R
          stance: supports
          locator: Q104698719
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KNMEAAyR67TnkRhvBTJLiL
        subject_person_id: p_BS59WtwbAaqRXm83dBaHiL
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ev9rPKJUrkBKAQXV6D6QqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_StdCzRkeye1dLWKfqdkuCr
          claim_id: c_KNMEAAyR67TnkRhvBTJLiL
          source_id: s_hKRe4zANDCej6Dhqiteb2R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKRe4zANDCej6Dhqiteb2R
            source_type: api_record
            title: 维基数据：王丹（Q104698719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q104698719
            external_identifier: Q104698719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
      object_person:
        id: p_BS59WtwbAaqRXm83dBaHiL
        status: active
        display_name: 王立
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丹，史料所见人物。本项目依据《王丹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王丹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BS59WtwbAaqRXm83dBaHiL | 王立 | accepted |

## 外部来源

- [维基数据：王丹（Q104698719）](https://www.wikidata.org/wiki/Q104698719)
