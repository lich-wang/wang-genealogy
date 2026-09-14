---
schema: wang-person/v1
id: p_Tz35VynAtU3PBPbA9NGrgV
status: active
merged_into: null
display_name: 王会
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6lh8oVoazDHP1QMuIwHyGq
        subject_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會，西晉琅邪臨沂人，王導從弟王舒之父，官至侍御史（《晉書·卷七十六·王舒傳》：父會，侍御史）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_jKlpkXsWtcGEo5NpNwAmgb
          claim_id: c_6lh8oVoazDHP1QMuIwHyGq
          source_id: s_evegpqenfps8ZxxKB_hgzY
          stance: supports
          locator: 晉書/卷076·王会
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_evegpqenfps8ZxxKB_hgzY
            source_type: website
            title: 维基文库：晉書/卷076·王会
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/晉書/卷076
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_PdFBC2S5g_cChYXCE9Tv_u
          claim_id: c_6lh8oVoazDHP1QMuIwHyGq
          source_id: s_Z2j9zDLjM5J19yfc96E5Ku
          stance: supports
          locator: Q22814788
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Z2j9zDLjM5J19yfc96E5Ku
            source_type: api_record
            title: 维基数据：王会（Q22814788）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814788
            external_identifier: Q22814788
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.887Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NYFJQVL3QdPBWCDNc1iF9n
        subject_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王会
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DLbS6WR81thFyabVn93CMa
          claim_id: c_NYFJQVL3QdPBWCDNc1iF9n
          source_id: s_Z2j9zDLjM5J19yfc96E5Ku
          stance: supports
          locator: Q22814788
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_12Lvbt4bPdQ6Q38a1M43jX
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mXBD2H11ypa1VMjpSx8Z3w
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_fsjtxzP2W1VESx6nADFr1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fsjtxzP2W1VESx6nADFr1c
            source_type: api_record
            title: 维基数据：王览（Q15907839）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15907839
            external_identifier: Q15907839
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:48.059Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A6%BD
        - id: cs_dgBBdz6uxm3LBUnUbAhGEQ
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_Z2j9zDLjM5J19yfc96E5Ku
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z2j9zDLjM5J19yfc96E5Ku
            source_type: api_record
            title: 维基数据：王会（Q22814788）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814788
            external_identifier: Q22814788
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.887Z
            metadata_json: null
        - id: cs_saEsVr4QeP8Zp3kR1qgPD9
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_XygEmVEKkyQtyhZygSfuMg
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_U83To5MtnMy9ACuvxoK7J7
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_wvcrKUbKtci5qowT3y9rYV
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_NyeqWFifJx67ihUW6mnNH1
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王会 (晋)
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
        - id: cs_H5XTJBAXGB4WHXYS965v6w
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王会 (晋)
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
        - id: cs_jNSmvPRjktGzGMBs1RULr4
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_F7g36KJH2QHJ1fMD9sCvAJ
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览三子
          quotation: 王会，王览三子，晋侍御史。
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
        - id: cs_dFPBXEFQv1dR9HTaWM8hKw
          claim_id: c_12Lvbt4bPdQ6Q38a1M43jX
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 六子：栽、基、會、正、彥、琛。
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
        id: p_FLFcPPEXByru3j5c6vxzPG
        status: active
        display_name: 王览
        merged_into_person_id: null
  children:
    - claim:
        id: c_44k9Z6zB37JDg1KyyP4uMh
        subject_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPvhBTHXTUdjsZjL2YbGrj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A81eQBNszdKVJL2VfLi3pb
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_Z2j9zDLjM5J19yfc96E5Ku
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z2j9zDLjM5J19yfc96E5Ku
            source_type: api_record
            title: 维基数据：王会（Q22814788）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814788
            external_identifier: Q22814788
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.887Z
            metadata_json: null
        - id: cs_eXBpwsrh8xQu9W2VH14Grr
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_vAYV6TeVu5eKmtw2VugJjB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vAYV6TeVu5eKmtw2VugJjB
            source_type: api_record
            title: 维基数据：王舒（Q15912173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912173
            external_identifier: Q15912173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:35.378Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%92
        - id: cs_88Es4235AF46w1ayLxuUEv
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        - id: cs_rerWnXnawFKU7vUcLLwLVG
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        - id: cs_SSdnD4DrCw43ZuE7KTi6VB
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        - id: cs_84EVyuKJVMkQax1fnS6wiz
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        - id: cs_Tj1qeoXKpAu97Kk6NZXuc9
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        - id: cs_h5DmNhCBT27aauPZt3zoBL
          claim_id: c_44k9Z6zB37JDg1KyyP4uMh
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王舒
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
        id: p_LPvhBTHXTUdjsZjL2YbGrj
        status: active
        display_name: 王舒
        merged_into_person_id: null
    - claim:
        id: c_LgcharDdMgGcrGvBJAD6Pm
        subject_person_id: p_Tz35VynAtU3PBPbA9NGrgV
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_eWW8HxBCnuCzNvCKh9qqgh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xF4YKQz4gZ2kVeC4GYfdrH
          claim_id: c_LgcharDdMgGcrGvBJAD6Pm
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王邃
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
        - id: cs_ABHHL5DFM1t34G35PHVg9F
          claim_id: c_LgcharDdMgGcrGvBJAD6Pm
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王邃
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
        - id: cs_Ut6tuUiGZiUmsEQo4B4E29
          claim_id: c_LgcharDdMgGcrGvBJAD6Pm
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王邃
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
        - id: cs_iyzhAsBVy4EyKvwqhdxwtF
          claim_id: c_LgcharDdMgGcrGvBJAD6Pm
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王邃
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
        - id: cs_JQCT2ZY9TqyJ8u4F3zPXRF
          claim_id: c_LgcharDdMgGcrGvBJAD6Pm
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王邃
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
        id: p_eWW8HxBCnuCzNvCKh9qqgh
        status: active
        display_name: 王邃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王会

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王會，西晉琅邪臨沂人，王導從弟王舒之父，官至侍御史（《晉書·卷七十六·王舒傳》：父會，侍御史）。 | accepted |
| name.primary | 王会 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |
| children | p_LPvhBTHXTUdjsZjL2YbGrj | 王舒 | accepted |
| children | p_eWW8HxBCnuCzNvCKh9qqgh | 王邃 | accepted |

## 外部来源

- [维基数据：王会（Q22814788）](https://www.wikidata.org/wiki/Q22814788)
- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [维基数据：王舒（Q15912173）](https://www.wikidata.org/wiki/Q15912173)
- [维基文库：晉書/卷076·王会](https://zh.wikisource.org/wiki/晉書/卷076)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
