---
schema: wang-person/v1
id: p_nwL2xVd75q361KsBtDP6KW
status: active
merged_into: null
display_name: 王念祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6RzSYWy3KJK7RtNaEAuH2
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLPu3Bi2UnMHdHVsA1D9v7
          claim_id: c_T6RzSYWy3KJK7RtNaEAuH2
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: CBDB:207816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207816）
          source: &a1
            id: s_n2AW5aMJMFG9qYueQ6kZsh
            source_type: api_record
            title: 中国历代人物传记资料库：王念祖（CBDB 207816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json
            external_identifier: CBDB:207816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H268Vs54Y59Jt6KyEw68nB
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1586年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1NJmHpiQEbCPJ3yG513e7
          claim_id: c_H268Vs54Y59Jt6KyEw68nB
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kkoroKv855DEzBFHy5GHbr
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
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
        - id: cs_a2F6Z5GGZVZch97h3xgBGR
          claim_id: c_kkoroKv855DEzBFHy5GHbr
          source_id: s_n2AW5aMJMFG9qYueQ6kZsh
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

# 王念祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念祖 | accepted |
| birth.date | 1586年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王念祖（CBDB 207816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207816&o=json)
