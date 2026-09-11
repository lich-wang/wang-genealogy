---
schema: wang-person/v1
id: p_bykgL6tcL52LnJGKoDhcDQ
status: active
merged_into: null
display_name: 王鋻源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DyNKetbZ3FJML1FwbHDxoS
        subject_person_id: p_bykgL6tcL52LnJGKoDhcDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋻源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tUKAj43XBoCyFAH4N5pDEe
          claim_id: c_DyNKetbZ3FJML1FwbHDxoS
          source_id: s_n2WRjztTrPT7zN2UapYuyu
          stance: supports
          locator: CBDB:640571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640571）
          source: &a1
            id: s_n2WRjztTrPT7zN2UapYuyu
            source_type: api_record
            title: 中国历代人物传记资料库：王鋻源（CBDB 640571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640571&o=json
            external_identifier: CBDB:640571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a6bQxGKaEAYdMj2Ps7JC3Q
        subject_person_id: p_bykgL6tcL52LnJGKoDhcDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋻源，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 640571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vJDAuL2AB3iTiiCBaXX9SE
          claim_id: c_a6bQxGKaEAYdMj2Ps7JC3Q
          source_id: s_n2WRjztTrPT7zN2UapYuyu
          stance: supports
          locator: CBDB:640571
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

# 王鋻源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鋻源 | accepted |
| bio.summary | 王鋻源，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 640571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鋻源（CBDB 640571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640571&o=json)
