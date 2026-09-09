---
schema: wang-person/v1
id: p_aQBAivevG5QTfA7SNaq76h
status: active
merged_into: null
display_name: 王守忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rf4qnpB1N8nQi7mNDh23Ec
        subject_person_id: p_aQBAivevG5QTfA7SNaq76h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zFgiWDL15vgdd5nH7WSn7S
          claim_id: c_rf4qnpB1N8nQi7mNDh23Ec
          source_id: s_zfGQnyduMK213r318FkgYh
          stance: supports
          locator: CBDB:29193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29193）
          source: &a1
            id: s_zfGQnyduMK213r318FkgYh
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 29193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29193&o=json
            external_identifier: CBDB:29193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ABHvVgMbj6d4UBVuC3syj5
        subject_person_id: p_aQBAivevG5QTfA7SNaq76h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMALXgwTYgATPx1JJXpZct
          claim_id: c_ABHvVgMbj6d4UBVuC3syj5
          source_id: s_zfGQnyduMK213r318FkgYh
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

# 王守忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守忠 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守忠（CBDB 29193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29193&o=json)
