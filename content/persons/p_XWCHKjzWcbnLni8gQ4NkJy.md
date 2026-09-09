---
schema: wang-person/v1
id: p_XWCHKjzWcbnLni8gQ4NkJy
status: active
merged_into: null
display_name: 王覲瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JK7s8Ehj8eCQCEqcotaVzK
        subject_person_id: p_XWCHKjzWcbnLni8gQ4NkJy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覲瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQ258zvJ1N8xMjPThii3v9
          claim_id: c_JK7s8Ehj8eCQCEqcotaVzK
          source_id: s_3Xu78XaCPAqF1svc27BMC5
          stance: supports
          locator: CBDB:640238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640238）
          source: &a1
            id: s_3Xu78XaCPAqF1svc27BMC5
            source_type: api_record
            title: 中国历代人物传记资料库：王覲瑞（CBDB 640238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640238&o=json
            external_identifier: CBDB:640238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gUP8rhpr5mkf1dVFgsZHaD
        subject_person_id: p_XWCHKjzWcbnLni8gQ4NkJy
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
        - id: cs_uuC9J5aM2QQZK4EFHTJnBp
          claim_id: c_gUP8rhpr5mkf1dVFgsZHaD
          source_id: s_3Xu78XaCPAqF1svc27BMC5
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

# 王覲瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覲瑞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王覲瑞（CBDB 640238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640238&o=json)
