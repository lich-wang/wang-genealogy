---
schema: wang-person/v1
id: p_T4veML4NqsRATCKLcYV7WC
status: active
merged_into: null
display_name: 王劭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4HijhYCrRHRRdjkVo9227m
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭，东晋大臣。维基数据以独立条目 Q15924805 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QdUmFa-jK8K3hYAQkE2Iyw
          claim_id: c_4HijhYCrRHRRdjkVo9227m
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: Q15924805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_9M7iagKvf2MtuCpBjEBehG
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
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
        - id: cs_ed8kqLGfXtRSEprXrLvMjK
          claim_id: c_9M7iagKvf2MtuCpBjEBehG
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5CJw2Yux8BHUL87qLtH9Hy
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7vXbnEH9e9Geuh1utGCbgD
          claim_id: c_5CJw2Yux8BHUL87qLtH9Hy
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: Q15924805
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PvA2DQovh7GgNHfSpozMig
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T4veML4NqsRATCKLcYV7WC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Fw6igwEUC1S7RaS8sqnq9P
          claim_id: c_PvA2DQovh7GgNHfSpozMig
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
        - id: cs_5No4BwU6ak2Ns2jQcihJhc
          claim_id: c_PvA2DQovh7GgNHfSpozMig
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
        - id: cs_pA37SbVmnwKDP3XHpWGvNG
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_Us6VSiC1DS6vtEWFFnSqFx
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_okJJDVWP4i75PZVtKH8P1a
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_r3wNVAEasbUX3ar68r9ivX
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_TotWAHu9Rav98eXChYUv1Z
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_eBkzMUzfi9NNZcFAWBDLzy
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王劭
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
        - id: cs_ZLMKNLc3aVB11r2GZkJ64S
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王导 → 王劭
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
        - id: cs_QtBtMBqZi3oQMpcJJ7mMbu
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_nCzRa3sokiAKDUyjBeFPdA
          claim_id: c_PvA2DQovh7GgNHfSpozMig
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王劭
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
        - id: cs_RAQrNHVDTY1DVzv2PautzH
          claim_id: c_PvA2DQovh7GgNHfSpozMig
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
        id: c_bA4G8kXabTH7rkQG5B7zRd
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jDe8nWw8Wngg5N7p8i5ZFN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9ghnUAxAfc4rxNdSRAr16H
          claim_id: c_bA4G8kXabTH7rkQG5B7zRd
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_zWY41m4jK6PTxBkyxCbWfu
          claim_id: c_bA4G8kXabTH7rkQG5B7zRd
          source_id: s_9PW9Pxj2GJJD9YJqo7SZ69
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9PW9Pxj2GJJD9YJqo7SZ69
            source_type: api_record
            title: 维基数据：王恢（Q15896803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15896803
            external_identifier: Q15896803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:45.044Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%A2_(%E5%8F%B3%E5%8D%AB%E5%B0%86%E5%86%9B)
        - id: cs_HGFG6cB3zKtv7iNdn7gUP9
          claim_id: c_bA4G8kXabTH7rkQG5B7zRd
          source_id: s_wRHSvCgAXEK7QhAeiD7WCp
          stance: supports
          locator: 条文：之子/之女
          quotation: 王恢（{{bd|4世纪|？|？||catIdx=W}}），琅邪临沂人，王导之孙，王劭的儿子，王穆、王默、王谧的兄弟，在东晋官至右卫将军
          interpretation_note: null
          source:
            id: s_wRHSvCgAXEK7QhAeiD7WCp
            source_type: website
            title: 中文维基百科：王恢 (右卫将军)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%A2_(%E5%8F%B3%E5%8D%AB%E5%B0%86%E5%86%9B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:31.883Z
            metadata_json: null
        - id: cs_q7zLrFj5Axj7xykGbDwVE8
          claim_id: c_bA4G8kXabTH7rkQG5B7zRd
          source_id: s_6xPcx3Ys526qgbJCGQ5atW
          stance: supports
          locator: 条文：之子/之女
          quotation: 王恢，琅邪临沂人，王导之孙，王劭的儿子，王穆、王默、王谧的兄弟，在东晋官至右卫将军
          interpretation_note: null
          source:
            id: s_6xPcx3Ys526qgbJCGQ5atW
            source_type: website
            title: 中文维基百科：王恢 (右卫将军)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%A2_(%E5%8F%B3%E5%8D%AB%E5%B0%86%E5%86%9B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:19.725Z
            metadata_json: null
      object_person:
        id: p_jDe8nWw8Wngg5N7p8i5ZFN
        status: active
        display_name: 王恢
        merged_into_person_id: null
    - claim:
        id: c_sTBLFyVayDanEVzPXPRJox
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DPX9WczBMafdh2C9FWaf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ts2Yv5BzTw5gSmxK8ZFGNU
          claim_id: c_sTBLFyVayDanEVzPXPRJox
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_8qEPdi25nGcTvCERdBipF8
          claim_id: c_sTBLFyVayDanEVzPXPRJox
          source_id: s_RVKFY3VTTpRzBsCgZ4VPsL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RVKFY3VTTpRzBsCgZ4VPsL
            source_type: api_record
            title: 维基数据：王謐（Q15914878）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15914878
            external_identifier: Q15914878
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:52.744Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%AC%90
      object_person:
        id: p_4DPX9WczBMafdh2C9FWaf3
        status: active
        display_name: 王謐
        merged_into_person_id: null
    - claim:
        id: c_r6fUTAJTpo8VUczsb3k4AZ
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jULmSCiv1LjDM5RoAfW4D1
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_EBthTzY5nnizNTfs7BkGML
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MhrEW81MhUpnMoCHrMvtpH
            source_type: api_record
            title: 维基数据：王穆（Q16906171）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906171
            external_identifier: Q16906171
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:59.588Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A9%86
        - id: cs_iHJ6CM6y6xDRueNSPfTcsT
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
        - id: cs_HBH4A2X7Wz8L6kRhzDYFfL
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
        - id: cs_gdwNSCm9UyC5fq6z4U8H4a
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
        - id: cs_9SbTfYcm9CJTpMKMGhfWit
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
        - id: cs_p3UqW4auJ1dA8dTxyFygFk
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
        - id: cs_WrvkAv8x4NFYTjgm9ssKa6
          claim_id: c_r6fUTAJTpo8VUczsb3k4AZ
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王穆
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
      object_person:
        id: p_kQZ5bmU8mbAHk7K3zBAi1v
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_kfpKLjAUD8FFyRUZb5FWZi
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VHfRqeB4dmvKQorKeVs6u9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3PHJs5yVNa5zAaCE1NthhF
          claim_id: c_kfpKLjAUD8FFyRUZb5FWZi
          source_id: s_1JiRN6Tio7gTdVd3W5i1Qm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1JiRN6Tio7gTdVd3W5i1Qm
            source_type: api_record
            title: 維基數據：王劭（Q15924805）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924805
            external_identifier: Q15924805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:05.954Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%AD_(%E6%9D%B1%E6%99%89)
        - id: cs_KFfTqJhW5Qs6r5y5omr6Xe
          claim_id: c_kfpKLjAUD8FFyRUZb5FWZi
          source_id: s_Q9cdzP7P4drQ2aN5ZutLLx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Q9cdzP7P4drQ2aN5ZutLLx
            source_type: api_record
            title: 维基数据：王默（Q22814761）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814761
            external_identifier: Q22814761
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:11.598Z
            metadata_json: null
      object_person:
        id: p_VHfRqeB4dmvKQorKeVs6u9
        status: active
        display_name: 王默
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_AvrPDToKyNtjWNt91p8VMD
        subject_person_id: p_T4veML4NqsRATCKLcYV7WC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nk3Uu4qJG5TXi8Kt3D31CD
          claim_id: c_AvrPDToKyNtjWNt91p8VMD
          source_id: s_XFJLFL4hF6L1oFiYiPAdvf
          stance: supports
          locator: 条文：条文识读（孙）（3世）
          quotation: 王智是東晉丞相王導曾孫，王劭的孙子，父親是臨海太守王穆。
          interpretation_note: null
          source:
            id: s_XFJLFL4hF6L1oFiYiPAdvf
            source_type: website
            title: 中文维基百科：王智 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:15.366Z
            metadata_json: null
      object_person:
        id: p_NQMsobn1i97iSnDmQ7jKnW
        status: active
        display_name: 王智
        merged_into_person_id: null
  other: []
---

# 王劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王劭，东晋大臣。维基数据以独立条目 Q15924805 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王劭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| children | p_jDe8nWw8Wngg5N7p8i5ZFN | 王恢 | accepted |
| children | p_4DPX9WczBMafdh2C9FWaf3 | 王謐 | accepted |
| children | p_kQZ5bmU8mbAHk7K3zBAi1v | 王穆 | accepted |
| children | p_VHfRqeB4dmvKQorKeVs6u9 | 王默 | accepted |
| descendants | p_NQMsobn1i97iSnDmQ7jKnW | 王智 | accepted |

## 外部来源

- [维基数据：王恢（Q15896803）](https://www.wikidata.org/wiki/Q15896803)
- [维基数据：王謐（Q15914878）](https://www.wikidata.org/wiki/Q15914878)
- [维基数据：王默（Q22814761）](https://www.wikidata.org/wiki/Q22814761)
- [维基数据：王穆（Q16906171）](https://www.wikidata.org/wiki/Q16906171)
- [維基數據：王導（Q3274914）](https://www.wikidata.org/wiki/Q3274914)
- [維基數據：王劭（Q15924805）](https://www.wikidata.org/wiki/Q15924805)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王導](https://zh.wikipedia.org/wiki/王導)
- [中文维基百科：王恢 (右卫将军)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%A2_(%E5%8F%B3%E5%8D%AB%E5%B0%86%E5%86%9B))
- [中文维基百科：王智 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
