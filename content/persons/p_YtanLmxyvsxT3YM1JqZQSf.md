---
schema: wang-person/v1
id: p_YtanLmxyvsxT3YM1JqZQSf
status: active
merged_into: null
display_name: 王追湛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XQGLyE672TDmCq9LKvRXhu
        subject_person_id: p_YtanLmxyvsxT3YM1JqZQSf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追湛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gWvEvZPLae61Zy1MN6dFHs
          claim_id: c_XQGLyE672TDmCq9LKvRXhu
          source_id: s_X6Yo8buB3wcqAsjtrF4mt4
          stance: supports
          locator: CBDB:640400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640400）
          source: &a1
            id: s_X6Yo8buB3wcqAsjtrF4mt4
            source_type: api_record
            title: 中国历代人物传记资料库：王追湛（CBDB 640400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640400&o=json
            external_identifier: CBDB:640400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jvepwGqYzKk3iTVJFZgSka
        subject_person_id: p_YtanLmxyvsxT3YM1JqZQSf
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
        - id: cs_mcd73CSWRKi3Q85WBE8xNE
          claim_id: c_jvepwGqYzKk3iTVJFZgSka
          source_id: s_X6Yo8buB3wcqAsjtrF4mt4
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

# 王追湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王追湛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王追湛（CBDB 640400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640400&o=json)
