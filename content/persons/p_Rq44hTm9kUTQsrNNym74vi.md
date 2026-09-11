---
schema: wang-person/v1
id: p_Rq44hTm9kUTQsrNNym74vi
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BLHhSvkfEM7cdAZoneW7eV
        subject_person_id: p_Rq44hTm9kUTQsrNNym74vi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKQniMQ9oEvWaqZyPwMVK4
          claim_id: c_BLHhSvkfEM7cdAZoneW7eV
          source_id: s_rKk4zHoHedMZKbHAJqQ1PV
          stance: supports
          locator: CBDB:67259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67259）
          source: &a1
            id: s_rKk4zHoHedMZKbHAJqQ1PV
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67259&o=json
            external_identifier: CBDB:67259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hkSZk69vwB2GxrSC6nRS84
        subject_person_id: p_Rq44hTm9kUTQsrNNym74vi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_chYECxVDp1j1KSa7MLFngi
          claim_id: c_hkSZk69vwB2GxrSC6nRS84
          source_id: s_rKk4zHoHedMZKbHAJqQ1PV
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
        id: c_EqmorvmRuGwmGw5zBcAKDG
        subject_person_id: p_Rq44hTm9kUTQsrNNym74vi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（卒于1449年），明人物。籍贯海豐，入仕鄉貢舉人，曾任殿試讀卷官、副使、戶部尚書。（中国历代人物传记资料库 CBDB 67259）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QxlhHLftMgq8d3fn1jeYVn
          claim_id: c_EqmorvmRuGwmGw5zBcAKDG
          source_id: s_rKk4zHoHedMZKbHAJqQ1PV
          stance: supports
          locator: CBDB:67259
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| death.date | 1449年 | accepted |
| bio.summary | 王佐（卒于1449年），明人物。籍贯海豐，入仕鄉貢舉人，曾任殿試讀卷官、副使、戶部尚書。（中国历代人物传记资料库 CBDB 67259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 67259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67259&o=json)
