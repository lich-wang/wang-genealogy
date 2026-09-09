---
schema: wang-person/v1
id: p_tY8SuXsxJ4s4H8Sv9Axunu
status: active
merged_into: null
display_name: 王祖邰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2RrEqJuVTHgVuFMHMJHRFb
        subject_person_id: p_tY8SuXsxJ4s4H8Sv9Axunu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖邰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJQVri2TWgsvrQmhRp5YKJ
          claim_id: c_2RrEqJuVTHgVuFMHMJHRFb
          source_id: s_AjimTBL1uGaQVotd1pt5PK
          stance: supports
          locator: CBDB:639587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639587）
          source: &a1
            id: s_AjimTBL1uGaQVotd1pt5PK
            source_type: api_record
            title: 中国历代人物传记资料库：王祖邰（CBDB 639587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639587&o=json
            external_identifier: CBDB:639587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lth1qiM4uHVZ2CaAqoRQ4q
        subject_person_id: p_tY8SuXsxJ4s4H8Sv9Axunu
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
        - id: cs_9RSPPJ4ZhaR9wi16Qpch5d
          claim_id: c_Lth1qiM4uHVZ2CaAqoRQ4q
          source_id: s_AjimTBL1uGaQVotd1pt5PK
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

# 王祖邰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖邰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖邰（CBDB 639587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639587&o=json)
