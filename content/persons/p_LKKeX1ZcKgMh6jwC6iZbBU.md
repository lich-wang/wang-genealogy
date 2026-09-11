---
schema: wang-person/v1
id: p_LKKeX1ZcKgMh6jwC6iZbBU
status: active
merged_into: null
display_name: 王丙炎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HEBBU7mP8MFEBKHUJ3yQbR
        subject_person_id: p_LKKeX1ZcKgMh6jwC6iZbBU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙炎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hiHa4rjNAtSrnStbB4qv13
          claim_id: c_HEBBU7mP8MFEBKHUJ3yQbR
          source_id: s_yK2KmcS7oGDGB2EK6FbZUV
          stance: supports
          locator: CBDB:635735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635735）
          source: &a1
            id: s_yK2KmcS7oGDGB2EK6FbZUV
            source_type: api_record
            title: 中国历代人物传记资料库：王丙炎（CBDB 635735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635735&o=json
            external_identifier: CBDB:635735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCVSdyYruagUwACmnz5fJV
        subject_person_id: p_LKKeX1ZcKgMh6jwC6iZbBU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙炎，清人物。籍贯靈石，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3wJFrZYnD57YDb4fWASbLh
          claim_id: c_HCVSdyYruagUwACmnz5fJV
          source_id: s_yK2KmcS7oGDGB2EK6FbZUV
          stance: supports
          locator: CBDB:635735
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

# 王丙炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙炎 | accepted |
| bio.summary | 王丙炎，清人物。籍贯靈石，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙炎（CBDB 635735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635735&o=json)
