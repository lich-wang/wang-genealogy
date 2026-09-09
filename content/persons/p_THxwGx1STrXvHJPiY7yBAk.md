---
schema: wang-person/v1
id: p_THxwGx1STrXvHJPiY7yBAk
status: active
merged_into: null
display_name: 王文模
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4Xz9Adj2ZN7VBD15jPdGL
        subject_person_id: p_THxwGx1STrXvHJPiY7yBAk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j36Ydpouuhe7r9uEKiQRKD
          claim_id: c_H4Xz9Adj2ZN7VBD15jPdGL
          source_id: s_Phwg1AMUaXMmFQmYKf2LxL
          stance: supports
          locator: CBDB:638239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638239）
          source: &a1
            id: s_Phwg1AMUaXMmFQmYKf2LxL
            source_type: api_record
            title: 中国历代人物传记资料库：王文模（CBDB 638239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638239&o=json
            external_identifier: CBDB:638239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFyEFbHX7QAqjsckgNEh5F
        subject_person_id: p_THxwGx1STrXvHJPiY7yBAk
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
        - id: cs_JYSf77aL9rvej6gD7RThv1
          claim_id: c_fFyEFbHX7QAqjsckgNEh5F
          source_id: s_Phwg1AMUaXMmFQmYKf2LxL
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

# 王文模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文模 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文模（CBDB 638239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638239&o=json)
