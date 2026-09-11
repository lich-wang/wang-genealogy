---
schema: wang-person/v1
id: p_SoPmfV5x1U6D3TR8PgaJaR
status: active
merged_into: null
display_name: 王錫章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Kr21TXYfXzcLcjGdZXtPK
        subject_person_id: p_SoPmfV5x1U6D3TR8PgaJaR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvFH7ipgF3wNr1F2ZoDAhJ
          claim_id: c_3Kr21TXYfXzcLcjGdZXtPK
          source_id: s_ZcK4js9U7a4gQGDL8GX6Wu
          stance: supports
          locator: CBDB:640638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640638）
          source: &a1
            id: s_ZcK4js9U7a4gQGDL8GX6Wu
            source_type: api_record
            title: 中国历代人物传记资料库：王錫章（CBDB 640638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640638&o=json
            external_identifier: CBDB:640638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.165Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GGqV85SU3sFHfDn5mt8J8U
        subject_person_id: p_SoPmfV5x1U6D3TR8PgaJaR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫章，清人物。籍贯新建，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pknrtBqcwIBJFADimHAkoa
          claim_id: c_GGqV85SU3sFHfDn5mt8J8U
          source_id: s_ZcK4js9U7a4gQGDL8GX6Wu
          stance: supports
          locator: CBDB:640638
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

# 王錫章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫章 | accepted |
| bio.summary | 王錫章，清人物。籍贯新建，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫章（CBDB 640638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640638&o=json)
