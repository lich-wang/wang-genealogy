---
schema: wang-person/v1
id: p_kQZ5bmU8mbAHk7K3zBAi1v
status: active
merged_into: null
display_name: 王穆
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMJS7Cy6K1ivAvAgDYKnV9
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆，东晋大臣。维基数据以独立条目 Q16906171 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tbvq9rDBMcXFZJhlsHKiU8
          claim_id: c_HMJS7Cy6K1ivAvAgDYKnV9
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: Q16906171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: historical.period
    recommended:
      claim:
        id: c_wercNnWM6QJe55FuD13ETr
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
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
        - id: cs_EJVFPXkir2WXKdEPEuDN33
          claim_id: c_wercNnWM6QJe55FuD13ETr
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: 人物简介中的朝代／时期表述
          quotation: null
          interpretation_note: 从同一来源支持的简介摘取：东晋大臣
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3XHGHPeR1QMM18AUQi8ZW
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_21Kdne8qAEXR3C43QeKabR
          claim_id: c_p3XHGHPeR1QMM18AUQi8ZW
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: Q16906171
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_T4veML4NqsRATCKLcYV7WC
        status: active
        display_name: 王劭
        merged_into_person_id: null
  children:
    - claim:
        id: c_yX5MsJLv7KFv2hMAntzric
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cB6JSrdN36Brw6H7HcH5N5
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
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
        - id: cs_3yowahm6o6MU4USHDQwqMD
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_mmF6RvWtnMVW94oB7N5Vba
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mmF6RvWtnMVW94oB7N5Vba
            source_type: api_record
            title: 维基数据：王简（Q16906176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906176
            external_identifier: Q16906176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:52.143Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
        - id: cs_wH9wMPHzGhC1yqMX4QJYhw
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王简
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
        - id: cs_dFZ1C8C6av2rDVxdGD81Wr
          claim_id: c_yX5MsJLv7KFv2hMAntzric
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王简
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
        id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        status: active
        display_name: 王简
        merged_into_person_id: null
    - claim:
        id: c_eHiH2Cr7L4vjD8GcMdvmGx
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mimu7dhG8c6rJMSXNVr1AX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_33PMVstMfBaZLwhmQyQo6j
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
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
        - id: cs_GVDLv52FeTcX18Q3ZxJBGw
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_tRECYA2Y3T55ufFBUKqBcq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tRECYA2Y3T55ufFBUKqBcq
            source_type: api_record
            title: 维基数据：王僧朗（Q22814767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814767
            external_identifier: Q22814767
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.550Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E6%9C%97
        - id: cs_R43zXLX6XHKD43zqK6dfue
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王僧朗
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
        - id: cs_Rojr1hYzVNbFM8e4KQzAqt
          claim_id: c_eHiH2Cr7L4vjD8GcMdvmGx
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王僧朗
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
        id: p_Mimu7dhG8c6rJMSXNVr1AX
        status: active
        display_name: 王僧朗
        merged_into_person_id: null
    - claim:
        id: c_2tiKqWBu7xpsD4fDAjH8hP
        subject_person_id: p_kQZ5bmU8mbAHk7K3zBAi1v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NQMsobn1i97iSnDmQ7jKnW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uL713PSCE7VcEsUwNyR7Au
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_MhrEW81MhUpnMoCHrMvtpH
          stance: supports
          locator: P40（子女）
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
        - id: cs_7RwrE8rP1etHBDyBdwVc8W
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_98xU1J1Tc3r3THs5RBjF8P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_98xU1J1Tc3r3THs5RBjF8P
            source_type: api_record
            title: 维基数据：王智（Q94998004）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998004
            external_identifier: Q94998004
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:54.551Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D)
        - id: cs_JEqf8hCATT79qSRNkAWn7t
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_XFJLFL4hF6L1oFiYiPAdvf
          stance: supports
          locator: 条文：条文识读（父）
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
        - id: cs_JCxxD6MyMR2JPXULQv5CBF
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王智
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
        - id: cs_KfemEFebrTE78s7A9fv4YA
          claim_id: c_2tiKqWBu7xpsD4fDAjH8hP
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王穆 → 王智
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
        id: p_NQMsobn1i97iSnDmQ7jKnW
        status: active
        display_name: 王智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穆，东晋大臣。维基数据以独立条目 Q16906171 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| historical.period | 东晋 | accepted |
| name.primary | 王穆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T4veML4NqsRATCKLcYV7WC | 王劭 | accepted |
| children | p_iK3WXdBpAJ7UyPXRe1KsHJ | 王简 | accepted |
| children | p_Mimu7dhG8c6rJMSXNVr1AX | 王僧朗 | accepted |
| children | p_NQMsobn1i97iSnDmQ7jKnW | 王智 | accepted |

## 外部来源

- [维基数据：王简（Q16906176）](https://www.wikidata.org/wiki/Q16906176)
- [维基数据：王穆（Q16906171）](https://www.wikidata.org/wiki/Q16906171)
- [维基数据：王僧朗（Q22814767）](https://www.wikidata.org/wiki/Q22814767)
- [维基数据：王智（Q94998004）](https://www.wikidata.org/wiki/Q94998004)
- [維基數據：王劭（Q15924805）](https://www.wikidata.org/wiki/Q15924805)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王智 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%BA_(%E5%8D%97%E6%9C%9D))
