---
schema: wang-person/v1
id: p_piw9QzYCh5Cdg5KtvzVrKF
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hSBzZJebJ54VRqdKnLqh7Q
        subject_person_id: p_piw9QzYCh5Cdg5KtvzVrKF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8UoM9FDpZVmuK9aZpeCfph
          claim_id: c_hSBzZJebJ54VRqdKnLqh7Q
          source_id: s_NwcDcsZSrjCJRZr7XKCnLk
          stance: supports
          locator: CBDB:100686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100686）
          source: &a1
            id: s_NwcDcsZSrjCJRZr7XKCnLk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 100686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100686&o=json
            external_identifier: CBDB:100686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_516uN6q4AbQXKsW8yPneKV
        subject_person_id: p_piw9QzYCh5Cdg5KtvzVrKF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1268年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDHXv7x3VVN97wEeAsu4A8
          claim_id: c_516uN6q4AbQXKsW8yPneKV
          source_id: s_NwcDcsZSrjCJRZr7XKCnLk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FqDLhZmW9rnhQ9FGDedLco
        subject_person_id: p_piw9QzYCh5Cdg5KtvzVrKF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1328年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ng7XvQ1tUUVaJuMnZ85AjM
          claim_id: c_FqDLhZmW9rnhQ9FGDedLco
          source_id: s_NwcDcsZSrjCJRZr7XKCnLk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MgtaQUxu2DdxTKeZYEFJ7U
        subject_person_id: p_piw9QzYCh5Cdg5KtvzVrKF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗（1268年—1328年），元人物。籍贯河間路，身份为行醫，曾任諸路總管府儒學教授、諸路總管府醫學正。（中国历代人物传记资料库 CBDB 100686）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ZQXdYX6oA27TxzxksAqfT
          claim_id: c_MgtaQUxu2DdxTKeZYEFJ7U
          source_id: s_NwcDcsZSrjCJRZr7XKCnLk
          stance: supports
          locator: CBDB:100686
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| birth.date | 1268年 | accepted |
| death.date | 1328年 | accepted |
| bio.summary | 王宗（1268年—1328年），元人物。籍贯河間路，身份为行醫，曾任諸路總管府儒學教授、諸路總管府醫學正。（中国历代人物传记资料库 CBDB 100686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 100686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100686&o=json)
