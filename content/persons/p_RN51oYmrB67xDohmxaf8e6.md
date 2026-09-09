---
schema: wang-person/v1
id: p_RN51oYmrB67xDohmxaf8e6
status: active
merged_into: null
display_name: 王大章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQ6Z3as2K2ZFt7xdoojHi4
        subject_person_id: p_RN51oYmrB67xDohmxaf8e6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dpj48M7kNKhgaBSMXzheUE
          claim_id: c_NQ6Z3as2K2ZFt7xdoojHi4
          source_id: s_ky7sTRiYDgapvw8CKdFt13
          stance: supports
          locator: CBDB:71335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71335）
          source: &a1
            id: s_ky7sTRiYDgapvw8CKdFt13
            source_type: api_record
            title: 中国历代人物传记资料库：王大章（CBDB 71335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71335&o=json
            external_identifier: CBDB:71335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8xRMydEvoUHg8F52xo6Mnc
        subject_person_id: p_RN51oYmrB67xDohmxaf8e6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1629年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rb6HJy9xN4HEQy3NQq6Cg
          claim_id: c_8xRMydEvoUHg8F52xo6Mnc
          source_id: s_ky7sTRiYDgapvw8CKdFt13
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
        id: c_HfqGN62Mf8JQHVsBvX3Jse
        subject_person_id: p_RN51oYmrB67xDohmxaf8e6
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
        - id: cs_GiP2d94PACCPCN9gS2nwka
          claim_id: c_HfqGN62Mf8JQHVsBvX3Jse
          source_id: s_ky7sTRiYDgapvw8CKdFt13
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

# 王大章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大章 | accepted |
| birth.date | 1629年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大章（CBDB 71335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71335&o=json)
