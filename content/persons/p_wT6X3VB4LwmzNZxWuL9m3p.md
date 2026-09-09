---
schema: wang-person/v1
id: p_wT6X3VB4LwmzNZxWuL9m3p
status: active
merged_into: null
display_name: 王昭瀍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hz8NxBeAEA9bYvvaCPKB4x
        subject_person_id: p_wT6X3VB4LwmzNZxWuL9m3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭瀍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QnsUPw44Wmd4kKFkyeBW6E
          claim_id: c_hz8NxBeAEA9bYvvaCPKB4x
          source_id: s_Ke58X4zFapCw6tRfUqhayR
          stance: supports
          locator: CBDB:638429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638429）
          source: &a1
            id: s_Ke58X4zFapCw6tRfUqhayR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭瀍（CBDB 638429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638429&o=json
            external_identifier: CBDB:638429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sjVTgUoy5u6Si7jtdG1yfJ
        subject_person_id: p_wT6X3VB4LwmzNZxWuL9m3p
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
        - id: cs_xAj1U1sqwmKhx6G8tc6Ja2
          claim_id: c_sjVTgUoy5u6Si7jtdG1yfJ
          source_id: s_Ke58X4zFapCw6tRfUqhayR
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

# 王昭瀍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭瀍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭瀍（CBDB 638429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638429&o=json)
