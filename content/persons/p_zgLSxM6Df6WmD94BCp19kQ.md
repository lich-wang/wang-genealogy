---
schema: wang-person/v1
id: p_zgLSxM6Df6WmD94BCp19kQ
status: active
merged_into: null
display_name: 王正
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PMrYweAKmZUeu3KMcDoVxC
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正，西晉琅邪臨沂人，王覽之子、王廙之父，官至尚書郎（《晉書·卷七十六·王廙傳》：父正，尚書郎）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Y5qiyT3mkBg6jvkSHneGfn
          claim_id: c_PMrYweAKmZUeu3KMcDoVxC
          source_id: s_evegpqenfps8ZxxKB_hgzY
          stance: supports
          locator: 晉書/卷076·王正
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_evegpqenfps8ZxxKB_hgzY
            source_type: website
            title: 维基文库：晉書/卷076·王正
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/晉書/卷076
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_XvbkhugdsQWZ4xhOzv_uTB
          claim_id: c_PMrYweAKmZUeu3KMcDoVxC
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: Q22814789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fECs5BS5hcnQpFt5qTL2Fh
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZJ3A6GK3XM9fBuh5cACZ5q
          claim_id: c_fECs5BS5hcnQpFt5qTL2Fh
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: Q22814789
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GShnEMGZEknG4wmPjPPHHo
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9a1AR3eMsH8Q2nke4Kr9PA
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_kqxAwLLP2Aj99oSg7Ntt3M
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kqxAwLLP2Aj99oSg7Ntt3M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正（25791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json
            external_identifier: CBDB:25791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:37.109Z
            metadata_json: null
        - id: cs_UXoB365h1LcV3Lqzi9hU8S
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_V75THYUZfYFBgEwHVGSrj6
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
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
        - id: cs_AvUacjExTBU2BpvAx532HX
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_swnKf3JBpuyif9tNQ2HSSs
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_swnKf3JBpuyif9tNQ2HSSs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王覽（25786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json
            external_identifier: CBDB:25786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:48.196Z
            metadata_json: null
        - id: cs_rkRrkW8sd7JFiztSBZfvk9
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_JscizbF528nLg1X7CymgdA
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_fHDcN4fkroKAj9gkrcmTE2
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_t7Roe1DbYaec1E3uXFQx6W
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_45LLv4angUWScWDBSE9K86
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王正
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
        - id: cs_BMQFAuSqfToN8oVY1qgH8r
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王正
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
        - id: cs_3UL59B8LRZdgWfwzKRuf9L
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_AYzGX1qY1AYNGgK6toTccT
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览四子
          quotation: 王正，王览四子，晋尚书郎。
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
        - id: cs_1FP5oDA1V8yoh1RUK94RDJ
          claim_id: c_GShnEMGZEknG4wmPjPPHHo
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
        id: c_579jeu1vxVqGik6adq9kUi
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_svvmSXELHxu1dgtCxnAmuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WZD5NWdHcLYGEDCbQ2W3dA
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_emFD4dG96sXcGpNr96MCWz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_emFD4dG96sXcGpNr96MCWz
            source_type: website
            title: 中文维基百科：王曠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王曠
            external_identifier: Q22814790
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_QfsyPEQw5eZwaHi2jvZMuG
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_5V2XJ8Xzw7QY26fNr8MXSS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5V2XJ8Xzw7QY26fNr8MXSS
            source_type: api_record
            title: 維基數據：王曠（Q22814790）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814790
            external_identifier: Q22814790
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:35.742Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9B%A0
        - id: cs_84nTYz59zqNCgU2RhZp2L4
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_1uaiTdV69pHRsQnSrugo4i
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_xUKpvE7ee83xcSwLSANkBp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_xUKpvE7ee83xcSwLSANkBp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王曠（25792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25792&o=json
            external_identifier: CBDB:25792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:23.558Z
            metadata_json: null
        - id: cs_iU9eLqee3AwEMHBMBHSvw8
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_kqxAwLLP2Aj99oSg7Ntt3M
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kqxAwLLP2Aj99oSg7Ntt3M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正（25791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json
            external_identifier: CBDB:25791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:37.109Z
            metadata_json: null
        - id: cs_6TpwiPqnrsGcUCg98Fq1LU
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        - id: cs_1DB26MKg5CdbCbQNZ4NEYC
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        - id: cs_Jx8TgQcMnfxEpJNcv57c3m
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        - id: cs_NxbS3TgCCzmob1f1vyQ2Mu
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        - id: cs_x9QqRJncS9YS2BL8HMwGs2
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王正 → 王曠
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
        - id: cs_sN1y7ZZy3BYMJMcqga3VxR
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王正 → 王曠
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
        - id: cs_oQywzfJmk2fTFv94DRBnDm
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        - id: cs_144GM4eT721z2NCBZzt1mj
          claim_id: c_579jeu1vxVqGik6adq9kUi
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王旷
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
        id: p_svvmSXELHxu1dgtCxnAmuM
        status: active
        display_name: 王曠
        merged_into_person_id: null
    - claim:
        id: c_rfVrv5fmfLAcx2hjvG4Bnn
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R5y82s3r8Ph6RksxdRRR99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pJf4c9wZPNVFXwwQj3G79W
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_awR4tCHNHAcZ9HiPi8KoYG
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_5zZBDLAG1rfqJgJdv7jp1K
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彬
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
        id: p_R5y82s3r8Ph6RksxdRRR99
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_DoXP2jKssVPD5iDgHNP3sb
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b9xZoiiuBPoW8L2RzpVVCo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JzsLTprcY7e3tJSAfAYyg7
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_kqxAwLLP2Aj99oSg7Ntt3M
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kqxAwLLP2Aj99oSg7Ntt3M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正（25791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json
            external_identifier: CBDB:25791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:37.109Z
            metadata_json: null
        - id: cs_VG99o32iAjbCA6MAXpeatw
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_SiQMY27b4kCfSt7i7B4VMF
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_SFuhPkjgMH7UeWM99KjEjG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SFuhPkjgMH7UeWM99KjEjG
            source_type: api_record
            title: 维基数据：王廙（Q15911516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15911516
            external_identifier: Q15911516
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:50.988Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%99
        - id: cs_iWVDrFa6wH4Wa5CvGBzVJF
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_QT63YvTeLcMe92WmNdtDzy
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_QT63YvTeLcMe92WmNdtDzy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廙（25806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25806&o=json
            external_identifier: CBDB:25806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:51.125Z
            metadata_json: null
        - id: cs_etYb52AGXFL3e5YKrF7uL9
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        - id: cs_69uUqVgqQPkEZi1ok3L3bV
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        - id: cs_PyX56hjpyWizXba3cCTVck
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        - id: cs_BasKFZPifoRoAvxDESK7DV
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        - id: cs_foGtQG35jVhAnNf1RhQC1q
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        - id: cs_gRo6MN7zTNeHFQPAwfU6iE
          claim_id: c_DoXP2jKssVPD5iDgHNP3sb
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王廙
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
        id: p_b9xZoiiuBPoW8L2RzpVVCo
        status: active
        display_name: 王廙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正，西晉琅邪臨沂人，王覽之子、王廙之父，官至尚書郎（《晉書·卷七十六·王廙傳》：父正，尚書郎）。 | accepted |
| name.primary | 王正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |
| children | p_svvmSXELHxu1dgtCxnAmuM | 王曠 | accepted |
| children | p_R5y82s3r8Ph6RksxdRRR99 | 王彬 | accepted |
| children | p_b9xZoiiuBPoW8L2RzpVVCo | 王廙 | accepted |

## 外部来源

- [维基数据：王彬（Q15909509）](https://www.wikidata.org/wiki/Q15909509)
- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [维基数据：王廙（Q15911516）](https://www.wikidata.org/wiki/Q15911516)
- [维基文库：晉書/卷076·王正](https://zh.wikisource.org/wiki/晉書/卷076)
- [維基數據：王曠（Q22814790）](https://www.wikidata.org/wiki/Q22814790)
- [維基數據：王正（Q22814789）](https://www.wikidata.org/wiki/Q22814789)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王曠](https://zh.wikipedia.org/wiki/王曠)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王曠（25792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25792&o=json)
- [CBDB 中国历代人物传记资料库：王覽（25786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25786&o=json)
- [CBDB 中国历代人物传记资料库：王廙（25806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25806&o=json)
- [CBDB 中国历代人物传记资料库：王正（25791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25791&o=json)
