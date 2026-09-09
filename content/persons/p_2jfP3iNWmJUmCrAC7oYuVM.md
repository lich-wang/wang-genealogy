---
schema: wang-person/v1
id: p_2jfP3iNWmJUmCrAC7oYuVM
status: active
merged_into: null
display_name: 王萊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zi93hyTcWcQDdb3J89UbnA
        subject_person_id: p_2jfP3iNWmJUmCrAC7oYuVM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e3jw6B9BsXX1s2ieR2jWg2
          claim_id: c_zi93hyTcWcQDdb3J89UbnA
          source_id: s_KqjWmEuG67zYraybJpurd1
          stance: supports
          locator: CBDB:24387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24387）
          source: &a1
            id: s_KqjWmEuG67zYraybJpurd1
            source_type: api_record
            title: 中国历代人物传记资料库：王萊（CBDB 24387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24387&o=json
            external_identifier: CBDB:24387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9PwjRwRGK4yuoHNxLYkUf
        subject_person_id: p_2jfP3iNWmJUmCrAC7oYuVM
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
        - id: cs_4AvF7M1GNRe9Ya8Fz8r9AV
          claim_id: c_F9PwjRwRGK4yuoHNxLYkUf
          source_id: s_KqjWmEuG67zYraybJpurd1
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

# 王萊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萊（CBDB 24387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24387&o=json)
