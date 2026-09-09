---
schema: wang-person/v1
id: p_sQm8vRe6yfwU4PQxcEpNLQ
status: active
merged_into: null
display_name: 王杞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_75XPEiX4636Gk4Wjs9Rk11
        subject_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R86CUhjMLnhHchWj6Awo4K
          claim_id: c_75XPEiX4636Gk4Wjs9Rk11
          source_id: s_TvAMF8rtteHFMRhgf14Mjo
          stance: supports
          locator: CBDB:271107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271107）
          source: &a1
            id: s_TvAMF8rtteHFMRhgf14Mjo
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 271107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json
            external_identifier: CBDB:271107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MNK4BDf59go1d5S4vUA7A
        subject_person_id: p_sQm8vRe6yfwU4PQxcEpNLQ
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
        - id: cs_t9ws8M5yQGNWJ92bL9BGAr
          claim_id: c_7MNK4BDf59go1d5S4vUA7A
          source_id: s_TvAMF8rtteHFMRhgf14Mjo
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

# 王杞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杞（CBDB 271107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271107&o=json)
