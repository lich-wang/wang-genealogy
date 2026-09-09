---
schema: wang-person/v1
id: p_szrMvxs54GQ9ndqn9Srzgs
status: active
merged_into: null
display_name: 王慶元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a12f98TtcpAY9QrWRL8KNJ
        subject_person_id: p_szrMvxs54GQ9ndqn9Srzgs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8GB8a38b1EghW2SWFJfBHh
          claim_id: c_a12f98TtcpAY9QrWRL8KNJ
          source_id: s_NMvLPsFjnBYzbhMixeECQT
          stance: supports
          locator: CBDB:341593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341593）
          source: &a1
            id: s_NMvLPsFjnBYzbhMixeECQT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶元（CBDB 341593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341593&o=json
            external_identifier: CBDB:341593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LftpKRsPGdP58ZqqbwdueB
        subject_person_id: p_szrMvxs54GQ9ndqn9Srzgs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DsjAp7gNbB7crqDS6H6V7
          claim_id: c_LftpKRsPGdP58ZqqbwdueB
          source_id: s_NMvLPsFjnBYzbhMixeECQT
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

# 王慶元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶元 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶元（CBDB 341593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341593&o=json)
