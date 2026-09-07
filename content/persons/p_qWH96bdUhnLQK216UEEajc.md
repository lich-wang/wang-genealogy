---
schema: wang-person/v1
id: p_qWH96bdUhnLQK216UEEajc
status: active
merged_into: null
display_name: 王鹏运
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SUU1PJiREdZ4OrjcFyuefP
        subject_person_id: p_qWH96bdUhnLQK216UEEajc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鹏运（1840年代—1904年），史料所见人物。本项目依据《王鹏运》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_a_8E2vPpjC1SpDq8LNSTDq
          claim_id: c_SUU1PJiREdZ4OrjcFyuefP
          source_id: s_TKnXs7PRL4Wgj74pA8pHPE
          stance: supports
          locator: Q15941767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TKnXs7PRL4Wgj74pA8pHPE
            source_type: api_record
            title: 维基数据：王鹏运（Q15941767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941767
            external_identifier: Q15941767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sccn8aE9Ec88ikf5Z7fyv1
        subject_person_id: p_qWH96bdUhnLQK216UEEajc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1840年代
            calendar_note: 维基数据 P569 结构化日期，精度：年代
            earliest: 1840-01-01
            latest: 1849-12-31
            precision: decade
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_upiUXjiXSeWbSzBSPniAb7
          claim_id: c_sccn8aE9Ec88ikf5Z7fyv1
          source_id: s_TKnXs7PRL4Wgj74pA8pHPE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TKnXs7PRL4Wgj74pA8pHPE
            source_type: api_record
            title: 维基数据：王鹏运（Q15941767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941767
            external_identifier: Q15941767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qcc9n6tvkpM2QksyLHBTpT
        subject_person_id: p_qWH96bdUhnLQK216UEEajc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1904年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1904-01-01
            latest: 1904-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cx1NzmdCAw6DGgs7wPUCkY
          claim_id: c_qcc9n6tvkpM2QksyLHBTpT
          source_id: s_TKnXs7PRL4Wgj74pA8pHPE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TKnXs7PRL4Wgj74pA8pHPE
            source_type: api_record
            title: 维基数据：王鹏运（Q15941767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941767
            external_identifier: Q15941767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PnkqUNvojwdxKeEb2F2dz
        subject_person_id: p_qWH96bdUhnLQK216UEEajc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鹏运
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LnFXZiS2f65Hm4WLNzYZTh
          claim_id: c_9PnkqUNvojwdxKeEb2F2dz
          source_id: s_TKnXs7PRL4Wgj74pA8pHPE
          stance: supports
          locator: Q15941767
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vjJmi5185yevrypuKQsbC2
        subject_person_id: p_ZbD99C4BekXwqC5kDUcsjZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qWH96bdUhnLQK216UEEajc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XXfMGHKkFbuWd6BYMaf8L8
          claim_id: c_vjJmi5185yevrypuKQsbC2
          source_id: s_3KcS2RsAfznJnFMUX7s1wg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3KcS2RsAfznJnFMUX7s1wg
            source_type: api_record
            title: 维基数据：王必达（Q45652582）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45652582
            external_identifier: Q45652582
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.194Z
            metadata_json: null
        - id: cs_afNh4CmnyDdHH2EkJ9dwsN
          claim_id: c_vjJmi5185yevrypuKQsbC2
          source_id: s_TKnXs7PRL4Wgj74pA8pHPE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TKnXs7PRL4Wgj74pA8pHPE
            source_type: api_record
            title: 维基数据：王鹏运（Q15941767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941767
            external_identifier: Q15941767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person:
        id: p_ZbD99C4BekXwqC5kDUcsjZ
        status: active
        display_name: 王必达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鹏运

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鹏运（1840年代—1904年），史料所见人物。本项目依据《王鹏运》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1840年代 | accepted |
| death.date | 1904年 | accepted |
| name.primary | 王鹏运 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZbD99C4BekXwqC5kDUcsjZ | 王必达 | accepted |

## 外部来源

- [维基数据：王必达（Q45652582）](https://www.wikidata.org/wiki/Q45652582)
- [维基数据：王鹏运（Q15941767）](https://www.wikidata.org/wiki/Q15941767)
