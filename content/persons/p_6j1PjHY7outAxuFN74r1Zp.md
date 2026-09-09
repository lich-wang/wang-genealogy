---
schema: wang-person/v1
id: p_6j1PjHY7outAxuFN74r1Zp
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yT1Tc1JuS6dKLnXsbbrfmz
        subject_person_id: p_6j1PjHY7outAxuFN74r1Zp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r655aFwp3MP93sk5BrURi3
          claim_id: c_yT1Tc1JuS6dKLnXsbbrfmz
          source_id: s_KRJzBJ7cGWJQ9TPX8fNQW2
          stance: supports
          locator: CBDB:479504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479504）
          source: &a1
            id: s_KRJzBJ7cGWJQ9TPX8fNQW2
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 479504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479504&o=json
            external_identifier: CBDB:479504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F1fDeLP7niMGqMjinHnwZ2
        subject_person_id: p_6j1PjHY7outAxuFN74r1Zp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwkMpewXfRGx5FAkVRxe8w
          claim_id: c_F1fDeLP7niMGqMjinHnwZ2
          source_id: s_KRJzBJ7cGWJQ9TPX8fNQW2
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 479504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479504&o=json)
