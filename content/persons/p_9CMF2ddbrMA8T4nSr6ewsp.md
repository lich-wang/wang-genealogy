---
schema: wang-person/v1
id: p_9CMF2ddbrMA8T4nSr6ewsp
status: active
merged_into: null
display_name: 王培陛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ui7rCEFyJSfjrDmcJEZ9iD
        subject_person_id: p_9CMF2ddbrMA8T4nSr6ewsp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培陛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yNtaP8YtX877ZaqNJhG8ta
          claim_id: c_Ui7rCEFyJSfjrDmcJEZ9iD
          source_id: s_jD1L4SmiBAvjPnw1BEzKzk
          stance: supports
          locator: CBDB:636732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636732）
          source: &a1
            id: s_jD1L4SmiBAvjPnw1BEzKzk
            source_type: api_record
            title: 中国历代人物传记资料库：王培陛（CBDB 636732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636732&o=json
            external_identifier: CBDB:636732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5VfP4fLNSDu9Rw5Vo5E47L
        subject_person_id: p_9CMF2ddbrMA8T4nSr6ewsp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培陛，清人物。籍贯青州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636732）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x2QyLCXfUGRZsKR78RYT5f
          claim_id: c_5VfP4fLNSDu9Rw5Vo5E47L
          source_id: s_jD1L4SmiBAvjPnw1BEzKzk
          stance: supports
          locator: CBDB:636732
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

# 王培陛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培陛 | accepted |
| bio.summary | 王培陛，清人物。籍贯青州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636732） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培陛（CBDB 636732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636732&o=json)
