---
schema: wang-person/v1
id: p_PVvP5MEyM8po9SZJd6gWCU
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j6RqKU5JDgQqkNxWw5gmE1
        subject_person_id: p_PVvP5MEyM8po9SZJd6gWCU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KhtXToDpmUjB7FLdU3Ax8D
          claim_id: c_j6RqKU5JDgQqkNxWw5gmE1
          source_id: s_vCgS9RMYUY3p1nuMVHEW4A
          stance: supports
          locator: CBDB:36515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36515）
          source: &a1
            id: s_vCgS9RMYUY3p1nuMVHEW4A
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 36515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36515&o=json
            external_identifier: CBDB:36515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1u6AuaYjPqU7z5hvs4ua5M
        subject_person_id: p_PVvP5MEyM8po9SZJd6gWCU
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
        - id: cs_for4u4ykmBYQQEzSFZpGt5
          claim_id: c_1u6AuaYjPqU7z5hvs4ua5M
          source_id: s_vCgS9RMYUY3p1nuMVHEW4A
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 36515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36515&o=json)
