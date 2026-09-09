---
schema: wang-person/v1
id: p_JVNcLDPF33J9xg9zC1jeJ3
status: active
merged_into: null
display_name: 王勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f9F53EM3FKH72TYZiu33qr
        subject_person_id: p_JVNcLDPF33J9xg9zC1jeJ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_38w4TXjbvdD9Kbm8CSFo6B
          claim_id: c_f9F53EM3FKH72TYZiu33qr
          source_id: s_xz6XjSEgdVixGZmcgx5EKK
          stance: supports
          locator: CBDB:576152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576152）
          source: &a1
            id: s_xz6XjSEgdVixGZmcgx5EKK
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 576152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576152&o=json
            external_identifier: CBDB:576152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_swmqjrmJ4ARaNKEidFQt72
        subject_person_id: p_JVNcLDPF33J9xg9zC1jeJ3
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
        - id: cs_7WCvZXRQ3VEow2UyoiBUK9
          claim_id: c_swmqjrmJ4ARaNKEidFQt72
          source_id: s_xz6XjSEgdVixGZmcgx5EKK
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

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勳（CBDB 576152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576152&o=json)
