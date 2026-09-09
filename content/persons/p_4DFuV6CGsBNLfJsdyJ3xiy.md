---
schema: wang-person/v1
id: p_4DFuV6CGsBNLfJsdyJ3xiy
status: active
merged_into: null
display_name: 王廷簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAwEwBCE66sC8gtKKhJmNM
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cBMDWyMeP6vFEe2tSwHFD9
          claim_id: c_rAwEwBCE66sC8gtKKhJmNM
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
          stance: supports
          locator: CBDB:205141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205141）
          source: &a1
            id: s_ARQKtERHmNGY6Hxj2bzaXN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷簡（CBDB 205141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json
            external_identifier: CBDB:205141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B5n71jhn4JvGL9SybDSdt6
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PeXZxo27F7HMgFW4jSYj4j
          claim_id: c_B5n71jhn4JvGL9SybDSdt6
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
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
        id: c_xeGd1Sur2FeBFPRYBmcnof
        subject_person_id: p_4DFuV6CGsBNLfJsdyJ3xiy
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
        - id: cs_znsmrtw245Eu6x7F3UE14j
          claim_id: c_xeGd1Sur2FeBFPRYBmcnof
          source_id: s_ARQKtERHmNGY6Hxj2bzaXN
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

# 王廷簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷簡 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷簡（CBDB 205141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205141&o=json)
