---
schema: wang-person/v1
id: p_FaVxhCqbFD9FLrnWtGuBry
status: active
merged_into: null
display_name: 王奕經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2a5aB5Qz6A6kS4rL2GPyNr
        subject_person_id: p_FaVxhCqbFD9FLrnWtGuBry
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_veE1CxxaczeFN55ua6DsSZ
          claim_id: c_2a5aB5Qz6A6kS4rL2GPyNr
          source_id: s_crZGfEc1BXTzE5126TCMfi
          stance: supports
          locator: CBDB:700207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700207）
          source: &a1
            id: s_crZGfEc1BXTzE5126TCMfi
            source_type: api_record
            title: 中国历代人物传记资料库：王奕經（CBDB 700207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700207&o=json
            external_identifier: CBDB:700207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oDbYGoGocmB6h17r7c4PNW
        subject_person_id: p_FaVxhCqbFD9FLrnWtGuBry
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕經，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 700207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M2_Br7frx6jKDbjrlFf38y
          claim_id: c_oDbYGoGocmB6h17r7c4PNW
          source_id: s_crZGfEc1BXTzE5126TCMfi
          stance: supports
          locator: CBDB:700207
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

# 王奕經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奕經 | accepted |
| bio.summary | 王奕經，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 700207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奕經（CBDB 700207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700207&o=json)
