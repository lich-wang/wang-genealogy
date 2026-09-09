---
schema: wang-person/v1
id: p_wbBYJ7baz9yUTW4LwP1Fnf
status: active
merged_into: null
display_name: 王蔭豐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CbgiaKE55VqZ9hpFqbDtL9
        subject_person_id: p_wbBYJ7baz9yUTW4LwP1Fnf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭豐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uSPjwnm6CwHoFoTZb5Z4Ag
          claim_id: c_CbgiaKE55VqZ9hpFqbDtL9
          source_id: s_qSHGFZb6o7se6MWCF2F5zU
          stance: supports
          locator: CBDB:71847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71847）
          source: &a1
            id: s_qSHGFZb6o7se6MWCF2F5zU
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭豐（CBDB 71847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71847&o=json
            external_identifier: CBDB:71847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9H32iXdAfeJ6GKYYVtHqEd
        subject_person_id: p_wbBYJ7baz9yUTW4LwP1Fnf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tx1Rvzq5dExy4NLPgKCK2C
          claim_id: c_9H32iXdAfeJ6GKYYVtHqEd
          source_id: s_qSHGFZb6o7se6MWCF2F5zU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_R3xthc6ySq2D75DgQ9iae8
        subject_person_id: p_wbBYJ7baz9yUTW4LwP1Fnf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1867年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zE7oku51ApgLMAUCcXHbmQ
          claim_id: c_R3xthc6ySq2D75DgQ9iae8
          source_id: s_qSHGFZb6o7se6MWCF2F5zU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xEDEH7L7Tk4P7V4Q2V5Vk1
        subject_person_id: p_wbBYJ7baz9yUTW4LwP1Fnf
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
        - id: cs_nD2SU9YDMLmEJL2q6GGJzk
          claim_id: c_xEDEH7L7Tk4P7V4Q2V5Vk1
          source_id: s_qSHGFZb6o7se6MWCF2F5zU
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

# 王蔭豐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭豐 | accepted |
| birth.date | 1825年 | accepted |
| death.date | 1867年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭豐（CBDB 71847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71847&o=json)
