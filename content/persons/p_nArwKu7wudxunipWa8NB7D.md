---
schema: wang-person/v1
id: p_nArwKu7wudxunipWa8NB7D
status: active
merged_into: null
display_name: 王子珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4cJ7h9k9GpxTCzUQPixgKS
        subject_person_id: p_nArwKu7wudxunipWa8NB7D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QycuNQx2F4Q6szUkkBP9yh
          claim_id: c_4cJ7h9k9GpxTCzUQPixgKS
          source_id: s_Zn6skGK8iPNSVjYyaKy5AZ
          stance: supports
          locator: CBDB:636988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636988）
          source: &a1
            id: s_Zn6skGK8iPNSVjYyaKy5AZ
            source_type: api_record
            title: 中国历代人物传记资料库：王子珍（CBDB 636988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636988&o=json
            external_identifier: CBDB:636988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.173Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tSW91zk2ZeBevPuuhGSWA
        subject_person_id: p_nArwKu7wudxunipWa8NB7D
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
        - id: cs_kF12wr1xCC3ynnQ2zT55yz
          claim_id: c_2tSW91zk2ZeBevPuuhGSWA
          source_id: s_Zn6skGK8iPNSVjYyaKy5AZ
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

# 王子珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子珍 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子珍（CBDB 636988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636988&o=json)
