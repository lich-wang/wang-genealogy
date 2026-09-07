---
schema: wang-person/v1
id: p_WE1MjHX5dTWFtBPANaJMmP
status: active
merged_into: null
display_name: 王雍
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwd1XzxXiNC5Tx0WahN4wH
        subject_person_id: p_WE1MjHX5dTWFtBPANaJMmP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍，史料所见人物。本项目依据《王旦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_T2bjqZw2FdU6gu8GBE56ER
          claim_id: c_bwd1XzxXiNC5Tx0WahN4wH
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FMabuxe1fCK9qw1W9aE8oZ
            source_type: website
            title: 中文维基百科：王旦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tw5UtGqLfEjCJJDQyxVar3
        subject_person_id: p_WE1MjHX5dTWFtBPANaJMmP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2vS9eCfJKaKAaPnmCYymrC
          claim_id: c_Tw5UtGqLfEjCJJDQyxVar3
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
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
        id: c_PoCtsqs2iBLB7uF65ixZhX
        subject_person_id: p_dzQsozLMz4kdNcHPqJVsZP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_WE1MjHX5dTWFtBPANaJMmP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NW8E6kN3QapDzxRFZmCibx
          claim_id: c_PoCtsqs2iBLB7uF65ixZhX
          source_id: s_FMabuxe1fCK9qw1W9aE8oZ
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 是年，王旦长子出生。为纪念太宗改元"雍熙"，取名王雍。
          interpretation_note: null
          source:
            id: s_FMabuxe1fCK9qw1W9aE8oZ
            source_type: website
            title: 中文维基百科：王旦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_dzQsozLMz4kdNcHPqJVsZP
        status: active
        display_name: 王旦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雍，史料所见人物。本项目依据《王旦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王雍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dzQsozLMz4kdNcHPqJVsZP | 王旦 | accepted |

## 外部来源

- [中文维基百科：王旦](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%A6)
