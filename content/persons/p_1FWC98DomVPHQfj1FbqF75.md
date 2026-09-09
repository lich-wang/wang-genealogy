---
schema: wang-person/v1
id: p_1FWC98DomVPHQfj1FbqF75
status: active
merged_into: null
display_name: 王熊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2nP9rJGccBBEuWQg581Kz
        subject_person_id: p_1FWC98DomVPHQfj1FbqF75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43gpTS9RHpnM983kikMnwk
          claim_id: c_J2nP9rJGccBBEuWQg581Kz
          source_id: s_bXJJMfLB2C6TXDgLqW14dW
          stance: supports
          locator: CBDB:639322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639322）
          source: &a1
            id: s_bXJJMfLB2C6TXDgLqW14dW
            source_type: api_record
            title: 中国历代人物传记资料库：王熊（CBDB 639322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639322&o=json
            external_identifier: CBDB:639322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UjQtAYw1C7xYjN7DPms156
        subject_person_id: p_1FWC98DomVPHQfj1FbqF75
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
        - id: cs_HP9NkJDjuyeC9tyPa3di66
          claim_id: c_UjQtAYw1C7xYjN7DPms156
          source_id: s_bXJJMfLB2C6TXDgLqW14dW
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

# 王熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熊 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熊（CBDB 639322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639322&o=json)
