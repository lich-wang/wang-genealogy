---
schema: wang-person/v1
id: p_SJye2HSLcSNEepwMefBC4B
status: active
merged_into: null
display_name: 金皇后
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amx7K8cRo9wHUAW4EMVSzk
        subject_person_id: p_SJye2HSLcSNEepwMefBC4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 金皇后，史料所见人物。本项目依据《金皇后》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmAkgQUi0HIspNtplOUskJ
          claim_id: c_amx7K8cRo9wHUAW4EMVSzk
          source_id: s_b6smEGf7R8PSuAj6a239Gy
          stance: supports
          locator: Q6470281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_b6smEGf7R8PSuAj6a239Gy
            source_type: api_record
            title: 维基数据：金皇后（Q6470281）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6470281
            external_identifier: Q6470281
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%87%91%E7%9A%87%E5%90%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xqP1swGCbbS63ZKpuGnvhU
        subject_person_id: p_SJye2HSLcSNEepwMefBC4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 金皇后
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqJLS3QSZv1oRPis83RxfZ
          claim_id: c_xqP1swGCbbS63ZKpuGnvhU
          source_id: s_b6smEGf7R8PSuAj6a239Gy
          stance: supports
          locator: Q6470281
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HCG3X1izqDmCfrG64Cn8AQ
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SJye2HSLcSNEepwMefBC4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gdak2CzCcyDLXG7UkrspZw
          claim_id: c_HCG3X1izqDmCfrG64Cn8AQ
          source_id: s_b6smEGf7R8PSuAj6a239Gy
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_3Cs8AtBE2SXMnegZFWMGXR
          claim_id: c_HCG3X1izqDmCfrG64Cn8AQ
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 金皇后

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 金皇后，史料所见人物。本项目依据《金皇后》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 金皇后 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：金皇后（Q6470281）](https://www.wikidata.org/wiki/Q6470281)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
