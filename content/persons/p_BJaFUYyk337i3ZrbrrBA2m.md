---
schema: wang-person/v1
id: p_BJaFUYyk337i3ZrbrrBA2m
status: active
merged_into: null
display_name: 王用欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BeKr3v8Js5zMjmq4iqv2GM
        subject_person_id: p_BJaFUYyk337i3ZrbrrBA2m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fBCaMSHeV52kbAf6FA5FcS
          claim_id: c_BeKr3v8Js5zMjmq4iqv2GM
          source_id: s_w4ekBa7PhEFSVeTPBCXXXo
          stance: supports
          locator: CBDB:343622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343622）
          source: &a1
            id: s_w4ekBa7PhEFSVeTPBCXXXo
            source_type: api_record
            title: 中国历代人物传记资料库：王用欽（CBDB 343622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343622&o=json
            external_identifier: CBDB:343622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mHJxiws7UdWyUWvEgvD49j
        subject_person_id: p_BJaFUYyk337i3ZrbrrBA2m
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
        - id: cs_U2DvXwHZCLDjBH7UAv5RZu
          claim_id: c_mHJxiws7UdWyUWvEgvD49j
          source_id: s_w4ekBa7PhEFSVeTPBCXXXo
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

# 王用欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用欽 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用欽（CBDB 343622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343622&o=json)
