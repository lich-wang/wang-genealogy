---
schema: wang-person/v1
id: p_FKoH4bqGDQb63JKx9jPdfZ
status: active
merged_into: null
display_name: 司马道福
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_usdAjMidasLEe1VMuKYZWr
        subject_person_id: p_FKoH4bqGDQb63JKx9jPdfZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 司马道福，史料所见人物。本项目依据《司马道福》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pXZZ353ZaEQECFaB6hwPOb
          claim_id: c_usdAjMidasLEe1VMuKYZWr
          source_id: s_VXA9vLDhCqnmqj7qtBxspn
          stance: supports
          locator: Q10916700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VXA9vLDhCqnmqj7qtBxspn
            source_type: api_record
            title: 维基数据：司马道福（Q10916700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10916700
            external_identifier: Q10916700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:10.674Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJyx9yNe7RwWzfeo2QNd2b
        subject_person_id: p_FKoH4bqGDQb63JKx9jPdfZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 司马道福
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CVC7hPiydaDChTUC5rm9ET
          claim_id: c_CJyx9yNe7RwWzfeo2QNd2b
          source_id: s_VXA9vLDhCqnmqj7qtBxspn
          stance: supports
          locator: Q10916700
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
        id: c_y6Jo4CDDAyaXryFHF17un7
        subject_person_id: p_9kvwNC8EwFdL41MBGhg7HG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FKoH4bqGDQb63JKx9jPdfZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_aowWiDHxKaH19AQqmAjMDw
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_dypc2T3zk15WKQ7XHyCLp1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dypc2T3zk15WKQ7XHyCLp1
            source_type: api_record
            title: 維基數據：王獻之（Q559425）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q559425
            external_identifier: Q559425
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:47.659Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%AE%E4%B9%8B
        - id: cs_YKTKqPZ3TKH6KsmCztzpK4
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_VXA9vLDhCqnmqj7qtBxspn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VXA9vLDhCqnmqj7qtBxspn
            source_type: api_record
            title: 维基数据：司马道福（Q10916700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10916700
            external_identifier: Q10916700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:10.674Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
        - id: cs_U8SGiQc4sakKvvXhjwAXqX
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_CURYF8M19467bQwjs888Y5
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王獻之
          interpretation_note: null
          source:
            id: s_CURYF8M19467bQwjs888Y5
            source_type: website
            title: 中文维基百科：司马道福
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:57.862Z
            metadata_json: null
        - id: cs_4QGXmmFKEVNReZ58Dam2m9
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_1JZzuh1tgRSZstZ18CpDZL
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王獻之
          interpretation_note: null
          source:
            id: s_1JZzuh1tgRSZstZ18CpDZL
            source_type: website
            title: 中文维基百科：司马道福
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:25.066Z
            metadata_json: null
        - id: cs_9PjS3M3KNdTUpHy5yxcVCD
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_Vv2UqS4hFkhcuMTcmgFYHB
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王獻之
          interpretation_note: null
          source:
            id: s_Vv2UqS4hFkhcuMTcmgFYHB
            source_type: website
            title: 中文维基百科：司马道福
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:26.048Z
            metadata_json: null
        - id: cs_W398Pt28jJSMERXmEYebHc
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_GHZ6EUvWpUJp7CAqeLJSyZ
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王獻之
          interpretation_note: null
          source:
            id: s_GHZ6EUvWpUJp7CAqeLJSyZ
            source_type: website
            title: 中文维基百科：司马道福
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:34.118Z
            metadata_json: null
        - id: cs_no4m7B7D4Q4yTddA7LeEte
          claim_id: c_y6Jo4CDDAyaXryFHF17un7
          source_id: s_dFJXC296XVmxRg3Dz4zkig
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王獻之
          interpretation_note: null
          source:
            id: s_dFJXC296XVmxRg3Dz4zkig
            source_type: website
            title: 中文维基百科：司马道福
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:30.364Z
            metadata_json: null
      object_person:
        id: p_9kvwNC8EwFdL41MBGhg7HG
        status: active
        display_name: 王獻之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 司马道福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 司马道福，史料所见人物。本项目依据《司马道福》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 司马道福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9kvwNC8EwFdL41MBGhg7HG | 王獻之 | accepted |

## 外部来源

- [维基数据：司马道福（Q10916700）](https://www.wikidata.org/wiki/Q10916700)
- [維基數據：王獻之（Q559425）](https://www.wikidata.org/wiki/Q559425)
- [中文维基百科：司马道福](https://zh.wikipedia.org/wiki/%E5%8F%B8%E9%A9%AC%E9%81%93%E7%A6%8F)
