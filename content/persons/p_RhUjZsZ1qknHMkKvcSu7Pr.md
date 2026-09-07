---
schema: wang-person/v1
id: p_RhUjZsZ1qknHMkKvcSu7Pr
status: active
merged_into: null
display_name: 王嘏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UqRR_4THF2KPrRrHv2dhl2
        subject_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘏，史料所见人物。本项目依据《王嘏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_qLePyUyQ-wB-J6xVvjf9pS
          claim_id: c_UqRR_4THF2KPrRrHv2dhl2
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: Q18118172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xz2bAZjXYTaE48TCaELkCd
        subject_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hqBFe1Cr8NqCjbvwvzmbC1
          claim_id: c_xz2bAZjXYTaE48TCaELkCd
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: Q18118172
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zJaCcpL5ZembcJUjYP3vCC
        subject_person_id: p_eGi6cJepexiV9GFAnd9L8u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PK3NwpKKCL2rB7BbwSogrx
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_eCfut1gTfg2DFbQLvfxPSL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eCfut1gTfg2DFbQLvfxPSL
            source_type: api_record
            title: 维基数据：王混（Q18118174）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118174
            external_identifier: Q18118174
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:01.492Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B7%B7
        - id: cs_VUbDbSFtP9XG7V5FQG5BYP
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
        - id: cs_BBDtWaU6FBEA7L624iqsy8
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王嘏
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
        - id: cs_6TAq3mHVcDJDvqzQK51NYq
          claim_id: c_zJaCcpL5ZembcJUjYP3vCC
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王混 → 王嘏
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
        id: p_eGi6cJepexiV9GFAnd9L8u
        status: active
        display_name: 王混
        merged_into_person_id: null
  children:
    - claim:
        id: c_3GRB1GNQyakHYy6szZU9nF
        subject_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzsFuAEs6JJ4EJkXaf48Mn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vvd7jDXS5S4EbQ7EJgqsuT
          claim_id: c_3GRB1GNQyakHYy6szZU9nF
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
        - id: cs_j8H493EP9bmR2BE1Fs8Dab
          claim_id: c_3GRB1GNQyakHYy6szZU9nF
          source_id: s_T9oFeHgKECyHSzfi1GR4bB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_T9oFeHgKECyHSzfi1GR4bB
            source_type: api_record
            title: 维基数据：王偃（Q11572909）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572909
            external_identifier: Q11572909
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%81%83
      object_person:
        id: p_zzsFuAEs6JJ4EJkXaf48Mn
        status: active
        display_name: 王偃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JPkqu9cHNrA9n7DeB1AZfN
        subject_person_id: p_RhUjZsZ1qknHMkKvcSu7Pr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WfXnRqUnbdbXJk88ULiEj7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_woH9Y94afsnwyovY921hAu
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_9EbRLiy2HfL3oV78Qf5s6x
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9EbRLiy2HfL3oV78Qf5s6x
            source_type: api_record
            title: 维基数据：鄱陽公主（Q16603674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603674
            external_identifier: Q16603674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:47.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
        - id: cs_DH2Za2UvAe66sy4rNU19HJ
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_WmuRV1fsqQo64BrHaRUPiR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WmuRV1fsqQo64BrHaRUPiR
            source_type: api_record
            title: 维基数据：王嘏（Q18118172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18118172
            external_identifier: Q18118172
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.246Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%98%8F
        - id: cs_SPdAL7U13MLS5J7fjDCN1L
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_yoKBETAUkYV9pXezewGMq7
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王嘏
          interpretation_note: null
          source:
            id: s_yoKBETAUkYV9pXezewGMq7
            source_type: website
            title: 中文维基百科：鄱陽公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:14.501Z
            metadata_json: null
        - id: cs_wjWiDxhmb7MTfX2YDNYopz
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_t44J33cVpLTGPt7ksJYJ7v
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王嘏
          interpretation_note: null
          source:
            id: s_t44J33cVpLTGPt7ksJYJ7v
            source_type: website
            title: 中文维基百科：鄱陽公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:31.797Z
            metadata_json: null
        - id: cs_fq7odCgzC4RRPJBmHQfqao
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_v7qV23Pt3AW7qGCVDJisYW
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王嘏
          interpretation_note: null
          source:
            id: s_v7qV23Pt3AW7qGCVDJisYW
            source_type: website
            title: 中文维基百科：鄱陽公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:31.941Z
            metadata_json: null
        - id: cs_nZpCXT9a6QoKLVUt3TJggH
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_F59ck17EYc4G2oVFym8van
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王嘏
          interpretation_note: null
          source:
            id: s_F59ck17EYc4G2oVFym8van
            source_type: website
            title: 中文维基百科：鄱陽公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:02.642Z
            metadata_json: null
        - id: cs_BwCfX6v8thFSeqioa1M8zA
          claim_id: c_JPkqu9cHNrA9n7DeB1AZfN
          source_id: s_WKN5vNRPQBoEPmqR3QF88C
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王嘏
          interpretation_note: null
          source:
            id: s_WKN5vNRPQBoEPmqR3QF88C
            source_type: website
            title: 中文维基百科：鄱陽公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:33.863Z
            metadata_json: null
      object_person:
        id: p_WfXnRqUnbdbXJk88ULiEj7
        status: active
        display_name: 鄱陽公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王嘏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘏，史料所见人物。本项目依据《王嘏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王嘏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eGi6cJepexiV9GFAnd9L8u | 王混 | accepted |
| children | p_zzsFuAEs6JJ4EJkXaf48Mn | 王偃 | accepted |
| spouses | p_WfXnRqUnbdbXJk88ULiEj7 | 鄱陽公主 | accepted |

## 外部来源

- [维基数据：鄱陽公主（Q16603674）](https://www.wikidata.org/wiki/Q16603674)
- [维基数据：王嘏（Q18118172）](https://www.wikidata.org/wiki/Q18118172)
- [维基数据：王混（Q18118174）](https://www.wikidata.org/wiki/Q18118174)
- [维基数据：王偃（Q11572909）](https://www.wikidata.org/wiki/Q11572909)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：鄱陽公主](https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB)
