---
schema: wang-person/v1
id: p_FueC8hY41Wn3Vk3Q1vYw2F
status: active
merged_into: null
display_name: 王元劍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nKAjzEUQEoTvDaVPjpwBqR
        subject_person_id: p_FueC8hY41Wn3Vk3Q1vYw2F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元劍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y4pZs1b2mgimmMFQx7osAy
          claim_id: c_nKAjzEUQEoTvDaVPjpwBqR
          source_id: s_A4AC1M9i5PEySQrPYH8Dvm
          stance: supports
          locator: CBDB:636139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636139）
          source: &a1
            id: s_A4AC1M9i5PEySQrPYH8Dvm
            source_type: api_record
            title: 中国历代人物传记资料库：王元劍（CBDB 636139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636139&o=json
            external_identifier: CBDB:636139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MyFCp3HpaZpJdu8QX31X1y
        subject_person_id: p_FueC8hY41Wn3Vk3Q1vYw2F
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
        - id: cs_EvierkAhhQzdtwfQoxnyxK
          claim_id: c_MyFCp3HpaZpJdu8QX31X1y
          source_id: s_A4AC1M9i5PEySQrPYH8Dvm
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

# 王元劍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元劍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元劍（CBDB 636139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636139&o=json)
