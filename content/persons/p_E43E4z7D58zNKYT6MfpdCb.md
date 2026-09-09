---
schema: wang-person/v1
id: p_E43E4z7D58zNKYT6MfpdCb
status: active
merged_into: null
display_name: 王胤久
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQChArgJ5MDHfeN4TDQJi9
        subject_person_id: p_E43E4z7D58zNKYT6MfpdCb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤久
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9MNUnyk7hW3uMzi1PGkaz4
          claim_id: c_AQChArgJ5MDHfeN4TDQJi9
          source_id: s_2H5SMUELi5JU4x2buboQxR
          stance: supports
          locator: CBDB:60757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60757）
          source: &a1
            id: s_2H5SMUELi5JU4x2buboQxR
            source_type: api_record
            title: 中国历代人物传记资料库：王胤久（CBDB 60757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60757&o=json
            external_identifier: CBDB:60757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vFgQ7NSkVzSeaWs1ctcbw2
        subject_person_id: p_E43E4z7D58zNKYT6MfpdCb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1651年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9iuwEjTsim2ZdPBEF8WSe
          claim_id: c_vFgQ7NSkVzSeaWs1ctcbw2
          source_id: s_2H5SMUELi5JU4x2buboQxR
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
        id: c_NhoCfzgnBm9MtTnM1HHz9z
        subject_person_id: p_E43E4z7D58zNKYT6MfpdCb
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
        - id: cs_uxt2LJ8ULrw8HpuE7SG6AY
          claim_id: c_NhoCfzgnBm9MtTnM1HHz9z
          source_id: s_2H5SMUELi5JU4x2buboQxR
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

# 王胤久

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胤久 | accepted |
| death.date | 1651年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王胤久（CBDB 60757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60757&o=json)
