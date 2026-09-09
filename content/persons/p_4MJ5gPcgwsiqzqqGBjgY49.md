---
schema: wang-person/v1
id: p_4MJ5gPcgwsiqzqqGBjgY49
status: active
merged_into: null
display_name: 王汾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wwF9q1gzvzPLdFkY7vMLWi
        subject_person_id: p_4MJ5gPcgwsiqzqqGBjgY49
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yJq63XWETrziBFynLx4GEK
          claim_id: c_wwF9q1gzvzPLdFkY7vMLWi
          source_id: s_VVnHZ6rN52n9ARbbKzZgUo
          stance: supports
          locator: CBDB:492753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492753）
          source: &a1
            id: s_VVnHZ6rN52n9ARbbKzZgUo
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 492753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492753&o=json
            external_identifier: CBDB:492753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cKzy642bFTqG6amE8vQzsV
        subject_person_id: p_4MJ5gPcgwsiqzqqGBjgY49
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
        - id: cs_7RYun3S16EWDPhxYGjjgBi
          claim_id: c_cKzy642bFTqG6amE8vQzsV
          source_id: s_VVnHZ6rN52n9ARbbKzZgUo
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

# 王汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 492753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492753&o=json)
