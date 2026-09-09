---
schema: wang-person/v1
id: p_gEmCkzoWKQTHTvBpDQZ7o9
status: active
merged_into: null
display_name: 王程
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y2Tykbot3THYY369kyfVdK
        subject_person_id: p_gEmCkzoWKQTHTvBpDQZ7o9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2HpDjydnGge4PEMtz4EYRE
          claim_id: c_y2Tykbot3THYY369kyfVdK
          source_id: s_Bgc5XEphCDeP348QS74JZG
          stance: supports
          locator: CBDB:437563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437563）
          source: &a1
            id: s_Bgc5XEphCDeP348QS74JZG
            source_type: api_record
            title: 中国历代人物传记资料库：王程（CBDB 437563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437563&o=json
            external_identifier: CBDB:437563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R8PMDt6iWE7KHb2tE9f3Pw
        subject_person_id: p_gEmCkzoWKQTHTvBpDQZ7o9
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
        - id: cs_eHZfGR7f4J3XENLrKsMGpd
          claim_id: c_R8PMDt6iWE7KHb2tE9f3Pw
          source_id: s_Bgc5XEphCDeP348QS74JZG
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

# 王程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王程 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王程（CBDB 437563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437563&o=json)
