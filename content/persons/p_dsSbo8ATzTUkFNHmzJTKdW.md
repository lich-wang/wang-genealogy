---
schema: wang-person/v1
id: p_dsSbo8ATzTUkFNHmzJTKdW
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHTG1PaLUHDYK9D61AN2NZ
        subject_person_id: p_dsSbo8ATzTUkFNHmzJTKdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WebF1yZX7aeN1uanHk9W3n
          claim_id: c_EHTG1PaLUHDYK9D61AN2NZ
          source_id: s_V85fVD2s4hS46bKsKaCo2y
          stance: supports
          locator: CBDB:35517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35517）
          source: &a1
            id: s_V85fVD2s4hS46bKsKaCo2y
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 35517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35517&o=json
            external_identifier: CBDB:35517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uxtZiTs7Mp6Qfi8pBVXnq2
        subject_person_id: p_dsSbo8ATzTUkFNHmzJTKdW
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
        - id: cs_6uJWhxJ8wxYEeo2i2Y3Wbt
          claim_id: c_uxtZiTs7Mp6Qfi8pBVXnq2
          source_id: s_V85fVD2s4hS46bKsKaCo2y
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 35517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35517&o=json)
