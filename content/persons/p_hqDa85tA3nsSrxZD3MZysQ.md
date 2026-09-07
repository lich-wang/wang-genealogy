---
schema: wang-person/v1
id: p_hqDa85tA3nsSrxZD3MZysQ
status: active
merged_into: null
display_name: 王累
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTdmlbKTqnkFtRbILr9ypf
        subject_person_id: p_hqDa85tA3nsSrxZD3MZysQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王累（卒于211年），史料所见人物。本项目依据《王累》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dpwVIoiaqzOPXT0tFj4Sir
          claim_id: c_UTdmlbKTqnkFtRbILr9ypf
          source_id: s_MT5CgGa845K9PRP6JN8u3J
          stance: supports
          locator: Q1069276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MT5CgGa845K9PRP6JN8u3J
            source_type: api_record
            title: 维基数据：王累（Q1069276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1069276
            external_identifier: Q1069276
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XHrh9nWSqXUVZxRARjp7cP
        subject_person_id: p_hqDa85tA3nsSrxZD3MZysQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 211年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0211-01-01
            latest: 0211-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BcJTDwu2Xzj6uwCrC28XX6
          claim_id: c_XHrh9nWSqXUVZxRARjp7cP
          source_id: s_MT5CgGa845K9PRP6JN8u3J
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
        id: c_fF2jbCTJq8FBLfAai15tyq
        subject_person_id: p_hqDa85tA3nsSrxZD3MZysQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王累
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KtNJ9BUK5PYy56nmHcNcGa
          claim_id: c_fF2jbCTJq8FBLfAai15tyq
          source_id: s_MT5CgGa845K9PRP6JN8u3J
          stance: supports
          locator: Q1069276
          quotation: null
          interpretation_note: null
          source:
            id: s_MT5CgGa845K9PRP6JN8u3J
            source_type: api_record
            title: 维基数据：王累（Q1069276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1069276
            external_identifier: Q1069276
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
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

# 王累

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王累（卒于211年），史料所见人物。本项目依据《王累》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 211年 | accepted |
| name.primary | 王累 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王累（Q1069276）](https://www.wikidata.org/wiki/Q1069276)
