---
schema: wang-person/v1
id: p_3NjU7eZvopD3jSxgGAoTdh
status: active
merged_into: null
display_name: 王惟善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CssVb3NvzikX79QYhg3WzY
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f2381ZYdRspy2M62EqXiQL
          claim_id: c_CssVb3NvzikX79QYhg3WzY
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
          stance: supports
          locator: CBDB:279786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279786）
          source: &a1
            id: s_BAV4Wu8T2JXpbD7Zqsk4cY
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 279786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json
            external_identifier: CBDB:279786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDj4nyjL2gr8jbD6EAHcFi
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
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
        - id: cs_XA383QtyVWGcxj8AEMXkRW
          claim_id: c_KDj4nyjL2gr8jbD6EAHcFi
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
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

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟善（CBDB 279786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json)
