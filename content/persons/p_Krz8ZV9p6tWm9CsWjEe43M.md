---
schema: wang-person/v1
id: p_Krz8ZV9p6tWm9CsWjEe43M
status: active
merged_into: null
display_name: 王維周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rLpWpiACT6J1YcUPUrPQc5
        subject_person_id: p_Krz8ZV9p6tWm9CsWjEe43M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h64og7XvK2vPkGLfr2mQB3
          claim_id: c_rLpWpiACT6J1YcUPUrPQc5
          source_id: s_hZ74YdmhYUpipyGb9f1pJ5
          stance: supports
          locator: CBDB:639808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639808）
          source: &a1
            id: s_hZ74YdmhYUpipyGb9f1pJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王維周（CBDB 639808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639808&o=json
            external_identifier: CBDB:639808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rB3NxzmZ936RFzLLFH8kDD
        subject_person_id: p_Krz8ZV9p6tWm9CsWjEe43M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維周，清人物。籍贯河間，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9TxSZIX6fx73HeUtF3g9b_
          claim_id: c_rB3NxzmZ936RFzLLFH8kDD
          source_id: s_hZ74YdmhYUpipyGb9f1pJ5
          stance: supports
          locator: CBDB:639808
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

# 王維周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維周 | accepted |
| bio.summary | 王維周，清人物。籍贯河間，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維周（CBDB 639808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639808&o=json)
