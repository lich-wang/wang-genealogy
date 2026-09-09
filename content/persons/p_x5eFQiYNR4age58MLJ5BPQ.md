---
schema: wang-person/v1
id: p_x5eFQiYNR4age58MLJ5BPQ
status: active
merged_into: null
display_name: 王思誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i3d3bctYhJY9HbRn6Gcgm7
        subject_person_id: p_x5eFQiYNR4age58MLJ5BPQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZwpZbpBw3sWyo33C5DfCy
          claim_id: c_i3d3bctYhJY9HbRn6Gcgm7
          source_id: s_5sZpfC5r1YaBmL9JsgCUXJ
          stance: supports
          locator: CBDB:242209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242209）
          source: &a1
            id: s_5sZpfC5r1YaBmL9JsgCUXJ
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 242209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242209&o=json
            external_identifier: CBDB:242209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ewRurYx5mDs6EeNj8msAVt
        subject_person_id: p_x5eFQiYNR4age58MLJ5BPQ
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
        - id: cs_ZaeJGH2grxMayfK4NjdAoV
          claim_id: c_ewRurYx5mDs6EeNj8msAVt
          source_id: s_5sZpfC5r1YaBmL9JsgCUXJ
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

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 242209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242209&o=json)
