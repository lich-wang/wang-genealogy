---
schema: wang-person/v1
id: p_Cnh4txyPLJW7HqXD58SfLB
status: active
merged_into: null
display_name: 王潾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tpfa8uUyDoELe9xs6MB7mR
        subject_person_id: p_Cnh4txyPLJW7HqXD58SfLB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XHnqHPLRu6oYCUaVppm7dz
          claim_id: c_Tpfa8uUyDoELe9xs6MB7mR
          source_id: s_dRA2MnhFNwDgAGFx2aso4L
          stance: supports
          locator: CBDB:211333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211333）
          source: &a1
            id: s_dRA2MnhFNwDgAGFx2aso4L
            source_type: api_record
            title: 中国历代人物传记资料库：王潾（CBDB 211333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211333&o=json
            external_identifier: CBDB:211333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ruLxhHP1ir72grHEWyT94B
        subject_person_id: p_Cnh4txyPLJW7HqXD58SfLB
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
        - id: cs_U2kaHjMobvS2jeTN9m7vNt
          claim_id: c_ruLxhHP1ir72grHEWyT94B
          source_id: s_dRA2MnhFNwDgAGFx2aso4L
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

# 王潾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潾（CBDB 211333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211333&o=json)
