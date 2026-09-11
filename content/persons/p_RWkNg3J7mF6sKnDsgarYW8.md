---
schema: wang-person/v1
id: p_RWkNg3J7mF6sKnDsgarYW8
status: active
merged_into: null
display_name: 王以晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iMukMiovVhgoNGM5pKxp8R
        subject_person_id: p_RWkNg3J7mF6sKnDsgarYW8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hrn8c72uWZqjGp937j4zvn
          claim_id: c_iMukMiovVhgoNGM5pKxp8R
          source_id: s_Rmnusery1JXbG8JhcN6NFb
          stance: supports
          locator: CBDB:635922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635922）
          source: &a1
            id: s_Rmnusery1JXbG8JhcN6NFb
            source_type: api_record
            title: 中国历代人物传记资料库：王以晉（CBDB 635922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635922&o=json
            external_identifier: CBDB:635922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aQT3eBphGzvVEB9u1YyLLC
        subject_person_id: p_RWkNg3J7mF6sKnDsgarYW8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以晉，清人物。籍贯咸寧，曾任知縣。（中国历代人物传记资料库 CBDB 635922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oCLu__6HRePV0QGM0oV8ER
          claim_id: c_aQT3eBphGzvVEB9u1YyLLC
          source_id: s_Rmnusery1JXbG8JhcN6NFb
          stance: supports
          locator: CBDB:635922
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

# 王以晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以晉 | accepted |
| bio.summary | 王以晉，清人物。籍贯咸寧，曾任知縣。（中国历代人物传记资料库 CBDB 635922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以晉（CBDB 635922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635922&o=json)
