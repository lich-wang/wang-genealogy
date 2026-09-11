---
schema: wang-person/v1
id: p_xZJYGTL69KZSYhqoqrxCoP
status: active
merged_into: null
display_name: 王芝祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46T2d35XsoUAZQkqsMu3qh
        subject_person_id: p_xZJYGTL69KZSYhqoqrxCoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Ru7DzHMy8DuESPZ5ok2Wk
          claim_id: c_46T2d35XsoUAZQkqsMu3qh
          source_id: s_2RYVvJKs9rSdBJD2WRGhW4
          stance: supports
          locator: CBDB:61496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61496）
          source: &a1
            id: s_2RYVvJKs9rSdBJD2WRGhW4
            source_type: api_record
            title: 中国历代人物传记资料库：王芝祥（CBDB 61496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61496&o=json
            external_identifier: CBDB:61496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KBr1hTUmHF611F1AtQfa6D
        subject_person_id: p_xZJYGTL69KZSYhqoqrxCoP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wrdx6U1pt5zJg8YPpDHBig
          claim_id: c_KBr1hTUmHF611F1AtQfa6D
          source_id: s_2RYVvJKs9rSdBJD2WRGhW4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q5YpWfrDZwdeU6CFpWEYaz
        subject_person_id: p_xZJYGTL69KZSYhqoqrxCoP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1930年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fHFJxCP6bbcHusw9dtHKTT
          claim_id: c_Q5YpWfrDZwdeU6CFpWEYaz
          source_id: s_2RYVvJKs9rSdBJD2WRGhW4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GTn6s3ruyBbYJ7vTgEFYGa
        subject_person_id: p_xZJYGTL69KZSYhqoqrxCoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝祥（1858年—1930年），中華民國人物。籍贯通州，入仕鄉貢舉人，曾任知府、中書科中書。（中国历代人物传记资料库 CBDB 61496）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uSgMNQ-cV0cXHrMrlsJcgc
          claim_id: c_GTn6s3ruyBbYJ7vTgEFYGa
          source_id: s_2RYVvJKs9rSdBJD2WRGhW4
          stance: supports
          locator: CBDB:61496
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

# 王芝祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝祥 | accepted |
| birth.date | 1858年 | accepted |
| death.date | 1930年 | accepted |
| bio.summary | 王芝祥（1858年—1930年），中華民國人物。籍贯通州，入仕鄉貢舉人，曾任知府、中書科中書。（中国历代人物传记资料库 CBDB 61496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芝祥（CBDB 61496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61496&o=json)
