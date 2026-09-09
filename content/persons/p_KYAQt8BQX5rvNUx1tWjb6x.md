---
schema: wang-person/v1
id: p_KYAQt8BQX5rvNUx1tWjb6x
status: active
merged_into: null
display_name: 王志道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CyeiCBqhdgJLLamfk3QhL8
        subject_person_id: p_KYAQt8BQX5rvNUx1tWjb6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8mTT7a6bAfBD1WmZ9a6Gs
          claim_id: c_CyeiCBqhdgJLLamfk3QhL8
          source_id: s_CYYHz3eBQaqKvzkLV6USKx
          stance: supports
          locator: CBDB:239292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239292）
          source: &a1
            id: s_CYYHz3eBQaqKvzkLV6USKx
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 239292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239292&o=json
            external_identifier: CBDB:239292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UwQbQPuD6sgBau9MJ85CeB
        subject_person_id: p_KYAQt8BQX5rvNUx1tWjb6x
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
        - id: cs_eJXWvtXVAqk1WLxH5MuKYr
          claim_id: c_UwQbQPuD6sgBau9MJ85CeB
          source_id: s_CYYHz3eBQaqKvzkLV6USKx
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

# 王志道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志道（CBDB 239292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239292&o=json)
