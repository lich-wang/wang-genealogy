---
schema: wang-person/v1
id: p_57NHroWa8xYADUyKGe6G2t
status: active
merged_into: null
display_name: 王士禎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfhh8ppJTN14bt88cNL8DY
        subject_person_id: p_57NHroWa8xYADUyKGe6G2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YqnTWfNCmaF5xHxYwntsYs
          claim_id: c_nfhh8ppJTN14bt88cNL8DY
          source_id: s_xEhLoTu2zpSe6A4KDkzZLS
          stance: supports
          locator: CBDB:126447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126447）
          source: &a1
            id: s_xEhLoTu2zpSe6A4KDkzZLS
            source_type: api_record
            title: 中国历代人物传记资料库：王士禎（CBDB 126447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126447&o=json
            external_identifier: CBDB:126447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xrTMnSEA7uE5ueZ24aaqFm
        subject_person_id: p_57NHroWa8xYADUyKGe6G2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士禎，明人物。籍贯泗水。（中国历代人物传记资料库 CBDB 126447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_enX5euhKjNJpJFtbI2nUw3
          claim_id: c_xrTMnSEA7uE5ueZ24aaqFm
          source_id: s_xEhLoTu2zpSe6A4KDkzZLS
          stance: supports
          locator: CBDB:126447
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

# 王士禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士禎 | accepted |
| bio.summary | 王士禎，明人物。籍贯泗水。（中国历代人物传记资料库 CBDB 126447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士禎（CBDB 126447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126447&o=json)
