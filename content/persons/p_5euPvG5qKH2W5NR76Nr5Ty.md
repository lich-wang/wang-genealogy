---
schema: wang-person/v1
id: p_5euPvG5qKH2W5NR76Nr5Ty
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1jQCHdBdfLv2VSmERFZXsJ
        subject_person_id: p_5euPvG5qKH2W5NR76Nr5Ty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWrfkgh8mzg1wyxR688ebb
          claim_id: c_1jQCHdBdfLv2VSmERFZXsJ
          source_id: s_5EhLTnoAPGG2sAAkDe1qHL
          stance: supports
          locator: CBDB:487325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487325）
          source: &a1
            id: s_5EhLTnoAPGG2sAAkDe1qHL
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 487325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487325&o=json
            external_identifier: CBDB:487325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iQL7yDMBBz7ro2T5Y8s39
        subject_person_id: p_5euPvG5qKH2W5NR76Nr5Ty
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
        - id: cs_GNrJSgVLPV3WLmjv1CJnV8
          claim_id: c_2iQL7yDMBBz7ro2T5Y8s39
          source_id: s_5EhLTnoAPGG2sAAkDe1qHL
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 487325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487325&o=json)
