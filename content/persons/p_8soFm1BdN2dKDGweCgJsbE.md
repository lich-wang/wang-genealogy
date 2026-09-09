---
schema: wang-person/v1
id: p_8soFm1BdN2dKDGweCgJsbE
status: active
merged_into: null
display_name: 王牧民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7VeKDdb9hhGcg5P8pq8cTf
        subject_person_id: p_8soFm1BdN2dKDGweCgJsbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T2rA9521gGzZZ6i7bvQNLX
          claim_id: c_7VeKDdb9hhGcg5P8pq8cTf
          source_id: s_JpJbp7KR7Xv6aMxqxPqjZc
          stance: supports
          locator: CBDB:452996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452996）
          source: &a1
            id: s_JpJbp7KR7Xv6aMxqxPqjZc
            source_type: api_record
            title: 中国历代人物传记资料库：王牧民（CBDB 452996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452996&o=json
            external_identifier: CBDB:452996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vGwXg5xkuusvYTVb9UdTF8
        subject_person_id: p_8soFm1BdN2dKDGweCgJsbE
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
        - id: cs_y3iV172PZuMuLFrUfjLd6G
          claim_id: c_vGwXg5xkuusvYTVb9UdTF8
          source_id: s_JpJbp7KR7Xv6aMxqxPqjZc
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

# 王牧民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牧民 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王牧民（CBDB 452996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452996&o=json)
