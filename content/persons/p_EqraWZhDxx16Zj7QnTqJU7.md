---
schema: wang-person/v1
id: p_EqraWZhDxx16Zj7QnTqJU7
status: active
merged_into: null
display_name: 王懿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kiRTVvLHP9gHPgd6j6VtVF
        subject_person_id: p_EqraWZhDxx16Zj7QnTqJU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwFLBFw4H46sQExMAM4DXK
          claim_id: c_kiRTVvLHP9gHPgd6j6VtVF
          source_id: s_THzwp2DrdQhjsBw2nF1jE3
          stance: supports
          locator: CBDB:343268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343268）
          source: &a1
            id: s_THzwp2DrdQhjsBw2nF1jE3
            source_type: api_record
            title: 中国历代人物传记资料库：王懿（CBDB 343268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343268&o=json
            external_identifier: CBDB:343268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_865AaPz5B5KC8hi7PWdN3X
        subject_person_id: p_EqraWZhDxx16Zj7QnTqJU7
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
        - id: cs_wmD71JYfnVQ4mKU4sHp3QL
          claim_id: c_865AaPz5B5KC8hi7PWdN3X
          source_id: s_THzwp2DrdQhjsBw2nF1jE3
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

# 王懿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿（CBDB 343268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343268&o=json)
