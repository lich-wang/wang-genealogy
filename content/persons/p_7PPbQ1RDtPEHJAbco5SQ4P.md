---
schema: wang-person/v1
id: p_7PPbQ1RDtPEHJAbco5SQ4P
status: active
merged_into: null
display_name: 王芝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3J5zWqPe1aGJRB42ED58hR
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wpEnFLPSZgSteoSoB3meoC
          claim_id: c_3J5zWqPe1aGJRB42ED58hR
          source_id: s_EGmrQBNTTcFW1ouLyjs52T
          stance: supports
          locator: CBDB:279354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279354）
          source: &a1
            id: s_EGmrQBNTTcFW1ouLyjs52T
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 279354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json
            external_identifier: CBDB:279354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZfykuG6RuproTFeWJXKLF
        subject_person_id: p_7PPbQ1RDtPEHJAbco5SQ4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xy2_d5u1lLELU3DmTHk9Ib
          claim_id: c_qZfykuG6RuproTFeWJXKLF
          source_id: s_EGmrQBNTTcFW1ouLyjs52T
          stance: supports
          locator: CBDB:279354
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

# 王芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝 | accepted |
| bio.summary | 王芝，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芝（CBDB 279354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279354&o=json)
