---
schema: wang-person/v1
id: p_LGU7qTeaE4GkkKKWQYQ36v
status: active
merged_into: null
display_name: 王修巳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVz5brA2655Cwv52n5L65G
        subject_person_id: p_LGU7qTeaE4GkkKKWQYQ36v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修巳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Qxg7v1RY84dQSEjvGXVPT
          claim_id: c_bVz5brA2655Cwv52n5L65G
          source_id: s_3T843AzgpiXDXqcR3rPwnQ
          stance: supports
          locator: CBDB:636074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636074）
          source: &a1
            id: s_3T843AzgpiXDXqcR3rPwnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王修巳（CBDB 636074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636074&o=json
            external_identifier: CBDB:636074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqSXFGnMw1Krwc9bWVW9Mc
        subject_person_id: p_LGU7qTeaE4GkkKKWQYQ36v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王修巳，清人物。籍贯順德，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636074）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3NuqXxEoojhWsgY7BA1ZEs
          claim_id: c_KqSXFGnMw1Krwc9bWVW9Mc
          source_id: s_3T843AzgpiXDXqcR3rPwnQ
          stance: supports
          locator: CBDB:636074
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

# 王修巳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修巳 | accepted |
| bio.summary | 王修巳，清人物。籍贯順德，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修巳（CBDB 636074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636074&o=json)
