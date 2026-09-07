---
schema: wang-person/v1
id: p_mfrSi4LJP3NsRDmh6Se9e7
status: active
merged_into: null
display_name: 王頤
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xd2ySDOfFTBtGXga1Scu82
        subject_person_id: p_mfrSi4LJP3NsRDmh6Se9e7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xFDakqozQFbPOj7-8fpyxd
          claim_id: c_xd2ySDOfFTBtGXga1Scu82
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
        id: c_f2YuJpNLMnhd4mMqb1L8qL
        subject_person_id: p_mfrSi4LJP3NsRDmh6Se9e7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hxCxm45ybCCVjy92Hyt9Jm
          claim_id: c_f2YuJpNLMnhd4mMqb1L8qL
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
        id: c_ArTu6zhLWY6quyAAM3wFF2
        subject_person_id: p_rknXJ7R6hW6ko2CAPSqJkK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mfrSi4LJP3NsRDmh6Se9e7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WwNRk4S6cpAVFNhwu2QctG
          claim_id: c_ArTu6zhLWY6quyAAM3wFF2
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 元生頤，皆以中大夫召，不就。
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
  children:
    - claim:
        id: c_DnzbeCJUHDzAJBZM5BE2gF
        subject_person_id: p_mfrSi4LJP3NsRDmh6Se9e7
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Zru5Kv87Ac9fELnRRbbTdQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hNnTXMJuQ1H3hcMUhDsipx
          claim_id: c_DnzbeCJUHDzAJBZM5BE2gF
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 元生頤，皆以中大夫召，不就。生翦，秦大將軍。
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
        id: p_Zru5Kv87Ac9fELnRRbbTdQ
        status: active
        display_name: 王翦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王頤，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王頤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rknXJ7R6hW6ko2CAPSqJkK | 王元 | accepted |
| children | p_Zru5Kv87Ac9fELnRRbbTdQ | 王翦 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
