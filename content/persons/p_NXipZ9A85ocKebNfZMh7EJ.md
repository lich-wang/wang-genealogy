---
schema: wang-person/v1
id: p_NXipZ9A85ocKebNfZMh7EJ
status: active
merged_into: null
display_name: 王式
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9RfKAtE3GN512fy6gMSPtV
        subject_person_id: p_NXipZ9A85ocKebNfZMh7EJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7nh9BmKSY33ZFvBFFHs1bu
          claim_id: c_9RfKAtE3GN512fy6gMSPtV
          source_id: s_c4HTD7MyQZuV6wSc8Ft4X4
          stance: supports
          locator: CBDB:38709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38709）
          source: &a1
            id: s_c4HTD7MyQZuV6wSc8Ft4X4
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 38709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38709&o=json
            external_identifier: CBDB:38709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hFpJFvMr5tsXjkY1d1mB7V
        subject_person_id: p_NXipZ9A85ocKebNfZMh7EJ
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
        - id: cs_VqAyJJEEfdGvxE2MEaJLVS
          claim_id: c_hFpJFvMr5tsXjkY1d1mB7V
          source_id: s_c4HTD7MyQZuV6wSc8Ft4X4
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

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式（CBDB 38709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38709&o=json)
