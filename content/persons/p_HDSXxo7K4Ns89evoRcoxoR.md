---
schema: wang-person/v1
id: p_HDSXxo7K4Ns89evoRcoxoR
status: active
merged_into: null
display_name: 王三錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5H7NRgeRMe7LJxs3PsS9bX
        subject_person_id: p_HDSXxo7K4Ns89evoRcoxoR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_euKbkeW8JwkVmmTcBfWEMZ
          claim_id: c_5H7NRgeRMe7LJxs3PsS9bX
          source_id: s_d8mfWsMzVGUciZN7EFMeXA
          stance: supports
          locator: CBDB:495107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495107）
          source: &a1
            id: s_d8mfWsMzVGUciZN7EFMeXA
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 495107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495107&o=json
            external_identifier: CBDB:495107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.477Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmkD4YG3D9hE5kycL8DQEF
        subject_person_id: p_HDSXxo7K4Ns89evoRcoxoR
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
        - id: cs_CDa9RPE22h1Jqon9xfuWYF
          claim_id: c_LmkD4YG3D9hE5kycL8DQEF
          source_id: s_d8mfWsMzVGUciZN7EFMeXA
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

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 495107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495107&o=json)
