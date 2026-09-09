---
schema: wang-person/v1
id: p_6G3g4aW4B8299MpXxRSZUU
status: active
merged_into: null
display_name: 王康濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bGKe8cWHFzFpE8sSYukhC
        subject_person_id: p_6G3g4aW4B8299MpXxRSZUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b44Wdk6EL7CY4HUyCqJVdz
          claim_id: c_3bGKe8cWHFzFpE8sSYukhC
          source_id: s_knuTqKfLeBJhEoP5Ke8apN
          stance: supports
          locator: CBDB:637438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637438）
          source: &a1
            id: s_knuTqKfLeBJhEoP5Ke8apN
            source_type: api_record
            title: 中国历代人物传记资料库：王康濟（CBDB 637438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637438&o=json
            external_identifier: CBDB:637438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U5YUig7TfSP8W7EcxMdGX7
        subject_person_id: p_6G3g4aW4B8299MpXxRSZUU
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
        - id: cs_YU3a5EBCgEkJRyvuhaZ5PL
          claim_id: c_U5YUig7TfSP8W7EcxMdGX7
          source_id: s_knuTqKfLeBJhEoP5Ke8apN
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

# 王康濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康濟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康濟（CBDB 637438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637438&o=json)
