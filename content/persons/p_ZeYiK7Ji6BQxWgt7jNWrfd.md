---
schema: wang-person/v1
id: p_ZeYiK7Ji6BQxWgt7jNWrfd
status: active
merged_into: null
display_name: 王瓌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fHJUWAbsi8HKeL2Qcm4MY3
        subject_person_id: p_ZeYiK7Ji6BQxWgt7jNWrfd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dUCDbXWAvBH3516ATCjoUn
          claim_id: c_fHJUWAbsi8HKeL2Qcm4MY3
          source_id: s_xrkaHBJXvJzemDv6u79Qdw
          stance: supports
          locator: CBDB:382468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382468）
          source: &a1
            id: s_xrkaHBJXvJzemDv6u79Qdw
            source_type: api_record
            title: 中国历代人物传记资料库：王瓌（CBDB 382468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382468&o=json
            external_identifier: CBDB:382468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLbNxYwqF6do5akrRF3bhh
        subject_person_id: p_ZeYiK7Ji6BQxWgt7jNWrfd
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
        - id: cs_T2XHnFxq23BCTEamX1UabN
          claim_id: c_nLbNxYwqF6do5akrRF3bhh
          source_id: s_xrkaHBJXvJzemDv6u79Qdw
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

# 王瓌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓌 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓌（CBDB 382468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382468&o=json)
