---
schema: wang-person/v1
id: p_KjLqXMyMut3Ba658WbechC
status: active
merged_into: null
display_name: 王志中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YHRt1FrdGFuw79rNSi5Kz5
        subject_person_id: p_KjLqXMyMut3Ba658WbechC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNhuJB6VLeN7825KkNje4B
          claim_id: c_YHRt1FrdGFuw79rNSi5Kz5
          source_id: s_pu7jsDcFBrfBtX73zcusd8
          stance: supports
          locator: CBDB:268854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268854）
          source: &a1
            id: s_pu7jsDcFBrfBtX73zcusd8
            source_type: api_record
            title: 中国历代人物传记资料库：王志中（CBDB 268854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268854&o=json
            external_identifier: CBDB:268854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eaSrEGC2oiJkHKyoJ8gByr
        subject_person_id: p_KjLqXMyMut3Ba658WbechC
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
        - id: cs_cVFUBATkkYreDnbHyKmyBe
          claim_id: c_eaSrEGC2oiJkHKyoJ8gByr
          source_id: s_pu7jsDcFBrfBtX73zcusd8
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

# 王志中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志中（CBDB 268854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268854&o=json)
