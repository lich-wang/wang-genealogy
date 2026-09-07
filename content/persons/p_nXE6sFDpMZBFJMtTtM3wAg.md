---
schema: wang-person/v1
id: p_nXE6sFDpMZBFJMtTtM3wAg
status: active
merged_into: null
display_name: 王本立
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K3uYTZFBBpIOTOUqu06HCs
        subject_person_id: p_nXE6sFDpMZBFJMtTtM3wAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立（卒于1852年），史料所见人物。本项目依据《王本立》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mjhrxRgqzjoh-rVpKLClhA
          claim_id: c_K3uYTZFBBpIOTOUqu06HCs
          source_id: s_V4j6uP99CJvwm4rYQAzmPY
          stance: supports
          locator: Q15934154
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_V4j6uP99CJvwm4rYQAzmPY
            source_type: api_record
            title: 维基数据：王本立（Q15934154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934154
            external_identifier: Q15934154
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uHvw9kpE6RouPAH4J1Qsmc
        subject_person_id: p_nXE6sFDpMZBFJMtTtM3wAg
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
        - id: cs_91ECa74ANfcYRjitUXvksv
          claim_id: c_uHvw9kpE6RouPAH4J1Qsmc
          source_id: s_V4j6uP99CJvwm4rYQAzmPY
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
        id: c_L3YAb28DaYrqNmwRoPGHNZ
        subject_person_id: p_nXE6sFDpMZBFJMtTtM3wAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5yXri6LNPLAg2ajG89B7kW
          claim_id: c_L3YAb28DaYrqNmwRoPGHNZ
          source_id: s_V4j6uP99CJvwm4rYQAzmPY
          stance: supports
          locator: Q15934154
          quotation: null
          interpretation_note: null
          source:
            id: s_V4j6uP99CJvwm4rYQAzmPY
            source_type: api_record
            title: 维基数据：王本立（Q15934154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934154
            external_identifier: Q15934154
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
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

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本立（卒于1852年），史料所见人物。本项目依据《王本立》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1852年 | accepted |
| name.primary | 王本立 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王本立（Q15934154）](https://www.wikidata.org/wiki/Q15934154)
