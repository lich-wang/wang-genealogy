---
schema: wang-person/v1
id: p_bvfS4Dfw6Yxku7ijMc2RS6
status: active
merged_into: null
display_name: 王蘊
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pfoM6ZPbzUEfBq2qjDIqht
        subject_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊，史料所见人物。本项目依据《王蘊》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FD4-18a-UsNkleHAHw7NcC
          claim_id: c_pfoM6ZPbzUEfBq2qjDIqht
          source_id: s_UUXiCNYxp6g8cnPoWW9idP
          stance: supports
          locator: Q48936426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UUXiCNYxp6g8cnPoWW9idP
            source_type: api_record
            title: 维基数据：王蘊（Q48936426）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48936426
            external_identifier: Q48936426
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%98%8A_(%E5%8A%89%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGaCGUq4jTBGHJ97An187f
        subject_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PK1iYa6QY4U2SN14GySB7E
          claim_id: c_PGaCGUq4jTBGHJ97An187f
          source_id: s_UUXiCNYxp6g8cnPoWW9idP
          stance: supports
          locator: Q48936426
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EWkQHXPTez6jeHtwUDe1dx
        subject_person_id: p_1Q4woESTMQj8wKj15P4Nwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SRLhD8xS2bAAujHnnLBMrK
          claim_id: c_EWkQHXPTez6jeHtwUDe1dx
          source_id: s_nTfNurm19GjeuwxJH5BQkV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nTfNurm19GjeuwxJH5BQkV
            source_type: api_record
            title: 维基数据：王楷（Q66776942）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q66776942
            external_identifier: Q66776942
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:26.424Z
            metadata_json: null
        - id: cs_cK23iodqQTqpeV8fZFVDqF
          claim_id: c_EWkQHXPTez6jeHtwUDe1dx
          source_id: s_UUXiCNYxp6g8cnPoWW9idP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UUXiCNYxp6g8cnPoWW9idP
            source_type: api_record
            title: 维基数据：王蘊（Q48936426）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48936426
            external_identifier: Q48936426
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%98%8A_(%E5%8A%89%E5%AE%8B)
      object_person:
        id: p_1Q4woESTMQj8wKj15P4Nwj
        status: active
        display_name: 王楷
        merged_into_person_id: null
  children:
    - claim:
        id: c_NK3dDsFUN5487VmkULFe89
        subject_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_uHCJGQ3nrtmy5ktrKYuEXh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PGbJNZ9pY4iiaQhXu9sqUP
          claim_id: c_NK3dDsFUN5487VmkULFe89
          source_id: s_FLBmfzHfd7MqvBFe8CkFeq
          stance: supports
          locator: 条文：王蘊子
          quotation: 王熙，王蘊子，太子洗馬，娶鄱陽公主。
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
        - id: cs_RY9zPAL9maANqD878p54oe
          claim_id: c_NK3dDsFUN5487VmkULFe89
          source_id: s_e2jc7Bb9DND1V2JQQsW35p
          stance: supports
          locator: 条文：王蘊子
          quotation: 王熙，王蘊子，太子洗馬，娶鄱陽公主。
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
        - id: cs_H7rJeD2uejbqe651KmB6Em
          claim_id: c_NK3dDsFUN5487VmkULFe89
          source_id: s_86MPdYHvmEK1YxdBMsRrwM
          stance: supports
          locator: 条文：王蘊子
          quotation: 王熙，王蘊子，太子洗馬，娶鄱陽公主。
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
        id: p_uHCJGQ3nrtmy5ktrKYuEXh
        status: active
        display_name: 王熙
        merged_into_person_id: null
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
        id: p_6sxCAiUpHCGj4Gf87B7FRN
        status: active
        display_name: 王履
        merged_into_person_id: null
    - claim:
        id: c_WZYEzMC6GLf8cYrnkYXdbW
        subject_person_id: p_bvfS4Dfw6Yxku7ijMc2RS6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KDHyoyPThS4k5UPMDPZAU5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ufQ2bLjWf67NRNButDcS4d
          claim_id: c_WZYEzMC6GLf8cYrnkYXdbW
          source_id: s_FLBmfzHfd7MqvBFe8CkFeq
          stance: supports
          locator: 条文：王蘊子
          quotation: 王爽，王蘊子，官至侍中。後參與王恭起兵，王恭兵敗後被誅殺。
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
        - id: cs_1At1uS9U3FtwdPUXuASTQy
          claim_id: c_WZYEzMC6GLf8cYrnkYXdbW
          source_id: s_e2jc7Bb9DND1V2JQQsW35p
          stance: supports
          locator: 条文：王蘊子
          quotation: 王爽，王蘊子，官至侍中。後參與王恭起兵，王恭兵敗後被誅殺。
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
        - id: cs_Sxbd81UzSWBLsui1sHwMmi
          claim_id: c_WZYEzMC6GLf8cYrnkYXdbW
          source_id: s_XGxL8B3AfBW3CJcuoSNg2G
          stance: supports
          locator: 条文：王蘊子
          quotation: 王爽，王蘊子，官至侍中。後參與王恭起兵，王恭兵敗後被誅殺。
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
        - id: cs_xd1GbxJKyTaaWC1e9UNHw8
          claim_id: c_WZYEzMC6GLf8cYrnkYXdbW
          source_id: s_86MPdYHvmEK1YxdBMsRrwM
          stance: supports
          locator: 条文：王蘊子
          quotation: 王爽，王蘊子，官至侍中。後參與王恭起兵，王恭兵敗後被誅殺。
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
        id: p_KDHyoyPThS4k5UPMDPZAU5
        status: active
        display_name: 王爽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蘊，史料所见人物。本项目依据《王蘊》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蘊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Q4woESTMQj8wKj15P4Nwj | 王楷 | accepted |
| children | p_uHCJGQ3nrtmy5ktrKYuEXh | 王熙 | accepted |
| children | p_6sxCAiUpHCGj4Gf87B7FRN | 王履 | accepted |
| children | p_KDHyoyPThS4k5UPMDPZAU5 | 王爽 | accepted |

## 外部来源

- [维基数据：王楷（Q66776942）](https://www.wikidata.org/wiki/Q66776942)
- [维基数据：王蘊（Q48936426）](https://www.wikidata.org/wiki/Q48936426)
- [中文维基百科：王濛 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BF%9B_(%E4%B8%9C%E6%99%8B))
