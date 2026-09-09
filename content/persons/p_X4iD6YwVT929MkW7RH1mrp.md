---
schema: wang-person/v1
id: p_X4iD6YwVT929MkW7RH1mrp
status: active
merged_into: null
display_name: 王積
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XH7igAyRngCpZ8aMDJ2sY6
        subject_person_id: p_X4iD6YwVT929MkW7RH1mrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3kNqtt7Papd5Xag4stZyLa
          claim_id: c_XH7igAyRngCpZ8aMDJ2sY6
          source_id: s_3HXLCAr79baHVqFx3qUfwJ
          stance: supports
          locator: CBDB:465022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465022）
          source: &a1
            id: s_3HXLCAr79baHVqFx3qUfwJ
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 465022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465022&o=json
            external_identifier: CBDB:465022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sqRr8qGPEMunMXNmu7c6GB
        subject_person_id: p_X4iD6YwVT929MkW7RH1mrp
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
        - id: cs_WM37U322UWoJns5y4nC5NQ
          claim_id: c_sqRr8qGPEMunMXNmu7c6GB
          source_id: s_3HXLCAr79baHVqFx3qUfwJ
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

# 王積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積（CBDB 465022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465022&o=json)
