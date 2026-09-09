---
schema: wang-person/v1
id: p_LkqiF66dP7UYJK7vNxYdb2
status: active
merged_into: null
display_name: 王信
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f1fSRDHNJvvgG5ndPBRqgU
        subject_person_id: p_LkqiF66dP7UYJK7vNxYdb2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ri2Be9rEPbEQGbYPG4DLHV
          claim_id: c_f1fSRDHNJvvgG5ndPBRqgU
          source_id: s_qpePK2ozgekqxb7AeDo5bd
          stance: supports
          locator: CBDB:162934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162934）
          source: &a1
            id: s_qpePK2ozgekqxb7AeDo5bd
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 162934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162934&o=json
            external_identifier: CBDB:162934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1V3q64iATLHkE6e7te6j5C
        subject_person_id: p_LkqiF66dP7UYJK7vNxYdb2
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
        - id: cs_TJ9GzqW7bpEhCq7uz5qQzx
          claim_id: c_1V3q64iATLHkE6e7te6j5C
          source_id: s_qpePK2ozgekqxb7AeDo5bd
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

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 162934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162934&o=json)
