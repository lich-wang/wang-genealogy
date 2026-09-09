---
schema: wang-person/v1
id: p_CrHvkbCq6h9TUojCL5FWC1
status: active
merged_into: null
display_name: 王遹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E78k5UukSp3B2k6NbM7G4K
        subject_person_id: p_CrHvkbCq6h9TUojCL5FWC1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sZEHkeV4iFd8WE2rrvEFEe
          claim_id: c_E78k5UukSp3B2k6NbM7G4K
          source_id: s_CfdzbEgF3sF33yg4jjjrQ3
          stance: supports
          locator: CBDB:686745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686745）
          source: &a1
            id: s_CfdzbEgF3sF33yg4jjjrQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王遹（CBDB 686745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686745&o=json
            external_identifier: CBDB:686745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eNDZzpXJDnM622gkJ2iqfL
        subject_person_id: p_CrHvkbCq6h9TUojCL5FWC1
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
        - id: cs_BtfYnGj187Vg3W83zhsjYq
          claim_id: c_eNDZzpXJDnM622gkJ2iqfL
          source_id: s_CfdzbEgF3sF33yg4jjjrQ3
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

# 王遹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遹（CBDB 686745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686745&o=json)
