---
schema: wang-person/v1
id: p_rZsGZsuicScCNJ1robY49T
status: active
merged_into: null
display_name: 王步青
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gFjeFymaX3gFHBuEdPjr1c
        subject_person_id: p_rZsGZsuicScCNJ1robY49T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步青
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CHLKTNvd9egPLZbm15er2
          claim_id: c_gFjeFymaX3gFHBuEdPjr1c
          source_id: s_CJHTPZ6gVX7KzDLw2jufpM
          stance: supports
          locator: CBDB:69215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69215）
          source: &a1
            id: s_CJHTPZ6gVX7KzDLw2jufpM
            source_type: api_record
            title: 中国历代人物传记资料库：王步青（CBDB 69215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69215&o=json
            external_identifier: CBDB:69215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ryQ5iFxjKbbYq2w16NEVPm
        subject_person_id: p_rZsGZsuicScCNJ1robY49T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mZGKz9HZ5gDq5Kj9Pf3Mcc
          claim_id: c_ryQ5iFxjKbbYq2w16NEVPm
          source_id: s_CJHTPZ6gVX7KzDLw2jufpM
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
        id: c_NJEapuVgJr8WemJMM4BVcD
        subject_person_id: p_rZsGZsuicScCNJ1robY49T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1751年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKmW7ZoLbAj5JjqZ9YLcFT
          claim_id: c_NJEapuVgJr8WemJMM4BVcD
          source_id: s_CJHTPZ6gVX7KzDLw2jufpM
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
        id: c_R7G6T1DPmRfsQjBTyetBHs
        subject_person_id: p_rZsGZsuicScCNJ1robY49T
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
        - id: cs_7dUpN6vEcQXvFG3B7rAgoM
          claim_id: c_R7G6T1DPmRfsQjBTyetBHs
          source_id: s_CJHTPZ6gVX7KzDLw2jufpM
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

# 王步青

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王步青 | accepted |
| birth.date | 1672年 | accepted |
| death.date | 1751年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王步青（CBDB 69215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69215&o=json)
