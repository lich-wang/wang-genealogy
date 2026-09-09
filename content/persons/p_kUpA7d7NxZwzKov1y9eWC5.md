---
schema: wang-person/v1
id: p_kUpA7d7NxZwzKov1y9eWC5
status: active
merged_into: null
display_name: 王廷珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J56r3hb6ZKWuwoqeNFS64k
        subject_person_id: p_kUpA7d7NxZwzKov1y9eWC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntjF86KCmrmXYFtvRCgTpr
          claim_id: c_J56r3hb6ZKWuwoqeNFS64k
          source_id: s_o6XdH4fKcD4LWcMXMfy8aG
          stance: supports
          locator: CBDB:101219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101219）
          source: &a1
            id: s_o6XdH4fKcD4LWcMXMfy8aG
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珍（CBDB 101219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101219&o=json
            external_identifier: CBDB:101219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pHoMt4kWrxWsDnSAeK58eS
        subject_person_id: p_kUpA7d7NxZwzKov1y9eWC5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwQrxddGbcEWRw5kXCSi3M
          claim_id: c_pHoMt4kWrxWsDnSAeK58eS
          source_id: s_o6XdH4fKcD4LWcMXMfy8aG
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
        id: c_FLA6z6KkCM6YqVXsvnHHtw
        subject_person_id: p_kUpA7d7NxZwzKov1y9eWC5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1335年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYjf337ci2W7HHYP5LXCsm
          claim_id: c_FLA6z6KkCM6YqVXsvnHHtw
          source_id: s_o6XdH4fKcD4LWcMXMfy8aG
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
        id: c_EQ9NqnJPa3tgPn8QvY3m6H
        subject_person_id: p_kUpA7d7NxZwzKov1y9eWC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iS9wg97CL5Kyd6sMUz72bY
          claim_id: c_EQ9NqnJPa3tgPn8QvY3m6H
          source_id: s_o6XdH4fKcD4LWcMXMfy8aG
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

# 王廷珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷珍 | accepted |
| birth.date | 1278年 | accepted |
| death.date | 1335年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷珍（CBDB 101219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101219&o=json)
