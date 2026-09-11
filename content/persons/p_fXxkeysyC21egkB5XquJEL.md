---
schema: wang-person/v1
id: p_fXxkeysyC21egkB5XquJEL
status: active
merged_into: null
display_name: 王壽蘐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9GptSYytJM6bYc7YELEpL1
        subject_person_id: p_fXxkeysyC21egkB5XquJEL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽蘐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ye5vt4beAbW2y4B7UFGW6e
          claim_id: c_9GptSYytJM6bYc7YELEpL1
          source_id: s_MT158mKqJ1fW4DJC3APMhY
          stance: supports
          locator: CBDB:636849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636849）
          source: &a1
            id: s_MT158mKqJ1fW4DJC3APMhY
            source_type: api_record
            title: 中国历代人物传记资料库：王壽蘐（CBDB 636849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636849&o=json
            external_identifier: CBDB:636849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XfANCmFGFf3tCAER261k8E
        subject_person_id: p_fXxkeysyC21egkB5XquJEL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽蘐，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L2XBfO9kKTTc1xgvTk4V9n
          claim_id: c_XfANCmFGFf3tCAER261k8E
          source_id: s_MT158mKqJ1fW4DJC3APMhY
          stance: supports
          locator: CBDB:636849
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

# 王壽蘐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽蘐 | accepted |
| bio.summary | 王壽蘐，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽蘐（CBDB 636849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636849&o=json)
