---
schema: wang-person/v1
id: p_wdBxr3qAEk9KHKkbt7yyJc
status: active
merged_into: null
display_name: 王平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MyD926H65juVZoNDuaHCKQ
        subject_person_id: p_wdBxr3qAEk9KHKkbt7yyJc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9F3XpLdwmFdSYQn2aCbpLZ
          claim_id: c_MyD926H65juVZoNDuaHCKQ
          source_id: s_7qtS2sqoh6GhBFQJeKbW4B
          stance: supports
          locator: CBDB:480194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480194）
          source: &a1
            id: s_7qtS2sqoh6GhBFQJeKbW4B
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 480194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480194&o=json
            external_identifier: CBDB:480194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FB5zaqPRGb9ZWyYwPPYd4q
        subject_person_id: p_wdBxr3qAEk9KHKkbt7yyJc
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
        - id: cs_1ABn7TSgUUq1NE1D8k3n53
          claim_id: c_FB5zaqPRGb9ZWyYwPPYd4q
          source_id: s_7qtS2sqoh6GhBFQJeKbW4B
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

# 王平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王平 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王平（CBDB 480194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480194&o=json)
