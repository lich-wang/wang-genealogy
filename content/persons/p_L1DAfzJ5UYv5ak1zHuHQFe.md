---
schema: wang-person/v1
id: p_L1DAfzJ5UYv5ak1zHuHQFe
status: active
merged_into: null
display_name: 王應魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gB4qeehTMNBTMTrdaTtsqy
        subject_person_id: p_L1DAfzJ5UYv5ak1zHuHQFe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6cAe1Tb2NnCvkuuctcCyE
          claim_id: c_gB4qeehTMNBTMTrdaTtsqy
          source_id: s_MF813LoDgtyYmg7bqwG111
          stance: supports
          locator: CBDB:495314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495314）
          source: &a1
            id: s_MF813LoDgtyYmg7bqwG111
            source_type: api_record
            title: 中国历代人物传记资料库：王應魁（CBDB 495314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495314&o=json
            external_identifier: CBDB:495314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VXk6KnY5qjnZN18voMH9pK
        subject_person_id: p_L1DAfzJ5UYv5ak1zHuHQFe
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
        - id: cs_FqhAWc6zgoQupCsUxiDNSg
          claim_id: c_VXk6KnY5qjnZN18voMH9pK
          source_id: s_MF813LoDgtyYmg7bqwG111
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

# 王應魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應魁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應魁（CBDB 495314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495314&o=json)
