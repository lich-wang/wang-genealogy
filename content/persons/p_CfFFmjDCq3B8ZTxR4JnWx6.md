---
schema: wang-person/v1
id: p_CfFFmjDCq3B8ZTxR4JnWx6
status: active
merged_into: null
display_name: 王谅
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DFBT1oLLopSE6fGHTKxwua
        subject_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谅，史料所见人物。本项目依据《王同皎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ywjemjm7NVFrBk7C3eD9Gh
          claim_id: c_DFBT1oLLopSE6fGHTKxwua
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DMNAAKjp9e4Wa5XuwGoHb7
            source_type: website
            title: 中文维基百科：王同皎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.440Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jw888EukqUAf15VRV12uUV
        subject_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谅
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_irNMfirgd3QNm1uZKew6cB
          claim_id: c_Jw888EukqUAf15VRV12uUV
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
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
        id: c_79UreWb1xp855wMbyfU2P5
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JDvSPtLSJ4pv5avNZhFfY4
          claim_id: c_79UreWb1xp855wMbyfU2P5
          source_id: s_uQxBP7trwtkiRpga2cu9eC
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王谅，光禄卿、鸿胪少卿，袭琅琊郡公，娶许王李素节之孙、褒信郡王李璆之季女。
          interpretation_note: null
          source:
            id: s_uQxBP7trwtkiRpga2cu9eC
            source_type: website
            title: 中文维基百科：王繇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:50.181Z
            metadata_json: null
      object_person:
        id: p_PcarY3s2HbN5X2amcQ3Lxq
        status: active
        display_name: 王繇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Us5S6CGArwxjFAePmEeQBr
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CfFFmjDCq3B8ZTxR4JnWx6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZjDkUXMDybm3uW2xoWv9Lw
          claim_id: c_Us5S6CGArwxjFAePmEeQBr
          source_id: s_DMNAAKjp9e4Wa5XuwGoHb7
          stance: supports
          locator: 条文：条文识读（孙子）
          quotation: 王谅，鸿胪少卿，袭琅琊郡公。有子王润、王鄂
          interpretation_note: null
          source:
            id: s_DMNAAKjp9e4Wa5XuwGoHb7
            source_type: website
            title: 中文维基百科：王同皎
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:53.440Z
            metadata_json: null
      object_person:
        id: p_dwq9QFUznBqpuUBRDrnuss
        status: active
        display_name: 王同皎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王谅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谅，史料所见人物。本项目依据《王同皎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王谅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PcarY3s2HbN5X2amcQ3Lxq | 王繇 | accepted |
| ancestors | p_dwq9QFUznBqpuUBRDrnuss | 王同皎 | accepted |

## 外部来源

- [中文维基百科：王同皎](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%8C%E7%9A%8E)
- [中文维基百科：王繇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B9%87)
