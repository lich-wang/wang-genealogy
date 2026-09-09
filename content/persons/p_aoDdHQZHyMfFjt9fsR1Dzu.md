---
schema: wang-person/v1
id: p_aoDdHQZHyMfFjt9fsR1Dzu
status: active
merged_into: null
display_name: 王廷柏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uEBbW5oxxEh71dZMF6fY3E
        subject_person_id: p_aoDdHQZHyMfFjt9fsR1Dzu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷柏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XEHi4u9w31FeyX7DH8Kqyg
          claim_id: c_uEBbW5oxxEh71dZMF6fY3E
          source_id: s_NPNQx415mh1349s594Pvf8
          stance: supports
          locator: CBDB:476366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476366）
          source: &a1
            id: s_NPNQx415mh1349s594Pvf8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷柏（CBDB 476366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476366&o=json
            external_identifier: CBDB:476366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e29EJB8VD67Gg7MdsYJb1L
        subject_person_id: p_aoDdHQZHyMfFjt9fsR1Dzu
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
        - id: cs_C463dmoVw6ZtAg3rhMvG58
          claim_id: c_e29EJB8VD67Gg7MdsYJb1L
          source_id: s_NPNQx415mh1349s594Pvf8
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

# 王廷柏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷柏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷柏（CBDB 476366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476366&o=json)
