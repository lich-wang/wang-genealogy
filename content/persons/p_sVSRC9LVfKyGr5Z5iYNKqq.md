---
schema: wang-person/v1
id: p_sVSRC9LVfKyGr5Z5iYNKqq
status: active
merged_into: null
display_name: 王晫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z38sZVXm13PD6tEHTPG3Z1
        subject_person_id: p_sVSRC9LVfKyGr5Z5iYNKqq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QxnFB9Sqq5FqcVSL5B4KLk
          claim_id: c_z38sZVXm13PD6tEHTPG3Z1
          source_id: s_Nu7XcCTBVnhZ5N3HAKhDKr
          stance: supports
          locator: CBDB:69366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69366）
          source: &a1
            id: s_Nu7XcCTBVnhZ5N3HAKhDKr
            source_type: api_record
            title: 中国历代人物传记资料库：王晫（CBDB 69366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69366&o=json
            external_identifier: CBDB:69366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PALY7NQUonAeNXor98J1YS
        subject_person_id: p_sVSRC9LVfKyGr5Z5iYNKqq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1636年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1tueH9orKARHHZLEDGDt91
          claim_id: c_PALY7NQUonAeNXor98J1YS
          source_id: s_Nu7XcCTBVnhZ5N3HAKhDKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BA63hndpNR5Z5PQVhPMUg2
        subject_person_id: p_sVSRC9LVfKyGr5Z5iYNKqq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cj8Kr9YWwQih5PmKNoQkE6
          claim_id: c_BA63hndpNR5Z5PQVhPMUg2
          source_id: s_Nu7XcCTBVnhZ5N3HAKhDKr
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
        id: c_pEMDqLJ8anL6r4WQqTyF2V
        subject_person_id: p_sVSRC9LVfKyGr5Z5iYNKqq
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
        - id: cs_V1YgaaR5RE9au21RMT2j5H
          claim_id: c_pEMDqLJ8anL6r4WQqTyF2V
          source_id: s_Nu7XcCTBVnhZ5N3HAKhDKr
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

# 王晫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晫 | accepted |
| birth.date | 1636年 | accepted |
| death.date | 1715年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晫（CBDB 69366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69366&o=json)
