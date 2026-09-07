---
schema: wang-person/v1
id: p_vvqE2mAa43tXLYgrVcoKyQ
status: active
merged_into: null
display_name: 王澤
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H_GJ25Ev0mHAsHlBM6T_9o
        subject_person_id: p_vvqE2mAa43tXLYgrVcoKyQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8mVwlUk3-0dPr0bRDDFKs
          claim_id: c_H_GJ25Ev0mHAsHlBM6T_9o
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X8WQNKLkf7h8mVZMZnj1pb
        subject_person_id: p_vvqE2mAa43tXLYgrVcoKyQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EqySoB5iWT6bV9LTxmkBAn
          claim_id: c_X8WQNKLkf7h8mVZMZnj1pb
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qNLG6wn2UHvPqG8xp6TCj9
        subject_person_id: p_vvqE2mAa43tXLYgrVcoKyQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_187AYgxe91pYGDLoSMKqcX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oqgx8u7Pb5TNWsstsJ8d27
          claim_id: c_qNLG6wn2UHvPqG8xp6TCj9
          source_id: s_KPLVeykgk8KR5R36JgM5EU
          stance: supports
          locator: 卷二十七·王昶传裴注
          quotation: 父澤，字季道。
          interpretation_note: null
          source:
            id: s_KPLVeykgk8KR5R36JgM5EU
            source_type: book
            title: 中文维基文库：三國志/卷27
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B727
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:43.325Z
            metadata_json: null
      object_person:
        id: p_187AYgxe91pYGDLoSMKqcX
        status: active
        display_name: 王昶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澤，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王澤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_187AYgxe91pYGDLoSMKqcX | 王昶 | accepted |

## 外部来源

- [中文维基文库：三國志/卷27](https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97/%E5%8D%B727)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
