---
schema: wang-person/v1
id: p_4cj9FHT4PbstWqZEEDi8Ty
status: active
merged_into: null
display_name: 王善至
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4RskN77KbbQsRTY3Lhp58
        subject_person_id: p_4cj9FHT4PbstWqZEEDi8Ty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善至
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6fUZsvkD6qqKncdvCyPPBF
          claim_id: c_y4RskN77KbbQsRTY3Lhp58
          source_id: s_ijvRLjJMxn7rdRPLo6mpWn
          stance: supports
          locator: CBDB:636580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636580）
          source: &a1
            id: s_ijvRLjJMxn7rdRPLo6mpWn
            source_type: api_record
            title: 中国历代人物传记资料库：王善至（CBDB 636580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636580&o=json
            external_identifier: CBDB:636580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skd5MqD4ZGHBbHThLRSfT5
        subject_person_id: p_4cj9FHT4PbstWqZEEDi8Ty
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善至，清人物。籍贯福山，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z3oFw1dU1U9AUwsw8zvfxA
          claim_id: c_skd5MqD4ZGHBbHThLRSfT5
          source_id: s_ijvRLjJMxn7rdRPLo6mpWn
          stance: supports
          locator: CBDB:636580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王善至

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善至 | accepted |
| bio.summary | 王善至，清人物。籍贯福山，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善至（CBDB 636580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636580&o=json)
