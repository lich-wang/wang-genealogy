---
schema: wang-person/v1
id: p_bmbwdV3HEBP41vyQnog2Gc
status: active
merged_into: null
display_name: 王君素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f76P1FSNZAeHcXYvz3PCxN
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JyE9ksotmUN1Eai4JY51vc
          claim_id: c_f76P1FSNZAeHcXYvz3PCxN
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: CBDB:148173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148173）
          source: &a1
            id: s_85EBvENbuhhCGZsJ7kZAGr
            source_type: api_record
            title: 中国历代人物传记资料库：王君素（CBDB 148173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json
            external_identifier: CBDB:148173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6BpkoQ1Quui9Zr5D9mt7M8
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
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
        - id: cs_i4J9ZRaPJJEboUqVXUAjfA
          claim_id: c_6BpkoQ1Quui9Zr5D9mt7M8
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
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

# 王君素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君素 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君素（CBDB 148173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json)
