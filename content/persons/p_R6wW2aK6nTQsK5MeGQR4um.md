---
schema: wang-person/v1
id: p_R6wW2aK6nTQsK5MeGQR4um
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDrs492HqDfenjejrGCFQQ
        subject_person_id: p_R6wW2aK6nTQsK5MeGQR4um
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VafyoawPtx6RzKhe9q4tTx
          claim_id: c_uDrs492HqDfenjejrGCFQQ
          source_id: s_5exRb7j4mWCMXjK4yFGNxM
          stance: supports
          locator: CBDB:208720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208720）
          source: &a1
            id: s_5exRb7j4mWCMXjK4yFGNxM
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 208720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208720&o=json
            external_identifier: CBDB:208720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DrWRHFd6LFiwGve21AMDNF
        subject_person_id: p_R6wW2aK6nTQsK5MeGQR4um
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
        - id: cs_zkfSGzo4KLsUGr6mnAEXUM
          claim_id: c_DrWRHFd6LFiwGve21AMDNF
          source_id: s_5exRb7j4mWCMXjK4yFGNxM
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 208720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208720&o=json)
