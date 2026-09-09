---
schema: wang-person/v1
id: p_5NHSq5fYm4Uv2Ups7pU86Y
status: active
merged_into: null
display_name: 王全琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VyRN8fyRmi16SMm4T26hZf
        subject_person_id: p_5NHSq5fYm4Uv2Ups7pU86Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4YP5qpBJY1WBq8dRjRKEhE
          claim_id: c_VyRN8fyRmi16SMm4T26hZf
          source_id: s_8QQsEnpvA9Nrw4NU1UE9Zk
          stance: supports
          locator: CBDB:562238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562238）
          source: &a1
            id: s_8QQsEnpvA9Nrw4NU1UE9Zk
            source_type: api_record
            title: 中国历代人物传记资料库：王全琮（CBDB 562238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562238&o=json
            external_identifier: CBDB:562238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8NghTdP3m44SmUV2EtFNAW
        subject_person_id: p_5NHSq5fYm4Uv2Ups7pU86Y
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
        - id: cs_6fVW2mqoVZuHvuXkSmjkFs
          claim_id: c_8NghTdP3m44SmUV2EtFNAW
          source_id: s_8QQsEnpvA9Nrw4NU1UE9Zk
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

# 王全琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全琮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王全琮（CBDB 562238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562238&o=json)
