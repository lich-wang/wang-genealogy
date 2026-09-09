---
schema: wang-person/v1
id: p_eraN1b8pdEN3PXBbqCpgJ5
status: active
merged_into: null
display_name: 王回
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VZKM9gmmCWNHgPZyUwrF4w
        subject_person_id: p_eraN1b8pdEN3PXBbqCpgJ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6k2JgmDoCz9QENrUjT63p6
          claim_id: c_VZKM9gmmCWNHgPZyUwrF4w
          source_id: s_73KFAnbaYjc6Jpnb3M36Du
          stance: supports
          locator: CBDB:479192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479192）
          source: &a1
            id: s_73KFAnbaYjc6Jpnb3M36Du
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 479192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479192&o=json
            external_identifier: CBDB:479192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gdTYcP5vTfhAmgwvJYZ9nD
        subject_person_id: p_eraN1b8pdEN3PXBbqCpgJ5
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
        - id: cs_soPG5LJT7g5epT5UJhKQNG
          claim_id: c_gdTYcP5vTfhAmgwvJYZ9nD
          source_id: s_73KFAnbaYjc6Jpnb3M36Du
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

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 479192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479192&o=json)
