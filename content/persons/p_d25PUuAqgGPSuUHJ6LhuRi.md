---
schema: wang-person/v1
id: p_d25PUuAqgGPSuUHJ6LhuRi
status: active
merged_into: null
display_name: 王秉龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ncGQtEkuPNeX8aMw717SJ
        subject_person_id: p_d25PUuAqgGPSuUHJ6LhuRi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i9ve6xgrim5CdNAYHRtac2
          claim_id: c_5ncGQtEkuPNeX8aMw717SJ
          source_id: s_KWEmD8Rj1hB3D9tKBp5Uf3
          stance: supports
          locator: CBDB:639667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639667）
          source: &a1
            id: s_KWEmD8Rj1hB3D9tKBp5Uf3
            source_type: api_record
            title: 中国历代人物传记资料库：王秉龍（CBDB 639667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639667&o=json
            external_identifier: CBDB:639667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UeG2LeM5i8znN7iECUtbLR
        subject_person_id: p_d25PUuAqgGPSuUHJ6LhuRi
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
        - id: cs_hLR2GG3xNzXyDBw5ff4GJW
          claim_id: c_UeG2LeM5i8znN7iECUtbLR
          source_id: s_KWEmD8Rj1hB3D9tKBp5Uf3
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

# 王秉龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉龍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉龍（CBDB 639667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639667&o=json)
