---
schema: wang-person/v1
id: p_wdQhPY8rmHXXmYqzK2RGEg
status: active
merged_into: null
display_name: 王烜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3JqJ41AQpuksjQBsLXCuB
        subject_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hJBn9Vc3pEa1J9FEZwF3KE
          claim_id: c_V3JqJ41AQpuksjQBsLXCuB
          source_id: s_qKf8xAdpNPUddJav6bzQiQ
          stance: supports
          locator: CBDB:249897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249897）
          source: &a1
            id: s_qKf8xAdpNPUddJav6bzQiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 249897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json
            external_identifier: CBDB:249897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FSWKbRp9Z2qiA7DQe7NPnr
        subject_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
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
        - id: cs_hJ9MnjA6cLQoztHJWNX4xh
          claim_id: c_FSWKbRp9Z2qiA7DQe7NPnr
          source_id: s_qKf8xAdpNPUddJav6bzQiQ
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

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 249897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json)
