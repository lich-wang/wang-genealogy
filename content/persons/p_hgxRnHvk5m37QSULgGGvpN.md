---
schema: wang-person/v1
id: p_hgxRnHvk5m37QSULgGGvpN
status: active
merged_into: null
display_name: 王昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3e5PscNUU3Xo4zVeZqa1HW
        subject_person_id: p_hgxRnHvk5m37QSULgGGvpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UQQdazinmuYDEQsr6xesZv
          claim_id: c_3e5PscNUU3Xo4zVeZqa1HW
          source_id: s_3bLm2KkDXNwmhQfUoEj3HX
          stance: supports
          locator: CBDB:248394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248394）
          source: &a1
            id: s_3bLm2KkDXNwmhQfUoEj3HX
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 248394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json
            external_identifier: CBDB:248394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HmeZ2QNGBXBwq69aAy9eLF
        subject_person_id: p_hgxRnHvk5m37QSULgGGvpN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OhBIoDF7XGkw_6elYhQnJm
          claim_id: c_HmeZ2QNGBXBwq69aAy9eLF
          source_id: s_3bLm2KkDXNwmhQfUoEj3HX
          stance: supports
          locator: CBDB:248394
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

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | 王昌，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 248394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json)
