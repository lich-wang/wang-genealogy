---
schema: wang-person/v1
id: p_NMMew3tV3d8MWx7S2AZMge
status: active
merged_into: null
display_name: 王瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6qCAYtWQXTqVaXoLEY32A
        subject_person_id: p_NMMew3tV3d8MWx7S2AZMge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_17qMs2uEi6wqbaMGJKp3NT
          claim_id: c_b6qCAYtWQXTqVaXoLEY32A
          source_id: s_FFD7A5FAeY5XbDxxW5F858
          stance: supports
          locator: CBDB:556781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556781）
          source: &a1
            id: s_FFD7A5FAeY5XbDxxW5F858
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 556781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556781&o=json
            external_identifier: CBDB:556781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FUeLdLrnRQSfMke4S4U2R
        subject_person_id: p_NMMew3tV3d8MWx7S2AZMge
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
        - id: cs_kp7q9JyEJMR3jEKmtoiS2W
          claim_id: c_9FUeLdLrnRQSfMke4S4U2R
          source_id: s_FFD7A5FAeY5XbDxxW5F858
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

# 王瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀛（CBDB 556781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556781&o=json)
