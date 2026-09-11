---
schema: wang-person/v1
id: p_zG7pJdRTqDU4S1KHQQvJXP
status: active
merged_into: null
display_name: 王清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PBMMzWYgBiTyz2HieuQDDB
        subject_person_id: p_zG7pJdRTqDU4S1KHQQvJXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3bzZCkExXRZB4FCJV5ubs
          claim_id: c_PBMMzWYgBiTyz2HieuQDDB
          source_id: s_Wf7M4P2T3GE3bMtgAxds2D
          stance: supports
          locator: CBDB:508617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508617）
          source: &a1
            id: s_Wf7M4P2T3GE3bMtgAxds2D
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 508617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508617&o=json
            external_identifier: CBDB:508617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ftSxyKB7vaavfgwC5UMs68
        subject_person_id: p_zG7pJdRTqDU4S1KHQQvJXP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 508617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vt5t3TMEvcGGvExHfQkFnn
          claim_id: c_ftSxyKB7vaavfgwC5UMs68
          source_id: s_Wf7M4P2T3GE3bMtgAxds2D
          stance: supports
          locator: CBDB:508617
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

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 508617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 508617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508617&o=json)
