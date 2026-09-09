---
schema: wang-person/v1
id: p_jB3PrXZR9y5X7zYaQXfaXd
status: active
merged_into: null
display_name: 王仲亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JnyW1KGLJzY7YEod1GQ12z
        subject_person_id: p_jB3PrXZR9y5X7zYaQXfaXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9VGPqyjdEgrhkUY7A8NZ5M
          claim_id: c_JnyW1KGLJzY7YEod1GQ12z
          source_id: s_GVWNmBqKJ3NLAMr5aLysX5
          stance: supports
          locator: CBDB:190207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190207）
          source: &a1
            id: s_GVWNmBqKJ3NLAMr5aLysX5
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 190207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190207&o=json
            external_identifier: CBDB:190207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nrFjx6j2YBgS5XqP6Hih5j
        subject_person_id: p_jB3PrXZR9y5X7zYaQXfaXd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqMwkJKNRdxK9wj2tXt8Tf
          claim_id: c_nrFjx6j2YBgS5XqP6Hih5j
          source_id: s_GVWNmBqKJ3NLAMr5aLysX5
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
        id: c_Ycc9iXEYzJTWHdjd5Gcw7F
        subject_person_id: p_jB3PrXZR9y5X7zYaQXfaXd
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
        - id: cs_w5EjnATQTpxVHMw9kNawLe
          claim_id: c_Ycc9iXEYzJTWHdjd5Gcw7F
          source_id: s_GVWNmBqKJ3NLAMr5aLysX5
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

# 王仲亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲亨 | accepted |
| death.date | 671年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲亨（CBDB 190207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190207&o=json)
