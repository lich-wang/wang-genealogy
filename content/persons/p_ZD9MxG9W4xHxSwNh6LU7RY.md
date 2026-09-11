---
schema: wang-person/v1
id: p_ZD9MxG9W4xHxSwNh6LU7RY
status: active
merged_into: null
display_name: 王祥麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FFsXay8VFCyyrXvJPkJ2y
        subject_person_id: p_ZD9MxG9W4xHxSwNh6LU7RY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jcU2GKAmQqXB3PdABuZh4m
          claim_id: c_2FFsXay8VFCyyrXvJPkJ2y
          source_id: s_5HzQX9cWZNzkJvESz5MbVU
          stance: supports
          locator: CBDB:639597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639597）
          source: &a1
            id: s_5HzQX9cWZNzkJvESz5MbVU
            source_type: api_record
            title: 中国历代人物传记资料库：王祥麟（CBDB 639597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639597&o=json
            external_identifier: CBDB:639597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m39AdVdgBEcHUBWdTnsGFb
        subject_person_id: p_ZD9MxG9W4xHxSwNh6LU7RY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥麟，清人物。籍贯榮河，曾任郎中。（中国历代人物传记资料库 CBDB 639597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8zEfLALrwfP-qPi2UkkPH
          claim_id: c_m39AdVdgBEcHUBWdTnsGFb
          source_id: s_5HzQX9cWZNzkJvESz5MbVU
          stance: supports
          locator: CBDB:639597
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

# 王祥麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥麟 | accepted |
| bio.summary | 王祥麟，清人物。籍贯榮河，曾任郎中。（中国历代人物传记资料库 CBDB 639597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥麟（CBDB 639597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639597&o=json)
