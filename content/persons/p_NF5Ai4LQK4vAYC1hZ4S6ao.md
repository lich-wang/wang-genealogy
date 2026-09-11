---
schema: wang-person/v1
id: p_NF5Ai4LQK4vAYC1hZ4S6ao
status: active
merged_into: null
display_name: 王天敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bxhEB2DTEe2iwFkPGeXbNm
        subject_person_id: p_NF5Ai4LQK4vAYC1hZ4S6ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UYM8Jn6CDGCQWHh9NCoYHz
          claim_id: c_bxhEB2DTEe2iwFkPGeXbNm
          source_id: s_Q55S3aRsMeUiJZmDjEB95h
          stance: supports
          locator: CBDB:636930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636930）
          source: &a1
            id: s_Q55S3aRsMeUiJZmDjEB95h
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 636930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636930&o=json
            external_identifier: CBDB:636930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PpEK3jkZE3w5HS1mE8eba
        subject_person_id: p_NF5Ai4LQK4vAYC1hZ4S6ao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘，清人物。籍贯香山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cX2g7xq2w0xRyMwhOziNN8
          claim_id: c_3PpEK3jkZE3w5HS1mE8eba
          source_id: s_Q55S3aRsMeUiJZmDjEB95h
          stance: supports
          locator: CBDB:636930
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

# 王天敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天敘 | accepted |
| bio.summary | 王天敘，清人物。籍贯香山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 636930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636930&o=json)
