---
schema: wang-person/v1
id: p_pGgvd9aHsPh1LAew2MZPZ3
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGgrDvKMfkYcqHuAeYq1f6
        subject_person_id: p_pGgvd9aHsPh1LAew2MZPZ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Axjo_7F4zLSETVtZfCT2EH
          claim_id: c_vGgrDvKMfkYcqHuAeYq1f6
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
        id: c_yu1a4vcLM3z5QUTL9XMXrR
        subject_person_id: p_pGgvd9aHsPh1LAew2MZPZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8uPxuENV38RhXEWuxBiU7Y
          claim_id: c_yu1a4vcLM3z5QUTL9XMXrR
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_5xaAfxPMYS89R5UoC5JfG8
        subject_person_id: p_pGgvd9aHsPh1LAew2MZPZ3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2o7TDRDQVJjCYTjPGQxgV7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UZSPwokC6gt57ff3ttsqLW
          claim_id: c_5xaAfxPMYS89R5UoC5JfG8
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（七世孫）（7世）
          quotation: 忠七世孫直。
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
        id: p_2o7TDRDQVJjCYTjPGQxgV7
        status: active
        display_name: 王直
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2o7TDRDQVJjCYTjPGQxgV7 | 王直 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
