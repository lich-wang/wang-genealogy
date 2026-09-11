---
schema: wang-person/v1
id: p_3uDHMQHZ6WPZEfWW5kHdmD
status: active
merged_into: null
display_name: 王峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KHMc6rFu8NR6m7F9p5YoXH
        subject_person_id: p_3uDHMQHZ6WPZEfWW5kHdmD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GJSqnVmhsyBXPpuXUzjSnG
          claim_id: c_KHMc6rFu8NR6m7F9p5YoXH
          source_id: s_j9F6PygtL9edWgoYPdnqKZ
          stance: supports
          locator: CBDB:454825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454825）
          source: &a1
            id: s_j9F6PygtL9edWgoYPdnqKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 454825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454825&o=json
            external_identifier: CBDB:454825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyGohBzKKJp3QFGT8xtRkn
        subject_person_id: p_3uDHMQHZ6WPZEfWW5kHdmD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峻，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 454825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gHks4M8ETfQvFVwO3ys0mk
          claim_id: c_GyGohBzKKJp3QFGT8xtRkn
          source_id: s_j9F6PygtL9edWgoYPdnqKZ
          stance: supports
          locator: CBDB:454825
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

# 王峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峻 | accepted |
| bio.summary | 王峻，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 454825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 454825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454825&o=json)
