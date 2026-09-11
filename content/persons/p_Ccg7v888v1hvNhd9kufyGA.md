---
schema: wang-person/v1
id: p_Ccg7v888v1hvNhd9kufyGA
status: active
merged_into: null
display_name: 王致彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XK5uNsoWFWMsEVP9g3ikH2
        subject_person_id: p_Ccg7v888v1hvNhd9kufyGA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Va5kQQdJqqrjqhfmGLSr48
          claim_id: c_XK5uNsoWFWMsEVP9g3ikH2
          source_id: s_X9WHcQEJCQPekxzDLA3W33
          stance: supports
          locator: CBDB:640018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640018）
          source: &a1
            id: s_X9WHcQEJCQPekxzDLA3W33
            source_type: api_record
            title: 中国历代人物传记资料库：王致彥（CBDB 640018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640018&o=json
            external_identifier: CBDB:640018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JanKGKYuYNjwNpuSJ4XPCN
        subject_person_id: p_Ccg7v888v1hvNhd9kufyGA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致彥，清人物。籍贯豐潤，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ojjb_PC3Z0zBWmrzigZDal
          claim_id: c_JanKGKYuYNjwNpuSJ4XPCN
          source_id: s_X9WHcQEJCQPekxzDLA3W33
          stance: supports
          locator: CBDB:640018
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

# 王致彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致彥 | accepted |
| bio.summary | 王致彥，清人物。籍贯豐潤，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致彥（CBDB 640018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640018&o=json)
