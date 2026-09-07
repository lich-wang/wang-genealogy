---
schema: wang-person/v1
id: p_WfXnRqUnbdbXJk88ULiEj7
status: active
merged_into: null
display_name: 鄱陽公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OpYQK_SAx5PKPWNB8_ElZ1
        subject_person_id: p_WfXnRqUnbdbXJk88ULiEj7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄱陽公主，史料所见人物。本项目依据《鄱陽公主》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_1d2QL2ksNhmDeNonPx2bro
          claim_id: c_OpYQK_SAx5PKPWNB8_ElZ1
          source_id: s_9EbRLiy2HfL3oV78Qf5s6x
          stance: supports
          locator: Q16603674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_u45Srz4ih8QxJ6xWe68tPC
        subject_person_id: p_WfXnRqUnbdbXJk88ULiEj7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄱陽公主
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UeTgi83iCY4fBDMSYfCoEX
          claim_id: c_u45Srz4ih8QxJ6xWe68tPC
          source_id: s_9EbRLiy2HfL3oV78Qf5s6x
          stance: supports
          locator: Q16603674
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
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
        id: p_RhUjZsZ1qknHMkKvcSu7Pr
        status: active
        display_name: 王嘏
        merged_into_person_id: null
    - claim:
        id: c_HSXPTu16XXSYxTJSYs32GN
        subject_person_id: p_Gh8T9F7QCTRaznN7ChYYdN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WfXnRqUnbdbXJk88ULiEj7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nxDBXEyMU3L3VWCsgCMME4
          claim_id: c_HSXPTu16XXSYxTJSYs32GN
          source_id: s_yoKBETAUkYV9pXezewGMq7
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王熙
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
        - id: cs_7VpJ1uyE2uyLxaadUTu2hm
          claim_id: c_HSXPTu16XXSYxTJSYs32GN
          source_id: s_v7qV23Pt3AW7qGCVDJisYW
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王熙
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
        - id: cs_XLFn1pMkTXKcLHS8FPmZEk
          claim_id: c_HSXPTu16XXSYxTJSYs32GN
          source_id: s_WKN5vNRPQBoEPmqR3QF88C
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王熙
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
        - id: cs_3zR5uFrUJQGH6hTJ92rEFM
          claim_id: c_HSXPTu16XXSYxTJSYs32GN
          source_id: s_t44J33cVpLTGPt7ksJYJ7v
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王熙
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
      object_person:
        id: p_Gh8T9F7QCTRaznN7ChYYdN
        status: active
        display_name: 王熙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄱陽公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄱陽公主，史料所见人物。本项目依据《鄱陽公主》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 鄱陽公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_RhUjZsZ1qknHMkKvcSu7Pr | 王嘏 | accepted |
| spouses | p_Gh8T9F7QCTRaznN7ChYYdN | 王熙 | accepted |

## 外部来源

- [维基数据：鄱陽公主（Q16603674）](https://www.wikidata.org/wiki/Q16603674)
- [维基数据：王嘏（Q18118172）](https://www.wikidata.org/wiki/Q18118172)
- [中文维基百科：鄱陽公主](https://zh.wikipedia.org/wiki/%E9%84%B1%E9%99%BD%E5%85%AC%E4%B8%BB)
