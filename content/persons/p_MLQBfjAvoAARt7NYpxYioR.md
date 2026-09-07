---
schema: wang-person/v1
id: p_MLQBfjAvoAARt7NYpxYioR
status: active
merged_into: null
display_name: 吕焉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pcMkQBDXzgicjGBxLToBrG
        subject_person_id: p_MLQBfjAvoAARt7NYpxYioR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吕焉，史料所见人物。本项目依据《吕焉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_znmNh8pmEZNRQIj-iGtc5w
          claim_id: c_pcMkQBDXzgicjGBxLToBrG
          source_id: s_hyTEpqFTozdnTATN7bAQGn
          stance: supports
          locator: Q122982263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hyTEpqFTozdnTATN7bAQGn
            source_type: api_record
            title: 维基数据：吕焉（Q122982263）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q122982263
            external_identifier: Q122982263
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:09.305Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nqx8XGA8KxRX1AKF1ZeG4C
        subject_person_id: p_MLQBfjAvoAARt7NYpxYioR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吕焉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YL4RyBSjHFbbboB4QJDsxM
          claim_id: c_Nqx8XGA8KxRX1AKF1ZeG4C
          source_id: s_hyTEpqFTozdnTATN7bAQGn
          stance: supports
          locator: Q122982263
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
        id: c_qo4f2XPNG2dMMoamQMAY1D
        subject_person_id: p_MLQBfjAvoAARt7NYpxYioR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_txEz4hCDRU7QsamZGm536K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_24T3jjXM1XPeU52xW13nqs
          claim_id: c_qo4f2XPNG2dMMoamQMAY1D
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P26（配偶）
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
        - id: cs_M5tQJFXYXxKAQ16sUg5PF4
          claim_id: c_qo4f2XPNG2dMMoamQMAY1D
          source_id: s_hyTEpqFTozdnTATN7bAQGn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_hyTEpqFTozdnTATN7bAQGn
            source_type: api_record
            title: 维基数据：吕焉（Q122982263）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q122982263
            external_identifier: Q122982263
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:09.305Z
            metadata_json: null
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吕焉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吕焉，史料所见人物。本项目依据《吕焉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 吕焉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |

## 外部来源

- [维基数据：吕焉（Q122982263）](https://www.wikidata.org/wiki/Q122982263)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
