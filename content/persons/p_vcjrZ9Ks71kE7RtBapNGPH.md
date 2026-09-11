---
schema: wang-person/v1
id: p_vcjrZ9Ks71kE7RtBapNGPH
status: active
merged_into: null
display_name: 王憲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5JRnWKw4mawjXS9MGE9nF
        subject_person_id: p_vcjrZ9Ks71kE7RtBapNGPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q8dPciswxD9LtdXbVdUTY7
          claim_id: c_N5JRnWKw4mawjXS9MGE9nF
          source_id: s_a2Q6WqVw8Q3r3LFMjjzbwK
          stance: supports
          locator: CBDB:143671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143671）
          source: &a1
            id: s_a2Q6WqVw8Q3r3LFMjjzbwK
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 143671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143671&o=json
            external_identifier: CBDB:143671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBp8tDPq3txEiJEiaQaL4a
        subject_person_id: p_vcjrZ9Ks71kE7RtBapNGPH
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
        - id: cs_GQgynpQMUBdyjqQMPRsk98
          claim_id: c_QBp8tDPq3txEiJEiaQaL4a
          source_id: s_a2Q6WqVw8Q3r3LFMjjzbwK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xoWTn4ZqFnZO9MgsGDnQ6M
        subject_person_id: p_1ZQNj9UetFrNMUhBwLXRAr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vcjrZ9Ks71kE7RtBapNGPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bor4QwC29S4r76b-GtBzvZ
          claim_id: c_xoWTn4ZqFnZO9MgsGDnQ6M
          source_id: s_o7UfZgU85E7DAW3oDk3AYk
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianning2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o7UfZgU85E7DAW3oDk3AYk
            source_type: api_record
            title: 中国历代人物传记资料库：王俌（CBDB 168901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168901&o=json
            external_identifier: CBDB:168901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ZQNj9UetFrNMUhBwLXRAr
        status: active
        display_name: 王俌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1ZQNj9UetFrNMUhBwLXRAr | 王俌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俌（CBDB 168901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168901&o=json)
- [中国历代人物传记资料库：王憲（CBDB 143671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143671&o=json)
