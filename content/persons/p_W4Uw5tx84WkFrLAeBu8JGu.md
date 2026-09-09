---
schema: wang-person/v1
id: p_W4Uw5tx84WkFrLAeBu8JGu
status: active
merged_into: null
display_name: 王嘉孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VzCVd1GP98jziiNSHoayHz
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4cr5ZvGb8QJbBVqLF4tKgh
          claim_id: c_VzCVd1GP98jziiNSHoayHz
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
          stance: supports
          locator: CBDB:203440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203440）
          source: &a1
            id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉孝（CBDB 203440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203440&o=json
            external_identifier: CBDB:203440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yobDYAAcumuuBvMKnzb6PT
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1500年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8DSbQaYU8tbQabAKMyXuA
          claim_id: c_yobDYAAcumuuBvMKnzb6PT
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3M3EGECy6tW3YmW5ykZRc1
        subject_person_id: p_W4Uw5tx84WkFrLAeBu8JGu
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
        - id: cs_FXNqCAuCAGCYCdjtcG4st6
          claim_id: c_3M3EGECy6tW3YmW5ykZRc1
          source_id: s_Tu5Yy1Q4MY5AJtrhpLK6t8
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

# 王嘉孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉孝 | accepted |
| birth.date | 1500年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉孝（CBDB 203440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203440&o=json)
