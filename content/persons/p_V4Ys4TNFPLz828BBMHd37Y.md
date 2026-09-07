---
schema: wang-person/v1
id: p_V4Ys4TNFPLz828BBMHd37Y
status: active
merged_into: null
display_name: 繁昌公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJ04fxom1b7Ps75A7XJ0vT
        subject_person_id: p_V4Ys4TNFPLz828BBMHd37Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 繁昌公主，史料所见人物。本项目依据《王琮 (南梁)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_18W1P9PyY8lVLWijYPmjCp
          claim_id: c_AJ04fxom1b7Ps75A7XJ0vT
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9j9UdrKYwgH3UHDPyLusA
        subject_person_id: p_V4Ys4TNFPLz828BBMHd37Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 繁昌公主
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6jHkTQEeDsu8qTbJyaTXH7
          claim_id: c_M9j9UdrKYwgH3UHDPyLusA
          source_id: s_E7Di33LRE7wGzDRVySpJAW
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
  spouses:
    - claim:
        id: c_VrK2ZzSBpWJc8gr6CN74FD
        subject_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V4Ys4TNFPLz828BBMHd37Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d6Xbv6983yBcUNPH97DMzN
          claim_id: c_VrK2ZzSBpWJc8gr6CN74FD
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶始兴王萧亮的女儿繁昌公主为妻。
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_LEGXxBQkFkAzqKRbPcjNy2
        status: active
        display_name: 王琮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 繁昌公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 繁昌公主，史料所见人物。本项目依据《王琮 (南梁)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 繁昌公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LEGXxBQkFkAzqKRbPcjNy2 | 王琮 | accepted |

## 外部来源

- [中文维基百科：王琮 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81))
