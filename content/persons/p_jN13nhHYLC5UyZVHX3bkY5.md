---
schema: wang-person/v1
id: p_jN13nhHYLC5UyZVHX3bkY5
status: active
merged_into: null
display_name: 王光弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xyDsV4BV1bk9NULwDBWrpZ
        subject_person_id: p_jN13nhHYLC5UyZVHX3bkY5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BdndDFLcM71kqhkrrL5VV6
          claim_id: c_xyDsV4BV1bk9NULwDBWrpZ
          source_id: s_M1vqT1gyBMq9shJNJXAe8n
          stance: supports
          locator: CBDB:636248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636248）
          source: &a1
            id: s_M1vqT1gyBMq9shJNJXAe8n
            source_type: api_record
            title: 中国历代人物传记资料库：王光弼（CBDB 636248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636248&o=json
            external_identifier: CBDB:636248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bqbfcopJkobDi6LyNFmGm3
        subject_person_id: p_jN13nhHYLC5UyZVHX3bkY5
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
        - id: cs_icZqNkBK7qMWCD22gcvGa1
          claim_id: c_bqbfcopJkobDi6LyNFmGm3
          source_id: s_M1vqT1gyBMq9shJNJXAe8n
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

# 王光弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光弼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光弼（CBDB 636248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636248&o=json)
