---
schema: wang-person/v1
id: p_eEW7hHSgi5M9G3JPcBdrw8
status: active
merged_into: null
display_name: 王徽之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyXmCb9S8C6LvPQBNAgqt4
        subject_person_id: p_eEW7hHSgi5M9G3JPcBdrw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ubk4A7i8YZPENEwWjPgirc
          claim_id: c_tyXmCb9S8C6LvPQBNAgqt4
          source_id: s_neYKgCnFeP6U6tTPpfMr2C
          stance: supports
          locator: CBDB:25794
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25794）
          source: &a1
            id: s_neYKgCnFeP6U6tTPpfMr2C
            source_type: api_record
            title: 中国历代人物传记资料库：王徽之（CBDB 25794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25794&o=json
            external_identifier: CBDB:25794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5iC4sJNcLcJDwd6mq7zce5
        subject_person_id: p_eEW7hHSgi5M9G3JPcBdrw8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25794）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ME6PUjMK5VBmmn4r0hFVab
          claim_id: c_5iC4sJNcLcJDwd6mq7zce5
          source_id: s_neYKgCnFeP6U6tTPpfMr2C
          stance: supports
          locator: CBDB:25794
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

# 王徽之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽之 | accepted |
| bio.summary | 王徽之，東晉人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徽之（CBDB 25794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25794&o=json)
