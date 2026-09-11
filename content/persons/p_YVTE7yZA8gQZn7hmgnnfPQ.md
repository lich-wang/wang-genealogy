---
schema: wang-person/v1
id: p_YVTE7yZA8gQZn7hmgnnfPQ
status: active
merged_into: null
display_name: 王來曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwYQMCgB2nrq3U56y7PuG6
        subject_person_id: p_YVTE7yZA8gQZn7hmgnnfPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pNGJK6rX5M1c9xEbtuX6dR
          claim_id: c_EwYQMCgB2nrq3U56y7PuG6
          source_id: s_uy6aC2LGYXA7fyyGKjuUex
          stance: supports
          locator: CBDB:636029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636029）
          source: &a1
            id: s_uy6aC2LGYXA7fyyGKjuUex
            source_type: api_record
            title: 中国历代人物传记资料库：王來曾（CBDB 636029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636029&o=json
            external_identifier: CBDB:636029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FXe5CsZqNDSL9u1naRcCos
        subject_person_id: p_YVTE7yZA8gQZn7hmgnnfPQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來曾，清人物。籍贯盧氏，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PO9SvqeYBNiY5JlRCFFHZP
          claim_id: c_FXe5CsZqNDSL9u1naRcCos
          source_id: s_uy6aC2LGYXA7fyyGKjuUex
          stance: supports
          locator: CBDB:636029
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

# 王來曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來曾 | accepted |
| bio.summary | 王來曾，清人物。籍贯盧氏，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來曾（CBDB 636029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636029&o=json)
