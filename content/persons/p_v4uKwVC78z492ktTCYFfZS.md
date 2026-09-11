---
schema: wang-person/v1
id: p_v4uKwVC78z492ktTCYFfZS
status: active
merged_into: null
display_name: 王勲臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Vs7Ve6aJW3Ji8Uokh44pk
        subject_person_id: p_v4uKwVC78z492ktTCYFfZS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勲臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qjM5vPvfS97etrSabKhsNr
          claim_id: c_8Vs7Ve6aJW3Ji8Uokh44pk
          source_id: s_pyJ8yNP3Q6YWwG8tgE4fo2
          stance: supports
          locator: CBDB:636387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636387）
          source: &a1
            id: s_pyJ8yNP3Q6YWwG8tgE4fo2
            source_type: api_record
            title: 中国历代人物传记资料库：王勲臣（CBDB 636387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636387&o=json
            external_identifier: CBDB:636387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jvfUB4uxw6UNNpVuZb3GFP
        subject_person_id: p_v4uKwVC78z492ktTCYFfZS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勲臣，清人物。籍贯汜水，入仕鄉貢舉人，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 636387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_unZA6B0SJUuAOwU-AnlXqR
          claim_id: c_jvfUB4uxw6UNNpVuZb3GFP
          source_id: s_pyJ8yNP3Q6YWwG8tgE4fo2
          stance: supports
          locator: CBDB:636387
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

# 王勲臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勲臣 | accepted |
| bio.summary | 王勲臣，清人物。籍贯汜水，入仕鄉貢舉人，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 636387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勲臣（CBDB 636387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636387&o=json)
