---
schema: wang-person/v1
id: p_pmGCSY1733UAFE6ePHLss8
status: active
merged_into: null
display_name: 王從言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HkvEWkrejYuDDModzbeunR
        subject_person_id: p_pmGCSY1733UAFE6ePHLss8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M4ccwhudip9eyu3MmKFHXS
          claim_id: c_HkvEWkrejYuDDModzbeunR
          source_id: s_kGJoD7wEqZquRFC9en4gQM
          stance: supports
          locator: CBDB:538045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538045）
          source: &a1
            id: s_kGJoD7wEqZquRFC9en4gQM
            source_type: api_record
            title: 中国历代人物传记资料库：王從言（CBDB 538045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538045&o=json
            external_identifier: CBDB:538045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kFem2Y6JzeVq7W9Nux4vbq
        subject_person_id: p_pmGCSY1733UAFE6ePHLss8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從言，宋人物。籍贯奉新，入仕進士。（中国历代人物传记资料库 CBDB 538045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DiwsCA5TjaWvWheZTqAPI3
          claim_id: c_kFem2Y6JzeVq7W9Nux4vbq
          source_id: s_kGJoD7wEqZquRFC9en4gQM
          stance: supports
          locator: CBDB:538045
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

# 王從言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從言 | accepted |
| bio.summary | 王從言，宋人物。籍贯奉新，入仕進士。（中国历代人物传记资料库 CBDB 538045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從言（CBDB 538045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538045&o=json)
