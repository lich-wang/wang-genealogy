---
schema: wang-person/v1
id: p_91mfo9pBnGu6yNqPS5SH4s
status: active
merged_into: null
display_name: 王養正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qvTUHNM4mKwpkCSryxfxS
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MQuNyJpx3A79kPY6mPfXLo
          claim_id: c_9qvTUHNM4mKwpkCSryxfxS
          source_id: s_TmLXC1JyBH633vv4fYfj4S
          stance: supports
          locator: CBDB:202427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202427）
          source: &a1
            id: s_TmLXC1JyBH633vv4fYfj4S
            source_type: api_record
            title: 中国历代人物传记资料库：王養正（CBDB 202427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202427&o=json
            external_identifier: CBDB:202427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wZ8ktuoEr5qA7dr77EvMkG
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_izw44mPyRWiGW5xD61NW4L
          claim_id: c_wZ8ktuoEr5qA7dr77EvMkG
          source_id: s_TmLXC1JyBH633vv4fYfj4S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PXt97JieQnWCUmVQ6bX8mQ
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNcw1E27a9C96ZcUfBJHx7
          claim_id: c_PXt97JieQnWCUmVQ6bX8mQ
          source_id: s_TmLXC1JyBH633vv4fYfj4S
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

# 王養正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養正 | accepted |
| birth.date | 1495年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養正（CBDB 202427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202427&o=json)
