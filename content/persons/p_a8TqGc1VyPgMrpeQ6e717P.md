---
schema: wang-person/v1
id: p_a8TqGc1VyPgMrpeQ6e717P
status: active
merged_into: null
display_name: 王羽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uxbfFZGRjr49Kkd2nDrkQn
        subject_person_id: p_a8TqGc1VyPgMrpeQ6e717P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vk6YcyTpqNkfxeBZBo36pF
          claim_id: c_uxbfFZGRjr49Kkd2nDrkQn
          source_id: s_wz8hqnoiDohVC5KnB6aCgC
          stance: supports
          locator: CBDB:92013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92013）
          source: &a1
            id: s_wz8hqnoiDohVC5KnB6aCgC
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 92013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92013&o=json
            external_identifier: CBDB:92013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4UJdhCmkKvQMFn5QJe9dVn
        subject_person_id: p_a8TqGc1VyPgMrpeQ6e717P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YXXBzcWphd4Y45h3BKuBoh
          claim_id: c_4UJdhCmkKvQMFn5QJe9dVn
          source_id: s_wz8hqnoiDohVC5KnB6aCgC
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
        id: c_qPxpo2fp28qjxj6M1bpQti
        subject_person_id: p_a8TqGc1VyPgMrpeQ6e717P
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
        - id: cs_9RyaEyYUt7D9pnZiswoDM5
          claim_id: c_qPxpo2fp28qjxj6M1bpQti
          source_id: s_wz8hqnoiDohVC5KnB6aCgC
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

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽 | accepted |
| birth.date | 829年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羽（CBDB 92013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92013&o=json)
