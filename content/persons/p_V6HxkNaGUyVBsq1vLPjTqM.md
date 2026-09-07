---
schema: wang-person/v1
id: p_V6HxkNaGUyVBsq1vLPjTqM
status: active
merged_into: null
display_name: 王嘉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iJ00WIyUUd9afD0rSTEsjF
        subject_person_id: p_V6HxkNaGUyVBsq1vLPjTqM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉，史料所见人物。本项目依据《王光 (西汉)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_iof_ha31SmgvAecFQ1cSmB
          claim_id: c_iJ00WIyUUd9afD0rSTEsjF
          source_id: s_kg4q9PvZNVg9F6YBqWefjB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kg4q9PvZNVg9F6YBqWefjB
            source_type: website
            title: 中文维基百科：王光 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mr3yiFgYurNoeBNENHBex1
        subject_person_id: p_V6HxkNaGUyVBsq1vLPjTqM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LbR81LKLx3woHgjEVQo1ZZ
          claim_id: c_mr3yiFgYurNoeBNENHBex1
          source_id: s_kg4q9PvZNVg9F6YBqWefjB
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MLxZ175c1JVVkEBoTXXtNc
        subject_person_id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V6HxkNaGUyVBsq1vLPjTqM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qcXu4ZKrsH1S19KFwMRuBY
          claim_id: c_MLxZ175c1JVVkEBoTXXtNc
          source_id: s_kg4q9PvZNVg9F6YBqWefjB
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 令王光子王嘉嗣爵为侯
          interpretation_note: null
          source:
            id: s_kg4q9PvZNVg9F6YBqWefjB
            source_type: website
            title: 中文维基百科：王光 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.024Z
            metadata_json: null
      object_person:
        id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        status: active
        display_name: 王光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉，史料所见人物。本项目依据《王光 (西汉)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王嘉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qQBKqxPLCKmZ1zh7Gr5SRe | 王光 | accepted |

## 外部来源

- [中文维基百科：王光 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%89_(%E8%A5%BF%E6%B1%89))
