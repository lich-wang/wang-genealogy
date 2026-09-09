---
schema: wang-person/v1
id: p_4Zy974Lzqz8TpZW2QVpmsw
status: active
merged_into: null
display_name: 王尚學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BmPGL8jAH7MFBTn3P1pD6T
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HoK6Q1QQyDDaMP89Q8Y7Nz
          claim_id: c_BmPGL8jAH7MFBTn3P1pD6T
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: CBDB:126576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126576）
          source: &a1
            id: s_n2Bush7TsNx4ZZ5zuJLHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 126576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json
            external_identifier: CBDB:126576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGhzqSWhdyud236vvvhT2W
        subject_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
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
        - id: cs_GfFotF9HHJVy68X4LDW6Gm
          claim_id: c_LGhzqSWhdyud236vvvhT2W
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
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

# 王尚學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚學 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚學（CBDB 126576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json)
