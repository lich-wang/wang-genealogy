---
schema: wang-person/v1
id: p_UmR1h4Vgk56qHzQhnDQHvL
status: active
merged_into: null
display_name: 王鴻翱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uneMxqEp5t6Jc6z2LnMV4N
        subject_person_id: p_UmR1h4Vgk56qHzQhnDQHvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻翱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eghjii1UGnW9qkDUEgMuvD
          claim_id: c_uneMxqEp5t6Jc6z2LnMV4N
          source_id: s_e3NAQmdFGnyTQK4SkSfESD
          stance: supports
          locator: CBDB:640993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640993）
          source: &a1
            id: s_e3NAQmdFGnyTQK4SkSfESD
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻翱（CBDB 640993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640993&o=json
            external_identifier: CBDB:640993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fvKmZfbGtBwN4mqe4yxU8C
        subject_person_id: p_UmR1h4Vgk56qHzQhnDQHvL
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
        - id: cs_TsB6vavYeeLphoAVW8W9nB
          claim_id: c_fvKmZfbGtBwN4mqe4yxU8C
          source_id: s_e3NAQmdFGnyTQK4SkSfESD
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

# 王鴻翱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻翱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻翱（CBDB 640993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640993&o=json)
