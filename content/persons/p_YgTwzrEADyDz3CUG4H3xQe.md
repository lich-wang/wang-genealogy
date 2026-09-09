---
schema: wang-person/v1
id: p_YgTwzrEADyDz3CUG4H3xQe
status: active
merged_into: null
display_name: 王偉臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mpvmQkb8GA4Uz4K6YNTW9y
        subject_person_id: p_YgTwzrEADyDz3CUG4H3xQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E29HLFnpQihcMXTTA7PFeC
          claim_id: c_mpvmQkb8GA4Uz4K6YNTW9y
          source_id: s_VDV85x2inWsC3dG257gxJG
          stance: supports
          locator: CBDB:636085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636085）
          source: &a1
            id: s_VDV85x2inWsC3dG257gxJG
            source_type: api_record
            title: 中国历代人物传记资料库：王偉臣（CBDB 636085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636085&o=json
            external_identifier: CBDB:636085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dVHUWmDwVq77nPdxUBMG1L
        subject_person_id: p_YgTwzrEADyDz3CUG4H3xQe
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
        - id: cs_ouSshaAgEiFDtAiYh8zMDs
          claim_id: c_dVHUWmDwVq77nPdxUBMG1L
          source_id: s_VDV85x2inWsC3dG257gxJG
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

# 王偉臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉臣（CBDB 636085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636085&o=json)
