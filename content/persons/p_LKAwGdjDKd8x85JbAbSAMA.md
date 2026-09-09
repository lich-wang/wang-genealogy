---
schema: wang-person/v1
id: p_LKAwGdjDKd8x85JbAbSAMA
status: active
merged_into: null
display_name: 王爾祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s9ZPmFaY7fqbE4CU3zVedk
        subject_person_id: p_LKAwGdjDKd8x85JbAbSAMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z6s4dVtmztRSp9q3kBji1F
          claim_id: c_s9ZPmFaY7fqbE4CU3zVedk
          source_id: s_5hr9DuDaCCYDktAYJPdqaf
          stance: supports
          locator: CBDB:61062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61062）
          source: &a1
            id: s_5hr9DuDaCCYDktAYJPdqaf
            source_type: api_record
            title: 中国历代人物传记资料库：王爾祿（CBDB 61062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61062&o=json
            external_identifier: CBDB:61062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FSgcuTgqYY3iC7n9s4YxaJ
        subject_person_id: p_LKAwGdjDKd8x85JbAbSAMA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1614年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkW46C5KHGywkFN3poYJiS
          claim_id: c_FSgcuTgqYY3iC7n9s4YxaJ
          source_id: s_5hr9DuDaCCYDktAYJPdqaf
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
        id: c_Rca3U2ZTYqqoEkc8n1gur1
        subject_person_id: p_LKAwGdjDKd8x85JbAbSAMA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PPA13jcFyBpRTXk6SYGS2j
          claim_id: c_Rca3U2ZTYqqoEkc8n1gur1
          source_id: s_5hr9DuDaCCYDktAYJPdqaf
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
        id: c_MimBFLWY5rNZHUM6WmNTTo
        subject_person_id: p_LKAwGdjDKd8x85JbAbSAMA
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
        - id: cs_jQHxpDiMooCAG328n6T3uZ
          claim_id: c_MimBFLWY5rNZHUM6WmNTTo
          source_id: s_5hr9DuDaCCYDktAYJPdqaf
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

# 王爾祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾祿 | accepted |
| birth.date | 1614年 | accepted |
| death.date | 1683年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾祿（CBDB 61062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61062&o=json)
