---
schema: wang-person/v1
id: p_GoAWbsZ29A371oyH9ZFDFD
status: active
merged_into: null
display_name: 王季和
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q_D43-tsGcBpAQ3xzOwY4y
        subject_person_id: p_GoAWbsZ29A371oyH9ZFDFD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季和，史料所见人物。本项目依据《中文维基文库：北史/卷035》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-u8sljXfsNE7W2rXFyVICv
          claim_id: c_Q_D43-tsGcBpAQ3xzOwY4y
          source_id: s_hhLcNzPQjDh7pM9akAz3jT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hhLcNzPQjDh7pM9akAz3jT
            source_type: book
            title: 中文维基文库：北史/卷035
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8C%97%E5%8F%B2/%E5%8D%B7035
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.899Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hc3bHoq45PL35f1a6Vdko9
        subject_person_id: p_GoAWbsZ29A371oyH9ZFDFD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季和
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N2m2kYM38UXefXPFeMxcoK
          claim_id: c_hc3bHoq45PL35f1a6Vdko9
          source_id: s_hhLcNzPQjDh7pM9akAz3jT
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
        id: c_81i5KAarKHTQCpzDmcazoC
        subject_person_id: p_ANjVfL6Dd7HKVhAWUaTFWB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GoAWbsZ29A371oyH9ZFDFD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3611ygKbM2ZZnopEcR8DDJ
          claim_id: c_81i5KAarKHTQCpzDmcazoC
          source_id: s_hhLcNzPQjDh7pM9akAz3jT
          stance: supports
          locator: 王琼传
          quotation: 至瓊始有四子……延業弟季和。
          interpretation_note: 本传依次列王琼四子遵业、广业、延业、季和。
          source:
            id: s_hhLcNzPQjDh7pM9akAz3jT
            source_type: book
            title: 中文维基文库：北史/卷035
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8C%97%E5%8F%B2/%E5%8D%B7035
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.899Z
            metadata_json: null
      object_person:
        id: p_ANjVfL6Dd7HKVhAWUaTFWB
        status: active
        display_name: 王琼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季和，史料所见人物。本项目依据《中文维基文库：北史/卷035》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王季和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ANjVfL6Dd7HKVhAWUaTFWB | 王琼 | accepted |

## 外部来源

- [中文维基文库：北史/卷035](https://zh.wikisource.org/wiki/%E5%8C%97%E5%8F%B2/%E5%8D%B7035)
