---
schema: wang-person/v1
id: p_5MoCCJRcBFzHJznta14EJo
status: active
merged_into: null
display_name: 王喜姑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TC7PJr2H9asKLXUjcS6Zb6
        subject_person_id: p_5MoCCJRcBFzHJznta14EJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喜姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPHn45juyQEKY564qUefc4
          claim_id: c_TC7PJr2H9asKLXUjcS6Zb6
          source_id: s_uWNJuJ54bP57vC2U6J57gi
          stance: supports
          locator: CBDB:699463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699463）
          source: &a1
            id: s_uWNJuJ54bP57vC2U6J57gi
            source_type: api_record
            title: 中国历代人物传记资料库：王喜姑（CBDB 699463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699463&o=json
            external_identifier: CBDB:699463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Lwo3NeFFLSCF1PCrH7HjF
        subject_person_id: p_5MoCCJRcBFzHJznta14EJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q4cGqmiAWrEqjjkrhMAFAJ
          claim_id: c_2Lwo3NeFFLSCF1PCrH7HjF
          source_id: s_uWNJuJ54bP57vC2U6J57gi
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

# 王喜姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喜姑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喜姑（CBDB 699463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699463&o=json)
