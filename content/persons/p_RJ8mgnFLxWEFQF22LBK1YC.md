---
schema: wang-person/v1
id: p_RJ8mgnFLxWEFQF22LBK1YC
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JM6ezYhXeGtPtw8dUrRFPm
        subject_person_id: p_RJ8mgnFLxWEFQF22LBK1YC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwmcjiJWy2SKn1SKivbCS2
          claim_id: c_JM6ezYhXeGtPtw8dUrRFPm
          source_id: s_WSCFA46ht3Zzky2jF1e5aM
          stance: supports
          locator: CBDB:496332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496332）
          source: &a1
            id: s_WSCFA46ht3Zzky2jF1e5aM
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 496332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496332&o=json
            external_identifier: CBDB:496332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e6T8ndnidRhP2fxUyNf1JT
        subject_person_id: p_RJ8mgnFLxWEFQF22LBK1YC
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
        - id: cs_uiZU77ZyDphy4WD98wLbxt
          claim_id: c_e6T8ndnidRhP2fxUyNf1JT
          source_id: s_WSCFA46ht3Zzky2jF1e5aM
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 496332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496332&o=json)
