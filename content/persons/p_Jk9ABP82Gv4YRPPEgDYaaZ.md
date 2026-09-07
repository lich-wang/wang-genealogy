---
schema: wang-person/v1
id: p_Jk9ABP82Gv4YRPPEgDYaaZ
status: active
merged_into: null
display_name: 王维珍
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b1yz6fNwy2j5Ujgytb1AWn
        subject_person_id: p_Jk9ABP82Gv4YRPPEgDYaaZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王维珍（卒于1696年），史料所见人物。本项目依据《王维珍》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kl79NlM0ODRFgA5doE8znE
          claim_id: c_b1yz6fNwy2j5Ujgytb1AWn
          source_id: s_uSnLC1jJK3z7XwVDJmkX8D
          stance: supports
          locator: Q12269890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uSnLC1jJK3z7XwVDJmkX8D
            source_type: api_record
            title: 维基数据：王维珍（Q12269890）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q12269890
            external_identifier: Q12269890
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:04.437Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JD6P8g3VWc1Pbs4XRsGaaQ
        subject_person_id: p_Jk9ABP82Gv4YRPPEgDYaaZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1696年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1696-01-01
            latest: 1696-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NnzJ3pKM7SBtu8JCNCkS8e
          claim_id: c_JD6P8g3VWc1Pbs4XRsGaaQ
          source_id: s_uSnLC1jJK3z7XwVDJmkX8D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uSnLC1jJK3z7XwVDJmkX8D
            source_type: api_record
            title: 维基数据：王维珍（Q12269890）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q12269890
            external_identifier: Q12269890
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:04.437Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_35hFAtk1emVmRVapwTum2p
        subject_person_id: p_Jk9ABP82Gv4YRPPEgDYaaZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王维珍
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oC39Lb4PHZTAdUsC9bLvKY
          claim_id: c_35hFAtk1emVmRVapwTum2p
          source_id: s_uSnLC1jJK3z7XwVDJmkX8D
          stance: supports
          locator: Q12269890
          quotation: null
          interpretation_note: null
          source: *a1
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

# 王维珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王维珍（卒于1696年），史料所见人物。本项目依据《王维珍》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1696年 | accepted |
| name.primary | 王维珍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王维珍（Q12269890）](https://www.wikidata.org/wiki/Q12269890)
