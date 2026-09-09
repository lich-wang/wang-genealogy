---
schema: wang-person/v1
id: p_CvEA6URVHH4rkQL5gp5TJh
status: active
merged_into: null
display_name: 王鴻中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGzA1afqK4umvwJSqy8w58
        subject_person_id: p_CvEA6URVHH4rkQL5gp5TJh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W48JabPmb6GB6PL5zKSroK
          claim_id: c_LGzA1afqK4umvwJSqy8w58
          source_id: s_BuWc1JUd9CbAQhPwHf99FT
          stance: supports
          locator: CBDB:72012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72012）
          source: &a1
            id: s_BuWc1JUd9CbAQhPwHf99FT
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻中（CBDB 72012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72012&o=json
            external_identifier: CBDB:72012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_97akF3h17XCSBVXbmjUiG2
        subject_person_id: p_CvEA6URVHH4rkQL5gp5TJh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHi6T1yZL5thSbzEpaG8V5
          claim_id: c_97akF3h17XCSBVXbmjUiG2
          source_id: s_BuWc1JUd9CbAQhPwHf99FT
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
        id: c_Yt8W9uAwkad9kVGjc5uK76
        subject_person_id: p_CvEA6URVHH4rkQL5gp5TJh
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
        - id: cs_1GyLCE9uueGrdR3Lt6QqT7
          claim_id: c_Yt8W9uAwkad9kVGjc5uK76
          source_id: s_BuWc1JUd9CbAQhPwHf99FT
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

# 王鴻中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻中 | accepted |
| birth.date | 1737年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻中（CBDB 72012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72012&o=json)
