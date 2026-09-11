---
schema: wang-person/v1
id: p_J6LGy6AKfr8TQ2KRftRZAN
status: active
merged_into: null
display_name: 王業洸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gEkdsZWayc79dhU4FSW6Bh
        subject_person_id: p_J6LGy6AKfr8TQ2KRftRZAN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業洸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NnK5hEfLqbTUFVH6nydKqR
          claim_id: c_gEkdsZWayc79dhU4FSW6Bh
          source_id: s_51Zt7PvH9jE9WSVzmu5DkH
          stance: supports
          locator: CBDB:556673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556673）
          source: &a1
            id: s_51Zt7PvH9jE9WSVzmu5DkH
            source_type: api_record
            title: 中国历代人物传记资料库：王業洸（CBDB 556673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556673&o=json
            external_identifier: CBDB:556673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z3H6N1KjYEPN7Uc6KFMsrR
        subject_person_id: p_J6LGy6AKfr8TQ2KRftRZAN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業洸，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2yKTvodG-fo40I7RKp9TCH
          claim_id: c_Z3H6N1KjYEPN7Uc6KFMsrR
          source_id: s_51Zt7PvH9jE9WSVzmu5DkH
          stance: supports
          locator: CBDB:556673
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

# 王業洸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業洸 | accepted |
| bio.summary | 王業洸，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業洸（CBDB 556673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556673&o=json)
