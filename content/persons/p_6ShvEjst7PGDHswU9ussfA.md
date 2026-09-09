---
schema: wang-person/v1
id: p_6ShvEjst7PGDHswU9ussfA
status: active
merged_into: null
display_name: 王贊鋆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iE914JBEeBBgw5Nohhv6sZ
        subject_person_id: p_6ShvEjst7PGDHswU9ussfA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊鋆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TefBCzVHRJrt7tg4d7RR5R
          claim_id: c_iE914JBEeBBgw5Nohhv6sZ
          source_id: s_oehVfasmHmq3tCTsBG83fm
          stance: supports
          locator: CBDB:640349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640349）
          source: &a1
            id: s_oehVfasmHmq3tCTsBG83fm
            source_type: api_record
            title: 中国历代人物传记资料库：王贊鋆（CBDB 640349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640349&o=json
            external_identifier: CBDB:640349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXP3PpiZrfEZSQN5sb71pC
        subject_person_id: p_6ShvEjst7PGDHswU9ussfA
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
        - id: cs_eyR8JAfpRxUB1ENvFG8jFf
          claim_id: c_JXP3PpiZrfEZSQN5sb71pC
          source_id: s_oehVfasmHmq3tCTsBG83fm
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

# 王贊鋆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊鋆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊鋆（CBDB 640349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640349&o=json)
