---
schema: wang-person/v1
id: p_tw5ctVrp6HrZbsGsUGdjxQ
status: active
merged_into: null
display_name: 王魴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_koGy-aOLayxtp6TJUoX2t5
        subject_person_id: p_tw5ctVrp6HrZbsGsUGdjxQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魴，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S96bD0MwryTPnwuzGUtbzI
          claim_id: c_koGy-aOLayxtp6TJUoX2t5
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
        id: c_21bLq9Z1aabh51jJ27S8qM
        subject_person_id: p_tw5ctVrp6HrZbsGsUGdjxQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魴
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EJjoGep4H4TxzYrrTMtPxa
          claim_id: c_21bLq9Z1aabh51jJ27S8qM
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
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
        id: c_nAUDHbpbhJGp1UQzmFyHvJ
        subject_person_id: p_1FJdZ15XyXMCC5RwrJYVuD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tw5ctVrp6HrZbsGsUGdjxQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PEB4gVQMLZckeEg7BKrFnP
          claim_id: c_nAUDHbpbhJGp1UQzmFyHvJ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 遵生魴
          interpretation_note: null
          source:
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
      object_person:
        id: p_1FJdZ15XyXMCC5RwrJYVuD
        status: active
        display_name: 王遵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8oXK7z645wwhPu9hJkjzt5
        subject_person_id: p_Zn5N6nrdusC5Ut2Q2eoJM7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tw5ctVrp6HrZbsGsUGdjxQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bCBarbdZHVBfJUCb4k7Tdz
          claim_id: c_8oXK7z645wwhPu9hJkjzt5
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（孫）（2世）
          quotation: 魴孫康，康生諶
          interpretation_note: null
          source:
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
      object_person:
        id: p_Zn5N6nrdusC5Ut2Q2eoJM7
        status: active
        display_name: 王康
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王魴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王魴，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王魴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1FJdZ15XyXMCC5RwrJYVuD | 王遵 | accepted |
| ancestors | p_Zn5N6nrdusC5Ut2Q2eoJM7 | 王康 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
