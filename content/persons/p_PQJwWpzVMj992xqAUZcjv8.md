---
schema: wang-person/v1
id: p_PQJwWpzVMj992xqAUZcjv8
status: active
merged_into: null
display_name: 王元
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TPI6MnHzWxap6koCmzUcnA
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元，史料所见人物。本项目依据《維基數據：王元》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6ZTAHwaHLl2qBxvnXz63LT
          claim_id: c_TPI6MnHzWxap6koCmzUcnA
          source_id: s_XgyU3f7FP1j6La9zMZHX8K
          stance: supports
          locator: Q108169681
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XgyU3f7FP1j6La9zMZHX8K
            source_type: api_record
            title: 維基數據：王元（Q108169681）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108169681
            external_identifier: Q108169681
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:46.922Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YAeKJBw1Dgg4t7hyhLa4Sx
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CT5P2Do8CTLt292EG28QBv
          claim_id: c_YAeKJBw1Dgg4t7hyhLa4Sx
          source_id: s_XgyU3f7FP1j6La9zMZHX8K
          stance: supports
          locator: Q108169681
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AwBZW3iqB1U4VqK93HKuQQ
        subject_person_id: p_A6G4nFDcRtxWYPSxVDPrXS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PQJwWpzVMj992xqAUZcjv8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N6XChdMRKDjPRWcRnArtR4
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_K9B3P6sxPrNVvCtMzMzYks
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_K9B3P6sxPrNVvCtMzMzYks
            source_type: website
            title: 中文维基百科：王离
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王離
            external_identifier: Q11573240
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_dEJfnxkkFrYUQ7h3sCFnhy
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_e4ATzMShRj7egj5nMgTMvM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e4ATzMShRj7egj5nMgTMvM
            source_type: api_record
            title: 維基數據：王离（Q11573240）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573240
            external_identifier: Q11573240
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:32.070Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%A2
        - id: cs_fyMm6C5XK48gpjT4yQKyjF
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_XgyU3f7FP1j6La9zMZHX8K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XgyU3f7FP1j6La9zMZHX8K
            source_type: api_record
            title: 維基數據：王元（Q108169681）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108169681
            external_identifier: Q108169681
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:46.922Z
            metadata_json: null
        - id: cs_CAHT6WrqfwPeTcXhoJ1yC5
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
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
        - id: cs_D6R1WMnp8bgsC5effjyj3q
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_LEbHKFeEKr6uMxZTLv5NPr
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
          interpretation_note: null
          source:
            id: s_LEbHKFeEKr6uMxZTLv5NPr
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:08.097Z
            metadata_json: null
        - id: cs_3wDwEgoKwRksnuTwHNCwiF
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_S61fZXdnDT87Mj2UYRLSRH
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_S61fZXdnDT87Mj2UYRLSRH
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:13.359Z
            metadata_json: null
        - id: cs_Dq37d9BaLiUcD8RKF3wurd
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
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
        - id: cs_tpn9LGFE4DGsAjDbQokDSu
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
          interpretation_note: null
          source:
            id: s_JhD7vPo5vXGiRknBGxUfHD
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:01.555Z
            metadata_json: null
        - id: cs_4jPedoNb9EKJzrN9C7Jo1K
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_s64CsLR1CSKgqTfFqoXjzf
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_s64CsLR1CSKgqTfFqoXjzf
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:42.520Z
            metadata_json: null
        - id: cs_2Gbkf8uXHWxWoFJiTaR9ky
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
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
        - id: cs_iRtTpoJkQSX44maSwcvqRr
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
        - id: cs_PRCev1dW9iDyBbt25DN7py
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_UqGU6H6Kfd8qNfv97qs4Qb
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_UqGU6H6Kfd8qNfv97qs4Qb
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:42.248Z
            metadata_json: null
        - id: cs_yhf4BJmh8EjtSY5yfKz4t9
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
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
        - id: cs_skTXj7RaGb2GX1oDGTWrAX
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
        - id: cs_d2W3XyjGR8GG7syKqwBES6
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_H6MU8GiwjB1QYox4kshPCi
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王離的長子王元
          interpretation_note: null
          source:
            id: s_H6MU8GiwjB1QYox4kshPCi
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:32.394Z
            metadata_json: null
        - id: cs_MQTz2Fj2xtW4UFkS48YR2t
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_a1BkrGE2mLH8EZ23nApwDA
          stance: supports
          locator: 条文：之子/之女
          quotation: 王元，关中频阳东乡（今陕西富平东北）人，王离的长子
          interpretation_note: null
          source:
            id: s_a1BkrGE2mLH8EZ23nApwDA
            source_type: website
            title: 中文维基百科：王元 (秦朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
        - id: cs_m3nkHfCtLe3pUHhhrvG4qV
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 王离长子王元，為避秦乱，迁于琅邪郡
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
        - id: cs_FQWNssn3x9EggCu2Wz5V8T
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_z4cRQ1DAtCL8VHBBeHEMN6
          stance: supports
          locator: 条文：条文识读（長子）
          quotation: 王離的長子王元
          interpretation_note: null
          source:
            id: s_z4cRQ1DAtCL8VHBBeHEMN6
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:42.315Z
            metadata_json: null
        - id: cs_LaJ3JhxFUM6c7XmS1daEoP
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_VLRF7n47kSh9E49Wbg56bA
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 武城侯王离之子王元和王威
          interpretation_note: null
          source:
            id: s_VLRF7n47kSh9E49Wbg56bA
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T06:46:49.616Z
            metadata_json: null
        - id: cs_NZ2oLXnoFUHBFmZt32HhaE
          claim_id: c_AwBZW3iqB1U4VqK93HKuQQ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：元、威。
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
        id: p_A6G4nFDcRtxWYPSxVDPrXS
        status: active
        display_name: 王离
        merged_into_person_id: null
  children:
    - claim:
        id: c_j9NoqWPdaAg34u9UqriLFp
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xy6Tzd1XwDTgFZ9pi7oyGP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Vw2rZpviixg51pVS51i9p
          claim_id: c_j9NoqWPdaAg34u9UqriLFp
          source_id: s_a1BkrGE2mLH8EZ23nApwDA
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子：王诚
          interpretation_note: null
          source:
            id: s_a1BkrGE2mLH8EZ23nApwDA
            source_type: website
            title: 中文维基百科：王元 (秦朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person:
        id: p_xy6Tzd1XwDTgFZ9pi7oyGP
        status: active
        display_name: 王诚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_c8VoUMLnmMTgU9fFVwC5rx
        subject_person_id: p_Zru5Kv87Ac9fELnRRbbTdQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PQJwWpzVMj992xqAUZcjv8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XE8pPc9ovZdGf7okwPGv2k
          claim_id: c_c8VoUMLnmMTgU9fFVwC5rx
          source_id: s_6GRp82USp6X8RvXbJmR33G
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 曾孙：王元
          interpretation_note: null
          source:
            id: s_6GRp82USp6X8RvXbJmR33G
            source_type: website
            title: 中文维基百科：王翦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:09.636Z
            metadata_json: null
        - id: cs_QaUzHmUHH4K8btHDqHBrEm
          claim_id: c_c8VoUMLnmMTgU9fFVwC5rx
          source_id: s_TozJBbAzRke4M7LNE17Yv1
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 曾孙：王元、王威。
          interpretation_note: null
          source:
            id: s_TozJBbAzRke4M7LNE17Yv1
            source_type: website
            title: 中文维基百科：王翦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:32.492Z
            metadata_json: null
        - id: cs_bum4JMzLgdVzNzoUsrfgfZ
          claim_id: c_c8VoUMLnmMTgU9fFVwC5rx
          source_id: s_D4tLE691zdroKBb1DBdwbd
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 曾孙：王元、王威。
          interpretation_note: null
          source:
            id: s_D4tLE691zdroKBb1DBdwbd
            source_type: website
            title: 中文维基百科：王翦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:52.012Z
            metadata_json: null
      object_person:
        id: p_Zru5Kv87Ac9fELnRRbbTdQ
        status: active
        display_name: 王翦
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_rDLQ3EANb4dAf7QhZ13eTP
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7BBNW636PfzcwJta8vrVg1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D5Gf3aCUXWTAqM4vYyRML5
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_bQTF2CXZrXCnf8mQorPDPu
          stance: supports
          locator: 条文：条文识读（四世孫）（4世）
          quotation: 王元的四世孫，西漢博士、諫議大夫王吉開始在皋虞
          interpretation_note: null
          source:
            id: s_bQTF2CXZrXCnf8mQorPDPu
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:49.845Z
            metadata_json: null
        - id: cs_vVjNF6etGoyUBuuXCB6c1m
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: 条文：条文识读（四世祖）（4世）
          quotation: 四世祖：王元
          interpretation_note: null
          source:
            id: s_E9W2xid68aCm3Q4ytRjjSD
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
        - id: cs_BK8pi4CCAR99jgakaYTzYx
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_z4cRQ1DAtCL8VHBBeHEMN6
          stance: supports
          locator: 条文：条文识读（四世孫）（4世）
          quotation: 王元的四世孫，西漢博士、諫議大夫王吉
          interpretation_note: null
          source:
            id: s_z4cRQ1DAtCL8VHBBeHEMN6
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:42.315Z
            metadata_json: null
      object_person:
        id: p_7BBNW636PfzcwJta8vrVg1
        status: active
        display_name: 王吉
        merged_into_person_id: null
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元，史料所见人物。本项目依据《維基數據：王元》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A6G4nFDcRtxWYPSxVDPrXS | 王离 | accepted |
| children | p_xy6Tzd1XwDTgFZ9pi7oyGP | 王诚 | accepted |
| ancestors | p_Zru5Kv87Ac9fELnRRbbTdQ | 王翦 | accepted |
| descendants | p_7BBNW636PfzcwJta8vrVg1 | 王吉 | accepted |

## 外部来源

- [維基數據：王离（Q11573240）](https://www.wikidata.org/wiki/Q11573240)
- [維基數據：王元（Q108169681）](https://www.wikidata.org/wiki/Q108169681)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基百科：王吉 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89))
- [中文维基百科：王翦](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6)
- [中文维基百科：王离](https://zh.wikipedia.org/wiki/王離)
- [中文维基百科：王姓](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93)
- [中文维基百科：王元 (秦朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
