---
schema: wang-person/v1
id: p_uFxG33FENcHfFPVpULMb7R
status: active
merged_into: null
display_name: 王昉徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4kBpuW6HeMEwwz8cTfsU1K
        subject_person_id: p_uFxG33FENcHfFPVpULMb7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6SEs7tWBAvLrnEaEFvHYB
          claim_id: c_4kBpuW6HeMEwwz8cTfsU1K
          source_id: s_d6Gmuu6hh6b7kG874XhhGo
          stance: supports
          locator: CBDB:638365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638365）
          source: &a1
            id: s_d6Gmuu6hh6b7kG874XhhGo
            source_type: api_record
            title: 中国历代人物传记资料库：王昉徵（CBDB 638365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638365&o=json
            external_identifier: CBDB:638365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a28tFXWF1fj1EXfYLidB4S
        subject_person_id: p_uFxG33FENcHfFPVpULMb7R
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
        - id: cs_s576CvyVpNpQajmMc9PMvQ
          claim_id: c_a28tFXWF1fj1EXfYLidB4S
          source_id: s_d6Gmuu6hh6b7kG874XhhGo
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

# 王昉徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昉徵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昉徵（CBDB 638365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638365&o=json)
