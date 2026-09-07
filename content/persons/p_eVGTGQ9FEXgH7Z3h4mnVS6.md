---
schema: wang-person/v1
id: p_eVGTGQ9FEXgH7Z3h4mnVS6
status: active
merged_into: null
display_name: 王延
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5DRac0rHNf9iJvSuOJknX3
        subject_person_id: p_eVGTGQ9FEXgH7Z3h4mnVS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延，史料所见人物。本项目依据《王延》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tTZukrEBJFcYD4IOA9qt5U
          claim_id: c_5DRac0rHNf9iJvSuOJknX3
          source_id: s_pUoNec1H4MR94jBE4cd3WG
          stance: supports
          locator: Q26209960
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pUoNec1H4MR94jBE4cd3WG
            source_type: api_record
            title: 维基数据：王延（Q26209960）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209960
            external_identifier: Q26209960
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RjGTnszsaQGtrmMjQSL1R4
        subject_person_id: p_eVGTGQ9FEXgH7Z3h4mnVS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D6gS2xdEeNof2Zime74Bpf
          claim_id: c_RjGTnszsaQGtrmMjQSL1R4
          source_id: s_pUoNec1H4MR94jBE4cd3WG
          stance: supports
          locator: Q26209960
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DFNyXZJ1gRBDxBMKX7AdPY
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eVGTGQ9FEXgH7Z3h4mnVS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8QtxDDgh79qmYr82xqDFEB
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nAtDQBUYFCtL1MBHzuFuWc
            source_type: api_record
            title: 维基数据：王舜（Q10955413）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10955413
            external_identifier: Q10955413
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:19.493Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%9C_(%E8%A5%BF%E6%B1%89)
        - id: cs_LyoEjNdGGCoht5yXCqSthc
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_pUoNec1H4MR94jBE4cd3WG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pUoNec1H4MR94jBE4cd3WG
            source_type: api_record
            title: 维基数据：王延（Q26209960）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209960
            external_identifier: Q26209960
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
        - id: cs_cXx8Z98AqGs3DQRkn5GUin
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_dbBXHBs9inRweCAtkaKiMn
          stance: supports
          locator: 条文：之子/之女
          quotation: 王延{{BD|？||23年|}}，西汉外戚，新朝宗室，王莽的安新公王舜之子，弟弟王匡、王林
          interpretation_note: null
          source:
            id: s_dbBXHBs9inRweCAtkaKiMn
            source_type: website
            title: 中文维基百科：王延 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:11.993Z
            metadata_json: null
        - id: cs_qtCmKCS1JsnAAEphnm5nUs
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_PmcfL5zphAmmgNA1nDnrPU
          stance: supports
          locator: 条文：之子/之女
          quotation: 王延，西汉外戚，新朝宗室，王莽的安新公王舜之子，弟弟王匡、王林
          interpretation_note: null
          source:
            id: s_PmcfL5zphAmmgNA1nDnrPU
            source_type: website
            title: 中文维基百科：王延 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:17.760Z
            metadata_json: null
      object_person:
        id: p_b2HpS1yMZuN469vnGZ64c2
        status: active
        display_name: 王舜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延，史料所见人物。本项目依据《王延》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2HpS1yMZuN469vnGZ64c2 | 王舜 | accepted |

## 外部来源

- [维基数据：王舜（Q10955413）](https://www.wikidata.org/wiki/Q10955413)
- [维基数据：王延（Q26209960）](https://www.wikidata.org/wiki/Q26209960)
- [中文维基百科：王延 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89))
