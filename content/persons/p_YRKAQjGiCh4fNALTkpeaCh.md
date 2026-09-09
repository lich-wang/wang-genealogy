---
schema: wang-person/v1
id: p_YRKAQjGiCh4fNALTkpeaCh
status: active
merged_into: null
display_name: 王茂煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DTNF2XGL821dJ1M7uSqjws
        subject_person_id: p_YRKAQjGiCh4fNALTkpeaCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eb6C2BtJhruJNpzAoCKVSz
          claim_id: c_DTNF2XGL821dJ1M7uSqjws
          source_id: s_gpnA6GLqqVj6ag95Z1Z8qd
          stance: supports
          locator: CBDB:640084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640084）
          source: &a1
            id: s_gpnA6GLqqVj6ag95Z1Z8qd
            source_type: api_record
            title: 中国历代人物传记资料库：王茂煥（CBDB 640084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640084&o=json
            external_identifier: CBDB:640084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8HKQLcoqbLR7u87Grcm3hL
        subject_person_id: p_YRKAQjGiCh4fNALTkpeaCh
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
        - id: cs_FxQFwQZDcGGKB9qd9GNnic
          claim_id: c_8HKQLcoqbLR7u87Grcm3hL
          source_id: s_gpnA6GLqqVj6ag95Z1Z8qd
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

# 王茂煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂煥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂煥（CBDB 640084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640084&o=json)
