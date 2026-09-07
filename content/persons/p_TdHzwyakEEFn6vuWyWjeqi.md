---
schema: wang-person/v1
id: p_TdHzwyakEEFn6vuWyWjeqi
status: active
merged_into: null
display_name: 王绥 (琅邪)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S667RvTXmitgB48Wz2PwVH
        subject_person_id: p_TdHzwyakEEFn6vuWyWjeqi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绥 (琅邪)，史料所见人物。本项目依据《王绥 (琅邪)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uQesFXl4rwoD5-RSoIVDGr
          claim_id: c_S667RvTXmitgB48Wz2PwVH
          source_id: s_c9N611j2Z5h6cijmec7oGv
          stance: supports
          locator: Q15931137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c9N611j2Z5h6cijmec7oGv
            source_type: api_record
            title: 维基数据：王绥 (琅邪)（Q15931137）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931137
            external_identifier: Q15931137
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A5_(%E7%90%85%E9%82%AA)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BpHDQJTCmonqkHT4UP59y
        subject_person_id: p_TdHzwyakEEFn6vuWyWjeqi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绥 (琅邪)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UoMXTH8SivcHcFvw1gv2j4
          claim_id: c_7BpHDQJTCmonqkHT4UP59y
          source_id: s_c9N611j2Z5h6cijmec7oGv
          stance: supports
          locator: Q15931137
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_shRsWGpcm9NE4bUCLhqVPc
        subject_person_id: p_TfKe1cH32mQ1z8aTR1Zbt4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdHzwyakEEFn6vuWyWjeqi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nMw5ZUhL3LWBQgS4Lykhhd
          claim_id: c_shRsWGpcm9NE4bUCLhqVPc
          source_id: s_iQGhX7L3HdfnK94yTB5eGv
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iQGhX7L3HdfnK94yTB5eGv
            source_type: api_record
            title: 维基数据：王戎（Q701720）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q701720
            external_identifier: Q701720
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:20.699Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%88%8E
        - id: cs_ttY6Pd1TJrLUfZ7sKHxhz7
          claim_id: c_shRsWGpcm9NE4bUCLhqVPc
          source_id: s_c9N611j2Z5h6cijmec7oGv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c9N611j2Z5h6cijmec7oGv
            source_type: api_record
            title: 维基数据：王绥 (琅邪)（Q15931137）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931137
            external_identifier: Q15931137
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A5_(%E7%90%85%E9%82%AA)
        - id: cs_75gCEN4W72HLaTP4x6SDkM
          claim_id: c_shRsWGpcm9NE4bUCLhqVPc
          source_id: s_tayoQ1GcJPLMfuEmcypC59
          stance: supports
          locator: 条文：之子/之女
          quotation: 王绥（{{bd|？||？||}}），字万子，又称王万，琅邪郡临沂县（今山东省临沂市）人，王戎之子
          interpretation_note: null
          source:
            id: s_tayoQ1GcJPLMfuEmcypC59
            source_type: website
            title: 中文维基百科：王绥 (琅邪)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A5_(%E7%90%85%E9%82%AA)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:00.837Z
            metadata_json: null
        - id: cs_sqQtoSRMLC85hy9Xwix93T
          claim_id: c_shRsWGpcm9NE4bUCLhqVPc
          source_id: s_tspvYyQcqWFCDiyYCYaDSn
          stance: supports
          locator: 条文：之子/之女
          quotation: 王绥，字万子，又称王万，琅邪郡临沂县（今山东省临沂市）人，王戎之子
          interpretation_note: null
          source:
            id: s_tspvYyQcqWFCDiyYCYaDSn
            source_type: website
            title: 中文维基百科：王绥 (琅邪)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A5_(%E7%90%85%E9%82%AA)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:50.720Z
            metadata_json: null
      object_person:
        id: p_TfKe1cH32mQ1z8aTR1Zbt4
        status: active
        display_name: 王戎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绥 (琅邪)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绥 (琅邪)，史料所见人物。本项目依据《王绥 (琅邪)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王绥 (琅邪) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TfKe1cH32mQ1z8aTR1Zbt4 | 王戎 | accepted |

## 外部来源

- [维基数据：王戎（Q701720）](https://www.wikidata.org/wiki/Q701720)
- [维基数据：王绥 (琅邪)（Q15931137）](https://www.wikidata.org/wiki/Q15931137)
- [中文维基百科：王绥 (琅邪)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A5_(%E7%90%85%E9%82%AA))
