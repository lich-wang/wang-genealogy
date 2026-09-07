---
schema: wang-person/v1
id: p_obXQJZ7jNDM9WyzWY4SasL
status: active
merged_into: null
display_name: 王皋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hE_rJx4OzNcAIA8MGyoheh
        subject_person_id: p_obXQJZ7jNDM9WyzWY4SasL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋，史料所见人物。本项目依据《王鞏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ETYiZlF1kNWXbj9GPAt4Sx
          claim_id: c_hE_rJx4OzNcAIA8MGyoheh
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9yL5kHiqm5fdkGWejX2UL2
        subject_person_id: p_obXQJZ7jNDM9WyzWY4SasL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A1NzdebXCArwHeW5LbGBPi
          claim_id: c_9yL5kHiqm5fdkGWejX2UL2
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ep5vEwFc2TMf2k3gGwVCiA
        subject_person_id: p_XJ584hRRgmwC1emz21vE1F
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_obXQJZ7jNDM9WyzWY4SasL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8aXUNGwCtT3FVFdYU6QxV
          claim_id: c_ep5vEwFc2TMf2k3gGwVCiA
          source_id: s_2aDX9AG3TA29xxT3gf2JMk
          stance: supports
          locator: 条文：条文识读（生子）
          quotation: 歌妓宇文柔奴（別名寓娘）毅然隨行到嶺南，並生子王皋。
          interpretation_note: null
          source:
            id: s_2aDX9AG3TA29xxT3gf2JMk
            source_type: website
            title: 中文维基百科：王鞏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_XJ584hRRgmwC1emz21vE1F
        status: active
        display_name: 王鞏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王皋，史料所见人物。本项目依据《王鞏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王皋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XJ584hRRgmwC1emz21vE1F | 王鞏 | accepted |

## 外部来源

- [中文维基百科：王鞏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9E%8F)
