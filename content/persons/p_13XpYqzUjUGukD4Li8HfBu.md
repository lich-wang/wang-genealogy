---
schema: wang-person/v1
id: p_13XpYqzUjUGukD4Li8HfBu
status: active
merged_into: null
display_name: 王琛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WsWtwVPvuz8tMYhLLsi4sB
        subject_person_id: p_13XpYqzUjUGukD4Li8HfBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBWfas3oChx1TS-NREdTZm
          claim_id: c_WsWtwVPvuz8tMYhLLsi4sB
          source_id: s_UX2-JEpcjU3IWWkUAMOmqe
          stance: supports
          locator: 元史·卷一百六十·王鶚：父琛。
          quotation: null
          interpretation_note: 依据《元史·卷一百六十·王鶚传》正史原文补录。
          source: &a1
            id: s_UX2-JEpcjU3IWWkUAMOmqe
            source_type: website
            title: 维基文库：元史·卷一百六十·王鶚
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/元史/卷160
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:44:22.190Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fyeK166OldCIEHFX3LOkL1
        subject_person_id: p_13XpYqzUjUGukD4Li8HfBu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，曹州東明人，元史载其为王鶚之父，王立之子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tHgvnPxIrTFcBvD9rfGetO
          claim_id: c_fyeK166OldCIEHFX3LOkL1
          source_id: s_UX2-JEpcjU3IWWkUAMOmqe
          stance: supports
          locator: 元史·卷一百六十·王鶚：父琛。
          quotation: null
          interpretation_note: 依据《元史·卷一百六十·王鶚传》正史原文补录。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ofaSLA7qfnzwdIYji6NbG2
        subject_person_id: p_QGxSKdqHLJNrQ6R6qBcVv8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_13XpYqzUjUGukD4Li8HfBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2OCN74aSu4wAGAoHUhv6bO
          claim_id: c_ofaSLA7qfnzwdIYji6NbG2
          source_id: s_UX2-JEpcjU3IWWkUAMOmqe
          stance: supports
          locator: 元史·卷一百六十·王鶚：曾祖成，祖立，父琛。
          quotation: null
          interpretation_note: 依据《元史·王鶚传》正史原文补录。
          source:
            id: s_UX2-JEpcjU3IWWkUAMOmqe
            source_type: website
            title: 维基文库：元史·卷一百六十·王鶚
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/元史/卷160
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:44:22.190Z
            metadata_json: null
      object_person:
        id: p_QGxSKdqHLJNrQ6R6qBcVv8
        status: active
        display_name: 王立
        merged_into_person_id: null
  children:
    - claim:
        id: c_HYscA1glzLUU-XjxtBTHS5
        subject_person_id: p_13XpYqzUjUGukD4Li8HfBu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PSSwkob9duMXfk4AWeA2n4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sriW8Z20MaIzzbH54UAJI0
          claim_id: c_HYscA1glzLUU-XjxtBTHS5
          source_id: s_UX2-JEpcjU3IWWkUAMOmqe
          stance: supports
          locator: 元史·卷一百六十·王鶚：曾祖成，祖立，父琛。
          quotation: null
          interpretation_note: 依据《元史·王鶚传》正史原文补录。
          source:
            id: s_UX2-JEpcjU3IWWkUAMOmqe
            source_type: website
            title: 维基文库：元史·卷一百六十·王鶚
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/元史/卷160
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T11:44:22.190Z
            metadata_json: null
      object_person:
        id: p_PSSwkob9duMXfk4AWeA2n4
        status: active
        display_name: 王鶚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，曹州東明人，元史载其为王鶚之父，王立之子。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QGxSKdqHLJNrQ6R6qBcVv8 | 王立 | accepted |
| children | p_PSSwkob9duMXfk4AWeA2n4 | 王鶚 | accepted |

## 外部来源

- [维基文库：元史·卷一百六十·王鶚](https://zh.wikisource.org/wiki/元史/卷160)
