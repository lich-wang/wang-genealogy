---
schema: wang-person/v1
id: p_TwqNttrAJWC7sH4DG9Kbi9
status: active
merged_into: null
display_name: 王令
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TM1fXWCVPu1De5ELvPLpo
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_966JXyiXZSo3M5R9MBECyV
          claim_id: c_6TM1fXWCVPu1De5ELvPLpo
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
          stance: supports
          locator: CBDB:140513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140513）
          source: &a1
            id: s_WCzigkijLgsbiQwxTTQQEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王令（CBDB 140513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140513&o=json
            external_identifier: CBDB:140513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p75qMgxhnhDaua3UBJgy6C
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qqm6G8iqjbZZgtQ6QTmHPc
          claim_id: c_p75qMgxhnhDaua3UBJgy6C
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
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
        id: c_7bsrc9n5gav4fSTsDunrbG
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 731年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_42Pp4ENh8CFQyKCLDJbgUZ
          claim_id: c_7bsrc9n5gav4fSTsDunrbG
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
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
        id: c_MDccNABfngWJJ5tjsoaSNn
        subject_person_id: p_TwqNttrAJWC7sH4DG9Kbi9
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
        - id: cs_5K7MNSADJSPrudUW6LoLoA
          claim_id: c_MDccNABfngWJJ5tjsoaSNn
          source_id: s_WCzigkijLgsbiQwxTTQQEJ
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

# 王令

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王令 | accepted |
| birth.date | 672年 | accepted |
| death.date | 731年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王令（CBDB 140513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140513&o=json)
