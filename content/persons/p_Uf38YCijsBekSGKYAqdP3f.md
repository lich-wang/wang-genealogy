---
schema: wang-person/v1
id: p_Uf38YCijsBekSGKYAqdP3f
status: active
merged_into: null
display_name: 王秉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dqioa7vdv3oObEk80QqvjX
        subject_person_id: p_Uf38YCijsBekSGKYAqdP3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉（5世紀—？），北史因避讳李昞将他改名康，字文政，琅邪郡临沂县（今山东省临沂市）人，南齐尚书左仆射王奂之子，北魏官员。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iiTGrd9ZT282pee2Q2g_4W
          claim_id: c_Dqioa7vdv3oObEk80QqvjX
          source_id: s_Jo51CxhY3vQx2gjreCaA4C
          stance: supports
          locator: 导言
          quotation: 王秉（5世紀—？），北史因避讳李昞将他改名康，字文政，琅邪郡临沂
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_Jo51CxhY3vQx2gjreCaA4C
            source_type: website
            title: 中文维基百科：王秉 (幽州刺史)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%B9%BD%E5%B7%9E%E5%88%BA%E5%8F%B2)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.180Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CPJSx2smWZf4vNAEA2kMW1
        subject_person_id: p_Uf38YCijsBekSGKYAqdP3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JgB1UU9UQFgwYzLcuoWQbn
          claim_id: c_CPJSx2smWZf4vNAEA2kMW1
          source_id: s_Jo51CxhY3vQx2gjreCaA4C
          stance: supports
          locator: Q117747941
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3BbfMFwpEGvwCMMBNpnjHf
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Uf38YCijsBekSGKYAqdP3f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zqD3RbBHK3Y89Ft15jdZnB
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_Jo51CxhY3vQx2gjreCaA4C
          stance: supports
          locator: 条文：之子/之女
          quotation: 王秉，北史因避讳李昞将他改名康，字文政，琅邪郡临沂县（今山东省临沂市）人，南齐尚书左仆射王奂之子，北魏官员
          interpretation_note: null
          source:
            id: s_Jo51CxhY3vQx2gjreCaA4C
            source_type: website
            title: 中文维基百科：王秉 (幽州刺史)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%B9%BD%E5%B7%9E%E5%88%BA%E5%8F%B2)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.180Z
            metadata_json: null
        - id: cs_48ABvHQkG8oAGXDYEKzCHT
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王秉
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
        - id: cs_y73w5tE9ZwavTMK5amdFVV
          claim_id: c_3BbfMFwpEGvwCMMBNpnjHf
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王奂 → 王秉
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
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  children: []
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
| bio.summary | 王秉（5世紀—？），北史因避讳李昞将他改名康，字文政，琅邪郡临沂县（今山东省临沂市）人，南齐尚书左仆射王奂之子，北魏官员。 | accepted |
| name.primary | 王秉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王秉 (幽州刺史)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%B9%BD%E5%B7%9E%E5%88%BA%E5%8F%B2))
