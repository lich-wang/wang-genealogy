---
schema: wang-person/v1
id: p_EQwLB4yqg11ub45S2FsNtW
status: active
merged_into: null
display_name: 王鏜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5KdxSDVBkZRvP9UJTq5iaq
        subject_person_id: p_EQwLB4yqg11ub45S2FsNtW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wtg5qgZaMJco6Tke7GCn9F
          claim_id: c_5KdxSDVBkZRvP9UJTq5iaq
          source_id: s_937YDr9HVvBTMsq9a9EuZa
          stance: supports
          locator: CBDB:13039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13039）
          source: &a1
            id: s_937YDr9HVvBTMsq9a9EuZa
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 13039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13039&o=json
            external_identifier: CBDB:13039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YAqMtNeL4rGFdC9DvEcDJh
        subject_person_id: p_EQwLB4yqg11ub45S2FsNtW
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
        - id: cs_Lh11pquREAHTqXCL8KMUCz
          claim_id: c_YAqMtNeL4rGFdC9DvEcDJh
          source_id: s_937YDr9HVvBTMsq9a9EuZa
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

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏜（CBDB 13039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13039&o=json)
