---
schema: wang-person/v1
id: p_Ev6vLpNkijVdN2jsxbY58J
status: active
merged_into: null
display_name: 王琥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7cizdLn3gADT6btYetvpz1
        subject_person_id: p_Ev6vLpNkijVdN2jsxbY58J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mdz5iHSJuVZ2faRqdTw4nT
          claim_id: c_7cizdLn3gADT6btYetvpz1
          source_id: s_Y3DK5Y99syBrK6wMZNwRDF
          stance: supports
          locator: CBDB:491224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491224）
          source: &a1
            id: s_Y3DK5Y99syBrK6wMZNwRDF
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 491224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491224&o=json
            external_identifier: CBDB:491224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FZvJPYpZ229LY7wqU8jdKp
        subject_person_id: p_Ev6vLpNkijVdN2jsxbY58J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琥，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 491224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77sQWFQr8EjBGOIEtUFBD8
          claim_id: c_FZvJPYpZ229LY7wqU8jdKp
          source_id: s_Y3DK5Y99syBrK6wMZNwRDF
          stance: supports
          locator: CBDB:491224
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

# 王琥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琥 | accepted |
| bio.summary | 王琥，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 491224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琥（CBDB 491224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491224&o=json)
