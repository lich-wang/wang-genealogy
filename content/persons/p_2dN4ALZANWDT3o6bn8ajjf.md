---
schema: wang-person/v1
id: p_2dN4ALZANWDT3o6bn8ajjf
status: active
merged_into: null
display_name: 王琚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKh1L2ym4ZDoCjSwv1raCQ
        subject_person_id: p_2dN4ALZANWDT3o6bn8ajjf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yy6kykKNnWNpd5RTU7MsXt
          claim_id: c_gKh1L2ym4ZDoCjSwv1raCQ
          source_id: s_5oVokW7ZaSixYu1MQCBwBY
          stance: supports
          locator: CBDB:291581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291581）
          source: &a1
            id: s_5oVokW7ZaSixYu1MQCBwBY
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 291581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291581&o=json
            external_identifier: CBDB:291581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_waHy5yt4sQP3SYgFHSaytM
        subject_person_id: p_2dN4ALZANWDT3o6bn8ajjf
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
        - id: cs_DCjKwog6cMsYqgYgbF5EHL
          claim_id: c_waHy5yt4sQP3SYgFHSaytM
          source_id: s_5oVokW7ZaSixYu1MQCBwBY
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

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 291581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291581&o=json)
