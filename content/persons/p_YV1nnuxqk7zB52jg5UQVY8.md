---
schema: wang-person/v1
id: p_YV1nnuxqk7zB52jg5UQVY8
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cp9QjJ6cN5jSRspX8ftvrQ
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KXoh6f4zCBBXmouezNbsVq
          claim_id: c_cp9QjJ6cN5jSRspX8ftvrQ
          source_id: s_FL8HFyG4E7gkZe9TvHQH9N
          stance: supports
          locator: CBDB:331072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331072）
          source: &a1
            id: s_FL8HFyG4E7gkZe9TvHQH9N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQ8UMPXBau119WhNx14L7b
        subject_person_id: p_YV1nnuxqk7zB52jg5UQVY8
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
        - id: cs_42nHJsPcB2RfYLhd9c9M7y
          claim_id: c_RQ8UMPXBau119WhNx14L7b
          source_id: s_FL8HFyG4E7gkZe9TvHQH9N
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

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 331072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json)
