---
schema: wang-person/v1
id: p_B93HT9yrzpc4LCF2y8pqim
status: active
merged_into: null
display_name: 王芭㫋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jb6HPjHLCsDnf5vKiAPFgD
        subject_person_id: p_B93HT9yrzpc4LCF2y8pqim
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芭㫋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yxrWiqZk4LBuMY6J9F3AvY
          claim_id: c_Jb6HPjHLCsDnf5vKiAPFgD
          source_id: s_NgEWiFqacYDLr8ex5Hnvxk
          stance: supports
          locator: CBDB:640055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640055）
          source: &a1
            id: s_NgEWiFqacYDLr8ex5Hnvxk
            source_type: api_record
            title: 中国历代人物传记资料库：王芭㫋（CBDB 640055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640055&o=json
            external_identifier: CBDB:640055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yFiVtkMwzumA9bma7R8hA8
        subject_person_id: p_B93HT9yrzpc4LCF2y8pqim
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芭㫋，清人物。籍贯兗州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640055）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oHZCqH7h_bxey1BBjYIEJF
          claim_id: c_yFiVtkMwzumA9bma7R8hA8
          source_id: s_NgEWiFqacYDLr8ex5Hnvxk
          stance: supports
          locator: CBDB:640055
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

# 王芭㫋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芭㫋 | accepted |
| bio.summary | 王芭㫋，清人物。籍贯兗州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芭㫋（CBDB 640055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640055&o=json)
