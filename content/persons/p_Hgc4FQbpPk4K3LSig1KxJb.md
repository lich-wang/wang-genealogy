---
schema: wang-person/v1
id: p_Hgc4FQbpPk4K3LSig1KxJb
status: active
merged_into: null
display_name: 王作樸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1bu6XB5dzTynWP5Tr5eGhG
        subject_person_id: p_Hgc4FQbpPk4K3LSig1KxJb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQMuZjSZHqmm3MXoCr8PFR
          claim_id: c_1bu6XB5dzTynWP5Tr5eGhG
          source_id: s_sDtQd4NGBDP9xuYZKsBCzk
          stance: supports
          locator: CBDB:636004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636004）
          source: &a1
            id: s_sDtQd4NGBDP9xuYZKsBCzk
            source_type: api_record
            title: 中国历代人物传记资料库：王作樸（CBDB 636004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636004&o=json
            external_identifier: CBDB:636004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AG1cEPDRYbqQwdosDW6RT5
        subject_person_id: p_Hgc4FQbpPk4K3LSig1KxJb
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
        - id: cs_2UAQqUx2y4DQWNASJjiFQt
          claim_id: c_AG1cEPDRYbqQwdosDW6RT5
          source_id: s_sDtQd4NGBDP9xuYZKsBCzk
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

# 王作樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作樸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作樸（CBDB 636004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636004&o=json)
