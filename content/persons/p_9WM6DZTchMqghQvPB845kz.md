---
schema: wang-person/v1
id: p_9WM6DZTchMqghQvPB845kz
status: active
merged_into: null
display_name: 王徳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLKQs4i4GkpP4bdHbhxN1p
        subject_person_id: p_9WM6DZTchMqghQvPB845kz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPm8dLJe9PM17RjcbmC1Vt
          claim_id: c_iLKQs4i4GkpP4bdHbhxN1p
          source_id: s_YeyCYVbaJ5zdgZM8hUFhCe
          stance: supports
          locator: CBDB:482862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482862）
          source: &a1
            id: s_YeyCYVbaJ5zdgZM8hUFhCe
            source_type: api_record
            title: 中国历代人物传记资料库：王徳（CBDB 482862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482862&o=json
            external_identifier: CBDB:482862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Yn9SBoo6x1ih9ueiqH4aV
        subject_person_id: p_9WM6DZTchMqghQvPB845kz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徳，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 482862）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PaGcYWOaWBnNVxcEq0y3H9
          claim_id: c_6Yn9SBoo6x1ih9ueiqH4aV
          source_id: s_YeyCYVbaJ5zdgZM8hUFhCe
          stance: supports
          locator: CBDB:482862
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

# 王徳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徳 | accepted |
| bio.summary | 王徳，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 482862） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徳（CBDB 482862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482862&o=json)
