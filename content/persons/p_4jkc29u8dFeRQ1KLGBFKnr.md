---
schema: wang-person/v1
id: p_4jkc29u8dFeRQ1KLGBFKnr
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ycTYWm7AG6FZjrKv9KGf4
        subject_person_id: p_4jkc29u8dFeRQ1KLGBFKnr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1CeDxriUypDqE5v72gApDM
          claim_id: c_8ycTYWm7AG6FZjrKv9KGf4
          source_id: s_zMbN23VH3B5999ETcymypQ
          stance: supports
          locator: CBDB:508112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508112）
          source: &a1
            id: s_zMbN23VH3B5999ETcymypQ
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 508112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508112&o=json
            external_identifier: CBDB:508112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7Gn4RcdnRo8JAwcoGpQFw
        subject_person_id: p_4jkc29u8dFeRQ1KLGBFKnr
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
        - id: cs_q4Ut9z8BkJLQVL1Bpy8Qh1
          claim_id: c_B7Gn4RcdnRo8JAwcoGpQFw
          source_id: s_zMbN23VH3B5999ETcymypQ
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 508112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508112&o=json)
