---
schema: wang-person/v1
id: p_Dh76owaugVE7WZoTDTQDHS
status: active
merged_into: null
display_name: 王環
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p5jqVrVULEQDkqyF7wHwsB
        subject_person_id: p_Dh76owaugVE7WZoTDTQDHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王環
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EWyEA74Yt7bf4jPYPZsLzS
          claim_id: c_p5jqVrVULEQDkqyF7wHwsB
          source_id: s_zVR8FFWiwmuY9BdeVYP2GT
          stance: supports
          locator: CBDB:342013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342013）
          source: &a1
            id: s_zVR8FFWiwmuY9BdeVYP2GT
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 342013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342013&o=json
            external_identifier: CBDB:342013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CLs5aGt3FTPvQf989CiEpR
        subject_person_id: p_Dh76owaugVE7WZoTDTQDHS
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
        - id: cs_Nvp1B85TZghPC5rDd8xKx2
          claim_id: c_CLs5aGt3FTPvQf989CiEpR
          source_id: s_zVR8FFWiwmuY9BdeVYP2GT
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

# 王環

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王環 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 342013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342013&o=json)
