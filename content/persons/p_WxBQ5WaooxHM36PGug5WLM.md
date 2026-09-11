---
schema: wang-person/v1
id: p_WxBQ5WaooxHM36PGug5WLM
status: active
merged_into: null
display_name: 王以宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3hgtDA9xn97kEcqB3uWW4
        subject_person_id: p_WxBQ5WaooxHM36PGug5WLM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jQZN6stcZqG83bz9i8XV6T
          claim_id: c_K3hgtDA9xn97kEcqB3uWW4
          source_id: s_nhBbEViN9uhgR5KL2Wce8c
          stance: supports
          locator: CBDB:635918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635918）
          source: &a1
            id: s_nhBbEViN9uhgR5KL2Wce8c
            source_type: api_record
            title: 中国历代人物传记资料库：王以宣（CBDB 635918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635918&o=json
            external_identifier: CBDB:635918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nD8P11L99FjthXw7VGTYBZ
        subject_person_id: p_WxBQ5WaooxHM36PGug5WLM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以宣，清人物。籍贯錢塘，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 635918）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KZBUBIxQB84TmHbA0m8fXm
          claim_id: c_nD8P11L99FjthXw7VGTYBZ
          source_id: s_nhBbEViN9uhgR5KL2Wce8c
          stance: supports
          locator: CBDB:635918
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

# 王以宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以宣 | accepted |
| bio.summary | 王以宣，清人物。籍贯錢塘，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 635918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以宣（CBDB 635918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635918&o=json)
