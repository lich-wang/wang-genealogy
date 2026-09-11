---
schema: wang-person/v1
id: p_cVADQiWpL5Qop3zLVMTWjt
status: active
merged_into: null
display_name: 王元傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oZ7GcLzDBuBgVMeMTucTvR
        subject_person_id: p_cVADQiWpL5Qop3zLVMTWjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Am5tzwEJKAHtz8zPc5aN1F
          claim_id: c_oZ7GcLzDBuBgVMeMTucTvR
          source_id: s_QYfX3fHGAfxYXyhjGqCaj9
          stance: supports
          locator: CBDB:636135
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636135）
          source: &a1
            id: s_QYfX3fHGAfxYXyhjGqCaj9
            source_type: api_record
            title: 中国历代人物传记资料库：王元傑（CBDB 636135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636135&o=json
            external_identifier: CBDB:636135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PmCJMEAaYKSUH1FDujRJac
        subject_person_id: p_cVADQiWpL5Qop3zLVMTWjt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王元傑，清人物。籍贯南陽，入仕貢生: 拔貢，曾任教授。（中国历代人物传记资料库 CBDB 636135）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0RZUao9M4VSIxgnMKlJCro
          claim_id: c_PmCJMEAaYKSUH1FDujRJac
          source_id: s_QYfX3fHGAfxYXyhjGqCaj9
          stance: supports
          locator: CBDB:636135
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

# 王元傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元傑 | accepted |
| bio.summary | 王元傑，清人物。籍贯南陽，入仕貢生: 拔貢，曾任教授。（中国历代人物传记资料库 CBDB 636135） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元傑（CBDB 636135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636135&o=json)
