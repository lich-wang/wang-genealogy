---
schema: wang-person/v1
id: p_PNntVTF29FnuWsCs9aXqyp
status: active
merged_into: null
display_name: 王繼鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NjrF3nYSseAioZ5xKRw7DC
        subject_person_id: p_PNntVTF29FnuWsCs9aXqyp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sMBJoa6VQG5BpG5GrMLap7
          claim_id: c_NjrF3nYSseAioZ5xKRw7DC
          source_id: s_caKUL4dBUwZnwuA9ha63eP
          stance: supports
          locator: CBDB:639804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639804）
          source: &a1
            id: s_caKUL4dBUwZnwuA9ha63eP
            source_type: api_record
            title: 中国历代人物传记资料库：王繼鼇（CBDB 639804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639804&o=json
            external_identifier: CBDB:639804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dKRGJiVJhZy9vEEhifUzcf
        subject_person_id: p_PNntVTF29FnuWsCs9aXqyp
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
        - id: cs_LM9haD7NjEabd2pmm1ZVTg
          claim_id: c_dKRGJiVJhZy9vEEhifUzcf
          source_id: s_caKUL4dBUwZnwuA9ha63eP
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

# 王繼鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼鼇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼鼇（CBDB 639804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639804&o=json)
