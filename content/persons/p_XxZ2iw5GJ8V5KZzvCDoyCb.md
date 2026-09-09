---
schema: wang-person/v1
id: p_XxZ2iw5GJ8V5KZzvCDoyCb
status: active
merged_into: null
display_name: 王淨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3UpG6FBKZsS3WiZVd63jEy
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4wc7HidazZcaXtVqWK1Te
          claim_id: c_3UpG6FBKZsS3WiZVd63jEy
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
          stance: supports
          locator: CBDB:142434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142434）
          source: &a1
            id: s_6EekkKb5e2vAt6c9PbEWcw
            source_type: api_record
            title: 中国历代人物传记资料库：王淨（CBDB 142434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142434&o=json
            external_identifier: CBDB:142434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KsagazYzbgt1CiPyJoXwKR
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvaPvvbMnu7rv3rzfw6C8z
          claim_id: c_KsagazYzbgt1CiPyJoXwKR
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
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
        id: c_ii2LtcZC3fnyEjCn5Q7Vgn
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqN2jHJqL6JPJ5ZUtWgEGB
          claim_id: c_ii2LtcZC3fnyEjCn5Q7Vgn
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
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
        id: c_bsVq6XfH3nAZ4fesXtusFH
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TNRPpf356WmDCX9GHtC6R8
          claim_id: c_bsVq6XfH3nAZ4fesXtusFH
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
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

# 王淨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淨 | accepted |
| birth.date | 595年 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淨（CBDB 142434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142434&o=json)
