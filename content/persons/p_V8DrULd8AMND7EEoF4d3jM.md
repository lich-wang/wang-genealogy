---
schema: wang-person/v1
id: p_V8DrULd8AMND7EEoF4d3jM
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THzPMG7VyvyCmbQZj6JK9G
        subject_person_id: p_V8DrULd8AMND7EEoF4d3jM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dL2hYfoJsFn3E72R1V4bNQ
          claim_id: c_THzPMG7VyvyCmbQZj6JK9G
          source_id: s_wC1s4BY8o9SwvhX7YD25i6
          stance: supports
          locator: CBDB:505256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505256）
          source: &a1
            id: s_wC1s4BY8o9SwvhX7YD25i6
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 505256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505256&o=json
            external_identifier: CBDB:505256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p5aTPwxQ37QTD6DBm5q2TQ
        subject_person_id: p_V8DrULd8AMND7EEoF4d3jM
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
        - id: cs_zMaBTYwVRdjgty13EgyCne
          claim_id: c_p5aTPwxQ37QTD6DBm5q2TQ
          source_id: s_wC1s4BY8o9SwvhX7YD25i6
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 505256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505256&o=json)
