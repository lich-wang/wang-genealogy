---
schema: wang-person/v1
id: p_hi7DLX9gddEU32Jv4AB43d
status: active
merged_into: null
display_name: 王維翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qec1qMJK7BBiPLZoye4H4P
        subject_person_id: p_hi7DLX9gddEU32Jv4AB43d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fR8rz4f4ZDnYwCX5NcN7sL
          claim_id: c_qec1qMJK7BBiPLZoye4H4P
          source_id: s_J3wQYUkH8tNvGLWLgBnCNe
          stance: supports
          locator: CBDB:121040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121040）
          source: &a1
            id: s_J3wQYUkH8tNvGLWLgBnCNe
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 121040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121040&o=json
            external_identifier: CBDB:121040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TJJ4XiNxPuamVDQEmVnjoQ
        subject_person_id: p_hi7DLX9gddEU32Jv4AB43d
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
        - id: cs_HDVVuYW98SuSCakx2XPSFV
          claim_id: c_TJJ4XiNxPuamVDQEmVnjoQ
          source_id: s_J3wQYUkH8tNvGLWLgBnCNe
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

# 王維翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維翰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維翰（CBDB 121040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121040&o=json)
