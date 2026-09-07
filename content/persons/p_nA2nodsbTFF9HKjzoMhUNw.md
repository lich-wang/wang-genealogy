---
schema: wang-person/v1
id: p_nA2nodsbTFF9HKjzoMhUNw
status: active
merged_into: null
display_name: 王素
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zv7vkCxqsqtHuyLLk8Bc8k
        subject_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1-lh8Q1EPODYg0aCIrc0ht
          claim_id: c_zv7vkCxqsqtHuyLLk8Bc8k
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hn9DKAmyTGpAGFEDYGERuR
        subject_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YAd3GwzHXq4h2LJQVpKsSR
          claim_id: c_Hn9DKAmyTGpAGFEDYGERuR
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: Q72616647
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_U95aN79n8GMK3412RExY5k
        subject_person_id: p_jLiWepWyuCmhBbQ3b2FAR9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LK3iYZnKHbRCCNQSqXpkzr
          claim_id: c_U95aN79n8GMK3412RExY5k
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王志 → 王素
          interpretation_note: null
          source:
            id: s_MGBoig692jprej3f8uiDi2
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:58:59.171Z
            metadata_json: null
        - id: cs_b7E6vuXfL7z5ttf7yYW5Bb
          claim_id: c_U95aN79n8GMK3412RExY5k
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王志 → 王素
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
        id: p_jLiWepWyuCmhBbQ3b2FAR9
        status: active
        display_name: 王志
        merged_into_person_id: null
  children:
    - claim:
        id: c_s5jFSyftUVNwh2f16N4si7
        subject_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D92Fjw7oqytdg9w5SNiBYQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RSA52KDYR7445JBiX6HTtK
          claim_id: c_s5jFSyftUVNwh2f16N4si7
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王素 → 王大志
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
        id: p_D92Fjw7oqytdg9w5SNiBYQ
        status: active
        display_name: 王大志
        merged_into_person_id: null
    - claim:
        id: c_w795bZHpvgY88gPQhtabp4
        subject_person_id: p_nA2nodsbTFF9HKjzoMhUNw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XJ584hRRgmwC1emz21vE1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJnzb3BQFQzxmjCicx2drH
          claim_id: c_w795bZHpvgY88gPQhtabp4
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（第四子）
          quotation: 宰相王旦之孫，工部尚書王素第四子。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_XJ584hRRgmwC1emz21vE1F
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王素，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jLiWepWyuCmhBbQ3b2FAR9 | 王志 | accepted |
| children | p_D92Fjw7oqytdg9w5SNiBYQ | 王大志 | accepted |
| children | p_XJ584hRRgmwC1emz21vE1F | 王鞏 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王鞏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F)
