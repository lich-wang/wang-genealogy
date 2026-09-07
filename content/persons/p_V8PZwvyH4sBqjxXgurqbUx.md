---
schema: wang-person/v1
id: p_V8PZwvyH4sBqjxXgurqbUx
status: active
merged_into: null
display_name: 王休
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S3ITszpNRa9VjJ9L-Qhkfo
        subject_person_id: p_V8PZwvyH4sBqjxXgurqbUx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休，史料所见人物。本项目依据《中文维基文库：《山西通志》卷073》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3jhv4nfalG2x-UJCrUhuh8
          claim_id: c_S3ITszpNRa9VjJ9L-Qhkfo
          source_id: s_4pESLznDL8PRu8m6WDANM5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4pESLznDL8PRu8m6WDANM5
            source_type: gazetteer
            title: 中文维基文库：《山西通志》卷073
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%B1%B1%E8%A5%BF%E9%80%9A%E5%BF%97_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7073
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.900Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S443LEQsK66TdfQPo75mBh
        subject_person_id: p_V8PZwvyH4sBqjxXgurqbUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yDpgNy3vEyRGm96U4Dy74j
          claim_id: c_S443LEQsK66TdfQPo75mBh
          source_id: s_4pESLznDL8PRu8m6WDANM5
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
        id: c_LAFmH651a4L7m7zG6MJ3Lu
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V8PZwvyH4sBqjxXgurqbUx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3VPjqAzNHrSBFPY71GJpKN
          claim_id: c_LAFmH651a4L7m7zG6MJ3Lu
          source_id: s_4pESLznDL8PRu8m6WDANM5
          stance: supports
          locator: 人物·前秦
          quotation: 王休，猛子，前秦代郡太守。
          interpretation_note: null
          source:
            id: s_4pESLznDL8PRu8m6WDANM5
            source_type: gazetteer
            title: 中文维基文库：《山西通志》卷073
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%B1%B1%E8%A5%BF%E9%80%9A%E5%BF%97_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7073
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.900Z
            metadata_json: null
      object_person:
        id: p_t3SgcCtwpNZKVtbPUY74TB
        status: active
        display_name: 王猛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王休，史料所见人物。本项目依据《中文维基文库：《山西通志》卷073》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王休 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t3SgcCtwpNZKVtbPUY74TB | 王猛 | accepted |

## 外部来源

- [中文维基文库：《山西通志》卷073](https://zh.wikisource.org/zh-hant/%E5%B1%B1%E8%A5%BF%E9%80%9A%E5%BF%97_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7073)
