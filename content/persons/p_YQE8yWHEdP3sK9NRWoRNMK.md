---
schema: wang-person/v1
id: p_YQE8yWHEdP3sK9NRWoRNMK
status: active
merged_into: null
display_name: 王青選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_racUqmhrJb64B4JGJ3ycr3
        subject_person_id: p_YQE8yWHEdP3sK9NRWoRNMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王青選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qGUU5P9hD2FjUfAS3mpRC1
          claim_id: c_racUqmhrJb64B4JGJ3ycr3
          source_id: s_LUkBNdsFD7QrT3C5BjkcL5
          stance: supports
          locator: CBDB:640845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640845）
          source: &a1
            id: s_LUkBNdsFD7QrT3C5BjkcL5
            source_type: api_record
            title: 中国历代人物传记资料库：王青選（CBDB 640845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640845&o=json
            external_identifier: CBDB:640845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3LN6G67pBY1J3wFZAAJ32y
        subject_person_id: p_YQE8yWHEdP3sK9NRWoRNMK
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
        - id: cs_B84iufkDzSnxKvaS6DgabA
          claim_id: c_3LN6G67pBY1J3wFZAAJ32y
          source_id: s_LUkBNdsFD7QrT3C5BjkcL5
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

# 王青選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王青選 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王青選（CBDB 640845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640845&o=json)
