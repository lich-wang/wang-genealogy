---
schema: wang-person/v1
id: p_DEDjSDmGdLDNKq5UvUKi3H
status: active
merged_into: null
display_name: 王文豹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eeUThHpH78Pub9NEmFZjva
        subject_person_id: p_DEDjSDmGdLDNKq5UvUKi3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文豹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h9GqfBjW6kvw2DMBCJKv7G
          claim_id: c_eeUThHpH78Pub9NEmFZjva
          source_id: s_PB4LQoYfu8BiPXw9qt35ry
          stance: supports
          locator: CBDB:638284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638284）
          source: &a1
            id: s_PB4LQoYfu8BiPXw9qt35ry
            source_type: api_record
            title: 中国历代人物传记资料库：王文豹（CBDB 638284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638284&o=json
            external_identifier: CBDB:638284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8ptsZs3uZd4KYBvExPwga
        subject_person_id: p_DEDjSDmGdLDNKq5UvUKi3H
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
        - id: cs_vGnHtuzANrKNxB9aXYdiKP
          claim_id: c_Q8ptsZs3uZd4KYBvExPwga
          source_id: s_PB4LQoYfu8BiPXw9qt35ry
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

# 王文豹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文豹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文豹（CBDB 638284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638284&o=json)
