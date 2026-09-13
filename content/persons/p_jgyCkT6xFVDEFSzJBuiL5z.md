---
schema: wang-person/v1
id: p_jgyCkT6xFVDEFSzJBuiL5z
status: active
merged_into: null
display_name: 王元默
cbdb_id: 314304
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gVj4P5h4DTbMy12ZLj3K7Q
        subject_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元默，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iLnKYDkeayqhlvIek5c9re
          claim_id: c_gVj4P5h4DTbMy12ZLj3K7Q
          source_id: s_naxRUmuuFj9tRpNEoM6GGv
          stance: supports
          locator: CBDB:314304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_naxRUmuuFj9tRpNEoM6GGv
            source_type: api_record
            title: 中国历代人物传记资料库：王元默（CBDB 314304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json
            external_identifier: CBDB:314304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DpsKzkLKATprkmHLGcH8dg
        subject_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KJFKZ52V8TKjd2pjazHnBJ
          claim_id: c_DpsKzkLKATprkmHLGcH8dg
          source_id: s_naxRUmuuFj9tRpNEoM6GGv
          stance: supports
          locator: CBDB:314304
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王元默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元默，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314304） | accepted |
| name.primary | 王元默 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元默（CBDB 314304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json)
