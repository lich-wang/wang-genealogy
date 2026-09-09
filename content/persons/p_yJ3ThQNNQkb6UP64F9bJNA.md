---
schema: wang-person/v1
id: p_yJ3ThQNNQkb6UP64F9bJNA
status: active
merged_into: null
display_name: 王利用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zc4pWhDqaK61bBR4kikr6v
        subject_person_id: p_yJ3ThQNNQkb6UP64F9bJNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_23DVRY87hm5vV6PvLMKKmM
          claim_id: c_Zc4pWhDqaK61bBR4kikr6v
          source_id: s_v7QJFK63MtRqz6aySx4Zmd
          stance: supports
          locator: CBDB:467395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467395）
          source: &a1
            id: s_v7QJFK63MtRqz6aySx4Zmd
            source_type: api_record
            title: 中国历代人物传记资料库：王利用（CBDB 467395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467395&o=json
            external_identifier: CBDB:467395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tvpQXvi1jTgRGM3gfsGmHn
        subject_person_id: p_yJ3ThQNNQkb6UP64F9bJNA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KdnpR8BhtMu5mwWd3JXz2J
          claim_id: c_tvpQXvi1jTgRGM3gfsGmHn
          source_id: s_v7QJFK63MtRqz6aySx4Zmd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王利用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利用 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利用（CBDB 467395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467395&o=json)
