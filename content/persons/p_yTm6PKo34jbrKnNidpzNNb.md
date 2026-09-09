---
schema: wang-person/v1
id: p_yTm6PKo34jbrKnNidpzNNb
status: active
merged_into: null
display_name: 王國均
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Cbx3o83PqYYMkKnSXiygy
        subject_person_id: p_yTm6PKo34jbrKnNidpzNNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ryf3EqmEpd8wEU2XuFxwFT
          claim_id: c_3Cbx3o83PqYYMkKnSXiygy
          source_id: s_BeWogKLFRUBkPQV5iYeTUJ
          stance: supports
          locator: CBDB:71750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71750）
          source: &a1
            id: s_BeWogKLFRUBkPQV5iYeTUJ
            source_type: api_record
            title: 中国历代人物传记资料库：王國均（CBDB 71750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71750&o=json
            external_identifier: CBDB:71750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CxXsZZ5RbF4F3eAJwX496C
        subject_person_id: p_yTm6PKo34jbrKnNidpzNNb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKgN6fb9WMcAZDZJuGwavc
          claim_id: c_CxXsZZ5RbF4F3eAJwX496C
          source_id: s_BeWogKLFRUBkPQV5iYeTUJ
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
        id: c_GPNABQGaquVzgpCtgJ132U
        subject_person_id: p_yTm6PKo34jbrKnNidpzNNb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MN29rGPUQnpPB1fW3ugY5z
          claim_id: c_GPNABQGaquVzgpCtgJ132U
          source_id: s_BeWogKLFRUBkPQV5iYeTUJ
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
        id: c_oT95aJ2RPGQzLDqb46AiBk
        subject_person_id: p_yTm6PKo34jbrKnNidpzNNb
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
        - id: cs_eUZdmV4YHhF9bhGiPnT214
          claim_id: c_oT95aJ2RPGQzLDqb46AiBk
          source_id: s_BeWogKLFRUBkPQV5iYeTUJ
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

# 王國均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國均 | accepted |
| birth.date | 1800年 | accepted |
| death.date | 1867年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國均（CBDB 71750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71750&o=json)
