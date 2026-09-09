---
schema: wang-person/v1
id: p_XLE5qsJY1NjgqLKgXvthnH
status: active
merged_into: null
display_name: 王萬榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wHtxRxEk9JwFtj3EehJbbf
        subject_person_id: p_XLE5qsJY1NjgqLKgXvthnH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GP6f6RheEx6qp8M4XP5gCh
          claim_id: c_wHtxRxEk9JwFtj3EehJbbf
          source_id: s_qBi7KYk2TP1vtSMzmtpLwg
          stance: supports
          locator: CBDB:640121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640121）
          source: &a1
            id: s_qBi7KYk2TP1vtSMzmtpLwg
            source_type: api_record
            title: 中国历代人物传记资料库：王萬榮（CBDB 640121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640121&o=json
            external_identifier: CBDB:640121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ySPv8SW1V4xhWRyb5qKeSX
        subject_person_id: p_XLE5qsJY1NjgqLKgXvthnH
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
        - id: cs_wxz41eB9FF6U6w85t6YzeG
          claim_id: c_ySPv8SW1V4xhWRyb5qKeSX
          source_id: s_qBi7KYk2TP1vtSMzmtpLwg
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

# 王萬榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬榮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬榮（CBDB 640121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640121&o=json)
