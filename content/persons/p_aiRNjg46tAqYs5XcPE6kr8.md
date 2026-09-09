---
schema: wang-person/v1
id: p_aiRNjg46tAqYs5XcPE6kr8
status: active
merged_into: null
display_name: 王荃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eFJaFQCGTYeWTm8aFeSqM1
        subject_person_id: p_aiRNjg46tAqYs5XcPE6kr8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMke61jFpWB3WsqWPtvc64
          claim_id: c_eFJaFQCGTYeWTm8aFeSqM1
          source_id: s_Dm2VosAkhAWmgpuQyTSWjC
          stance: supports
          locator: CBDB:476444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476444）
          source: &a1
            id: s_Dm2VosAkhAWmgpuQyTSWjC
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 476444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476444&o=json
            external_identifier: CBDB:476444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XbHkrXFS1k3EJe3weK5Hzn
        subject_person_id: p_aiRNjg46tAqYs5XcPE6kr8
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
        - id: cs_n31UJwq3suY7aZr6yjmNeV
          claim_id: c_XbHkrXFS1k3EJe3weK5Hzn
          source_id: s_Dm2VosAkhAWmgpuQyTSWjC
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

# 王荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王荃 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王荃（CBDB 476444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476444&o=json)
