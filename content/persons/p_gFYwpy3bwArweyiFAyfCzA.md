---
schema: wang-person/v1
id: p_gFYwpy3bwArweyiFAyfCzA
status: active
merged_into: null
display_name: 王敬之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IJOGxzI1_CuKEwhA4PDwXB
        subject_person_id: p_gFYwpy3bwArweyiFAyfCzA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬之，史料所见人物。本项目依据《王念孙》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_v6NGLqMBYzpUZmJBSLths-
          claim_id: c_IJOGxzI1_CuKEwhA4PDwXB
          source_id: s_CgCY4ZD77hQPw8p4KmZirA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CgCY4ZD77hQPw8p4KmZirA
            source_type: website
            title: 中文维基百科：王念孙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%B5%E5%AD%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3yT89twHbRMuiqLB3BQfu
        subject_person_id: p_gFYwpy3bwArweyiFAyfCzA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬之
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tgc84RM9haXe8KgB2BYH2V
          claim_id: c_K3yT89twHbRMuiqLB3BQfu
          source_id: s_CgCY4ZD77hQPw8p4KmZirA
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
        id: c_HH1Yqwsbqo2c8XWeMKmSkp
        subject_person_id: p_ufBkxfH59gVHhCXsfm99um
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_gFYwpy3bwArweyiFAyfCzA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_keJMPZ19oDMLu5CtoR1GhD
          claim_id: c_HH1Yqwsbqo2c8XWeMKmSkp
          source_id: s_CgCY4ZD77hQPw8p4KmZirA
          stance: supports
          locator: 条文：条文识读（次子）
          quotation: 次子王敬之，州學增生。
          interpretation_note: null
          source:
            id: s_CgCY4ZD77hQPw8p4KmZirA
            source_type: website
            title: 中文维基百科：王念孙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%B5%E5%AD%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person:
        id: p_ufBkxfH59gVHhCXsfm99um
        status: active
        display_name: 王念孙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬之，史料所见人物。本项目依据《王念孙》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王敬之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ufBkxfH59gVHhCXsfm99um | 王念孙 | accepted |

## 外部来源

- [中文维基百科：王念孙](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BF%B5%E5%AD%99)
