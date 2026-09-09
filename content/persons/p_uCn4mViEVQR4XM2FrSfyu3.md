---
schema: wang-person/v1
id: p_uCn4mViEVQR4XM2FrSfyu3
status: active
merged_into: null
display_name: 王道明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_owqZr2AA7hxk8Eo7QrvPnR
        subject_person_id: p_uCn4mViEVQR4XM2FrSfyu3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Badz8FG7aGHXb79iMsnCjk
          claim_id: c_owqZr2AA7hxk8Eo7QrvPnR
          source_id: s_mwBFHpRt7GYE8XF9gRXKhX
          stance: supports
          locator: CBDB:494768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494768）
          source: &a1
            id: s_mwBFHpRt7GYE8XF9gRXKhX
            source_type: api_record
            title: 中国历代人物传记资料库：王道明（CBDB 494768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494768&o=json
            external_identifier: CBDB:494768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UV47ngLGXLRwQZXVnW9KHz
        subject_person_id: p_uCn4mViEVQR4XM2FrSfyu3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aeTFc5gkF7P8NCiWLMG72L
          claim_id: c_UV47ngLGXLRwQZXVnW9KHz
          source_id: s_mwBFHpRt7GYE8XF9gRXKhX
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

# 王道明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道明 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道明（CBDB 494768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494768&o=json)
