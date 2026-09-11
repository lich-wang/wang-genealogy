---
schema: wang-person/v1
id: p_4AgJxkPNgcXcf49qjpHH6T
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6NxQVVuD5mJDxQo9bjWqEi
        subject_person_id: p_4AgJxkPNgcXcf49qjpHH6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AK7Fhx41HB26N9dTkgAiJm
          claim_id: c_6NxQVVuD5mJDxQo9bjWqEi
          source_id: s_3JJoxtNfCc2XMU9m8o4myk
          stance: supports
          locator: CBDB:452511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452511）
          source: &a1
            id: s_3JJoxtNfCc2XMU9m8o4myk
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 452511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452511&o=json
            external_identifier: CBDB:452511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EdtkPnVtrYwCZvdLGnNw8c
        subject_person_id: p_4AgJxkPNgcXcf49qjpHH6T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 452511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ohVg3ZG_ckR8EELFW_WHzl
          claim_id: c_EdtkPnVtrYwCZvdLGnNw8c
          source_id: s_3JJoxtNfCc2XMU9m8o4myk
          stance: supports
          locator: CBDB:452511
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，宋人物。曾任縣令。（中国历代人物传记资料库 CBDB 452511） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 452511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452511&o=json)
