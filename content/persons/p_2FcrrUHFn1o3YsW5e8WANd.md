---
schema: wang-person/v1
id: p_2FcrrUHFn1o3YsW5e8WANd
status: active
merged_into: null
display_name: 王普
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u90G3Y-X7yoP40OFiEB6DJ
        subject_person_id: p_2FcrrUHFn1o3YsW5e8WANd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普（卒于1162年），史料所见人物。本项目依据《王普》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IQtMTuxdi8thPW3fQi6ox5
          claim_id: c_u90G3Y-X7yoP40OFiEB6DJ
          source_id: s_12xHxtaypxC9pHEjiMgFSP
          stance: supports
          locator: Q45359602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_12xHxtaypxC9pHEjiMgFSP
            source_type: api_record
            title: 维基数据：王普（Q45359602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359602
            external_identifier: Q45359602
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:52.671Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3AQwr6apAkSwwwXtP8cesR
        subject_person_id: p_2FcrrUHFn1o3YsW5e8WANd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1162年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1162-01-01
            latest: 1162-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FW858r5JTEm726166itDsg
          claim_id: c_3AQwr6apAkSwwwXtP8cesR
          source_id: s_12xHxtaypxC9pHEjiMgFSP
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
        id: c_N8CAn4Y2yR4tTes9tqR4Hr
        subject_person_id: p_2FcrrUHFn1o3YsW5e8WANd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SH2PXrcAG78KQAuKSBFbDQ
          claim_id: c_N8CAn4Y2yR4tTes9tqR4Hr
          source_id: s_12xHxtaypxC9pHEjiMgFSP
          stance: supports
          locator: Q45359602
          quotation: null
          interpretation_note: null
          source:
            id: s_12xHxtaypxC9pHEjiMgFSP
            source_type: api_record
            title: 维基数据：王普（Q45359602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359602
            external_identifier: Q45359602
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:52.671Z
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

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王普（卒于1162年），史料所见人物。本项目依据《王普》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1162年 | accepted |
| name.primary | 王普 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王普（Q45359602）](https://www.wikidata.org/wiki/Q45359602)
