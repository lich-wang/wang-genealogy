---
schema: wang-person/v1
id: p_KP8iYKqqhiChrah382QKVR
status: active
merged_into: null
display_name: 王鍾岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T16TK9281sDtKpUnEp8V92
        subject_person_id: p_KP8iYKqqhiChrah382QKVR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LyYv4dT6u2Nd4Swv2SMYsX
          claim_id: c_T16TK9281sDtKpUnEp8V92
          source_id: s_fAfFoos3ZT2h1uZrj6kXCs
          stance: supports
          locator: CBDB:640669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640669）
          source: &a1
            id: s_fAfFoos3ZT2h1uZrj6kXCs
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾岱（CBDB 640669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640669&o=json
            external_identifier: CBDB:640669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XioyrBKN8NMo7NkTrPgN1p
        subject_person_id: p_KP8iYKqqhiChrah382QKVR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾岱，清人物。籍贯山陰，入仕監生，曾任知州、主簿。（中国历代人物传记资料库 CBDB 640669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j_2K87R1LgVd-G7UTPCiHz
          claim_id: c_XioyrBKN8NMo7NkTrPgN1p
          source_id: s_fAfFoos3ZT2h1uZrj6kXCs
          stance: supports
          locator: CBDB:640669
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

# 王鍾岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾岱 | accepted |
| bio.summary | 王鍾岱，清人物。籍贯山陰，入仕監生，曾任知州、主簿。（中国历代人物传记资料库 CBDB 640669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾岱（CBDB 640669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640669&o=json)
