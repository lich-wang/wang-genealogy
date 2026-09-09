---
schema: wang-person/v1
id: p_QD8K6vE3oHWhfMDT86ZMT1
status: active
merged_into: null
display_name: 王吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b46HjMYoPvwhVuV4UP5QJz
        subject_person_id: p_QD8K6vE3oHWhfMDT86ZMT1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oKGW2TDwD7FcwN7BPwN5Yh
          claim_id: c_b46HjMYoPvwhVuV4UP5QJz
          source_id: s_2y8nBUafcukAyARE89N6en
          stance: supports
          locator: CBDB:496307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496307）
          source: &a1
            id: s_2y8nBUafcukAyARE89N6en
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 496307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496307&o=json
            external_identifier: CBDB:496307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d8EG7iShVhmSQfiLoRpd1t
        subject_person_id: p_QD8K6vE3oHWhfMDT86ZMT1
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
        - id: cs_rUyqb9EKBNkDZQWF6GRQQv
          claim_id: c_d8EG7iShVhmSQfiLoRpd1t
          source_id: s_2y8nBUafcukAyARE89N6en
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

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 496307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496307&o=json)
