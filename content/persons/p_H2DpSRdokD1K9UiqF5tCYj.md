---
schema: wang-person/v1
id: p_H2DpSRdokD1K9UiqF5tCYj
status: active
merged_into: null
display_name: 王處修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xJBbfYr3uj6deqSiFtiQT
        subject_person_id: p_H2DpSRdokD1K9UiqF5tCYj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AZM8XPGgsTNi9FqjXZ5Et6
          claim_id: c_3xJBbfYr3uj6deqSiFtiQT
          source_id: s_7Nwb2yDzW8yngEXRij3p2Y
          stance: supports
          locator: CBDB:160571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160571）
          source: &a1
            id: s_7Nwb2yDzW8yngEXRij3p2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王處修（CBDB 160571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160571&o=json
            external_identifier: CBDB:160571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VZby96KojYGDQXmaFSy1nQ
        subject_person_id: p_H2DpSRdokD1K9UiqF5tCYj
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
        - id: cs_Qrm7MNjn5y8WPD8FsoR9qN
          claim_id: c_VZby96KojYGDQXmaFSy1nQ
          source_id: s_7Nwb2yDzW8yngEXRij3p2Y
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

# 王處修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處修 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處修（CBDB 160571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160571&o=json)
