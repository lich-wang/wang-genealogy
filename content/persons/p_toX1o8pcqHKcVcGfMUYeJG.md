---
schema: wang-person/v1
id: p_toX1o8pcqHKcVcGfMUYeJG
status: active
merged_into: null
display_name: 裴氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_syUIeLnJMRycur6uVpW1rj
        subject_person_id: p_toX1o8pcqHKcVcGfMUYeJG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 裴氏，史料所见人物。本项目依据《王勮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2JmAJJwHupFnEMho3NAsgu
          claim_id: c_syUIeLnJMRycur6uVpW1rj
          source_id: s_X7CkH8nd2HM7JKNDHBuCFW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_X7CkH8nd2HM7JKNDHBuCFW
            source_type: website
            title: 中文维基百科：王勮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tYqgUomKGBUdkDoouaWGS
        subject_person_id: p_toX1o8pcqHKcVcGfMUYeJG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 裴氏
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UTNDS4iic4FEFNM8R7KYS1
          claim_id: c_5tYqgUomKGBUdkDoouaWGS
          source_id: s_X7CkH8nd2HM7JKNDHBuCFW
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
  spouses:
    - claim:
        id: c_rSpWQtYGnbVdzaV2m8JX7o
        subject_person_id: p_3CDBAkcgG1mnkdjqn6afQr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_toX1o8pcqHKcVcGfMUYeJG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oEmNPr3tHVDr5rFk9rcwKL
          claim_id: c_rSpWQtYGnbVdzaV2m8JX7o
          source_id: s_X7CkH8nd2HM7JKNDHBuCFW
          stance: supports
          locator: 条文：条文识读（夫人）
          quotation: 河东裴氏，裴行俭女
          interpretation_note: null
          source:
            id: s_X7CkH8nd2HM7JKNDHBuCFW
            source_type: website
            title: 中文维基百科：王勮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_3CDBAkcgG1mnkdjqn6afQr
        status: active
        display_name: 王勮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 裴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 裴氏，史料所见人物。本项目依据《王勮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 裴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3CDBAkcgG1mnkdjqn6afQr | 王勮 | accepted |

## 外部来源

- [中文维基百科：王勮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE)
