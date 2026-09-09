---
schema: wang-person/v1
id: p_2KUs86XbqsTgrTpnLrc7qT
status: active
merged_into: null
display_name: 王晉介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gmXYHoHMHUL2X9dqJ2KDLN
        subject_person_id: p_2KUs86XbqsTgrTpnLrc7qT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MDQFG5anNyhbN6tert6EFC
          claim_id: c_gmXYHoHMHUL2X9dqJ2KDLN
          source_id: s_tbvSTLzGGDy1njbNF9jivq
          stance: supports
          locator: CBDB:638447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638447）
          source: &a1
            id: s_tbvSTLzGGDy1njbNF9jivq
            source_type: api_record
            title: 中国历代人物传记资料库：王晉介（CBDB 638447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638447&o=json
            external_identifier: CBDB:638447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83MKi2djzxGnFZyH7qRgCr
        subject_person_id: p_2KUs86XbqsTgrTpnLrc7qT
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
        - id: cs_qTy59KVPvoJrwZ5YuoxP55
          claim_id: c_83MKi2djzxGnFZyH7qRgCr
          source_id: s_tbvSTLzGGDy1njbNF9jivq
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

# 王晉介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉介 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉介（CBDB 638447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638447&o=json)
