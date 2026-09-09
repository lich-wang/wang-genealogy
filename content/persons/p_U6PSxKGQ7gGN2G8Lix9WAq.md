---
schema: wang-person/v1
id: p_U6PSxKGQ7gGN2G8Lix9WAq
status: active
merged_into: null
display_name: 王奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9L3fw1bDw83n7S9xmYjUXv
        subject_person_id: p_U6PSxKGQ7gGN2G8Lix9WAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hqZkMFNk2t7D9nE7tMMQz1
          claim_id: c_9L3fw1bDw83n7S9xmYjUXv
          source_id: s_vbpwQFNqp5mkaKDYXpdRx3
          stance: supports
          locator: CBDB:151021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151021）
          source: &a1
            id: s_vbpwQFNqp5mkaKDYXpdRx3
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 151021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151021&o=json
            external_identifier: CBDB:151021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNf3rwfeo7myYX99cD9Dom
        subject_person_id: p_U6PSxKGQ7gGN2G8Lix9WAq
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
        - id: cs_Vm6uXpp14sc7SLFxNAEhMU
          claim_id: c_tNf3rwfeo7myYX99cD9Dom
          source_id: s_vbpwQFNqp5mkaKDYXpdRx3
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

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 151021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151021&o=json)
