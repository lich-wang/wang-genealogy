---
schema: wang-person/v1
id: p_tKum2F5FoXGD328RaJE1uy
status: active
merged_into: null
display_name: 王懋功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94vW4wc1E7f6LPYfReQu2X
        subject_person_id: p_tKum2F5FoXGD328RaJE1uy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CGHhTNfmgQHGbhrfah8D4F
          claim_id: c_94vW4wc1E7f6LPYfReQu2X
          source_id: s_gfc9ccGUB7cZNPzokAKQHG
          stance: supports
          locator: CBDB:337973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337973）
          source: &a1
            id: s_gfc9ccGUB7cZNPzokAKQHG
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 337973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json
            external_identifier: CBDB:337973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dk8LqsV9mY1nUJHNqCDxLK
        subject_person_id: p_tKum2F5FoXGD328RaJE1uy
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
        - id: cs_opyFg1KsLpdY1n6Gmp8T81
          claim_id: c_dk8LqsV9mY1nUJHNqCDxLK
          source_id: s_gfc9ccGUB7cZNPzokAKQHG
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

# 王懋功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋功 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋功（CBDB 337973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337973&o=json)
