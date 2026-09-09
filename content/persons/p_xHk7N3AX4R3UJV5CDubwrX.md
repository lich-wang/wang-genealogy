---
schema: wang-person/v1
id: p_xHk7N3AX4R3UJV5CDubwrX
status: active
merged_into: null
display_name: 王澧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JwVcyaysewTJw97fymagFq
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P8hn1FDPwNBA5ZKcCzg2uj
          claim_id: c_JwVcyaysewTJw97fymagFq
          source_id: s_9w8NCXd5QFg5GGp1AeKACK
          stance: supports
          locator: CBDB:71283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71283）
          source: &a1
            id: s_9w8NCXd5QFg5GGp1AeKACK
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 71283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71283&o=json
            external_identifier: CBDB:71283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1GKD89ifu38oYceMGqf92v
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dRXSr6iP8kXQKBuVAih9WM
          claim_id: c_1GKD89ifu38oYceMGqf92v
          source_id: s_9w8NCXd5QFg5GGp1AeKACK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PYybEFeoQNhHwiPUH6cno9
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LVXoJW8EeFBKvfVb1s79rC
          claim_id: c_PYybEFeoQNhHwiPUH6cno9
          source_id: s_9w8NCXd5QFg5GGp1AeKACK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxpGT89s99L4TyfgaB4ueb
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
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
        - id: cs_K4cueTCmU4dFBrGg4rYHvA
          claim_id: c_TxpGT89s99L4TyfgaB4ueb
          source_id: s_9w8NCXd5QFg5GGp1AeKACK
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

# 王澧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澧 | accepted |
| birth.date | 1616年 | accepted |
| death.date | 1692年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澧（CBDB 71283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71283&o=json)
