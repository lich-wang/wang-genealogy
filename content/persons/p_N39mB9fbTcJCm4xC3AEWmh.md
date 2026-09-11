---
schema: wang-person/v1
id: p_N39mB9fbTcJCm4xC3AEWmh
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCM8rBNXBnT4XtLgTA6cqZ
        subject_person_id: p_N39mB9fbTcJCm4xC3AEWmh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u91D8CK9hkMqQzHP8zUtTS
          claim_id: c_RCM8rBNXBnT4XtLgTA6cqZ
          source_id: s_zG4aZFSN17Yqb17xEWeRtr
          stance: supports
          locator: CBDB:100691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100691）
          source: &a1
            id: s_zG4aZFSN17Yqb17xEWeRtr
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 100691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100691&o=json
            external_identifier: CBDB:100691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.371Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXroponPkAi6EJB6VJy9CK
        subject_person_id: p_N39mB9fbTcJCm4xC3AEWmh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，元人物。籍贯睢陽，曾任縣學教諭。（中国历代人物传记资料库 CBDB 100691）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-XInbj6SjT93kFUD0rBmet
          claim_id: c_DXroponPkAi6EJB6VJy9CK
          source_id: s_zG4aZFSN17Yqb17xEWeRtr
          stance: supports
          locator: CBDB:100691
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，元人物。籍贯睢陽，曾任縣學教諭。（中国历代人物传记资料库 CBDB 100691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 100691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100691&o=json)
