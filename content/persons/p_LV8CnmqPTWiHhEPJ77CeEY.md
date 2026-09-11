---
schema: wang-person/v1
id: p_LV8CnmqPTWiHhEPJ77CeEY
status: active
merged_into: null
display_name: 王愚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tx3wDB5UQ8UrEp92V1b7Lo
        subject_person_id: p_LV8CnmqPTWiHhEPJ77CeEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zune7oL5rGAH3qd31UsPXK
          claim_id: c_Tx3wDB5UQ8UrEp92V1b7Lo
          source_id: s_1Am5QxdZ9hXFsr8MiLQZ9c
          stance: supports
          locator: CBDB:496201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496201）
          source: &a1
            id: s_1Am5QxdZ9hXFsr8MiLQZ9c
            source_type: api_record
            title: 中国历代人物传记资料库：王愚（CBDB 496201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496201&o=json
            external_identifier: CBDB:496201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i4Jwdh8V9f9kYRZNUhfRdK
        subject_person_id: p_LV8CnmqPTWiHhEPJ77CeEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚，明人物。曾任學正。（中国历代人物传记资料库 CBDB 496201）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TUAU6nSpcJC9CK1mYcpESQ
          claim_id: c_i4Jwdh8V9f9kYRZNUhfRdK
          source_id: s_1Am5QxdZ9hXFsr8MiLQZ9c
          stance: supports
          locator: CBDB:496201
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

# 王愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愚 | accepted |
| bio.summary | 王愚，明人物。曾任學正。（中国历代人物传记资料库 CBDB 496201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愚（CBDB 496201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496201&o=json)
