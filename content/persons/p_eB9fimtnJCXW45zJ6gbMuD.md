---
schema: wang-person/v1
id: p_eB9fimtnJCXW45zJ6gbMuD
status: active
merged_into: null
display_name: 王在
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQAhh63QAnth92xNLDcbGC
        subject_person_id: p_eB9fimtnJCXW45zJ6gbMuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vMPLfasQAGZaKLSH9MT3Vi
          claim_id: c_CQAhh63QAnth92xNLDcbGC
          source_id: s_daRVJJP8fPdKf6Gqp6Y7E7
          stance: supports
          locator: CBDB:294550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294550）
          source: &a1
            id: s_daRVJJP8fPdKf6Gqp6Y7E7
            source_type: api_record
            title: 中国历代人物传记资料库：王在（CBDB 294550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294550&o=json
            external_identifier: CBDB:294550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ET5GWqxKvAAAg5cxK6B15D
        subject_person_id: p_eB9fimtnJCXW45zJ6gbMuD
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
        - id: cs_AwHeTcx6DJMqZfkL8bgX2R
          claim_id: c_ET5GWqxKvAAAg5cxK6B15D
          source_id: s_daRVJJP8fPdKf6Gqp6Y7E7
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

# 王在

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王在（CBDB 294550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294550&o=json)
