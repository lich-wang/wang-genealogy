---
schema: wang-person/v1
id: p_vS1NSBq3ZTKMGBPQAqMJaX
status: active
merged_into: null
display_name: 王孝緗
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__zMoqYluJdPhMHR046gfuF
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝緗（1890年—1988年），史料所见人物。本项目依据《王孝緗》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0zQ5iG8GDdCBvJpXw88mMa
          claim_id: c__zMoqYluJdPhMHR046gfuF
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: Q98066569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MYdue4fv4JzVRtUZHiThht
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1890年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1890-01-01
            latest: 1890-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4MYvNchEh59d1N17PXpTqM
          claim_id: c_MYdue4fv4JzVRtUZHiThht
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
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
        id: c_5Y1UCU2E3MdCRZqcKDVsx3
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1988年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1988-01-01
            latest: 1988-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yqBvJJzP9D5fwxxpW5Q6Hx
          claim_id: c_5Y1UCU2E3MdCRZqcKDVsx3
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zghMXDTXBozCFK1dv73Cek
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝緗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vBMWQwLPYeqDTYAeb9Db9r
          claim_id: c_zghMXDTXBozCFK1dv73Cek
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: Q98066569
          quotation: null
          interpretation_note: null
          source:
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ubiamHQTuA2gMKeRsM3e28
        subject_person_id: p_ggcTrtcGE4fR6SCji22GJb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MV9rqHjBCvNaQ9oBWDf3eq
          claim_id: c_ubiamHQTuA2gMKeRsM3e28
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
        - id: cs_UXDXGLCsJXjFKGw7qEhfJM
          claim_id: c_ubiamHQTuA2gMKeRsM3e28
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
      object_person:
        id: p_ggcTrtcGE4fR6SCji22GJb
        status: active
        display_name: 王仁堪
        merged_into_person_id: null
  children:
    - claim:
        id: c_EMuGk7Fbtg6SRKhY9MqKnM
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xyTKb2grpvEktR1evrrpmS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4NKm4FVEtKbe1GkHaMNE7v
          claim_id: c_EMuGk7Fbtg6SRKhY9MqKnM
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
        - id: cs_m1ZJyrxQL8sf86QUqtRQVQ
          claim_id: c_EMuGk7Fbtg6SRKhY9MqKnM
          source_id: s_CL7tL6r0eI9SgrOMlR66MF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CL7tL6r0eI9SgrOMlR66MF
            source_type: website
            title: 中文维基百科：王世真
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E7%9C%9F
            external_identifier: Q9185449
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_xyTKb2grpvEktR1evrrpmS
        status: active
        display_name: 王世真
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yV6qP9sLrPgoHgLDgV4hmW
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vxdBkR93GzjQ4p2VuMzGx4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4jPG77gAv8KkX4zmd8Phz
          claim_id: c_yV6qP9sLrPgoHgLDgV4hmW
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Y9PBeBRBnznKkSN6Hp6KCB
          claim_id: c_yV6qP9sLrPgoHgLDgV4hmW
          source_id: s_U95xyDfa75KWHEnVEX2P5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_U95xyDfa75KWHEnVEX2P5P
            source_type: api_record
            title: 维基数据：林劍言（Q98066599）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066599
            external_identifier: Q98066599
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:11.128Z
            metadata_json: null
      object_person:
        id: p_vxdBkR93GzjQ4p2VuMzGx4
        status: active
        display_name: 林劍言
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王孝緗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝緗（1890年—1988年），史料所见人物。本项目依据《王孝緗》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1890年 | accepted |
| death.date | 1988年 | accepted |
| name.primary | 王孝緗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ggcTrtcGE4fR6SCji22GJb | 王仁堪 | accepted |
| children | p_xyTKb2grpvEktR1evrrpmS | 王世真 | accepted |
| spouses | p_vxdBkR93GzjQ4p2VuMzGx4 | 林劍言 | accepted |

## 外部来源

- [维基数据：林劍言（Q98066599）](https://www.wikidata.org/wiki/Q98066599)
- [维基数据：王仁堪（Q15943465）](https://www.wikidata.org/wiki/Q15943465)
- [维基数据：王孝緗（Q98066569）](https://www.wikidata.org/wiki/Q98066569)
- [中文维基百科：王世真](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E7%9C%9F)
