---
schema: wang-person/v1
id: p_knMvG4AkNwT8CXXZWf4MfG
status: active
merged_into: null
display_name: 王德新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xf4QP4zv9nE8NVW2U7ZRJ5
        subject_person_id: p_knMvG4AkNwT8CXXZWf4MfG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hwPZL7LeaZh2LqgKWzsG3G
          claim_id: c_xf4QP4zv9nE8NVW2U7ZRJ5
          source_id: s_QJaMAxyMVCBurCTs36vcH6
          stance: supports
          locator: CBDB:101425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101425）
          source: &a1
            id: s_QJaMAxyMVCBurCTs36vcH6
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 101425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101425&o=json
            external_identifier: CBDB:101425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uRV2MTsENMdL7Sc4a6nc93
        subject_person_id: p_knMvG4AkNwT8CXXZWf4MfG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新，元人物。籍贯莘縣，曾任監察御史、南臺察院監察御史、肅政廉訪司僉事。（中国历代人物传记资料库 CBDB 101425）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tMBR1jWoYCNkmVeKd0IR6z
          claim_id: c_uRV2MTsENMdL7Sc4a6nc93
          source_id: s_QJaMAxyMVCBurCTs36vcH6
          stance: supports
          locator: CBDB:101425
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

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | 王德新，元人物。籍贯莘縣，曾任監察御史、南臺察院監察御史、肅政廉訪司僉事。（中国历代人物传记资料库 CBDB 101425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 101425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101425&o=json)
