---
schema: wang-person/v1
id: p_oDyYQMWWKHbk5i3EWe5MJK
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pdYmKs66exMNA9hmcK7Niu
        subject_person_id: p_oDyYQMWWKHbk5i3EWe5MJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v1EKa3znaBayyW61L5kHXS
          claim_id: c_pdYmKs66exMNA9hmcK7Niu
          source_id: s_a5cMUzi6ns9Rzoqypj3T6R
          stance: supports
          locator: CBDB:211373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211373）
          source: &a1
            id: s_a5cMUzi6ns9Rzoqypj3T6R
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 211373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211373&o=json
            external_identifier: CBDB:211373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TE6upn98KSbPRPARWJBA3w
        subject_person_id: p_oDyYQMWWKHbk5i3EWe5MJK
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
        - id: cs_LqwnHEr5GTwnp7MxSU8Fsj
          claim_id: c_TE6upn98KSbPRPARWJBA3w
          source_id: s_a5cMUzi6ns9Rzoqypj3T6R
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 211373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211373&o=json)
