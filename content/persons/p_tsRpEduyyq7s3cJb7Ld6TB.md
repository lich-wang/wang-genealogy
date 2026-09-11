---
schema: wang-person/v1
id: p_tsRpEduyyq7s3cJb7Ld6TB
status: active
merged_into: null
display_name: 王尚志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XxurwMYxoGqqHcSCJnhgN9
        subject_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WEePxrode9CvmaCMZWd9Q
          claim_id: c_XxurwMYxoGqqHcSCJnhgN9
          source_id: s_bfgmZ52uA4UpSvaNFGAtPb
          stance: supports
          locator: CBDB:320456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320456）
          source: &a1
            id: s_bfgmZ52uA4UpSvaNFGAtPb
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 320456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json
            external_identifier: CBDB:320456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3XQH8emP1vtMD8eNUEgNq
        subject_person_id: p_tsRpEduyyq7s3cJb7Ld6TB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚志，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9QE6prsKkfmn3ZMdDRt9HK
          claim_id: c_V3XQH8emP1vtMD8eNUEgNq
          source_id: s_bfgmZ52uA4UpSvaNFGAtPb
          stance: supports
          locator: CBDB:320456
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

# 王尚志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚志 | accepted |
| bio.summary | 王尚志，明人物。嘉靖三十五年進士，籍贯昌黎。（中国历代人物传记资料库 CBDB 320456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚志（CBDB 320456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320456&o=json)
