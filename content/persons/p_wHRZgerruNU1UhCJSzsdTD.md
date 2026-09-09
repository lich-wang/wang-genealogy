---
schema: wang-person/v1
id: p_wHRZgerruNU1UhCJSzsdTD
status: active
merged_into: null
display_name: 王佑曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qEXvReGY4Ptsvm1L4N4HWo
        subject_person_id: p_wHRZgerruNU1UhCJSzsdTD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4zk97RPa3CXo78oR8EiNEY
          claim_id: c_qEXvReGY4Ptsvm1L4N4HWo
          source_id: s_ZwDFkKWGMim1t79wcJ8Xyz
          stance: supports
          locator: CBDB:71678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71678）
          source: &a1
            id: s_ZwDFkKWGMim1t79wcJ8Xyz
            source_type: api_record
            title: 中国历代人物传记资料库：王佑曾（CBDB 71678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71678&o=json
            external_identifier: CBDB:71678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4x5y8DNDqw2TfFVR55nEN3
        subject_person_id: p_wHRZgerruNU1UhCJSzsdTD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHzA54dXDKWcADkA6DFZGg
          claim_id: c_4x5y8DNDqw2TfFVR55nEN3
          source_id: s_ZwDFkKWGMim1t79wcJ8Xyz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z5HRw3fvY4hsSA6u2whZ8T
        subject_person_id: p_wHRZgerruNU1UhCJSzsdTD
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
        - id: cs_1QeSGHnvNk3SUiX1HSLSFL
          claim_id: c_Z5HRw3fvY4hsSA6u2whZ8T
          source_id: s_ZwDFkKWGMim1t79wcJ8Xyz
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

# 王佑曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑曾 | accepted |
| birth.date | 1848年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佑曾（CBDB 71678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71678&o=json)
