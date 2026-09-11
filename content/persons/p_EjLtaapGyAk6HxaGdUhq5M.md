---
schema: wang-person/v1
id: p_EjLtaapGyAk6HxaGdUhq5M
status: active
merged_into: null
display_name: 王澹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2tATwwmxGULrUnESD31pyg
        subject_person_id: p_EjLtaapGyAk6HxaGdUhq5M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvZL7V148MH2ShynDA16jG
          claim_id: c_2tATwwmxGULrUnESD31pyg
          source_id: s_tiUYo8XWHtt7Zy2u85b5YP
          stance: supports
          locator: CBDB:639239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639239）
          source: &a1
            id: s_tiUYo8XWHtt7Zy2u85b5YP
            source_type: api_record
            title: 中国历代人物传记资料库：王澹（CBDB 639239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639239&o=json
            external_identifier: CBDB:639239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_omLGMiyGG8RM2LRWSXLLdk
        subject_person_id: p_EjLtaapGyAk6HxaGdUhq5M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王澹，清人物。籍贯郃陽，入仕貢生: 拔貢，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 639239）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TNziVvUwFBl2-TotUUKxfF
          claim_id: c_omLGMiyGG8RM2LRWSXLLdk
          source_id: s_tiUYo8XWHtt7Zy2u85b5YP
          stance: supports
          locator: CBDB:639239
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

# 王澹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澹 | accepted |
| bio.summary | 王澹，清人物。籍贯郃陽，入仕貢生: 拔貢，曾任知縣、復設教諭。（中国历代人物传记资料库 CBDB 639239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澹（CBDB 639239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639239&o=json)
