---
schema: wang-person/v1
id: p_JvsXBQiD9BajTsdpNvbNGU
status: active
merged_into: null
display_name: 王傳緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j5Vru284NoxZt437S1v63A
        subject_person_id: p_JvsXBQiD9BajTsdpNvbNGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxF9CP6zMfb3LA9FdNbBkW
          claim_id: c_j5Vru284NoxZt437S1v63A
          source_id: s_41hCMUNeHGzLWvLuBCVvsd
          stance: supports
          locator: CBDB:636093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636093）
          source: &a1
            id: s_41hCMUNeHGzLWvLuBCVvsd
            source_type: api_record
            title: 中国历代人物传记资料库：王傳緒（CBDB 636093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636093&o=json
            external_identifier: CBDB:636093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2xKbmc8v111gSwG9L6QGeZ
        subject_person_id: p_JvsXBQiD9BajTsdpNvbNGU
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
        - id: cs_QtAnf7iKtVgagoD83eHsZa
          claim_id: c_2xKbmc8v111gSwG9L6QGeZ
          source_id: s_41hCMUNeHGzLWvLuBCVvsd
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

# 王傳緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳緒（CBDB 636093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636093&o=json)
