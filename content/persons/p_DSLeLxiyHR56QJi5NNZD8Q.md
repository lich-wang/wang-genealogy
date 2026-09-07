---
schema: wang-person/v1
id: p_DSLeLxiyHR56QJi5NNZD8Q
status: active
merged_into: null
display_name: 王無忌
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y28Q4mIfs_zBWDhua4LKgY
        subject_person_id: p_DSLeLxiyHR56QJi5NNZD8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無忌，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frddYNgcJEyEMwX2rg7Xgz
          claim_id: c_Y28Q4mIfs_zBWDhua4LKgY
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
        id: c_6AV1KmJsrMKEtg3p5hnAJx
        subject_person_id: p_DSLeLxiyHR56QJi5NNZD8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無忌
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SkE2itPV8utymFqJRGzjY6
          claim_id: c_6AV1KmJsrMKEtg3p5hnAJx
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
        id: c_FtMjxwLbM2P7sqqrBtn8mR
        subject_person_id: p_V49AHk5YVpmiJJt5bCX1Dt
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DSLeLxiyHR56QJi5NNZD8Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n8hNGgKEHTEPLzQqX2CBTr
          claim_id: c_FtMjxwLbM2P7sqqrBtn8mR
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 至昭王彤，生公子無忌，封信陵君
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
        id: p_V49AHk5YVpmiJJt5bCX1Dt
        status: active
        display_name: 王彤
        merged_into_person_id: null
  children:
    - claim:
        id: c_8C5Ef37wQo9pQFUEv2ZR89
        subject_person_id: p_DSLeLxiyHR56QJi5NNZD8Q
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NyySAC1JutD9dRDF2UY8YF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2vptKKwZsBeFWxkkxF3zLd
          claim_id: c_8C5Ef37wQo9pQFUEv2ZR89
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 無忌生閒憂，襲信陵君
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
        id: p_NyySAC1JutD9dRDF2UY8YF
        status: active
        display_name: 王閒憂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王無忌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王無忌，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王無忌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V49AHk5YVpmiJJt5bCX1Dt | 王彤 | accepted |
| children | p_NyySAC1JutD9dRDF2UY8YF | 王閒憂 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
