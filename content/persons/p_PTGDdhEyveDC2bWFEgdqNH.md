---
schema: wang-person/v1
id: p_PTGDdhEyveDC2bWFEgdqNH
status: active
merged_into: null
display_name: 王紹曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6j6ESsH9u5Q8ECR3R8Yh2V
        subject_person_id: p_PTGDdhEyveDC2bWFEgdqNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ky6poHaZUboDLVYdEEcNWc
          claim_id: c_6j6ESsH9u5Q8ECR3R8Yh2V
          source_id: s_qsR2fKoFR2WykJCNH3ZWgs
          stance: supports
          locator: CBDB:342434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342434）
          source: &a1
            id: s_qsR2fKoFR2WykJCNH3ZWgs
            source_type: api_record
            title: 中国历代人物传记资料库：王紹曾（CBDB 342434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342434&o=json
            external_identifier: CBDB:342434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cw1EaUP2yLnnzHNGF2DYhL
        subject_person_id: p_PTGDdhEyveDC2bWFEgdqNH
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
        - id: cs_MkxgmbDsRXb4MLKi1KDTGR
          claim_id: c_cw1EaUP2yLnnzHNGF2DYhL
          source_id: s_qsR2fKoFR2WykJCNH3ZWgs
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

# 王紹曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹曾（CBDB 342434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342434&o=json)
