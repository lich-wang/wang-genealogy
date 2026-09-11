---
schema: wang-person/v1
id: p_sECJ51gu3j1JCMDkrh25ER
status: active
merged_into: null
display_name: 王從龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PnEQ7N5mHNzR7sHmmEtjv7
        subject_person_id: p_sECJ51gu3j1JCMDkrh25ER
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tpJyR9VToaAgU4C5sAczAC
          claim_id: c_PnEQ7N5mHNzR7sHmmEtjv7
          source_id: s_dGsapQXzZ1W9Gg7YdGEAGM
          stance: supports
          locator: CBDB:414539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414539）
          source: &a1
            id: s_dGsapQXzZ1W9Gg7YdGEAGM
            source_type: api_record
            title: 中国历代人物传记资料库：王從龍（CBDB 414539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414539&o=json
            external_identifier: CBDB:414539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fgfbcyFj4Pmb8XFdAF6LjZ
        subject_person_id: p_sECJ51gu3j1JCMDkrh25ER
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從龍，元人物。曾任主簿。（中国历代人物传记资料库 CBDB 414539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_81bqDrcyoaucSskf8rGvNs
          claim_id: c_fgfbcyFj4Pmb8XFdAF6LjZ
          source_id: s_dGsapQXzZ1W9Gg7YdGEAGM
          stance: supports
          locator: CBDB:414539
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

# 王從龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從龍 | accepted |
| bio.summary | 王從龍，元人物。曾任主簿。（中国历代人物传记资料库 CBDB 414539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從龍（CBDB 414539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414539&o=json)
