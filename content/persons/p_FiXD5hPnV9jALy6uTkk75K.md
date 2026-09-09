---
schema: wang-person/v1
id: p_FiXD5hPnV9jALy6uTkk75K
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2GDhAZCvFFDQKAUrZ5c7WB
        subject_person_id: p_FiXD5hPnV9jALy6uTkk75K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e9V3Aww1F4iL1VFZC2U6HK
          claim_id: c_2GDhAZCvFFDQKAUrZ5c7WB
          source_id: s_4YztmrA2J96bW9S22mQCGg
          stance: supports
          locator: CBDB:456063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456063）
          source: &a1
            id: s_4YztmrA2J96bW9S22mQCGg
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 456063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456063&o=json
            external_identifier: CBDB:456063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GjvTKoqGEynARQYsDqKUM8
        subject_person_id: p_FiXD5hPnV9jALy6uTkk75K
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
        - id: cs_TqNbHV2fHKJzfiELMUowAF
          claim_id: c_GjvTKoqGEynARQYsDqKUM8
          source_id: s_4YztmrA2J96bW9S22mQCGg
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 456063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456063&o=json)
