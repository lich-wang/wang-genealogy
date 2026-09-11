---
schema: wang-person/v1
id: p_t7GwuwftbZUUz7zBJLeE77
status: active
merged_into: null
display_name: 王衍緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FL5F9tb1SPuDLz3E4E8EzN
        subject_person_id: p_t7GwuwftbZUUz7zBJLeE77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HzKySrxU4p52a3JJjdpjEE
          claim_id: c_FL5F9tb1SPuDLz3E4E8EzN
          source_id: s_7yPvYxPb1QBx8bKSnitcbw
          stance: supports
          locator: CBDB:640206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640206）
          source: &a1
            id: s_7yPvYxPb1QBx8bKSnitcbw
            source_type: api_record
            title: 中国历代人物传记资料库：王衍緒（CBDB 640206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640206&o=json
            external_identifier: CBDB:640206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6JXyZT9HJESJUC8bvSUK6n
        subject_person_id: p_t7GwuwftbZUUz7zBJLeE77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍緒，清人物。籍贯福山，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 640206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WgRaT_f23tEnMPj4EGODLJ
          claim_id: c_6JXyZT9HJESJUC8bvSUK6n
          source_id: s_7yPvYxPb1QBx8bKSnitcbw
          stance: supports
          locator: CBDB:640206
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

# 王衍緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍緒 | accepted |
| bio.summary | 王衍緒，清人物。籍贯福山，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 640206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍緒（CBDB 640206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640206&o=json)
