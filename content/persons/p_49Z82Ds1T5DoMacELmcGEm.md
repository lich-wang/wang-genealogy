---
schema: wang-person/v1
id: p_49Z82Ds1T5DoMacELmcGEm
status: active
merged_into: null
display_name: 王敔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JSycAfC58hi6Sc2tWSeYFb
        subject_person_id: p_49Z82Ds1T5DoMacELmcGEm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bwaj1W6TznSYD6EWVytgmV
          claim_id: c_JSycAfC58hi6Sc2tWSeYFb
          source_id: s_R8dmK5e8ds1yH6XPsqv2Vm
          stance: supports
          locator: CBDB:482786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482786）
          source: &a1
            id: s_R8dmK5e8ds1yH6XPsqv2Vm
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 482786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482786&o=json
            external_identifier: CBDB:482786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sM7j3HuvQR4GuThRxJbvPX
        subject_person_id: p_49Z82Ds1T5DoMacELmcGEm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D9c3AYPznpaox8PLNG5Y4y
          claim_id: c_sM7j3HuvQR4GuThRxJbvPX
          source_id: s_R8dmK5e8ds1yH6XPsqv2Vm
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

# 王敔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敔（CBDB 482786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482786&o=json)
