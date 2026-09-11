---
schema: wang-person/v1
id: p_L4CSHdxkWqSqgANjUDJoa6
status: active
merged_into: null
display_name: 王善業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E5DBKrUPxBNPBB7hzAazHo
        subject_person_id: p_L4CSHdxkWqSqgANjUDJoa6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dHQd7zn51KfRL3oXBogPYU
          claim_id: c_E5DBKrUPxBNPBB7hzAazHo
          source_id: s_L2doaBUDNu2mZ8YVnDxWJW
          stance: supports
          locator: CBDB:636576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636576）
          source: &a1
            id: s_L2doaBUDNu2mZ8YVnDxWJW
            source_type: api_record
            title: 中国历代人物传记资料库：王善業（CBDB 636576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636576&o=json
            external_identifier: CBDB:636576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UjDPPabYBC43Ymw7CTR7dc
        subject_person_id: p_L4CSHdxkWqSqgANjUDJoa6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善業，清人物。籍贯錢塘，曾任知縣。（中国历代人物传记资料库 CBDB 636576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X3nfACN3KgLqqoq8xyoBVj
          claim_id: c_UjDPPabYBC43Ymw7CTR7dc
          source_id: s_L2doaBUDNu2mZ8YVnDxWJW
          stance: supports
          locator: CBDB:636576
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

# 王善業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善業 | accepted |
| bio.summary | 王善業，清人物。籍贯錢塘，曾任知縣。（中国历代人物传记资料库 CBDB 636576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善業（CBDB 636576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636576&o=json)
