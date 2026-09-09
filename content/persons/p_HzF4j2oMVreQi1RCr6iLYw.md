---
schema: wang-person/v1
id: p_HzF4j2oMVreQi1RCr6iLYw
status: active
merged_into: null
display_name: 王巍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fz7y89WtfB5rECvMQU8cP4
        subject_person_id: p_HzF4j2oMVreQi1RCr6iLYw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdFzqjX8XoQ8j5fRqgqahs
          claim_id: c_Fz7y89WtfB5rECvMQU8cP4
          source_id: s_26pfzy4HW48P5aEApX77JV
          stance: supports
          locator: CBDB:460430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460430）
          source: &a1
            id: s_26pfzy4HW48P5aEApX77JV
            source_type: api_record
            title: 中国历代人物传记资料库：王巍（CBDB 460430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460430&o=json
            external_identifier: CBDB:460430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Av5s8g6NuffKpiQDy1HkH
        subject_person_id: p_HzF4j2oMVreQi1RCr6iLYw
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
        - id: cs_PBJpkAb6dALh8hUSa7HdRW
          claim_id: c_4Av5s8g6NuffKpiQDy1HkH
          source_id: s_26pfzy4HW48P5aEApX77JV
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

# 王巍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巍（CBDB 460430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460430&o=json)
