---
schema: wang-person/v1
id: p_qBkLzLY3tL8eJwh5cFYu89
status: active
merged_into: null
display_name: 王國珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5JntTSJBcMAQtD4kU528y7
        subject_person_id: p_qBkLzLY3tL8eJwh5cFYu89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKDvvhV7gBckbaEFXkssDB
          claim_id: c_5JntTSJBcMAQtD4kU528y7
          source_id: s_1zZuaMqTPA92BA8VwCMBL9
          stance: supports
          locator: CBDB:579275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（579275）
          source: &a1
            id: s_1zZuaMqTPA92BA8VwCMBL9
            source_type: api_record
            title: 中国历代人物传记资料库：王國珍（CBDB 579275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579275&o=json
            external_identifier: CBDB:579275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3xMHBJBmBk41MgwrPbx1Cw
        subject_person_id: p_qBkLzLY3tL8eJwh5cFYu89
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfFZhcYweMx1HVbNWg1jE3
          claim_id: c_3xMHBJBmBk41MgwrPbx1Cw
          source_id: s_1zZuaMqTPA92BA8VwCMBL9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o85AxfLuUt6QrTh9DgVZ9n
        subject_person_id: p_qBkLzLY3tL8eJwh5cFYu89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珍（生于1911年），清人物。籍贯保定府。（中国历代人物传记资料库 CBDB 579275）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dRxg_pizZ-NKcsqjw8NIFh
          claim_id: c_o85AxfLuUt6QrTh9DgVZ9n
          source_id: s_1zZuaMqTPA92BA8VwCMBL9
          stance: supports
          locator: CBDB:579275
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

# 王國珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國珍 | accepted |
| birth.date | 1911年 | accepted |
| bio.summary | 王國珍（生于1911年），清人物。籍贯保定府。（中国历代人物传记资料库 CBDB 579275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國珍（CBDB 579275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=579275&o=json)
