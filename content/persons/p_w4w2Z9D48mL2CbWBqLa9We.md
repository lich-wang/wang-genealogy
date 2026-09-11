---
schema: wang-person/v1
id: p_w4w2Z9D48mL2CbWBqLa9We
status: active
merged_into: null
display_name: 王秉湘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAUPa5ExTqmeQZXPnfEsox
        subject_person_id: p_w4w2Z9D48mL2CbWBqLa9We
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8RqzfJQgRadFKwMG8Yj9vx
          claim_id: c_dAUPa5ExTqmeQZXPnfEsox
          source_id: s_seYbu8M4KLVjVKwUhws63q
          stance: supports
          locator: CBDB:639655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639655）
          source: &a1
            id: s_seYbu8M4KLVjVKwUhws63q
            source_type: api_record
            title: 中国历代人物传记资料库：王秉湘（CBDB 639655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639655&o=json
            external_identifier: CBDB:639655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TKEJcDiBH7Tbyk8Dx258U3
        subject_person_id: p_w4w2Z9D48mL2CbWBqLa9We
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉湘，清人物。籍贯奉天府，曾任知縣。（中国历代人物传记资料库 CBDB 639655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NW1gJRaC23JoFl86ym6-ql
          claim_id: c_TKEJcDiBH7Tbyk8Dx258U3
          source_id: s_seYbu8M4KLVjVKwUhws63q
          stance: supports
          locator: CBDB:639655
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

# 王秉湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉湘 | accepted |
| bio.summary | 王秉湘，清人物。籍贯奉天府，曾任知縣。（中国历代人物传记资料库 CBDB 639655） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉湘（CBDB 639655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639655&o=json)
