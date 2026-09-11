---
schema: wang-person/v1
id: p_f4gRAfK4wwtdUFjZZnfhAD
status: active
merged_into: null
display_name: 王起
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4euCWS7X4HiR6sGFXUCLf4
        subject_person_id: p_f4gRAfK4wwtdUFjZZnfhAD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Sb2WKrW6QbHP6shD7JZrB
          claim_id: c_4euCWS7X4HiR6sGFXUCLf4
          source_id: s_coHzDJChmJA6AMk3psabSj
          stance: supports
          locator: CBDB:100778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100778）
          source: &a1
            id: s_coHzDJChmJA6AMk3psabSj
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 100778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100778&o=json
            external_identifier: CBDB:100778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uayEucS4UeWdwBwf98dcyp
        subject_person_id: p_f4gRAfK4wwtdUFjZZnfhAD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起，史料所见人物。本项目依据《中国历代人物传记资料库：王起（CBDB 100778）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFusPF4g4GTnDlQfkYhU3K
          claim_id: c_uayEucS4UeWdwBwf98dcyp
          source_id: s_coHzDJChmJA6AMk3psabSj
          stance: supports
          locator: CBDB:100778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起 | accepted |
| bio.summary | 王起，史料所见人物。本项目依据《中国历代人物传记资料库：王起（CBDB 100778）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 100778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100778&o=json)
