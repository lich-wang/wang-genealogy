---
schema: wang-person/v1
id: p_ohzck1yDUx7vmHVyP4xduF
status: active
merged_into: null
display_name: 王懋昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zgV2p7h74fkdz4kXLM8wxm
        subject_person_id: p_ohzck1yDUx7vmHVyP4xduF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6XrGSVzeQGW5KQ7e9XYUc7
          claim_id: c_zgV2p7h74fkdz4kXLM8wxm
          source_id: s_6XFE3BS11Z1vZ3fhN2oLKf
          stance: supports
          locator: CBDB:466705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466705）
          source: &a1
            id: s_6XFE3BS11Z1vZ3fhN2oLKf
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 466705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466705&o=json
            external_identifier: CBDB:466705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hsJ5TTpA8dzmgUNuiiZgSR
        subject_person_id: p_ohzck1yDUx7vmHVyP4xduF
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
        - id: cs_hXKGBreoDzX8q5TPNpf83y
          claim_id: c_hsJ5TTpA8dzmgUNuiiZgSR
          source_id: s_6XFE3BS11Z1vZ3fhN2oLKf
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

# 王懋昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋昭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋昭（CBDB 466705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466705&o=json)
