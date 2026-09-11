---
schema: wang-person/v1
id: p_Vvc776j1hDVJ8ZFxe7SGro
status: active
merged_into: null
display_name: 王効贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_231gWNPFL5N6MP4mLfhQAs
        subject_person_id: p_Vvc776j1hDVJ8ZFxe7SGro
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王効贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bhjkNaRjyxnUYdyjis7gwr
          claim_id: c_231gWNPFL5N6MP4mLfhQAs
          source_id: s_dJqMcoqtFyB1uzVABhFNjj
          stance: supports
          locator: CBDB:636377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636377）
          source: &a1
            id: s_dJqMcoqtFyB1uzVABhFNjj
            source_type: api_record
            title: 中国历代人物传记资料库：王効贊（CBDB 636377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636377&o=json
            external_identifier: CBDB:636377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rDSdcL7EKRnPwz5yQMqbEB
        subject_person_id: p_Vvc776j1hDVJ8ZFxe7SGro
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王効贊，清人物。籍贯同州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gwUjH6DNY-JlgjKgDQIzGr
          claim_id: c_rDSdcL7EKRnPwz5yQMqbEB
          source_id: s_dJqMcoqtFyB1uzVABhFNjj
          stance: supports
          locator: CBDB:636377
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

# 王効贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王効贊 | accepted |
| bio.summary | 王効贊，清人物。籍贯同州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王効贊（CBDB 636377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636377&o=json)
