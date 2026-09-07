---
schema: wang-person/v1
id: p_Ak21xk9bNXbqBKZKZVEpv9
status: active
merged_into: null
display_name: 王寿同
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g6SQu4j8OtqQUra109HEDD
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿同（1804年—1852年），史料所见人物。本项目依据《王寿同》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9wuVdube6IVlI-Jrc8yaHU
          claim_id: c_g6SQu4j8OtqQUra109HEDD
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: Q13688793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ytTVT5xrGtfSmp99AFxZFo
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1804年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1804-01-01
            latest: 1804-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rKgPxmZ2LzuuiH8GHia2bn
          claim_id: c_ytTVT5xrGtfSmp99AFxZFo
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
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
        id: c_CSgF6S4HAruWM4GsDni5Jr
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1852-01-01
            latest: 1852-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xJRyheAUBwGGHZwuQqM8xG
          claim_id: c_CSgF6S4HAruWM4GsDni5Jr
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W5r4dTKUAc4cpqfsCQNUzD
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿同
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LF5rA6KAJheDQXGP47L1u2
          claim_id: c_W5r4dTKUAc4cpqfsCQNUzD
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: Q13688793
          quotation: null
          interpretation_note: null
          source:
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rw6T54zfke7ULyeW5GZAMh
        subject_person_id: p_x9CQGixzEkUnA7H8VckBPu
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PR2oJcudQZ4q7a9m2q68GL
          claim_id: c_Rw6T54zfke7ULyeW5GZAMh
          source_id: s_SwHU4SeGpPq4puTdYE17fn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SwHU4SeGpPq4puTdYE17fn
            source_type: api_record
            title: 维基数据：王引之（Q11573061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573061
            external_identifier: Q11573061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%95%E4%B9%8B
        - id: cs_W9MTMxu7Ph1axBnRn2m6rA
          claim_id: c_Rw6T54zfke7ULyeW5GZAMh
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
      object_person:
        id: p_x9CQGixzEkUnA7H8VckBPu
        status: active
        display_name: 王引之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N4k6N45GPpQBNJM97TeC5T
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PXDbvX2u1UZFi74Zv2of9x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QtfSfV9FkidQAeMv2L9FJY
          claim_id: c_N4k6N45GPpQBNJM97TeC5T
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
        - id: cs_sYMHQuq852aBMMtvVn7MFS
          claim_id: c_N4k6N45GPpQBNJM97TeC5T
          source_id: s_9QeiPeENUYyBhr4B6iZUE5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9QeiPeENUYyBhr4B6iZUE5
            source_type: api_record
            title: 维基数据：康氏（Q13688841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688841
            external_identifier: Q13688841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.616Z
            metadata_json: null
      object_person:
        id: p_PXDbvX2u1UZFi74Zv2of9x
        status: active
        display_name: 康氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王寿同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寿同（1804年—1852年），史料所见人物。本项目依据《王寿同》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1804年 | accepted |
| death.date | 1852年 | accepted |
| name.primary | 王寿同 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x9CQGixzEkUnA7H8VckBPu | 王引之 | accepted |
| spouses | p_PXDbvX2u1UZFi74Zv2of9x | 康氏 | accepted |

## 外部来源

- [维基数据：康氏（Q13688841）](https://www.wikidata.org/wiki/Q13688841)
- [维基数据：王寿同（Q13688793）](https://www.wikidata.org/wiki/Q13688793)
- [维基数据：王引之（Q11573061）](https://www.wikidata.org/wiki/Q11573061)
