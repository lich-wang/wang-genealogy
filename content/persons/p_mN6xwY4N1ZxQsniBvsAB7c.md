---
schema: wang-person/v1
id: p_mN6xwY4N1ZxQsniBvsAB7c
status: active
merged_into: null
display_name: 王薈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VH679UdGtC51i7Ciz4C4m4
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薈，东晋大臣。维基数据以独立条目 Q15921815 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uCZAVQMRrtdijt3UcNg2oj
          claim_id: c_VH679UdGtC51i7Ciz4C4m4
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: Q15921815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_3Loy4ybKVu8p4F9Br8WAfC
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
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
        - id: cs_8qhx9Q2tzhBkLmPNGh53Hf
          claim_id: c_3Loy4ybKVu8p4F9Br8WAfC
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcu7UhjsPdPCG9mK5fE1e6
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Jt1aRmE7kGtS19qa95uiB5
          claim_id: c_hcu7UhjsPdPCG9mK5fE1e6
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: Q15921815
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i4kWK3L9F743Wc3s6t5BW8
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kodj1F98sQznNdfuP3FNEc
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
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
        - id: cs_CrXMkb34tZoqQ7TbLeX3vi
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
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
        - id: cs_pGQCADHSMMyD21t73xxuoU
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
        - id: cs_A36K4g4gbK551uiLp3oAqK
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_VHKRX7HoKgnN6Jf4DWpfw2
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_Q2G1rj3wnhV8sBmgkVtHXz
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_G2mPaVQYGLFx8g2TQbMvdQ
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_b4E7vyDQ38YJjbqyuLaJ15
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王荟
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
        - id: cs_4RKBCQKpTs1AWAKJdSsEB7
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王荟
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
        - id: cs_MTsYoBtb8FjkAQNTh4q2mU
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_ec8MTcJXGqNyb1QX3Ptcwn
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王荟
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
        - id: cs_MwMPggGQ1n147Qt9SEVLB8
          claim_id: c_i4kWK3L9F743Wc3s6t5BW8
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
  children:
    - claim:
        id: c_hoAx74Vh44Rn9D8AM4zBQz
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7fe5vND92AGDntmCCHPH3k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KZP8GCQRHFj4JfGQE5rqB5
          claim_id: c_hoAx74Vh44Rn9D8AM4zBQz
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
        - id: cs_5sH383sXKpdSDQZUNtpCQP
          claim_id: c_hoAx74Vh44Rn9D8AM4zBQz
          source_id: s_rojxgG2YrTFGQAfRUD1Q66
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_rojxgG2YrTFGQAfRUD1Q66
            source_type: api_record
            title: 维基数据：王怿（Q18118173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118173
            external_identifier: Q18118173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:02.510Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%80%BF
      object_person:
        id: p_7fe5vND92AGDntmCCHPH3k
        status: active
        display_name: 王怿
        merged_into_person_id: null
    - claim:
        id: c_vWsPhNuXeGgjTBJPjaKD2A
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UW4xRPK7vkbB2saX4K7G3Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sP4TaWc6hqN6Awbxp6KtgK
          claim_id: c_vWsPhNuXeGgjTBJPjaKD2A
          source_id: s_HkF6qnPuHvXQsX5bs81RBm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkF6qnPuHvXQsX5bs81RBm
            source_type: api_record
            title: 維基數據：王薈（Q15921815）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15921815
            external_identifier: Q15921815
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:04.922Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%96%88
        - id: cs_apiLVddvkJYqLTNiZS8tUN
          claim_id: c_vWsPhNuXeGgjTBJPjaKD2A
          source_id: s_1NXXuebmmX2qGQYbP9ULDx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1NXXuebmmX2qGQYbP9ULDx
            source_type: api_record
            title: 维基数据：王廞（Q22814780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814780
            external_identifier: Q22814780
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:12.228Z
            metadata_json: null
      object_person:
        id: p_UW4xRPK7vkbB2saX4K7G3Q
        status: active
        display_name: 王廞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_eZqyUqd545A3Rx3bFJyJw1
        subject_person_id: p_mN6xwY4N1ZxQsniBvsAB7c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_boXUQkMyfs89398G3m7gdq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fBf2z9rksfgcXNu8jfBn96
          claim_id: c_eZqyUqd545A3Rx3bFJyJw1
          source_id: s_LW4EjP3m67UhoEtxkP7co8
          stance: supports
          locator: 条文：条文识读（祖）（3世）
          quotation: 王琨是東晉太傅、丞相王導曾孫；王導六子追贈衞將軍王薈之孫。
          interpretation_note: null
          source:
            id: s_LW4EjP3m67UhoEtxkP7co8
            source_type: website
            title: 中文维基百科：王琨 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%A8_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:27.699Z
            metadata_json: null
      object_person:
        id: p_boXUQkMyfs89398G3m7gdq
        status: active
        display_name: 王琨
        merged_into_person_id: null
  other: []
---

# 王薈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王薈，东晋大臣。维基数据以独立条目 Q15921815 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王薈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| children | p_7fe5vND92AGDntmCCHPH3k | 王怿 | accepted |
| children | p_UW4xRPK7vkbB2saX4K7G3Q | 王廞 | accepted |
| descendants | p_boXUQkMyfs89398G3m7gdq | 王琨 | accepted |

## 外部来源

- [维基数据：王廞（Q22814780）](https://www.wikidata.org/wiki/Q22814780)
- [维基数据：王怿（Q18118173）](https://www.wikidata.org/wiki/Q18118173)
- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [維基數據：王薈（Q15921815）](https://www.wikidata.org/wiki/Q15921815)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基百科：王琨 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%A8_(%E5%8D%97%E6%9C%9D))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
