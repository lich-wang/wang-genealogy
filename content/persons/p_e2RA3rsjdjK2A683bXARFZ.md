---
schema: wang-person/v1
id: p_e2RA3rsjdjK2A683bXARFZ
status: active
merged_into: null
display_name: 王直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pWCQ5haJ3G9au91veX756
        subject_person_id: p_e2RA3rsjdjK2A683bXARFZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YERsE3aE2cEu5BxkaFcGz
          claim_id: c_2pWCQ5haJ3G9au91veX756
          source_id: s_6GQGvR9FdLDiNkYnMQLDA1
          stance: supports
          locator: CBDB:67569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67569）
          source: &a1
            id: s_6GQGvR9FdLDiNkYnMQLDA1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 67569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67569&o=json
            external_identifier: CBDB:67569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oac2D1ESLV7KFURCNSk9VG
        subject_person_id: p_e2RA3rsjdjK2A683bXARFZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1DLVhPSw3toLHw4CxSAnZ7
          claim_id: c_oac2D1ESLV7KFURCNSk9VG
          source_id: s_6GQGvR9FdLDiNkYnMQLDA1
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
        id: c_9bP9wN6H9H45gkh2J2kcKd
        subject_person_id: p_e2RA3rsjdjK2A683bXARFZ
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
        - id: cs_nZztGSmgMQ2ifbpTM7tkX8
          claim_id: c_9bP9wN6H9H45gkh2J2kcKd
          source_id: s_6GQGvR9FdLDiNkYnMQLDA1
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

# 王直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直 | accepted |
| death.date | 1559年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 67569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67569&o=json)
