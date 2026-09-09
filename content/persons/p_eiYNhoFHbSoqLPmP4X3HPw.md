---
schema: wang-person/v1
id: p_eiYNhoFHbSoqLPmP4X3HPw
status: active
merged_into: null
display_name: 王儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q9EiwJXs1JKoa8bBB1CwSM
        subject_person_id: p_eiYNhoFHbSoqLPmP4X3HPw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U6QiDsoit2zhpojpP7MJGj
          claim_id: c_Q9EiwJXs1JKoa8bBB1CwSM
          source_id: s_a1m9dbAawAMyuFH6eQPFjk
          stance: supports
          locator: CBDB:139670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139670）
          source: &a1
            id: s_a1m9dbAawAMyuFH6eQPFjk
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 139670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139670&o=json
            external_identifier: CBDB:139670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RGeGn2MwvBYhMiR8AuVbdD
        subject_person_id: p_eiYNhoFHbSoqLPmP4X3HPw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkVsxnM52XSACgwwcCyXca
          claim_id: c_RGeGn2MwvBYhMiR8AuVbdD
          source_id: s_a1m9dbAawAMyuFH6eQPFjk
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
        id: c_A6rrWH44WN5qXQrd2TbbEY
        subject_person_id: p_eiYNhoFHbSoqLPmP4X3HPw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 637年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fB7GV2SPRHX38aQ3wQ95Bu
          claim_id: c_A6rrWH44WN5qXQrd2TbbEY
          source_id: s_a1m9dbAawAMyuFH6eQPFjk
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
        id: c_RZwCLWqTARzBY1juC1RoCJ
        subject_person_id: p_eiYNhoFHbSoqLPmP4X3HPw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UUVTn21onXcFJCYtcvB2rd
          claim_id: c_RZwCLWqTARzBY1juC1RoCJ
          source_id: s_a1m9dbAawAMyuFH6eQPFjk
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

# 王儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儉 | accepted |
| birth.date | 599年 | accepted |
| death.date | 637年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儉（CBDB 139670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139670&o=json)
