---
schema: wang-person/v1
id: p_H9h3Q5KdJ4bXVFzW4MH4wz
status: active
merged_into: null
display_name: 王懷溫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EKKy4iYrjZbEhTFXukz95T
        subject_person_id: p_H9h3Q5KdJ4bXVFzW4MH4wz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f4D5rVRArNuZHYF68uT4eB
          claim_id: c_EKKy4iYrjZbEhTFXukz95T
          source_id: s_NMngBSA1nNqFy1nVxHJhuS
          stance: supports
          locator: CBDB:638023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638023）
          source: &a1
            id: s_NMngBSA1nNqFy1nVxHJhuS
            source_type: api_record
            title: 中国历代人物传记资料库：王懷溫（CBDB 638023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638023&o=json
            external_identifier: CBDB:638023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GVFvHz4xgUMPhbPFfswUxz
        subject_person_id: p_H9h3Q5KdJ4bXVFzW4MH4wz
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
        - id: cs_NmQhbye1p6UJXei1xmDvzy
          claim_id: c_GVFvHz4xgUMPhbPFfswUxz
          source_id: s_NMngBSA1nNqFy1nVxHJhuS
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

# 王懷溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷溫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷溫（CBDB 638023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638023&o=json)
