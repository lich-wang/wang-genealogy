---
schema: wang-person/v1
id: p_RhfG4NQKEkamwYKu1ke55x
status: active
merged_into: null
display_name: 王維翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1P7Lz7qBM7nG1kWME8bphE
        subject_person_id: p_RhfG4NQKEkamwYKu1ke55x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DPHDVLQ88CEyaTDE6JRZ3K
          claim_id: c_1P7Lz7qBM7nG1kWME8bphE
          source_id: s_7JLgPNhLeQp9wJQ9RgLqQR
          stance: supports
          locator: CBDB:35528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35528）
          source: &a1
            id: s_7JLgPNhLeQp9wJQ9RgLqQR
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 35528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35528&o=json
            external_identifier: CBDB:35528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nN6D6MAVRMfWKAQnxLC4KX
        subject_person_id: p_RhfG4NQKEkamwYKu1ke55x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqKzdy9gopWVy2C2D1QsCT
          claim_id: c_nN6D6MAVRMfWKAQnxLC4KX
          source_id: s_7JLgPNhLeQp9wJQ9RgLqQR
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

# 王維翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維翰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維翰（CBDB 35528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35528&o=json)
