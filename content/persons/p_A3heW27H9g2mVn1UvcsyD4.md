---
schema: wang-person/v1
id: p_A3heW27H9g2mVn1UvcsyD4
status: active
merged_into: null
display_name: 王時佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TJQ8uxA6BwR69FQcG9CoMv
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UU4wQKkV1rTbqJueBL4hBU
          claim_id: c_TJQ8uxA6BwR69FQcG9CoMv
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
          stance: supports
          locator: CBDB:256026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256026）
          source: &a1
            id: s_7tAA1KTugFjJh6gC8Msmfe
            source_type: api_record
            title: 中国历代人物传记资料库：王時佐（CBDB 256026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json
            external_identifier: CBDB:256026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5dNUe1NdKgsJP9FLXf8iQ
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doUydny6XQ81jx5wp1ddpH
          claim_id: c_r5dNUe1NdKgsJP9FLXf8iQ
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
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

# 王時佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時佐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時佐（CBDB 256026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json)
