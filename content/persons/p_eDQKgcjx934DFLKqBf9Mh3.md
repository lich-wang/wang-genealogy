---
schema: wang-person/v1
id: p_eDQKgcjx934DFLKqBf9Mh3
status: active
merged_into: null
display_name: 王愕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PDsR9QwTBwmXCewkLk8H4F
        subject_person_id: p_eDQKgcjx934DFLKqBf9Mh3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TZ1ZgMvL3PKwgbvoMM1GtG
          claim_id: c_PDsR9QwTBwmXCewkLk8H4F
          source_id: s_spnHYCX9Q9mG5NgsUpP2xb
          stance: supports
          locator: CBDB:142266
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142266）
          source: &a1
            id: s_spnHYCX9Q9mG5NgsUpP2xb
            source_type: api_record
            title: 中国历代人物传记资料库：王愕（CBDB 142266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142266&o=json
            external_identifier: CBDB:142266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9RN8i6voMJZP5QBKxwjArL
        subject_person_id: p_eDQKgcjx934DFLKqBf9Mh3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYPELJkQqN8UyR8DM6Y6GK
          claim_id: c_9RN8i6voMJZP5QBKxwjArL
          source_id: s_spnHYCX9Q9mG5NgsUpP2xb
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
        id: c_QhefLfNG6ecihnVfRUq1FB
        subject_person_id: p_eDQKgcjx934DFLKqBf9Mh3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PLtyNViJaNC6bek7xW8sC
          claim_id: c_QhefLfNG6ecihnVfRUq1FB
          source_id: s_spnHYCX9Q9mG5NgsUpP2xb
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
        id: c_XxA3E4PpBqMqqBywg25pUF
        subject_person_id: p_eDQKgcjx934DFLKqBf9Mh3
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
        - id: cs_kGrGkJh6pmgP8CdiH7dLhN
          claim_id: c_XxA3E4PpBqMqqBywg25pUF
          source_id: s_spnHYCX9Q9mG5NgsUpP2xb
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

# 王愕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愕 | accepted |
| birth.date | 595年 | accepted |
| death.date | 645年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愕（CBDB 142266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142266&o=json)
