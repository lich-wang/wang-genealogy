---
schema: wang-person/v1
id: p_JhT8MPbcy6fqyD8xKqm8c7
status: active
merged_into: null
display_name: 王奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PrpyPufnvGhD5SXX3D9Nc
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4g9ezXL4aDP5PVcaWrpLF
          claim_id: c_3PrpyPufnvGhD5SXX3D9Nc
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
          stance: supports
          locator: CBDB:200714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200714）
          source: &a1
            id: s_rr9Uzz7DZdA98zaMJkX9np
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 200714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200714&o=json
            external_identifier: CBDB:200714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_S7A1W3V3yddVqJ7G7d6ab4
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dE2PxZ3LyiFLyDMYVUb6tT
          claim_id: c_S7A1W3V3yddVqJ7G7d6ab4
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YpTzy6q4BNyiiiMUZWcy96
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
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
        - id: cs_Kk47CDtV4rNTgXa4kKsUu5
          claim_id: c_YpTzy6q4BNyiiiMUZWcy96
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
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

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 200714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200714&o=json)
