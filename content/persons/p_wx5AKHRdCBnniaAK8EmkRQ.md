---
schema: wang-person/v1
id: p_wx5AKHRdCBnniaAK8EmkRQ
status: active
merged_into: null
display_name: 王缋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Kcz2acMCswS9BB2MmQBXb
        subject_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缋（447年—499年），史料所见人物。本项目依据《王缋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_M0sO0GdXL_i4bVA4bkkQQy
          claim_id: c_1Kcz2acMCswS9BB2MmQBXb
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: Q61744063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1D3MK21qL3w1954EzSNS3A
            source_type: api_record
            title: 维基数据：王缋（Q61744063）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744063
            external_identifier: Q61744063
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%A2
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jhKFjYs913zfSyJVGaFq31
        subject_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 447年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0447-01-01
            latest: 0447-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mapExCmYYzCDh67tV5FrKA
          claim_id: c_jhKFjYs913zfSyJVGaFq31
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1D3MK21qL3w1954EzSNS3A
            source_type: api_record
            title: 维基数据：王缋（Q61744063）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744063
            external_identifier: Q61744063
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%A2
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g6C6Kiscbw4y7S7AoeqZ3Q
        subject_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 499年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0499-01-01
            latest: 0499-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gg1NnoiunttviucfbDeWnD
          claim_id: c_g6C6Kiscbw4y7S7AoeqZ3Q
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1D3MK21qL3w1954EzSNS3A
            source_type: api_record
            title: 维基数据：王缋（Q61744063）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744063
            external_identifier: Q61744063
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%A2
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQtj9Wbq6Bt8xxLQ3guc8T
        subject_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZBmYsfCVxSgaBqCTu6zpVB
          claim_id: c_KQtj9Wbq6Bt8xxLQ3guc8T
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: Q61744063
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jDN6qJkaRrTa31NCB8MEC1
        subject_person_id: p_e64GBPBpS2DkkgzPQzfX54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hyxdMoPv7dKAXEF2GzpwC9
          claim_id: c_jDN6qJkaRrTa31NCB8MEC1
          source_id: s_1oQQjgzGe2A2KyjnNQoEvD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1oQQjgzGe2A2KyjnNQoEvD
            source_type: api_record
            title: 维基数据：王彧（Q22814881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814881
            external_identifier: Q22814881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:30.520Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%AF%E6%96%87
        - id: cs_kMg8aJY6uyrfnfLv1mNuQJ
          claim_id: c_jDN6qJkaRrTa31NCB8MEC1
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1D3MK21qL3w1954EzSNS3A
            source_type: api_record
            title: 维基数据：王缋（Q61744063）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744063
            external_identifier: Q61744063
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%A2
      object_person:
        id: p_e64GBPBpS2DkkgzPQzfX54
        status: active
        display_name: 王彧
        merged_into_person_id: null
  children:
    - claim:
        id: c_tD3mDJK8JGWag8QwGHBamc
        subject_person_id: p_wx5AKHRdCBnniaAK8EmkRQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JAyUE9xd2x2nYyMDH61YDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zxYewLGg1H6BJiwx7G4joB
          claim_id: c_tD3mDJK8JGWag8QwGHBamc
          source_id: s_1D3MK21qL3w1954EzSNS3A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_1D3MK21qL3w1954EzSNS3A
            source_type: api_record
            title: 维基数据：王缋（Q61744063）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744063
            external_identifier: Q61744063
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%A2
        - id: cs_NFMLBo39CM5p3dWS6ZHfWf
          claim_id: c_tD3mDJK8JGWag8QwGHBamc
          source_id: s_zFSzx748cK3LL7VCAQbdXm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zFSzx748cK3LL7VCAQbdXm
            source_type: api_record
            title: 维基数据：王儁（Q61744066）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61744066
            external_identifier: Q61744066
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:56.490Z
            metadata_json: null
        - id: cs_j1BJBC4QHRTmNA5DBjAtg7
          claim_id: c_tD3mDJK8JGWag8QwGHBamc
          source_id: s_MGBoig692jprej3f8uiDi2
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王缋 → 王儁
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
        - id: cs_7YhNd7f1oVXoWnDoYoqWdU
          claim_id: c_tD3mDJK8JGWag8QwGHBamc
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系圖
          quotation: 琅邪王氏世系圖 世系圖：王缋 → 王儁
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
        id: p_JAyUE9xd2x2nYyMDH61YDq
        status: active
        display_name: 王儁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王缋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缋（447年—499年），史料所见人物。本项目依据《王缋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 447年 | accepted |
| death.date | 499年 | accepted |
| name.primary | 王缋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e64GBPBpS2DkkgzPQzfX54 | 王彧 | accepted |
| children | p_JAyUE9xd2x2nYyMDH61YDq | 王儁 | accepted |

## 外部来源

- [维基数据：王缋（Q61744063）](https://www.wikidata.org/wiki/Q61744063)
- [维基数据：王儁（Q61744066）](https://www.wikidata.org/wiki/Q61744066)
- [维基数据：王彧（Q22814881）](https://www.wikidata.org/wiki/Q22814881)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
