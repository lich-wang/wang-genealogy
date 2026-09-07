---
schema: wang-person/v1
id: p_Lg5XqeMUBiSajHTPH9pFan
status: active
merged_into: null
display_name: 王韶明
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tFjai4MsEokEtRmPSppYh1
        subject_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶明（生于5世纪），史料所见人物。本项目依据《王韶明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X8eCknTLyvQ7oiNjZiNP-N
          claim_id: c_tFjai4MsEokEtRmPSppYh1
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: Q4392491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZPdDnx8Kzq8Wj7wcfxRFUN
        subject_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nwa9bauyXvB2qEcaqstNqj
          claim_id: c_ZPdDnx8Kzq8Wj7wcfxRFUN
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9uv4nBSMvkaDCRakdwrat
        subject_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G7QqMHuSMbcvjPHJ2X9Fg3
          claim_id: c_S9uv4nBSMvkaDCRakdwrat
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: Q4392491
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nVk92m2tK2s7RFN2F94VJ6
        subject_person_id: p_4KL28H32dmZ89RjQ98aCSY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_srksaSoGMPMi1rSqTFdenR
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_FnFeE8fAVbgmpzH3DqH1Jh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnFeE8fAVbgmpzH3DqH1Jh
            source_type: api_record
            title: 维基数据：王慈（Q11573074）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573074
            external_identifier: Q11573074
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%85%88
        - id: cs_TanQtVX1Z9Mg4CgVHFFTq3
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
        - id: cs_paRc94GeSJQVMV36rBb9NU
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_4P2AtYDkeHXyhJFrFSbaRM
          stance: supports
          locator: 条文：之子/之女
          quotation: 王韶明（{{bd|5世紀||？||}}），琅邪郡临沂县（今山东省临沂市）人，太常王慈之女，南齐海陵王萧昭文皇后
          interpretation_note: null
          source:
            id: s_4P2AtYDkeHXyhJFrFSbaRM
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:08.376Z
            metadata_json: null
        - id: cs_KTTRBF3CjQSrHVKDQky45p
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王韶明
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
        - id: cs_3cfjHAoAPprMQ3TtmJ9hX9
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王慈 → 王韶明
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
        - id: cs_KsZ6rBV4XMBz3E1R4hb7YM
          claim_id: c_nVk92m2tK2s7RFN2F94VJ6
          source_id: s_R7L8gdqTS9cXj2XUrWMvoC
          stance: supports
          locator: 条文：之子/之女
          quotation: 王韶明，琅邪郡临沂县（今山东省临沂市）人，太常王慈之女，南齐海陵王萧昭文皇后
          interpretation_note: null
          source:
            id: s_R7L8gdqTS9cXj2XUrWMvoC
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:06.182Z
            metadata_json: null
      object_person:
        id: p_4KL28H32dmZ89RjQ98aCSY
        status: active
        display_name: 王慈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2rCF4kkZqA6727JGVgGqLf
        subject_person_id: p_Lg5XqeMUBiSajHTPH9pFan
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z2BWBaJCxaiXc8hXEo9nSQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_UNK57FDVaEdcgMyBBjmUzm
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_CH9k4CPKYDDfXCdd8GH7hR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CH9k4CPKYDDfXCdd8GH7hR
            source_type: api_record
            title: 维基数据：王韶明（Q4392491）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4392491
            external_identifier: Q4392491
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:46.632Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
        - id: cs_RsH32RvfKW4f2G8p4MLWWd
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_ptRQ11EWBPmVg9wgTcDaRD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_ptRQ11EWBPmVg9wgTcDaRD
            source_type: api_record
            title: 维基数据：萧昭文（Q1190405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1190405
            external_identifier: Q1190405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:34.642Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%90%A7%E6%98%AD%E6%96%87
        - id: cs_R5Lnxo5N6rFKf2kUN3wyRf
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_4P2AtYDkeHXyhJFrFSbaRM
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 皇孙临汝公萧昭文娶王韶明为临汝公夫人
          interpretation_note: null
          source:
            id: s_4P2AtYDkeHXyhJFrFSbaRM
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:08.376Z
            metadata_json: null
        - id: cs_6Y8EAAn5NHT3mVdfo2adPC
          claim_id: c_2rCF4kkZqA6727JGVgGqLf
          source_id: s_R7L8gdqTS9cXj2XUrWMvoC
          stance: supports
          locator: 条文：条文识读（spouse）
          quotation: 永明八年（490年），皇孙临汝公萧昭文娶王韶明为临汝公夫人
          interpretation_note: null
          source:
            id: s_R7L8gdqTS9cXj2XUrWMvoC
            source_type: website
            title: 中文维基百科：王韶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:06.182Z
            metadata_json: null
      object_person:
        id: p_Z2BWBaJCxaiXc8hXEo9nSQ
        status: active
        display_name: 萧昭文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王韶明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王韶明（生于5世纪），史料所见人物。本项目依据《王韶明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王韶明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4KL28H32dmZ89RjQ98aCSY | 王慈 | accepted |
| spouses | p_Z2BWBaJCxaiXc8hXEo9nSQ | 萧昭文 | accepted |

## 外部来源

- [维基数据：王慈（Q11573074）](https://www.wikidata.org/wiki/Q11573074)
- [维基数据：王韶明（Q4392491）](https://www.wikidata.org/wiki/Q4392491)
- [维基数据：萧昭文（Q1190405）](https://www.wikidata.org/wiki/Q1190405)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王韶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E6%98%8E)
