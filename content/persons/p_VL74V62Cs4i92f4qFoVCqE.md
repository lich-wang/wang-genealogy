---
schema: wang-person/v1
id: p_VL74V62Cs4i92f4qFoVCqE
status: active
merged_into: null
display_name: 王宣迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9NcLBoYAcLfU5Qj8Atgrwp
        subject_person_id: p_VL74V62Cs4i92f4qFoVCqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q9RqhmqRaPgZPzKavL1VP6
          claim_id: c_9NcLBoYAcLfU5Qj8Atgrwp
          source_id: s_tY4rgQt1KRHx3X5DAGyCxh
          stance: supports
          locator: CBDB:637153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637153）
          source: &a1
            id: s_tY4rgQt1KRHx3X5DAGyCxh
            source_type: api_record
            title: 中国历代人物传记资料库：王宣迪（CBDB 637153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637153&o=json
            external_identifier: CBDB:637153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GW12mwtpZfqmP5vRoKUGNK
        subject_person_id: p_VL74V62Cs4i92f4qFoVCqE
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
        - id: cs_NrqGP9d5gaHbNjBy4E6WyN
          claim_id: c_GW12mwtpZfqmP5vRoKUGNK
          source_id: s_tY4rgQt1KRHx3X5DAGyCxh
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

# 王宣迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣迪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣迪（CBDB 637153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637153&o=json)
