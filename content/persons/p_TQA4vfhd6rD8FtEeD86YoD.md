---
schema: wang-person/v1
id: p_TQA4vfhd6rD8FtEeD86YoD
status: active
merged_into: null
display_name: 王堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wxcg4QGDt6ApmiQ5vK9aoB
        subject_person_id: p_TQA4vfhd6rD8FtEeD86YoD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m58Uc6j7HEBWzuU1gpBe1a
          claim_id: c_Wxcg4QGDt6ApmiQ5vK9aoB
          source_id: s_EeZLfFutxztAca5mu2xZEn
          stance: supports
          locator: CBDB:491782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491782）
          source: &a1
            id: s_EeZLfFutxztAca5mu2xZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 491782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491782&o=json
            external_identifier: CBDB:491782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E15ECmmm59H3DQvc4Lr7Kj
        subject_person_id: p_TQA4vfhd6rD8FtEeD86YoD
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
        - id: cs_R8NK19iErQWFbFB9RkZvpr
          claim_id: c_E15ECmmm59H3DQvc4Lr7Kj
          source_id: s_EeZLfFutxztAca5mu2xZEn
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

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 491782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491782&o=json)
