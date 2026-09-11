---
schema: wang-person/v1
id: p_cYo8UV2hWc995mZyfUZuPR
status: active
merged_into: null
display_name: 王承爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aAvfbSpV5AFMNCFYm6FjJZ
        subject_person_id: p_cYo8UV2hWc995mZyfUZuPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4p3vRj4m3Z9oLNhPbLJM9K
          claim_id: c_aAvfbSpV5AFMNCFYm6FjJZ
          source_id: s_DLByNNsd2dcLeHsc5oNqmB
          stance: supports
          locator: CBDB:573901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573901）
          source: &a1
            id: s_DLByNNsd2dcLeHsc5oNqmB
            source_type: api_record
            title: 中国历代人物传记资料库：王承爵（CBDB 573901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573901&o=json
            external_identifier: CBDB:573901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DGfqHjVmir8witJobrYLKY
        subject_person_id: p_cYo8UV2hWc995mZyfUZuPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承爵，清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 573901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KLqtZmaerW4rg0xbqVxbY3
          claim_id: c_DGfqHjVmir8witJobrYLKY
          source_id: s_DLByNNsd2dcLeHsc5oNqmB
          stance: supports
          locator: CBDB:573901
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

# 王承爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承爵 | accepted |
| bio.summary | 王承爵，清人物。籍贯漢陽。（中国历代人物传记资料库 CBDB 573901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承爵（CBDB 573901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573901&o=json)
