---
schema: wang-person/v1
id: p_KTP9LKNrBNUaEA7gpzsZG3
status: active
merged_into: null
display_name: 王覺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCktiMtH9E99GQoXsUpEw1
        subject_person_id: p_KTP9LKNrBNUaEA7gpzsZG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RhfakGYnrgH6tt59dKWBTm
          claim_id: c_NCktiMtH9E99GQoXsUpEw1
          source_id: s_h4iZmouE4FBk568U2hCCyo
          stance: supports
          locator: CBDB:1790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1790）
          source: &a1
            id: s_h4iZmouE4FBk568U2hCCyo
            source_type: api_record
            title: 中国历代人物传记资料库：王覺（CBDB 1790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1790&o=json
            external_identifier: CBDB:1790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ZivU87ZJYv5FhU6W1TaGm
        subject_person_id: p_KTP9LKNrBNUaEA7gpzsZG3
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
        - id: cs_v53cKQJkqwUPrtQqAaXkpX
          claim_id: c_3ZivU87ZJYv5FhU6W1TaGm
          source_id: s_h4iZmouE4FBk568U2hCCyo
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

# 王覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王覺（CBDB 1790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1790&o=json)
