---
schema: wang-person/v1
id: p_ve3PDbNGqaNQgddGuw2C43
status: active
merged_into: null
display_name: 王燁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muHrG8MZ3VdqB5BpjRGW9N
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPQyGKe8vwn19vDqp1EQF6
          claim_id: c_muHrG8MZ3VdqB5BpjRGW9N
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
          stance: supports
          locator: CBDB:126822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126822）
          source: &a1
            id: s_eMfJH2tsZJRFU4Bz3R1GC3
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 126822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json
            external_identifier: CBDB:126822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iEDM1zpJCjXYFJKzq5vXa
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
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
        - id: cs_HT6Qckaf3CKmcBRk5kX6UM
          claim_id: c_1iEDM1zpJCjXYFJKzq5vXa
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
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

# 王燁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燁（CBDB 126822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json)
