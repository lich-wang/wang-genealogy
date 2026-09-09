---
schema: wang-person/v1
id: p_VPFd2pBRWdf8JGHrz2PvCJ
status: active
merged_into: null
display_name: 王洪勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7aNj3iQwckBKdkAk3qNzG
        subject_person_id: p_VPFd2pBRWdf8JGHrz2PvCJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RZ43WALAuqYXLkeuuS9TPw
          claim_id: c_d7aNj3iQwckBKdkAk3qNzG
          source_id: s_1kRAt87Psj1BEgwVVQgMHM
          stance: supports
          locator: CBDB:639088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639088）
          source: &a1
            id: s_1kRAt87Psj1BEgwVVQgMHM
            source_type: api_record
            title: 中国历代人物传记资料库：王洪勲（CBDB 639088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639088&o=json
            external_identifier: CBDB:639088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tdRYEF7LC2HyqjRPyQb17B
        subject_person_id: p_VPFd2pBRWdf8JGHrz2PvCJ
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
        - id: cs_jpJFhVJMXk9zCVBB7RA1Mj
          claim_id: c_tdRYEF7LC2HyqjRPyQb17B
          source_id: s_1kRAt87Psj1BEgwVVQgMHM
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

# 王洪勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪勲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪勲（CBDB 639088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639088&o=json)
