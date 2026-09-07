---
schema: wang-person/v1
id: p_6sxCAiUpHCGj4Gf87B7FRN
status: active
merged_into: null
display_name: 王履
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wc5bjA55zpCv2glZnDn16y
        subject_person_id: p_6sxCAiUpHCGj4Gf87B7FRN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履，史料所见人物。本项目依据《王濛 (东晋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_xC5qNxUyf2Kl1JBDUEzMVn
          claim_id: c_wc5bjA55zpCv2glZnDn16y
          source_id: s_qizSpVQSptPQEGDzdT1AtG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_qizSpVQSptPQEGDzdT1AtG
            source_type: website
            title: 中文维基百科：王濛 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:21.980Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6qfPw7Nevhjfpw8hKyB5Mu
        subject_person_id: p_6sxCAiUpHCGj4Gf87B7FRN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TWD7EAzENsBZK7Rhec3VPG
          claim_id: c_6qfPw7Nevhjfpw8hKyB5Mu
          source_id: s_qizSpVQSptPQEGDzdT1AtG
          stance: supports
          locator: Q3179177
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2TnterJ5VBA65G2RbLjGum
        subject_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_6sxCAiUpHCGj4Gf87B7FRN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3xbqBXn65gXeew2L2vairQ
          claim_id: c_2TnterJ5VBA65G2RbLjGum
          source_id: s_FLBmfzHfd7MqvBFe8CkFeq
          stance: supports
          locator: 条文：王蘊子
          quotation: 王履，王蘊子。
          interpretation_note: null
          source:
            id: s_FLBmfzHfd7MqvBFe8CkFeq
            source_type: website
            title: 中文维基百科：王濛 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:36.095Z
            metadata_json: null
        - id: cs_d3aFtknE2u7geYrG1VkB5Y
          claim_id: c_2TnterJ5VBA65G2RbLjGum
          source_id: s_e2jc7Bb9DND1V2JQQsW35p
          stance: supports
          locator: 条文：王蘊子
          quotation: 王履，王蘊子。
          interpretation_note: null
          source:
            id: s_e2jc7Bb9DND1V2JQQsW35p
            source_type: website
            title: 中文维基百科：王濛 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:35.794Z
            metadata_json: null
        - id: cs_bpmLr2KavwvhJi8zMNMtnk
          claim_id: c_2TnterJ5VBA65G2RbLjGum
          source_id: s_XGxL8B3AfBW3CJcuoSNg2G
          stance: supports
          locator: 条文：王蘊子
          quotation: 王履，王蘊子。
          interpretation_note: null
          source:
            id: s_XGxL8B3AfBW3CJcuoSNg2G
            source_type: website
            title: 中文维基百科：王濛 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:54.034Z
            metadata_json: null
        - id: cs_25iJRNZVN1L1iH4CQLNcBn
          claim_id: c_2TnterJ5VBA65G2RbLjGum
          source_id: s_86MPdYHvmEK1YxdBMsRrwM
          stance: supports
          locator: 条文：王蘊子
          quotation: 王履，王蘊子。
          interpretation_note: null
          source:
            id: s_86MPdYHvmEK1YxdBMsRrwM
            source_type: website
            title: 中文维基百科：王濛 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:34.959Z
            metadata_json: null
      object_person:
        id: p_bvfS4Dfw6Yxku7ijMc2RS6
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王履，史料所见人物。本项目依据《王濛 (东晋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王履 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bvfS4Dfw6Yxku7ijMc2RS6 | 王蘊 | accepted |

## 外部来源

- [中文维基百科：王濛 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B))
