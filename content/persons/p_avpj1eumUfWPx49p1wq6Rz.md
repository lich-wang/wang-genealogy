---
schema: wang-person/v1
id: p_avpj1eumUfWPx49p1wq6Rz
status: active
merged_into: null
display_name: 王朝璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HkGCdjVcoJZY9KVEby2kQD
        subject_person_id: p_avpj1eumUfWPx49p1wq6Rz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KbiP7r1QCoMtau1P6zsJog
          claim_id: c_HkGCdjVcoJZY9KVEby2kQD
          source_id: s_3GC1mHVkxPfdKB6AwJhVQP
          stance: supports
          locator: CBDB:253511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253511）
          source: &a1
            id: s_3GC1mHVkxPfdKB6AwJhVQP
            source_type: api_record
            title: 中国历代人物传记资料库：王朝璧（CBDB 253511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253511&o=json
            external_identifier: CBDB:253511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NqvB7p8oWwq5FJEfD9nZsY
        subject_person_id: p_avpj1eumUfWPx49p1wq6Rz
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
        - id: cs_KjQHwCJex6KQ4C3k7sUvVD
          claim_id: c_NqvB7p8oWwq5FJEfD9nZsY
          source_id: s_3GC1mHVkxPfdKB6AwJhVQP
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

# 王朝璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝璧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝璧（CBDB 253511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253511&o=json)
