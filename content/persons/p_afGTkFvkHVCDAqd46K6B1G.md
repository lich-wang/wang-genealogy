---
schema: wang-person/v1
id: p_afGTkFvkHVCDAqd46K6B1G
status: active
merged_into: null
display_name: 王玄邈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KoOsWlFSMPwVHsVdcp6dG7
        subject_person_id: p_afGTkFvkHVCDAqd46K6B1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄邈（426年—497年），字彦远，南朝将领，王玄谟的从弟。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ionl5VktMMFP8Xh06eyO3P
          claim_id: c_KoOsWlFSMPwVHsVdcp6dG7
          source_id: s_l-Sl9DbEJkkXlnOPtmk3Rs
          stance: supports
          locator: 导言
          quotation: 王玄邈（426年—497年），字彦远，南朝将领，王玄谟的从弟。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_l-Sl9DbEJkkXlnOPtmk3Rs
            source_type: website
            title: 中文维基百科：王玄邈
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E9%82%88
            external_identifier: Q11573168
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P9RmFnP35KS7N7RQC8NH6m
        subject_person_id: p_afGTkFvkHVCDAqd46K6B1G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 426年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0426-01-01
            latest: 0426-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N1SCiv6AgPigpopzX2FEHy
          claim_id: c_P9RmFnP35KS7N7RQC8NH6m
          source_id: s_PeASr4vmGAHsuMNLn3cWbA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PeASr4vmGAHsuMNLn3cWbA
            source_type: api_record
            title: 维基数据：王玄邈（Q11573168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573168
            external_identifier: Q11573168
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:19.059Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6J64YZivEsNhXQpNKVYBjV
        subject_person_id: p_afGTkFvkHVCDAqd46K6B1G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 497年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0497-01-01
            latest: 0497-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t4h5HAjkDrB9pwBPFKSBh2
          claim_id: c_6J64YZivEsNhXQpNKVYBjV
          source_id: s_PeASr4vmGAHsuMNLn3cWbA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PeASr4vmGAHsuMNLn3cWbA
            source_type: api_record
            title: 维基数据：王玄邈（Q11573168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573168
            external_identifier: Q11573168
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:19.059Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bXV9FVq6AN7tH8hZJa8PA6
        subject_person_id: p_afGTkFvkHVCDAqd46K6B1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄邈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Km7ZdbkPW5MLLQXeidGR5
          claim_id: c_bXV9FVq6AN7tH8hZJa8PA6
          source_id: s_PeASr4vmGAHsuMNLn3cWbA
          stance: supports
          locator: Q11573168
          quotation: null
          interpretation_note: null
          source:
            id: s_PeASr4vmGAHsuMNLn3cWbA
            source_type: api_record
            title: 维基数据：王玄邈（Q11573168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573168
            external_identifier: Q11573168
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:19.059Z
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

# 王玄邈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄邈（426年—497年），字彦远，南朝将领，王玄谟的从弟。 | accepted |
| birth.date | 426年 | accepted |
| death.date | 497年 | accepted |
| name.primary | 王玄邈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王玄邈（Q11573168）](https://www.wikidata.org/wiki/Q11573168)
- [中文维基百科：王玄邈](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%84%E9%82%88)
