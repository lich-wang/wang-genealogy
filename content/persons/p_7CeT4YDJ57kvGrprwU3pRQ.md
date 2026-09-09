---
schema: wang-person/v1
id: p_7CeT4YDJ57kvGrprwU3pRQ
status: active
merged_into: null
display_name: 王超曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MJ4KrK3u3npr9LSNp22MVf
        subject_person_id: p_7CeT4YDJ57kvGrprwU3pRQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GoXXYGrgyc57KLXG1miKiq
          claim_id: c_MJ4KrK3u3npr9LSNp22MVf
          source_id: s_1YpPdKMHJMTL3TfNomLBDC
          stance: supports
          locator: CBDB:640361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640361）
          source: &a1
            id: s_1YpPdKMHJMTL3TfNomLBDC
            source_type: api_record
            title: 中国历代人物传记资料库：王超曾（CBDB 640361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640361&o=json
            external_identifier: CBDB:640361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JxkgTFdGksoZWpFcuG7kEV
        subject_person_id: p_7CeT4YDJ57kvGrprwU3pRQ
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
        - id: cs_sN4CR7YYk64V8ctWFxg6BA
          claim_id: c_JxkgTFdGksoZWpFcuG7kEV
          source_id: s_1YpPdKMHJMTL3TfNomLBDC
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

# 王超曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王超曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王超曾（CBDB 640361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640361&o=json)
