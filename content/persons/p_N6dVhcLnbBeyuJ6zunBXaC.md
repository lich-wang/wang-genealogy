---
schema: wang-person/v1
id: p_N6dVhcLnbBeyuJ6zunBXaC
status: active
merged_into: null
display_name: 王登联
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KGD6I3YGIiqgj1NgDZYYha
        subject_person_id: p_N6dVhcLnbBeyuJ6zunBXaC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登联（卒于1666年），史料所见人物。本项目依据《王登联》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BLZlMkS2Se-DLGQTjQqI8Z
          claim_id: c_KGD6I3YGIiqgj1NgDZYYha
          source_id: s_YbdDEQSNZk2p6L5MiPgJKD
          stance: supports
          locator: Q15938142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YbdDEQSNZk2p6L5MiPgJKD
            source_type: api_record
            title: 维基数据：王登联（Q15938142）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938142
            external_identifier: Q15938142
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hLGhAKxG51ETW5HZYU59PU
        subject_person_id: p_N6dVhcLnbBeyuJ6zunBXaC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1666-01-01
            latest: 1666-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MFpvsE9yPLJSuE4KYFBSWE
          claim_id: c_hLGhAKxG51ETW5HZYU59PU
          source_id: s_YbdDEQSNZk2p6L5MiPgJKD
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
        id: c_FYL7rmGeurU6A4N9QEHas8
        subject_person_id: p_N6dVhcLnbBeyuJ6zunBXaC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登联
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ahXjaQMKukQ9A78PbMK5xb
          claim_id: c_FYL7rmGeurU6A4N9QEHas8
          source_id: s_YbdDEQSNZk2p6L5MiPgJKD
          stance: supports
          locator: Q15938142
          quotation: null
          interpretation_note: null
          source:
            id: s_YbdDEQSNZk2p6L5MiPgJKD
            source_type: api_record
            title: 维基数据：王登联（Q15938142）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938142
            external_identifier: Q15938142
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
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

# 王登联

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登联（卒于1666年），史料所见人物。本项目依据《王登联》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1666年 | accepted |
| name.primary | 王登联 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王登联（Q15938142）](https://www.wikidata.org/wiki/Q15938142)
