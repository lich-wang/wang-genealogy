---
schema: wang-person/v1
id: p_yeto5XAeQCiRnLZ4eX2pz2
status: active
merged_into: null
display_name: 王錫鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fq8dgn6HEf757aFLXtPpJZ
        subject_person_id: p_yeto5XAeQCiRnLZ4eX2pz2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7oYNxPburF2TaXxN57LDJh
          claim_id: c_Fq8dgn6HEf757aFLXtPpJZ
          source_id: s_KCzWnRGHJ2dE2dqYF6rdJo
          stance: supports
          locator: CBDB:640657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640657）
          source: &a1
            id: s_KCzWnRGHJ2dE2dqYF6rdJo
            source_type: api_record
            title: 中国历代人物传记资料库：王錫鴻（CBDB 640657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640657&o=json
            external_identifier: CBDB:640657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTd9EKLhorzZ51Jr6Sfojw
        subject_person_id: p_yeto5XAeQCiRnLZ4eX2pz2
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
        - id: cs_4saLSnFMW9AoE3Yrxhcz3C
          claim_id: c_PTd9EKLhorzZ51Jr6Sfojw
          source_id: s_KCzWnRGHJ2dE2dqYF6rdJo
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

# 王錫鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫鴻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫鴻（CBDB 640657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640657&o=json)
