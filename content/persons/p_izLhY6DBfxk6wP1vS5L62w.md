---
schema: wang-person/v1
id: p_izLhY6DBfxk6wP1vS5L62w
status: active
merged_into: null
display_name: 王俞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1QxnyS2HR78723Nsx4ArQ
        subject_person_id: p_izLhY6DBfxk6wP1vS5L62w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n6gDEjqjD6mqvHmf8YRxod
          claim_id: c_c1QxnyS2HR78723Nsx4ArQ
          source_id: s_ZNPtxT2SN3vijsMbyCvo83
          stance: supports
          locator: CBDB:541975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541975）
          source: &a1
            id: s_ZNPtxT2SN3vijsMbyCvo83
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 541975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541975&o=json
            external_identifier: CBDB:541975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fKkjEgWCkp5ux8fqRpHYLo
        subject_person_id: p_izLhY6DBfxk6wP1vS5L62w
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
        - id: cs_hQTvP4KdDKg59tY3jshFP6
          claim_id: c_fKkjEgWCkp5ux8fqRpHYLo
          source_id: s_ZNPtxT2SN3vijsMbyCvo83
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

# 王俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俞（CBDB 541975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541975&o=json)
