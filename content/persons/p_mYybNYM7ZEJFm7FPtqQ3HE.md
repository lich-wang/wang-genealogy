---
schema: wang-person/v1
id: p_mYybNYM7ZEJFm7FPtqQ3HE
status: active
merged_into: null
display_name: 王成瓛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vz97mEdZdrfMSwe3MoDMc
        subject_person_id: p_mYybNYM7ZEJFm7FPtqQ3HE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7Ue497h4Gj5NgJNHFEWfv
          claim_id: c_5vz97mEdZdrfMSwe3MoDMc
          source_id: s_4YfvYXwEixjm8e84SMwhwp
          stance: supports
          locator: CBDB:695189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695189）
          source: &a1
            id: s_4YfvYXwEixjm8e84SMwhwp
            source_type: api_record
            title: 中国历代人物传记资料库：王成瓛（CBDB 695189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695189&o=json
            external_identifier: CBDB:695189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_joJsh4bBQeYM242uq4MB3Q
        subject_person_id: p_mYybNYM7ZEJFm7FPtqQ3HE
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
        - id: cs_EXP66FrBv1XmoEtNWnqA5f
          claim_id: c_joJsh4bBQeYM242uq4MB3Q
          source_id: s_4YfvYXwEixjm8e84SMwhwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_39ADRlvVE34s2kmCYAZtGI
        subject_person_id: p_mYybNYM7ZEJFm7FPtqQ3HE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rH4e7gKHLt6j7uEex6ct5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrd3K1y3KP_8Rtiv0239pL
          claim_id: c_39ADRlvVE34s2kmCYAZtGI
          source_id: s_4YfvYXwEixjm8e84SMwhwp
          stance: supports
          locator: 鄞縣志，lgid=243568：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rH4e7gKHLt6j7uEex6ct5d
        status: active
        display_name: 王宏詩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成瓛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rH4e7gKHLt6j7uEex6ct5d | 王宏詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成瓛（CBDB 695189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695189&o=json)
