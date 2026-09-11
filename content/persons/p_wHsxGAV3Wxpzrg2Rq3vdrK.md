---
schema: wang-person/v1
id: p_wHsxGAV3Wxpzrg2Rq3vdrK
status: active
merged_into: null
display_name: 王季淑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2SKKrIFyqsKoPt6EVGu2vs
        subject_person_id: p_wHsxGAV3Wxpzrg2Rq3vdrK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季淑，史料所见人物。本项目依据《王季淑》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V0P6f5xX0ENV6kEGgsbwIC
          claim_id: c_2SKKrIFyqsKoPt6EVGu2vs
          source_id: s_ZXqEwE5xz1pGoPqXq2K8NB
          stance: supports
          locator: Q131781513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZXqEwE5xz1pGoPqXq2K8NB
            source_type: api_record
            title: 维基数据：王季淑（Q131781513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q131781513
            external_identifier: Q131781513
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7iNxdDBRFJtcYDeofhDgjz
        subject_person_id: p_wHsxGAV3Wxpzrg2Rq3vdrK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季淑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dNKYTYSnoCqDTLVxsWkHq1
          claim_id: c_7iNxdDBRFJtcYDeofhDgjz
          source_id: s_ZXqEwE5xz1pGoPqXq2K8NB
          stance: supports
          locator: Q131781513
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g7o6o7JWCNonNjRayDpc23
        subject_person_id: p_AfuUVSUoLTbNao9TD9JhZG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHsxGAV3Wxpzrg2Rq3vdrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2Sc3aH213dEKVnye7gToL
          claim_id: c_g7o6o7JWCNonNjRayDpc23
          source_id: s_K9bDqFgFM8njU3FAyCHMGz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_K9bDqFgFM8njU3FAyCHMGz
            source_type: api_record
            title: 维基数据：王仁东（Q16260607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260607
            external_identifier: Q16260607
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81%E6%9D%B1
        - id: cs_rZ5jDeSQrYGsro6eDHLKGS
          claim_id: c_g7o6o7JWCNonNjRayDpc23
          source_id: s_ZXqEwE5xz1pGoPqXq2K8NB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_AfuUVSUoLTbNao9TD9JhZG
        status: active
        display_name: 王仁东
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季淑，史料所见人物。本项目依据《王季淑》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王季淑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AfuUVSUoLTbNao9TD9JhZG | 王仁东 | accepted |

## 外部来源

- [维基数据：王季淑（Q131781513）](https://www.wikidata.org/wiki/Q131781513)
- [维基数据：王仁东（Q16260607）](https://www.wikidata.org/wiki/Q16260607)
