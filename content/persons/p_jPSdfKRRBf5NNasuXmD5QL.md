---
schema: wang-person/v1
id: p_jPSdfKRRBf5NNasuXmD5QL
status: active
merged_into: null
display_name: 王辅
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C4X2q0ASft8LsdDemCXEnl
        subject_person_id: p_jPSdfKRRBf5NNasuXmD5QL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辅，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wvp1__WLNNMnJrd_Brty7L
          claim_id: c_C4X2q0ASft8LsdDemCXEnl
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zykS4xYibjScgdQKL9omg8
        subject_person_id: p_jPSdfKRRBf5NNasuXmD5QL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辅
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bYi5d9df3xqsk2yNwLZASh
          claim_id: c_zykS4xYibjScgdQKL9omg8
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
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
        id: c_mGjhdXEgXuCnrG5bGPTkLY
        subject_person_id: p_jPSdfKRRBf5NNasuXmD5QL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K67b54WhuwxiFBPKMMJrG1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9h2GibN7dzzfwYqYUm2XHc
          claim_id: c_mGjhdXEgXuCnrG5bGPTkLY
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（父亲）
          quotation: 至六世王十朋父亲王辅始业儒。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_K67b54WhuwxiFBPKMMJrG1
        status: active
        display_name: 王十朋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王辅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王辅，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王辅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_K67b54WhuwxiFBPKMMJrG1 | 王十朋 | accepted |

## 外部来源

- [中文维基百科：王十朋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B)
