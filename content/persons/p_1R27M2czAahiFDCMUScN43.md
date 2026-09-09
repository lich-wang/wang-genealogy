---
schema: wang-person/v1
id: p_1R27M2czAahiFDCMUScN43
status: active
merged_into: null
display_name: 王京
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RM1sxKmkwbQzZABqoJ41x2
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1tdCk8ZfqoGjGBUjPygPqj
          claim_id: c_RM1sxKmkwbQzZABqoJ41x2
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: CBDB:141020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141020）
          source: &a1
            id: s_gSvbm3ZseREEmUhYMheei9
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 141020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json
            external_identifier: CBDB:141020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aupPtVJ5buzWy5ZqsXm7FG
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 687年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31UaNfqx4996wLaoKfB5Fy
          claim_id: c_aupPtVJ5buzWy5ZqsXm7FG
          source_id: s_gSvbm3ZseREEmUhYMheei9
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
        id: c_H43AK7VWczpBHw4w3c5dhL
        subject_person_id: p_1R27M2czAahiFDCMUScN43
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iG7vzvw5Ke5oFsPqdgNuoy
          claim_id: c_H43AK7VWczpBHw4w3c5dhL
          source_id: s_gSvbm3ZseREEmUhYMheei9
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
        id: c_xKur32vYQTdwDwox5GdEYM
        subject_person_id: p_1R27M2czAahiFDCMUScN43
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
        - id: cs_mNptXitfLuobBU6bc17fGC
          claim_id: c_xKur32vYQTdwDwox5GdEYM
          source_id: s_gSvbm3ZseREEmUhYMheei9
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

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 687年 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京（CBDB 141020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json)
