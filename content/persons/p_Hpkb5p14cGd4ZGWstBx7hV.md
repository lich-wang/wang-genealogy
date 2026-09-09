---
schema: wang-person/v1
id: p_Hpkb5p14cGd4ZGWstBx7hV
status: active
merged_into: null
display_name: 王晤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxL8kN86wwi2LVzokUYyFJ
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SWgeoeEzTmrreXaSGSSAd7
          claim_id: c_MxL8kN86wwi2LVzokUYyFJ
          source_id: s_idVqaUxQv9h9182j1mi7EL
          stance: supports
          locator: CBDB:191809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191809）
          source: &a1
            id: s_idVqaUxQv9h9182j1mi7EL
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 191809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json
            external_identifier: CBDB:191809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_91KjvfhM64Aud6YPACvcXs
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3aYSku99KpJP2gKm2G1Eq
          claim_id: c_91KjvfhM64Aud6YPACvcXs
          source_id: s_idVqaUxQv9h9182j1mi7EL
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
        id: c_GuSqiyLd7Rm3bcWvK5Q3uR
        subject_person_id: p_Hpkb5p14cGd4ZGWstBx7hV
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
        - id: cs_SCeAr2NyEMGayk9K5JjkDZ
          claim_id: c_GuSqiyLd7Rm3bcWvK5Q3uR
          source_id: s_idVqaUxQv9h9182j1mi7EL
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

# 王晤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晤 | accepted |
| death.date | 804年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晤（CBDB 191809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191809&o=json)
