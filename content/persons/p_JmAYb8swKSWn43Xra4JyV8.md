---
schema: wang-person/v1
id: p_JmAYb8swKSWn43Xra4JyV8
status: active
merged_into: null
display_name: 王士驌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D4Li4s3iYxSMG7vhc6da9Q
        subject_person_id: p_JmAYb8swKSWn43Xra4JyV8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士驌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3v6sriCJ7R4sDLCUqqEs3p
          claim_id: c_D4Li4s3iYxSMG7vhc6da9Q
          source_id: s_1q5Ub591q252o6rMGKeYAj
          stance: supports
          locator: CBDB:134660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134660）
          source: &a1
            id: s_1q5Ub591q252o6rMGKeYAj
            source_type: api_record
            title: 中国历代人物传记资料库：王士驌（CBDB 134660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json
            external_identifier: CBDB:134660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7sT8GLvECvo71WnwDjqdDH
        subject_person_id: p_JmAYb8swKSWn43Xra4JyV8
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
        - id: cs_tov8T8f7QA3hQQNKTHDi95
          claim_id: c_7sT8GLvECvo71WnwDjqdDH
          source_id: s_1q5Ub591q252o6rMGKeYAj
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

# 王士驌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士驌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士驌（CBDB 134660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json)
