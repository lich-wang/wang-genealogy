---
schema: wang-person/v1
id: p_TkNCMtQ8YGrvaBS21B3FP8
status: active
merged_into: null
display_name: 王選衆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3y7CGwFp1dFY3VAh8E4doZ
        subject_person_id: p_TkNCMtQ8YGrvaBS21B3FP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選衆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z8FJLmmTeFjcg4TKjBgNQw
          claim_id: c_3y7CGwFp1dFY3VAh8E4doZ
          source_id: s_vhXDKd3iLFquTXD9UyBuMJ
          stance: supports
          locator: CBDB:640403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640403）
          source: &a1
            id: s_vhXDKd3iLFquTXD9UyBuMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王選衆（CBDB 640403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640403&o=json
            external_identifier: CBDB:640403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6TTeDsuzh4vMMNv7UT53YP
        subject_person_id: p_TkNCMtQ8YGrvaBS21B3FP8
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
        - id: cs_UK7TvrD3yVDSRrdAD4cEBj
          claim_id: c_6TTeDsuzh4vMMNv7UT53YP
          source_id: s_vhXDKd3iLFquTXD9UyBuMJ
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

# 王選衆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選衆 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選衆（CBDB 640403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640403&o=json)
