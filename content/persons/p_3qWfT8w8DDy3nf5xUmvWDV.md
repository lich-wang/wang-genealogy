---
schema: wang-person/v1
id: p_3qWfT8w8DDy3nf5xUmvWDV
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LUBAEDszmaDAfouZdcw1gP
        subject_person_id: p_3qWfT8w8DDy3nf5xUmvWDV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jwDcD9E2j2YGLVyQ7nvhqP
          claim_id: c_LUBAEDszmaDAfouZdcw1gP
          source_id: s_7ZTzGQgijMZG7GFaBdnP9x
          stance: supports
          locator: CBDB:175909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175909）
          source: &a1
            id: s_7ZTzGQgijMZG7GFaBdnP9x
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 175909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175909&o=json
            external_identifier: CBDB:175909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k8nG7YMWQiCCa6V7Q5pmJo
        subject_person_id: p_3qWfT8w8DDy3nf5xUmvWDV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 745年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FCYE2saGKjmTNQaM5odwb
          claim_id: c_k8nG7YMWQiCCa6V7Q5pmJo
          source_id: s_7ZTzGQgijMZG7GFaBdnP9x
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
        id: c_UuPbSPwmcR7yMQqj483Vcq
        subject_person_id: p_3qWfT8w8DDy3nf5xUmvWDV
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
        - id: cs_WrPUwjPbjtsM5yLgNnLT6W
          claim_id: c_UuPbSPwmcR7yMQqj483Vcq
          source_id: s_7ZTzGQgijMZG7GFaBdnP9x
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| death.date | 745年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 175909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175909&o=json)
