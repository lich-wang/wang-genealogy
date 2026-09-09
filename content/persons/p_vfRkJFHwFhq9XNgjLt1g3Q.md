---
schema: wang-person/v1
id: p_vfRkJFHwFhq9XNgjLt1g3Q
status: active
merged_into: null
display_name: 王碩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f72tPNfq7REm6CZMFPiJ7B
        subject_person_id: p_vfRkJFHwFhq9XNgjLt1g3Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cRe5cveKcW1NRApjHsgvDe
          claim_id: c_f72tPNfq7REm6CZMFPiJ7B
          source_id: s_EQnXSLBmM14Z8F8y6GaRiP
          stance: supports
          locator: CBDB:445452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445452）
          source: &a1
            id: s_EQnXSLBmM14Z8F8y6GaRiP
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 445452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445452&o=json
            external_identifier: CBDB:445452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vjyWoBjNRzLe9EGYkXaY62
        subject_person_id: p_vfRkJFHwFhq9XNgjLt1g3Q
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
        - id: cs_KkSA9Ydy9p2eohxWcAPqXv
          claim_id: c_vjyWoBjNRzLe9EGYkXaY62
          source_id: s_EQnXSLBmM14Z8F8y6GaRiP
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

# 王碩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王碩（CBDB 445452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445452&o=json)
