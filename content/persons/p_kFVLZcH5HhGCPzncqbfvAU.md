---
schema: wang-person/v1
id: p_kFVLZcH5HhGCPzncqbfvAU
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wh8Qm5jPV1YRo8VrP2otjq
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6SJpjn6Z7CHRru3CjTewYn
          claim_id: c_Wh8Qm5jPV1YRo8VrP2otjq
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: CBDB:208052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208052）
          source: &a1
            id: s_aqtLHn9baQNrzeFNcSJGxm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 208052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json
            external_identifier: CBDB:208052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WChdUxkFGQZGbKHyyK2xGQ
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1415年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8LvjYMXE75wYc68ZEcCigQ
          claim_id: c_WChdUxkFGQZGbKHyyK2xGQ
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
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
        id: c_TveAyRE8vM7JZYn8878wNw
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
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
        - id: cs_ZNKHycVEtF6e9uAK7PTeDy
          claim_id: c_TveAyRE8vM7JZYn8878wNw
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| birth.date | 1415年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 208052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json)
