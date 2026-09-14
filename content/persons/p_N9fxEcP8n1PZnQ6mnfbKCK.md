---
schema: wang-person/v1
id: p_N9fxEcP8n1PZnQ6mnfbKCK
status: active
merged_into: null
display_name: 王基
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwesxf1l49TgnAE8Zyo_id
        subject_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基，西晉琅邪臨沂人，王覽之子、王敦、王含之父，官至治書侍御史（《晉書·卷九十八·王敦傳》：父基，治書侍御史）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Qt0xj0kCXNUVLSn5suTBOq
          claim_id: c_bwesxf1l49TgnAE8Zyo_id
          source_id: s_23Y8WRj-WyLsrUGTt1EIaH
          stance: supports
          locator: 晉書/卷098·王基
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_23Y8WRj-WyLsrUGTt1EIaH
            source_type: website
            title: 维基文库：晉書/卷098·王基
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/晉書/卷098
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_NFjOJl0cBXRxFuWAUfdAI8
          claim_id: c_bwesxf1l49TgnAE8Zyo_id
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: Q22814890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gsH9CP8M4PeHH8kNKDGt1W
            source_type: api_record
            title: 維基數據：王基（Q22814890）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814890
            external_identifier: Q22814890
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:35.402Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_54U7cLtBMh1UeC599UKjw8
        subject_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U6nGF69igfxd2zGknVBAAb
          claim_id: c_54U7cLtBMh1UeC599UKjw8
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: Q22814890
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iMX1M5aTGBAf2eqm6GS3Yw
        subject_person_id: p_FLFcPPEXByru3j5c6vxzPG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Vb77iioCTPb85F2nPDE2iB
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gsH9CP8M4PeHH8kNKDGt1W
            source_type: api_record
            title: 維基數據：王基（Q22814890）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814890
            external_identifier: Q22814890
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:35.402Z
            metadata_json: null
        - id: cs_ww36NP2bBnVPqhc6r41ktJ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
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
        - id: cs_PKAq6CRcKstd2MPGEXzPYj
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_FD2V1k35MT83Au91uSQJSQ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_jCuQwUtpc2ELc6qz4bB8KH
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_FamVnMX6SR1P7Y3mud2q2E
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_yTSQN23SNH74dwWSdzFXSd
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王基
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
        - id: cs_gudgUFWbSX1ZzWnPqLxsvU
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王览 → 王基
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
        - id: cs_YHZKvqiutPRnNRn7eWdHB7
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_LH1BAKKPFv3Cnb3RUyp3RZ
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：王览次子
          quotation: 王基，王览次子，治书侍御史。
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
        - id: cs_9fPK1L2JALVnbgnM7Poeyh
          claim_id: c_iMX1M5aTGBAf2eqm6GS3Yw
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
        id: c_QtVMoYWEgsAj2mRLLuGQ9s
        subject_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9RT3J3AUTk6Cgprd7z985c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tFUdZC2Xrzdm1brGf8FcCC
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_THfcg41hmf2S8GWT9LJ5Dn
          stance: supports
          locator: null
          quotation: null
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
        - id: cs_Sox9K8MZJkFCi36q2baQdt
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_LQMHCJCSsKMLdn7oVaPHK8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LQMHCJCSsKMLdn7oVaPHK8
            source_type: api_record
            title: 維基數據：王敦（Q712016）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712016
            external_identifier: Q712016
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:56.681Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%A6
        - id: cs_vjN1uonooLqLRQmExNH7cN
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gsH9CP8M4PeHH8kNKDGt1W
            source_type: api_record
            title: 維基數據：王基（Q22814890）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814890
            external_identifier: Q22814890
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:35.402Z
            metadata_json: null
        - id: cs_uWP7Jek1WprKk3Mb7vwkPN
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        - id: cs_8HZetEvG7QFCViD4e13P9q
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        - id: cs_xxaCHK1rFBRE6UAEfvBZQB
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        - id: cs_Y9qUw1NUFcKVtcYyhUR1tP
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        - id: cs_GghwD2RCnFfj5pXQQ9mhF9
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王基 → 王敦
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
        - id: cs_rg6SUojvFoq2EEyAnvi6B6
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王基 → 王敦
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
        - id: cs_Wn6VdezfrT99AXcdEE3PLW
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        - id: cs_p3TjezdNz8HH7ELtZsxnA2
          claim_id: c_QtVMoYWEgsAj2mRLLuGQ9s
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王敦
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
        id: p_9RT3J3AUTk6Cgprd7z985c
        status: active
        display_name: 王敦
        merged_into_person_id: null
    - claim:
        id: c_JsNYxSda6om5rrDBwNa78G
        subject_person_id: p_N9fxEcP8n1PZnQ6mnfbKCK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Xg43MeoSc4vLaZEiTQBL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_T8P25vdvZuJ4c5zPjWSNHH
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_gsH9CP8M4PeHH8kNKDGt1W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gsH9CP8M4PeHH8kNKDGt1W
            source_type: api_record
            title: 維基數據：王基（Q22814890）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814890
            external_identifier: Q22814890
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:35.402Z
            metadata_json: null
        - id: cs_CKHqDELuDrhdfoHtSX7Wk5
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_CejZLTNwCu17F36CkKSRA6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CejZLTNwCu17F36CkKSRA6
            source_type: api_record
            title: 维基数据：王含（Q11049496）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11049496
            external_identifier: Q11049496
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:45.716Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%AB
        - id: cs_uDecCaMLGHAYRtCvgnpvKi
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        - id: cs_fCEjBG7NG3wPQJv8PBahM9
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        - id: cs_a7LBizKc8jvZHvCKABhATG
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        - id: cs_3qq3rZook6v5ZhWnitSELb
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        - id: cs_4LU6P4QMsjfoU6tfMXooju
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王基 → 王含
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
        - id: cs_EVpzuJvwQEb5t1wxjKC8By
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王基 → 王含
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
        - id: cs_285x49eTAskTM4Z6KwyT5K
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        - id: cs_3aGvHF3eum4j9fuFNu66HA
          claim_id: c_JsNYxSda6om5rrDBwNa78G
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王含
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
        id: p_5Xg43MeoSc4vLaZEiTQBL1
        status: active
        display_name: 王含
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王基，西晉琅邪臨沂人，王覽之子、王敦、王含之父，官至治書侍御史（《晉書·卷九十八·王敦傳》：父基，治書侍御史）。 | accepted |
| name.primary | 王基 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FLFcPPEXByru3j5c6vxzPG | 王览 | accepted |
| children | p_9RT3J3AUTk6Cgprd7z985c | 王敦 | accepted |
| children | p_5Xg43MeoSc4vLaZEiTQBL1 | 王含 | accepted |

## 外部来源

- [维基数据：王含（Q11049496）](https://www.wikidata.org/wiki/Q11049496)
- [维基数据：王览（Q15907839）](https://www.wikidata.org/wiki/Q15907839)
- [维基文库：晉書/卷098·王基](https://zh.wikisource.org/wiki/晉書/卷098)
- [維基數據：王敦（Q712016）](https://www.wikidata.org/wiki/Q712016)
- [維基數據：王基（Q22814890）](https://www.wikidata.org/wiki/Q22814890)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王敦](https://zh.wikipedia.org/wiki/王敦)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
