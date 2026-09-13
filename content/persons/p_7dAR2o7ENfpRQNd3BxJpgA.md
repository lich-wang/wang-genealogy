---
schema: wang-person/v1
id: p_7dAR2o7ENfpRQNd3BxJpgA
status: active
merged_into: null
display_name: 王协
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WiDAwJZB1TF28PVWQNTzMQ
        subject_person_id: p_7dAR2o7ENfpRQNd3BxJpgA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王协（？—？），字敬祖，琅邪临沂人，王导第四子，王悦、王恬、王洽的弟弟，王劭、王荟的哥哥。王协任晋元帝抚军参军，承袭父亲的爵位武冈侯，早年去世，没有儿子，以弟弟王劭的儿子王謐为嗣子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 8
      sources:
        - id: cs_2nWNIYrDLnMRXuBFCXGlBp
          claim_id: c_WiDAwJZB1TF28PVWQNTzMQ
          source_id: s_3TSuAUcd14Gdu44q-w5M35
          stance: supports
          locator: 导言
          quotation: 王协（？—？），字敬祖，琅邪临沂人，王导第四子，王悦、王恬、王洽
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_3TSuAUcd14Gdu44q-w5M35
            source_type: website
            title: 中文维基百科：王协 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B)
            external_identifier: Q16905932
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_JMSiFbXVud9ELCbntP9Vce
        subject_person_id: p_7dAR2o7ENfpRQNd3BxJpgA
        claim_kind: property
        predicate: historical.period
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 东晋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJ9QhJSECb63ra2J1oYzsC
          claim_id: c_JMSiFbXVud9ELCbntP9Vce
          source_id: s_9qeKynCJhBZDivp5GWzynh
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_9qeKynCJhBZDivp5GWzynh
            source_type: api_record
            title: 維基數據：王协（Q16905932）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905932
            external_identifier: Q16905932
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:09.321Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7hw2xTh7i35pv3vPuSWjN
        subject_person_id: p_7dAR2o7ENfpRQNd3BxJpgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王协
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_st5kBtJnBANrWRiggt9mRp
          claim_id: c_N7hw2xTh7i35pv3vPuSWjN
          source_id: s_9qeKynCJhBZDivp5GWzynh
          stance: supports
          locator: Q16905932
          quotation: null
          interpretation_note: null
          source:
            id: s_9qeKynCJhBZDivp5GWzynh
            source_type: api_record
            title: 維基數據：王协（Q16905932）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905932
            external_identifier: Q16905932
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:09.321Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h9dveZvEsEv71KXXN8wxvx
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7dAR2o7ENfpRQNd3BxJpgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SHG3GxGoJFHuDEy65cL9qZ
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_ZAm91q8ts6LtYjrmAiQGNG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAm91q8ts6LtYjrmAiQGNG
            source_type: website
            title: 中文维基百科：王導
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王導
            external_identifier: Q3274914
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_vx9r2VCtjuq4CdT5PxHUSK
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_FRo67ZrNmc5pka5csQaFUo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FRo67ZrNmc5pka5csQaFUo
            source_type: api_record
            title: 維基數據：王導（Q3274914）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q3274914
            external_identifier: Q3274914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:40.794Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%8E
        - id: cs_FCNH7T9JUYzDnHgwdQimmK
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_9qeKynCJhBZDivp5GWzynh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9qeKynCJhBZDivp5GWzynh
            source_type: api_record
            title: 維基數據：王协（Q16905932）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905932
            external_identifier: Q16905932
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:09.321Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B)
        - id: cs_tdCx9RYQncHi18kLrTd79E
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_4vVMgkcSUDubzghJWjDJUq
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_Xkht7qUmqNb97Bs8nP9rge
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_zGedbgGd8mGKeFUwwZf3yX
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_fJ6HNXmfWhU41ehzvYbES4
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王协
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
        - id: cs_HNGcPwLbu2cRsQp5MvsKw4
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王协
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
        - id: cs_8tQpdMDoaR8CA45Vn8naT1
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_Q4qZ7Zo1VUM8HCc3hePH3c
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王协
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
        - id: cs_C64SjJ8BE1EYWZ2qYzXH9k
          claim_id: c_h9dveZvEsEv71KXXN8wxvx
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：悅、恬、劭、洽、協、薈。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children:
    - claim:
        id: c_j639jzAvu8QjYfF69yipja
        subject_person_id: p_7dAR2o7ENfpRQNd3BxJpgA
        claim_kind: relationship
        predicate: kinship.adoptive_parent_of
        object_person_id: p_4DPX9WczBMafdh2C9FWaf3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Wt8TTyxEzAT35qTrRi5No
          claim_id: c_j639jzAvu8QjYfF69yipja
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 王协 → 王谧
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
        - id: cs_F9h9GLtLcCR2SFtn24DJWf
          claim_id: c_j639jzAvu8QjYfF69yipja
          source_id: s_uYXTUKM1kgfpCnR6jKGv5o
          stance: supports
          locator: 条文：子
          quotation: 王协任晋元帝抚军参军，承袭父亲的爵位武冈侯，早年去世，没有儿子，以弟弟王劭的儿子王謐为嗣子
          interpretation_note: null
          source:
            id: s_uYXTUKM1kgfpCnR6jKGv5o
            source_type: website
            title: 中文维基百科：王协 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:16.210Z
            metadata_json: null
        - id: cs_g8ioTC2Wg6tsqgrAxfvVvR
          claim_id: c_j639jzAvu8QjYfF69yipja
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 王协 → 王谧
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
        id: p_4DPX9WczBMafdh2C9FWaf3
        status: active
        display_name: 王謐
        merged_into_person_id: null
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王协

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王协（？—？），字敬祖，琅邪临沂人，王导第四子，王悦、王恬、王洽的弟弟，王劭、王荟的哥哥。王协任晋元帝抚军参军，承袭父亲的爵位武冈侯，早年去世，没有儿子，以弟弟王劭的儿子王謐为嗣子。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王协 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| adoptive_children | p_4DPX9WczBMafdh2C9FWaf3 | 王謐 | accepted |

## 外部来源

- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [維基數據：王协（Q16905932）](https://www.wikidata.org/wiki/Q16905932)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基百科：王协 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8F_(%E4%B8%9C%E6%99%8B))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
