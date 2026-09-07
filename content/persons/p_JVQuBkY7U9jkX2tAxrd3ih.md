---
schema: wang-person/v1
id: p_JVQuBkY7U9jkX2tAxrd3ih
status: active
merged_into: null
display_name: 王昪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rg0fz3KqFVW40xlDT4YDoR
        subject_person_id: p_JVQuBkY7U9jkX2tAxrd3ih
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昪，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tji9fWutV6Pvh6nsgwaBfv
          claim_id: c_rg0fz3KqFVW40xlDT4YDoR
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
        id: c_2nkXJifgBSB3YHrq5oD7zL
        subject_person_id: p_JVQuBkY7U9jkX2tAxrd3ih
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p2ZtXRL3gb2vNanmbyL3Ur
          claim_id: c_2nkXJifgBSB3YHrq5oD7zL
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
        id: c_2mxsYWxc1inX51BtQiQSfZ
        subject_person_id: p_BdwCbLY7cxi16JJQLYDphq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_JVQuBkY7U9jkX2tAxrd3ih
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_reGwtoEhBk6f1e9FFywArU
          claim_id: c_2mxsYWxc1inX51BtQiQSfZ
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·王氏世系表第455—457行
          quotation: 大璡，嘉州司馬。｜昇。……昪，咸陽令。
          interpretation_note: 王昇、王昪位于王大璡的下一代列。
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
        id: p_BdwCbLY7cxi16JJQLYDphq
        status: active
        display_name: 王大璡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昪，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王昪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BdwCbLY7cxi16JJQLYDphq | 王大璡 | accepted |

## 外部来源

- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
