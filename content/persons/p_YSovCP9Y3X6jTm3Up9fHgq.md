---
schema: wang-person/v1
id: p_YSovCP9Y3X6jTm3Up9fHgq
status: active
merged_into: null
display_name: 王佺
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_buzjUmf4Bj13rTp9Mg9LyC
        subject_person_id: p_YSovCP9Y3X6jTm3Up9fHgq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W8KNdGj-SCPztRgMZz_Qbx
          claim_id: c_buzjUmf4Bj13rTp9Mg9LyC
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wGRxjxYoE4Hhzi9CzmSYex
        subject_person_id: p_YSovCP9Y3X6jTm3Up9fHgq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3jfGAaJvEAwGC1iS1WmTY3
          claim_id: c_wGRxjxYoE4Hhzi9CzmSYex
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王守真 → 王佺
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wq4h5gZ2FQp9Kvf8TqV7or
        subject_person_id: p_BmJFZYzc1KhyXwV2LTrGiy
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YSovCP9Y3X6jTm3Up9fHgq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cht7ATMVqXzhXLwKsWgQDT
          claim_id: c_Wq4h5gZ2FQp9Kvf8TqV7or
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王守真 → 王佺
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_BmJFZYzc1KhyXwV2LTrGiy
        status: active
        display_name: 王守真
        merged_into_person_id: null
  children:
    - claim:
        id: c_kcJjfFQCFM9b2Hwh16uViu
        subject_person_id: p_YSovCP9Y3X6jTm3Up9fHgq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_69CU6cTNvx8xt28kJB3Tt6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ZxogjJtrPfJktDoPbu2wH
          claim_id: c_kcJjfFQCFM9b2Hwh16uViu
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王佺 → 王峕
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
      object_person:
        id: p_69CU6cTNvx8xt28kJB3Tt6
        status: active
        display_name: 王峕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佺，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王佺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BmJFZYzc1KhyXwV2LTrGiy | 王守真 | accepted |
| children | p_69CU6cTNvx8xt28kJB3Tt6 | 王峕 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
