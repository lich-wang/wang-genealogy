---
schema: wang-person/v1
id: p_5vDjPyewsQNr1vDc9fypfb
status: active
merged_into: null
display_name: 王時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WxQZ8H4ifcobN8pJLwvmdS
        subject_person_id: p_5vDjPyewsQNr1vDc9fypfb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xENuZztTMwcP1jukieuNg8
          claim_id: c_WxQZ8H4ifcobN8pJLwvmdS
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
          stance: supports
          locator: CBDB:200965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200965）
          source: &a1
            id: s_SG9XzYnQAGNaRPC96Wixq5
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 200965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json
            external_identifier: CBDB:200965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1mR4p2HMb4U3KrJS23qm9G
        subject_person_id: p_5vDjPyewsQNr1vDc9fypfb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1457年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yx2kT82j1vZtLJ6kf4N5NN
          claim_id: c_1mR4p2HMb4U3KrJS23qm9G
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
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
        id: c_1V61STEk9ysqh7vgwWLx95
        subject_person_id: p_5vDjPyewsQNr1vDc9fypfb
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
        - id: cs_WPMN3vtzGpfyjgYp6zBQR1
          claim_id: c_1V61STEk9ysqh7vgwWLx95
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
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

# 王時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時 | accepted |
| birth.date | 1457年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時（CBDB 200965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json)
