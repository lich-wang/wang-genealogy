---
schema: wang-person/v1
id: p_Jjyp3J8iTGpbJ2BhAaghN8
status: active
merged_into: null
display_name: 王克正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5qaDoBHu4BAfu184RVMwmM
        subject_person_id: p_Jjyp3J8iTGpbJ2BhAaghN8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_954MJMmMVgEGBFGkwVMpRg
          claim_id: c_5qaDoBHu4BAfu184RVMwmM
          source_id: s_D74HjpTEbiBqbgXG2o82Gz
          stance: supports
          locator: CBDB:101194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101194）
          source: &a1
            id: s_D74HjpTEbiBqbgXG2o82Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王克正（CBDB 101194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101194&o=json
            external_identifier: CBDB:101194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3LRQf7hngVg6MkoUjfHE4t
        subject_person_id: p_Jjyp3J8iTGpbJ2BhAaghN8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克正，元人物。曾任諸路總管府推官。（中国历代人物传记资料库 CBDB 101194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HMibcSy4jJlj92Kr_2OqJV
          claim_id: c_3LRQf7hngVg6MkoUjfHE4t
          source_id: s_D74HjpTEbiBqbgXG2o82Gz
          stance: supports
          locator: CBDB:101194
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

# 王克正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克正 | accepted |
| bio.summary | 王克正，元人物。曾任諸路總管府推官。（中国历代人物传记资料库 CBDB 101194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克正（CBDB 101194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101194&o=json)
