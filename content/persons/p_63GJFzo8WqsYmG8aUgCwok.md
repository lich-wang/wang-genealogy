---
schema: wang-person/v1
id: p_63GJFzo8WqsYmG8aUgCwok
status: active
merged_into: null
display_name: 王義端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5xQJ5bmsexPrkYxVYXfjpu
        subject_person_id: p_63GJFzo8WqsYmG8aUgCwok
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vTyNpcuyVvWTg43bQeZHn5
          claim_id: c_5xQJ5bmsexPrkYxVYXfjpu
          source_id: s_BZduwUDcb6RpuwpVLbxMxw
          stance: supports
          locator: CBDB:149259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149259）
          source: &a1
            id: s_BZduwUDcb6RpuwpVLbxMxw
            source_type: api_record
            title: 中国历代人物传记资料库：王義端（CBDB 149259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149259&o=json
            external_identifier: CBDB:149259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CXMkCU856JwqWzKVRbXiN9
        subject_person_id: p_63GJFzo8WqsYmG8aUgCwok
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
        - id: cs_91oDhDowwTBUKi2wmRCPBM
          claim_id: c_CXMkCU856JwqWzKVRbXiN9
          source_id: s_BZduwUDcb6RpuwpVLbxMxw
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

# 王義端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義端 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義端（CBDB 149259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149259&o=json)
