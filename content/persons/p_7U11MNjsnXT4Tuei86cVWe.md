---
schema: wang-person/v1
id: p_7U11MNjsnXT4Tuei86cVWe
status: active
merged_into: null
display_name: 王橐
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7bTnYLsAbkCjQEKdLRrUNa
        subject_person_id: p_7U11MNjsnXT4Tuei86cVWe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橐（卒于1161年），史料所见人物。本项目依据《王橐》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xQQVk_G7bz8kLGGgfV0RbX
          claim_id: c_7bTnYLsAbkCjQEKdLRrUNa
          source_id: s_6ZfgszfkMkbh2j5aL8mmF8
          stance: supports
          locator: Q45383766
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6ZfgszfkMkbh2j5aL8mmF8
            source_type: api_record
            title: 维基数据：王橐（Q45383766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45383766
            external_identifier: Q45383766
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:19.133Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nCFL6fnLi5bsjxSmW9dtD9
        subject_person_id: p_7U11MNjsnXT4Tuei86cVWe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1161年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1161-01-01
            latest: 1161-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PKS1SHCBCZST5zqMbR46kD
          claim_id: c_nCFL6fnLi5bsjxSmW9dtD9
          source_id: s_6ZfgszfkMkbh2j5aL8mmF8
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
        id: c_zhrJ988KMPsQq1a9cyC7M6
        subject_person_id: p_7U11MNjsnXT4Tuei86cVWe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z3XgBY1NwxVG5sqXxDHbe5
          claim_id: c_zhrJ988KMPsQq1a9cyC7M6
          source_id: s_6ZfgszfkMkbh2j5aL8mmF8
          stance: supports
          locator: Q45383766
          quotation: null
          interpretation_note: null
          source:
            id: s_6ZfgszfkMkbh2j5aL8mmF8
            source_type: api_record
            title: 维基数据：王橐（Q45383766）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45383766
            external_identifier: Q45383766
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:19.133Z
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

# 王橐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王橐（卒于1161年），史料所见人物。本项目依据《王橐》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1161年 | accepted |
| name.primary | 王橐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王橐（Q45383766）](https://www.wikidata.org/wiki/Q45383766)
