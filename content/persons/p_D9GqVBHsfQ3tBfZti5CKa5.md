---
schema: wang-person/v1
id: p_D9GqVBHsfQ3tBfZti5CKa5
status: active
merged_into: null
display_name: 王寰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nUhxqy73rKp8G3oiThdmQs
        subject_person_id: p_D9GqVBHsfQ3tBfZti5CKa5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ohWQrt6AdY5mKKXx9g49vD
          claim_id: c_nUhxqy73rKp8G3oiThdmQs
          source_id: s_njaXNxj2CXkkXnQbJ5PAJE
          stance: supports
          locator: CBDB:342607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342607）
          source: &a1
            id: s_njaXNxj2CXkkXnQbJ5PAJE
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 342607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342607&o=json
            external_identifier: CBDB:342607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6mFR7KW7Fm5uoroS1Me6o
        subject_person_id: p_D9GqVBHsfQ3tBfZti5CKa5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰，清人物。明清進士進士，籍贯金匱，入仕進士。（中国历代人物传记资料库 CBDB 342607）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g4IbwOQQKlulw58WSYM89x
          claim_id: c_d6mFR7KW7Fm5uoroS1Me6o
          source_id: s_njaXNxj2CXkkXnQbJ5PAJE
          stance: supports
          locator: CBDB:342607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰 | accepted |
| bio.summary | 王寰，清人物。明清進士進士，籍贯金匱，入仕進士。（中国历代人物传记资料库 CBDB 342607） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 342607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342607&o=json)
