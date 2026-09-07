---
schema: wang-person/v1
id: p_Up9d2jsG7MN3j1HmuzDtHo
status: active
merged_into: null
display_name: 王兴吾
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MH1xEOq71spQgWiKf-O-DJ
        subject_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴吾（1703年—1757年），史料所见人物。本项目依据《王兴吾》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_KuaKKnKxAcScos1A-ns7zW
          claim_id: c_MH1xEOq71spQgWiKf-O-DJ
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: Q15931809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QNyGpZPZ1tN6AxK1vHiApq
            source_type: api_record
            title: 维基数据：王兴吾（Q15931809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931809
            external_identifier: Q15931809
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:24.979Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_M5qbC769iW2yPsXLc735JQ
        subject_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1703-01-01
            latest: 1703-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YtHPvaAkHaCJSUp7YhLf5F
          claim_id: c_M5qbC769iW2yPsXLc735JQ
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QNyGpZPZ1tN6AxK1vHiApq
            source_type: api_record
            title: 维基数据：王兴吾（Q15931809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931809
            external_identifier: Q15931809
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:24.979Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_29SxLu7Gs338k9xqCPVzEQ
        subject_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1757-01-01
            latest: 1757-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4fxnW3BoMSpi7c9YyZKvWG
          claim_id: c_29SxLu7Gs338k9xqCPVzEQ
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QNyGpZPZ1tN6AxK1vHiApq
            source_type: api_record
            title: 维基数据：王兴吾（Q15931809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931809
            external_identifier: Q15931809
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:24.979Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qFxCwBgmt3CrCWCV7yrMGB
        subject_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兴吾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bNADKLFmRqexCNJnMMLxvi
          claim_id: c_qFxCwBgmt3CrCWCV7yrMGB
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: Q15931809
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sx6bpPJjb8Pknu9YvnQ1rv
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Up9d2jsG7MN3j1HmuzDtHo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XpPVzk2MqUPGbR98GKymdA
          claim_id: c_sx6bpPJjb8Pknu9YvnQ1rv
          source_id: s_QNyGpZPZ1tN6AxK1vHiApq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QNyGpZPZ1tN6AxK1vHiApq
            source_type: api_record
            title: 维基数据：王兴吾（Q15931809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15931809
            external_identifier: Q15931809
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:24.979Z
            metadata_json: null
        - id: cs_qHJhJuakVEWQHfLyPSji6k
          claim_id: c_sx6bpPJjb8Pknu9YvnQ1rv
          source_id: s_Y4nNKnvPxM2f8ATUiGJ3W8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y4nNKnvPxM2f8ATUiGJ3W8
            source_type: api_record
            title: 维基数据：王图炜（Q45676566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45676566
            external_identifier: Q45676566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person:
        id: p_EP4PqN7524Z7izDZZrdxRb
        status: active
        display_name: 王图炜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兴吾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兴吾（1703年—1757年），史料所见人物。本项目依据《王兴吾》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1703年 | accepted |
| death.date | 1757年 | accepted |
| name.primary | 王兴吾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EP4PqN7524Z7izDZZrdxRb | 王图炜 | accepted |

## 外部来源

- [维基数据：王图炜（Q45676566）](https://www.wikidata.org/wiki/Q45676566)
- [维基数据：王兴吾（Q15931809）](https://www.wikidata.org/wiki/Q15931809)
