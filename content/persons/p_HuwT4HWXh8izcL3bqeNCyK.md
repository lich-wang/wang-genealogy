---
schema: wang-person/v1
id: p_HuwT4HWXh8izcL3bqeNCyK
status: active
merged_into: null
display_name: 王凝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hQMJLkkouNzTCWa9t7VDeR
        subject_person_id: p_HuwT4HWXh8izcL3bqeNCyK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDWet162jSE4RM6mdV6Qk2
          claim_id: c_hQMJLkkouNzTCWa9t7VDeR
          source_id: s_BqnAuU3EYQUicmzeBpSAHM
          stance: supports
          locator: CBDB:18257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18257）
          source: &a1
            id: s_BqnAuU3EYQUicmzeBpSAHM
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 18257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18257&o=json
            external_identifier: CBDB:18257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrKhYED9m5JBh98Uz54T21
        subject_person_id: p_HuwT4HWXh8izcL3bqeNCyK
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
        - id: cs_r7T4AGJZ5gaJFSe8LrW37K
          claim_id: c_GrKhYED9m5JBh98Uz54T21
          source_id: s_BqnAuU3EYQUicmzeBpSAHM
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

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝（CBDB 18257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18257&o=json)
