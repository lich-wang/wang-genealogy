---
schema: wang-person/v1
id: p_Dq57ob6acmoL7bDj2k7d3c
status: active
merged_into: null
display_name: 王坦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xCxH591PYVP1rT5tiGEYSA
        subject_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9N7H5gCA4S7qMjpPo3T2qK
          claim_id: c_xCxH591PYVP1rT5tiGEYSA
          source_id: s_9dLFKnzaALhs2zacXCYFoq
          stance: supports
          locator: CBDB:240576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240576）
          source: &a1
            id: s_9dLFKnzaALhs2zacXCYFoq
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 240576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json
            external_identifier: CBDB:240576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lzpn2Nxo7e3hG1aMSDrXhQ
        subject_person_id: p_Dq57ob6acmoL7bDj2k7d3c
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
        - id: cs_CVfSGupgJC86L6wHgVpKYG
          claim_id: c_Lzpn2Nxo7e3hG1aMSDrXhQ
          source_id: s_9dLFKnzaALhs2zacXCYFoq
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

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 240576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json)
