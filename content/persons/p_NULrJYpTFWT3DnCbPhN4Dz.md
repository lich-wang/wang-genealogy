---
schema: wang-person/v1
id: p_NULrJYpTFWT3DnCbPhN4Dz
status: active
merged_into: null
display_name: 王玄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U1Ng7TBchQSXyN6ATHsuo2
        subject_person_id: p_NULrJYpTFWT3DnCbPhN4Dz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9BSC2VCp9dQ2MZG7ZtRgAe
          claim_id: c_U1Ng7TBchQSXyN6ATHsuo2
          source_id: s_oRMo8ocAxy5vU7hgqGPq3E
          stance: supports
          locator: CBDB:217537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217537）
          source: &a1
            id: s_oRMo8ocAxy5vU7hgqGPq3E
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 217537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217537&o=json
            external_identifier: CBDB:217537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AznK3zh6cYytDLLsCruPcB
        subject_person_id: p_NULrJYpTFWT3DnCbPhN4Dz
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
        - id: cs_nn2hMTWP2a3xgJPDY7tJ34
          claim_id: c_AznK3zh6cYytDLLsCruPcB
          source_id: s_oRMo8ocAxy5vU7hgqGPq3E
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

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 217537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217537&o=json)
