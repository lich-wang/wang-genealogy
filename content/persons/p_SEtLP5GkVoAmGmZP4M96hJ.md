---
schema: wang-person/v1
id: p_SEtLP5GkVoAmGmZP4M96hJ
status: active
merged_into: null
display_name: 王語
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uyb1LRMXJbkyfAfBACxGGE
        subject_person_id: p_SEtLP5GkVoAmGmZP4M96hJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王語
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3CkU1nB4v4RfK2VLZFTgb7
          claim_id: c_uyb1LRMXJbkyfAfBACxGGE
          source_id: s_R1LE4v7GsX1vPk8ky1a95w
          stance: supports
          locator: CBDB:219647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219647）
          source: &a1
            id: s_R1LE4v7GsX1vPk8ky1a95w
            source_type: api_record
            title: 中国历代人物传记资料库：王語（CBDB 219647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219647&o=json
            external_identifier: CBDB:219647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m7tKY6JD8BGXPMNNXcTJQh
        subject_person_id: p_SEtLP5GkVoAmGmZP4M96hJ
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
        - id: cs_n7TXBZ5sxzt71cn3SJQ123
          claim_id: c_m7tKY6JD8BGXPMNNXcTJQh
          source_id: s_R1LE4v7GsX1vPk8ky1a95w
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

# 王語

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王語 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王語（CBDB 219647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219647&o=json)
