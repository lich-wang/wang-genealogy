---
schema: wang-person/v1
id: p_mEqkfw184whpJN7RzU2c4E
status: active
merged_into: null
display_name: 王嘉擎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gN2gk1p9VUPWsgJvFUbAGd
        subject_person_id: p_mEqkfw184whpJN7RzU2c4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉擎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBDfKBkETpVVHMPnJMxP5Z
          claim_id: c_gN2gk1p9VUPWsgJvFUbAGd
          source_id: s_xVNqJKa7yQZZKAUjnWTgNg
          stance: supports
          locator: CBDB:691714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691714）
          source: &a1
            id: s_xVNqJKa7yQZZKAUjnWTgNg
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉擎（CBDB 691714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691714&o=json
            external_identifier: CBDB:691714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h3bs3MuPeJybf5ge9Wk37E
        subject_person_id: p_mEqkfw184whpJN7RzU2c4E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉擎，清人物。籍贯黟縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 691714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qO5hNscQg3EP196nCEKuY-
          claim_id: c_h3bs3MuPeJybf5ge9Wk37E
          source_id: s_xVNqJKa7yQZZKAUjnWTgNg
          stance: supports
          locator: CBDB:691714
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

# 王嘉擎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉擎 | accepted |
| bio.summary | 王嘉擎，清人物。籍贯黟縣，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 691714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉擎（CBDB 691714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691714&o=json)
