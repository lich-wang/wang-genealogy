---
schema: wang-person/v1
id: p_JRJGVRWmnmAXPpKGkkf1A3
status: active
merged_into: null
display_name: 王鎧之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Cnzyiw52Bq8mMYY5CF3EM
        subject_person_id: p_JRJGVRWmnmAXPpKGkkf1A3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jvz9ZQZyZi9SEqdqCptp9J
          claim_id: c_6Cnzyiw52Bq8mMYY5CF3EM
          source_id: s_AB8817EZV9kbLQhKAGnM3N
          stance: supports
          locator: CBDB:640687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640687）
          source: &a1
            id: s_AB8817EZV9kbLQhKAGnM3N
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧之（CBDB 640687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640687&o=json
            external_identifier: CBDB:640687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w9jtxai9p84KH4XM6cNoTE
        subject_person_id: p_JRJGVRWmnmAXPpKGkkf1A3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧之，清人物。籍贯曹州府，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uUGxQ-upMPEzXh1BVDOBI_
          claim_id: c_w9jtxai9p84KH4XM6cNoTE
          source_id: s_AB8817EZV9kbLQhKAGnM3N
          stance: supports
          locator: CBDB:640687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鎧之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧之 | accepted |
| bio.summary | 王鎧之，清人物。籍贯曹州府，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 640687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎧之（CBDB 640687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640687&o=json)
