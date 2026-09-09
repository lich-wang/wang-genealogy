---
schema: wang-person/v1
id: p_bRCU5eCoQJiZ7iZEbSEuPi
status: active
merged_into: null
display_name: 王好
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77TcA3s26WFrVzPF4tkKNH
        subject_person_id: p_bRCU5eCoQJiZ7iZEbSEuPi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hw8DDZ7mNqQmSFLT8Kr2ro
          claim_id: c_77TcA3s26WFrVzPF4tkKNH
          source_id: s_jKD7EajSC4ixNmHBF6fyQF
          stance: supports
          locator: CBDB:555506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555506）
          source: &a1
            id: s_jKD7EajSC4ixNmHBF6fyQF
            source_type: api_record
            title: 中国历代人物传记资料库：王好（CBDB 555506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555506&o=json
            external_identifier: CBDB:555506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UBBUgyZKnehAuV9dWD4UE1
        subject_person_id: p_bRCU5eCoQJiZ7iZEbSEuPi
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
        - id: cs_dLKK4xkAo3TMu17NV48HbA
          claim_id: c_UBBUgyZKnehAuV9dWD4UE1
          source_id: s_jKD7EajSC4ixNmHBF6fyQF
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

# 王好

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王好（CBDB 555506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555506&o=json)
