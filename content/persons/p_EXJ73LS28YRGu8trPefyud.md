---
schema: wang-person/v1
id: p_EXJ73LS28YRGu8trPefyud
status: active
merged_into: null
display_name: 王問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uGEQJMzcDERKFzJSkGypVT
        subject_person_id: p_EXJ73LS28YRGu8trPefyud
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4qfNqgvh3buXQEJ4pNdJ9
          claim_id: c_uGEQJMzcDERKFzJSkGypVT
          source_id: s_Dq4UGUkRikZ2s8eB1NiFan
          stance: supports
          locator: CBDB:640759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640759）
          source: &a1
            id: s_Dq4UGUkRikZ2s8eB1NiFan
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 640759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640759&o=json
            external_identifier: CBDB:640759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7mCw8DrNuxyiFAG1UkJTq8
        subject_person_id: p_EXJ73LS28YRGu8trPefyud
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問，清人物。籍贯仁和，曾任主事。（中国历代人物传记资料库 CBDB 640759）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQtZKWFjlGZe3Edv4ucMR0
          claim_id: c_7mCw8DrNuxyiFAG1UkJTq8
          source_id: s_Dq4UGUkRikZ2s8eB1NiFan
          stance: supports
          locator: CBDB:640759
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

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| bio.summary | 王問，清人物。籍贯仁和，曾任主事。（中国历代人物传记资料库 CBDB 640759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問（CBDB 640759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640759&o=json)
