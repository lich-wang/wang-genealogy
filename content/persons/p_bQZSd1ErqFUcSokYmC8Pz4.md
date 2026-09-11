---
schema: wang-person/v1
id: p_bQZSd1ErqFUcSokYmC8Pz4
status: active
merged_into: null
display_name: 王俁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CSYmFh2KMALw8TgTKEt7eH
        subject_person_id: p_bQZSd1ErqFUcSokYmC8Pz4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZfutXDthJiY1ZxW3GgBhay
          claim_id: c_CSYmFh2KMALw8TgTKEt7eH
          source_id: s_uiQ2Ffha5wmAgUzEXbrWyh
          stance: supports
          locator: CBDB:100708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100708）
          source: &a1
            id: s_uiQ2Ffha5wmAgUzEXbrWyh
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 100708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100708&o=json
            external_identifier: CBDB:100708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gxdJkTM8UK4NMV6931DH3w
        subject_person_id: p_bQZSd1ErqFUcSokYmC8Pz4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁，元人物。籍贯東平路，曾任肅政廉訪司副使、肅政廉訪司僉事、諸路總管府總管。（中国历代人物传记资料库 CBDB 100708）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7gzEF8oSA7M7VM9xhYsY5r
          claim_id: c_gxdJkTM8UK4NMV6931DH3w
          source_id: s_uiQ2Ffha5wmAgUzEXbrWyh
          stance: supports
          locator: CBDB:100708
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

# 王俁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俁 | accepted |
| bio.summary | 王俁，元人物。籍贯東平路，曾任肅政廉訪司副使、肅政廉訪司僉事、諸路總管府總管。（中国历代人物传记资料库 CBDB 100708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俁（CBDB 100708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100708&o=json)
