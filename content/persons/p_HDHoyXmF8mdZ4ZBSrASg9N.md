---
schema: wang-person/v1
id: p_HDHoyXmF8mdZ4ZBSrASg9N
status: active
merged_into: null
display_name: 王筌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YbxF3LNZGE8kBSrGKqmNzQ
        subject_person_id: p_HDHoyXmF8mdZ4ZBSrASg9N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mF4yqi8wNy18HnuTExvqK
          claim_id: c_YbxF3LNZGE8kBSrGKqmNzQ
          source_id: s_5UguKb6hUPXS226HX5dBJZ
          stance: supports
          locator: CBDB:38513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38513）
          source: &a1
            id: s_5UguKb6hUPXS226HX5dBJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王筌（CBDB 38513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38513&o=json
            external_identifier: CBDB:38513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Aho44YFUJVb7kVuon4A3xc
        subject_person_id: p_HDHoyXmF8mdZ4ZBSrASg9N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筌，宋人物。身份为門客、好金石。（中国历代人物传记资料库 CBDB 38513）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_007oK6xH6GgYim9UbEeJ7i
          claim_id: c_Aho44YFUJVb7kVuon4A3xc
          source_id: s_5UguKb6hUPXS226HX5dBJZ
          stance: supports
          locator: CBDB:38513
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

# 王筌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筌 | accepted |
| bio.summary | 王筌，宋人物。身份为門客、好金石。（中国历代人物传记资料库 CBDB 38513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筌（CBDB 38513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38513&o=json)
