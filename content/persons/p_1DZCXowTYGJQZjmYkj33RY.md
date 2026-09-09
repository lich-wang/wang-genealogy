---
schema: wang-person/v1
id: p_1DZCXowTYGJQZjmYkj33RY
status: active
merged_into: null
display_name: 王炳燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zyk6pfDQzMAfN4CnJAmSbx
        subject_person_id: p_1DZCXowTYGJQZjmYkj33RY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U9qVpHu8GMU4T9Ebxv7C3L
          claim_id: c_zyk6pfDQzMAfN4CnJAmSbx
          source_id: s_Bnc12c1A5B8QZJBhH85upd
          stance: supports
          locator: CBDB:71914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71914）
          source: &a1
            id: s_Bnc12c1A5B8QZJBhH85upd
            source_type: api_record
            title: 中国历代人物传记资料库：王炳燮（CBDB 71914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71914&o=json
            external_identifier: CBDB:71914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iXcdS7ELeNbZCZzxBoBsJa
        subject_person_id: p_1DZCXowTYGJQZjmYkj33RY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1821年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B6r4B1Ce2ac55FfVjSxQDq
          claim_id: c_iXcdS7ELeNbZCZzxBoBsJa
          source_id: s_Bnc12c1A5B8QZJBhH85upd
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
        id: c_knkKiAEDqn8oWxXxCATocK
        subject_person_id: p_1DZCXowTYGJQZjmYkj33RY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1879年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xoeEuQFNzF31vw5M6kns3j
          claim_id: c_knkKiAEDqn8oWxXxCATocK
          source_id: s_Bnc12c1A5B8QZJBhH85upd
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
        id: c_pvgVYLf26Mo3iKrNS6LJGy
        subject_person_id: p_1DZCXowTYGJQZjmYkj33RY
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
        - id: cs_8HR7MN6yCRCBA8zhZFV2MR
          claim_id: c_pvgVYLf26Mo3iKrNS6LJGy
          source_id: s_Bnc12c1A5B8QZJBhH85upd
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

# 王炳燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳燮 | accepted |
| birth.date | 1821年 | accepted |
| death.date | 1879年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳燮（CBDB 71914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71914&o=json)
