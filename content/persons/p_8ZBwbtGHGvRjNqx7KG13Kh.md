---
schema: wang-person/v1
id: p_8ZBwbtGHGvRjNqx7KG13Kh
status: active
merged_into: null
display_name: 王仁皎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKEoxXEscBMcZ4qCLJK6FZ
        subject_person_id: p_8ZBwbtGHGvRjNqx7KG13Kh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁皎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iXw5Z9kAdABjAeMSExSXXa
          claim_id: c_FKEoxXEscBMcZ4qCLJK6FZ
          source_id: s_MPU2PoTJdCXdKEM8kH7BLj
          stance: supports
          locator: CBDB:175881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175881）
          source: &a1
            id: s_MPU2PoTJdCXdKEM8kH7BLj
            source_type: api_record
            title: 中国历代人物传记资料库：王仁皎（CBDB 175881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175881&o=json
            external_identifier: CBDB:175881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wGT8Qe61bbE9iMA9sPw1Pi
        subject_person_id: p_8ZBwbtGHGvRjNqx7KG13Kh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 651年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HHRMKPD4dFUU62td5A2Yg4
          claim_id: c_wGT8Qe61bbE9iMA9sPw1Pi
          source_id: s_MPU2PoTJdCXdKEM8kH7BLj
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
        id: c_KJBLP72co6LMw9fjR5VrdA
        subject_person_id: p_8ZBwbtGHGvRjNqx7KG13Kh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 719年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eUHkyXbtUq3er1LB3Pi5P
          claim_id: c_KJBLP72co6LMw9fjR5VrdA
          source_id: s_MPU2PoTJdCXdKEM8kH7BLj
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
        id: c_gqsdCQLX87bKcgQqPSGvD3
        subject_person_id: p_8ZBwbtGHGvRjNqx7KG13Kh
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
        - id: cs_3sjbgQG8uPExZ5WL5Uprhf
          claim_id: c_gqsdCQLX87bKcgQqPSGvD3
          source_id: s_MPU2PoTJdCXdKEM8kH7BLj
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

# 王仁皎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁皎 | accepted |
| birth.date | 651年 | accepted |
| death.date | 719年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁皎（CBDB 175881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175881&o=json)
