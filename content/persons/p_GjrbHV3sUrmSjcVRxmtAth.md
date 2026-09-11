---
schema: wang-person/v1
id: p_GjrbHV3sUrmSjcVRxmtAth
status: active
merged_into: null
display_name: 王景章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3Pw58VeyuEQYtSN785d6z
        subject_person_id: p_GjrbHV3sUrmSjcVRxmtAth
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7CTc1KU31EQaghXxonpga
          claim_id: c_z3Pw58VeyuEQYtSN785d6z
          source_id: s_b93TJ48d7HviMbcE9nhSg9
          stance: supports
          locator: CBDB:72072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72072）
          source: &a1
            id: s_b93TJ48d7HviMbcE9nhSg9
            source_type: api_record
            title: 中国历代人物传记资料库：王景章（CBDB 72072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72072&o=json
            external_identifier: CBDB:72072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_piSWVYNpyz7TDwKdjrErPK
        subject_person_id: p_GjrbHV3sUrmSjcVRxmtAth
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1784年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ws3eAgLWddbeC7jtj57Qgn
          claim_id: c_piSWVYNpyz7TDwKdjrErPK
          source_id: s_b93TJ48d7HviMbcE9nhSg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DaN6ghumgo2py9ESwGyk52
        subject_person_id: p_GjrbHV3sUrmSjcVRxmtAth
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpuBBapz7tHLgELWuiFHGJ
          claim_id: c_DaN6ghumgo2py9ESwGyk52
          source_id: s_b93TJ48d7HviMbcE9nhSg9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4A4qYQaAufFS1pqmKYzuH4
        subject_person_id: p_GjrbHV3sUrmSjcVRxmtAth
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景章（1784年—1842年），清人物。籍贯嵊縣。（中国历代人物传记资料库 CBDB 72072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wUmRoL4jaalN0SXm71Q2XG
          claim_id: c_4A4qYQaAufFS1pqmKYzuH4
          source_id: s_b93TJ48d7HviMbcE9nhSg9
          stance: supports
          locator: CBDB:72072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王景章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景章 | accepted |
| birth.date | 1784年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | 王景章（1784年—1842年），清人物。籍贯嵊縣。（中国历代人物传记资料库 CBDB 72072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景章（CBDB 72072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72072&o=json)
