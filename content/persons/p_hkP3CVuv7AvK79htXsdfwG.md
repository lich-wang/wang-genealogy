---
schema: wang-person/v1
id: p_hkP3CVuv7AvK79htXsdfwG
status: active
merged_into: null
display_name: 王見偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QkmHm8rLPNGqg5zY8in6bW
        subject_person_id: p_hkP3CVuv7AvK79htXsdfwG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bFJ5sHCkNr4gLKJhxMeX4R
          claim_id: c_QkmHm8rLPNGqg5zY8in6bW
          source_id: s_sQXtgo6H4HUAGNo6tK1g3X
          stance: supports
          locator: CBDB:640228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640228）
          source: &a1
            id: s_sQXtgo6H4HUAGNo6tK1g3X
            source_type: api_record
            title: 中国历代人物传记资料库：王見偉（CBDB 640228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640228&o=json
            external_identifier: CBDB:640228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.192Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3xxEAe1wC2aEH82nDfLTJ
        subject_person_id: p_hkP3CVuv7AvK79htXsdfwG
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
        - id: cs_QpeziXMrEVhCkVnLTLPUpa
          claim_id: c_V3xxEAe1wC2aEH82nDfLTJ
          source_id: s_sQXtgo6H4HUAGNo6tK1g3X
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

# 王見偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王見偉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王見偉（CBDB 640228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640228&o=json)
