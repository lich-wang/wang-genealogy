---
schema: wang-person/v1
id: p_f51bxXKQw2mjie6XM6275f
status: active
merged_into: null
display_name: 王景淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_urVjk3Gfodc5tT9PxtqZVw
        subject_person_id: p_f51bxXKQw2mjie6XM6275f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PRFNikBN4J6hsLPzasJEz
          claim_id: c_urVjk3Gfodc5tT9PxtqZVw
          source_id: s_Q7bYMsNX8QEHszeQGG5h1H
          stance: supports
          locator: CBDB:343491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343491）
          source: &a1
            id: s_Q7bYMsNX8QEHszeQGG5h1H
            source_type: api_record
            title: 中国历代人物传记资料库：王景淳（CBDB 343491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343491&o=json
            external_identifier: CBDB:343491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cc1o9yKbc2toB4HcuU8oxb
        subject_person_id: p_f51bxXKQw2mjie6XM6275f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景淳，清人物。明清進士進士，籍贯萍鄉，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 343491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VSUY5V99R0su3MJPh6Ttpx
          claim_id: c_Cc1o9yKbc2toB4HcuU8oxb
          source_id: s_Q7bYMsNX8QEHszeQGG5h1H
          stance: supports
          locator: CBDB:343491
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

# 王景淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景淳 | accepted |
| bio.summary | 王景淳，清人物。明清進士進士，籍贯萍鄉，入仕進士，曾任編修、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 343491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景淳（CBDB 343491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343491&o=json)
