---
schema: wang-person/v1
id: p_jbtFwFATB8GPKTuXmWq1nf
status: active
merged_into: null
display_name: 王夢奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w7ri4hJqSCVoTrdCUurEgq
        subject_person_id: p_jbtFwFATB8GPKTuXmWq1nf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrEbdaEmZR59NMd51VRcpT
          claim_id: c_w7ri4hJqSCVoTrdCUurEgq
          source_id: s_LJyj4x3fQydhJzNisyZRLU
          stance: supports
          locator: CBDB:636863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636863）
          source: &a1
            id: s_LJyj4x3fQydhJzNisyZRLU
            source_type: api_record
            title: 中国历代人物传记资料库：王夢奎（CBDB 636863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636863&o=json
            external_identifier: CBDB:636863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1gVF8Du885HKu2QFM4Lraa
        subject_person_id: p_jbtFwFATB8GPKTuXmWq1nf
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
        - id: cs_2MpUFTFy4eYDyWQXGrKXqh
          claim_id: c_1gVF8Du885HKu2QFM4Lraa
          source_id: s_LJyj4x3fQydhJzNisyZRLU
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

# 王夢奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢奎 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢奎（CBDB 636863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636863&o=json)
