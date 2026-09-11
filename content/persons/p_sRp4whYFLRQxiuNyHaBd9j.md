---
schema: wang-person/v1
id: p_sRp4whYFLRQxiuNyHaBd9j
status: active
merged_into: null
display_name: 王鑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mV7M2LNTvyUvsg1Zzg3Anx
        subject_person_id: p_sRp4whYFLRQxiuNyHaBd9j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9So1h6SqjZZe7UJ8KXWwCc
          claim_id: c_mV7M2LNTvyUvsg1Zzg3Anx
          source_id: s_UHK4ZLyWGFh4JtujLkbEAy
          stance: supports
          locator: CBDB:335742
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335742）
          source: &a1
            id: s_UHK4ZLyWGFh4JtujLkbEAy
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 335742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335742&o=json
            external_identifier: CBDB:335742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEWXTcDeom55bND2aWnkc4
        subject_person_id: p_sRp4whYFLRQxiuNyHaBd9j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑛，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335742）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMVidAKUpwuGHt0r6G6dcj
          claim_id: c_oEWXTcDeom55bND2aWnkc4
          source_id: s_UHK4ZLyWGFh4JtujLkbEAy
          stance: supports
          locator: CBDB:335742
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

# 王鑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑛 | accepted |
| bio.summary | 王鑛，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335742） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑛（CBDB 335742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335742&o=json)
