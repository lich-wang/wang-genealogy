---
schema: wang-person/v1
id: p_bsD9DxKpV9CWWbRVgiYG3j
status: active
merged_into: null
display_name: 王鉴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VpESQ0H691d81mYuarKx6L
        subject_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉴，史料所见人物。本项目依据《王鉴 (刘宋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FrG8146Zf7FouKq3VNDmF2
          claim_id: c_VpESQ0H691d81mYuarKx6L
          source_id: s_bK7oufbRA87KgyNBTowhA8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bK7oufbRA87KgyNBTowhA8
            source_type: website
            title: 中文维基百科：王鉴 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B4_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.309Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FnJENFybQWm9qJG9ZPxWJc
        subject_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉴
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgLBk2pbjBMuehvsaYVqcp
          claim_id: c_FnJENFybQWm9qJG9ZPxWJc
          source_id: s_bK7oufbRA87KgyNBTowhA8
          stance: supports
          locator: Q16906233
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e897j8vWYaHCv6vckg9WVJ
        subject_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DKmaczir6tB5CPZ7k6K9rY
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_bK7oufbRA87KgyNBTowhA8
          stance: supports
          locator: 条文：之子/之女
          quotation: 王鉴，琅邪临沂人，王导曾孙，王默之子，王惠的哥哥
          interpretation_note: null
          source:
            id: s_bK7oufbRA87KgyNBTowhA8
            source_type: website
            title: 中文维基百科：王鉴 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B4_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.309Z
            metadata_json: null
        - id: cs_LgZZBZTprhgu8e38LDmFQx
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王鉴
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
        - id: cs_YGMmMRh5WGBdqGxQEyKAw4
          claim_id: c_e897j8vWYaHCv6vckg9WVJ
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王默 → 王鉴
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
        id: p_VHfRqeB4dmvKQorKeVs6u9
        status: active
        display_name: 王默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7QU6Z1r2Y9XiyRPQ11ZZet
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8xExKTVsKRwEokJKyXDGa4
          claim_id: c_7QU6Z1r2Y9XiyRPQ11ZZet
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：条文识读（孫）（2世）
          quotation: 孫王鑑
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_Dh9CnuPaa166GMCnTFvEL4
        status: active
        display_name: 王士骐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鉴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鉴，史料所见人物。本项目依据《王鉴 (刘宋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鉴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VHfRqeB4dmvKQorKeVs6u9 | 王默 | accepted |
| ancestors | p_Dh9CnuPaa166GMCnTFvEL4 | 王士骐 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王鉴 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B4_(%E5%88%98%E5%AE%8B))
- [中文维基百科：王士騏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F)
