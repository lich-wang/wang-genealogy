---
schema: wang-person/v1
id: p_odA7XGfZ4LEUz494X7RTRQ
status: active
merged_into: null
display_name: 王穎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xFZGW4YpJin5gX8TZ9Xodc
        subject_person_id: p_odA7XGfZ4LEUz494X7RTRQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ded5QWr4djMLi67HqnJRj
          claim_id: c_xFZGW4YpJin5gX8TZ9Xodc
          source_id: s_8h6XvsTy1DxZK3uWSE7Uyx
          stance: supports
          locator: CBDB:471556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471556）
          source: &a1
            id: s_8h6XvsTy1DxZK3uWSE7Uyx
            source_type: api_record
            title: 中国历代人物传记资料库：王穎（CBDB 471556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471556&o=json
            external_identifier: CBDB:471556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pSr4nYA7L5DDVaauy8C9Lq
        subject_person_id: p_odA7XGfZ4LEUz494X7RTRQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 471556）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_quxL2l2jfeiqsaKwoxRgKk
          claim_id: c_pSr4nYA7L5DDVaauy8C9Lq
          source_id: s_8h6XvsTy1DxZK3uWSE7Uyx
          stance: supports
          locator: CBDB:471556
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

# 王穎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穎 | accepted |
| bio.summary | 王穎，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 471556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王穎（CBDB 471556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471556&o=json)
