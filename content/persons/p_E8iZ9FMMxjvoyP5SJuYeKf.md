---
schema: wang-person/v1
id: p_E8iZ9FMMxjvoyP5SJuYeKf
status: active
merged_into: null
display_name: 王受
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1QPHupXbo5Hspx6Dr9PAP
        subject_person_id: p_E8iZ9FMMxjvoyP5SJuYeKf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fz1vQvsDeVDDunLMLwoANX
          claim_id: c_w1QPHupXbo5Hspx6Dr9PAP
          source_id: s_N1Bz1KfCQ8YsaEMAxA5RyH
          stance: supports
          locator: CBDB:558091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558091）
          source: &a1
            id: s_N1Bz1KfCQ8YsaEMAxA5RyH
            source_type: api_record
            title: 中国历代人物传记资料库：王受（CBDB 558091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558091&o=json
            external_identifier: CBDB:558091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cLbg13jdAipz9a3AJDDiag
        subject_person_id: p_E8iZ9FMMxjvoyP5SJuYeKf
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
        - id: cs_ciNJKtE8cQgrNp7sD1uaXz
          claim_id: c_cLbg13jdAipz9a3AJDDiag
          source_id: s_N1Bz1KfCQ8YsaEMAxA5RyH
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

# 王受

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王受 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王受（CBDB 558091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558091&o=json)
