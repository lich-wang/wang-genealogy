---
schema: wang-person/v1
id: p_MJMiFRtHjs5gJTmoDFVqhn
status: active
merged_into: null
display_name: 王瀛仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Jp4mm5PiVYN4rq1JyUubb
        subject_person_id: p_MJMiFRtHjs5gJTmoDFVqhn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i9bYw7D8bLKXPQmFUdTHmr
          claim_id: c_2Jp4mm5PiVYN4rq1JyUubb
          source_id: s_j5ScZiQ59gc9Fogn1J8GaE
          stance: supports
          locator: CBDB:639264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639264）
          source: &a1
            id: s_j5ScZiQ59gc9Fogn1J8GaE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛仁（CBDB 639264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639264&o=json
            external_identifier: CBDB:639264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_78ACkJus5MSFC19mBkBMoj
        subject_person_id: p_MJMiFRtHjs5gJTmoDFVqhn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛仁，清人物。籍贯富順，曾任知縣。（中国历代人物传记资料库 CBDB 639264）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mgizegp4pU_fx4vamfzPcd
          claim_id: c_78ACkJus5MSFC19mBkBMoj
          source_id: s_j5ScZiQ59gc9Fogn1J8GaE
          stance: supports
          locator: CBDB:639264
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

# 王瀛仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛仁 | accepted |
| bio.summary | 王瀛仁，清人物。籍贯富順，曾任知縣。（中国历代人物传记资料库 CBDB 639264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀛仁（CBDB 639264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639264&o=json)
