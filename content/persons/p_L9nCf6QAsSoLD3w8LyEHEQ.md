---
schema: wang-person/v1
id: p_L9nCf6QAsSoLD3w8LyEHEQ
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XxQXn7sBMPrCtTKmQAwaYw
        subject_person_id: p_L9nCf6QAsSoLD3w8LyEHEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yo7CbXisXV2FXY6axaoG4z
          claim_id: c_XxQXn7sBMPrCtTKmQAwaYw
          source_id: s_bfwKkrM9iLZQWExzDARjMb
          stance: supports
          locator: CBDB:383476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383476）
          source: &a1
            id: s_bfwKkrM9iLZQWExzDARjMb
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 383476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383476&o=json
            external_identifier: CBDB:383476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VGEjP2Nf3cwVbNhRYYVoTh
        subject_person_id: p_L9nCf6QAsSoLD3w8LyEHEQ
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
        - id: cs_AiFUQNCEQaN79YvtXTPxdL
          claim_id: c_VGEjP2Nf3cwVbNhRYYVoTh
          source_id: s_bfwKkrM9iLZQWExzDARjMb
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 383476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383476&o=json)
