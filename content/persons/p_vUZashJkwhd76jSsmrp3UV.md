---
schema: wang-person/v1
id: p_vUZashJkwhd76jSsmrp3UV
status: active
merged_into: null
display_name: 王休
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nJ5w3F_9uHCU3N3u8tbdRZ
        subject_person_id: p_vUZashJkwhd76jSsmrp3UV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休，史料所见人物。本项目依据《王休》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rs9CZxX4W6ljJBiLrDVvgc
          claim_id: c_nJ5w3F_9uHCU3N3u8tbdRZ
          source_id: s_Z4TcogNMRZDDzzWsoWmiTt
          stance: supports
          locator: Q26209876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Z4TcogNMRZDDzzWsoWmiTt
            source_type: api_record
            title: 维基数据：王休（Q26209876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209876
            external_identifier: Q26209876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QPN6a4erjzUhzbxLt7k3Lp
        subject_person_id: p_vUZashJkwhd76jSsmrp3UV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e6fmN6XYyGsy7JCZCdP3E8
          claim_id: c_QPN6a4erjzUhzbxLt7k3Lp
          source_id: s_Z4TcogNMRZDDzzWsoWmiTt
          stance: supports
          locator: Q26209876
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ddo7TWd1A2KupNVVf2m9st
        subject_person_id: p_vUZashJkwhd76jSsmrp3UV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9FrwcC297g2KzCVL3du6CZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6LwP9dSNxbgFnu7XBFgV5t
          claim_id: c_Ddo7TWd1A2KupNVVf2m9st
          source_id: s_Z4TcogNMRZDDzzWsoWmiTt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z4TcogNMRZDDzzWsoWmiTt
            source_type: api_record
            title: 维基数据：王休（Q26209876）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209876
            external_identifier: Q26209876
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_8c133ZRXjb6Z9uQg672d68
          claim_id: c_Ddo7TWd1A2KupNVVf2m9st
          source_id: s_3Hi74tmjaKD4DD4L1MCBNy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3Hi74tmjaKD4DD4L1MCBNy
            source_type: api_record
            title: 维基数据：王鎮惡（Q15899785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15899785
            external_identifier: Q15899785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.301Z
            metadata_json: null
      object_person:
        id: p_9FrwcC297g2KzCVL3du6CZ
        status: active
        display_name: 王鎮惡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王休，史料所见人物。本项目依据《王休》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9FrwcC297g2KzCVL3du6CZ | 王鎮惡 | accepted |

## 外部来源

- [维基数据：王休（Q26209876）](https://www.wikidata.org/wiki/Q26209876)
- [维基数据：王鎮惡（Q15899785）](https://www.wikidata.org/wiki/Q15899785)
