---
schema: wang-person/v1
id: p_BkEHCkL85TZwKBcNPWTFbX
status: active
merged_into: null
display_name: 王龔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KKg9JC5qDXqN8PoZ6gxso5
        subject_person_id: p_BkEHCkL85TZwKBcNPWTFbX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zb93sEKEw3HG6Gixcfmgxo
          claim_id: c_KKg9JC5qDXqN8PoZ6gxso5
          source_id: s_PbwqfC9JeM6WK9DPE3towf
          stance: supports
          locator: CBDB:462518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462518）
          source: &a1
            id: s_PbwqfC9JeM6WK9DPE3towf
            source_type: api_record
            title: 中国历代人物传记资料库：王龔（CBDB 462518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462518&o=json
            external_identifier: CBDB:462518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ww3PaqJKEwYN6bn74gyH7k
        subject_person_id: p_BkEHCkL85TZwKBcNPWTFbX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X7vjL26QxaQp5qBtAPy16r
          claim_id: c_ww3PaqJKEwYN6bn74gyH7k
          source_id: s_PbwqfC9JeM6WK9DPE3towf
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

# 王龔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龔 | accepted |
| bio.summary | CBDB 记载为後漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龔（CBDB 462518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462518&o=json)
