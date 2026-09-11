---
schema: wang-person/v1
id: p_WkwyUq1kUNkHn7U42KbtWY
status: active
merged_into: null
display_name: 王以謹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJAkTf99Kg3UHfRWkyFD95
        subject_person_id: p_WkwyUq1kUNkHn7U42KbtWY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znRy9S9dQ4p6P16gHhcN8L
          claim_id: c_HJAkTf99Kg3UHfRWkyFD95
          source_id: s_XzR57P1U925YF2TyxFgAAD
          stance: supports
          locator: CBDB:635929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635929）
          source: &a1
            id: s_XzR57P1U925YF2TyxFgAAD
            source_type: api_record
            title: 中国历代人物传记资料库：王以謹（CBDB 635929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635929&o=json
            external_identifier: CBDB:635929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2E4C96DY8iP9ufd8kXn5HS
        subject_person_id: p_WkwyUq1kUNkHn7U42KbtWY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以謹，清人物。籍贯膠州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QhN0lgmLd9fxjZi7XKaR2L
          claim_id: c_2E4C96DY8iP9ufd8kXn5HS
          source_id: s_XzR57P1U925YF2TyxFgAAD
          stance: supports
          locator: CBDB:635929
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

# 王以謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以謹 | accepted |
| bio.summary | 王以謹，清人物。籍贯膠州，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以謹（CBDB 635929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635929&o=json)
