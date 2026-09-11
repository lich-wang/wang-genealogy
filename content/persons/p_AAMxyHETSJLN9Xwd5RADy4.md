---
schema: wang-person/v1
id: p_AAMxyHETSJLN9Xwd5RADy4
status: active
merged_into: null
display_name: 王河賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KTFAD4qnegdM1yDFQPXDvc
        subject_person_id: p_AAMxyHETSJLN9Xwd5RADy4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王河賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pc5bRDLPrboWWEheaYFk2F
          claim_id: c_KTFAD4qnegdM1yDFQPXDvc
          source_id: s_9fKzooZVxMkVdFX6iZy55p
          stance: supports
          locator: CBDB:558538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558538）
          source: &a1
            id: s_9fKzooZVxMkVdFX6iZy55p
            source_type: api_record
            title: 中国历代人物传记资料库：王河賓（CBDB 558538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558538&o=json
            external_identifier: CBDB:558538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9v6jUVh147p9mqA14oF9S6
        subject_person_id: p_AAMxyHETSJLN9Xwd5RADy4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王河賓，明人物。籍贯內鄉，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 558538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_omAL6HHTJINXLm3Esw0ske
          claim_id: c_9v6jUVh147p9mqA14oF9S6
          source_id: s_9fKzooZVxMkVdFX6iZy55p
          stance: supports
          locator: CBDB:558538
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

# 王河賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王河賓 | accepted |
| bio.summary | 王河賓，明人物。籍贯內鄉，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 558538） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王河賓（CBDB 558538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558538&o=json)
