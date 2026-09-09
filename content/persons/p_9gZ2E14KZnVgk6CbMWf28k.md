---
schema: wang-person/v1
id: p_9gZ2E14KZnVgk6CbMWf28k
status: active
merged_into: null
display_name: 王棣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QhnC5W2AdB3iaT8meTD13S
        subject_person_id: p_9gZ2E14KZnVgk6CbMWf28k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xtc7KnazMqVDYRk7BsE8E2
          claim_id: c_QhnC5W2AdB3iaT8meTD13S
          source_id: s_QtG2L5xG2UAx89FUFr7GPr
          stance: supports
          locator: CBDB:35621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35621）
          source: &a1
            id: s_QtG2L5xG2UAx89FUFr7GPr
            source_type: api_record
            title: 中国历代人物传记资料库：王棣（CBDB 35621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35621&o=json
            external_identifier: CBDB:35621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iu6p3BKPQPAnCwwyE7BcW1
        subject_person_id: p_9gZ2E14KZnVgk6CbMWf28k
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
        - id: cs_PEuTuJ7rreW7gd9gtNg6aY
          claim_id: c_iu6p3BKPQPAnCwwyE7BcW1
          source_id: s_QtG2L5xG2UAx89FUFr7GPr
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

# 王棣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棣（CBDB 35621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35621&o=json)
