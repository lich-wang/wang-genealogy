---
schema: wang-person/v1
id: p_nTLoN6epwMhjeHU9EQVmbz
status: active
merged_into: null
display_name: 王大錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDHykVHEtmb32okzNRtBVL
        subject_person_id: p_nTLoN6epwMhjeHU9EQVmbz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47naEJXLSNQLgdw7pD3B8p
          claim_id: c_NDHykVHEtmb32okzNRtBVL
          source_id: s_NZ6ARHZ3mVzo19tzc9mrmX
          stance: supports
          locator: CBDB:636922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636922）
          source: &a1
            id: s_NZ6ARHZ3mVzo19tzc9mrmX
            source_type: api_record
            title: 中国历代人物传记资料库：王大錫（CBDB 636922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636922&o=json
            external_identifier: CBDB:636922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14QRMTVwFchRW8UZ1GE5yv
        subject_person_id: p_nTLoN6epwMhjeHU9EQVmbz
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
        - id: cs_k5RGHFVA8JDZTTLkCTG6uX
          claim_id: c_14QRMTVwFchRW8UZ1GE5yv
          source_id: s_NZ6ARHZ3mVzo19tzc9mrmX
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

# 王大錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大錫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大錫（CBDB 636922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636922&o=json)
