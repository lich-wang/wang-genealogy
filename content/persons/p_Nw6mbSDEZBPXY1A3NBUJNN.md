---
schema: wang-person/v1
id: p_Nw6mbSDEZBPXY1A3NBUJNN
status: active
merged_into: null
display_name: 王元駒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N3DZG1EuzXNVTEtCiGPG3m
        subject_person_id: p_Nw6mbSDEZBPXY1A3NBUJNN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元駒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3DQxULCt8ZgYEgfapwRzS
          claim_id: c_N3DZG1EuzXNVTEtCiGPG3m
          source_id: s_KAeJJjkTD2YM1w3B5Q7feg
          stance: supports
          locator: CBDB:636184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636184）
          source: &a1
            id: s_KAeJJjkTD2YM1w3B5Q7feg
            source_type: api_record
            title: 中国历代人物传记资料库：王元駒（CBDB 636184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636184&o=json
            external_identifier: CBDB:636184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w1mXkK7dDmm5tCoQjKBmMN
        subject_person_id: p_Nw6mbSDEZBPXY1A3NBUJNN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元駒，清人物。籍贯金谿，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c_1Ap0L44IVtYdgHOjGjuL
          claim_id: c_w1mXkK7dDmm5tCoQjKBmMN
          source_id: s_KAeJJjkTD2YM1w3B5Q7feg
          stance: supports
          locator: CBDB:636184
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

# 王元駒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元駒 | accepted |
| bio.summary | 王元駒，清人物。籍贯金谿，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元駒（CBDB 636184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636184&o=json)
