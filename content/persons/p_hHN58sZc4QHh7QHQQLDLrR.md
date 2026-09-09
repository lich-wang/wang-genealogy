---
schema: wang-person/v1
id: p_hHN58sZc4QHh7QHQQLDLrR
status: active
merged_into: null
display_name: 王萬清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RwAVFRrj5w4wiw9c35chmj
        subject_person_id: p_hHN58sZc4QHh7QHQQLDLrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGF1WAz6fHKY48ScLbSoQg
          claim_id: c_RwAVFRrj5w4wiw9c35chmj
          source_id: s_7TAAD6jHL1tycoawD5x6L3
          stance: supports
          locator: CBDB:69367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69367）
          source: &a1
            id: s_7TAAD6jHL1tycoawD5x6L3
            source_type: api_record
            title: 中国历代人物传记资料库：王萬清（CBDB 69367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69367&o=json
            external_identifier: CBDB:69367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GKb1FXS2yrTgMtv2FsQvEk
        subject_person_id: p_hHN58sZc4QHh7QHQQLDLrR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBy5MnDpVU8KL4HHae5MZG
          claim_id: c_GKb1FXS2yrTgMtv2FsQvEk
          source_id: s_7TAAD6jHL1tycoawD5x6L3
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
        id: c_jzb9LXZnQAYuBzBWYezwk1
        subject_person_id: p_hHN58sZc4QHh7QHQQLDLrR
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
        - id: cs_qQ5csWLP6wugQaFa259yUQ
          claim_id: c_jzb9LXZnQAYuBzBWYezwk1
          source_id: s_7TAAD6jHL1tycoawD5x6L3
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

# 王萬清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬清 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬清（CBDB 69367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69367&o=json)
