---
schema: wang-person/v1
id: p_qK3N4uKxzB8CyqZwBuRrTH
status: active
merged_into: null
display_name: 王世耿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5uvDJadtQPjuAuMTUGR5w
        subject_person_id: p_qK3N4uKxzB8CyqZwBuRrTH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世耿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6osYVqHHKg9MHgnHLuKj3q
          claim_id: c_Q5uvDJadtQPjuAuMTUGR5w
          source_id: s_W1Ez3zr3w99djNY8QGv1A8
          stance: supports
          locator: CBDB:526925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526925）
          source: &a1
            id: s_W1Ez3zr3w99djNY8QGv1A8
            source_type: api_record
            title: 中国历代人物传记资料库：王世耿（CBDB 526925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526925&o=json
            external_identifier: CBDB:526925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZp35AREQCuayzaH8y1L6y
        subject_person_id: p_qK3N4uKxzB8CyqZwBuRrTH
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
        - id: cs_NvGDG136h9qEQN2L7F1k7a
          claim_id: c_PZp35AREQCuayzaH8y1L6y
          source_id: s_W1Ez3zr3w99djNY8QGv1A8
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

# 王世耿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世耿 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世耿（CBDB 526925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526925&o=json)
