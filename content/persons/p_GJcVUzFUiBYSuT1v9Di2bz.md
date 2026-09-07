---
schema: wang-person/v1
id: p_GJcVUzFUiBYSuT1v9Di2bz
status: active
merged_into: null
display_name: 王稚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sy4nasFRx-n_xD0LLKooze
        subject_person_id: p_GJcVUzFUiBYSuT1v9Di2bz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稚，史料所见人物。本项目依据《王衮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I9Z19KGHq4dY3rzKCoPWWJ
          claim_id: c_Sy4nasFRx-n_xD0LLKooze
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kLzis6h3JNqrVMxgj73TSP
        subject_person_id: p_GJcVUzFUiBYSuT1v9Di2bz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稚
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ewgcixHTZh7B2zSqMn9LDy
          claim_id: c_kLzis6h3JNqrVMxgj73TSP
          source_id: s_iWbwQosLW2HFybpKpbUPvH
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
        id: c_YnNAS2ZvymLSw9txRy1MEu
        subject_person_id: p_GJcVUzFUiBYSuT1v9Di2bz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WCmN51QPvDxNP1Y4McFWjJ
          claim_id: c_YnNAS2ZvymLSw9txRy1MEu
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（孙子）（2世）
          quotation: 南梁侍中、左光禄大夫、驸马都尉王稚的孙子
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_J6FQ5ep9CP2gSztkyLsnkF
          claim_id: c_YnNAS2ZvymLSw9txRy1MEu
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 南梁侍中、左光禄大夫、驸马都尉王稚的孙子。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_PGJAWHxYxJtx3aVz4EvhUR
        status: active
        display_name: 王衮
        merged_into_person_id: null
  other: []
---

# 王稚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稚，史料所见人物。本项目依据《王衮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王稚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PGJAWHxYxJtx3aVz4EvhUR | 王衮 | accepted |

## 外部来源

- [中文维基百科：王衮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE)
