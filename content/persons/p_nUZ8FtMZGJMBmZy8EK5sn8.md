---
schema: wang-person/v1
id: p_nUZ8FtMZGJMBmZy8EK5sn8
status: active
merged_into: null
display_name: 王維德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MYKUxsHDkyqafXy4TB4YM
        subject_person_id: p_nUZ8FtMZGJMBmZy8EK5sn8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D5uqX2HBMsuhZvRKHVbhQJ
          claim_id: c_2MYKUxsHDkyqafXy4TB4YM
          source_id: s_1GGPvcSRQiRDk1d7dmx9Hv
          stance: supports
          locator: CBDB:342140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342140）
          source: &a1
            id: s_1GGPvcSRQiRDk1d7dmx9Hv
            source_type: api_record
            title: 中国历代人物传记资料库：王維德（CBDB 342140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342140&o=json
            external_identifier: CBDB:342140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aSJxEuV2CrqUFBEVB7LYEA
        subject_person_id: p_nUZ8FtMZGJMBmZy8EK5sn8
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
        - id: cs_HUgr7x3mxWje2CNmpVEafB
          claim_id: c_aSJxEuV2CrqUFBEVB7LYEA
          source_id: s_1GGPvcSRQiRDk1d7dmx9Hv
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

# 王維德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維德 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維德（CBDB 342140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342140&o=json)
