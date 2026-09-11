---
schema: wang-person/v1
id: p_TVkP9Le5d2zAuNLEu1RHNc
status: active
merged_into: null
display_name: 王佐才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kKM4b5SRxh7c8GxD6vDcSd
        subject_person_id: p_TVkP9Le5d2zAuNLEu1RHNc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zcfrNhoeBxPgLzULUFrnHn
          claim_id: c_kKM4b5SRxh7c8GxD6vDcSd
          source_id: s_PPpD8ffosYhonrqLqd1CaX
          stance: supports
          locator: CBDB:342307
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342307）
          source: &a1
            id: s_PPpD8ffosYhonrqLqd1CaX
            source_type: api_record
            title: 中国历代人物传记资料库：王佐才（CBDB 342307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342307&o=json
            external_identifier: CBDB:342307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UPRKLrKu7V2KQR5AGGnrV2
        subject_person_id: p_TVkP9Le5d2zAuNLEu1RHNc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐才，明人物。明清進士進士，籍贯臨朐，入仕進士。（中国历代人物传记资料库 CBDB 342307）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d1EAU7j9yZGFuYms5xTFI-
          claim_id: c_UPRKLrKu7V2KQR5AGGnrV2
          source_id: s_PPpD8ffosYhonrqLqd1CaX
          stance: supports
          locator: CBDB:342307
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

# 王佐才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐才 | accepted |
| bio.summary | 王佐才，明人物。明清進士進士，籍贯臨朐，入仕進士。（中国历代人物传记资料库 CBDB 342307） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐才（CBDB 342307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342307&o=json)
