---
schema: wang-person/v1
id: p_HCpgr1W9LMF6eGEBW7wXTQ
status: active
merged_into: null
display_name: 王以誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fDDm4mwoPj4mRi4Nf7NRRY
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B41PyrNEJuY1c1FiF7YPXp
          claim_id: c_fDDm4mwoPj4mRi4Nf7NRRY
          source_id: s_3UtS8V5r76AcbZMg6fHVhu
          stance: supports
          locator: CBDB:244952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244952）
          source: &a1
            id: s_3UtS8V5r76AcbZMg6fHVhu
            source_type: api_record
            title: 中国历代人物传记资料库：王以誠（CBDB 244952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244952&o=json
            external_identifier: CBDB:244952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J87PjwNzDAy92DMkQitx6m
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
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
        - id: cs_kaM5hBE7WPt6qZSUB7eC1D
          claim_id: c_J87PjwNzDAy92DMkQitx6m
          source_id: s_3UtS8V5r76AcbZMg6fHVhu
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

# 王以誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以誠（CBDB 244952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244952&o=json)
