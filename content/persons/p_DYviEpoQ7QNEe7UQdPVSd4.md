---
schema: wang-person/v1
id: p_DYviEpoQ7QNEe7UQdPVSd4
status: active
merged_into: null
display_name: 王以纁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKj974iq1pjJMHhqUMgMb7
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以纁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uac9f4pJopPKx3C95uQJaQ
          claim_id: c_oKj974iq1pjJMHhqUMgMb7
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: CBDB:205075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205075）
          source: &a1
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7TxWkJ3LA9NQgyDbA1eD2n
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCC2YEoVAFk3dagjmLNETq
          claim_id: c_7TxWkJ3LA9NQgyDbA1eD2n
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
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
        id: c_JXVj1nhiEE3kV41iwCvGsS
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
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
        - id: cs_juzrHS3THhDqFp35tQ35iw
          claim_id: c_JXVj1nhiEE3kV41iwCvGsS
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
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

# 王以纁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以纁 | accepted |
| birth.date | 1536年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
