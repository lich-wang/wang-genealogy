---
schema: wang-person/v1
id: p_gDLgJMdDkagCsbtUEZVTg1
status: active
merged_into: null
display_name: 王守融
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9jstpuetygiDtYyJOtlGco
        subject_person_id: p_gDLgJMdDkagCsbtUEZVTg1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守融（1917年4月20日—1966年8月28日），男，江苏吴县人，中国光学精密仪器专家，曾任南开大学教授，天津大学教授，第三届全国人大代表。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MRX28hLCOV9A8JvG2EXqGF
          claim_id: c_9jstpuetygiDtYyJOtlGco
          source_id: s_kKZJ74QjFY_kDVGUkA0eni
          stance: supports
          locator: 导言
          quotation: 王守融（1917年4月20日—1966年8月28日），男，江苏吴
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_kKZJ74QjFY_kDVGUkA0eni
            source_type: website
            title: 中文维基百科：王守融
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E8%9E%8D
            external_identifier: Q109174391
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Uo8KHzfSatB7MXmNz1BcpH
        subject_person_id: p_gDLgJMdDkagCsbtUEZVTg1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1966年8月28日
            calendar_note: 维基数据 P570 结构化日期，精度：日
            earliest: 1966-08-28
            latest: 1966-08-28
            precision: day
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Es5ELVukQmCvn4nuDs6B5T
          claim_id: c_Uo8KHzfSatB7MXmNz1BcpH
          source_id: s_u1CweqBFgvKP9MEv8HPLZ8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_u1CweqBFgvKP9MEv8HPLZ8
            source_type: api_record
            title: 维基数据：王守融（Q109174391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q109174391
            external_identifier: Q109174391
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.151Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E8%9E%8D
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJ8118ct9hQitg1LEGEkZf
        subject_person_id: p_gDLgJMdDkagCsbtUEZVTg1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守融
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_r8RBcYtdsrZehKiDonmW3G
          claim_id: c_YJ8118ct9hQitg1LEGEkZf
          source_id: s_u1CweqBFgvKP9MEv8HPLZ8
          stance: supports
          locator: Q109174391
          quotation: null
          interpretation_note: null
          source:
            id: s_u1CweqBFgvKP9MEv8HPLZ8
            source_type: api_record
            title: 维基数据：王守融（Q109174391）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q109174391
            external_identifier: Q109174391
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.151Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E8%9E%8D
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fHfTRwsPiP9JNjoeWTby3a
        subject_person_id: p_LXKFHguzJ5DjK8ySHadw6f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gDLgJMdDkagCsbtUEZVTg1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4fuG5Qoe8852p1vzJYK7j
          claim_id: c_fHfTRwsPiP9JNjoeWTby3a
          source_id: s_xmDk28iHW5carA3UyGCGoB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xmDk28iHW5carA3UyGCGoB
            source_type: api_record
            title: 维基数据：王季同（Q61306471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306471
            external_identifier: Q61306471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%A3%E5%90%8C
        - id: cs_8zdsANBnQR6GDiRy58azG6
          claim_id: c_fHfTRwsPiP9JNjoeWTby3a
          source_id: s_kKZJ74QjFY_kDVGUkA0eni
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_LXKFHguzJ5DjK8ySHadw6f
        status: active
        display_name: 王季同
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守融（1917年4月20日—1966年8月28日），男，江苏吴县人，中国光学精密仪器专家，曾任南开大学教授，天津大学教授，第三届全国人大代表。 | accepted |
| death.date | 1966年8月28日 | accepted |
| name.primary | 王守融 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LXKFHguzJ5DjK8ySHadw6f | 王季同 | accepted |

## 外部来源

- [维基数据：王季同（Q61306471）](https://www.wikidata.org/wiki/Q61306471)
- [维基数据：王守融（Q109174391）](https://www.wikidata.org/wiki/Q109174391)
- [中文维基百科：王守融](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E8%9E%8D)
