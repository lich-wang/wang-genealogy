---
schema: wang-person/v1
id: p_QwXkM5LVPvoysbupoEebKc
status: active
merged_into: null
display_name: 王霽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBbof9Ex3VLEi7p3TTnM4S
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkTehpy4v9eULiYxejHp4K
          claim_id: c_SBbof9Ex3VLEi7p3TTnM4S
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
          stance: supports
          locator: CBDB:14304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14304）
          source: &a1
            id: s_QciCQGJKAWuNbLNMkU9Lus
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 14304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14304&o=json
            external_identifier: CBDB:14304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4Ayb8Le7hcdJ6WzX8zcVKj
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HnoqfNQZrXyxnbiEjEXoZy
          claim_id: c_4Ayb8Le7hcdJ6WzX8zcVKj
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
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
        id: c_rR63fiR8L1UE7NH1U6BLai
        subject_person_id: p_QwXkM5LVPvoysbupoEebKc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXD5mDhd9k5gYY7G1RiCJa
          claim_id: c_rR63fiR8L1UE7NH1U6BLai
          source_id: s_QciCQGJKAWuNbLNMkU9Lus
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

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 14304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14304&o=json)
