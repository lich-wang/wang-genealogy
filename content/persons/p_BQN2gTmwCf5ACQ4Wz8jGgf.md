---
schema: wang-person/v1
id: p_BQN2gTmwCf5ACQ4Wz8jGgf
status: active
merged_into: null
display_name: 王格
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ww9Tac3Efxk_ye9yvRb8o7
        subject_person_id: p_BQN2gTmwCf5ACQ4Wz8jGgf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6OE57jKQXmVa8LpEl-1zO4
          claim_id: c_ww9Tac3Efxk_ye9yvRb8o7
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
        id: c_we5K4FvuiBAmpW99KLQT9x
        subject_person_id: p_BQN2gTmwCf5ACQ4Wz8jGgf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UPy34uFDX4QdXeo3nqgetc
          claim_id: c_we5K4FvuiBAmpW99KLQT9x
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_U3uV7ZM71NfGNoGV47f6Th
        subject_person_id: p_BQN2gTmwCf5ACQ4Wz8jGgf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K67b54WhuwxiFBPKMMJrG1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yiz2FQ8RS5ojFiHzk2M1yR
          claim_id: c_U3uV7ZM71NfGNoGV47f6Th
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 至五世王十朋的祖父王格时，家业始兴。
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
  other: []
---

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王格，史料所见人物。本项目依据《王十朋》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王格 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_K67b54WhuwxiFBPKMMJrG1 | 王十朋 | accepted |

## 外部来源

- [中文维基百科：王十朋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B)
