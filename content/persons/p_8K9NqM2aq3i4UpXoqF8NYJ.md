---
schema: wang-person/v1
id: p_8K9NqM2aq3i4UpXoqF8NYJ
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eo3mW_aCLCcyzwcejct_Oa
        subject_person_id: p_8K9NqM2aq3i4UpXoqF8NYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jO0llRwsmnix7zLTygKSR1
          claim_id: c_eo3mW_aCLCcyzwcejct_Oa
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
        id: c_1F7otf6aDia6f4DQc19yA7
        subject_person_id: p_8K9NqM2aq3i4UpXoqF8NYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iSMmpHmXbjhWAduF4PfUcY
          claim_id: c_1F7otf6aDia6f4DQc19yA7
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: Q15891843
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_rQ4UkchED9yJnddR3hSCNK
        status: active
        display_name: 王恪
        merged_into_person_id: null
  children:
    - claim:
        id: c_mfTgnXRMuzBQj8TSuXDLQc
        subject_person_id: p_8K9NqM2aq3i4UpXoqF8NYJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vv1QG1f7rDkgRVqFoqdzMK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Dh4gYfedhJwFAvF5TdkDS
          claim_id: c_mfTgnXRMuzBQj8TSuXDLQc
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王靖 → 王𡵝
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
        id: p_vv1QG1f7rDkgRVqFoqdzMK
        status: active
        display_name: 王𡵝
        merged_into_person_id: null
    - claim:
        id: c_LwHM1bpz3xXo8AS3L8BQmL
        subject_person_id: p_8K9NqM2aq3i4UpXoqF8NYJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jGSzFzqwPpBHm4p143VP3C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xqDC199NJoATX5D4obrAPb
          claim_id: c_LwHM1bpz3xXo8AS3L8BQmL
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王靖 → 王澄之
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
        id: p_jGSzFzqwPpBHm4p143VP3C
        status: active
        display_name: 王澄之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靖，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王靖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rQ4UkchED9yJnddR3hSCNK | 王恪 | accepted |
| children | p_vv1QG1f7rDkgRVqFoqdzMK | 王𡵝 | accepted |
| children | p_jGSzFzqwPpBHm4p143VP3C | 王澄之 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
