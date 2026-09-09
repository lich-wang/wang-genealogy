---
schema: wang-person/v1
id: p_gw3KieyBR7NUwBKxqS6EP8
status: active
merged_into: null
display_name: 王貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_agDFiYMf7aa7JxDif9QPb1
        subject_person_id: p_gw3KieyBR7NUwBKxqS6EP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3LhHMgSip8irRci6ExADFb
          claim_id: c_agDFiYMf7aa7JxDif9QPb1
          source_id: s_UJM5X4HZJ7jBoH2kb3xLD5
          stance: supports
          locator: CBDB:217170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217170）
          source: &a1
            id: s_UJM5X4HZJ7jBoH2kb3xLD5
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 217170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json
            external_identifier: CBDB:217170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gh4rpDNtj7s3VcykyDE7uQ
        subject_person_id: p_gw3KieyBR7NUwBKxqS6EP8
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
        - id: cs_3Qe6PjYSt3UMwJWa9KUBcA
          claim_id: c_gh4rpDNtj7s3VcykyDE7uQ
          source_id: s_UJM5X4HZJ7jBoH2kb3xLD5
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

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 217170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217170&o=json)
