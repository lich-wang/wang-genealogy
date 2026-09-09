---
schema: wang-person/v1
id: p_FnFskD1UqWTxkasyNhPSZb
status: active
merged_into: null
display_name: 王桂華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oY3reRtUsbkEUryAyHPQYj
        subject_person_id: p_FnFskD1UqWTxkasyNhPSZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j8pJkR6nV7E1LyoSm6FmAs
          claim_id: c_oY3reRtUsbkEUryAyHPQYj
          source_id: s_wtwYsY1v58w6fLFugb3br4
          stance: supports
          locator: CBDB:145063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145063）
          source: &a1
            id: s_wtwYsY1v58w6fLFugb3br4
            source_type: api_record
            title: 中国历代人物传记资料库：王桂華（CBDB 145063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145063&o=json
            external_identifier: CBDB:145063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kcHrxTyoEqpFHVWuaXv8UW
        subject_person_id: p_FnFskD1UqWTxkasyNhPSZb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FrXPW9x5fehxWjF71rNmHx
          claim_id: c_kcHrxTyoEqpFHVWuaXv8UW
          source_id: s_wtwYsY1v58w6fLFugb3br4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LxMz4GLYCULs86djCZjP57
        subject_person_id: p_FnFskD1UqWTxkasyNhPSZb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RVuwPRZU3jwL7MLJW8o1b8
          claim_id: c_LxMz4GLYCULs86djCZjP57
          source_id: s_wtwYsY1v58w6fLFugb3br4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ALWmkhHm55kGWarVxbLb4e
        subject_person_id: p_FnFskD1UqWTxkasyNhPSZb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WNjx29bJQqZuenr6THAsQe
          claim_id: c_ALWmkhHm55kGWarVxbLb4e
          source_id: s_wtwYsY1v58w6fLFugb3br4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王桂華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂華 | accepted |
| birth.date | 848年 | accepted |
| death.date | 875年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂華（CBDB 145063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145063&o=json)
