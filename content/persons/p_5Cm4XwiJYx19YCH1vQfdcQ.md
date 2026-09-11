---
schema: wang-person/v1
id: p_5Cm4XwiJYx19YCH1vQfdcQ
status: active
merged_into: null
display_name: 王翼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5QAdpAGWKCGXkVqB6Mk39g
        subject_person_id: p_5Cm4XwiJYx19YCH1vQfdcQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iajCZWaQP7oybt2C7p2Nag
          claim_id: c_5QAdpAGWKCGXkVqB6Mk39g
          source_id: s_9Q1qzmR3H7WS3qAC43W7yK
          stance: supports
          locator: CBDB:687468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687468）
          source: &a1
            id: s_9Q1qzmR3H7WS3qAC43W7yK
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 687468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687468&o=json
            external_identifier: CBDB:687468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_42N9EHFdWpWPD27Pz6vTXs
        subject_person_id: p_5Cm4XwiJYx19YCH1vQfdcQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼，宋人物。籍贯平陽，入仕進士。（中国历代人物传记资料库 CBDB 687468）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XBw8QVxFzxdwnqk0zUygcd
          claim_id: c_42N9EHFdWpWPD27Pz6vTXs
          source_id: s_9Q1qzmR3H7WS3qAC43W7yK
          stance: supports
          locator: CBDB:687468
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翼 | accepted |
| bio.summary | 王翼，宋人物。籍贯平陽，入仕進士。（中国历代人物传记资料库 CBDB 687468） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翼（CBDB 687468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687468&o=json)
