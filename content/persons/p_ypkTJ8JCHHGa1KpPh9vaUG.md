---
schema: wang-person/v1
id: p_ypkTJ8JCHHGa1KpPh9vaUG
status: active
merged_into: null
display_name: 王翬翎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wCF1BnojK6Q2QCL8tRBYKN
        subject_person_id: p_ypkTJ8JCHHGa1KpPh9vaUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬翎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Ze8a5ur2dFoahHxQo3b5c
          claim_id: c_wCF1BnojK6Q2QCL8tRBYKN
          source_id: s_8C3MkbAAWKqKATsUbVpUuQ
          stance: supports
          locator: CBDB:639899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639899）
          source: &a1
            id: s_8C3MkbAAWKqKATsUbVpUuQ
            source_type: api_record
            title: 中国历代人物传记资料库：王翬翎（CBDB 639899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639899&o=json
            external_identifier: CBDB:639899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WyhTkNJeyNHkzqtHn7vCbW
        subject_person_id: p_ypkTJ8JCHHGa1KpPh9vaUG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翬翎，清人物。籍贯廬江，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GX5KKerDZYFTiEWEx7lLRK
          claim_id: c_WyhTkNJeyNHkzqtHn7vCbW
          source_id: s_8C3MkbAAWKqKATsUbVpUuQ
          stance: supports
          locator: CBDB:639899
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

# 王翬翎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翬翎 | accepted |
| bio.summary | 王翬翎，清人物。籍贯廬江，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翬翎（CBDB 639899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639899&o=json)
