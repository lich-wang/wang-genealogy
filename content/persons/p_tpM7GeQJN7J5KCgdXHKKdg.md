---
schema: wang-person/v1
id: p_tpM7GeQJN7J5KCgdXHKKdg
status: active
merged_into: null
display_name: 王安題
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zad5MaE1BBUwWNBw9bKEGi
        subject_person_id: p_tpM7GeQJN7J5KCgdXHKKdg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安題
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6R3euTfqf56gLw4E43ukpX
          claim_id: c_Zad5MaE1BBUwWNBw9bKEGi
          source_id: s_yWgBHp6RK4PBVLP7mcK1hC
          stance: supports
          locator: CBDB:637084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637084）
          source: &a1
            id: s_yWgBHp6RK4PBVLP7mcK1hC
            source_type: api_record
            title: 中国历代人物传记资料库：王安題（CBDB 637084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637084&o=json
            external_identifier: CBDB:637084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i62SGAkcJ59XjXWm8zDkMR
        subject_person_id: p_tpM7GeQJN7J5KCgdXHKKdg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安題，清人物。籍贯寶慶府，曾任訓導。（中国历代人物传记资料库 CBDB 637084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6QjmAq84igxmQhGdeK2j0p
          claim_id: c_i62SGAkcJ59XjXWm8zDkMR
          source_id: s_yWgBHp6RK4PBVLP7mcK1hC
          stance: supports
          locator: CBDB:637084
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

# 王安題

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安題 | accepted |
| bio.summary | 王安題，清人物。籍贯寶慶府，曾任訓導。（中国历代人物传记资料库 CBDB 637084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安題（CBDB 637084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637084&o=json)
