---
schema: wang-person/v1
id: p_ye9VLgV3pJbXBYdJ82vvQv
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MUG4iou1mCGDEd1uF93gH
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8mEThSKGjL4gDZm6g3srtN
          claim_id: c_7MUG4iou1mCGDEd1uF93gH
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: CBDB:208053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208053）
          source: &a1
            id: s_3xLAig97UWbpTTVBBVEMck
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 208053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json
            external_identifier: CBDB:208053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fj6SCzdszNKJBq57h1CZaJ
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1403年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaEhN6f3MzBPaqTsKPXQ4c
          claim_id: c_fj6SCzdszNKJBq57h1CZaJ
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s4oFx5zDpb19q12yHoFFcj
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
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
        - id: cs_4vyjAq7o2pvJACJMKLvpzW
          claim_id: c_s4oFx5zDpb19q12yHoFFcj
          source_id: s_3xLAig97UWbpTTVBBVEMck
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| birth.date | 1403年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 208053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json)
