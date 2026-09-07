---
schema: wang-person/v1
id: p_3Ay8Fcu4Qh6NPDuMEYNHBN
status: active
merged_into: null
display_name: 王納
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zucGMam9Z6zccoxYAN7hal
        subject_person_id: p_3Ay8Fcu4Qh6NPDuMEYNHBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_nXyvm71qtbuf-TRWMWlPrF
          claim_id: c_zucGMam9Z6zccoxYAN7hal
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7foN5mXJt9AwHgtB9oN2q
        subject_person_id: p_3Ay8Fcu4Qh6NPDuMEYNHBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jKc3hgYURVKfev9BnnxFir
          claim_id: c_g7foN5mXJt9AwHgtB9oN2q
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
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
        id: c_BxkJ8sP8ZQo5kLC41XJdDv
        subject_person_id: p_89sYwmpPra88h8E1JqNK5W
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3Ay8Fcu4Qh6NPDuMEYNHBN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TbpMCNUMEeKqPzaTQ8yPLa
          claim_id: c_BxkJ8sP8ZQo5kLC41XJdDv
          source_id: s_ADr4kXZskn3NqTtSxjwC4b
          stance: supports
          locator: 卷七十五·愉子綏
          quotation: 愉子綏……坐父愉之謀，與弟納並被誅。
          interpretation_note: null
          source:
            id: s_ADr4kXZskn3NqTtSxjwC4b
            source_type: book
            title: 中文维基文库：晉書/卷075
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T10:37:49.107Z
            metadata_json: null
      object_person:
        id: p_89sYwmpPra88h8E1JqNK5W
        status: active
        display_name: 王愉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王納

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王納，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王納 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_89sYwmpPra88h8E1JqNK5W | 王愉 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
- [中文维基文库：晉書/卷075](https://zh.wikisource.org/wiki/%E6%99%89%E6%9B%B8/%E5%8D%B7075)
