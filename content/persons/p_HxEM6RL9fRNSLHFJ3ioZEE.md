---
schema: wang-person/v1
id: p_HxEM6RL9fRNSLHFJ3ioZEE
status: active
merged_into: null
display_name: 王芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RAcyvW5QJRkc48vAKWuXG5
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXXNEn7LNtcF7Aj9sAAnH5
          claim_id: c_RAcyvW5QJRkc48vAKWuXG5
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
          stance: supports
          locator: CBDB:307682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307682）
          source: &a1
            id: s_5PL8msvmn7vX5Z5ZQZUfJH
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 307682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json
            external_identifier: CBDB:307682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8y5EL8HV5S8dKwm5PizvPr
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
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
        - id: cs_GJKNa7sKmLFSqNCUe1vB3S
          claim_id: c_8y5EL8HV5S8dKwm5PizvPr
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
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

# 王芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 307682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json)
