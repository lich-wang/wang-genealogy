---
schema: wang-person/v1
id: p_JL24KX9EgSU6MwT4sVZ9CQ
status: active
merged_into: null
display_name: 王輯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCn7ffBP5Nt1jtp5JVJTVi
        subject_person_id: p_JL24KX9EgSU6MwT4sVZ9CQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XTDLe9CZH8MJ17n3jRkk4s
          claim_id: c_eCn7ffBP5Nt1jtp5JVJTVi
          source_id: s_hd8TQkbKpS3nUhBJGr67an
          stance: supports
          locator: CBDB:640380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640380）
          source: &a1
            id: s_hd8TQkbKpS3nUhBJGr67an
            source_type: api_record
            title: 中国历代人物传记资料库：王輯（CBDB 640380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640380&o=json
            external_identifier: CBDB:640380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oDUEPKovYtYoBFqbEA5JBc
        subject_person_id: p_JL24KX9EgSU6MwT4sVZ9CQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯，清人物。籍贯雄縣，曾任典史。（中国历代人物传记资料库 CBDB 640380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vDgHwG7OG3it7oGHUs1HOC
          claim_id: c_oDUEPKovYtYoBFqbEA5JBc
          source_id: s_hd8TQkbKpS3nUhBJGr67an
          stance: supports
          locator: CBDB:640380
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

# 王輯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輯 | accepted |
| bio.summary | 王輯，清人物。籍贯雄縣，曾任典史。（中国历代人物传记资料库 CBDB 640380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輯（CBDB 640380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640380&o=json)
