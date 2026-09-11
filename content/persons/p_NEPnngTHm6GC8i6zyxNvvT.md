---
schema: wang-person/v1
id: p_NEPnngTHm6GC8i6zyxNvvT
status: active
merged_into: null
display_name: 王元介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7zCGThNUvf3637qLvWZ5rb
        subject_person_id: p_NEPnngTHm6GC8i6zyxNvvT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VRaddSZHyNLMEJJs929nBQ
          claim_id: c_7zCGThNUvf3637qLvWZ5rb
          source_id: s_Y2qJkC4RaviCiBVAwZQXDA
          stance: supports
          locator: CBDB:576163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576163）
          source: &a1
            id: s_Y2qJkC4RaviCiBVAwZQXDA
            source_type: api_record
            title: 中国历代人物传记资料库：王元介（CBDB 576163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576163&o=json
            external_identifier: CBDB:576163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NZFk8JqtL4kVEQqCjpWXKf
        subject_person_id: p_NEPnngTHm6GC8i6zyxNvvT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元介，清人物。籍贯大名，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576163）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bkp8qieXcsoR2NJDxlxDmC
          claim_id: c_NZFk8JqtL4kVEQqCjpWXKf
          source_id: s_Y2qJkC4RaviCiBVAwZQXDA
          stance: supports
          locator: CBDB:576163
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

# 王元介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元介 | accepted |
| bio.summary | 王元介，清人物。籍贯大名，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元介（CBDB 576163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576163&o=json)
