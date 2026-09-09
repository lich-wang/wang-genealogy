---
schema: wang-person/v1
id: p_u8ZDfdYFQFxzEWo3Mai5Su
status: active
merged_into: null
display_name: 王拱宸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YL63fWL6YJN4mjMMAFMFEN
        subject_person_id: p_u8ZDfdYFQFxzEWo3Mai5Su
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wTMJ3rEuPPZtvETFZKEZjD
          claim_id: c_YL63fWL6YJN4mjMMAFMFEN
          source_id: s_Z4ve4ek7mzr3T44Cnf7Fws
          stance: supports
          locator: CBDB:638114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638114）
          source: &a1
            id: s_Z4ve4ek7mzr3T44Cnf7Fws
            source_type: api_record
            title: 中国历代人物传记资料库：王拱宸（CBDB 638114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638114&o=json
            external_identifier: CBDB:638114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RjUYhiNf1MDSAruNNtx6RQ
        subject_person_id: p_u8ZDfdYFQFxzEWo3Mai5Su
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
        - id: cs_W6W1iKSA8hjwUwUV5C1qn7
          claim_id: c_RjUYhiNf1MDSAruNNtx6RQ
          source_id: s_Z4ve4ek7mzr3T44Cnf7Fws
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

# 王拱宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱宸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱宸（CBDB 638114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638114&o=json)
