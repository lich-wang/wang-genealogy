---
schema: wang-person/v1
id: p_BbVuDF1fLskiGPBs7ZTaaZ
status: active
merged_into: null
display_name: 王時升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DD7XCcgNo3E9m7QZZVxusw
        subject_person_id: p_BbVuDF1fLskiGPBs7ZTaaZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqJDzc7SbJ3ePoEmM3w21M
          claim_id: c_DD7XCcgNo3E9m7QZZVxusw
          source_id: s_qaAYpWi3E3CAy91orQi8HV
          stance: supports
          locator: CBDB:688564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688564）
          source: &a1
            id: s_qaAYpWi3E3CAy91orQi8HV
            source_type: api_record
            title: 中国历代人物传记资料库：王時升（CBDB 688564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688564&o=json
            external_identifier: CBDB:688564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9F1Gpxq4VK1v95ZKQvbech
        subject_person_id: p_BbVuDF1fLskiGPBs7ZTaaZ
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
        - id: cs_9cJCdQLrBzgpJYUbJ7hbuj
          claim_id: c_9F1Gpxq4VK1v95ZKQvbech
          source_id: s_qaAYpWi3E3CAy91orQi8HV
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

# 王時升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時升 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時升（CBDB 688564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688564&o=json)
