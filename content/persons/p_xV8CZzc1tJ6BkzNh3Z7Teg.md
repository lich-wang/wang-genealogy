---
schema: wang-person/v1
id: p_xV8CZzc1tJ6BkzNh3Z7Teg
status: active
merged_into: null
display_name: 王樸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CsG3dzkwYVBH3gXuf6yts6
        subject_person_id: p_xV8CZzc1tJ6BkzNh3Z7Teg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b23s5BRvQdMBzP4Adb3SM4
          claim_id: c_CsG3dzkwYVBH3gXuf6yts6
          source_id: s_2B82zQ4FsABxrv4rkBsCDp
          stance: supports
          locator: CBDB:325328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325328）
          source: &a1
            id: s_2B82zQ4FsABxrv4rkBsCDp
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 325328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325328&o=json
            external_identifier: CBDB:325328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8bSAtMdPiGixhA3niRnX5d
        subject_person_id: p_xV8CZzc1tJ6BkzNh3Z7Teg
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
        - id: cs_4ni7EuVQXa3DwQ2a4KDtht
          claim_id: c_8bSAtMdPiGixhA3niRnX5d
          source_id: s_2B82zQ4FsABxrv4rkBsCDp
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

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 325328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325328&o=json)
