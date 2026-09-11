---
schema: wang-person/v1
id: p_W4aorCFejkUjhKpXEEiX72
status: active
merged_into: null
display_name: 王尹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qQT9DSGz5m4XcF4oWkXAJg
        subject_person_id: p_W4aorCFejkUjhKpXEEiX72
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XPFuTCzWefGNTEphZWhYME
          claim_id: c_qQT9DSGz5m4XcF4oWkXAJg
          source_id: s_M7J9zWezRQyTyKdN8NFkBG
          stance: supports
          locator: CBDB:38480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38480）
          source: &a1
            id: s_M7J9zWezRQyTyKdN8NFkBG
            source_type: api_record
            title: 中国历代人物传记资料库：王尹（CBDB 38480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38480&o=json
            external_identifier: CBDB:38480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iYuoMeZHd5zMy9G1d8PBNF
        subject_person_id: p_W4aorCFejkUjhKpXEEiX72
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尹，宋人物。籍贯臨海，入仕進士，曾任大理寺丞、宣教郎。（中国历代人物传记资料库 CBDB 38480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-bcBEtY6TjCgmdolSNnIs
          claim_id: c_iYuoMeZHd5zMy9G1d8PBNF
          source_id: s_M7J9zWezRQyTyKdN8NFkBG
          stance: supports
          locator: CBDB:38480
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

# 王尹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尹 | accepted |
| bio.summary | 王尹，宋人物。籍贯臨海，入仕進士，曾任大理寺丞、宣教郎。（中国历代人物传记资料库 CBDB 38480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尹（CBDB 38480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38480&o=json)
