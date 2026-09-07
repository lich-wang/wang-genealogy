---
schema: wang-person/v1
id: p_rQ4UkchED9yJnddR3hSCNK
status: active
merged_into: null
display_name: 王恪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MSPmqxStGe5d-WRT4Yq4eo
        subject_person_id: p_rQ4UkchED9yJnddR3hSCNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zFoAiJXx5ZBqtV_oIKc1G8
          claim_id: c_MSPmqxStGe5d-WRT4Yq4eo
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
        id: c_fLRJwhQBDF5zcc4Kx589JU
        subject_person_id: p_rQ4UkchED9yJnddR3hSCNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8AXBrtyd6FFR45KHskuAKs
          claim_id: c_fLRJwhQBDF5zcc4Kx589JU
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王禥 → 王恪
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Anx837iuUncDdg96obyiQR
        subject_person_id: p_tspct375EUYDVViDW6ahMw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rQ4UkchED9yJnddR3hSCNK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7mMz3tgjaqX9gG1KKegi8i
          claim_id: c_Anx837iuUncDdg96obyiQR
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王禥 → 王恪
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
        id: p_tspct375EUYDVViDW6ahMw
        status: active
        display_name: 王禥
        merged_into_person_id: null
  children:
    - claim:
        id: c_QNRCwuTF6L9bY1Jf2omQAw
        subject_person_id: p_rQ4UkchED9yJnddR3hSCNK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8K9NqM2aq3i4UpXoqF8NYJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sFq491s6d71LTPxA1pKreS
          claim_id: c_QNRCwuTF6L9bY1Jf2omQAw
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王恪 → 王靖
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
        id: p_8K9NqM2aq3i4UpXoqF8NYJ
        status: active
        display_name: 王靖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恪，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tspct375EUYDVViDW6ahMw | 王禥 | accepted |
| children | p_8K9NqM2aq3i4UpXoqF8NYJ | 王靖 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
