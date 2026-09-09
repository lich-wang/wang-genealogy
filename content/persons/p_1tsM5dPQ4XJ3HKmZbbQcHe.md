---
schema: wang-person/v1
id: p_1tsM5dPQ4XJ3HKmZbbQcHe
status: active
merged_into: null
display_name: 王步瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ae9Czq4PvMH1U1aBpw9sHt
        subject_person_id: p_1tsM5dPQ4XJ3HKmZbbQcHe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王步瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQfP6N46me3LMam8sBgDhX
          claim_id: c_Ae9Czq4PvMH1U1aBpw9sHt
          source_id: s_YrG7qr9JPVHYSCeTDav2qJ
          stance: supports
          locator: CBDB:500978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500978）
          source: &a1
            id: s_YrG7qr9JPVHYSCeTDav2qJ
            source_type: api_record
            title: 中国历代人物传记资料库：王步瀛（CBDB 500978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500978&o=json
            external_identifier: CBDB:500978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MiBHvvL3zBBcW1DzVqLJ7H
        subject_person_id: p_1tsM5dPQ4XJ3HKmZbbQcHe
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
        - id: cs_iLhdT98LtrAQDQT2F5Cr9q
          claim_id: c_MiBHvvL3zBBcW1DzVqLJ7H
          source_id: s_YrG7qr9JPVHYSCeTDav2qJ
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

# 王步瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王步瀛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王步瀛（CBDB 500978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500978&o=json)
