---
schema: wang-person/v1
id: p_kVHSgSesG6qJ2H5MWAmCGo
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Na6twJT82b3AuksiNoRLvZ
        subject_person_id: p_kVHSgSesG6qJ2H5MWAmCGo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YhTmBpvLVxLCNbQ5Nrs9bX
          claim_id: c_Na6twJT82b3AuksiNoRLvZ
          source_id: s_fQxr9fe9o8kqi46zLjr3i4
          stance: supports
          locator: CBDB:303912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303912）
          source: &a1
            id: s_fQxr9fe9o8kqi46zLjr3i4
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 303912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303912&o=json
            external_identifier: CBDB:303912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kjT3AsMLg9CSJH7d1GumYr
        subject_person_id: p_kVHSgSesG6qJ2H5MWAmCGo
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
        - id: cs_iKc7Fs9r9CmrPqWKuuY4c5
          claim_id: c_kjT3AsMLg9CSJH7d1GumYr
          source_id: s_fQxr9fe9o8kqi46zLjr3i4
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 303912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303912&o=json)
