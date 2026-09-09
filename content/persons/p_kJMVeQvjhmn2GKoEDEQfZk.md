---
schema: wang-person/v1
id: p_kJMVeQvjhmn2GKoEDEQfZk
status: active
merged_into: null
display_name: 王用中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_stMaYCnr3chcgKexLAK7eB
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUfmHk8xQBDkemY8iCpHHZ
          claim_id: c_stMaYCnr3chcgKexLAK7eB
          source_id: s_JQziQdaNgMNySxpXT4kVHF
          stance: supports
          locator: CBDB:204549
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204549）
          source: &a1
            id: s_JQziQdaNgMNySxpXT4kVHF
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 204549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204549&o=json
            external_identifier: CBDB:204549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NMbN63iNK9uGEj6HDAZENW
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_niivRtRgDU3343if2SE2nx
          claim_id: c_NMbN63iNK9uGEj6HDAZENW
          source_id: s_JQziQdaNgMNySxpXT4kVHF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y37jA3hAG1ACN8PczgTGwf
        subject_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
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
        - id: cs_ECHGMr4cQ9wHh82KJSEM5F
          claim_id: c_y37jA3hAG1ACN8PczgTGwf
          source_id: s_JQziQdaNgMNySxpXT4kVHF
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

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| birth.date | 1523年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 204549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204549&o=json)
