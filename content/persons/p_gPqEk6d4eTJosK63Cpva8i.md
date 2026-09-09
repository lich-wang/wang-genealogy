---
schema: wang-person/v1
id: p_gPqEk6d4eTJosK63Cpva8i
status: active
merged_into: null
display_name: 王文鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZrXxs3gAsfch9FcDWQqBcm
        subject_person_id: p_gPqEk6d4eTJosK63Cpva8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iSLNkw67oFXgmvzBoZLH8n
          claim_id: c_ZrXxs3gAsfch9FcDWQqBcm
          source_id: s_TXn4A5nK5cyBkHMrfE2qBv
          stance: supports
          locator: CBDB:414753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414753）
          source: &a1
            id: s_TXn4A5nK5cyBkHMrfE2qBv
            source_type: api_record
            title: 中国历代人物传记资料库：王文鎮（CBDB 414753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414753&o=json
            external_identifier: CBDB:414753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nGJZxLGNhzSBeRrQDF9CMM
        subject_person_id: p_gPqEk6d4eTJosK63Cpva8i
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
        - id: cs_PWAK33NzXDLcpkhBJELgLF
          claim_id: c_nGJZxLGNhzSBeRrQDF9CMM
          source_id: s_TXn4A5nK5cyBkHMrfE2qBv
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

# 王文鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文鎮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文鎮（CBDB 414753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414753&o=json)
