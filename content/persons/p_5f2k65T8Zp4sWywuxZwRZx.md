---
schema: wang-person/v1
id: p_5f2k65T8Zp4sWywuxZwRZx
status: active
merged_into: null
display_name: 王詡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zr8zA1PSj3uG5yG6kJfH7P
        subject_person_id: p_5f2k65T8Zp4sWywuxZwRZx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u1CNsS2i7kkTZs2JEQHDYP
          claim_id: c_zr8zA1PSj3uG5yG6kJfH7P
          source_id: s_fem9DH7JoaiKE2N6NM7h1u
          stance: supports
          locator: CBDB:698435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698435）
          source: &a1
            id: s_fem9DH7JoaiKE2N6NM7h1u
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 698435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698435&o=json
            external_identifier: CBDB:698435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GpZNTC5jaLCVebwXuycaLA
        subject_person_id: p_5f2k65T8Zp4sWywuxZwRZx
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
        - id: cs_z79ZgBA13BmwgPQthB3qR6
          claim_id: c_GpZNTC5jaLCVebwXuycaLA
          source_id: s_fem9DH7JoaiKE2N6NM7h1u
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

# 王詡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詡（CBDB 698435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698435&o=json)
