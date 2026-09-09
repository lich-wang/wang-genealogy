---
schema: wang-person/v1
id: p_jL1BJG4zmYLg9vKw7g5QDo
status: active
merged_into: null
display_name: 王公大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ievGKVkiUG1ENPvsMb2aq4
        subject_person_id: p_jL1BJG4zmYLg9vKw7g5QDo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wu2VHYTqk9ucy7EbEiV1B6
          claim_id: c_ievGKVkiUG1ENPvsMb2aq4
          source_id: s_ucPX9qdFFXiLRgB9GqqNyL
          stance: supports
          locator: CBDB:543448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543448）
          source: &a1
            id: s_ucPX9qdFFXiLRgB9GqqNyL
            source_type: api_record
            title: 中国历代人物传记资料库：王公大（CBDB 543448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543448&o=json
            external_identifier: CBDB:543448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3MfpyGxw3q5qDVawcfpqPA
        subject_person_id: p_jL1BJG4zmYLg9vKw7g5QDo
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
        - id: cs_5MFLV6YMTjT6LrXmpty5WM
          claim_id: c_3MfpyGxw3q5qDVawcfpqPA
          source_id: s_ucPX9qdFFXiLRgB9GqqNyL
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

# 王公大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公大 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公大（CBDB 543448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543448&o=json)
