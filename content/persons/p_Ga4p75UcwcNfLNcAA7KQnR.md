---
schema: wang-person/v1
id: p_Ga4p75UcwcNfLNcAA7KQnR
status: active
merged_into: null
display_name: 王毓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d5jqC8FiLgeZ6uTEFX6m4j
        subject_person_id: p_Ga4p75UcwcNfLNcAA7KQnR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BS3pYCY3QL4Jen5c12T6mU
          claim_id: c_d5jqC8FiLgeZ6uTEFX6m4j
          source_id: s_WriB8MmYWwQky2KkY3DzGP
          stance: supports
          locator: CBDB:491866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491866）
          source: &a1
            id: s_WriB8MmYWwQky2KkY3DzGP
            source_type: api_record
            title: 中国历代人物传记资料库：王毓（CBDB 491866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491866&o=json
            external_identifier: CBDB:491866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VNVHf19H19dv4GaSRR5hqY
        subject_person_id: p_Ga4p75UcwcNfLNcAA7KQnR
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
        - id: cs_a7LMxsUXCCPhLRBSJtd9A8
          claim_id: c_VNVHf19H19dv4GaSRR5hqY
          source_id: s_WriB8MmYWwQky2KkY3DzGP
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

# 王毓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓（CBDB 491866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491866&o=json)
