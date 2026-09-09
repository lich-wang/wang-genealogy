---
schema: wang-person/v1
id: p_x1FTUwitbrYDetsnBCa1jT
status: active
merged_into: null
display_name: 王卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EwWdLKDRBubLcX5hdDwjQD
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YsdvQBxzkQFzc7smNNRTA6
          claim_id: c_EwWdLKDRBubLcX5hdDwjQD
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: CBDB:139092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139092）
          source: &a1
            id: s_6A6Txntxc2o5RwFdvA17Ue
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 139092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139092&o=json
            external_identifier: CBDB:139092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jErrMeAPMBnTXUwMJFovFM
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4pDv28ra5rbe8QEMBr29Z
          claim_id: c_jErrMeAPMBnTXUwMJFovFM
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_98UFeLQ6Nt7GzBUUxh6aie
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 607年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WiD5Lz6p3owT9PxASpUYUG
          claim_id: c_98UFeLQ6Nt7GzBUUxh6aie
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iFMhYHtZLcRStq3NQG4hKM
        subject_person_id: p_x1FTUwitbrYDetsnBCa1jT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mx66VcZjKRWu5CxwNHy2yF
          claim_id: c_iFMhYHtZLcRStq3NQG4hKM
          source_id: s_6A6Txntxc2o5RwFdvA17Ue
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

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| birth.date | 559年 | accepted |
| death.date | 607年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 139092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139092&o=json)
