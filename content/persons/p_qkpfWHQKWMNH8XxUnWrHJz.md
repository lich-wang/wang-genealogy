---
schema: wang-person/v1
id: p_qkpfWHQKWMNH8XxUnWrHJz
status: active
merged_into: null
display_name: 王大閎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3DvNHWOvDl6IMkP9ZQpg72
        subject_person_id: p_qkpfWHQKWMNH8XxUnWrHJz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大閎，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_7-mHTUOc3GHJrBCHin_mZZ
          claim_id: c_3DvNHWOvDl6IMkP9ZQpg72
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PsJf2my4WM4CeXcQju7yMx
            source_type: website
            title: 中文维基百科：王寵惠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dE8NLskMh9SF2PnCAKY4oB
        subject_person_id: p_qkpfWHQKWMNH8XxUnWrHJz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大閎
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mqtH8U1T9s7L7FN5p3Z1dF
          claim_id: c_dE8NLskMh9SF2PnCAKY4oB
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: Q30110196
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MQezk4DHwdr4AVKDTbmJXN
        subject_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qkpfWHQKWMNH8XxUnWrHJz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RuzVYASRpusXUN2hpr4ADc
          claim_id: c_MQezk4DHwdr4AVKDTbmJXN
          source_id: s_h8BCvbyUxkhUwLJPywFL7u
          stance: supports
          locator: 王大闳
          quotation: 父亲是知名法学家王宠惠。
          interpretation_note: null
          source:
            id: s_h8BCvbyUxkhUwLJPywFL7u
            source_type: website
            title: 国立故宫博物院：建筑诗人王大闳
            creator: null
            publisher: 国立故宫博物院
            published_at_text: null
            canonical_url: https://theme.npm.edu.tw/npmArchitecture/ch/page-3.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:09.086Z
            metadata_json: null
      object_person:
        id: p_S19Wsq1aN5wyApGxSWWoLb
        status: active
        display_name: 王寵惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大閎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大閎，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王大閎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S19Wsq1aN5wyApGxSWWoLb | 王寵惠 | accepted |

## 外部来源

- [国立故宫博物院：建筑诗人王大闳](https://theme.npm.edu.tw/npmArchitecture/ch/page-3.html)
- [中文维基百科：王寵惠](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0)
