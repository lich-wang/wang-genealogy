---
schema: wang-person/v1
id: p_DKXfaL12CsHEnKF5RMtAXZ
status: active
merged_into: null
display_name: 王若虚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MkQQ5E8n7F2xLk9BDyocHi
        subject_person_id: p_DKXfaL12CsHEnKF5RMtAXZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若虚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQTHn1HJGFcwatCZjdzZ61
          claim_id: c_MkQQ5E8n7F2xLk9BDyocHi
          source_id: s_dGZqhAb7E8fB1DATk1fL3G
          stance: supports
          locator: CBDB:415344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415344）
          source: &a1
            id: s_dGZqhAb7E8fB1DATk1fL3G
            source_type: api_record
            title: 中国历代人物传记资料库：王若虚（CBDB 415344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415344&o=json
            external_identifier: CBDB:415344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RzGWT1dgfyb4P4u98EwKy8
        subject_person_id: p_DKXfaL12CsHEnKF5RMtAXZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoZXMh421LN4KdBcLXHgzq
          claim_id: c_RzGWT1dgfyb4P4u98EwKy8
          source_id: s_dGZqhAb7E8fB1DATk1fL3G
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

# 王若虚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若虚 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若虚（CBDB 415344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415344&o=json)
