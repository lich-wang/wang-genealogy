---
schema: wang-person/v1
id: p_iu9UaxBeRfU2eFCxfWLHRN
status: active
merged_into: null
display_name: 王慶詵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QsHX9B4Kn4aQKD7YTrQRyZ
        subject_person_id: p_iu9UaxBeRfU2eFCxfWLHRN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶詵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n3bvKknjxJ8SNo1GPLoL3M
          claim_id: c_QsHX9B4Kn4aQKD7YTrQRyZ
          source_id: s_wyWdFs17onnNSwypqgAJW2
          stance: supports
          locator: CBDB:175738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175738）
          source: &a1
            id: s_wyWdFs17onnNSwypqgAJW2
            source_type: api_record
            title: 中国历代人物传记资料库：王慶詵（CBDB 175738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175738&o=json
            external_identifier: CBDB:175738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8ZNso54LAj79cHsz1C2NSE
        subject_person_id: p_iu9UaxBeRfU2eFCxfWLHRN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oN3h9rpGLfEg13dGnH76a6
          claim_id: c_8ZNso54LAj79cHsz1C2NSE
          source_id: s_wyWdFs17onnNSwypqgAJW2
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
        id: c_GRBXc9iz1hrCe7ynCSKkC3
        subject_person_id: p_iu9UaxBeRfU2eFCxfWLHRN
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
        - id: cs_RAwPpYiELsUiJZ7HHqEmCD
          claim_id: c_GRBXc9iz1hrCe7ynCSKkC3
          source_id: s_wyWdFs17onnNSwypqgAJW2
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

# 王慶詵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶詵 | accepted |
| death.date | 695年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶詵（CBDB 175738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175738&o=json)
