---
schema: wang-person/v1
id: p_vFBCdQNYBoHXHjCLYgTqM3
status: active
merged_into: null
display_name: 王旁
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SIZzEaPbgUtd6DZJKXfeuX
        subject_person_id: p_vFBCdQNYBoHXHjCLYgTqM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旁，史料所见人物。本项目依据《王安石》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cEMSbKJe7kUrfP8Obcg_bR
          claim_id: c_SIZzEaPbgUtd6DZJKXfeuX
          source_id: s_5g7WxJuDRVzW6i37RBszym
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5g7WxJuDRVzW6i37RBszym
            source_type: website
            title: 中文维基百科：王安石
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.947Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2E2CUfGEzZ3P1hW8sMtBPv
        subject_person_id: p_vFBCdQNYBoHXHjCLYgTqM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旁
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mD3VSXd6MXvkAF6BudF9bP
          claim_id: c_2E2CUfGEzZ3P1hW8sMtBPv
          source_id: s_5g7WxJuDRVzW6i37RBszym
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
        id: c_z5poPLjX3SLzLFrEyWAj9E
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_vFBCdQNYBoHXHjCLYgTqM3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DArf6S3YqFFZouW9qof51z
          claim_id: c_z5poPLjX3SLzLFrEyWAj9E
          source_id: s_5g7WxJuDRVzW6i37RBszym
          stance: supports
          locator: 条文：信息框 children
          quotation: 王旁
          interpretation_note: null
          source:
            id: s_5g7WxJuDRVzW6i37RBszym
            source_type: website
            title: 中文维基百科：王安石
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.947Z
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旁，史料所见人物。本项目依据《王安石》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王旁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |

## 外部来源

- [中文维基百科：王安石](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3)
