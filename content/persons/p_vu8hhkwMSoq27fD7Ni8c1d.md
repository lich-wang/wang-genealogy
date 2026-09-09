---
schema: wang-person/v1
id: p_vu8hhkwMSoq27fD7Ni8c1d
status: active
merged_into: null
display_name: 王濬章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TU1w4Fd7AEtaQYmgxpoXt3
        subject_person_id: p_vu8hhkwMSoq27fD7Ni8c1d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSZKWjkCW4cvpCAdfwSqEC
          claim_id: c_TU1w4Fd7AEtaQYmgxpoXt3
          source_id: s_iagFQE8HjUgLuE37H8AVgT
          stance: supports
          locator: CBDB:639256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639256）
          source: &a1
            id: s_iagFQE8HjUgLuE37H8AVgT
            source_type: api_record
            title: 中国历代人物传记资料库：王濬章（CBDB 639256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639256&o=json
            external_identifier: CBDB:639256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JvQ3DXB2TSzVKfC5KvjwkA
        subject_person_id: p_vu8hhkwMSoq27fD7Ni8c1d
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
        - id: cs_G4M7o7jLBD8RVnaK8KLrQr
          claim_id: c_JvQ3DXB2TSzVKfC5KvjwkA
          source_id: s_iagFQE8HjUgLuE37H8AVgT
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

# 王濬章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濬章（CBDB 639256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639256&o=json)
