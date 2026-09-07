---
schema: wang-person/v1
id: p_Zn5N6nrdusC5Ut2Q2eoJM7
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zx0Hf7Zb-T6pWb-e0ogRp2
        subject_person_id: p_Zn5N6nrdusC5Ut2Q2eoJM7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2E8XBSIwAWdVMYFuWjm8oI
          claim_id: c_zx0Hf7Zb-T6pWb-e0ogRp2
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
        id: c_LbXPbHMBTFGEvyBAH76sJS
        subject_person_id: p_Zn5N6nrdusC5Ut2Q2eoJM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4kVwMYDYNiKuEy2ks1MvLY
          claim_id: c_LbXPbHMBTFGEvyBAH76sJS
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
        id: c_oQntkxQNJEXcGAkF3N7CQ6
        subject_person_id: p_Zn5N6nrdusC5Ut2Q2eoJM7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_G7nCMo2oHDkGFeELJEFsV2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NgWfuqH9Fb6Vg1yFG5kL9d
          claim_id: c_oQntkxQNJEXcGAkF3N7CQ6
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 康生諶，諶生鵠
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
        id: p_G7nCMo2oHDkGFeELJEFsV2
        status: active
        display_name: 王諶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
        id: p_tw5ctVrp6HrZbsGsUGdjxQ
        status: active
        display_name: 王魴
        merged_into_person_id: null
  other: []
---

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王康，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王康 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G7nCMo2oHDkGFeELJEFsV2 | 王諶 | accepted |
| descendants | p_tw5ctVrp6HrZbsGsUGdjxQ | 王魴 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
