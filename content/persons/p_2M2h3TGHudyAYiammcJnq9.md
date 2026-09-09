---
schema: wang-person/v1
id: p_2M2h3TGHudyAYiammcJnq9
status: active
merged_into: null
display_name: 王嗣之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FkwMYpg8kGM88y9j2XvYXV
        subject_person_id: p_2M2h3TGHudyAYiammcJnq9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QtdmCL2gTrB4HNHsD4z8sk
          claim_id: c_FkwMYpg8kGM88y9j2XvYXV
          source_id: s_ieuQZzU6Fk8NB2Y2k5gXZn
          stance: supports
          locator: CBDB:445647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445647）
          source: &a1
            id: s_ieuQZzU6Fk8NB2Y2k5gXZn
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣之（CBDB 445647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445647&o=json
            external_identifier: CBDB:445647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AKjsiWCYm65N5SE1CapT7w
        subject_person_id: p_2M2h3TGHudyAYiammcJnq9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aJKHkNfTexq9KgYaDqwTxu
          claim_id: c_AKjsiWCYm65N5SE1CapT7w
          source_id: s_ieuQZzU6Fk8NB2Y2k5gXZn
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

# 王嗣之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣之 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣之（CBDB 445647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445647&o=json)
