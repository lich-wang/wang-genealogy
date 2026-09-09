---
schema: wang-person/v1
id: p_3MA7AMKqXeB3G7av1khfr8
status: active
merged_into: null
display_name: 王倕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7zGjMqzq1mMX3UWqdzi7c
        subject_person_id: p_3MA7AMKqXeB3G7av1khfr8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t2gmiwxh58T4PDJNkdF8kV
          claim_id: c_T7zGjMqzq1mMX3UWqdzi7c
          source_id: s_NiNvN6xQRJfDsfCFWpfQC7
          stance: supports
          locator: CBDB:189364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189364）
          source: &a1
            id: s_NiNvN6xQRJfDsfCFWpfQC7
            source_type: api_record
            title: 中国历代人物传记资料库：王倕（CBDB 189364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189364&o=json
            external_identifier: CBDB:189364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vhmEFmLF7nS3B8mPdQsK73
        subject_person_id: p_3MA7AMKqXeB3G7av1khfr8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tVE69o5qLE45UCx32Qc2ev
          claim_id: c_vhmEFmLF7nS3B8mPdQsK73
          source_id: s_NiNvN6xQRJfDsfCFWpfQC7
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
        id: c_jTkEKXuzkeHx5BK4fMyQ9T
        subject_person_id: p_3MA7AMKqXeB3G7av1khfr8
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
        - id: cs_JP6nD3iQQV2z9nq8iFa4Ah
          claim_id: c_jTkEKXuzkeHx5BK4fMyQ9T
          source_id: s_NiNvN6xQRJfDsfCFWpfQC7
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

# 王倕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倕 | accepted |
| death.date | 742年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倕（CBDB 189364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189364&o=json)
