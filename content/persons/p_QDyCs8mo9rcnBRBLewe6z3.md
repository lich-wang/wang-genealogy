---
schema: wang-person/v1
id: p_QDyCs8mo9rcnBRBLewe6z3
status: active
merged_into: null
display_name: 王良鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BXvc25QfTnXAgoiaaVYGsA
        subject_person_id: p_QDyCs8mo9rcnBRBLewe6z3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9eL4sb98AHSbXY2Gis5Dgq
          claim_id: c_BXvc25QfTnXAgoiaaVYGsA
          source_id: s_Aa7DmLFwKSDgLP6sgrasGL
          stance: supports
          locator: CBDB:640049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640049）
          source: &a1
            id: s_Aa7DmLFwKSDgLP6sgrasGL
            source_type: api_record
            title: 中国历代人物传记资料库：王良鳳（CBDB 640049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640049&o=json
            external_identifier: CBDB:640049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DFENafmjTh9MooJZGcQygo
        subject_person_id: p_QDyCs8mo9rcnBRBLewe6z3
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
        - id: cs_Fh6L8fsRdwx2gjcQo5tBjt
          claim_id: c_DFENafmjTh9MooJZGcQygo
          source_id: s_Aa7DmLFwKSDgLP6sgrasGL
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

# 王良鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良鳳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良鳳（CBDB 640049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640049&o=json)
