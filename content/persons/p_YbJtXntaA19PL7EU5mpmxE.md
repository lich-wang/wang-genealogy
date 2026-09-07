---
schema: wang-person/v1
id: p_YbJtXntaA19PL7EU5mpmxE
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k97NnYd95IU72G6D4axYwt
        subject_person_id: p_YbJtXntaA19PL7EU5mpmxE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_52u1Cp6F79byQ-Kk8hqbF0
          claim_id: c_k97NnYd95IU72G6D4axYwt
          source_id: s_UH3PSyxcBPQG7QE4uE1Xcn
          stance: supports
          locator: Q13668765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UH3PSyxcBPQG7QE4uE1Xcn
            source_type: api_record
            title: 维基数据：王氏（Q13668765）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13668765
            external_identifier: Q13668765
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHhCJ9G8f3s7WKLwRXf3HG
        subject_person_id: p_YbJtXntaA19PL7EU5mpmxE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kaZMJ8Q16PczncrGB4aC6c
          claim_id: c_GHhCJ9G8f3s7WKLwRXf3HG
          source_id: s_UH3PSyxcBPQG7QE4uE1Xcn
          stance: supports
          locator: Q13668765
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王氏（Q13668765）](https://www.wikidata.org/wiki/Q13668765)
