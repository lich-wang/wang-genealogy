---
schema: wang-person/v1
id: p_bEhUs5G7uQa5q3MEdDyJ9W
status: active
merged_into: null
display_name: 王鉉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bnhHoWYqrT6krEjZX9KTB
        subject_person_id: p_bEhUs5G7uQa5q3MEdDyJ9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3fn1fydvygW5VjLXiewT6D
          claim_id: c_7bnhHoWYqrT6krEjZX9KTB
          source_id: s_5CgNGr4zVgxqT875npF2Sy
          stance: supports
          locator: CBDB:92065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92065）
          source: &a1
            id: s_5CgNGr4zVgxqT875npF2Sy
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 92065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92065&o=json
            external_identifier: CBDB:92065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HNqNcma7HTHmLnVx3c3oXW
        subject_person_id: p_bEhUs5G7uQa5q3MEdDyJ9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b3F8L3PKPkqi4H4DCxamNv
          claim_id: c_HNqNcma7HTHmLnVx3c3oXW
          source_id: s_5CgNGr4zVgxqT875npF2Sy
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

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 92065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92065&o=json)
