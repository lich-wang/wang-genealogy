---
schema: wang-person/v1
id: p_6gJN4M3r1iGya77PK6AUk1
status: active
merged_into: null
display_name: 王貞範
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nwJGk4Y6nJfdhKNPcFZu5q
        subject_person_id: p_6gJN4M3r1iGya77PK6AUk1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXNdQ4vXwMXVPjA8CtXmem
          claim_id: c_nwJGk4Y6nJfdhKNPcFZu5q
          source_id: s_o64kVFnYNjhJmD9j7AuPz2
          stance: supports
          locator: CBDB:91991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91991）
          source: &a1
            id: s_o64kVFnYNjhJmD9j7AuPz2
            source_type: api_record
            title: 中国历代人物传记资料库：王貞範（CBDB 91991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91991&o=json
            external_identifier: CBDB:91991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LYwMAqBv2DJcLJSERoskgu
        subject_person_id: p_6gJN4M3r1iGya77PK6AUk1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytr1guW9nfwFRLFMXKZcou
          claim_id: c_LYwMAqBv2DJcLJSERoskgu
          source_id: s_o64kVFnYNjhJmD9j7AuPz2
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

# 王貞範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞範 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貞範（CBDB 91991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91991&o=json)
