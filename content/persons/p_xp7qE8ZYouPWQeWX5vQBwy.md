---
schema: wang-person/v1
id: p_xp7qE8ZYouPWQeWX5vQBwy
status: active
merged_into: null
display_name: 王震嚴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rVDvbCZEAGdWMoWpFNPZAh
        subject_person_id: p_xp7qE8ZYouPWQeWX5vQBwy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_awcVc81rYLDJJ4B7iyrafP
          claim_id: c_rVDvbCZEAGdWMoWpFNPZAh
          source_id: s_14S36eJ5K7DYd61r4KtZBD
          stance: supports
          locator: CBDB:549283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549283）
          source: &a1
            id: s_14S36eJ5K7DYd61r4KtZBD
            source_type: api_record
            title: 中国历代人物传记资料库：王震嚴（CBDB 549283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549283&o=json
            external_identifier: CBDB:549283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rw5XT9NAwMuZ97r4NibYNW
        subject_person_id: p_xp7qE8ZYouPWQeWX5vQBwy
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
        - id: cs_nu6KGivuT8ppiRU6P3jXys
          claim_id: c_Rw5XT9NAwMuZ97r4NibYNW
          source_id: s_14S36eJ5K7DYd61r4KtZBD
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

# 王震嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震嚴 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震嚴（CBDB 549283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549283&o=json)
