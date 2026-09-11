---
schema: wang-person/v1
id: p_rDLCqXC8sFot2X9WGy3gyb
status: active
merged_into: null
display_name: 王百朋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dCj2B8LsRBaqVQSE23ijr5
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b5KmUdnzc7M17ZtwTChfA2
          claim_id: c_dCj2B8LsRBaqVQSE23ijr5
          source_id: s_ckMkYT7A2dXKfaQfPQVZ3y
          stance: supports
          locator: CBDB:37341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37341）
          source: &a1
            id: s_ckMkYT7A2dXKfaQfPQVZ3y
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4dH4LZK7uQtmdEjTqpcDZs
        subject_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百朋，宋人物。籍贯樂清，身份为處士。（中国历代人物传记资料库 CBDB 37341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I3Stdp9yrSIf6UaNyaie3Y
          claim_id: c_4dH4LZK7uQtmdEjTqpcDZs
          source_id: s_ckMkYT7A2dXKfaQfPQVZ3y
          stance: supports
          locator: CBDB:37341
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

# 王百朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王百朋 | accepted |
| bio.summary | 王百朋，宋人物。籍贯樂清，身份为處士。（中国历代人物传记资料库 CBDB 37341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王百朋（CBDB 37341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json)
