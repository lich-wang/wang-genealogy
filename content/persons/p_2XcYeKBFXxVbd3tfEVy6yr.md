---
schema: wang-person/v1
id: p_2XcYeKBFXxVbd3tfEVy6yr
status: active
merged_into: null
display_name: 王威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNNhRB1K8FeKC24NoLnFmJ
        subject_person_id: p_2XcYeKBFXxVbd3tfEVy6yr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTgBKZfKPecC73Cgk8QxZz
          claim_id: c_yNNhRB1K8FeKC24NoLnFmJ
          source_id: s_qN5nShBWhQu7NSEDr8TPGB
          stance: supports
          locator: CBDB:509238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509238）
          source: &a1
            id: s_qN5nShBWhQu7NSEDr8TPGB
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 509238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509238&o=json
            external_identifier: CBDB:509238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C4MAsC9a5PjpCZpD6w8nf2
        subject_person_id: p_2XcYeKBFXxVbd3tfEVy6yr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，明人物。曾任儒學訓導。（中国历代人物传记资料库 CBDB 509238）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zYSrzLinldU5pJCxsS4_R3
          claim_id: c_C4MAsC9a5PjpCZpD6w8nf2
          source_id: s_qN5nShBWhQu7NSEDr8TPGB
          stance: supports
          locator: CBDB:509238
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

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | 王威，明人物。曾任儒學訓導。（中国历代人物传记资料库 CBDB 509238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 509238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509238&o=json)
