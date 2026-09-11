---
schema: wang-person/v1
id: p_JRNXV236M9H6uA15akL81F
status: active
merged_into: null
display_name: 王初
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJMhmJwSUSAYCJ2W3ryQmw
        subject_person_id: p_JRNXV236M9H6uA15akL81F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vEvAHHv11fmJoywNeCAXjG
          claim_id: c_uJMhmJwSUSAYCJ2W3ryQmw
          source_id: s_8PBXU3kpLFCzXjNM6gBR6b
          stance: supports
          locator: CBDB:282818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282818）
          source: &a1
            id: s_8PBXU3kpLFCzXjNM6gBR6b
            source_type: api_record
            title: 中国历代人物传记资料库：王初（CBDB 282818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json
            external_identifier: CBDB:282818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eig4TxPS5KbzG985xqRRK
        subject_person_id: p_JRNXV236M9H6uA15akL81F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王初，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5vwON_I5FABY1qby9Qgr0P
          claim_id: c_4eig4TxPS5KbzG985xqRRK
          source_id: s_8PBXU3kpLFCzXjNM6gBR6b
          stance: supports
          locator: CBDB:282818
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

# 王初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王初 | accepted |
| bio.summary | 王初，明人物。正德十二年進士，籍贯建平。（中国历代人物传记资料库 CBDB 282818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王初（CBDB 282818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282818&o=json)
