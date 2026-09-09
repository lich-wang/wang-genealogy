---
schema: wang-person/v1
id: p_u7b38kZfQ81U6R9nJjjWFk
status: active
merged_into: null
display_name: 王遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MSsa9zp51TM3xQCpip3Z9f
        subject_person_id: p_u7b38kZfQ81U6R9nJjjWFk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnSNMFABxdB9axFVHCzjUL
          claim_id: c_MSsa9zp51TM3xQCpip3Z9f
          source_id: s_gg9NFoN7cz7a4KwDUnkmGa
          stance: supports
          locator: CBDB:466237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466237）
          source: &a1
            id: s_gg9NFoN7cz7a4KwDUnkmGa
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 466237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466237&o=json
            external_identifier: CBDB:466237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jRCSCxB614PrEa8sSHoPfU
        subject_person_id: p_u7b38kZfQ81U6R9nJjjWFk
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
        - id: cs_LsVuY6gEpzMfJAC1KZrgT1
          claim_id: c_jRCSCxB614PrEa8sSHoPfU
          source_id: s_gg9NFoN7cz7a4KwDUnkmGa
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

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇（CBDB 466237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466237&o=json)
