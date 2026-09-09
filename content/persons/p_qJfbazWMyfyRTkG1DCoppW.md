---
schema: wang-person/v1
id: p_qJfbazWMyfyRTkG1DCoppW
status: active
merged_into: null
display_name: 王隴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBVZoBcCpHuLnMNYsobMS4
        subject_person_id: p_qJfbazWMyfyRTkG1DCoppW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SNALx184uQbXbjdjvREoUW
          claim_id: c_SBVZoBcCpHuLnMNYsobMS4
          source_id: s_nv58EFNuY1FN7dE8Y8noz4
          stance: supports
          locator: CBDB:151194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151194）
          source: &a1
            id: s_nv58EFNuY1FN7dE8Y8noz4
            source_type: api_record
            title: 中国历代人物传记资料库：王隴（CBDB 151194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151194&o=json
            external_identifier: CBDB:151194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SGTwYR3heQwpChUkULviKB
        subject_person_id: p_qJfbazWMyfyRTkG1DCoppW
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
        - id: cs_WBWwU6QGoE9RFzSw3BS7oH
          claim_id: c_SGTwYR3heQwpChUkULviKB
          source_id: s_nv58EFNuY1FN7dE8Y8noz4
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

# 王隴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隴（CBDB 151194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151194&o=json)
