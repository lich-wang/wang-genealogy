---
schema: wang-person/v1
id: p_5MP7N32MMy4otEBWfrDD94
status: active
merged_into: null
display_name: 王廷訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1BV3mWuu2RVbn1WJfUkPm
        subject_person_id: p_5MP7N32MMy4otEBWfrDD94
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUr9o6G1j5243EgWLxsoJ8
          claim_id: c_q1BV3mWuu2RVbn1WJfUkPm
          source_id: s_H9GbxrEtbBi98RAaz4D6mr
          stance: supports
          locator: CBDB:637561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637561）
          source: &a1
            id: s_H9GbxrEtbBi98RAaz4D6mr
            source_type: api_record
            title: 中国历代人物传记资料库：王廷訓（CBDB 637561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637561&o=json
            external_identifier: CBDB:637561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2RdszZQZGaYbcWBakdSGyZ
        subject_person_id: p_5MP7N32MMy4otEBWfrDD94
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
        - id: cs_mZiAPjJ7MLFKcLrm1MNsWw
          claim_id: c_2RdszZQZGaYbcWBakdSGyZ
          source_id: s_H9GbxrEtbBi98RAaz4D6mr
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

# 王廷訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷訓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷訓（CBDB 637561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637561&o=json)
