---
schema: wang-person/v1
id: p_Mm4Feno3TMRLDtespKCU2Q
status: active
merged_into: null
display_name: 王翰臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQEGhkaR8Ca6QwqqCY2CA1
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dmiopANrE1ukJNN68RoiGJ
          claim_id: c_LQEGhkaR8Ca6QwqqCY2CA1
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
          stance: supports
          locator: CBDB:202016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202016）
          source: &a1
            id: s_5sU9d7FMNJD9YM66ax9J7G
            source_type: api_record
            title: 中国历代人物传记资料库：王翰臣（CBDB 202016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202016&o=json
            external_identifier: CBDB:202016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_z9cfwM3UR1YY2kPUzARC9G
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHAeXqSgi8aNtFRzRMzF37
          claim_id: c_z9cfwM3UR1YY2kPUzARC9G
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
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
        id: c_d89wWU5DZ2QiGhDgQn7QVo
        subject_person_id: p_Mm4Feno3TMRLDtespKCU2Q
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
        - id: cs_hUT2qFZKKh3jaHCGATVmAM
          claim_id: c_d89wWU5DZ2QiGhDgQn7QVo
          source_id: s_5sU9d7FMNJD9YM66ax9J7G
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

# 王翰臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰臣 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰臣（CBDB 202016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202016&o=json)
