---
schema: wang-person/v1
id: p_tAM5wcGVWvfoWBvQ6tKyVK
status: active
merged_into: null
display_name: 王守訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YWPuAoXgpQ4QLJZiK2tFe
        subject_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XSHGnsmi1htBjVs5uCPr2U
          claim_id: c_1YWPuAoXgpQ4QLJZiK2tFe
          source_id: s_toSEJdBf8z68wrj6o8Zb5d
          stance: supports
          locator: CBDB:327955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327955）
          source: &a1
            id: s_toSEJdBf8z68wrj6o8Zb5d
            source_type: api_record
            title: 中国历代人物传记资料库：王守訓（CBDB 327955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json
            external_identifier: CBDB:327955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rkuQUqieJL3afwiuKA9qtR
        subject_person_id: p_tAM5wcGVWvfoWBvQ6tKyVK
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
        - id: cs_F5c2tDdf8v4Tf18GgcFz6i
          claim_id: c_rkuQUqieJL3afwiuKA9qtR
          source_id: s_toSEJdBf8z68wrj6o8Zb5d
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

# 王守訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守訓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守訓（CBDB 327955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327955&o=json)
