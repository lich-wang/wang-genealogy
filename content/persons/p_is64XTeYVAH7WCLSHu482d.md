---
schema: wang-person/v1
id: p_is64XTeYVAH7WCLSHu482d
status: active
merged_into: null
display_name: 王子紱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jLPGzUUhbkYCt4tHGA2n5v
        subject_person_id: p_is64XTeYVAH7WCLSHu482d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AL18LpwFvRuUh9L7ShWtTH
          claim_id: c_jLPGzUUhbkYCt4tHGA2n5v
          source_id: s_7eHQRwTu7qH9BgDvxSXhEm
          stance: supports
          locator: CBDB:71362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71362）
          source: &a1
            id: s_7eHQRwTu7qH9BgDvxSXhEm
            source_type: api_record
            title: 中国历代人物传记资料库：王子紱（CBDB 71362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71362&o=json
            external_identifier: CBDB:71362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y3suXK5jsKuu1Qt453F97A
        subject_person_id: p_is64XTeYVAH7WCLSHu482d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1761年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11i64dCvEXjzAYoxRNZ4DS
          claim_id: c_y3suXK5jsKuu1Qt453F97A
          source_id: s_7eHQRwTu7qH9BgDvxSXhEm
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
        id: c_J6xLtiGKxmEKBc1ABNE9TF
        subject_person_id: p_is64XTeYVAH7WCLSHu482d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FMG2yP2GkHW87PDEY2Umak
          claim_id: c_J6xLtiGKxmEKBc1ABNE9TF
          source_id: s_7eHQRwTu7qH9BgDvxSXhEm
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
        id: c_yqeiMg4zQHqLXDuLdZjJWX
        subject_person_id: p_is64XTeYVAH7WCLSHu482d
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
        - id: cs_iMAQvhu3dN1SmnLQ3ZCjLN
          claim_id: c_yqeiMg4zQHqLXDuLdZjJWX
          source_id: s_7eHQRwTu7qH9BgDvxSXhEm
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

# 王子紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子紱 | accepted |
| birth.date | 1761年 | accepted |
| death.date | 1811年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子紱（CBDB 71362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71362&o=json)
