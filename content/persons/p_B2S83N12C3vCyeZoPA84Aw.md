---
schema: wang-person/v1
id: p_B2S83N12C3vCyeZoPA84Aw
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NktnCuHKXrfuC5z1Feppim
        subject_person_id: p_B2S83N12C3vCyeZoPA84Aw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Vb3j12WWVqmgwagt1hVrG
          claim_id: c_NktnCuHKXrfuC5z1Feppim
          source_id: s_nQMed46rs9qYwroPUfYy9t
          stance: supports
          locator: CBDB:244425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244425）
          source: &a1
            id: s_nQMed46rs9qYwroPUfYy9t
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 244425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json
            external_identifier: CBDB:244425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRqkTs3RyT8M1hjGGPujNB
        subject_person_id: p_B2S83N12C3vCyeZoPA84Aw
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
        - id: cs_ogPCSNxpDJNqJ1uNe3haHZ
          claim_id: c_uRqkTs3RyT8M1hjGGPujNB
          source_id: s_nQMed46rs9qYwroPUfYy9t
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 244425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244425&o=json)
