---
schema: wang-person/v1
id: p_RMejjGJewJRvFyGM3arPK4
status: active
merged_into: null
display_name: 王傳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ehaWtxdnVq5n3C4KSyEbK2
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqGnB2pdL7BkxJNewLM37U
          claim_id: c_ehaWtxdnVq5n3C4KSyEbK2
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
          stance: supports
          locator: CBDB:126769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126769）
          source: &a1
            id: s_mtzFcUnhgHMZDzNRPPXieH
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 126769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126769&o=json
            external_identifier: CBDB:126769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gRSPRpD1j1raZvpRHQaZrJ
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31ovCLXXCrQMueBQ139Q1C
          claim_id: c_gRSPRpD1j1raZvpRHQaZrJ
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
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
        id: c_gHSSSnMYm7PRZYKLDwEkeZ
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srbr1BhG9EaeqwBMngGprX
          claim_id: c_gHSSSnMYm7PRZYKLDwEkeZ
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
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
        id: c_jA5bT7JnDzNi5Jer4QNYmE
        subject_person_id: p_RMejjGJewJRvFyGM3arPK4
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
        - id: cs_ASYmjAXRM5kBcBp3fJzHEH
          claim_id: c_jA5bT7JnDzNi5Jer4QNYmE
          source_id: s_mtzFcUnhgHMZDzNRPPXieH
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

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| birth.date | 1450年 | accepted |
| death.date | 1493年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 126769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126769&o=json)
