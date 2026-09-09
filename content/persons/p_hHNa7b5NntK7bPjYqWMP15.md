---
schema: wang-person/v1
id: p_hHNa7b5NntK7bPjYqWMP15
status: active
merged_into: null
display_name: 王价
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n9eAiLpedB9cQ4W8kpCqnD
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z6Mx6W1Y8FogNJt6AhV69R
          claim_id: c_n9eAiLpedB9cQ4W8kpCqnD
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
          stance: supports
          locator: CBDB:203975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203975）
          source: &a1
            id: s_vizm1o5jZt3HpFKCQmVFZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 203975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203975&o=json
            external_identifier: CBDB:203975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_arM6a6XGa5xXpz1pTDCqsK
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNgEAfen6rtNAjkEdq4kU3
          claim_id: c_arM6a6XGa5xXpz1pTDCqsK
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
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
        id: c_KTK9XjuqQjEszVSK6XwCig
        subject_person_id: p_hHNa7b5NntK7bPjYqWMP15
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
        - id: cs_KDvogNGyToGDahmH8QwHFN
          claim_id: c_KTK9XjuqQjEszVSK6XwCig
          source_id: s_vizm1o5jZt3HpFKCQmVFZQ
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

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| birth.date | 1528年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 203975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203975&o=json)
