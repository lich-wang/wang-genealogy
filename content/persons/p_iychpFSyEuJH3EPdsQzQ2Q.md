---
schema: wang-person/v1
id: p_iychpFSyEuJH3EPdsQzQ2Q
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xiVkhBfYYADZGfwipqygE
        subject_person_id: p_iychpFSyEuJH3EPdsQzQ2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kKSmPFp788xCYf8Ef8BoMT
          claim_id: c_3xiVkhBfYYADZGfwipqygE
          source_id: s_fXAmWy9LATTHU1hSiv6E87
          stance: supports
          locator: CBDB:126790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126790）
          source: &a1
            id: s_fXAmWy9LATTHU1hSiv6E87
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 126790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126790&o=json
            external_identifier: CBDB:126790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQDkHEfDhvKLt6JtdQnGGw
        subject_person_id: p_iychpFSyEuJH3EPdsQzQ2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。籍贯南海，曾任監察御史、縣丞、知縣。（中国历代人物传记资料库 CBDB 126790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mVLSxzI4CwqkCw2OVR5eJy
          claim_id: c_XQDkHEfDhvKLt6JtdQnGGw
          source_id: s_fXAmWy9LATTHU1hSiv6E87
          stance: supports
          locator: CBDB:126790
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。籍贯南海，曾任監察御史、縣丞、知縣。（中国历代人物传记资料库 CBDB 126790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 126790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126790&o=json)
