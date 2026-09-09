---
schema: wang-person/v1
id: p_PQGy8ixxKMQ7Wx4n1et3jT
status: active
merged_into: null
display_name: 王鏜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BUJZdstSJzbcjRJ8MkSBLc
        subject_person_id: p_PQGy8ixxKMQ7Wx4n1et3jT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CoUJhdafhG2GZkCcgu3CiY
          claim_id: c_BUJZdstSJzbcjRJ8MkSBLc
          source_id: s_sxJMYigQK9X2E8Jh1tHDrq
          stance: supports
          locator: CBDB:504376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504376）
          source: &a1
            id: s_sxJMYigQK9X2E8Jh1tHDrq
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 504376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504376&o=json
            external_identifier: CBDB:504376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iRbK4MSCphT8MJ6BQy7SSo
        subject_person_id: p_PQGy8ixxKMQ7Wx4n1et3jT
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
        - id: cs_KzLPXw9d7E6kwHNA2WiPXo
          claim_id: c_iRbK4MSCphT8MJ6BQy7SSo
          source_id: s_sxJMYigQK9X2E8Jh1tHDrq
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

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏜（CBDB 504376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504376&o=json)
