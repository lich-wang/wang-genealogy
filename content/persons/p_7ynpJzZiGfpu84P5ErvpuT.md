---
schema: wang-person/v1
id: p_7ynpJzZiGfpu84P5ErvpuT
status: active
merged_into: null
display_name: 王庭默
cbdb_id: 414434
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J4G1QSfJsg3bRYhrB257ET
        subject_person_id: p_7ynpJzZiGfpu84P5ErvpuT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭默，史料所见人物。本项目依据《中国历代人物传记资料库：王庭默（CBDB 414434）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_2UrNKIYIG_zLx0EcHR93I_
          claim_id: c_J4G1QSfJsg3bRYhrB257ET
          source_id: s_yN7eQH92vV9S9iYe1PRCyA
          stance: supports
          locator: CBDB:414434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_yN7eQH92vV9S9iYe1PRCyA
            source_type: api_record
            title: 中国历代人物传记资料库：王庭默（CBDB 414434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414434&o=json
            external_identifier: CBDB:414434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:34.838Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLZK3tE8oHRQWLFLnkm4YY
        subject_person_id: p_7ynpJzZiGfpu84P5ErvpuT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qaujTz1GQnasJvw9WWLedY
          claim_id: c_mLZK3tE8oHRQWLFLnkm4YY
          source_id: s_yN7eQH92vV9S9iYe1PRCyA
          stance: supports
          locator: CBDB:414434
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5501-5600）｜历史性依据：CBDB 朝代 = 明
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

# 王庭默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭默，史料所见人物。本项目依据《中国历代人物传记资料库：王庭默（CBDB 414434）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庭默 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭默（CBDB 414434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414434&o=json)
