---
schema: wang-person/v1
id: p_Ak6f1y1jiB6tMkqCSFMAPZ
status: active
merged_into: null
display_name: 王弘禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gzbaeArFQvJjgicQ6wvQnL
        subject_person_id: p_Ak6f1y1jiB6tMkqCSFMAPZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a5MdsztkE9jF4pHmu78vzx
          claim_id: c_gzbaeArFQvJjgicQ6wvQnL
          source_id: s_Qkz5xHs6mQcnJ9eLaS9HDb
          stance: supports
          locator: CBDB:145700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145700）
          source: &a1
            id: s_Qkz5xHs6mQcnJ9eLaS9HDb
            source_type: api_record
            title: 中国历代人物传记资料库：王弘禮（CBDB 145700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145700&o=json
            external_identifier: CBDB:145700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cN9b4SPVr6iXaBzAXcydZw
        subject_person_id: p_Ak6f1y1jiB6tMkqCSFMAPZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CF3Dxxpxz6kyYNaDRZ3AE4
          claim_id: c_cN9b4SPVr6iXaBzAXcydZw
          source_id: s_Qkz5xHs6mQcnJ9eLaS9HDb
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
        id: c_9PgbhBMabvW1Ys3Y4EN3v9
        subject_person_id: p_Ak6f1y1jiB6tMkqCSFMAPZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGFt1Uv5Z5ivRj1SvYxHvF
          claim_id: c_9PgbhBMabvW1Ys3Y4EN3v9
          source_id: s_Qkz5xHs6mQcnJ9eLaS9HDb
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
        id: c_qS4qW6ddedx12BFtEGaCNs
        subject_person_id: p_Ak6f1y1jiB6tMkqCSFMAPZ
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
        - id: cs_Qm1g5NZFCm2rwNQd1o1YNB
          claim_id: c_qS4qW6ddedx12BFtEGaCNs
          source_id: s_Qkz5xHs6mQcnJ9eLaS9HDb
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

# 王弘禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘禮 | accepted |
| birth.date | 796年 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘禮（CBDB 145700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145700&o=json)
