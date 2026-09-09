---
schema: wang-person/v1
id: p_d6McBnT8R2vvsBgu15XzJJ
status: active
merged_into: null
display_name: 王思道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gtxfhJSMKMNTynKzeTKJg5
        subject_person_id: p_d6McBnT8R2vvsBgu15XzJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c5sazb8t5ks9zUsKLDcpkF
          claim_id: c_gtxfhJSMKMNTynKzeTKJg5
          source_id: s_j6eJUL24L5jka4297rD6NP
          stance: supports
          locator: CBDB:696582
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696582）
          source: &a1
            id: s_j6eJUL24L5jka4297rD6NP
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 696582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696582&o=json
            external_identifier: CBDB:696582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4w3WaGSi7rCr8f21qLPWag
        subject_person_id: p_d6McBnT8R2vvsBgu15XzJJ
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
        - id: cs_DJzj8LPUbct9eqLFZBwAqY
          claim_id: c_4w3WaGSi7rCr8f21qLPWag
          source_id: s_j6eJUL24L5jka4297rD6NP
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

# 王思道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思道 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思道（CBDB 696582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696582&o=json)
