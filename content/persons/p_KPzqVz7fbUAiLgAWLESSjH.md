---
schema: wang-person/v1
id: p_KPzqVz7fbUAiLgAWLESSjH
status: active
merged_into: null
display_name: 王培之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QiYSws8wcLXWjY99MePnxH
        subject_person_id: p_KPzqVz7fbUAiLgAWLESSjH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KHu4MS8m7oZBPJY1YunioG
          claim_id: c_QiYSws8wcLXWjY99MePnxH
          source_id: s_NXqFPNMVF8VJFUoW4TkBQn
          stance: supports
          locator: CBDB:636711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636711）
          source: &a1
            id: s_NXqFPNMVF8VJFUoW4TkBQn
            source_type: api_record
            title: 中国历代人物传记资料库：王培之（CBDB 636711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636711&o=json
            external_identifier: CBDB:636711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6m87zt6B5eZcrWgHsr8DpW
        subject_person_id: p_KPzqVz7fbUAiLgAWLESSjH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培之，清人物。籍贯保定，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DhqgUnyRLuMIbcWdl4edlL
          claim_id: c_6m87zt6B5eZcrWgHsr8DpW
          source_id: s_NXqFPNMVF8VJFUoW4TkBQn
          stance: supports
          locator: CBDB:636711
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

# 王培之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培之 | accepted |
| bio.summary | 王培之，清人物。籍贯保定，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培之（CBDB 636711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636711&o=json)
