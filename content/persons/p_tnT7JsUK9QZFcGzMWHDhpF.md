---
schema: wang-person/v1
id: p_tnT7JsUK9QZFcGzMWHDhpF
status: active
merged_into: null
display_name: 王允升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pYKPsjycw7ikRZEns8vAvG
        subject_person_id: p_tnT7JsUK9QZFcGzMWHDhpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QxgXPXyosQhdrYqZk3a9aA
          claim_id: c_pYKPsjycw7ikRZEns8vAvG
          source_id: s_xYT4yvfZDHWuVc7aFDb12U
          stance: supports
          locator: CBDB:546726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546726）
          source: &a1
            id: s_xYT4yvfZDHWuVc7aFDb12U
            source_type: api_record
            title: 中国历代人物传记资料库：王允升（CBDB 546726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546726&o=json
            external_identifier: CBDB:546726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jXbLU7fJ33DDcCMjAFJj9o
        subject_person_id: p_tnT7JsUK9QZFcGzMWHDhpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允升，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 546726）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fOHLCyy-Oi4TsnPUi4bRP5
          claim_id: c_jXbLU7fJ33DDcCMjAFJj9o
          source_id: s_xYT4yvfZDHWuVc7aFDb12U
          stance: supports
          locator: CBDB:546726
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

# 王允升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允升 | accepted |
| bio.summary | 王允升，宋人物。籍贯嚴州，入仕進士。（中国历代人物传记资料库 CBDB 546726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允升（CBDB 546726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546726&o=json)
