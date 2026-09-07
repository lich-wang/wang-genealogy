---
schema: wang-person/v1
id: p_Fsi5t2vmKzaL6HLmHxkFQa
status: active
merged_into: null
display_name: 王世傑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s02B2kRQNvzIWQI6cbSLTg
        subject_person_id: p_Fsi5t2vmKzaL6HLmHxkFQa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，史料所见人物。本项目依据《王陽明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_d3aWnALP2bFcvOJR6YMPJC
          claim_id: c_s02B2kRQNvzIWQI6cbSLTg
          source_id: s_JztmEnfZGFhb6RGHDcNuiu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JztmEnfZGFhb6RGHDcNuiu
            source_type: website
            title: 中文维基百科：王陽明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nCmKxQ8RH9PL5JsnpnVxqb
        subject_person_id: p_Fsi5t2vmKzaL6HLmHxkFQa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a54ktHEEJMjdKW7BNDNE8B
          claim_id: c_nCmKxQ8RH9PL5JsnpnVxqb
          source_id: s_JztmEnfZGFhb6RGHDcNuiu
          stance: supports
          locator: CBDB:null
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
  descendants:
    - claim:
        id: c_aubsrBbia32aX9ATAc347v
        subject_person_id: p_Fsi5t2vmKzaL6HLmHxkFQa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TQiMhGLRXGBc7HWBFHEr7P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9GvLHr33hgJM8xtk9FNGY5
          claim_id: c_aubsrBbia32aX9ATAc347v
          source_id: s_JztmEnfZGFhb6RGHDcNuiu
          stance: supports
          locator: 条文：信息框 親屬（曾祖父）（3世）
          quotation: 王世傑（曾祖父）
          interpretation_note: null
          source:
            id: s_JztmEnfZGFhb6RGHDcNuiu
            source_type: website
            title: 中文维基百科：王陽明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_TQiMhGLRXGBc7HWBFHEr7P
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  other: []
---

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世傑，史料所见人物。本项目依据《王陽明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王世傑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TQiMhGLRXGBc7HWBFHEr7P | 王守仁 | accepted |

## 外部来源

- [中文维基百科：王陽明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E)
