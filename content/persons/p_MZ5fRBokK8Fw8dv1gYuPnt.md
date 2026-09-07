---
schema: wang-person/v1
id: p_MZ5fRBokK8Fw8dv1gYuPnt
status: active
merged_into: null
display_name: 王郁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xDBTLEqqRN6Ss1WpLJG0Mc
        subject_person_id: p_MZ5fRBokK8Fw8dv1gYuPnt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_C53oEXlk3COMEkvA5sbSyA
          claim_id: c_xDBTLEqqRN6Ss1WpLJG0Mc
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XFeonVKiAGdjz4cEFU1wZB
        subject_person_id: p_MZ5fRBokK8Fw8dv1gYuPnt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qCw6QnSaxvh25KR3icwe8P
          claim_id: c_XFeonVKiAGdjz4cEFU1wZB
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
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
        id: c_Pvhp4NuyQvW3n7LmXZTFBd
        subject_person_id: p_MZ5fRBokK8Fw8dv1gYuPnt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNfZ5qzHVynGTRpmH784JC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KCeAhfEVE5bbcKpw5KdAeC
          claim_id: c_Pvhp4NuyQvW3n7LmXZTFBd
          source_id: s_LrXVeZAKgNxTqQ6xTfH7kn
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王郁
          interpretation_note: null
          source:
            id: s_LrXVeZAKgNxTqQ6xTfH7kn
            source_type: website
            title: 中文维基百科：王瓘
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:51.888Z
            metadata_json: null
      object_person:
        id: p_LNfZ5qzHVynGTRpmH784JC
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王郁，史料所见人物。本项目依据《王瓘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王郁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LNfZ5qzHVynGTRpmH784JC | 王瓘 | accepted |

## 外部来源

- [中文维基百科：王瓘](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%93%98)
