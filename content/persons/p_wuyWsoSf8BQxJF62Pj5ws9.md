---
schema: wang-person/v1
id: p_wuyWsoSf8BQxJF62Pj5ws9
status: active
merged_into: null
display_name: 王懷玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AUbFEPkxysgjJAcyqVbWNB
        subject_person_id: p_wuyWsoSf8BQxJF62Pj5ws9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSDLLFyX6Y7QENVAgYedD7
          claim_id: c_AUbFEPkxysgjJAcyqVbWNB
          source_id: s_pVV7oHoWAFsvdbCL2uChk5
          stance: supports
          locator: CBDB:493997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493997）
          source: &a1
            id: s_pVV7oHoWAFsvdbCL2uChk5
            source_type: api_record
            title: 中国历代人物传记资料库：王懷玉（CBDB 493997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493997&o=json
            external_identifier: CBDB:493997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sn44FZMzrtY1uwRjZGwtmL
        subject_person_id: p_wuyWsoSf8BQxJF62Pj5ws9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷玉，清人物。曾任典史。（中国历代人物传记资料库 CBDB 493997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tgEDaSyY_K89W_rs5oEXo5
          claim_id: c_Sn44FZMzrtY1uwRjZGwtmL
          source_id: s_pVV7oHoWAFsvdbCL2uChk5
          stance: supports
          locator: CBDB:493997
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

# 王懷玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷玉 | accepted |
| bio.summary | 王懷玉，清人物。曾任典史。（中国历代人物传记资料库 CBDB 493997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷玉（CBDB 493997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493997&o=json)
