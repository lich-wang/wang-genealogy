---
schema: wang-person/v1
id: p_Y7djPzAqLmAEHdsBaYr578
status: active
merged_into: null
display_name: 王寰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5iTeMS7Q7Uu9QkCdx9ExX
        subject_person_id: p_Y7djPzAqLmAEHdsBaYr578
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4xXMQvaoNNRPqci2TNqEK
          claim_id: c_q5iTeMS7Q7Uu9QkCdx9ExX
          source_id: s_DRty4eSQGMMQ5ZDuBR5tHU
          stance: supports
          locator: CBDB:232656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232656）
          source: &a1
            id: s_DRty4eSQGMMQ5ZDuBR5tHU
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 232656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232656&o=json
            external_identifier: CBDB:232656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1zskbb9CWKwDFgJ6weeAgG
        subject_person_id: p_Y7djPzAqLmAEHdsBaYr578
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
        - id: cs_DgC5Y5B6Hr8QdCyRJS6ESb
          claim_id: c_1zskbb9CWKwDFgJ6weeAgG
          source_id: s_DRty4eSQGMMQ5ZDuBR5tHU
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

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 232656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232656&o=json)
