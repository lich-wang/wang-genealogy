---
schema: wang-person/v1
id: p_NP2A5pkQy4Coy8RvLsFQwk
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_41mB2QK2vGPZs3z2pVKx1T
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CLme5deHKmwrZiQ7QqbyTA
          claim_id: c_41mB2QK2vGPZs3z2pVKx1T
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
          stance: supports
          locator: CBDB:193396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193396）
          source: &a1
            id: s_xDTM8vHu84Qgy93KxUwgwb
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 193396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193396&o=json
            external_identifier: CBDB:193396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WFAsMsXTw5XMwDaD29oTBT
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uQ5kAwrUq4V1sASxBPvU2E
          claim_id: c_WFAsMsXTw5XMwDaD29oTBT
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
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
        id: c_8LpJjxKT5hoE3Gjz39SAbH
        subject_person_id: p_NP2A5pkQy4Coy8RvLsFQwk
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
        - id: cs_hb6J56umo9T3s7DE65G8PL
          claim_id: c_8LpJjxKT5hoE3Gjz39SAbH
          source_id: s_xDTM8vHu84Qgy93KxUwgwb
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| death.date | 714年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 193396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193396&o=json)
