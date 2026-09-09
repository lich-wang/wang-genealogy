---
schema: wang-person/v1
id: p_t16zS98dZCP6tSDJ7PhAYw
status: active
merged_into: null
display_name: 王志能
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wH4p8mxBMQFo159phM8pt4
        subject_person_id: p_t16zS98dZCP6tSDJ7PhAYw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qEV6D152qvh2oWVFagqDAJ
          claim_id: c_wH4p8mxBMQFo159phM8pt4
          source_id: s_1N3B8H13F6KQb68jSpBYQu
          stance: supports
          locator: CBDB:253052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253052）
          source: &a1
            id: s_1N3B8H13F6KQb68jSpBYQu
            source_type: api_record
            title: 中国历代人物传记资料库：王志能（CBDB 253052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253052&o=json
            external_identifier: CBDB:253052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4MqHRxZpH7DmBBbwwfjby8
        subject_person_id: p_t16zS98dZCP6tSDJ7PhAYw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQigoHnfrCQ2LVBZ1HSKtJ
          claim_id: c_4MqHRxZpH7DmBBbwwfjby8
          source_id: s_1N3B8H13F6KQb68jSpBYQu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王志能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志能 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志能（CBDB 253052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253052&o=json)
