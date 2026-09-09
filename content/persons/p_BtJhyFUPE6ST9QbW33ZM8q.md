---
schema: wang-person/v1
id: p_BtJhyFUPE6ST9QbW33ZM8q
status: active
merged_into: null
display_name: 王之佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKm76vJN7MDgA79fq4RTW9
        subject_person_id: p_BtJhyFUPE6ST9QbW33ZM8q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vsqZzdNeK4rx2zjTmZawfo
          claim_id: c_XKm76vJN7MDgA79fq4RTW9
          source_id: s_VwfwBzDgRmNQp7Me13jyNp
          stance: supports
          locator: CBDB:561757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561757）
          source: &a1
            id: s_VwfwBzDgRmNQp7Me13jyNp
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 561757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561757&o=json
            external_identifier: CBDB:561757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kRNFCDKDekERoDGXyKk5by
        subject_person_id: p_BtJhyFUPE6ST9QbW33ZM8q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LoFrPoX9JDQckWTUk9k3Pg
          claim_id: c_kRNFCDKDekERoDGXyKk5by
          source_id: s_VwfwBzDgRmNQp7Me13jyNp
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
        id: c_kcsBW45MozRWVKwJJd2ZMj
        subject_person_id: p_BtJhyFUPE6ST9QbW33ZM8q
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
        - id: cs_r8rB8ycRwT2FSK3tUz7z1Q
          claim_id: c_kcsBW45MozRWVKwJJd2ZMj
          source_id: s_VwfwBzDgRmNQp7Me13jyNp
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

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| death.date | 1648年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 561757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561757&o=json)
