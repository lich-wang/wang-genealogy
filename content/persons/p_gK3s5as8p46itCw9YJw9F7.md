---
schema: wang-person/v1
id: p_gK3s5as8p46itCw9YJw9F7
status: active
merged_into: null
display_name: 王顼龄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j0vcgveciWKmQa4HH_7Oz1
        subject_person_id: p_gK3s5as8p46itCw9YJw9F7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顼龄（1642年—1725年），史料所见人物。本项目依据《王顼龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Vl9NSH2ssxjNEpdC8F-hd7
          claim_id: c_j0vcgveciWKmQa4HH_7Oz1
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: Q15916283
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gJ1dDL3EU6R6QgkmwDCWgU
            source_type: api_record
            title: 维基数据：王顼龄（Q15916283）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916283
            external_identifier: Q15916283
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eKgU4hFL7JivwRW8Dok5Z6
        subject_person_id: p_gK3s5as8p46itCw9YJw9F7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1642-01-01
            latest: 1642-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iGogLDs7fQChuEJ38NYmWE
          claim_id: c_eKgU4hFL7JivwRW8Dok5Z6
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gJ1dDL3EU6R6QgkmwDCWgU
            source_type: api_record
            title: 维基数据：王顼龄（Q15916283）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916283
            external_identifier: Q15916283
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7RW28Yfj5zw5g9GdYKp96T
        subject_person_id: p_gK3s5as8p46itCw9YJw9F7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1725年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1725-01-01
            latest: 1725-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1T6VJwFj9AHKAtJW5zK1D9
          claim_id: c_7RW28Yfj5zw5g9GdYKp96T
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gJ1dDL3EU6R6QgkmwDCWgU
            source_type: api_record
            title: 维基数据：王顼龄（Q15916283）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916283
            external_identifier: Q15916283
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_T9eufuunB8Pxf4nYx7uGYL
        subject_person_id: p_gK3s5as8p46itCw9YJw9F7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顼龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QDiYwLJKXjH7C5CqR5U5eC
          claim_id: c_T9eufuunB8Pxf4nYx7uGYL
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: Q15916283
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CwJNszZq8iC7MXqLE7w4UR
        subject_person_id: p_T3HfvKJwe8oNYNwYQCppo7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gK3s5as8p46itCw9YJw9F7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_19ceqXAL92G1TQP3L5tvLm
          claim_id: c_CwJNszZq8iC7MXqLE7w4UR
          source_id: s_gJ1dDL3EU6R6QgkmwDCWgU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gJ1dDL3EU6R6QgkmwDCWgU
            source_type: api_record
            title: 维基数据：王顼龄（Q15916283）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916283
            external_identifier: Q15916283
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
        - id: cs_EQc4aCug73nmRMUZd3JpV3
          claim_id: c_CwJNszZq8iC7MXqLE7w4UR
          source_id: s_FmaGCBtNfD2X2dM8NTgkHk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmaGCBtNfD2X2dM8NTgkHk
            source_type: api_record
            title: 维基数据：王广心（Q16077638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077638
            external_identifier: Q16077638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%A3%E5%BF%83
      object_person:
        id: p_T3HfvKJwe8oNYNwYQCppo7
        status: active
        display_name: 王广心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顼龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顼龄（1642年—1725年），史料所见人物。本项目依据《王顼龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1642年 | accepted |
| death.date | 1725年 | accepted |
| name.primary | 王顼龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T3HfvKJwe8oNYNwYQCppo7 | 王广心 | accepted |

## 外部来源

- [维基数据：王广心（Q16077638）](https://www.wikidata.org/wiki/Q16077638)
- [维基数据：王顼龄（Q15916283）](https://www.wikidata.org/wiki/Q15916283)
