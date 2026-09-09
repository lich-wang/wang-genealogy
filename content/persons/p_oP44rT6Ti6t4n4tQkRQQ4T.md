---
schema: wang-person/v1
id: p_oP44rT6Ti6t4n4tQkRQQ4T
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mcqzXK316RPZFVHYGSk2fZ
        subject_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ozFSd3zuYuJ1xX3MUGmwG5
          claim_id: c_mcqzXK316RPZFVHYGSk2fZ
          source_id: s_CF1HUULxNHT6dKTD7MUTSy
          stance: supports
          locator: CBDB:327535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327535）
          source: &a1
            id: s_CF1HUULxNHT6dKTD7MUTSy
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 327535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json
            external_identifier: CBDB:327535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARD7pVnGSL5bsJZGCxPhou
        subject_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
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
        - id: cs_2AbyJ2TGFh64ZV5G491xFh
          claim_id: c_ARD7pVnGSL5bsJZGCxPhou
          source_id: s_CF1HUULxNHT6dKTD7MUTSy
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

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 327535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json)
