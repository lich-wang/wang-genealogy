---
schema: wang-person/v1
id: p_stumq3LKUX83aY7FDSYoQ9
status: active
merged_into: null
display_name: 王紹先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4G3SCDqfHbCHenmvLZEU39
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrNc9u5QC6mTK4CJ3JHRKp
          claim_id: c_4G3SCDqfHbCHenmvLZEU39
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
          stance: supports
          locator: CBDB:206726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206726）
          source: &a1
            id: s_51SNKp1DcDfU2auLpQ39Cr
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 206726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json
            external_identifier: CBDB:206726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E5WJsmYBk6egWGCdpdgsKs
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqpEpGWNxb7EAESMRvFLe6
          claim_id: c_E5WJsmYBk6egWGCdpdgsKs
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
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
        id: c_7Z6e4pZEWaQTuNkFEbXeuG
        subject_person_id: p_stumq3LKUX83aY7FDSYoQ9
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
        - id: cs_bJ3gkwv4Wn87tEtuKFCrdk
          claim_id: c_7Z6e4pZEWaQTuNkFEbXeuG
          source_id: s_51SNKp1DcDfU2auLpQ39Cr
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

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| birth.date | 1559年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹先（CBDB 206726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206726&o=json)
