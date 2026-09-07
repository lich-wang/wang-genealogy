---
schema: wang-person/v1
id: p_nfxiEaLGQRDqhPzVhYQwfv
status: active
merged_into: null
display_name: 王應
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zgf7Yx61OkAJzemdgz8aAk
        subject_person_id: p_nfxiEaLGQRDqhPzVhYQwfv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應，史料所见人物。本项目依据《琅邪王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oZH2cG8HPHSMTKC3iiPalC
          claim_id: c_Zgf7Yx61OkAJzemdgz8aAk
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nD242GdAUKhBDMGhYR751a
        subject_person_id: p_nfxiEaLGQRDqhPzVhYQwfv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iPKAeGqBx3zVsJP6GmMfcX
          claim_id: c_nD242GdAUKhBDMGhYR751a
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: 库内原有的「王应」记录身份来自维基数据 Q45663434 与 CBDB 175502，即唐代王源中之子王應。东晋王應（字安期，征東將軍王含之子，叔父王敦無子以之為嗣子，王敦之乱后与父同被溺死）是另一人，相隔五百余年。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V3gs3GZ9vNpq4W2dwDUa6T
        subject_person_id: p_5Xg43MeoSc4vLaZEiTQBL1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nfxiEaLGQRDqhPzVhYQwfv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7EGGmTqjFyJNJP2hQ8iBXm
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_CcrE3ZMP8aW7tJMM6N8PBm
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_DQAq9bVqjbYiGeFjcpb7Cy
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_R4mgAvk7hWLXT8GiKiWLkh
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_hdLfF8Yb7cWRJwXjt1WwFg
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_j96PDTKd7kY3PTUuKub6ko
          claim_id: c_V3gs3GZ9vNpq4W2dwDUa6T
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王应
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
      object_person:
        id: p_5Xg43MeoSc4vLaZEiTQBL1
        status: active
        display_name: 王含
        merged_into_person_id: null
  children: []
  adoptive_parents:
    - claim:
        id: c_yxpN9uCnccRB5uwfNqnBEf
        subject_person_id: p_9RT3J3AUTk6Cgprd7z985c
        claim_kind: relationship
        predicate: kinship.adoptive_parent_of
        object_person_id: p_nfxiEaLGQRDqhPzVhYQwfv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EXECwLoSaDm6VA4Fkc2sUC
          claim_id: c_yxpN9uCnccRB5uwfNqnBEf
          source_id: s_THfcg41hmf2S8GWT9LJ5Dn
          stance: supports
          locator: 条文：养子
          quotation: 又以養子，即王含之子王應為武衞將軍作為自己副手及繼承人。
          interpretation_note: null
          source:
            id: s_THfcg41hmf2S8GWT9LJ5Dn
            source_type: website
            title: 中文维基百科：王敦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王敦
            external_identifier: Q712016
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_PnK4KGJ8vxT6ABUx8gTMFb
          claim_id: c_yxpN9uCnccRB5uwfNqnBEf
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 王敦 → 王应
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
        - id: cs_irP77MvcB9LfuN7bkTJzLF
          claim_id: c_yxpN9uCnccRB5uwfNqnBEf
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王敦 → 王应
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
      object_person:
        id: p_9RT3J3AUTk6Cgprd7z985c
        status: active
        display_name: 王敦
        merged_into_person_id: null
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應，史料所见人物。本项目依据《琅邪王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王應 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5Xg43MeoSc4vLaZEiTQBL1 | 王含 | accepted |
| adoptive_parents | p_9RT3J3AUTk6Cgprd7z985c | 王敦 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王敦](https://zh.wikipedia.org/wiki/王敦)
