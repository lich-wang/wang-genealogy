---
schema: wang-person/v1
id: p_DjrrwwuL2Ne9aUhFkHhuMT
status: active
merged_into: null
display_name: 王聚奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vRnyFzF8vao2xWY1k3Ntt
        subject_person_id: p_DjrrwwuL2Ne9aUhFkHhuMT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rL4VSsx8Hjhh6ifuZwbcEB
          claim_id: c_3vRnyFzF8vao2xWY1k3Ntt
          source_id: s_FQMePEqyX2jrQZeEXH947R
          stance: supports
          locator: CBDB:72154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72154）
          source: &a1
            id: s_FQMePEqyX2jrQZeEXH947R
            source_type: api_record
            title: 中国历代人物传记资料库：王聚奎（CBDB 72154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72154&o=json
            external_identifier: CBDB:72154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EE1Yd5Pff9NiJEJu3MweGB
        subject_person_id: p_DjrrwwuL2Ne9aUhFkHhuMT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1839年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxoB79AcxDwcdirmd1bGqR
          claim_id: c_EE1Yd5Pff9NiJEJu3MweGB
          source_id: s_FQMePEqyX2jrQZeEXH947R
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
        id: c_S1tpkwRQmw67sA5vo342GM
        subject_person_id: p_DjrrwwuL2Ne9aUhFkHhuMT
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
        - id: cs_J6dTm7EFivkUM42ANrNPLq
          claim_id: c_S1tpkwRQmw67sA5vo342GM
          source_id: s_FQMePEqyX2jrQZeEXH947R
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

# 王聚奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚奎 | accepted |
| birth.date | 1839年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚奎（CBDB 72154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72154&o=json)
