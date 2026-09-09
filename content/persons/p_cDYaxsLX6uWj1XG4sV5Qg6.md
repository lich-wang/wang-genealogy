---
schema: wang-person/v1
id: p_cDYaxsLX6uWj1XG4sV5Qg6
status: active
merged_into: null
display_name: 王夢元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMhwWawoQU76eDKG2b8hAS
        subject_person_id: p_cDYaxsLX6uWj1XG4sV5Qg6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PoxphZHp9VrKAwFzv31Pyg
          claim_id: c_MMhwWawoQU76eDKG2b8hAS
          source_id: s_w7qw3C1nBUy7Xb4v7mmrgL
          stance: supports
          locator: CBDB:687785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687785）
          source: &a1
            id: s_w7qw3C1nBUy7Xb4v7mmrgL
            source_type: api_record
            title: 中国历代人物传记资料库：王夢元（CBDB 687785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687785&o=json
            external_identifier: CBDB:687785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LL2JgnKdw6c7gjoajeDk7s
        subject_person_id: p_cDYaxsLX6uWj1XG4sV5Qg6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LH5q3VQi2dXEvw8xNX47ps
          claim_id: c_LL2JgnKdw6c7gjoajeDk7s
          source_id: s_w7qw3C1nBUy7Xb4v7mmrgL
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

# 王夢元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢元 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢元（CBDB 687785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687785&o=json)
