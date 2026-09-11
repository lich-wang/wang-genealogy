---
schema: wang-person/v1
id: p_dggsgV6LzzuX1r3JGu8hs4
status: active
merged_into: null
display_name: 王浹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzXACLnh9kNdR8xTwTa12h
        subject_person_id: p_dggsgV6LzzuX1r3JGu8hs4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjM8crAbEBAU5LsHTE8aEQ
          claim_id: c_mzXACLnh9kNdR8xTwTa12h
          source_id: s_shPKm6C65QUsCWcCmwgJ4Q
          stance: supports
          locator: CBDB:100765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100765）
          source: &a1
            id: s_shPKm6C65QUsCWcCmwgJ4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王浹（CBDB 100765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100765&o=json
            external_identifier: CBDB:100765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YU49sDqQPGvUuuFjAm1rHT
        subject_person_id: p_dggsgV6LzzuX1r3JGu8hs4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浹，元人物。曾任路判官。（中国历代人物传记资料库 CBDB 100765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lrR0U_smL5bIwo0qt4RWf3
          claim_id: c_YU49sDqQPGvUuuFjAm1rHT
          source_id: s_shPKm6C65QUsCWcCmwgJ4Q
          stance: supports
          locator: CBDB:100765
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

# 王浹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浹 | accepted |
| bio.summary | 王浹，元人物。曾任路判官。（中国历代人物传记资料库 CBDB 100765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浹（CBDB 100765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100765&o=json)
