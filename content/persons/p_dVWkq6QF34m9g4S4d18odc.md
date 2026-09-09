---
schema: wang-person/v1
id: p_dVWkq6QF34m9g4S4d18odc
status: active
merged_into: null
display_name: 王惟善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngk4pKxN6nKqeFwLzyazCe
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mxm19qA6QGYCsGpibqx7Gh
          claim_id: c_ngk4pKxN6nKqeFwLzyazCe
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
          stance: supports
          locator: CBDB:338654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338654）
          source: &a1
            id: s_iYkmnp2vNKNwQqACQWwNxC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 338654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338654&o=json
            external_identifier: CBDB:338654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mLa5Aqz54n2arYr3mk3Grc
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1419年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TveVPD4sUzZrM6NxN5J6RL
          claim_id: c_mLa5Aqz54n2arYr3mk3Grc
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
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
        id: c_MUyiReGF8M5EwfrFXSCX2P
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
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
        - id: cs_D6QNKT7QPzZQDVf4iRPw6E
          claim_id: c_MUyiReGF8M5EwfrFXSCX2P
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
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

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| birth.date | 1419年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟善（CBDB 338654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338654&o=json)
