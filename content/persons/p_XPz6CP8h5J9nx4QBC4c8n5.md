---
schema: wang-person/v1
id: p_XPz6CP8h5J9nx4QBC4c8n5
status: active
merged_into: null
display_name: 王汝諧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92vYdf4UNZ7mU4p5r5XerR
        subject_person_id: p_XPz6CP8h5J9nx4QBC4c8n5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝諧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oBsJ8dnoq3Dhn2NGVnrxi4
          claim_id: c_92vYdf4UNZ7mU4p5r5XerR
          source_id: s_DAGTu5cjTCXzouCT9AWG67
          stance: supports
          locator: CBDB:694120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694120）
          source: &a1
            id: s_DAGTu5cjTCXzouCT9AWG67
            source_type: api_record
            title: 中国历代人物传记资料库：王汝諧（CBDB 694120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694120&o=json
            external_identifier: CBDB:694120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dD42sZy6a7X7BpgLj1HbsJ
        subject_person_id: p_XPz6CP8h5J9nx4QBC4c8n5
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
        - id: cs_VfEYHHCwG8YxKa4NNRSsR9
          claim_id: c_dD42sZy6a7X7BpgLj1HbsJ
          source_id: s_DAGTu5cjTCXzouCT9AWG67
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

# 王汝諧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝諧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝諧（CBDB 694120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694120&o=json)
