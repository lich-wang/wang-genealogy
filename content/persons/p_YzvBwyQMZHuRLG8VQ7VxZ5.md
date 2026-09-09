---
schema: wang-person/v1
id: p_YzvBwyQMZHuRLG8VQ7VxZ5
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBiPoKWNU3UNu1NKHqs3bL
        subject_person_id: p_YzvBwyQMZHuRLG8VQ7VxZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eobh1UP3kg3wAj9uJ7YumX
          claim_id: c_kBiPoKWNU3UNu1NKHqs3bL
          source_id: s_cfeW7dCx5TH7Bk1MNqGkhW
          stance: supports
          locator: CBDB:272752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272752）
          source: &a1
            id: s_cfeW7dCx5TH7Bk1MNqGkhW
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 272752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272752&o=json
            external_identifier: CBDB:272752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPNjtDYium3C7NKm1PvGAb
        subject_person_id: p_YzvBwyQMZHuRLG8VQ7VxZ5
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
        - id: cs_BVWTyBD7Ly8EbV1fhZTDiD
          claim_id: c_QPNjtDYium3C7NKm1PvGAb
          source_id: s_cfeW7dCx5TH7Bk1MNqGkhW
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 272752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272752&o=json)
