---
schema: wang-person/v1
id: p_TbPcpy9zbzhNKR52f2KxhS
status: active
merged_into: null
display_name: 王佩礦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1DFDn3y8m7xVx8rgFcG3gv
        subject_person_id: p_TbPcpy9zbzhNKR52f2KxhS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩礦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j93DiXXWLpyhiJvUqKuStM
          claim_id: c_1DFDn3y8m7xVx8rgFcG3gv
          source_id: s_HneXt5ScvdSebyuMom3uDU
          stance: supports
          locator: CBDB:636019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636019）
          source: &a1
            id: s_HneXt5ScvdSebyuMom3uDU
            source_type: api_record
            title: 中国历代人物传记资料库：王佩礦（CBDB 636019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636019&o=json
            external_identifier: CBDB:636019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbPfPk116EyYyTDV6PXpYh
        subject_person_id: p_TbPcpy9zbzhNKR52f2KxhS
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
        - id: cs_YFNWjBfRFyD6CEXnLZA1FD
          claim_id: c_DbPfPk116EyYyTDV6PXpYh
          source_id: s_HneXt5ScvdSebyuMom3uDU
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

# 王佩礦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩礦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩礦（CBDB 636019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636019&o=json)
