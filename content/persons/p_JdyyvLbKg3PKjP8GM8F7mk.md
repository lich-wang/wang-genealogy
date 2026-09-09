---
schema: wang-person/v1
id: p_JdyyvLbKg3PKjP8GM8F7mk
status: active
merged_into: null
display_name: 王君德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T1TD7MU7inAq2Rx2uR8wYz
        subject_person_id: p_JdyyvLbKg3PKjP8GM8F7mk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKM4tuKRA2h3Wvq6KrvNty
          claim_id: c_T1TD7MU7inAq2Rx2uR8wYz
          source_id: s_CoZEV1bS2sDJiNEac86BXQ
          stance: supports
          locator: CBDB:139598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139598）
          source: &a1
            id: s_CoZEV1bS2sDJiNEac86BXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王君德（CBDB 139598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139598&o=json
            external_identifier: CBDB:139598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VM4T85V2BZcRk8qrC3ej4z
        subject_person_id: p_JdyyvLbKg3PKjP8GM8F7mk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 592年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8867GXHcBHhj3KL39pE6f4
          claim_id: c_VM4T85V2BZcRk8qrC3ej4z
          source_id: s_CoZEV1bS2sDJiNEac86BXQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x3aer7eygBXjcoADcNhVXt
        subject_person_id: p_JdyyvLbKg3PKjP8GM8F7mk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U4FxewQvMj7fb1j7pYpjn9
          claim_id: c_x3aer7eygBXjcoADcNhVXt
          source_id: s_CoZEV1bS2sDJiNEac86BXQ
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
        id: c_wyaQncBqZdrRi4LkcAwCxG
        subject_person_id: p_JdyyvLbKg3PKjP8GM8F7mk
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
        - id: cs_Qk3hjGmtGrHJcyfCiykaWJ
          claim_id: c_wyaQncBqZdrRi4LkcAwCxG
          source_id: s_CoZEV1bS2sDJiNEac86BXQ
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

# 王君德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君德 | accepted |
| birth.date | 592年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君德（CBDB 139598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139598&o=json)
