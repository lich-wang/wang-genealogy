---
schema: wang-person/v1
id: p_dLJ7sEAxdkznybwp8rHiXD
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_trS5CXLLNegWQMU5zJyUN9
        subject_person_id: p_dLJ7sEAxdkznybwp8rHiXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqeRigwHT9F7oBXHUYHoaQ
          claim_id: c_trS5CXLLNegWQMU5zJyUN9
          source_id: s_gDm2Q1yV66T3DMexL9bVhe
          stance: supports
          locator: CBDB:328152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328152）
          source: &a1
            id: s_gDm2Q1yV66T3DMexL9bVhe
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 328152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json
            external_identifier: CBDB:328152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1MLEVGw6vZdTx8rRFPLvV
        subject_person_id: p_dLJ7sEAxdkznybwp8rHiXD
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
        - id: cs_GrHjP1hsh6SfZzu6PPPT7H
          claim_id: c_h1MLEVGw6vZdTx8rRFPLvV
          source_id: s_gDm2Q1yV66T3DMexL9bVhe
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 328152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328152&o=json)
