---
schema: wang-person/v1
id: p_hBBebBqxEgLrPeWkKuGmip
status: active
merged_into: null
display_name: 王祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4v45UVKxZ4QmzWq2TA4DSm
        subject_person_id: p_hBBebBqxEgLrPeWkKuGmip
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5qxH4bXJTh8JKw47XuLMA
          claim_id: c_4v45UVKxZ4QmzWq2TA4DSm
          source_id: s_erhD8YSX6rQaLhVjLAsW5X
          stance: supports
          locator: CBDB:100776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100776）
          source: &a1
            id: s_erhD8YSX6rQaLhVjLAsW5X
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 100776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100776&o=json
            external_identifier: CBDB:100776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d119cf26oDgQbJwKMvoQDf
        subject_person_id: p_hBBebBqxEgLrPeWkKuGmip
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，元人物。身份为良吏;循吏，曾任縣尹。（中国历代人物传记资料库 CBDB 100776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yxjbgz3r9lnQMe_gVpE_OF
          claim_id: c_d119cf26oDgQbJwKMvoQDf
          source_id: s_erhD8YSX6rQaLhVjLAsW5X
          stance: supports
          locator: CBDB:100776
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

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，元人物。身份为良吏;循吏，曾任縣尹。（中国历代人物传记资料库 CBDB 100776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 100776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100776&o=json)
