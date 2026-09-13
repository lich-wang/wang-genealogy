---
schema: wang-person/v1
id: p_m1vwRj9QZiJwCT2gjJ4qtS
status: active
merged_into: null
display_name: 王以述
cbdb_id: 221826
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R8T1N3DcJjVUFt81NiX45Q
        subject_person_id: p_m1vwRj9QZiJwCT2gjJ4qtS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以述，史料所见人物。本项目依据《中国历代人物传记资料库：王以述（CBDB 221826）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_uIV2YvlxNw5VYW85EqyLQE
          claim_id: c_R8T1N3DcJjVUFt81NiX45Q
          source_id: s_SoJHqk7VYMfDuQ2qpcBUkL
          stance: supports
          locator: CBDB:221826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SoJHqk7VYMfDuQ2qpcBUkL
            source_type: api_record
            title: 中国历代人物传记资料库：王以述（CBDB 221826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221826&o=json
            external_identifier: CBDB:221826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JD4NZ5ZcCnNX2mwr9VcBai
        subject_person_id: p_m1vwRj9QZiJwCT2gjJ4qtS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NgrKC5zrYc5yJ6F7ecYgv4
          claim_id: c_JD4NZ5ZcCnNX2mwr9VcBai
          source_id: s_SoJHqk7VYMfDuQ2qpcBUkL
          stance: supports
          locator: CBDB:221826
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
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

# 王以述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以述，史料所见人物。本项目依据《中国历代人物传记资料库：王以述（CBDB 221826）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王以述 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以述（CBDB 221826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221826&o=json)
