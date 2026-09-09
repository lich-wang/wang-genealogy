---
schema: wang-person/v1
id: p_NuNTQZExjKcTBss2PH1NRS
status: active
merged_into: null
display_name: 王懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGx15px6Mgfwk5EypPPpRg
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3WzJyhDDGzhHRdk4G3ui3
          claim_id: c_QGx15px6Mgfwk5EypPPpRg
          source_id: s_FoghBmjpWC2s9SbSqsQ6Wo
          stance: supports
          locator: CBDB:284140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284140）
          source: &a1
            id: s_FoghBmjpWC2s9SbSqsQ6Wo
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 284140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284140&o=json
            external_identifier: CBDB:284140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1dAehtq4i8NeckLNqDBrHS
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
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
        - id: cs_bDJDyvQxooS9M18kmnfJvd
          claim_id: c_1dAehtq4i8NeckLNqDBrHS
          source_id: s_FoghBmjpWC2s9SbSqsQ6Wo
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

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 284140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284140&o=json)
