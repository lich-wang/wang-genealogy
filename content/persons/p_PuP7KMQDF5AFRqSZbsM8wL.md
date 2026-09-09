---
schema: wang-person/v1
id: p_PuP7KMQDF5AFRqSZbsM8wL
status: active
merged_into: null
display_name: 王安道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDiU2eETaAPEVSqMN5M2XL
        subject_person_id: p_PuP7KMQDF5AFRqSZbsM8wL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2r7jWbeBKkBiXuMy2iUoA
          claim_id: c_mDiU2eETaAPEVSqMN5M2XL
          source_id: s_QpL5qQoycR6HEESmw8M1x3
          stance: supports
          locator: CBDB:97856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97856）
          source: &a1
            id: s_QpL5qQoycR6HEESmw8M1x3
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 97856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97856&o=json
            external_identifier: CBDB:97856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KytCLgo68NMhhNhBwAQeN9
        subject_person_id: p_PuP7KMQDF5AFRqSZbsM8wL
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
        - id: cs_XH96QaPFzVWw7EgH32VDit
          claim_id: c_KytCLgo68NMhhNhBwAQeN9
          source_id: s_QpL5qQoycR6HEESmw8M1x3
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

# 王安道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安道 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 97856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97856&o=json)
