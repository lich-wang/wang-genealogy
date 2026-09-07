---
schema: wang-person/v1
id: p_QHZ7QEdYaFJrqsvUfLXThS
status: active
merged_into: null
display_name: 临海公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_30PEHJAz1bJZ3AixIkNEGc
        subject_person_id: p_QHZ7QEdYaFJrqsvUfLXThS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 临海公主，史料所见人物。本项目依据《王彬 (南朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LVjJjk9TnF3ZfJTW4d5q6c
          claim_id: c_30PEHJAz1bJZ3AixIkNEGc
          source_id: s_MeteaC5rZduV3qSYs6d9uQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MeteaC5rZduV3qSYs6d9uQ
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.901Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJEdTEsGNYApGL2fwNk4H5
        subject_person_id: p_QHZ7QEdYaFJrqsvUfLXThS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 临海公主
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zfRhgpT1YxB28eHL68FNzr
          claim_id: c_EJEdTEsGNYApGL2fwNk4H5
          source_id: s_MeteaC5rZduV3qSYs6d9uQ
          stance: supports
          locator: Q16603583
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
  spouses:
    - claim:
        id: c_ePNNVJTaKXEP4SAU8j73ZJ
        subject_person_id: p_QHZ7QEdYaFJrqsvUfLXThS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cVDQYFbNAw9vrv8xn9nhfB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_49YuzN2ixFuPHA8GwN2wWE
          claim_id: c_ePNNVJTaKXEP4SAU8j73ZJ
          source_id: s_MeteaC5rZduV3qSYs6d9uQ
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王彬娶齐高帝女临海公主
          interpretation_note: null
          source:
            id: s_MeteaC5rZduV3qSYs6d9uQ
            source_type: website
            title: 中文维基百科：王彬 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:32.901Z
            metadata_json: null
      object_person:
        id: p_cVDQYFbNAw9vrv8xn9nhfB
        status: active
        display_name: 王彬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 临海公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 临海公主，史料所见人物。本项目依据《王彬 (南朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 临海公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cVDQYFbNAw9vrv8xn9nhfB | 王彬 | accepted |

## 外部来源

- [中文维基百科：王彬 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E5%8D%97%E6%9C%9D))
