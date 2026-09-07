---
schema: wang-person/v1
id: p_Ug8rZ43QxrM1Zcv1ky7qAY
status: active
merged_into: null
display_name: 王恢
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VYSQW0bBUhP2Eac7rqBvtf
        subject_person_id: p_Ug8rZ43QxrM1Zcv1ky7qAY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFeLTfi7xyZXXgOIikYmoF
          claim_id: c_VYSQW0bBUhP2Eac7rqBvtf
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
  - predicate: name.alias
    recommended:
      claim:
        id: c_z99QKqJDi4MsLKp9eQw8Za
        subject_person_id: p_Ug8rZ43QxrM1Zcv1ky7qAY
        claim_kind: property
        predicate: name.alias
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 伊陽君
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Q1ANPXcRfL2aeTzShps8E
          claim_id: c_z99QKqJDi4MsLKp9eQw8Za
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·宰相世系表·王氏
          quotation: 渝生息，為司寇。息生恢，封伊陽君。生元，元生頤，皆以中大夫召，不就。
          interpretation_note: 与东晋王導之孙、王劭之子王恢（既有记录 p_jDe8nWw8Wngg5N7p8i5ZFN）同名异人，相隔七百余年。
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MKGcGnjCFq5QFWJRx7tApt
        subject_person_id: p_Ug8rZ43QxrM1Zcv1ky7qAY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3yL4tPBCnPfkUH7HDmCBiy
          claim_id: c_MKGcGnjCFq5QFWJRx7tApt
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·宰相世系表·王氏
          quotation: 渝生息，為司寇。息生恢，封伊陽君。生元，元生頤，皆以中大夫召，不就。
          interpretation_note: 与东晋王導之孙、王劭之子王恢（既有记录 p_jDe8nWw8Wngg5N7p8i5ZFN）同名异人，相隔七百余年。
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tzQ8gXb1pL8KXHT1tGbdsn
        subject_person_id: p_EJ2TE7o7yGPbcE3jv7WbQY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Ug8rZ43QxrM1Zcv1ky7qAY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RtL4KzJ2zUAGZjJenQZ1TL
          claim_id: c_tzQ8gXb1pL8KXHT1tGbdsn
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 息生恢，封伊陽君。
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
        id: p_EJ2TE7o7yGPbcE3jv7WbQY
        status: active
        display_name: 王息
        merged_into_person_id: null
  children:
    - claim:
        id: c_2z3nmknLGWUpfwcrF4r727
        subject_person_id: p_Ug8rZ43QxrM1Zcv1ky7qAY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rknXJ7R6hW6ko2CAPSqJkK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qHXwPZ5Z53P9mPM484d1br
          claim_id: c_2z3nmknLGWUpfwcrF4r727
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 息生恢，封伊陽君。生元，元生頤，皆以中大夫召，不就。
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
        id: p_rknXJ7R6hW6ko2CAPSqJkK
        status: active
        display_name: 王元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恢，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.alias | 伊陽君 | accepted |
| name.primary | 王恢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EJ2TE7o7yGPbcE3jv7WbQY | 王息 | accepted |
| children | p_rknXJ7R6hW6ko2CAPSqJkK | 王元 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
