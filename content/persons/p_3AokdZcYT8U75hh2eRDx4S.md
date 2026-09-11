---
schema: wang-person/v1
id: p_3AokdZcYT8U75hh2eRDx4S
status: active
merged_into: null
display_name: 王學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rmDzK6JXtJcYSsuhT9MpBH
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5rdmNnCeT6PkA9jY95R4fT
          claim_id: c_rmDzK6JXtJcYSsuhT9MpBH
          source_id: s_JxY9rkr5BvFozDmoVKxQGF
          stance: supports
          locator: CBDB:282004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282004）
          source: &a1
            id: s_JxY9rkr5BvFozDmoVKxQGF
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Lszs856yiX5bfJc4NdkQi
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282004）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v0lgqalS27ZbgvrSwrksld
          claim_id: c_4Lszs856yiX5bfJc4NdkQi
          source_id: s_JxY9rkr5BvFozDmoVKxQGF
          stance: supports
          locator: CBDB:282004
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

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | 王學，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 282004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json)
