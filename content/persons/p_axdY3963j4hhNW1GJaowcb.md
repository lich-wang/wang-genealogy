---
schema: wang-person/v1
id: p_axdY3963j4hhNW1GJaowcb
status: active
merged_into: null
display_name: 王彥章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w9PvW8qwcNTabYZ3FxBMbY
        subject_person_id: p_axdY3963j4hhNW1GJaowcb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ftEKAyKKq1sWZHwTa3Pbop
          claim_id: c_w9PvW8qwcNTabYZ3FxBMbY
          source_id: s_zRAJgaFEkaWhshANzVNrD6
          stance: supports
          locator: CBDB:37708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37708）
          source: &a1
            id: s_zRAJgaFEkaWhshANzVNrD6
            source_type: api_record
            title: 中国历代人物传记资料库：王彥章（CBDB 37708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37708&o=json
            external_identifier: CBDB:37708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B33Qc8jHARTdUw2UYYao7Z
        subject_person_id: p_axdY3963j4hhNW1GJaowcb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥章，五代人物。籍贯壽張。（中国历代人物传记资料库 CBDB 37708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDRPxxfKQlLjl5XJ3o6XtG
          claim_id: c_B33Qc8jHARTdUw2UYYao7Z
          source_id: s_zRAJgaFEkaWhshANzVNrD6
          stance: supports
          locator: CBDB:37708
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

# 王彥章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥章 | accepted |
| bio.summary | 王彥章，五代人物。籍贯壽張。（中国历代人物传记资料库 CBDB 37708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥章（CBDB 37708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37708&o=json)
