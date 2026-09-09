---
schema: wang-person/v1
id: p_wA3j8iXDLCLhyg8PiA7Ch7
status: active
merged_into: null
display_name: 王遐休
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bDphHTwN2NgvdTTg1GyF56
        subject_person_id: p_wA3j8iXDLCLhyg8PiA7Ch7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MAcfNr2Af7GrRhk9CyApta
          claim_id: c_bDphHTwN2NgvdTTg1GyF56
          source_id: s_9txz3g8o7yD8kndUyqGH4H
          stance: supports
          locator: CBDB:189321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189321）
          source: &a1
            id: s_9txz3g8o7yD8kndUyqGH4H
            source_type: api_record
            title: 中国历代人物传记资料库：王遐休（CBDB 189321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189321&o=json
            external_identifier: CBDB:189321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xs9PNLynEixNogsk8wNGaU
        subject_person_id: p_wA3j8iXDLCLhyg8PiA7Ch7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMz9wPFiP1hp8a7HCtopb9
          claim_id: c_xs9PNLynEixNogsk8wNGaU
          source_id: s_9txz3g8o7yD8kndUyqGH4H
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
        id: c_ByyyWL1bzQoGyE58J6B2b8
        subject_person_id: p_wA3j8iXDLCLhyg8PiA7Ch7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDq4QuQcfs6494XPMHD8b8
          claim_id: c_ByyyWL1bzQoGyE58J6B2b8
          source_id: s_9txz3g8o7yD8kndUyqGH4H
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

# 王遐休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遐休 | accepted |
| death.date | 835年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遐休（CBDB 189321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189321&o=json)
