---
schema: wang-person/v1
id: p_Bz2mMjFV57fEsHQykHe2yz
status: active
merged_into: null
display_name: 王翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7VM3bdcJ6cg9N4UHNpR4GL
        subject_person_id: p_Bz2mMjFV57fEsHQykHe2yz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DL74XWWupEE21m9i1eb3VN
          claim_id: c_7VM3bdcJ6cg9N4UHNpR4GL
          source_id: s_zGDYwbZ5LZosFQTS8aqHAb
          stance: supports
          locator: CBDB:30035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30035）
          source: &a1
            id: s_zGDYwbZ5LZosFQTS8aqHAb
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 30035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30035&o=json
            external_identifier: CBDB:30035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6gkKZbAoUENA3d7romhNKH
        subject_person_id: p_Bz2mMjFV57fEsHQykHe2yz
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
        - id: cs_dD6Xw4VyuooUFS9P2UfUdk
          claim_id: c_6gkKZbAoUENA3d7romhNKH
          source_id: s_zGDYwbZ5LZosFQTS8aqHAb
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

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翔（CBDB 30035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30035&o=json)
