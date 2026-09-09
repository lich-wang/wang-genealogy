---
schema: wang-person/v1
id: p_d7bfyPkHUkHBEx6iSWWme6
status: active
merged_into: null
display_name: 王沇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cec5L4tFJyY3KaVRp7bAQg
        subject_person_id: p_d7bfyPkHUkHBEx6iSWWme6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bZjKV71voqeYHae56AHTMG
          claim_id: c_Cec5L4tFJyY3KaVRp7bAQg
          source_id: s_6q5NJ9wdd2GJodrysv32GZ
          stance: supports
          locator: CBDB:35728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35728）
          source: &a1
            id: s_6q5NJ9wdd2GJodrysv32GZ
            source_type: api_record
            title: 中国历代人物传记资料库：王沇（CBDB 35728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35728&o=json
            external_identifier: CBDB:35728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zEmzG6FoRpzoAndKQyrM1Q
        subject_person_id: p_d7bfyPkHUkHBEx6iSWWme6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5NJRdpAXp1h8FWnHLB7GEh
          claim_id: c_zEmzG6FoRpzoAndKQyrM1Q
          source_id: s_6q5NJ9wdd2GJodrysv32GZ
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

# 王沇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沇（CBDB 35728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35728&o=json)
