---
schema: wang-person/v1
id: p_4m4J9jwkrPgHppZ5tq8nHp
status: active
merged_into: null
display_name: 王福至
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bn9TM5EqZgCPa4dvJBC8ti
        subject_person_id: p_4m4J9jwkrPgHppZ5tq8nHp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福至
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FWEa9G5Jsfscm7GYiYRBbm
          claim_id: c_Bn9TM5EqZgCPa4dvJBC8ti
          source_id: s_9Q86ZaYQnzt9iqvz1NDKA2
          stance: supports
          locator: CBDB:639617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639617）
          source: &a1
            id: s_9Q86ZaYQnzt9iqvz1NDKA2
            source_type: api_record
            title: 中国历代人物传记资料库：王福至（CBDB 639617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639617&o=json
            external_identifier: CBDB:639617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgEgHqsFRzxoW3EnE32A6A
        subject_person_id: p_4m4J9jwkrPgHppZ5tq8nHp
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
        - id: cs_EQmakwwwzZ5XMkHhtAYoeK
          claim_id: c_EgEgHqsFRzxoW3EnE32A6A
          source_id: s_9Q86ZaYQnzt9iqvz1NDKA2
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

# 王福至

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福至 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福至（CBDB 639617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639617&o=json)
