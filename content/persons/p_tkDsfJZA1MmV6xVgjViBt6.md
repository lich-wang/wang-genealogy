---
schema: wang-person/v1
id: p_tkDsfJZA1MmV6xVgjViBt6
status: active
merged_into: null
display_name: 王汝壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8mNr2gaJChTgMHoRTdBmp
        subject_person_id: p_tkDsfJZA1MmV6xVgjViBt6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SFbLZKfh3jFQ6Po5AL6aio
          claim_id: c_J8mNr2gaJChTgMHoRTdBmp
          source_id: s_t1ex2LhjxNsqh4nw85WGLV
          stance: supports
          locator: CBDB:639006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639006）
          source: &a1
            id: s_t1ex2LhjxNsqh4nw85WGLV
            source_type: api_record
            title: 中国历代人物传记资料库：王汝壁（CBDB 639006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639006&o=json
            external_identifier: CBDB:639006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2dFUzgAuYyNh8EHFJv18iM
        subject_person_id: p_tkDsfJZA1MmV6xVgjViBt6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝壁，清人物。籍贯銅梁，曾任知府。（中国历代人物传记资料库 CBDB 639006）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xzIc5NDc-6Y0Ze7-RtO8lZ
          claim_id: c_2dFUzgAuYyNh8EHFJv18iM
          source_id: s_t1ex2LhjxNsqh4nw85WGLV
          stance: supports
          locator: CBDB:639006
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

# 王汝壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝壁 | accepted |
| bio.summary | 王汝壁，清人物。籍贯銅梁，曾任知府。（中国历代人物传记资料库 CBDB 639006） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝壁（CBDB 639006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639006&o=json)
