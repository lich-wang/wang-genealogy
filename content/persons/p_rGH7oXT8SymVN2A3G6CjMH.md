---
schema: wang-person/v1
id: p_rGH7oXT8SymVN2A3G6CjMH
status: active
merged_into: null
display_name: 王汝嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TGXZ9LGNHUj9Je3K2dHjWw
        subject_person_id: p_rGH7oXT8SymVN2A3G6CjMH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QonkLKH5ae7mPHhRs8436N
          claim_id: c_TGXZ9LGNHUj9Je3K2dHjWw
          source_id: s_1g8QoXxxQCCsoGZH1ubeCu
          stance: supports
          locator: CBDB:342727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342727）
          source: &a1
            id: s_1g8QoXxxQCCsoGZH1ubeCu
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 342727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342727&o=json
            external_identifier: CBDB:342727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uB9QhJKm8QYBYG2cjJov48
        subject_person_id: p_rGH7oXT8SymVN2A3G6CjMH
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
        - id: cs_eJg9dQjRi9xSK7iQkGG8mx
          claim_id: c_uB9QhJKm8QYBYG2cjJov48
          source_id: s_1g8QoXxxQCCsoGZH1ubeCu
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

# 王汝嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝嘉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝嘉（CBDB 342727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342727&o=json)
