---
schema: wang-person/v1
id: p_DAiYDs1GnM3ji81jVzZ8Ef
status: active
merged_into: null
display_name: 王櫳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mud9J6Ce1JDT2K7g3x18Je
        subject_person_id: p_DAiYDs1GnM3ji81jVzZ8Ef
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hWb3iJHD73M7r22pYJ2A3D
          claim_id: c_Mud9J6Ce1JDT2K7g3x18Je
          source_id: s_x1cghmGxhYE6iaEFfWwpR8
          stance: supports
          locator: CBDB:638880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638880）
          source: &a1
            id: s_x1cghmGxhYE6iaEFfWwpR8
            source_type: api_record
            title: 中国历代人物传记资料库：王櫳（CBDB 638880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638880&o=json
            external_identifier: CBDB:638880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5JynCShoezwNzULPZ8d1X
        subject_person_id: p_DAiYDs1GnM3ji81jVzZ8Ef
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
        - id: cs_LomeajBTt1XV68LQu1PoYG
          claim_id: c_J5JynCShoezwNzULPZ8d1X
          source_id: s_x1cghmGxhYE6iaEFfWwpR8
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

# 王櫳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王櫳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王櫳（CBDB 638880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638880&o=json)
