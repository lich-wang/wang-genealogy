---
schema: wang-person/v1
id: p_KpUqber2VDsMb5TJ68k7tk
status: active
merged_into: null
display_name: 王滂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BUq7L5vYJYti6xVJyC2v8
        subject_person_id: p_KpUqber2VDsMb5TJ68k7tk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JvSL1z8choc5bJhPZ52KDw
          claim_id: c_2BUq7L5vYJYti6xVJyC2v8
          source_id: s_Ak24DTvR85QD71d3ucUvnN
          stance: supports
          locator: CBDB:175796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175796）
          source: &a1
            id: s_Ak24DTvR85QD71d3ucUvnN
            source_type: api_record
            title: 中国历代人物传记资料库：王滂（CBDB 175796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175796&o=json
            external_identifier: CBDB:175796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cQ2hTb6U4dBCGcZrbpanAH
        subject_person_id: p_KpUqber2VDsMb5TJ68k7tk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w9VPco1ZxzvfY818dVEkTn
          claim_id: c_cQ2hTb6U4dBCGcZrbpanAH
          source_id: s_Ak24DTvR85QD71d3ucUvnN
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
        id: c_D4rhEKQ7UZCEyBMm6WBTNT
        subject_person_id: p_KpUqber2VDsMb5TJ68k7tk
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
        - id: cs_5yyYeGX5xGFtT4AHRNTK2u
          claim_id: c_D4rhEKQ7UZCEyBMm6WBTNT
          source_id: s_Ak24DTvR85QD71d3ucUvnN
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

# 王滂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滂 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滂（CBDB 175796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175796&o=json)
