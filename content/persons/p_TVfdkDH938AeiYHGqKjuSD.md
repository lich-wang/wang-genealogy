---
schema: wang-person/v1
id: p_TVfdkDH938AeiYHGqKjuSD
status: active
merged_into: null
display_name: 王軒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74HxXfodSpnKG9egML1eLr
        subject_person_id: p_TVfdkDH938AeiYHGqKjuSD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNnKyBtFeV8RAB121XZxPY
          claim_id: c_74HxXfodSpnKG9egML1eLr
          source_id: s_nQ8X4nuVdGsmL6WwHNUsbF
          stance: supports
          locator: CBDB:471308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471308）
          source: &a1
            id: s_nQ8X4nuVdGsmL6WwHNUsbF
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 471308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471308&o=json
            external_identifier: CBDB:471308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FXmvGbuL8dYQZxECNeEm45
        subject_person_id: p_TVfdkDH938AeiYHGqKjuSD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軒，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 471308）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t0tqJhBRCwwrEGUFkgD7Ky
          claim_id: c_FXmvGbuL8dYQZxECNeEm45
          source_id: s_nQ8X4nuVdGsmL6WwHNUsbF
          stance: supports
          locator: CBDB:471308
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

# 王軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軒 | accepted |
| bio.summary | 王軒，清人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 471308） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軒（CBDB 471308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471308&o=json)
