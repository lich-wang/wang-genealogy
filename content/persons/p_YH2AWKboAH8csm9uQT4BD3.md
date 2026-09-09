---
schema: wang-person/v1
id: p_YH2AWKboAH8csm9uQT4BD3
status: active
merged_into: null
display_name: 王安中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEEng5JJU9iqHh8FqMX45B
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NwbZPyAWPBiTsy7MDjxnrz
          claim_id: c_eEEng5JJU9iqHh8FqMX45B
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: CBDB:8143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8143）
          source: &a1
            id: s_qG8CjfakYkgHewxaZUKuDr
            source_type: api_record
            title: 中国历代人物传记资料库：王安中（CBDB 8143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8143&o=json
            external_identifier: CBDB:8143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CHVFfwNoPsS7tGaX6Gc9Fo
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1076年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59Xd1EUJADqUMsXowyG74x
          claim_id: c_CHVFfwNoPsS7tGaX6Gc9Fo
          source_id: s_qG8CjfakYkgHewxaZUKuDr
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
        id: c_HGJ7DNnqcyVekN5hrPbi1v
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1134年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyJp4G9zQnN3Tj69zZ7S6o
          claim_id: c_HGJ7DNnqcyVekN5hrPbi1v
          source_id: s_qG8CjfakYkgHewxaZUKuDr
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
        id: c_qf8h8EhdJwZVo3ME7n4nx2
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
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
        - id: cs_eGPJuuUxDyoRJ14J51kPL8
          claim_id: c_qf8h8EhdJwZVo3ME7n4nx2
          source_id: s_qG8CjfakYkgHewxaZUKuDr
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

# 王安中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安中 | accepted |
| birth.date | 1076年 | accepted |
| death.date | 1134年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安中（CBDB 8143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8143&o=json)
