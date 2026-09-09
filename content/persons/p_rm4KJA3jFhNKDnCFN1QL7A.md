---
schema: wang-person/v1
id: p_rm4KJA3jFhNKDnCFN1QL7A
status: active
merged_into: null
display_name: 王融
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kdNusX7WPVYyd646xujtV4
        subject_person_id: p_rm4KJA3jFhNKDnCFN1QL7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQ34xFccfPiXcDYX1NCfYd
          claim_id: c_kdNusX7WPVYyd646xujtV4
          source_id: s_kddtGRqBhKJZpHf9vLeY1Y
          stance: supports
          locator: CBDB:471963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471963）
          source: &a1
            id: s_kddtGRqBhKJZpHf9vLeY1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王融（CBDB 471963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471963&o=json
            external_identifier: CBDB:471963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zoBxxApZXH5LLxtBYaGK4V
        subject_person_id: p_rm4KJA3jFhNKDnCFN1QL7A
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
        - id: cs_wRH7m8mB7zC1UVMSiGDih5
          claim_id: c_zoBxxApZXH5LLxtBYaGK4V
          source_id: s_kddtGRqBhKJZpHf9vLeY1Y
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

# 王融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王融 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王融（CBDB 471963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471963&o=json)
