---
schema: wang-person/v1
id: p_imDJLn3T7hD4BGbuZaNSEL
status: active
merged_into: null
display_name: 王虎臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KEwAhEXXDLjK6cZG82v9cZ
        subject_person_id: p_imDJLn3T7hD4BGbuZaNSEL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iRc9NDVA1i9iphJpCTiWkv
          claim_id: c_KEwAhEXXDLjK6cZG82v9cZ
          source_id: s_8M5s1nyU4xCYYnCEndBMWG
          stance: supports
          locator: CBDB:640195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640195）
          source: &a1
            id: s_8M5s1nyU4xCYYnCEndBMWG
            source_type: api_record
            title: 中国历代人物传记资料库：王虎臣（CBDB 640195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640195&o=json
            external_identifier: CBDB:640195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uWwnpYhCJuwZJnoGkH7cvC
        subject_person_id: p_imDJLn3T7hD4BGbuZaNSEL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虎臣，清人物。籍贯河曲，曾任二等侍衛。（中国历代人物传记资料库 CBDB 640195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UAchUvg5q2nxIJKGAPEHhK
          claim_id: c_uWwnpYhCJuwZJnoGkH7cvC
          source_id: s_8M5s1nyU4xCYYnCEndBMWG
          stance: supports
          locator: CBDB:640195
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

# 王虎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虎臣 | accepted |
| bio.summary | 王虎臣，清人物。籍贯河曲，曾任二等侍衛。（中国历代人物传记资料库 CBDB 640195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王虎臣（CBDB 640195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640195&o=json)
