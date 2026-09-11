---
schema: wang-person/v1
id: p_H9fjvVRo3Bo7N13jg8TmCY
status: active
merged_into: null
display_name: 王利用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZcviYtwgEF7HjwFmCS477
        subject_person_id: p_H9fjvVRo3Bo7N13jg8TmCY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yRrYXSweqfaAAKH1puczDM
          claim_id: c_GZcviYtwgEF7HjwFmCS477
          source_id: s_etQFAkHYWNhe1kUbxFpBKK
          stance: supports
          locator: CBDB:101206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101206）
          source: &a1
            id: s_etQFAkHYWNhe1kUbxFpBKK
            source_type: api_record
            title: 中国历代人物传记资料库：王利用（CBDB 101206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101206&o=json
            external_identifier: CBDB:101206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1AYi9xGWmUdUnrQJ3AKiKm
        subject_person_id: p_H9fjvVRo3Bo7N13jg8TmCY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利用，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z6Ttg_n-Ms1MwKEYn2E9Tk
          claim_id: c_1AYi9xGWmUdUnrQJ3AKiKm
          source_id: s_etQFAkHYWNhe1kUbxFpBKK
          stance: supports
          locator: CBDB:101206
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

# 王利用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利用 | accepted |
| bio.summary | 王利用，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利用（CBDB 101206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101206&o=json)
