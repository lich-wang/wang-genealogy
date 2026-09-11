---
schema: wang-person/v1
id: p_kD8JgY6qgXugDJKVWU6AUw
status: active
merged_into: null
display_name: 王默
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_53yoRgCyuEG9xh6q2Re5DA
        subject_person_id: p_kD8JgY6qgXugDJKVWU6AUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_54Cj64JarUcxJbBoprwMon
          claim_id: c_53yoRgCyuEG9xh6q2Re5DA
          source_id: s_Varn3zTH8i9eJ4jKAcs4v7
          stance: supports
          locator: CBDB:415655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415655）
          source: &a1
            id: s_Varn3zTH8i9eJ4jKAcs4v7
            source_type: api_record
            title: 中国历代人物传记资料库：王默（CBDB 415655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415655&o=json
            external_identifier: CBDB:415655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_usTD3V6Skb9zPNxXA7QmV6
        subject_person_id: p_kD8JgY6qgXugDJKVWU6AUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王默，史料所见人物。本项目依据《中国历代人物传记资料库：王默（CBDB 415655）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IMvYSJR_CVbQ0PP1aZRdwz
          claim_id: c_usTD3V6Skb9zPNxXA7QmV6
          source_id: s_Varn3zTH8i9eJ4jKAcs4v7
          stance: supports
          locator: CBDB:415655
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

# 王默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王默 | accepted |
| bio.summary | 王默，史料所见人物。本项目依据《中国历代人物传记资料库：王默（CBDB 415655）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王默（CBDB 415655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415655&o=json)
