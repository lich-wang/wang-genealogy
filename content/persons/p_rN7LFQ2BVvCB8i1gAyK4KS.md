---
schema: wang-person/v1
id: p_rN7LFQ2BVvCB8i1gAyK4KS
status: active
merged_into: null
display_name: 王錫鹵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jM7k3MgxNcaFVqMDDyaLfQ
        subject_person_id: p_rN7LFQ2BVvCB8i1gAyK4KS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫鹵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Etg8WdZsSUYc3xyzRjwkyC
          claim_id: c_jM7k3MgxNcaFVqMDDyaLfQ
          source_id: s_ow5J6dEZPN7TLC7KL9BBm7
          stance: supports
          locator: CBDB:640658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640658）
          source: &a1
            id: s_ow5J6dEZPN7TLC7KL9BBm7
            source_type: api_record
            title: 中国历代人物传记资料库：王錫鹵（CBDB 640658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640658&o=json
            external_identifier: CBDB:640658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yXhHFy58Z1QYDQGqfTC4R5
        subject_person_id: p_rN7LFQ2BVvCB8i1gAyK4KS
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
        - id: cs_wgsVowS83TUpToj4j8NyMj
          claim_id: c_yXhHFy58Z1QYDQGqfTC4R5
          source_id: s_ow5J6dEZPN7TLC7KL9BBm7
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

# 王錫鹵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫鹵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫鹵（CBDB 640658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640658&o=json)
