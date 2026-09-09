---
schema: wang-person/v1
id: p_yKiEYZhExh7QE7KLEomey3
status: active
merged_into: null
display_name: 王護
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uw4JTiFk6PoohkzDnXKxvR
        subject_person_id: p_yKiEYZhExh7QE7KLEomey3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jPSREDLHuR92GZeahRucmM
          claim_id: c_uw4JTiFk6PoohkzDnXKxvR
          source_id: s_saxoiudXHjQRD9wJfsQjzW
          stance: supports
          locator: CBDB:148234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148234）
          source: &a1
            id: s_saxoiudXHjQRD9wJfsQjzW
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 148234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148234&o=json
            external_identifier: CBDB:148234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RMGP9j16nYvy5QZk7pd3Km
        subject_person_id: p_yKiEYZhExh7QE7KLEomey3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1PSw2AKBtA2XB7aH9REc8X
          claim_id: c_RMGP9j16nYvy5QZk7pd3Km
          source_id: s_saxoiudXHjQRD9wJfsQjzW
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

# 王護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王護 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 148234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148234&o=json)
