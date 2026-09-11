---
schema: wang-person/v1
id: p_Dp9zXLn3JELaphxYojpbwA
status: active
merged_into: null
display_name: 王濟姜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CH3ALkE5xU4ToFZ69d8kDg
        subject_person_id: p_Dp9zXLn3JELaphxYojpbwA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟姜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yiBKU7YyxZUvBEbdN8AZgL
          claim_id: c_CH3ALkE5xU4ToFZ69d8kDg
          source_id: s_KB4FjzqWtn6UoUQoNHDKrw
          stance: supports
          locator: CBDB:639241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639241）
          source: &a1
            id: s_KB4FjzqWtn6UoUQoNHDKrw
            source_type: api_record
            title: 中国历代人物传记资料库：王濟姜（CBDB 639241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639241&o=json
            external_identifier: CBDB:639241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XkZ9z8K1KRXWKiahuyD6jw
        subject_person_id: p_Dp9zXLn3JELaphxYojpbwA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟姜，清人物。籍贯秦州直隸州直轄地方，入仕廩生，曾任學正。（中国历代人物传记资料库 CBDB 639241）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-Z4YHtly0gpQ99syfgKw_y
          claim_id: c_XkZ9z8K1KRXWKiahuyD6jw
          source_id: s_KB4FjzqWtn6UoUQoNHDKrw
          stance: supports
          locator: CBDB:639241
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

# 王濟姜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟姜 | accepted |
| bio.summary | 王濟姜，清人物。籍贯秦州直隸州直轄地方，入仕廩生，曾任學正。（中国历代人物传记资料库 CBDB 639241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟姜（CBDB 639241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639241&o=json)
