---
schema: wang-person/v1
id: p_N3RxAdDD4ZeD1FyLrvsUGg
status: active
merged_into: null
display_name: 王光紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gd6E42GKQWtXR9TLPJ8ixT
        subject_person_id: p_N3RxAdDD4ZeD1FyLrvsUGg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LQ2miH78ndr6puEsy1wCac
          claim_id: c_gd6E42GKQWtXR9TLPJ8ixT
          source_id: s_nStRWSp9cHtJ8GDzu7ksrv
          stance: supports
          locator: CBDB:636274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636274）
          source: &a1
            id: s_nStRWSp9cHtJ8GDzu7ksrv
            source_type: api_record
            title: 中国历代人物传记资料库：王光紹（CBDB 636274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636274&o=json
            external_identifier: CBDB:636274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eSs1Bq5k61v2kRQfbQJgnL
        subject_person_id: p_N3RxAdDD4ZeD1FyLrvsUGg
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
        - id: cs_r6Npi3aB4JuFHeth3vuWok
          claim_id: c_eSs1Bq5k61v2kRQfbQJgnL
          source_id: s_nStRWSp9cHtJ8GDzu7ksrv
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

# 王光紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光紹 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光紹（CBDB 636274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636274&o=json)
