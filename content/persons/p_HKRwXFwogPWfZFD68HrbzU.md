---
schema: wang-person/v1
id: p_HKRwXFwogPWfZFD68HrbzU
status: active
merged_into: null
display_name: 王薄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wuAzSS3LjnACdtDImkhYnM
        subject_person_id: p_HKRwXFwogPWfZFD68HrbzU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薄（卒于622年），史料所见人物。本项目依据《王薄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cVdPmHANT-RRvSCzRDDKxe
          claim_id: c_wuAzSS3LjnACdtDImkhYnM
          source_id: s_Bhj7ttge4a7eELt51rTj1A
          stance: supports
          locator: Q11573203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Bhj7ttge4a7eELt51rTj1A
            source_type: api_record
            title: 维基数据：王薄（Q11573203）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573203
            external_identifier: Q11573203
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:57.125Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CmJCjZS4bEwxdyD6v1bLFP
        subject_person_id: p_HKRwXFwogPWfZFD68HrbzU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 622年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0622-01-01
            latest: 0622-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bXj6pPP2jLHjBWTEVkCMuD
          claim_id: c_CmJCjZS4bEwxdyD6v1bLFP
          source_id: s_Bhj7ttge4a7eELt51rTj1A
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
        id: c_CmcJVCrxpfW54Vv4h6xDhx
        subject_person_id: p_HKRwXFwogPWfZFD68HrbzU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MKgWtme21ERV5bpg62MczL
          claim_id: c_CmcJVCrxpfW54Vv4h6xDhx
          source_id: s_Bhj7ttge4a7eELt51rTj1A
          stance: supports
          locator: Q11573203
          quotation: null
          interpretation_note: null
          source:
            id: s_Bhj7ttge4a7eELt51rTj1A
            source_type: api_record
            title: 维基数据：王薄（Q11573203）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573203
            external_identifier: Q11573203
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:57.125Z
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

# 王薄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王薄（卒于622年），史料所见人物。本项目依据《王薄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 622年 | accepted |
| name.primary | 王薄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王薄（Q11573203）](https://www.wikidata.org/wiki/Q11573203)
