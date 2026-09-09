---
schema: wang-person/v1
id: p_BroEaCk966KE49qxjRQzDZ
status: active
merged_into: null
display_name: 王檀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ACW5myZFK1qxkvnKKCr5iW
        subject_person_id: p_BroEaCk966KE49qxjRQzDZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S8iuQEpQPPyT8hXj9CGUWC
          claim_id: c_ACW5myZFK1qxkvnKKCr5iW
          source_id: s_LNMBwM5EN9GJ5VrKuFCcZq
          stance: supports
          locator: CBDB:509173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509173）
          source: &a1
            id: s_LNMBwM5EN9GJ5VrKuFCcZq
            source_type: api_record
            title: 中国历代人物传记资料库：王檀（CBDB 509173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509173&o=json
            external_identifier: CBDB:509173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EF4XMRAKNZrTAZDdXZqgk
        subject_person_id: p_BroEaCk966KE49qxjRQzDZ
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
        - id: cs_QcBmC6BWN1RYeyETJt6o86
          claim_id: c_7EF4XMRAKNZrTAZDdXZqgk
          source_id: s_LNMBwM5EN9GJ5VrKuFCcZq
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

# 王檀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檀（CBDB 509173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509173&o=json)
