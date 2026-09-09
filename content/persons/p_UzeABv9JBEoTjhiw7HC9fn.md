---
schema: wang-person/v1
id: p_UzeABv9JBEoTjhiw7HC9fn
status: active
merged_into: null
display_name: 王樹中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AfKy2e3aFCtfjL2CDpRcwL
        subject_person_id: p_UzeABv9JBEoTjhiw7HC9fn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37znmG5u28pPGjAQ3RXNq7
          claim_id: c_AfKy2e3aFCtfjL2CDpRcwL
          source_id: s_L9mzy1h1gSMzZMKtE819kk
          stance: supports
          locator: CBDB:71857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71857）
          source: &a1
            id: s_L9mzy1h1gSMzZMKtE819kk
            source_type: api_record
            title: 中国历代人物传记资料库：王樹中（CBDB 71857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71857&o=json
            external_identifier: CBDB:71857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uDS6R7QCQLX8AK83CB8m4z
        subject_person_id: p_UzeABv9JBEoTjhiw7HC9fn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M7C33Jf2A6VQ55kkjZuMeD
          claim_id: c_uDS6R7QCQLX8AK83CB8m4z
          source_id: s_L9mzy1h1gSMzZMKtE819kk
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
        id: c_9PnXFJwmf4eSH6srJXqE9g
        subject_person_id: p_UzeABv9JBEoTjhiw7HC9fn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1916年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q5PfCd6w6p8QxfZNxNzDRw
          claim_id: c_9PnXFJwmf4eSH6srJXqE9g
          source_id: s_L9mzy1h1gSMzZMKtE819kk
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
        id: c_cc6jpo1Xt1fQbmw375dRWS
        subject_person_id: p_UzeABv9JBEoTjhiw7HC9fn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tj9MtJ1gDNMYPT3mzU8Ls9
          claim_id: c_cc6jpo1Xt1fQbmw375dRWS
          source_id: s_L9mzy1h1gSMzZMKtE819kk
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

# 王樹中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹中 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1916年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹中（CBDB 71857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71857&o=json)
