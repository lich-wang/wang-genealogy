---
schema: wang-person/v1
id: p_vrFxdzfcwL4KyZ56ZsRocq
status: active
merged_into: null
display_name: 王禮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D6FLASq5QL-I1_J-0X7I8G
        subject_person_id: p_vrFxdzfcwL4KyZ56ZsRocq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮（卒于1721年），史料所见人物。本项目依据《王禮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mc49Ps7UeM4b2qlFF7AjIq
          claim_id: c_D6FLASq5QL-I1_J-0X7I8G
          source_id: s_7oNgu4x71HQ3J6KDFGSb5U
          stance: supports
          locator: Q15935471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7oNgu4x71HQ3J6KDFGSb5U
            source_type: api_record
            title: 维基数据：王禮（Q15935471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935471
            external_identifier: Q15935471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_58xawMrfw8x3fQrQeT6uXW
        subject_person_id: p_vrFxdzfcwL4KyZ56ZsRocq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1721年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1721-01-01
            latest: 1721-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V1NKUzFRwfgEAz8xrN8Siv
          claim_id: c_58xawMrfw8x3fQrQeT6uXW
          source_id: s_7oNgu4x71HQ3J6KDFGSb5U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_duWL4a698en1CEjbXihnva
        subject_person_id: p_vrFxdzfcwL4KyZ56ZsRocq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HUFTQyD62YJvTKsFQvv8B9
          claim_id: c_duWL4a698en1CEjbXihnva
          source_id: s_7oNgu4x71HQ3J6KDFGSb5U
          stance: supports
          locator: Q15935471
          quotation: null
          interpretation_note: null
          source:
            id: s_7oNgu4x71HQ3J6KDFGSb5U
            source_type: api_record
            title: 维基数据：王禮（Q15935471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935471
            external_identifier: Q15935471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禮（卒于1721年），史料所见人物。本项目依据《王禮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1721年 | accepted |
| name.primary | 王禮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王禮（Q15935471）](https://www.wikidata.org/wiki/Q15935471)
