---
schema: wang-person/v1
id: p_zq12paWxqfRQfLAfsBmo4u
status: active
merged_into: null
display_name: 王眾仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxRC4xkVMZBRALhmzFGTMx
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眾仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dT8Ks6BFEk35fEbY7QLgG5
          claim_id: c_CxRC4xkVMZBRALhmzFGTMx
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
          stance: supports
          locator: CBDB:175709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175709）
          source: &a1
            id: s_4hj6iy8vZmgb2TCEwMtVv7
            source_type: api_record
            title: 中国历代人物传记资料库：王眾仲（CBDB 175709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175709&o=json
            external_identifier: CBDB:175709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6z6ZSuN7KkQ6FWwMU3xQns
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 843年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNwzFT8kW3ACxLhDtPza7i
          claim_id: c_6z6ZSuN7KkQ6FWwMU3xQns
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
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
        id: c_Hy27EZvcwsa3kXhqkPZrHD
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
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
        - id: cs_4o1hcu89CqK4duevrrzmCJ
          claim_id: c_Hy27EZvcwsa3kXhqkPZrHD
          source_id: s_4hj6iy8vZmgb2TCEwMtVv7
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

# 王眾仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王眾仲 | accepted |
| death.date | 843年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王眾仲（CBDB 175709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175709&o=json)
