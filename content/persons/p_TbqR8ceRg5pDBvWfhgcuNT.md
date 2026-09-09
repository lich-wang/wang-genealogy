---
schema: wang-person/v1
id: p_TbqR8ceRg5pDBvWfhgcuNT
status: active
merged_into: null
display_name: 王行敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QiFQ2WQUjFwoc16SMGz2XY
        subject_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ci6zYc2f6o1EjvPxDs8N2J
          claim_id: c_QiFQ2WQUjFwoc16SMGz2XY
          source_id: s_AYYQTHXvowJWJ2mdGUT2wM
          stance: supports
          locator: CBDB:525128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（525128）
          source: &a1
            id: s_AYYQTHXvowJWJ2mdGUT2wM
            source_type: api_record
            title: 中国历代人物传记资料库：王行敏（CBDB 525128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json
            external_identifier: CBDB:525128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_poy3fW4pU3wd4QGF1Tf5Bf
        subject_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
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
        - id: cs_P9mFJrMWyioqefkADxw2NV
          claim_id: c_poy3fW4pU3wd4QGF1Tf5Bf
          source_id: s_AYYQTHXvowJWJ2mdGUT2wM
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

# 王行敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行敏 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行敏（CBDB 525128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json)
