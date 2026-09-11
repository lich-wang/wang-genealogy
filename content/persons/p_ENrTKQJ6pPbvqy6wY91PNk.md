---
schema: wang-person/v1
id: p_ENrTKQJ6pPbvqy6wY91PNk
status: active
merged_into: null
display_name: 王培栽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TXX56NPFk8ZF714S39kzSv
        subject_person_id: p_ENrTKQJ6pPbvqy6wY91PNk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培栽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gQJatMLFiX4EbEgg5moH3a
          claim_id: c_TXX56NPFk8ZF714S39kzSv
          source_id: s_2GpitNF1XkYExNwxiwgJZq
          stance: supports
          locator: CBDB:636725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636725）
          source: &a1
            id: s_2GpitNF1XkYExNwxiwgJZq
            source_type: api_record
            title: 中国历代人物传记资料库：王培栽（CBDB 636725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636725&o=json
            external_identifier: CBDB:636725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_heK6jTxwUHriPzMgxkgCzw
        subject_person_id: p_ENrTKQJ6pPbvqy6wY91PNk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培栽，清人物。籍贯瓊州府，入仕廩貢生，曾任學正、訓導、復設教諭。（中国历代人物传记资料库 CBDB 636725）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mz6czKQ_D3isLYStdi_UgP
          claim_id: c_heK6jTxwUHriPzMgxkgCzw
          source_id: s_2GpitNF1XkYExNwxiwgJZq
          stance: supports
          locator: CBDB:636725
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

# 王培栽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培栽 | accepted |
| bio.summary | 王培栽，清人物。籍贯瓊州府，入仕廩貢生，曾任學正、訓導、復設教諭。（中国历代人物传记资料库 CBDB 636725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培栽（CBDB 636725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636725&o=json)
