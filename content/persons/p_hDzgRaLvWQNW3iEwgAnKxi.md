---
schema: wang-person/v1
id: p_hDzgRaLvWQNW3iEwgAnKxi
status: active
merged_into: null
display_name: 王惇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nb6XJEpPzX6qSXm5yj8mD1
        subject_person_id: p_hDzgRaLvWQNW3iEwgAnKxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_91APfecdoTJ5mMxQPA3CGR
          claim_id: c_nb6XJEpPzX6qSXm5yj8mD1
          source_id: s_YKEpWE9Nwh9fz9Pcp9Mizq
          stance: supports
          locator: CBDB:71202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71202）
          source: &a1
            id: s_YKEpWE9Nwh9fz9Pcp9Mizq
            source_type: api_record
            title: 中国历代人物传记资料库：王惇（CBDB 71202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71202&o=json
            external_identifier: CBDB:71202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QxZKTbxVsVJbWWBCnr4XKs
        subject_person_id: p_hDzgRaLvWQNW3iEwgAnKxi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rAEsjcLLU894QQ2JaXMzZ3
          claim_id: c_QxZKTbxVsVJbWWBCnr4XKs
          source_id: s_YKEpWE9Nwh9fz9Pcp9Mizq
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
        id: c_FMSP9DSFHA8hWSCcntHCEq
        subject_person_id: p_hDzgRaLvWQNW3iEwgAnKxi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ySXu4HAsZi7z6rXq3z6xA7
          claim_id: c_FMSP9DSFHA8hWSCcntHCEq
          source_id: s_YKEpWE9Nwh9fz9Pcp9Mizq
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
        id: c_QRkm5YBgkXMXJr3GcLSHpt
        subject_person_id: p_hDzgRaLvWQNW3iEwgAnKxi
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
        - id: cs_DiJdqjLA8bT9GoYvGgb6pL
          claim_id: c_QRkm5YBgkXMXJr3GcLSHpt
          source_id: s_YKEpWE9Nwh9fz9Pcp9Mizq
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

# 王惇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惇 | accepted |
| birth.date | 1748年 | accepted |
| death.date | 1831年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惇（CBDB 71202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71202&o=json)
