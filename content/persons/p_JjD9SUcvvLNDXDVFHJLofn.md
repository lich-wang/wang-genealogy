---
schema: wang-person/v1
id: p_JjD9SUcvvLNDXDVFHJLofn
status: active
merged_into: null
display_name: 王知章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KhZNbS1c7sf3CaHryK5Pj
        subject_person_id: p_JjD9SUcvvLNDXDVFHJLofn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWzvDy34ANWjKo71xSgtvo
          claim_id: c_3KhZNbS1c7sf3CaHryK5Pj
          source_id: s_we4RM6nMNHr9tkxaZvk8Fr
          stance: supports
          locator: CBDB:452915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452915）
          source: &a1
            id: s_we4RM6nMNHr9tkxaZvk8Fr
            source_type: api_record
            title: 中国历代人物传记资料库：王知章（CBDB 452915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452915&o=json
            external_identifier: CBDB:452915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KUgXr4L43FBo9poYmwxZRU
        subject_person_id: p_JjD9SUcvvLNDXDVFHJLofn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z9Q9JBJ19ZE8YoBWmds5TM
          claim_id: c_KUgXr4L43FBo9poYmwxZRU
          source_id: s_we4RM6nMNHr9tkxaZvk8Fr
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

# 王知章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知章 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王知章（CBDB 452915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452915&o=json)
