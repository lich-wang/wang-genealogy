---
schema: wang-person/v1
id: p_TRuC8ss6q1afeVoCeLNV9g
status: active
merged_into: null
display_name: 王濬川
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ySQ5sV1KLtgGapQHLHqSR
        subject_person_id: p_TRuC8ss6q1afeVoCeLNV9g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬川
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EZ7GF63GbtDxEGRSWMZCyH
          claim_id: c_9ySQ5sV1KLtgGapQHLHqSR
          source_id: s_dHG7UMGEAeT2iU6Pzn7JwV
          stance: supports
          locator: CBDB:639254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639254）
          source: &a1
            id: s_dHG7UMGEAeT2iU6Pzn7JwV
            source_type: api_record
            title: 中国历代人物传记资料库：王濬川（CBDB 639254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639254&o=json
            external_identifier: CBDB:639254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AMg6FKRyUHoS8q4NJ8ofpG
        subject_person_id: p_TRuC8ss6q1afeVoCeLNV9g
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
        - id: cs_m4v2PHNEQ5o2fZfs6pkXv1
          claim_id: c_AMg6FKRyUHoS8q4NJ8ofpG
          source_id: s_dHG7UMGEAeT2iU6Pzn7JwV
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

# 王濬川

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬川 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濬川（CBDB 639254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639254&o=json)
