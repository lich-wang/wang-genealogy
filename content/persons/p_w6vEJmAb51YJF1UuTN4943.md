---
schema: wang-person/v1
id: p_w6vEJmAb51YJF1UuTN4943
status: active
merged_into: null
display_name: 王孝總
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f5u5M8MlAbfjdPubSdYz1V
        subject_person_id: p_w6vEJmAb51YJF1UuTN4943
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝總（1888年—1978年），史料所见人物。本项目依据《王孝總》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wf4pg3xg2m7_oSZC0XilDS
          claim_id: c_f5u5M8MlAbfjdPubSdYz1V
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: Q98066484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CFM8wMEHDJDSsm7Y872D6X
            source_type: api_record
            title: 维基数据：王孝總（Q98066484）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066484
            external_identifier: Q98066484
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dkzZQ8XDgRA5B2cpd93fQ9
        subject_person_id: p_w6vEJmAb51YJF1UuTN4943
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1888年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1888-01-01
            latest: 1888-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dQFfkLcHFDVDJQdx1CiQ8Q
          claim_id: c_dkzZQ8XDgRA5B2cpd93fQ9
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zLo8JgoEEjqpxELKmkPpsC
        subject_person_id: p_w6vEJmAb51YJF1UuTN4943
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1978年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1978-01-01
            latest: 1978-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N4EEP6ANMPHqiKRwgRsVd5
          claim_id: c_zLo8JgoEEjqpxELKmkPpsC
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CFM8wMEHDJDSsm7Y872D6X
            source_type: api_record
            title: 维基数据：王孝總（Q98066484）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066484
            external_identifier: Q98066484
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWLLmqAP7phiHKgjqKfRGr
        subject_person_id: p_w6vEJmAb51YJF1UuTN4943
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝總
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DpHDGPPeWGbCfFNBK25Fao
          claim_id: c_BWLLmqAP7phiHKgjqKfRGr
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: Q98066484
          quotation: null
          interpretation_note: null
          source:
            id: s_CFM8wMEHDJDSsm7Y872D6X
            source_type: api_record
            title: 维基数据：王孝總（Q98066484）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066484
            external_identifier: Q98066484
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C7zoqwbSGwzHpSoz8JD7ND
        subject_person_id: p_ggcTrtcGE4fR6SCji22GJb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_w6vEJmAb51YJF1UuTN4943
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c2V3FJ8Xtcq3478Nh532vv
          claim_id: c_C7zoqwbSGwzHpSoz8JD7ND
          source_id: s_iTF9Mt12vtuqehM1NuBXs5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iTF9Mt12vtuqehM1NuBXs5
            source_type: api_record
            title: 维基数据：王仁堪（Q15943465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15943465
            external_identifier: Q15943465
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:45.295Z
            metadata_json: null
        - id: cs_vH2DMH8FGC6aJNDhZXVF3W
          claim_id: c_C7zoqwbSGwzHpSoz8JD7ND
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CFM8wMEHDJDSsm7Y872D6X
            source_type: api_record
            title: 维基数据：王孝總（Q98066484）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066484
            external_identifier: Q98066484
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person:
        id: p_ggcTrtcGE4fR6SCji22GJb
        status: active
        display_name: 王仁堪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝總

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝總（1888年—1978年），史料所见人物。本项目依据《王孝總》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1888年 | accepted |
| death.date | 1978年 | accepted |
| name.primary | 王孝總 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggcTrtcGE4fR6SCji22GJb | 王仁堪 | accepted |

## 外部来源

- [维基数据：王仁堪（Q15943465）](https://www.wikidata.org/wiki/Q15943465)
- [维基数据：王孝總（Q98066484）](https://www.wikidata.org/wiki/Q98066484)
