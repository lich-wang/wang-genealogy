---
schema: wang-person/v1
id: p_HARAeiLDqvBkJMRhVjQH6B
status: active
merged_into: null
display_name: 王汝恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HVsjHGpfMHg9xT9Cd2vbJg
        subject_person_id: p_HARAeiLDqvBkJMRhVjQH6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PP8BhyG8kAQCczAcCtB53G
          claim_id: c_HVsjHGpfMHg9xT9Cd2vbJg
          source_id: s_CU5Ftt7GHbWc1qMz6AKW6S
          stance: supports
          locator: CBDB:639010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639010）
          source: &a1
            id: s_CU5Ftt7GHbWc1qMz6AKW6S
            source_type: api_record
            title: 中国历代人物传记资料库：王汝恂（CBDB 639010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639010&o=json
            external_identifier: CBDB:639010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CECTQEW2NxgiQmTJWdzT6n
        subject_person_id: p_HARAeiLDqvBkJMRhVjQH6B
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
        - id: cs_HXTAgm3mCoXaAdrgAZoS87
          claim_id: c_CECTQEW2NxgiQmTJWdzT6n
          source_id: s_CU5Ftt7GHbWc1qMz6AKW6S
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

# 王汝恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝恂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝恂（CBDB 639010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639010&o=json)
