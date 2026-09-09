---
schema: wang-person/v1
id: p_aEBwdNM6i8aPJGSNTCSH89
status: active
merged_into: null
display_name: 王重陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tmUwVP4SnFHkqvbBJ828D9
        subject_person_id: p_aEBwdNM6i8aPJGSNTCSH89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_239CjgvtMVbmZtVq2CeARd
          claim_id: c_tmUwVP4SnFHkqvbBJ828D9
          source_id: s_PWgian1BXp8p6vfhc3jX6T
          stance: supports
          locator: CBDB:572482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572482）
          source: &a1
            id: s_PWgian1BXp8p6vfhc3jX6T
            source_type: api_record
            title: 中国历代人物传记资料库：王重陽（CBDB 572482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572482&o=json
            external_identifier: CBDB:572482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6ZcVodc6bJTwdHEeXofoQB
        subject_person_id: p_aEBwdNM6i8aPJGSNTCSH89
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1113年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssWvWkEVnkN9L5e89daES7
          claim_id: c_6ZcVodc6bJTwdHEeXofoQB
          source_id: s_PWgian1BXp8p6vfhc3jX6T
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
        id: c_EUAtPT2RBG2hJdbtREfxeB
        subject_person_id: p_aEBwdNM6i8aPJGSNTCSH89
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1170年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K5BVnpESxXsw58J4aG6i7D
          claim_id: c_EUAtPT2RBG2hJdbtREfxeB
          source_id: s_PWgian1BXp8p6vfhc3jX6T
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
        id: c_wF69QpFX49CWN4fXZcJnar
        subject_person_id: p_aEBwdNM6i8aPJGSNTCSH89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jG4YLyaqyVLnKcK7D449Hs
          claim_id: c_wF69QpFX49CWN4fXZcJnar
          source_id: s_PWgian1BXp8p6vfhc3jX6T
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

# 王重陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重陽 | accepted |
| birth.date | 1113年 | accepted |
| death.date | 1170年 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重陽（CBDB 572482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572482&o=json)
