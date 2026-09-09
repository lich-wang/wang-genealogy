---
schema: wang-person/v1
id: p_dNZfD5CfsYjgbLhNLEQvC2
status: active
merged_into: null
display_name: 王牧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9v1Hz7gLrNuw3ZeCJm6Jon
        subject_person_id: p_dNZfD5CfsYjgbLhNLEQvC2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wKhVjZLgAc5PQB6njwQ38a
          claim_id: c_9v1Hz7gLrNuw3ZeCJm6Jon
          source_id: s_sG3vmkT9H4K4rgYJLB9gNR
          stance: supports
          locator: CBDB:342468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342468）
          source: &a1
            id: s_sG3vmkT9H4K4rgYJLB9gNR
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 342468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342468&o=json
            external_identifier: CBDB:342468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHoUZxQm7Q62CkYi6xThAJ
        subject_person_id: p_dNZfD5CfsYjgbLhNLEQvC2
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
        - id: cs_tetJpxLSTpa26Wg2Aur2TJ
          claim_id: c_uHoUZxQm7Q62CkYi6xThAJ
          source_id: s_sG3vmkT9H4K4rgYJLB9gNR
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

# 王牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王牧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王牧（CBDB 342468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342468&o=json)
