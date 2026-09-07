---
schema: wang-person/v1
id: p_RkWGycbpsGgct5tYAJ1TWN
status: active
merged_into: null
display_name: 王象晋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1EmQ4E9iCr37lZFJbYFuTv
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象晋（1561年—1653年），史料所见人物。本项目依据《王象晋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_TmgLobhAYL9zOov24Rk2m5
          claim_id: c_1EmQ4E9iCr37lZFJbYFuTv
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: Q15942062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sTKBanN6rmiKzAxXmZ6mke
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1561-01-01
            latest: 1561-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CVHcUZinJt7mp7w7NpbDXS
          claim_id: c_sTKBanN6rmiKzAxXmZ6mke
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TS4e9H4KYfPD6QEW7PJdY5
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1653-01-01
            latest: 1653-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LYpTBEU7N4sUgCkiLcBDB6
          claim_id: c_TS4e9H4KYfPD6QEW7PJdY5
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UiZvDZ3gTokJAnfLdXNyJM
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象晋
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YXBse1hCCw5PK9FBb1fMcx
          claim_id: c_UiZvDZ3gTokJAnfLdXNyJM
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: Q15942062
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ahjdfx5bc6Cv3XRgpkMLyM
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RvB8FHLDL55dyxbf4jo5pV
          claim_id: c_Ahjdfx5bc6Cv3XRgpkMLyM
          source_id: s_ZAssKkJ7Zz1SV8m1ak26dK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZAssKkJ7Zz1SV8m1ak26dK
            source_type: api_record
            title: 维基数据：王之垣（Q15942432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942432
            external_identifier: Q15942432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:43.685Z
            metadata_json: null
        - id: cs_YL5tMNtjunhiLAikeuQonv
          claim_id: c_Ahjdfx5bc6Cv3XRgpkMLyM
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  children:
    - claim:
        id: c_87iZibnwayT2LL8C31LLTj
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7hSEsnknGNPMP96HiE2DQo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZoQ6jMKseZhtuX1LgBfVL
          claim_id: c_87iZibnwayT2LL8C31LLTj
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
        - id: cs_Qd6BmtFgHDzQv4ShMNXQzb
          claim_id: c_87iZibnwayT2LL8C31LLTj
          source_id: s_cn3dRiM8wwnRHyh7yGYM9f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cn3dRiM8wwnRHyh7yGYM9f
            source_type: api_record
            title: 维基数据：王与胤（Q45493386）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493386
            external_identifier: Q45493386
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:56.366Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%87%E8%83%A4
      object_person:
        id: p_7hSEsnknGNPMP96HiE2DQo
        status: active
        display_name: 王与胤
        merged_into_person_id: null
    - claim:
        id: c_RbJiAHZXPvXDjxvCKjyWUW
        subject_person_id: p_RkWGycbpsGgct5tYAJ1TWN
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_M6u6h5w5R3AY6pHo7M3ELf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pyb2M4HPUFJxPMXMmsvN5N
          claim_id: c_RbJiAHZXPvXDjxvCKjyWUW
          source_id: s_SoDYkCKKjWppFgfjrv5cpM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SoDYkCKKjWppFgfjrv5cpM
            source_type: api_record
            title: 维基数据：王象晋（Q15942062）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15942062
            external_identifier: Q15942062
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:42.065Z
            metadata_json: null
        - id: cs_uMz875MSDV2kxTVdsT99CY
          claim_id: c_RbJiAHZXPvXDjxvCKjyWUW
          source_id: s_1P6uHaLBUJeeFpRT7FqUrq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1P6uHaLBUJeeFpRT7FqUrq
            source_type: api_record
            title: 维基数据：王与敕（Q45473606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45473606
            external_identifier: Q45473606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person:
        id: p_M6u6h5w5R3AY6pHo7M3ELf
        status: active
        display_name: 王与敕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王象晋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象晋（1561年—1653年），史料所见人物。本项目依据《王象晋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1561年 | accepted |
| death.date | 1653年 | accepted |
| name.primary | 王象晋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |
| children | p_7hSEsnknGNPMP96HiE2DQo | 王与胤 | accepted |
| children | p_M6u6h5w5R3AY6pHo7M3ELf | 王与敕 | accepted |

## 外部来源

- [维基数据：王象晋（Q15942062）](https://www.wikidata.org/wiki/Q15942062)
- [维基数据：王与敕（Q45473606）](https://www.wikidata.org/wiki/Q45473606)
- [维基数据：王与胤（Q45493386）](https://www.wikidata.org/wiki/Q45493386)
- [维基数据：王之垣（Q15942432）](https://www.wikidata.org/wiki/Q15942432)
